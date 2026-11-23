// Local server and AI proxy. Keeps your API key on the local server, not in browser JavaScript.
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const PORT = Number(process.env.PORT || 3030);
const ROOT = __dirname;
const MIME = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"};

function getLanIPs() {
  const nets = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        ips.push(net.address);
      }
    }
  }
  return ips;
}

function send(res, status, obj) {
  res.writeHead(status, {"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"POST, OPTIONS"});
  res.end(JSON.stringify(obj));
}
const server = http.createServer(async (req,res) => {
  if (req.method === "OPTIONS") { res.writeHead(204, {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"POST, OPTIONS"}); return res.end(); }
  if (req.url === "/api/info" && req.method === "GET") {
    return send(res, 200, { port: PORT, lan_ips: getLanIPs() });
  }
  if (req.url === "/api/ai" && req.method === "POST") {
    if (!process.env.OPENAI_API_KEY) return send(res, 503, {error:"Chưa tìm thấy OPENAI_API_KEY trong môi trường chạy server."});
    let body = "";
    req.on("data", chunk => { body += chunk; if (body.length > 100000) req.destroy(); });
    req.on("end", async () => {
      try {
        const {task="coach", text=""} = JSON.parse(body || "{}");
        if (!String(text).trim()) return send(res,400,{error:"Nội dung gửi lên đang trống."});
        const instruction = task === "correct"
          ? "You are a kind English teacher for a Vietnamese absolute beginner (A0). Correct the learner's English sentence. Reply in Vietnamese with: 1) Nhận xét ngắn; 2) Câu đúng tự nhiên; 3) Giải thích tối đa 3 lỗi bằng ngôn ngữ dễ hiểu; 4) Một câu luyện tập tương tự. If the sentence is already correct, say so. Do not shame the learner."
          : "You are a friendly English speaking and writing coach for a Vietnamese absolute beginner (A0). Respond in Vietnamese. Help with the submitted English, provide a corrected natural version, a short simple explanation, and one easy follow-up practice prompt. Keep the response concise and encouraging.";
        const response = await fetch("https://api.openai.com/v1/responses", {
          method:"POST",
          headers:{"Authorization":"Bearer "+process.env.OPENAI_API_KEY,"Content-Type":"application/json"},
          body:JSON.stringify({model:process.env.OPENAI_MODEL || "gpt-4.1-mini",instructions:instruction,input:String(text).slice(0,12000),max_output_tokens:700})
        });
        const data = await response.json();
        if (!response.ok) return send(res,response.status,{error:data.error?.message || "OpenAI API request failed."});
        const answer = data.output?.flatMap(item => item.content || []).filter(c => c.type === "output_text").map(c => c.text).join("\n") || "AI chưa trả về nội dung văn bản.";
        return send(res,200,{answer});
      } catch (e) { return send(res,500,{error:"Lỗi xử lý yêu cầu: "+e.message}); }
    });
    return;
  }
  // Serve the single-page app from the same local origin.
  const pathname = decodeURIComponent((req.url || "/").split("?")[0]);
  const file = path.join(ROOT, pathname === "/" ? "index.html" : pathname.replace(/^\/+/,""));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file,(err,buf)=>{if(err){res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});return res.end("Not found. Open / or check the file path.");}res.writeHead(200,{"Content-Type":MIME[path.extname(file)]||"application/octet-stream"});res.end(buf);});
});
server.listen(PORT, "0.0.0.0", () => {
  const lanIps = getLanIPs();
  console.log("\n========================================================");
  console.log("       ENGLISH HUB V2 — SẴN SÀNG HỌC TẬP!              ");
  console.log("========================================================");
  console.log(`💻 Trên máy tính này :  http://localhost:${PORT}`);
  if (lanIps.length > 0) {
    lanIps.forEach(ip => {
      console.log(`📱 Trên điện thoại   :  http://${ip}:${PORT}`);
    });
    console.log("👉 Lưu ý: Điện thoại và máy tính cần kết nối chung Wi-Fi.");
  } else {
    console.log("📱 Để mở trên điện thoại: Hãy kết nối máy tính vào Wi-Fi.");
  }
  console.log("========================================================\n");
});
