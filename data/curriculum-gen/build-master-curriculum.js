// Master Curriculum Builder for English Hub V1 - 365 Days
// Combines Month 1 (Days 1-28), 8 Milestones, and Structured Syllabus for Days 29-365
const fs = require('fs');
const path = require('path');

// Load Month 1
const w1 = require('./gen-month1-w1.js');
const w2 = require('./gen-month1-w2.js');
const w3_1 = require('./gen-month1-w3-1.js');
const w3_2 = require('./gen-month1-w3-2.js');
const w4_1 = require('./gen-month1-w4-1.js');
const w4_2 = require('./gen-month1-w4-2.js');
const month1Days = [...w1, ...w2, ...w3_1, ...w3_2, ...w4_1, ...w4_2];

// Load Milestones
const milestones = require('./gen-milestones.js');

// Month Definitions
const monthsMetadata = [
  {
    month: 1,
    title_vi: "Tháng 1: Phát âm nền tảng, Bảng chữ cái, Âm cuối, Chào hỏi, Đại từ & Câu đơn",
    title_en: "Foundations, Alphabet, Ending Sounds, Greetings, Pronouns & Simple Sentences",
    level: "A0",
    weeks: [1, 2, 3, 4],
    day_start: 1,
    day_end: 28,
    icon: "🌱",
    summary: "Xóa mù chữ cái, phát âm chuẩn 44 âm IPA cơ bản, đại từ nhân xưng, động từ Be, số đếm, ngày tháng và câu đơn S+V+O."
  },
  {
    month: 2,
    title_vi: "Tháng 2: Thông tin cá nhân, Gia đình, Thói quen hằng ngày, Thời gian & Địa điểm",
    title_en: "Personal Info, Family, Daily Routines, Time & Spatial Descriptions",
    level: "A0 - A1",
    weeks: [5, 6, 7, 8],
    day_start: 29,
    day_end: 59,
    icon: "🏠",
    summary: "Thì Hiện tại đơn, thói quen sinh hoạt và làm việc, các thành viên gia đình, giới từ chỉ vị trí (in, on, under, behind, next to)."
  },
  {
    month: 3,
    title_vi: "Tháng 3: Ăn uống, Mua sắm, Sở thích, Thời tiết & Giao tiếp xã hội",
    title_en: "Food & Dining, Shopping, Hobbies, Weather & Social Interactions",
    level: "A1",
    weeks: [9, 10, 11, 12, 13],
    day_start: 60,
    day_end: 90,
    icon: "☕",
    summary: "Danh từ đếm được và không đếm được (some/any, much/many), gọi món ăn, hỏi giá, mặc cả, diễn tả sở thích và trò chuyện về thời tiết."
  },
  {
    month: 4,
    title_vi: "Tháng 4: Tiếng Anh tại nơi làm việc, Dụng cụ cơ bản, Hướng dẫn & Trao đổi đồng nghiệp",
    title_en: "Workplace English, Hand Tools, Giving Instructions & Team Coordination",
    level: "A1",
    weeks: [14, 15, 16, 17],
    day_start: 91,
    day_end: 120,
    icon: "🔧",
    summary: "Tên 30 dụng cụ cầm tay (wrench, pliers, screwdriver), câu mệnh lệnh hướng dẫn kỹ thuật, mượn đồ nghề và phối hợp ca kíp."
  },
  {
    month: 5,
    title_vi: "Tháng 5: An toàn Lao động SHE, PPE, Mối nguy, Near Miss & Quy trình LOTO",
    title_en: "Safety, Health & Environment (SHE), PPE, Hazards, Near Miss & LOTO SOP",
    level: "A1 - A2",
    weeks: [18, 19, 20, 21],
    day_start: 121,
    day_end: 151,
    icon: "🦺",
    summary: "Trang bị PPE, nhận diện rủi ro tại hiện trường, báo cáo sự cố suýt nguy, quyền Stop Work và 6 bước cô lập năng lượng LOTO."
  },
  {
    month: 6,
    title_vi: "Tháng 6: Máy móc, Bộ phận thiết bị, Mô tả hiện tượng & Báo cáo sự cố",
    title_en: "Machinery, Mechanical Parts, Abnormal Conditions & Troubleshooting",
    level: "A1 - A2",
    weeks: [22, 23, 24, 25, 26],
    day_start: 152,
    day_end: 182,
    icon: "⚙️",
    summary: "Cấu tạo bơm, động cơ, quạt, van; phát hiện rung động bất thường, rò rỉ, quá nhiệt và lập báo cáo sự cố hỏng hóc thiết bị."
  },
  {
    month: 7,
    title_vi: "Tháng 7: Thì Quá khứ đơn, Nhật ký công việc, Bảo trì thiết bị & Bàn giao ca",
    title_en: "Past Simple Tense, Maintenance Logs & Shift Handover Reports",
    level: "A2",
    weeks: [27, 28, 29, 30],
    day_start: 183,
    day_end: 213,
    icon: "📋",
    summary: "Thì Quá khứ đơn với động từ có/bất quy tắc, ghi nhật ký bảo trì định kỳ, viết và trao đổi biên bản bàn giao ca hoàn chỉnh."
  },
  {
    month: 8,
    title_vi: "Tháng 8: Đọc Sổ tay Hướng dẫn, Thông số kỹ thuật, Đơn vị đo & Cảnh báo an toàn",
    title_en: "Reading Technical Manuals, Specs, Engineering Units & Caution Labels",
    level: "A2",
    weeks: [31, 32, 33, 34, 35],
    day_start: 214,
    day_end: 244,
    icon: "📖",
    summary: "Đọc OEM manuals, bảng tra thông số, dung sai lắp ráp, lực siết mô-men xoắn Nm, áp suất bar/PSI và các cấp độ cảnh báo ANSI."
  },
  {
    month: 9,
    title_vi: "Tháng 9: Hội họp, Trình bày ý kiến, Giải quyết vấn đề & Phân tích 5 Whys",
    title_en: "Meetings, Technical Presentations, Problem Solving & 5 Whys Analysis",
    level: "A2 - B1",
    weeks: [36, 37, 38, 39],
    day_start: 245,
    day_end: 274,
    icon: "👥",
    summary: "Tham gia cuộc họp kỹ thuật, bày tỏ quan điểm cá nhân, đồng ý/phản đối lịch sự, truy tìm nguyên nhân gốc rễ và đề xuất CAPA."
  },
  {
    month: 10,
    title_vi: "Tháng 10: Điện thoại, Dịch vụ kỹ thuật, Khách hàng, Nhà cung cấp & Đàm thoại khẩn cấp",
    title_en: "Phone Calls, Technical Support, Vendors & Emergency Radio Protocol",
    level: "B1",
    weeks: [40, 41, 42, 43],
    day_start: 275,
    day_end: 305,
    icon: "📞",
    summary: "Giao tiếp qua điện thoại với hãng, đặt phụ tùng thay thế, xử lý sự cố dịch vụ và sử dụng chuẩn vô tuyến bộ đàm khi khẩn cấp."
  },
  {
    month: 11,
    title_vi: "Tháng 11: Email công việc, Báo cáo kỹ thuật trang trọng, CV & Phỏng vấn kỹ thuật",
    title_en: "Workplace Emails, Technical Incident Reports, Engineering CV & Interviews",
    level: "B1",
    weeks: [44, 45, 46, 47, 48],
    day_start: 306,
    day_end: 335,
    icon: "✉️",
    summary: "Soạn thảo email công việc trang trọng, khiếu nại bảo hành, viết báo cáo điều tra sự cố, viết CV kỹ thuật viên và phỏng vấn xin việc."
  },
  {
    month: 12,
    title_vi: "Tháng 12: Tổng ôn 365 ngày, Hội thoại thực tế nâng cao, Dự án tốt nghiệp & Đánh giá",
    title_en: "Comprehensive 365-Day Review, Simulation Arena, Capstone Project & Final Exam",
    level: "B1",
    weeks: [49, 50, 51, 52],
    day_start: 336,
    day_end: 365,
    icon: "🎓",
    summary: "Tổng hợp toàn bộ 1,648 từ vựng và cấu trúc ngữ pháp, luyện phản xạ 4 kỹ năng trong môi trường mô phỏng thực tế và thi tốt nghiệp."
  }
];

