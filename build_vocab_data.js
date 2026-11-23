// Builder script for Vocabulary Bank
const fs = require('fs');
const path = require('path');

// Let's define the comprehensive curated dataset
const vocabList = [];

function addWord(en, vi, pos, ipa, example, example_vi, collocation, topic, category, level, first_lesson, notes = "") {
  vocabList.push({
    id: `voc-${String(vocabList.length + 1).padStart(4, '0')}`,
    en,
    vi,
    pos,
    ipa,
    example,
    example_vi,
    collocation,
    topic,
    category,
    level,
    first_lesson,
    notes
  });
}

// ==========================================
// 1. GENERAL ENGLISH (60% ~ 960+ words)
// ==========================================

// --- Topic: Greetings & Courtesies ---
addWord("hello", "xin chào", "phrase", "/həˈləʊ/", "Hello, my name is Alex.", "Xin chào, tên tôi là Alex.", "say hello to someone", "greetings", "general", "A0", "D01", "Lời chào phổ biến trong mọi hoàn cảnh.");
addWord("hi", "chào (thân mật)", "phrase", "/haɪ/", "Hi Alex, how are you?", "Chào Alex, bạn khỏe không?", "say hi", "greetings", "general", "A0", "D01", "Dùng với bạn bè hoặc người quen.");
addWord("good morning", "chào buổi sáng", "phrase", "/ɡʊd ˈmɔː.nɪŋ/", "Good morning, team.", "Chào buổi sáng cả đội.", "wish someone good morning", "greetings", "general", "A0", "D01", "Dùng trước 12 giờ trưa.");
addWord("good afternoon", "chào buổi chiều", "phrase", "/ɡʊd ˌɑːf.təˈnuːn/", "Good afternoon, Mr. David.", "Chào buổi chiều, ông David.", "say good afternoon", "greetings", "general", "A0", "D01", "Dùng từ sau 12h trưa đến khoảng 18h.");
addWord("good evening", "chào buổi tối", "phrase", "/ɡʊd ˈiːv.nɪŋ/", "Good evening, everyone.", "Chào buổi tối mọi người.", "have a good evening", "greetings", "general", "A0", "D01", "Chào khi gặp nhau vào buổi tối.");
addWord("goodbye", "tạm biệt", "phrase", "/ɡʊdˈbaɪ/", "Goodbye, see you tomorrow.", "Tạm biệt, hẹn gặp lại ngày mai.", "say goodbye", "greetings", "general", "A0", "D01", "Lời chào tạm biệt chuẩn mực.");
addWord("bye", "tạm biệt (ngắn gọn)", "phrase", "/baɪ/", "Bye, have a nice day!", "Tạm biệt, chúc một ngày tốt lành!", "bye for now", "greetings", "general", "A0", "D01", "Thân mật hơn goodbye.");
addWord("please", "làm ơn / xin vui lòng", "adv", "/pliːz/", "Please sit down.", "Xin vui lòng ngồi xuống.", "yes, please", "greetings", "general", "A0", "D01", "Dùng để tỏ sự lịch sự khi nhờ vả.");
addWord("thank you", "cảm ơn bạn", "phrase", "/ˈθæŋk ˌjuː/", "Thank you for your help.", "Cảm ơn bạn đã giúp đỡ.", "thank you very much", "greetings", "general", "A0", "D01", "Âm /θ/ đặt lưỡi giữa hai hàm răng.");
addWord("thanks", "cảm ơn (thân mật)", "phrase", "/θæŋks/", "Thanks a lot for the coffee.", "Cảm ơn nhiều vì ly cà phê nhé.", "many thanks", "greetings", "general", "A0", "D01", "Dùng trong giao tiếp thân mật.");
addWord("you are welcome", "không có chi / rất hân hạnh", "phrase", "/jʊər ˈwel.kəm/", "You are welcome. Don't mention it.", "Không có chi, đừng bận tâm.", "always welcome", "greetings", "general", "A0", "D01", "Đáp lại lời cảm ơn.");
addWord("excuse me", "xin lỗi (để làm phiền / hỏi đường)", "phrase", "/ɪkˈskjuːz miː/", "Excuse me, where is the restroom?", "Xin lỗi, nhà vệ sinh ở đâu ạ?", "excuse me for asking", "greetings", "general", "A0", "D02", "Dùng khi bắt đầu hỏi hoặc xin phép chen qua.");
addWord("sorry", "xin lỗi (khi làm sai / đáng tiếc)", "adj", "/ˈsɒr.i/", "I am sorry for being late.", "Tôi xin lỗi vì đến muộn.", "feel sorry about", "greetings", "general", "A0", "D02", "Dùng khi nhận lỗi hoặc bày tỏ sự đồng cảm.");
addWord("pardon", "xin thứ lỗi / xin nhắc lại", "phrase", "/ˈpɑː.dən/", "Pardon? Can you repeat that?", "Xin lỗi? Bạn có thể nhắc lại không?", "beg your pardon", "greetings", "general", "A0", "D02", "Dùng khi nghe chưa rõ câu nói.");
addWord("see you", "hẹn gặp lại", "phrase", "/siː juː/", "See you later today.", "Hẹn gặp lại bạn chiều nay nhé.", "see you soon", "greetings", "general", "A0", "D02", "Lời chào tạm biệt phổ biến.");
addWord("nice to meet you", "rất vui được gặp bạn", "phrase", "/naɪs tuː miːt juː/", "Nice to meet you, Alex.", "Rất vui được gặp bạn, Alex.", "pleased to meet you", "greetings", "general", "A0", "D02", "Dùng khi gặp ai đó lần đầu tiên.");
addWord("how are you", "bạn khỏe không?", "phrase", "/haʊ ɑː juː/", "How are you doing today?", "Hôm nay bạn thế nào?", "how are things", "greetings", "general", "A0", "D02", "Câu hỏi thăm sức khỏe thông dụng.");
addWord("fine", "khỏe / ổn", "adj", "/faɪn/", "I am fine, thank you.", "Tôi khỏe, cảm ơn bạn.", "feel fine", "greetings", "general", "A0", "D02", "Câu trả lời ngắn gọn tiêu chuẩn.");
addWord("great", "rất tuyệt", "adj", "/ɡreɪt/", "Everything is great.", "Mọi thứ đều rất tuyệt.", "do a great job", "greetings", "general", "A0", "D02", "Tích cực hơn fine.");
addWord("welcome", "chào đón", "v", "/ˈwel.kəm/", "Welcome to our company.", "Chào mừng bạn đến với công ty chúng tôi.", "warm welcome", "greetings", "general", "A0", "D02", "Có thể dùng như động từ hoặc danh từ.");

console.log("Initial count:", vocabList.length);
