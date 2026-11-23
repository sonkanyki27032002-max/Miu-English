// Month 1 detailed daily curriculum: Week 4 Part 2 (Days 25 to 28)
// Day 25: Conjunctions (and, but, because, so)
// Day 26: Reading technical ID badge, personnel profile & simple work order
// Day 27: Writing personal intro & workplace notice (3-4 sentences)
// Day 28: Month 1 Comprehensive Milestone Assessment
const days = [];

// Day 25
days.push({
  day: 25,
  month: 1,
  week: 4,
  title: "Từ nối cơ bản: AND, BUT, BECAUSE, SO & Câu ghép",
  topic_en: "Basic conjunctions and compound sentences",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: false,
  objectives: [
    "Sử dụng thành thạo 4 từ nối thông dụng nhất: AND (và), BUT (nhưng), BECAUSE (vì), SO (nên).",
    "Nối 2 mệnh đề đơn thành câu ghép tự nhiên để diễn đạt nguyên nhân - kết quả, sự tương phản và bổ sung.",
    "Tránh lỗi phổ biến của người Việt: dùng cả 'Because... so...' trong một câu.",
    "Thực hành ứng dụng trong giao tiếp và giải thích tình huống kỹ thuật."
  ],
  new_vocab: [
    { en: "and", vi: "và (bổ sung thông tin)", ipa: "/ænd/", example: "The floor is clean and dry.", collocation: "clean and safe" },
    { en: "but", vi: "nhưng (chỉ sự đối lập)", ipa: "/bʌt/", example: "The pump is new, but it vibrates.", collocation: "new but noisy" },
    { en: "because", vi: "bởi vì (nêu lý do)", ipa: "/bɪˈkəz/", example: "We stop the line because the belt is broken.", collocation: "stop because" },
    { en: "so", vi: "vì vậy, cho nên (nêu kết quả)", ipa: "/səʊ/", example: "The valve is leaking, so I close it.", collocation: "leaking so close" },
    { en: "leaking", vi: "bị rò rỉ (chất lỏng/khí)", ipa: "/ˈliː.kɪŋ/", example: "The steam pipe is leaking.", collocation: "pipe is leaking" },
    { en: "noisy", vi: "ồn ào, kêu to", ipa: "/ˈnɔɪ.zi/", example: "The compressor is unusually noisy.", collocation: "unusually noisy" },
    { en: "replace", vi: "thay thế", ipa: "/rɪˈpleɪs/", example: "Replace the damaged gasket immediately.", collocation: "replace the part" },
    { en: "problem", vi: "vấn đề, sự cố", ipa: "/ˈprɒb.ləm/", example: "There is an electrical problem.", collocation: "solve the problem" }
  ],
  review_vocab: ["broken", "working", "safe", "dangerous", "clean", "dirty", "check", "stop"],
  grammar_vi: `### 1. 4 Từ nối cốt lõi (Conjunctions)
1. **AND (và)**: Bổ sung thêm thông tin cùng chiều.
   - *The engine is quiet **and** efficient.* (Động cơ êm và hiệu quả.)
2. **BUT (nhưng)**: Diễn tả sự trái ngược, bất ngờ.
   - *He is tired, **but** he continues his shift.* (Anh ấy mệt, nhưng vẫn tiếp tục ca.)
   - *The tool is old, **but** it is still good.* (Dụng cụ cũ, nhưng vẫn tốt.)
3. **BECAUSE (bởi vì)**: Nêu lý do, nguyên nhân.
   - *We stop the motor **because** it is too hot.* (Chúng tôi dừng động cơ vì nó quá nóng.)
4. **SO (vì vậy, cho nên)**: Nêu kết quả, hành động xử lý.
   - *The motor is too hot, **so** we stop it.* (Động cơ quá nóng, vì vậy chúng tôi dừng nó lại.)

> [!WARNING]
> **LỖI KINH ĐIỂN CỦA NGƯỜI VIỆT**: Trong tiếng Việt nói: *"Bởi vì... cho nên..."*. Nhưng trong tiếng Anh **CHỈ DÙNG MỘT TRONG HAI**, tuyệt đối không dùng cả hai!
> - SAI: *Because the pipe is leaking, so we close the valve.*
> - ĐÚNG: *Because the pipe is leaking, we close the valve.* HOẶC: *The pipe is leaking, so we close the valve.*`,
  listening: {
    audio_prompt: "Listen to the maintenance supervisor discussing a conveyor breakdown.",
    transcript: "Supervisor: Why did Line 1 stop at 10 AM?\nTechnician: It stopped because the drive belt snapped.\nSupervisor: Do we have a replacement belt in stock?\nTechnician: Yes, we have two belts in stock, but we do not have the tension tool.\nSupervisor: Then call the central warehouse and borrow the tool right now, so we can resume production before noon.\nTechnician: Understood. I will call immediately.",
    questions: [
      {
        question: "Why did Line 1 stop at 10 AM?",
        options: ["Because the operator was resting", "Because the drive belt snapped", "Because the electricity was cut"],
        answer: 1,
        explanation: "Kỹ thuật viên nói: 'It stopped because the drive belt snapped.'"
      },
      {
        question: "Why does the technician need to borrow a tool?",
        options: [
          "Because they do not have the tension tool",
          "Because they need a hammer",
          "Because the warehouse is closed"
        ],
        answer: 0,
        explanation: "Kỹ thuật viên nói: 'we have two belts in stock, but we do not have the tension tool.'"
      }
    ]
  },
  speaking: {
    prompt: "Luyện nối 2 câu đơn thành câu ghép sử dụng 'because' hoặc 'so'.",
    target_sentence: "The machine is noisy, so I check the bearings.",
    substitution_drill: [
      { cue: "pipe / leaking / close valve", sentence: "The pipe is leaking, so I close the valve." },
      { cue: "filter / dirty / replace it", sentence: "The filter is dirty, so we replace it." },
      { cue: "stop / because / hot", sentence: "We stop the motor because it is too hot." }
    ],
    sample_answer: "I wear safety glasses because flying metal is dangerous. The floor is wet, so I walk carefully.",
    self_check: [
      "Tôi đã tránh lỗi dùng cả 'because' và 'so' trong cùng 1 câu chưa?",
      "Tôi đã ngắt nghỉ nhẹ trước từ 'but' và 'so' chưa?"
    ]
  },
  reading: {
    text: "Troubleshooting begins with cause and effect. A technician notices that Pump 2 is very hot and noisy. He does not ignore the noise because abnormal sound indicates mechanical wear. He pushes the red emergency button, so the unit stops safely. Then he inspects the lubrication level. The oil level is low, so the bearings lack oil. He fills the oil reservoir, but the sound continues. Therefore, he requests a full bearing replacement.",
    translation: "Xử lý sự cố bắt đầu từ nguyên nhân và kết quả. Một kỹ thuật viên nhận thấy máy bơm số 2 rất nóng và ồn. Anh không phớt lờ tiếng ồn vì âm thanh bất thường là dấu hiệu hao mòn cơ khí. Anh nhấn nút dừng khẩn cấp màu đỏ, nhờ vậy máy dừng an toàn. Sau đó anh kiểm tra mức dầu bôi trơn. Mức dầu thấp, vì vậy các ổ bi bị thiếu dầu. Anh châm thêm dầu vào bình chứa, nhưng tiếng kêu vẫn tiếp diễn. Do đó, anh đề nghị thay thế toàn bộ ổ bi.",
    questions: [
      {
        question: "Why does the technician not ignore the noise?",
        options: ["Because the supervisor is watching", "Because abnormal sound indicates mechanical wear", "Because it is lunch time"],
        answer: 1,
        explanation: "Bài đọc nêu: 'He does not ignore the noise because abnormal sound indicates mechanical wear.'"
      },
      {
        question: "What happens after he fills the oil reservoir?",
        options: ["The machine works perfectly", "The sound continues, so he requests bearing replacement", "The motor catches fire"],
        answer: 1,
        explanation: "Trong bài: 'He fills the oil reservoir, but the sound continues. Therefore, he requests a full bearing replacement.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "so", "The", "wet,", "floor", "carefully.", "walk"], solution: "The floor is wet, so walk carefully.", hint: "The floor is wet, so..." },
      { words: ["stop", "motor", "hot.", "is", "We", "because", "the", "it"], solution: "We stop the motor because it is hot.", hint: "We stop the motor because..." }
    ],
    fill_blank: [
      { sentence_with_blank: "I wear earplugs _______ (bởi vì) the workshop is noisy.", answer: "because", hint: "Nêu lý do." },
      { sentence_with_blank: "The tool is old _______ (nhưng) it works well.", answer: "but", hint: "Chỉ sự đối lập." }
    ],
    translation: [
      { vietnamese: "Đường ống bị rò rỉ, vì vậy chúng tôi khóa van lại.", model_answer: "The pipe is leaking, so we close the valve.", explanation: "The pipe is leaking, so we close the valve." },
      { vietnamese: "Chúng tôi đeo kính bảo hộ vì tia lửa hàn rất nguy hiểm.", model_answer: "We wear safety glasses because sparks are dangerous.", explanation: "We wear safety glasses because sparks are dangerous." }
    ]
  },
  quiz: [
    {
      question: "Câu nào dưới đây đúng ngữ pháp tiếng Anh?",
      options: [
        "Because it rains, so we stay home.",
        "Because it rains, we stay home.",
        "Because of it rains, so we stay home.",
        "It rains because so we stay home."
      ],
      answer: 1,
      explanation: "Không dùng cả 'because' và 'so' trong cùng một câu."
    },
    {
      question: "Điền từ thích hợp: 'The engine is running, _______ it makes a strange sound.'",
      options: ["and", "but", "so", "or"],
      answer: 1,
      explanation: "'but' (nhưng) diễn tả sự tương phản: máy vẫn chạy NHƯNG lại phát ra tiếng lạ."
    },
    {
      question: "Điền từ thích hợp: 'The oil filter is dirty, _______ we must replace it.'",
      options: ["so", "because", "but", "although"],
      answer: 0,
      explanation: "'so' (vì vậy) chỉ kết quả hành động cần làm do filter bị bẩn."
    },
    {
      question: "Nghĩa của câu 'The valve is leaking' là gì?",
      options: [
        "Cái van bị khóa chặt.",
        "Cái van đang bị rò rỉ.",
        "Cái van đã được thay mới.",
        "Cái van rất sạch sẽ."
      ],
      answer: 1,
      explanation: "Leaking = đang rò rỉ (chất lỏng hoặc khí)."
    },
    {
      question: "Chọn từ nối bổ sung thông tin trong câu: 'The work area is clean _______ safe.'",
      options: ["and", "but", "because", "so"],
      answer: 0,
      explanation: "'and' (và) dùng để liên kết hai tính từ cùng hướng tích cực: clean and safe."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Nhớ quy tắc vàng: Không dùng 'Because... so...' cùng nhau.",
      "Luyện đặt 2 câu với 'because' và 2 câu với 'so'."
    ]
  }
});

// Day 26
days.push({
  day: 26,
  month: 1,
  week: 4,
  title: "Đọc hiểu thực tế: Thẻ nhân viên, Hồ sơ kỹ thuật & Phiếu công việc",
  topic_en: "Reading practical technical badge, personnel profile and simple work order",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: false,
  objectives: [
    "Đọc và trích xuất thông tin chính xác từ thẻ nhân viên kỹ thuật (ID Badge).",
    "Hiểu các trường thông tin trong một hồ sơ nhân sự cơ bản: Full Name, Position, Department, Employee ID, Date of Birth, Emergency Contact.",
    "Làm quen với một phiếu công việc (Work Order) đơn giản gồm: Equipment, Location, Priority, Reported Issue.",
    "Áp dụng vốn từ vựng tích lũy suốt Tháng 1 vào văn bản thực tiễn."
  ],
  new_vocab: [
    { en: "badge", vi: "thẻ đeo nhân viên / huy hiệu", ipa: "/bædʒ/", example: "Wear your safety badge at all times.", collocation: "ID badge" },
    { en: "position", vi: "vị trí, chức danh", ipa: "/pəˈzɪʃ.ən/", example: "His position is Maintenance Technician.", collocation: "job position" },
    { en: "department", vi: "phòng ban, bộ phận", ipa: "/dɪˈpɑːt.mənt/", example: "She works in the Safety Department.", collocation: "maintenance department" },
    { en: "priority", vi: "mức độ ưu tiên", ipa: "/praɪˈɒr.ə.ti/", example: "This work order has high priority.", collocation: "high priority" },
    { en: "location", vi: "vị trí, địa điểm", ipa: "/ləʊˈkeɪ.ʃən/", example: "Equipment location is Workshop B.", collocation: "exact location" },
    { en: "issue", vi: "vấn đề, sự cố cần xử lý", ipa: "/ˈɪʃ.uː/", example: "The reported issue is oil leakage.", collocation: "reported issue" },
    { en: "contact", vi: "liên hệ / người liên hệ", ipa: "/ˈkɒn.tækt/", example: "Emergency contact number is on the card.", collocation: "emergency contact" },
    { en: "signature", vi: "chữ ký", ipa: "/ˈsɪɡ.nə.tʃər/", example: "Supervisor signature is required.", collocation: "supervisor signature" }
  ],
  review_vocab: ["name", "date of birth", "phone number", "address", "check", "valve", "safe"],
  grammar_vi: `### 1. Cấu trúc thông tin trên thẻ ID (ID Badge) và Hồ sơ nhân sự
Các thuật ngữ tiếng Anh chuẩn trên biểu mẫu:
- **Full Name**: Họ và tên đầy đủ
- **Employee ID**: Mã số nhân viên (ví dụ: *TECH-2026-088*)
- **Position / Job Title**: Chức vụ (ví dụ: *Mechanical Technician, Safety Inspector*)
- **Department**: Bộ phận / Phòng ban (ví dụ: *Maintenance, Quality Control, SHE*)
- **Date of Hire / Start Date**: Ngày vào làm
- **Emergency Contact**: Người và số điện thoại liên hệ khẩn cấp

### 2. Các trường thông tin trong Phiếu công việc (Work Order)
- **Work Order No. (WO#)**: Số phiếu công tác
- **Date & Time**: Ngày và giờ lập phiếu
- **Equipment Name & Tag**: Tên thiết bị và mã thẻ nhận dạng máy
- **Location**: Vị trí lắp đặt (ví dụ: *Boiler Room, Line 3*)
- **Priority**: Mức độ khẩn cấp (*Low / Medium / High / Critical*)
- **Description / Reported Issue**: Mô tả sự cố (*"Motor bearing is noisy and hot"*)
- **Assigned To**: Phân công cho ai (*"Alex Nguyen"*)`,
  listening: {
    audio_prompt: "Listen to the security guard and a new technician at the plant entrance gate.",
    transcript: "Security Guard: Good morning. Please show your company ID badge.\nTechnician: Good morning. Here is my badge, sir.\nSecurity Guard: Thank you. Let me check... Name: Alex Nguyen. Employee ID: TECH-409. Department: Electrical Maintenance. Position: Junior Electrician.\nTechnician: That is correct. I have a high-priority work order in Building C today.\nSecurity Guard: Very good, Alex. Your badge is verified. Remember your safety helmet inside Building C.\nTechnician: Thank you. Have a safe day.",
    questions: [
      {
        question: "What is Alex Nguyen's position?",
        options: ["Plant Manager", "Junior Electrician", "Security Officer"],
        answer: 1,
        explanation: "Bảo vệ đọc: 'Position: Junior Electrician.'"
      },
      {
        question: "Where is Alex's work order located today?",
        options: ["In Building A", "In Building C", "Outside the warehouse"],
        answer: 1,
        explanation: "Alex nói: 'I have a high-priority work order in Building C today.'"
      }
    ]
  },
  speaking: {
    prompt: "Đọc to thông tin hồ sơ cá nhân của bạn như khi làm thủ tục nhận thẻ ra vào nhà máy.",
    target_sentence: "My name is [Your Name]. I am a technician in the Maintenance Department.",
    substitution_drill: [
      { cue: "Safety Department / Inspector", sentence: "I am an inspector in the Safety Department." },
      { cue: "Line 2 / Operator", sentence: "I am an operator on Production Line 2." },
      { cue: "Warehouse / Storekeeper", sentence: "I am a storekeeper in the Central Warehouse." }
    ],
    sample_answer: "Hello. My name is Nam Tran. My employee ID is TECH-102. I work in the Mechanical Department as a maintenance technician.",
    self_check: [
      "Tôi đã phát âm đúng trọng âm từ 'department' (/dɪˈpɑːt.mənt/ - âm 2) chưa?",
      "Tôi đã nói rõ mã số nhân viên của mình từng chữ số và ký tự chưa?"
    ]
  },
  reading: {
    text: `=========================================
INDUSTRIAL WORK ORDER #WO-2026-0418
Date: October 24, 2026 | Priority: HIGH
Equipment: Cooling Water Pump P-102
Location: Utility Room, Workshop B
Assigned Technician: Alex Nguyen (ID: TECH-409)
Department: Mechanical Maintenance

REPORTED ISSUE:
Pump P-102 has high vibration and abnormal noise. Bearing surface temperature is 78°C. Oil level in sight glass is below MIN line.

REQUIRED ACTION:
1. Lockout/Tagout (LOTO) breaker switch CB-12.
2. Inspect bearings and check oil seals.
3. Clean reservoir and add ISO VG 46 synthetic oil.
4. Test run for 15 minutes and log operating temperature.

Supervisor Signature: Robert Davis (Safety & Maintenance Manager)
=========================================`,
    translation: `=========================================
PHIẾU CÔNG VIỆC CÔNG NGHIỆP #WO-2026-0418
Ngày: 24/10/2026 | Mức độ ưu tiên: CAO
Thiết bị: Máy bơm nước làm mát P-102
Vị trí: Phòng phụ trợ, Xưởng B
Kỹ thuật viên phụ trách: Alex Nguyen (Mã NV: TECH-409)
Bộ phận: Bảo trì Cơ khí

SỰ CỐ ĐƯỢC BÁO CÁO:
Máy bơm P-102 bị rung mạnh và có tiếng ồn bất thường. Nhiệt độ bề mặt ổ bi là 78°C. Mức dầu qua kính thăm dò ở dưới vạch MIN.

HÀNH ĐỘNG YÊU CẦU:
1. Khóa và treo thẻ cách ly (LOTO) áptômát CB-12.
2. Kiểm tra ổ bi và kiểm tra phớt chặn dầu.
3. Vệ sinh bình chứa và châm thêm dầu tổng hợp ISO VG 46.
4. Chạy thử 15 phút và ghi chép nhiệt độ vận hành.

Chữ ký giám sát: Robert Davis (Trưởng phòng An toàn & Bảo trì)
=========================================`,
    questions: [
      {
        question: "What is the priority of Work Order #WO-2026-0418?",
        options: ["Low", "Medium", "HIGH", "Optional"],
        answer: 2,
        explanation: "Phiếu công việc ghi rõ: 'Priority: HIGH'."
      },
      {
        question: "What is the reported oil level on Pump P-102?",
        options: ["Above MAX line", "Below MIN line", "Completely empty and burned"],
        answer: 1,
        explanation: "Báo cáo sự cố ghi: 'Oil level in sight glass is below MIN line.'"
      },
      {
        question: "What is the first required action before touching the pump?",
        options: ["Add oil immediately", "Lockout/Tagout (LOTO) breaker switch CB-12", "Run the pump at maximum speed"],
        answer: 1,
        explanation: "Bước 1 nêu rõ: 'Lockout/Tagout (LOTO) breaker switch CB-12.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "priority.", "order", "This", "high", "work"], solution: "This work order is high priority.", hint: "This work order is..." },
      { words: ["badge", "your", "Show", "the", "gate.", "at"], solution: "Show your badge at the gate.", hint: "Show your..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Please write your full name and _______ (chức danh/vị trí) on the form.", answer: "position", hint: "Từ bắt đầu bằng p-." },
      { sentence_with_blank: "The equipment _______ (vị trí/địa điểm) is Workshop B.", answer: "location", hint: "Từ bắt đầu bằng l-." }
    ],
    translation: [
      { vietnamese: "Anh ấy là kỹ thuật viên bảo trì trong xưởng B.", model_answer: "He is a maintenance technician in Workshop B.", explanation: "He is a maintenance technician in Workshop B." },
      { vietnamese: "Phiếu công việc này có mức độ ưu tiên cao.", model_answer: "This work order has high priority.", explanation: "This work order has high priority." }
    ]
  },
  quiz: [
    {
      question: "Thuật ngữ 'Employee ID' trên thẻ nhân viên có nghĩa là gì?",
      options: ["Tên công ty", "Mã số nhân viên", "Số điện thoại nhà riêng", "Ngày hết hạn"],
      answer: 1,
      explanation: "Employee ID = Mã định danh nhân viên (Employee Identification Number)."
    },
    {
      question: "Mục 'Priority: High' trên phiếu công tác có nghĩa là gì?",
      options: ["Công việc không cần làm", "Ưu tiên thấp, làm khi rảnh", "Ưu tiên cao, cần xử lý khẩn trương", "Công việc đã hoàn thành"],
      answer: 2,
      explanation: "Priority: High = Mức độ ưu tiên cao."
    },
    {
      question: "Trong phiếu bảo trì, từ 'Issue' tương đương với từ nào?",
      options: ["Problem / Breakdown", "Salary", "Vacation", "Lunch"],
      answer: 0,
      explanation: "Issue trong văn cảnh kỹ thuật là vấn đề / sự cố cần giải quyết."
    },
    {
      question: "Từ nào chỉ người hoặc số điện thoại cần liên hệ khi xảy ra tai nạn?",
      options: ["Casual contact", "Emergency contact", "Social contact", "No contact"],
      answer: 1,
      explanation: "Emergency contact = Liên hệ khẩn cấp."
    },
    {
      question: "Dịch sang tiếng Anh: 'Bộ phận bảo trì'",
      options: ["Maintenance Department", "Maintain Desk", "Maintaining Room", "Department Repairing"],
      answer: 0,
      explanation: "Maintenance Department = Bộ phận / Phòng bảo trì."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Hiểu toàn bộ các mục trên một thẻ nhân viên và phiếu công việc chuẩn.",
      "Tự điền thông tin bản thân vào mẫu hồ sơ kỹ thuật tiếng Anh."
    ]
  }
});

// Day 27
days.push({
  day: 27,
  month: 1,
  week: 4,
  title: "Kỹ năng viết: Giới thiệu bản thân & Thông báo công việc ngắn",
  topic_en: "Writing personal introduction and brief workplace notice",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: false,
  objectives: [
    "Viết đoạn văn tự giới thiệu bản thân hoàn chỉnh từ 4–6 câu kết hợp tên, tuổi, nghề nghiệp, nơi làm việc và số liên lạc.",
    "Viết một thông báo kỹ thuật ngắn 3–4 câu để cảnh báo hoặc báo cáo tình trạng máy cho ca sau.",
    "Vận dụng đúng quy tắc viết hoa chữ cái đầu câu, dấu chấm kết thúc và không thừa/thiếu liên từ.",
    "Tự rà soát chính tả các từ vựng đã học trong Tháng 1."
  ],
  new_vocab: [
    { en: "notice", vi: "thông báo, thông cáo", ipa: "/ˈnəʊ.tɪs/", example: "Please read the safety notice on the board.", collocation: "safety notice" },
    { en: "attention", vi: "sự chú ý", ipa: "/əˈten.ʃən/", example: "Attention: Maintenance work in progress.", collocation: "pay attention" },
    { en: "complete", vi: "hoàn thành / đầy đủ", ipa: "/kəmˈpliːt/", example: "The inspection is complete.", collocation: "task complete" },
    { en: "progress", vi: "tiến độ / đang diễn ra", ipa: "/ˈprəʊ.ɡres/", example: "Work is in progress.", collocation: "in progress" },
    { en: "shift", vi: "ca làm việc", ipa: "/ʃɪft/", example: "I work the night shift this week.", collocation: "night shift" },
    { en: "report", vi: "báo cáo / bản báo cáo", ipa: "/rɪˈpɔːt/", example: "Submit your daily report at 5 PM.", collocation: "daily report" },
    { en: "contact", vi: "liên hệ", ipa: "/ˈkɒn.tækt/", example: "Contact me at extension 402.", collocation: "contact person" },
    { en: "thank", vi: "cảm ơn", ipa: "/θæŋk/", example: "Thank you for your cooperation.", collocation: "thank you" }
  ],
  review_vocab: ["name", "position", "department", "safe", "broken", "clean", "and", "but", "so"],
  grammar_vi: `### 1. Khung bài viết giới thiệu bản thân (Self-Introduction Template)
Gồm 5 câu mạch lạc:
1. **Chào hỏi & Tên**: *Hello everyone. My name is [Tên].*
2. **Tuổi / Quốc tịch**: *I am 28 years old and I am from Vietnam.*
3. **Nghề nghiệp & Bộ phận**: *I am a maintenance technician in the Mechanical Department.*
4. **Nhiệm vụ chính**: *I inspect machines and repair equipment.*
5. **Thông tin liên hệ / Lời chào**: *My phone number is 0912-345-678. Nice to meet you.*

### 2. Khung thông báo công việc ngắn (Short Workplace Notice Template)
Thường dùng dán trên máy hoặc gửi qua tin nhắn bàn giao ca:
- **Tiêu đề**: *ATTENTION / NOTICE*
- **Tình trạng thiết bị**: *Machine 3 is currently stopped because the belt is loose.*
- **Hành động đang làm**: *Maintenance is in progress.*
- **Khuyến cáo**: *Do not turn on the power switch.*
- **Người phụ trách**: *For questions, please contact Alex Nguyen (Ext. 204). Thank you.*`,
  listening: {
    audio_prompt: "Listen to the maintenance supervisor dictating a short notice for the bulletin board.",
    transcript: "Supervisor: Minh, please write down this notice and pin it on Compressor Room 2.\nMinh: Ready, sir. What is the text?\nSupervisor: Write: 'ATTENTION ALL SHIFTS. Compressor Room 2 is closed today because technicians are testing high-pressure lines. Do not enter without safety goggles and ear protection. For urgent access, call supervisor Mark at extension 555. Thank you.'\nMinh: Got it. I will print it and post it on the door right away.",
    questions: [
      {
        question: "Why is Compressor Room 2 closed today?",
        options: [
          "Because of a company holiday",
          "Because technicians are testing high-pressure lines",
          "Because it is being painted"
        ],
        answer: 1,
        explanation: "Giám sát đọc: 'because technicians are testing high-pressure lines.'"
      },
      {
        question: "What PPE is required if someone has to enter?",
        options: ["Only gloves", "Safety goggles and ear protection", "Raincoat and boots"],
        answer: 1,
        explanation: "Giám sát nêu rõ: 'Do not enter without safety goggles and ear protection.'"
      }
    ]
  },
  speaking: {
    prompt: "Đọc to đoạn giới thiệu bản thân đầy đủ trong 45 giây trước gương hoặc máy ghi âm.",
    target_sentence: "Hello, my name is Alex. I am a maintenance technician. I work in Workshop B.",
    substitution_drill: [
      { cue: "safety officer / SHE department", sentence: "Hello, my name is Lan. I am a safety officer in the SHE department." },
      { cue: "machine operator / Line 1", sentence: "Hello, my name is Hung. I am a machine operator on Line 1." }
    ],
    sample_answer: "Hello everyone. My name is Alex Nguyen. I am 26 years old. I work as an electrical technician in the Engineering Department. My extension is 409. Nice to meet you.",
    self_check: [
      "Tôi đã phát âm rõ âm đuôi /t/ trong 'meet', /s/ trong 'years old', /k/ trong 'work' chưa?",
      "Tôi đã nói liền mạch không bị ngắt quãng giữa các cụm từ chưa?"
    ]
  },
  reading: {
    text: `SAMPLE WORKPLACE NOTICE:

ATTENTION: ALL OPERATORS AND TECHNICIANS
Date: October 24, 2026
From: Maintenance Department

Conveyor Belt #4 is temporarily stopped because the electric motor is overheated. 
Maintenance technicians are replacing the thermal sensor and cleaning the fan blades. 
Estimated completion time is 3:30 PM today.
Please DO NOT touch the control panel or remove the warning tag.
If you have any questions, contact supervisor David at extension 312.

Thank you for your cooperation!`,
    translation: `MẪU THÔNG BÁO TẠI NƠI LÀM VIỆC:

CHÚ Ý: TOÀN THỂ NHÂN VIÊN VẬN HÀNH VÀ KỸ THUẬT VIÊN
Ngày: 24/10/2026
Từ: Bộ phận Bảo trì

Băng chuyền số 4 tạm thời dừng hoạt động do động cơ điện bị quá nhiệt. 
Các kỹ thuật viên bảo trì đang thay thế cảm biến nhiệt và vệ sinh các cánh quạt. 
Thời gian hoàn thành dự kiến là 3:30 chiều hôm nay.
Vui lòng KHÔNG chạm vào bảng điều khiển hoặc tháo thẻ cảnh báo.
Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ giám sát David theo số máy nhánh 312.

Cảm ơn sự hợp tác của các bạn!`,
    questions: [
      {
        question: "What is wrong with Conveyor Belt #4?",
        options: ["The belt snapped", "The electric motor is overheated", "The electrical bill was not paid"],
        answer: 1,
        explanation: "Thông báo nêu rõ: 'because the electric motor is overheated.'"
      },
      {
        question: "What is the estimated completion time for the maintenance work?",
        options: ["10:00 AM tomorrow", "3:30 PM today", "Next week"],
        answer: 1,
        explanation: "Trong thông báo: 'Estimated completion time is 3:30 PM today.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["name", "is", "My", "Alex.", "Nguyen"], solution: "My name is Alex Nguyen.", hint: "My name is..." },
      { words: ["technician", "I", "a", "am", "maintenance."], solution: "I am a maintenance technician.", hint: "I am a..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Maintenance work is currently in _______ (tiến độ/đang diễn ra).", answer: "progress", hint: "in progress = đang diễn ra." },
      { sentence_with_blank: "Please _______ (liên hệ) the supervisor for urgent support.", answer: "contact", hint: "Bắt đầu bằng c-." }
    ],
    translation: [
      { vietnamese: "Tôi là kỹ thuật viên bảo trì. Số điện thoại của tôi là 0901-234-567.", model_answer: "I am a maintenance technician. My phone number is 0901-234-567.", explanation: "I am a maintenance technician. My phone number is 0901-234-567." },
      { vietnamese: "Máy số 2 đang dừng vì bị rò rỉ dầu.", model_answer: "Machine 2 is stopped because of oil leakage.", explanation: "Machine 2 is stopped because it is leaking oil (hoặc because of oil leakage)." }
    ]
  },
  quiz: [
    {
      question: "Câu mở đầu chuẩn trong thư hoặc thông báo chú ý tại nhà xưởng là:",
      options: ["Attention everyone,", "What's up guys,", "Bye bye,", "No attention,"],
      answer: 0,
      explanation: "'Attention everyone' hoặc 'Attention all staff' là lời mở đầu chuẩn mực."
    },
    {
      question: "Cụm từ 'Work in progress' có nghĩa là gì?",
      options: ["Công việc đã bị hủy", "Công việc đang được tiến hành", "Công việc đã xong tuần trước", "Không có việc gì làm"],
      answer: 1,
      explanation: "'In progress' nghĩa là đang diễn ra / đang tiến hành."
    },
    {
      question: "Câu nào dưới đây giới thiệu tuổi đúng ngữ pháp?",
      options: [
        "I have 25 years old.",
        "I am 25 years old.",
        "I am 25 year old.",
        "My age have 25."
      ],
      answer: 1,
      explanation: "Tiếng Anh dùng động từ to be: 'I am 25 years old' (có -s ở years)."
    },
    {
      question: "Để yêu cầu người đọc liên hệ khi có thắc mắc, ta viết:",
      options: [
        "Do not call me.",
        "For questions, please contact extension 301.",
        "You must stop talking.",
        "Never ask questions."
      ],
      answer: 1,
      explanation: "'For questions, please contact extension 301' là cấu trúc chuyên nghiệp tiêu chuẩn."
    },
    {
      question: "Cụm từ 'Thank you for your cooperation' mang nghĩa gì?",
      options: [
        "Cảm ơn vì đã giúp tôi sửa máy.",
        "Cảm ơn sự hợp tác của các bạn.",
        "Xin lỗi vì sự bất tiện này.",
        "Chào tạm biệt hẹn gặp lại."
      ],
      answer: 1,
      explanation: "Cooperation = sự hợp tác. 'Thank you for your cooperation' = Cảm ơn sự hợp tác của bạn."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Tự viết hoàn chỉnh đoạn tự giới thiệu bản thân 5 câu ra sổ tay.",
      "Viết thử một mẩu giấy thông báo tình trạng hỏng hóc máy dán tại xưởng."
    ]
  }
});

// Day 28: Month 1 Comprehensive Milestone Assessment
days.push({
  day: 28,
  month: 1,
  week: 4,
  title: "Đánh giá tổng kết Cột mốc Tháng 1 (Month 1 Assessment)",
  topic_en: "Month 1 comprehensive milestone review and 4-skill evaluation",
  level: "A0",
  estimated_minutes: 60,
  is_review_day: true,
  objectives: [
    "Đánh giá toàn diện kiến thức Tháng 1: Bảng chữ cái, Âm cuối, Động từ Be, Số đếm, Đại từ, Giới từ thời gian (in/on/at), Tính từ trạng thái, Cấu trúc S+V+O, và Từ nối (and/but/because/so).",
    "Kiểm tra năng lực Nghe hiểu qua đoạn đối thoại công sở và công xưởng 60 giây.",
    "Kiểm tra phản xạ Nói qua bài trắc nghiệm trả lời nhanh tình huống trong 10 giây.",
    "Kiểm tra Đọc hiểu qua một báo cáo bàn giao ca (Shift Handover Note) thực tế.",
    "Kiểm tra Viết qua bài điền từ, sắp xếp câu và viết báo cáo ngắn 4 câu.",
    "Hoàn thành bài thi trắc nghiệm tổng hợp 20 câu với mục tiêu đạt tối thiểu 80% để chính thức mở khóa Tháng 2."
  ],
  new_vocab: [
    { en: "assessment", vi: "bài đánh giá, kỳ kiểm tra", ipa: "/əˈses.mənt/", example: "Today is your Month 1 assessment.", collocation: "comprehensive assessment" },
    { en: "milestone", vi: "cột mốc quan trọng", ipa: "/ˈmaɪl.stəʊn/", example: "Completing Month 1 is a great milestone.", collocation: "reach a milestone" },
    { en: "handover", vi: "sự bàn giao (ca, công việc)", ipa: "/ˈhændˌəʊ.vər/", example: "Sign the shift handover sheet.", collocation: "shift handover" },
    { en: "summary", vi: "bản tóm tắt, tổng kết", ipa: "/ˈsʌm.ər.i/", example: "Read the monthly summary carefully.", collocation: "monthly summary" }
  ],
  review_vocab: [
    "hello", "morning", "afternoon", "name", "from", "Vietnam", "technician", "operator", "engineer",
    "one", "ten", "twenty", "thirty", "fifty", "hundred", "first", "second",
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    "in", "on", "at", "safe", "dangerous", "clean", "dirty", "broken", "working", "hot", "cold", "loose", "tight",
    "check", "start", "stop", "open", "close", "inspect", "and", "but", "because", "so"
  ],
  grammar_vi: `### TỔNG HỢP KIẾN THỨC CỐT LÕI THÁNG 1 (Cột mốc Mất gốc A0)
Trong 27 ngày qua, bạn đã làm chủ 7 trụ cột ngữ pháp nền tảng:

1. **Động từ TO BE (am / is / are)**:
   - *I am* a technician.
   - *He / She / It / Danh từ số ít is* safe.
   - *We / You / They / Danh từ số nhiều are* ready.
   - Phủ định: thêm *not* (*is not / isn't, are not / aren't*).
   - Nghi vấn: Đảo Be lên đầu (*Are you ready? Is it safe?*).

2. **Đại từ chỉ định (This / That / These / Those) & Cấu trúc tồn tại (There is / There are)**:
   - *This / That* + Danh từ số ít.
   - *These / Those* + Danh từ số nhiều.
   - *There is a pump* (số ít) vs *There are four pumps* (số nhiều).

3. **Giới từ Thời gian vàng (AT - ON - IN)**:
   - **AT**: Giờ cụ thể (*at 7:00 AM, at noon, at night*).
   - **ON**: Thứ trong tuần & Ngày tháng cụ thể (*on Monday, on October 24*).
   - **IN**: Buổi trong ngày, Tháng, Năm, Mùa (*in the morning, in July, in 2026, in summer*).

4. **Từ để hỏi Wh- (What, Where, When, Who, Why, How)**:
   - *What is this? Where is the valve? When does shift 2 start? Why is it stopped? How are you?*

5. **Tính từ miêu tả trạng thái (Adjectives)**:
   - Vị trí: Đứng sau Be (*The belt is loose*) HOẶC Đứng trước danh từ (*a loose belt*).
   - 6 cặp trái nghĩa: safe-dangerous, clean-dirty, tight-loose, hot-cold, wet-dry, broken-working.

6. **Cấu trúc câu đơn S + V + O & Động từ chia thì Hiện tại đơn**:
   - S + V (nguyên mẫu với I/You/We/They; thêm -s/-es với He/She/It): *The engineer inspects the valve.*
   - Câu mệnh lệnh trực tiếp: *Push the button. Do not touch.*

7. **Từ nối tạo câu ghép (AND, BUT, BECAUSE, SO)**:
   - *And* (bổ sung), *But* (đối lập), *Because* (lý do), *So* (kết quả). Tuyệt đối không dùng cả *Because... so...*`,
  listening: {
    audio_prompt: "Listen to the complete shift handover conversation between Day Shift Leader (Alex) and Night Shift Leader (Tuan).",
    transcript: `Alex: Good evening Tuan. Welcome to Shift 2.
Tuan: Good evening Alex. How was Shift 1 today?
Alex: Overall it was a good shift, but we had one issue on Line 3.
Tuan: What happened on Line 3?
Alex: At 2:15 PM, Pump P-201 became very hot and noisy. The technician checked the oil level and found it was empty.
Tuan: Did you stop the pump immediately?
Alex: Yes, we pressed the emergency stop and tagged out the electrical breaker. We cleaned the reservoir and refilled it with synthetic oil.
Tuan: Is Pump P-201 running now?
Alex: Yes, it is working normally now, but please inspect the bearing temperature at 8:00 PM and 11:00 PM tonight.
Tuan: Got it. What about Line 1 and Line 2?
Alex: Both lines are in safe and clean condition. All daily 5S checklists are complete and signed.
Tuan: Perfect. Thank you for the detailed handover Alex. Have a good rest!
Alex: You too Tuan. Have a safe shift!`,
    questions: [
      {
        question: "What problem occurred during Shift 1?",
        options: [
          "A power blackout across the entire factory",
          "Pump P-201 became hot and noisy due to lack of oil",
          "Conveyor 2 broke into pieces"
        ],
        answer: 1,
        explanation: "Alex nói: 'Pump P-201 became very hot and noisy. The technician checked the oil level and found it was empty.'"
      },
      {
        question: "What action did the team take to fix Pump P-201?",
        options: [
          "They replaced the whole factory line",
          "They pressed emergency stop, tagged out, cleaned and refilled synthetic oil",
          "They ignored the noise and ran it until Shift 2"
        ],
        answer: 1,
        explanation: "Alex giải thích các bước: 'pressed emergency stop, tagged out, cleaned reservoir and refilled with synthetic oil.'"
      },
      {
        question: "What must Tuan do tonight during Shift 2?",
        options: [
          "Paint the pump blue",
          "Inspect the bearing temperature at 8:00 PM and 11:00 PM",
          "Turn off all factory lights"
        ],
        answer: 1,
        explanation: "Alex dặn: 'please inspect the bearing temperature at 8:00 PM and 11:00 PM tonight.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành phản xạ bàn giao ca: Trình bày tình trạng 1 thiết bị bằng 4 câu mạch lạc.",
    target_sentence: "Shift 1 is complete. Pump 1 is running safely. The floor is clean and dry. No incidents occurred today.",
    substitution_drill: [
      { cue: "Line 2 / stopped / belt loose", sentence: "Line 2 is stopped because the belt is loose. Maintenance is in progress." },
      { cue: "Motor 4 / noisy / check bearings", sentence: "Motor 4 is noisy, so please check the bearings at 10 PM." }
    ],
    sample_answer: "Good evening team. Shift 1 finished safely. Machine 3 was noisy at 2 PM, but we lubricated the bearings and it is working well now. Please check it again at 9 PM.",
    self_check: [
      "Tôi đã nói rõ ràng các con số giờ (2 PM, 9 PM) với giới từ 'at' chưa?",
      "Tôi đã dùng đúng các tính từ trạng thái (safe, noisy, working well) chưa?"
    ]
  },
  reading: {
    text: `MONTH 1 MILESTONE SUMMARY REPORT
To: Plant General Manager
From: Training & SHE Committee
Subject: Month 1 Foundation Assessment Results

During the first 4 weeks, zero-foundation technical learners completed 28 daily modules covering foundational pronunciation, workplace greetings, numbers and dates, equipment status descriptions, standard active verbs, and basic incident communications.

Key metrics observed across all departments:
1. Pronunciation: Over 90% of learners now distinguish voiceless and voiced consonants (/p/-/b/, /t/-/d/, /f/-/v/) and pronounce final sounds distinctly.
2. Grammar Accuracy: Accurate use of 'There is / There are' and prepositions (IN for months/seasons, ON for days, AT for exact times) reached 88%.
3. Technical Terminology: Learners actively recognize and write 12 key equipment status adjectives (safe, dangerous, clean, dirty, broken, working, hot, cold, tight, loose, wet, dry).
4. Practical Application: All learners successfully drafted a standard ID card profile and a 3-sentence shift notice.

Conclusion: Foundation Phase (Month 1 - A0 Zero Ground) is officially accomplished. The cohort is certified ready to advance to Month 2 (Personal Routines, Family, Work Schedules, and Spatial Descriptions).`,
    translation: `BÁO CÁO TỔNG KẾT CỘT MỐC THÁNG 1
Kính gửi: Tổng giám đốc nhà máy
Từ: Ban Đào tạo & SHE
Chủ đề: Kết quả Đánh giá Nền tảng Tháng 1

Trong 4 tuần đầu tiên, người học kỹ thuật mất gốc đã hoàn thành 28 bài học hằng ngày bao gồm phát âm nền tảng, chào hỏi nơi làm việc, chữ số và ngày tháng, miêu tả trạng thái thiết bị, các động từ hành động tiêu chuẩn và giao tiếp sự cố cơ bản.

Các chỉ số chính ghi nhận tại tất cả bộ phận:
1. Phát âm: Hơn 90% học viên hiện phân biệt được phụ âm vô thanh và hữu thanh (/p/-/b/, /t/-/d/, /f/-/v/) và bật âm cuối dứt khoát.
2. Độ chính xác ngữ pháp: Việc sử dụng chính xác 'There is / There are' và các giới từ (IN cho tháng/mùa, ON cho thứ/ngày, AT cho giờ cụ thể) đạt 88%.
3. Thuật ngữ kỹ thuật: Học viên chủ động nhận biết và viết 12 tính từ trạng thái cốt lõi (safe, dangerous, clean, dirty, broken, working, hot, cold, tight, loose, wet, dry).
4. Ứng dụng thực tế: Toàn bộ học viên đã viết thành công hồ sơ thẻ ID và thông báo bàn giao ca 3 câu.

Kết luận: Giai đoạn Nền tảng (Tháng 1 - Mất gốc A0) đã hoàn thành xuất sắc. Học viên được chứng nhận đủ điều kiện tiến vào Tháng 2 (Thói quen cá nhân, Gia đình, Lịch làm việc và Miêu tả không gian).`,
    questions: [
      {
        question: "What level did learners master during Month 1?",
        options: ["C1 Advanced", "B2 Upper-Intermediate", "A0 Zero Ground Foundation", "Master of Literature"],
        answer: 2,
        explanation: "Báo cáo xác nhận: 'Foundation Phase (Month 1 - A0 Zero Ground) is officially accomplished.'"
      },
      {
        question: "Which prepositions rule was mastered with 88% accuracy?",
        options: [
          "IN for months, ON for days, AT for exact times",
          "AT for months, IN for days, ON for times",
          "Always use IN for everything"
        ],
        answer: 0,
        explanation: "Báo cáo nêu rõ: 'IN for months/seasons, ON for days, AT for exact times reached 88%'."
      },
      {
        question: "What is the topic of the upcoming Month 2?",
        options: [
          "Advanced rocket science",
          "Personal Routines, Family, Work Schedules, and Spatial Descriptions",
          "Poetry writing"
        ],
        answer: 1,
        explanation: "Báo cáo nêu: 'advance to Month 2 (Personal Routines, Family, Work Schedules, and Spatial Descriptions).'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["running", "The", "safely.", "is", "motor"], solution: "The motor is running safely.", hint: "The motor is..." },
      { words: ["shift", "handover", "Sign", "the", "sheet."], solution: "Sign the shift handover sheet.", hint: "Sign the..." }
    ],
    fill_blank: [
      { sentence_with_blank: "The meeting is _______ (vào lúc) 2:30 PM _______ (vào ngày) Friday.", answer: "at / on", hint: "Giờ dùng at, thứ dùng on." },
      { sentence_with_blank: "The pump is noisy _______ (bởi vì) the bearings are dry.", answer: "because", hint: "Nêu lý do." }
    ],
    translation: [
      { vietnamese: "Tôi đã hoàn thành ca làm việc lúc 5 giờ chiều.", model_answer: "I completed the shift at 5 PM.", explanation: "I completed the shift at 5 PM." },
      { vietnamese: "Băng chuyền này sạch sẽ, khô ráo và an toàn.", model_answer: "This conveyor is clean, dry and safe.", explanation: "This conveyor is clean, dry and safe." }
    ]
  },
  quiz: [
    {
      question: "Câu nào dưới đây dùng đúng giới từ chỉ thời gian?",
      options: [
        "The shift starts in 7:00 AM.",
        "The shift starts on 7:00 AM.",
        "The shift starts at 7:00 AM.",
        "The shift starts to 7:00 AM."
      ],
      answer: 2,
      explanation: "Giờ giấc chính xác dùng giới từ 'at'."
    },
    {
      question: "Điền giới từ thích hợp: 'The fire drill is _______ October 15th.'",
      options: ["at", "on", "in", "by"],
      answer: 1,
      explanation: "Có ngày cụ thể (October 15th) ta dùng giới từ 'on'."
    },
    {
      question: "Chọn câu có cấu trúc There is / There are chính xác:",
      options: [
        "There are a safety valve on the boiler.",
        "There is two technicians in the workshop.",
        "There are three spare belts in the warehouse.",
        "There is four emergency exits."
      ],
      answer: 2,
      explanation: "'Three spare belts' là danh từ số nhiều, đi với 'There are'."
    },
    {
      question: "Đại từ chỉ định nào dùng cho một vật số ít ở khoảng cách xa người nói?",
      options: ["This", "That", "These", "Those"],
      answer: 1,
      explanation: "'That' dùng cho một vật (số ít) ở xa."
    },
    {
      question: "Từ nào trái nghĩa với 'loose' (lỏng)?",
      options: ["tight", "hot", "clean", "safe"],
      answer: 0,
      explanation: "Loose (lỏng) trái nghĩa với tight (chặt)."
    },
    {
      question: "Dạng đúng của động từ trong câu: 'The operator _______ (check) the machine every hour.'",
      options: ["check", "checks", "checking", "checked to"],
      answer: 1,
      explanation: "Chủ ngữ 'The operator' là ngôi thứ ba số ít, động từ chia 'checks'."
    },
    {
      question: "Câu ghép nào dưới đây ĐÚNG ngữ pháp?",
      options: [
        "Because the oil is low, so the pump stops.",
        "The oil is low, so the pump stops.",
        "Because the oil is low, but the pump stops.",
        "The oil is low because so the pump stops."
      ],
      answer: 1,
      explanation: "'The oil is low, so the pump stops' dùng đúng 1 liên từ 'so'."
    },
    {
      question: "Từ 'dangerous' có nghĩa tiếng Việt là gì?",
      options: ["An toàn", "Sạch sẽ", "Nguy hiểm", "Khô ráo"],
      answer: 2,
      explanation: "Dangerous = nguy hiểm."
    },
    {
      question: "Số thứ tự 'thứ ba' trong tiếng Anh viết là gì?",
      options: ["three", "thirteen", "third", "thirty"],
      answer: 2,
      explanation: "Third = thứ ba (số thứ tự 3rd)."
    },
    {
      question: "Từ để hỏi nào dùng để hỏi lý do/nguyên nhân?",
      options: ["What", "Where", "When", "Why"],
      answer: 3,
      explanation: "'Why' (tại sao) dùng để hỏi nguyên nhân/lý do."
    },
    {
      question: "Từ 'valve' phát âm kết thúc bằng âm phụ âm nào?",
      options: ["/f/", "/v/", "/b/", "/p/"],
      answer: 1,
      explanation: "Valve /vælv/ kết thúc bằng âm hữu thanh /v/."
    },
    {
      question: "Tính từ sở hữu tương ứng với đại từ 'WE' là gì?",
      options: ["my", "your", "his", "our"],
      answer: 3,
      explanation: "We (chúng tôi) -> our (của chúng tôi)."
    },
    {
      question: "Dịch câu: 'Hãy đóng van lại trước khi sửa chữa.'",
      options: [
        "Close the valve before repair.",
        "Opening the valve before repair.",
        "Closed valve before repairing.",
        "To close valve before repair."
      ],
      answer: 0,
      explanation: "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu: 'Close the valve before repair.'"
    },
    {
      question: "Cụm từ 'Shift Handover' có nghĩa là gì?",
      options: ["Nghỉ phép năm", "Bàn giao ca làm việc", "Khám sức khỏe", "Ăn trưa tập thể"],
      answer: 1,
      explanation: "Shift handover = Bàn giao ca làm việc."
    },
    {
      question: "Điền từ: 'This machine is old, _______ it works reliably.'",
      options: ["and", "but", "because", "so"],
      answer: 1,
      explanation: "'but' thể hiện tính chất đối lập: dù cũ NHƯNG vẫn chạy tin cậy."
    },
    {
      question: "Tháng 8 trong tiếng Anh viết là:",
      options: ["April", "August", "Autumn", "Autumnal"],
      answer: 1,
      explanation: "August = Tháng Tám."
    },
    {
      question: "Thứ Năm trong tuần là:",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      answer: 2,
      explanation: "Thursday = Thứ Năm."
    },
    {
      question: "Đại từ tân ngữ của 'THEY' là gì?",
      options: ["their", "theirs", "them", "themselves"],
      answer: 2,
      explanation: "They (chủ ngữ) -> them (tân ngữ)."
    },
    {
      question: "Khi thấy biển báo 'Caution: Wet Floor', hành động an toàn là gì?",
      options: [
        "Chạy thật nhanh qua sàn",
        "Đi cẩn thận để tránh trơn trượt",
        "Đổ thêm nước lên sàn",
        "Ngồi bệt xuống sàn"
      ],
      answer: 1,
      explanation: "Sàn ướt trơn trượt, cần đi cẩn thận."
    },
    {
      question: "Bạn đã hoàn thành toàn bộ 28 ngày của Tháng 1. Cấp độ bạn đã chinh phục là gì?",
      options: [
        "Vẫn chưa biết gì",
        "A0 Nền tảng vững chắc (Zero Ground Mastery)",
        "Giáo sư ngôn ngữ",
        "Bilingual chuyên nghiệp"
      ],
      answer: 1,
      explanation: "Bạn đã làm chủ toàn bộ nền tảng A0, sẵn sàng tự tin bước sang Tháng 2!"
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Đạt tối thiểu 16/20 câu trắc nghiệm (80%).",
      "Chúc mừng bạn đã hoàn thành Cột mốc Tháng 1! Mở khóa lộ trình Tháng 2."
    ]
  }
});

module.exports = days;