// Helper to determine Month and Week for any Day from 1 to 365
function getMonthAndWeek(day) {
  for (const m of monthsMetadata) {
    if (day >= m.day_start && day <= m.day_end) {
      const week = Math.min(52, Math.floor((day - 1) / 7) + 1);
      return { month: m.month, week };
    }
  }
  return { month: 12, week: 52 };
}

// Syllabus themes generator for Days 29 to 365
const themesByMonth = {
  2: [
    { title: "Mô tả nghề nghiệp & Vị trí làm việc", topic_en: "Occupations and job positions", grammar: "Present simple with Be & Action verbs: I work as...", vocab: ["position", "department", "operator", "electrician", "mechanic"] },
    { title: "Nơi chốn & Giới từ vị trí (in, on, at, under)", topic_en: "Workplace locations and prepositions of place", grammar: "Prepositions of place: The tool is in the drawer, under the desk.", vocab: ["workshop", "warehouse", "cabinet", "shelf", "drawer"] },
    { title: "Thói quen hằng ngày: Buổi sáng & Đầu ca", topic_en: "Daily routines and morning shift startup", grammar: "Present simple for habits: I wake up at 6 AM, arrive at 7:30 AM.", vocab: ["wake up", "arrive", "start work", "clock in", "briefing"] },
    { title: "Các thành viên gia đình & Giới thiệu người thân", topic_en: "Family members and relations", grammar: "Possessive 's: My brother's job, my father's car.", vocab: ["father", "mother", "brother", "sister", "family"] },
    { title: "Trạng từ chỉ tần suất: Always, Usually, Sometimes, Never", topic_en: "Adverbs of frequency in daily habits", grammar: "Adverbs position before main verb: I always wear safety boots.", vocab: ["always", "usually", "often", "sometimes", "never"] },
    { title: "Lịch sinh hoạt cuối tuần & Sở thích nghỉ ngơi", topic_en: "Weekend routines and personal interests", grammar: "Like / Enjoy + V-ing: I like resting on Sunday.", vocab: ["weekend", "rest", "sports", "coffee", "hobby"] },
    { title: "Ôn tập tuần & Luyện giao tiếp hỏi thói quen", topic_en: "Weekly Review & Routine interview drill", grammar: "Do you...? Yes, I do / No, I don't.", vocab: ["review", "habit", "routine", "practice"] }
  ],
  3: [
    { title: "Thức ăn, Đồ uống & Canteen công ty", topic_en: "Food, drinks and factory cafeteria", grammar: "Countable vs Uncountable nouns: a bottle of water, some rice.", vocab: ["water", "coffee", "tea", "bread", "meal"] },
    { title: "Gọi món tại nhà hàng & Quầy ăn trưa", topic_en: "Ordering food and cafeteria interaction", grammar: "Can I have...? / I would like...", vocab: ["order", "menu", "tray", "bill", "receipt"] },
    { title: "Hỏi giá cả & Mua sắm vật dụng (How much)", topic_en: "Asking prices and shopping for personal items", grammar: "How much is this...? / How much are these...?", vocab: ["price", "cost", "cheap", "expensive", "buy"] },
    { title: "Thời tiết & Tác động đến điều kiện làm việc", topic_en: "Weather conditions and ambient workplace environment", grammar: "It is sunny / rainy / humid today.", vocab: ["sunny", "rainy", "hot", "cold", "humidity"] },
    { title: "Trò chuyện xã giao đầu giờ (Small Talk)", topic_en: "Small talk and friendly workplace conversations", grammar: "Polite inquiries: How is your day going?", vocab: ["weather", "weekend", "tired", "busy", "fine"] },
    { title: "Di chuyển & Phương tiện đi lại (traffic, commute)", topic_en: "Transportation and commute to the factory", grammar: "By motorbike, by bus, on foot; How long does it take?", vocab: ["motorbike", "bus", "traffic", "commute", "distance"] },
    { title: "Ôn tập tuần & Hội thoại đời sống thực tế", topic_en: "Weekly Review & Social interaction test", grammar: "Consolidation of food, prices, and small talk.", vocab: ["review", "social", "interaction", "dialogue"] }
  ],
  4: [
    { title: "Dụng cụ cơ bản 1: Cờ lê, Tua vít, Kìm", topic_en: "Basic hand tools: Wrenches, screwdrivers, pliers", grammar: "Imperatives: Hand me the 14-mm open-ended wrench.", vocab: ["wrench", "screwdriver", "pliers", "tool", "fastener"] },
    { title: "Dụng cụ cơ bản 2: Búa, Cưa, Thước đo, Dao rọc", topic_en: "Hand tools: Hammers, saws, measuring tapes, cutters", grammar: "Prepositions with tools: Cut the wire with pliers.", vocab: ["hammer", "saw", "tape measure", "knife", "toolbox"] },
    { title: "Dụng cụ điện & Thiết bị đo: Máy khoan, Đồng hồ VOM", topic_en: "Power tools and multimeters", grammar: "Check voltage with the multimeter before touching.", vocab: ["drill", "multimeter", "voltage", "current", "battery"] },
    { title: "Mượn dụng cụ & Trả đồ tại phòng kho (Tool Crib)", topic_en: "Borrowing and returning tools at the store room", grammar: "May I borrow...? / Please sign the checkout sheet.", vocab: ["borrow", "return", "storekeeper", "inventory", "available"] },
    { title: "Hướng dẫn thực hiện công việc (Step-by-step SOP)", topic_en: "Giving step-by-step technical instructions", grammar: "First..., Second..., Then..., Next..., Finally...", vocab: ["step", "procedure", "instruction", "guide", "follow"] },
    { title: "Trao đổi tiến độ công việc với đồng nghiệp", topic_en: "Coordinating task progress with teammates", grammar: "Present continuous for actions in progress: I am checking...", vocab: ["progress", "finished", "working on", "help", "support"] },
    { title: "Ôn tập tuần & Thực hành mượn - trả công cụ", topic_en: "Weekly Review & Tool coordination drill", grammar: "Consolidation of tool names, requests and instructions.", vocab: ["review", "tools", "instructions", "checkout"] }
  ],
  5: [
    { title: "Quy tắc an toàn 5S và Vệ sinh hiện trường", topic_en: "5S methodology and housekeeping standards", grammar: "Must vs Should: We must keep aisles clear of trip hazards.", vocab: ["5S", "sort", "set in order", "shine", "standardize"] },
    { title: "Trang bị bảo hộ cá nhân (PPE) nâng cao", topic_en: "Advanced Personal Protective Equipment", grammar: "Passive requirements: Safety glasses are required in this area.", vocab: ["respirator", "face shield", "fall arrest", "earmuffs", "harness"] },
    { title: "Nhận diện 4 nhóm mối nguy công nghiệp", topic_en: "Industrial hazard identification", grammar: "There is / There are hazard warnings: There is high voltage...", vocab: ["slip", "trip", "chemical", "crush", "hazard"] },
    { title: "Quyền Dừng Công việc (Stop Work Authority)", topic_en: "Stop Work Authority and empowerment", grammar: "Conditional type 0: If a task is unsafe, stop it immediately.", vocab: ["stop work", "unsafe", "danger", "right", "authority"] },
    { title: "Báo cáo sự cố suýt nguy (Near Miss Reporting)", topic_en: "Reporting near misses and incident prevention", grammar: "Past simple to report what almost happened: The bracket almost fell...", vocab: ["near miss", "incident", "prevent", "report", "root cause"] },
    { title: "Quy trình LOTO: 6 bước cô lập nguồn năng lượng", topic_en: "Lockout/Tagout (LOTO) 6-step SOP", grammar: "Sequencing steps: Isolate, lock, tag, bleed, verify.", vocab: ["lockout", "tagout", "padlock", "breaker", "zero energy"] },
    { title: "Ôn tập tuần & Đánh giá an toàn SHE thực tế", topic_en: "Weekly Review & SHE compliance evaluation", grammar: "Consolidation of PPE, hazards, near miss, and LOTO.", vocab: ["review", "audit", "compliance", "inspection"] }
  ],
  6: [
    { title: "Máy bơm ly tâm: Cấu tạo & Nguyên lý vận hành", topic_en: "Centrifugal pumps: Components and working principle", grammar: "Passive voice in technical descriptions: Fluid is moved by the impeller.", vocab: ["pump", "impeller", "casing", "suction", "discharge"] },
    { title: "Động cơ điện (Electric Motors): Stator, Rotor, Quạt làm mát", topic_en: "Electric motors: Components and monitoring", grammar: "Relative clauses: The fan that cools the motor...", vocab: ["motor", "rotor", "stator", "fan", "winding"] },
    { title: "Hệ thống van công nghiệp: Van bi, Van bướm, Van một chiều", topic_en: "Industrial valves: Ball, butterfly, check, and globe valves", grammar: "Function clauses: Check valves prevent reverse flow.", vocab: ["ball valve", "check valve", "butterfly valve", "flange", "gasket"] },
    { title: "Rung động bất thường & Hiện tượng quá nhiệt ổ bi", topic_en: "Abnormal vibration and bearing overheating", grammar: "Cause and effect: Misalignment causes high vibration.", vocab: ["vibration", "bearing", "overheating", "misalignment", "grease"] },
    { title: "Rò rỉ khí nén, dầu thủy lực và cách phát hiện", topic_en: "Detecting compressed air and hydraulic oil leaks", grammar: "Sense verbs: I hear a hissing noise; I see oil stains.", vocab: ["leak", "hydraulic", "pressure", "hissing", "spray"] },
    { title: "Lập phiếu báo hỏng thiết bị (Breakdown Notification)", topic_en: "Drafting an equipment breakdown notification", grammar: "Simple sentences to state problem, severity, and location.", vocab: ["breakdown", "defect", "urgency", "repair", "operator"] },
    { title: "Ôn tập tuần & Chẩn đoán triệu chứng máy hỏng", topic_en: "Weekly Review & Machinery troubleshooting test", grammar: "Consolidation of pump, motor, valve, and leak terms.", vocab: ["review", "troubleshooting", "symptoms", "diagnosis"] }
  ],
  7: [
    { title: "Thì Quá khứ đơn: Động từ có quy tắc (-ed) trong bảo trì", topic_en: "Past simple regular verbs in maintenance", grammar: "Regular past: checked, replaced, cleaned, adjusted, lubricated.", vocab: ["checked", "replaced", "cleaned", "adjusted", "lubricated"] },
    { title: "Thì Quá khứ đơn: Động từ bất quy tắc kỹ thuật thường gặp", topic_en: "Irregular past verbs in technical work", grammar: "Irregular past: found, took, saw, shut, built, had, made.", vocab: ["found", "took", "saw", "shut", "had"] },
    { title: "Câu phủ định và nghi vấn thì Quá khứ (Did you check...?)", topic_en: "Past simple questions and negatives", grammar: "Did you inspect the seal? No, we did not find the part.", vocab: ["did", "did not", "confirm", "question", "answer"] },
    { title: "Ghi nhật ký công việc bảo dưỡng định kỳ (PM Log)", topic_en: "Writing preventive maintenance (PM) work logs", grammar: "Time markers: At 8 AM we started; by 10 AM we finished.", vocab: ["log", "record", "preventive", "hours", "completed"] },
    { title: "Biên bản bàn giao ca: Việc đã làm & Việc dở dang", topic_en: "Shift handover: Completed vs Pending tasks", grammar: "Contrasting past and present: We completed Task 1, but Task 2 is pending.", vocab: ["handover", "completed", "pending", "notes", "signature"] },
    { title: "Giải thích nguyên nhân sự cố phát sinh trong ca", topic_en: "Explaining shift issues and downtime causes", grammar: "Because / Due to: Downtime occurred due to a jammed conveyor.", vocab: ["downtime", "cause", "delay", "issue", "resolution"] },
    { title: "Ôn tập tuần & Thực hành bàn giao ca hoàn chỉnh", topic_en: "Weekly Review & Full shift handover simulation", grammar: "Consolidation of past verbs, PM logs, and handovers.", vocab: ["review", "simulation", "handover", "signoff"] }
  ],
  8: [
    { title: "Cấu trúc Sổ tay Hướng dẫn Kỹ thuật (Technical Manual)", topic_en: "Technical manual structure and table of contents", grammar: "Navigating sections: Refer to chapter 3 for specifications.", vocab: ["manual", "chapter", "section", "index", "schematic"] },
    { title: "Các cấp độ cảnh báo: DANGER, WARNING, CAUTION, NOTICE", topic_en: "ANSI safety warning classifications", grammar: "Imperatives in warnings: Never touch moving parts.", vocab: ["danger", "warning", "caution", "notice", "hazard"] },
    { title: "Đơn vị đo lường: Áp suất (bar/PSI) & Công suất (kW/HP)", topic_en: "Units of pressure, power, and flow rate", grammar: "Reading specifications: 16 bar at 50 degrees Celsius.", vocab: ["bar", "psi", "kilowatt", "horsepower", "flow rate"] },
    { title: "Đơn vị lực siết mô-men xoắn (Nm) & Kỹ thuật dùng cờ lê lực", topic_en: "Torque specifications (Nm) and torque wrenches", grammar: "Passive specs: Bolts must be tightened to 85 Nm.", vocab: ["torque", "newton-meter", "tighten", "specification", "calibrated"] },
    { title: "Dung sai lắp ráp, khe hở kỹ thuật & Bảng kích thước", topic_en: "Clearance, tolerances, and dimensional tables", grammar: "Within tolerance: The gap must be between 0.05 and 0.10 mm.", vocab: ["tolerance", "clearance", "gap", "dimension", "allowable"] },
    { title: "Đọc sơ đồ khối (P&ID) và Ký hiệu lưu trình đơn giản", topic_en: "Reading simple P&ID flow diagrams and symbols", grammar: "Describing flow: Steam enters through Valve V-101.", vocab: ["diagram", "schematic", "flow", "piping", "instrument"] },
    { title: "Ôn tập tuần & Tra cứu thông số thiết bị từ tài liệu", topic_en: "Weekly Review & Technical manual lookup drill", grammar: "Consolidation of manual sections, units, and tolerances.", vocab: ["review", "specs", "lookup", "manual"] }
  ],
  9: [
    { title: "Chuẩn bị cuộc họp: Đọc chương trình nghị sự (Agenda)", topic_en: "Meeting preparation and reviewing the agenda", grammar: "Future intentions: We will discuss three recurring defects.", vocab: ["agenda", "meeting", "attendee", "objective", "schedule"] },
    { title: "Mở đầu cuộc họp & Giới thiệu chủ đề thảo luận", topic_en: "Opening a meeting and introducing discussion topics", grammar: "Phrases: The purpose of today's meeting is to resolve...", vocab: ["purpose", "welcome", "discuss", "topic", "start"] },
    { title: "Bày tỏ quan điểm chuyên nghiệp (In my opinion...)", topic_en: "Expressing opinions professionally", grammar: "In my opinion, I believe that, From my perspective...", vocab: ["opinion", "perspective", "suggest", "believe", "point"] },
    { title: "Đồng ý và Phản biện lịch sự (Agreeing & Disagreeing)", topic_en: "Agreeing and polite disagreement in meetings", grammar: "I see your point, but... / I completely agree with...", vocab: ["agree", "disagree", "compromise", "however", "valid"] },
    { title: "Phương pháp 5 Whys tìm nguyên nhân gốc rễ (Root Cause)", topic_en: "5 Whys root cause analysis methodology", grammar: "Asking repeated 'Why' questions to uncover underlying causes.", vocab: ["root cause", "5 whys", "underlying", "failure", "investigate"] },
    { title: "Đề xuất Hành động Khắc phục (CAPA) và Phân công", topic_en: "Proposing CAPA and assigning action items", grammar: "Assignment phrases: John will be responsible for...", vocab: ["CAPA", "corrective", "preventive", "action item", "deadline"] },
    { title: "Ôn tập tuần & Mô phỏng cuộc họp xử lý sự cố", topic_en: "Weekly Review & Problem solving meeting simulation", grammar: "Consolidation of agenda, opinions, 5 whys, and CAPA.", vocab: ["review", "simulation", "meeting", "minutes"] }
  ],
  10: [
    { title: "Chào hỏi và Nhận diện người gọi qua điện thoại", topic_en: "Telephone greetings and identifying callers", grammar: "Telephone etiquette: Good morning, this is Alex speaking.", vocab: ["call", "caller", "speaking", "extension", "hold"] },
    { title: "Nối máy, Để lại tin nhắn & Ghi nhận số điện thoại", topic_en: "Transferring calls and taking telephone messages", grammar: "Could you please hold? / Can I take a message?", vocab: ["transfer", "message", "note", "callback", "available"] },
    { title: "Gọi điện hỏi giá và Tình trạng linh kiện phụ tùng", topic_en: "Calling vendors for spare parts pricing and availability", grammar: "Inquiring about stock: Do you have part number FT-402 in stock?", vocab: ["vendor", "supplier", "spare part", "in stock", "quote"] },
    { title: "Khiếu nại qua điện thoại về hàng giao trễ hoặc sai quy cách", topic_en: "Handling telephone complaints regarding delayed delivery", grammar: "Polite complaints: I am calling regarding order #4521 which is delayed.", vocab: ["complaint", "delayed", "wrong item", "delivery", "urgent"] },
    { title: "Chuẩn đàm thoại bộ đàm hai chiều: Over, Out, Copy that", topic_en: "Two-way radio communication protocol", grammar: "Standard radio prowords: Over, Out, Say again, Affirmative.", vocab: ["radio", "over", "out", "copy that", "say again"] },
    { title: "Đàm thoại tình huống khẩn cấp: Hỏa hoạn, Tràn hóa chất", topic_en: "Emergency radio broadcasts and evacuation callouts", grammar: "Emergency urgency: Emergency, Emergency! Code Red at Bay 4.", vocab: ["emergency", "mayday", "evacuate", "assembly point", "spill"] },
    { title: "Ôn tập tuần & Luyện phản xạ đàm thoại qua điện thoại/bộ đàm", topic_en: "Weekly Review & Radio/Telephone communication drill", grammar: "Consolidation of telephone phrases and radio etiquette.", vocab: ["review", "phone", "radio", "protocol"] }
  ],
  11: [
    { title: "Cấu trúc Email công việc: Tiêu đề, Lời chào & Thân bài", topic_en: "Business email structure: Subject lines and formal tone", grammar: "Opening: I am writing to inform you... / Best regards.", vocab: ["email", "subject", "formal", "salutation", "regards"] },
    { title: "Email yêu cầu báo giá và Thông số kỹ thuật (RFQ)", topic_en: "Email requesting quotation (RFQ) and technical data", grammar: "Polite requests: Could you please provide a quotation for...?", vocab: ["quotation", "RFQ", "specifications", "lead time", "payment"] },
    { title: "Email khiếu nại bảo hành phụ tùng hỏng sớm", topic_en: "Email filing a warranty claim for premature part failure", grammar: "Presenting evidence: Please find attached the vibration trend logs.", vocab: ["warranty", "claim", "attached", "defect", "replacement"] },
    { title: "Viết Báo cáo Điều tra Sự cố Kỹ thuật (Incident Report)", topic_en: "Writing a formal technical incident investigation report", grammar: "Passive voice for objectivity: The seal was damaged due to dry friction.", vocab: ["incident", "investigation", "timeline", "damage", "corrective"] },
    { title: "Viết Sơ yếu lý lịch Kỹ thuật viên (Technical CV)", topic_en: "Writing an engineering and technician resume (CV)", grammar: "Action verbs in CV: Maintained, inspected, calibrated, resolved.", vocab: ["resume", "CV", "experience", "skills", "certifications"] },
    { title: "Phỏng vấn xin việc kỹ thuật: Giới thiệu kinh nghiệm và Kỹ năng", topic_en: "Technical job interview: Introducing experience and skills", grammar: "Present perfect and past simple to describe achievements.", vocab: ["interview", "candidate", "qualification", "strengths", "career"] },
    { title: "Ôn tập tuần & Chấm sửa bài viết email và CV", topic_en: "Weekly Review & Technical email and CV evaluation", grammar: "Consolidation of email etiquette, report writing, and CVs.", vocab: ["review", "email", "CV", "incident report"] }
  ],
  12: [
    { title: "Đại tổng ôn 1: Phát âm, Từ vựng đời sống & Giao tiếp nền tảng", topic_en: "Grand Review 1: Pronunciation, General Vocab & Daily English", grammar: "Review of Be, Present Simple, Pronouns, and Prepositions.", vocab: ["pronunciation", "daily", "general", "review", "fluency"] },
    { title: "Đại tổng ôn 2: Dụng cụ, Thiết bị nhà xưởng & Quy trình 5S", topic_en: "Grand Review 2: Tools, Machinery & 5S Workplace English", grammar: "Review of Hand Tools, SOP instructions, and Equipment parts.", vocab: ["tools", "machinery", "5S", "instructions", "maintenance"] },
    { title: "Đại tổng ôn 3: An toàn SHE, PPE, Nhận diện Mối nguy & LOTO", topic_en: "Grand Review 3: SHE, PPE, Hazard ID & Energy Isolation", grammar: "Review of Must/Should, Stop Work, Near Miss, and LOTO steps.", vocab: ["safety", "PPE", "hazard", "LOTO", "near miss"] },
    { title: "Đại tổng ôn 4: Quá khứ đơn, Bàn giao ca & Báo cáo kỹ thuật", topic_en: "Grand Review 4: Past Simple, Handover & Incident Reporting", grammar: "Review of Past verbs, Work logs, and Passive incident reports.", vocab: ["past tense", "handover", "report", "documentation"] },
    { title: "Đại tổng ôn 5: Họp hành, Phản biện, Email & Phỏng vấn tiếng Anh", topic_en: "Grand Review 5: Meetings, Debates, Business Emails & Interview", grammar: "Review of Opinion phrases, Professional emails, and CV responses.", vocab: ["meeting", "email", "interview", "presentation"] },
    { title: "Dự án Tốt nghiệp Thực tế: Báo cáo & Bàn giao Nhà máy Mô phỏng", topic_en: "Capstone Project: Simulated Plant Overhaul & Handover Presentation", grammar: "Comprehensive 4-skill presentation combining all 12 months.", vocab: ["capstone", "project", "presentation", "plant", "mastery"] },
    { title: "ĐÁNH GIÁ TỐT NGHIỆP 365 NGÀY (Final Capstone Assessment)", topic_en: "Final 365-Day Mastery Assessment & Graduation Certification", grammar: "Comprehensive 50-question evaluation covering A0 to B1 competency.", vocab: ["assessment", "graduation", "certificate", "achievement", "mastery"] }
  ]
};

// Generate all 365 days
const all365Days = [];

// Add Month 1 (Days 1 to 28)
month1Days.forEach(dayObj => {
  dayObj.has_detailed_lesson = true;
  all365Days.push(dayObj);
});

// Generate Days 29 to 365
for (let d = 29; d <= 365; d++) {
  // Check if this day is one of our deep-dive milestones
  if (milestones[d]) {
    const mObj = milestones[d];
    mObj.has_detailed_lesson = true;
    all365Days.push(mObj);
    continue;
  }

  const { month, week } = getMonthAndWeek(d);
  const monthMeta = monthsMetadata[month - 1];
  const themes = themesByMonth[month] || themesByMonth[12];
  const themeIndex = (d - monthMeta.day_start) % themes.length;
  const currentTheme = themes[themeIndex];
  
  const isReview = (d % 7 === 0) || (d === 365);
  const title = isReview ? `[Ôn tập Tuần ${week}] ${currentTheme.title}` : currentTheme.title;

  all365Days.push({
    day: d,
    month: month,
    week: week,
    title: title,
    topic_en: currentTheme.topic_en,
    level: monthMeta.level,
    estimated_minutes: isReview ? 50 : 45,
    is_review_day: isReview,
    is_milestone: false,
    has_detailed_lesson: false,
    objectives: [
      `Nắm vững trọng tâm: ${currentTheme.topic_en}.`,
      `Ứng dụng điểm ngữ pháp: ${currentTheme.grammar.split(':')[0]}.`,
      `Thực hành 4-6 thuật ngữ chuyên môn từ Kho từ vựng (Vocab Bank).`,
      isReview ? "Hoàn thành bài kiểm tra ôn tập củng cố tuần." : "Thực hiện bài tập phản xạ và bài tập ứng dụng tại hiện trường."
    ],
    grammar_focus: currentTheme.grammar,
    target_vocab: currentTheme.vocab,
    key_phrases: [
      `Key phrase 1 for ${currentTheme.topic_en}: Practice natural pronunciation.`,
      `Key phrase 2: Ensure correct usage of ${currentTheme.grammar.split(':')[0]}.`,
      `Key phrase 3: Apply actively in your daily technical communication.`
    ],
    daily_task: `Dành 40-50 phút học: 1. Ôn 5 thẻ từ vựng liên quan trong Kho từ vựng; 2. Đọc to các mẫu câu; 3. Luyện nói phản xạ; 4. Hoàn thành câu hỏi kiểm tra hằng ngày.`,
    quiz: [
      {
        question: `Câu hỏi kiểm tra trọng tâm Ngày ${d} (${currentTheme.topic_en}): Điểm ngữ pháp cốt lõi là gì?`,
        options: [
          currentTheme.grammar.split(':')[0],
          "Ngữ pháp bất quy tắc không áp dụng",
          "Chỉ cần đoán nghĩa không cần ngữ pháp",
          "Không có quy tắc nào"
        ],
        answer: 0,
        explanation: `Trọng tâm ngữ pháp của ngày học hôm nay là: ${currentTheme.grammar}`
      },
      {
        question: `Từ vựng nào dưới đây thuộc chủ đề '${currentTheme.topic_en}'?`,
        options: [
          currentTheme.vocab[0] || "technician",
          "unrelated term xyz",
          "random non-english word",
          "none of the above"
        ],
        answer: 0,
        explanation: `'${currentTheme.vocab[0]}' là từ vựng cốt lõi của chủ đề hôm nay.`
      }
    ],
    completion_criteria: {
      min_score: 80,
      action_items: [
        `Hoàn thành bài tập ngày ${d}.`,
        "Ôn lại các từ mới trong Kho Từ Vựng."
      ]
    }
  });
}

// Prepare weeks summary
const weeksMetadata = [];
for (let w = 1; w <= 52; w++) {
  const startDay = (w - 1) * 7 + 1;
  const endDay = Math.min(365, w * 7);
  const mInfo = getMonthAndWeek(startDay);
  weeksMetadata.push({
    week: w,
    month: mInfo.month,
    day_start: startDay,
    day_end: endDay,
    title_vi: `Tuần ${w}: Ngày ${startDay} - ${endDay}`,
    days_count: endDay - startDay + 1
  });
}

// Master Object
const curriculumMaster = {
  version: "2.0.0",
  last_updated: "2026-10-24",
  stats: {
    total_days: all365Days.length,
    total_weeks: weeksMetadata.length,
    total_months: monthsMetadata.length,
    detailed_authored_days: all365Days.filter(d => d.has_detailed_lesson).length,
    syllabus_mapped_days: all365Days.filter(d => !d.has_detailed_lesson).length,
    milestone_count: Object.keys(milestones).length,
    offline_ready: true
  },
  months: monthsMetadata,
  weeks: weeksMetadata,
  days: all365Days
};

// Write out to data/curriculum-data.js
const outputPath = path.join(__dirname, '..', 'curriculum-data.js');
const fileContent = `// English Hub V1 - 365-Day Master Curriculum Data
// Generated: ${new Date().toISOString()}
// Total Days: ${curriculumMaster.stats.total_days} | Detailed Authored Days: ${curriculumMaster.stats.detailed_authored_days}

(function(root) {
  const CURRICULUM_DATA = ${JSON.stringify(curriculumMaster, null, 2)};
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CURRICULUM_DATA;
  }
  if (typeof window !== 'undefined') {
    window.CURRICULUM_DATA = CURRICULUM_DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Successfully generated curriculum-data.js!`);
console.log(`Total Days: ${curriculumMaster.stats.total_days}`);
console.log(`Detailed Authored Days: ${curriculumMaster.stats.detailed_authored_days}`);
console.log(`Weeks: ${curriculumMaster.stats.total_weeks} | Months: ${curriculumMaster.stats.total_months}`);
