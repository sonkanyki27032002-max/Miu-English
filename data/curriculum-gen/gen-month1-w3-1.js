// Month 1 detailed daily curriculum: Week 3 (Days 15 to 21)
// Days of the week, Prepositions of time (in, on, at), Telling time, Months/Seasons, Possessive adjectives, Wh- questions, Review
const days = [];

// Day 15
days.push({
  day: 15,
  month: 1,
  week: 3,
  title: "Các ngày trong tuần & Giới từ 'ON'",
  topic_en: "Days of the week and preposition ON",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Phát âm chuẩn 7 ngày trong tuần: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
    "Nắm vững quy tắc dùng giới từ 'ON' trước các thứ trong tuần (on Monday, on Friday).",
    "Phân biệt ngày làm việc (weekdays) và ngày cuối tuần (the weekend).",
    "Đặt câu về lịch bảo trì hoặc ca trực theo các ngày trong tuần."
  ],
  new_vocab: [
    { en: "Monday", vi: "thứ Hai", ipa: "/ˈmʌn.deɪ/", example: "We start work on Monday.", collocation: "on Monday morning" },
    { en: "Tuesday", vi: "thứ Ba", ipa: "/ˈtʃuːz.deɪ/", example: "Inspect the boiler on Tuesday.", collocation: "on Tuesday" },
    { en: "Wednesday", vi: "thứ Tư", ipa: "/ˈwenz.deɪ/", example: "Safety talk is on Wednesday.", collocation: "on Wednesday" },
    { en: "Thursday", vi: "thứ Năm", ipa: "/ˈθɜːz.deɪ/", example: "Submit report on Thursday.", collocation: "on Thursday" },
    { en: "Friday", vi: "thứ Sáu", ipa: "/ˈfraɪ.deɪ/", example: "Shift ends on Friday afternoon.", collocation: "on Friday" },
    { en: "Saturday", vi: "thứ Bảy", ipa: "/ˈsæt.ə.deɪ/", example: "Overtime is available on Saturday.", collocation: "on Saturday" },
    { en: "Sunday", vi: "Chủ nhật", ipa: "/ˈsʌn.deɪ/", example: "The plant is closed on Sunday.", collocation: "on Sunday" },
    { en: "weekend", vi: "cuối tuần", ipa: "/ˌwiːkˈend/", example: "Have a nice weekend.", collocation: "on the weekend" }
  ],
  review_vocab: ["today", "yesterday", "tomorrow", "schedule", "technician"],
  grammar_vi: `### 1. 7 ngày trong tuần (Luôn viết hoa chữ cái đầu)
- **Monday**: Thứ Hai (/ˈmʌn.deɪ/)
- **Tuesday**: Thứ Ba (/ˈtʃuːz.deɪ/)
- **Wednesday**: Thứ Tư (/ˈwenz.deɪ/ - *chú ý: chữ 'd' câm*)
- **Thursday**: Thứ Năm (/ˈθɜːz.deɪ/ - *chú ý: âm đầu /θ/ kẹp lưỡi*)
- **Friday**: Thứ Sáu (/ˈfraɪ.deɪ/)
- **Saturday**: Thứ Bảy (/ˈsæt.ə.deɪ/)
- **Sunday**: Chủ Nhật (/ˈsʌn.deɪ/)

### 2. Quy tắc dùng Giới từ ON:
- Luôn dùng giới từ **ON** đứng trước các thứ trong tuần hoặc ngày cụ thể:
  - *on Monday* (vào thứ Hai)
  - *on Friday afternoon* (vào chiều thứ Sáu)
  - *on the weekend* (vào dịp cuối tuần - Anh Mỹ) hoặc *at the weekend* (Anh-Anh)

> **Mẹo nhớ**: Thứ trong tuần có chữ **Day** -> Đi với giới từ **ON**.`,
  listening: {
    audio_text: "Supervisor: When is the motor maintenance scheduled? Alex: It is scheduled on Tuesday morning, sir. Supervisor: And when is the toolbox talk? Alex: The toolbox talk is on Wednesday at 7:30. Supervisor: Are you on duty this Saturday? Alex: No, I am off duty on the weekend.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Supervisor", text: "When is the motor maintenance scheduled?" },
      { speaker: "Alex", text: "It is scheduled on Tuesday morning, sir." },
      { speaker: "Supervisor", text: "And when is the toolbox talk?" },
      { speaker: "Alex", text: "The toolbox talk is on Wednesday at 7:30." },
      { speaker: "Supervisor", text: "Are you on duty this Saturday?" },
      { speaker: "Alex", text: "No, I am off duty on the weekend." }
    ],
    questions: [
      {
        question: "On which day is the motor maintenance scheduled?",
        options: ["On Monday", "On Tuesday morning", "On Friday"],
        answer: 1,
        explanation: "Alex trả lời: 'It is scheduled on Tuesday morning, sir.'"
      },
      {
        question: "Is Alex working on Saturday?",
        options: ["Yes, he is working", "No, he is off duty on the weekend", "He is working on Sunday"],
        answer: 1,
        explanation: "Alex nói: 'No, I am off duty on the weekend' (nghỉ cuối tuần)."
      }
    ]
  },
  speaking: {
    prompt: "Nói lịch làm việc và ngày nghỉ của bạn trong tuần.",
    target_sentence: "I work on Monday, Tuesday, and Friday. I am off on Sunday.",
    substitution_drill: [
      { cue: "Wednesday / safety talk", sentence: "We have a safety talk on Wednesday." },
      { cue: "Thursday / inspection", sentence: "The inspection is on Thursday." },
      { cue: "Saturday / overtime", sentence: "I work overtime on Saturday." }
    ],
    sample_answer: "I work from Monday to Friday. On the weekend, I rest with my family.",
    self_check: [
      "Tôi đã phát âm chữ 'd' câm trong Wednesday (/ˈwenz.deɪ/) chưa?",
      "Tôi đã dùng giới từ 'on' trước các thứ chưa?"
    ]
  },
  reading: {
    text: "At our manufacturing facility, the weekly schedule is strictly planned. On Monday, the whole team attends a safety briefing. On Tuesday and Thursday, technicians perform routine maintenance. On Wednesday, quality auditors inspect line one. Friday is for housekeeping and 5S. Saturday and Sunday are rest days for most workers.",
    translation: "Tại nhà máy sản xuất của chúng tôi, lịch trình tuần được lên kế hoạch nghiêm ngặt. Vào thứ Hai, cả đội tham gia buổi phổ biến an toàn. Vào thứ Ba và thứ Năm, các kỹ thuật viên thực hiện bảo trì định kỳ. Vào thứ Tư, các chuyên viên kiểm toán chất lượng kiểm tra dây chuyền một. Thứ Sáu dành cho công tác dọn dẹp vệ sinh và 5S. Thứ Bảy và Chủ nhật là ngày nghỉ đối với hầu hết công nhân.",
    questions: [
      {
        question: "What happens on Friday according to the schedule?",
        options: ["Routine maintenance", "Housekeeping and 5S", "Total shutdown"],
        answer: 1,
        explanation: "Trong bài: 'Friday is for housekeeping and 5S.'"
      },
      {
        question: "When do technicians perform routine maintenance?",
        options: ["On Monday and Wednesday", "On Tuesday and Thursday", "Only on Sunday"],
        answer: 1,
        explanation: "Bài đọc nêu: 'On Tuesday and Thursday, technicians perform routine maintenance.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["maintenance", "is", "The", "Monday.", "on"], solution: "The maintenance is on Monday.", hint: "The maintenance is on..." },
      { words: ["Wednesday.", "talk", "is", "The", "on"], solution: "The talk is on Wednesday.", hint: "The talk is on..." }
    ],
    fill_blank: [
      { sentence_with_blank: "We have a team meeting _______ (vào) Friday morning.", answer: "on", hint: "Giới từ đi với thứ trong tuần." },
      { sentence_with_blank: "The plant is closed _______ Sunday.", answer: "on", hint: "Giới từ trước Sunday." }
    ],
    translation: [
      { vietnamese: "Cuộc họp an toàn diễn ra vào thứ Hai.", model_answer: "The safety meeting is on Monday.", explanation: "The safety meeting is on Monday." },
      { vietnamese: "Tôi làm việc từ thứ Hai đến thứ Sáu.", model_answer: "I work from Monday to Friday.", explanation: "I work from Monday to Friday." }
    ]
  },
  quiz: [
    {
      question: "Giới từ nào đi với các thứ trong tuần (Monday, Tuesday, etc.)?",
      options: ["in", "on", "at"],
      answer: 1,
      explanation: "Quy tắc ngữ pháp tiếng Anh luôn dùng giới từ 'on' trước các thứ trong tuần."
    },
    {
      question: "Từ 'Wednesday' phát âm chuẩn như thế nào?",
      options: ["/ˈwed.nəs.deɪ/", "/ˈwenz.deɪ/", "/wedˈnes.deɪ/"],
      answer: 1,
      explanation: "Chữ 'd' trong Wednesday là âm câm, phát âm chuẩn là /ˈwenz.deɪ/ (2 âm tiết)."
    },
    {
      question: "Cặp ngày nào sau đây thuộc về 'the weekend' (cuối tuần)?",
      options: ["Thursday and Friday", "Friday and Saturday", "Saturday and Sunday"],
      answer: 2,
      explanation: "'The weekend' (cuối tuần) bao gồm thứ Bảy (Saturday) và Chủ nhật (Sunday)."
    }
  ]
});

// Day 16
days.push({
  day: 16,
  month: 1,
  week: 3,
  title: "Các buổi trong ngày & Giới từ 'IN' / 'AT'",
  topic_en: "Parts of the day and prepositions IN / AT",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Sử dụng chuẩn xác: in the morning, in the afternoon, in the evening.",
    "Nắm ngoại lệ cực kỳ quan trọng: at noon, at night, at midnight.",
    "Mô tả lịch ca làm việc theo các buổi trong ngày.",
    "Kết hợp giới từ ngày (on) và buổi (in): 'on Monday morning'."
  ],
  new_vocab: [
    { en: "morning", vi: "buổi sáng", ipa: "/ˈmɔː.nɪŋ/", example: "Inspect tools in the morning.", collocation: "in the morning" },
    { en: "afternoon", vi: "buổi chiều", ipa: "/ˌɑːf.təˈnuːn/", example: "Delivery arrives in the afternoon.", collocation: "in the afternoon" },
    { en: "evening", vi: "buổi tối", ipa: "/ˈiːv.nɪŋ/", example: "Shift handover in the evening.", collocation: "in the evening" },
    { en: "noon", vi: "buổi trưa đúng 12:00", ipa: "/nuːn/", example: "Lunch break at noon.", collocation: "at noon" },
    { en: "night", vi: "ban đêm", ipa: "/naɪt/", example: "The plant runs at night.", collocation: "at night" },
    { en: "midnight", vi: "nửa đêm (24:00)", ipa: "/ˈmɪd.naɪt/", example: "Handover is at midnight.", collocation: "at midnight" }
  ],
  review_vocab: ["Monday", "Friday", "schedule", "break", "shift"],
  grammar_vi: `### 1. Quy tắc dùng giới từ IN cho các buổi lớn trong ngày:
- **in the morning**: vào buổi sáng
- **in the afternoon**: vào buổi chiều
- **in the evening**: vào buổi tối

### 2. Ngoại lệ dùng giới từ AT:
Điểm thời gian chuẩn xác hoặc ban đêm dùng **AT**:
- **at noon**: vào buổi trưa đúng 12h
- **at night**: vào ban đêm
- **at midnight**: vào lúc nửa đêm đúng 24h

### 3. Kết hợp Thứ + Buổi:
Khi có Thứ đứng trước, giới từ **ON** luôn chiến thắng:
- *on Monday morning* (vào sáng thứ Hai - không dùng in)
- *on Friday afternoon* (vào chiều thứ Sáu)`,
  listening: {
    audio_text: "Supervisor: When does the day shift start? Operator: The day shift starts in the morning at seven o'clock. Supervisor: When is the lunch break? Operator: Lunch break is at noon. Supervisor: And what about the night shift? Operator: The night shift starts in the evening and runs through the night until midnight.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Supervisor", text: "When does the day shift start?" },
      { speaker: "Operator", text: "The day shift starts in the morning at seven o'clock." },
      { speaker: "Supervisor", text: "When is the lunch break?" },
      { speaker: "Operator", text: "Lunch break is at noon." },
      { speaker: "Supervisor", text: "And what about the night shift?" },
      { speaker: "Operator", text: "The night shift starts in the evening and runs through the night until midnight." }
    ],
    questions: [
      {
        question: "When is the lunch break according to the operator?",
        options: ["In the morning", "At noon", "At night"],
        answer: 1,
        explanation: "Vận hành viên nói: 'Lunch break is at noon' (lúc 12h trưa)."
      },
      {
        question: "When does the day shift start?",
        options: ["In the morning at 7:00", "At noon", "At midnight"],
        answer: 0,
        explanation: "Trong bài: 'The day shift starts in the morning at seven o'clock.'"
      }
    ]
  },
  speaking: {
    prompt: "Nói về những việc bạn làm vào buổi sáng, buổi chiều và ban đêm.",
    target_sentence: "I inspect motors in the morning. I check reports in the afternoon. I rest at night.",
    substitution_drill: [
      { cue: "in the morning / briefing", sentence: "We have a safety briefing in the morning." },
      { cue: "at noon / lunch", sentence: "We eat lunch at noon." },
      { cue: "at night / standby", sentence: "Two technicians are on standby at night." }
    ],
    sample_answer: "In the morning, I inspect the machines. At noon, I have lunch. At night, I sleep well.",
    self_check: [
      "Tôi đã dùng 'in the morning' và 'at night' chuẩn chưa?",
      "Tôi đã phát âm đúng âm /n/ trong 'noon' và /t/ trong 'night' chưa?"
    ]
  },
  reading: {
    text: "Factory operations operate on a 24-hour cycle. In the morning, incoming workers check pre-use logs. At noon, the cafeteria serves hot meals to the crew. In the afternoon, maintenance teams perform scheduled overhauls. At night, fewer personnel are on site, so lighting and security are increased to prevent accidents.",
    translation: "Hoạt động nhà máy diễn ra theo chu kỳ 24 giờ. Vào buổi sáng, công nhân vào ca kiểm tra sổ nhật ký trước vận hành. Vào buổi trưa, nhà ăn phục vụ các bữa ăn nóng cho kíp thợ. Vào buổi chiều, các đội bảo trì thực hiện đại tu theo lịch. Vào ban đêm, số lượng nhân sự có mặt ít hơn, vì vậy hệ thống chiếu sáng và an ninh được tăng cường để phòng ngừa tai nạn.",
    questions: [
      {
        question: "Why are lighting and security increased at night?",
        options: ["To celebrate a party", "Because fewer personnel are on site, to prevent accidents", "To clean the floors"],
        answer: 1,
        explanation: "Bài đọc nêu rõ: 'At night, fewer personnel are on site, so lighting and security are increased to prevent accidents.'"
      },
      {
        question: "What do incoming workers check in the morning?",
        options: ["The weather forecast", "Pre-use logs", "The lunch menu"],
        answer: 1,
        explanation: "Trong bài: 'In the morning, incoming workers check pre-use logs.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["morning.", "the", "in", "work", "We"], solution: "We work in the morning.", hint: "In the morning..." },
      { words: ["is", "break", "The", "noon.", "at"], solution: "The break is at noon.", hint: "At noon..." }
    ],
    fill_blank: [
      { sentence_with_blank: "I check the pump _______ (vào) the morning.", answer: "in", hint: "Giới từ đi với the morning." },
      { sentence_with_blank: "The security lights turn on _______ night.", answer: "at", hint: "Giới từ đi với night." }
    ],
    translation: [
      { vietnamese: "Chúng tôi nghỉ ăn trưa lúc 12 giờ trưa.", model_answer: "We take a lunch break at noon.", explanation: "We take a lunch break at noon (hoặc have lunch at noon)." },
      { vietnamese: "Nhà máy vẫn vận hành vào ban đêm.", model_answer: "The plant operates at night.", explanation: "The plant operates at night." }
    ]
  },
  quiz: [
    {
      question: "Cụm từ nào dưới đây dùng giới từ ĐÚNG?",
      options: ["in night", "at the morning", "in the afternoon"],
      answer: 2,
      explanation: "Đúng chuẩn: in the morning, in the afternoon, in the evening; nhưng at night, at noon."
    },
    {
      question: "Điền giới từ đúng: 'The shift ends _______ noon.'",
      options: ["in", "on", "at"],
      answer: 2,
      explanation: "Đi với 'noon' luôn dùng giới từ 'at' (at noon = lúc 12 giờ trưa)."
    },
    {
      question: "Điền giới từ đúng: 'We inspect the boiler _______ Tuesday morning.'",
      options: ["in", "on", "at"],
      answer: 1,
      explanation: "Khi có thứ (Tuesday) kết hợp với buổi (morning), giới từ 'on' luôn được ưu tiên: 'on Tuesday morning'."
    }
  ]
});

// Day 17
days.push({
  day: 17,
  month: 1,
  week: 3,
  title: "Hỏi & Nói giờ chính xác trong công việc",
  topic_en: "Asking and telling time accurately at work",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Hỏi giờ bằng tiếng Anh: 'What time is it?' và 'What time does the shift start?'",
    "Nói giờ tròn (o'clock) và giờ phút thông dụng (7:30, 8:15, 14:00).",
    "Phân biệt hệ thống 12 giờ (AM / PM) và hệ thống 24 giờ trong công nghiệp.",
    "Sử dụng giới từ 'AT' trước giờ giấc: 'at 7:30 AM'."
  ],
  new_vocab: [
    { en: "time", vi: "thời gian / giờ", ipa: "/taɪm/", example: "What time is it?", collocation: "on time" },
    { en: "o'clock", vi: "giờ đúng (chỉ dùng cho giờ tròn)", ipa: "/əˈklɒk/", example: "It is eight o'clock.", collocation: "at eight o'clock" },
    { en: "hour", vi: "tiếng đồng hồ (thời lượng)", ipa: "/aʊər/", example: "The shift is eight hours.", collocation: "per hour" },
    { en: "minute", vi: "phút", ipa: "/ˈmɪn.ɪt/", example: "Wait ten minutes.", collocation: "in ten minutes" },
    { en: "AM", vi: "buổi sáng (trước 12h trưa)", ipa: "/ˌeɪˈem/", example: "We start at 7:00 AM.", collocation: "7:00 AM" },
    { en: "PM", vi: "buổi chiều/tối (sau 12h trưa)", ipa: "/ˌpiːˈem/", example: "Shift ends at 3:30 PM.", collocation: "3:30 PM" }
  ],
  review_vocab: ["morning", "noon", "night", "at", "start", "finish"],
  grammar_vi: `### 1. Cách hỏi giờ:
- \`What time is it?\` (Mấy giờ rồi?)
- \`What time does [Sự việc] start?\` (Mấy giờ sự việc bắt đầu?)
  - *What time does the morning shift start?*

### 2. Cách nói giờ đơn giản nhất (Giờ trước, Phút sau):
Đọc số giờ rồi đọc số phút:
- 7:00 -> *It is seven o'clock.* (Chỉ dùng 'o'clock' khi giờ đúng, không có phút lẻ).
- 7:15 -> *It is seven fifteen.*
- 7:30 -> *It is seven thirty.* (Hoặc: *half past seven*).
- 7:45 -> *It is seven forty-five.*

### 3. Quy tắc dùng Giới từ AT:
Luôn dùng **AT** trước mốc thời gian giờ giấc cụ thể:
- *at seven o'clock* (vào lúc 7 giờ đúng)
- *at 8:30 AM* (vào lúc 8 rưỡi sáng)
- *at 15:00* (lúc 15 giờ chiều)`,
  listening: {
    audio_text: "Technician: Excuse me, what time is it now? Supervisor: It is seven twenty-five AM. Technician: And what time does the toolbox talk start? Supervisor: It starts at seven thirty sharp. Please do not be late. Technician: Yes, thank you, sir.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Technician", text: "Excuse me, what time is it now?" },
      { speaker: "Supervisor", text: "It is seven twenty-five AM." },
      { speaker: "Technician", text: "And what time does the toolbox talk start?" },
      { speaker: "Supervisor", text: "It starts at seven thirty sharp. Please do not be late." },
      { speaker: "Technician", text: "Yes, thank you, sir." }
    ],
    questions: [
      {
        question: "What time is it right now in the dialogue?",
        options: ["7:00 AM", "7:25 AM", "7:30 AM"],
        answer: 1,
        explanation: "Người giám sát nói: 'It is seven twenty-five AM' (7 giờ 25 phút)."
      },
      {
        question: "What time does the toolbox talk start?",
        options: ["7:25 AM", "7:30 AM", "8:00 AM"],
        answer: 1,
        explanation: "Họp an toàn bắt đầu lúc: 'seven thirty sharp' (7 giờ 30 đúng)."
      }
    ]
  },
  speaking: {
    prompt: "Hỏi giờ và thông báo thời gian bắt đầu ca làm việc của bạn.",
    target_sentence: "What time is it? - It is eight o'clock. The shift starts at eight thirty.",
    substitution_drill: [
      { cue: "7:00 / 7:15", sentence: "It is seven o'clock. The meeting is at seven fifteen." },
      { cue: "12:00 / 12:30", sentence: "It is twelve o'clock. Lunch finishes at twelve thirty." }
    ],
    sample_answer: "What time is it now? It is seven fifteen AM. My work starts at seven thirty.",
    self_check: [
      "Tôi đã phát âm chữ 'h' câm trong từ 'hour' (/aʊər/) chưa?",
      "Tôi đã dùng giới từ 'at' trước giờ giấc chưa?"
    ]
  },
  reading: {
    text: "Punctuality is a pillar of workplace safety. The morning shift starts at 7:00 AM sharp. Technicians check the equipment logs from 7:00 to 7:15. The toolbox briefing begins at 7:15 and finishes at 7:30. If you arrive at 7:35, you miss vital safety instructions. Always be on site ten minutes early.",
    translation: "Đúng giờ là một trụ cột của an toàn lao động. Ca sáng bắt đầu lúc 7:00 đúng. Các kỹ thuật viên kiểm tra sổ nhật ký máy từ 7:00 đến 7:15. Buổi họp an toàn đầu giờ bắt đầu lúc 7:15 và kết thúc lúc 7:30. Nếu bạn đến lúc 7:35, bạn sẽ bỏ lỡ những chỉ dẫn an toàn sống còn. Luôn có mặt tại hiện trường sớm 10 phút.",
    questions: [
      {
        question: "What time does the toolbox briefing finish?",
        options: ["At 7:00 AM", "At 7:15 AM", "At 7:30 AM"],
        answer: 2,
        explanation: "Đoạn văn nêu rõ: 'The toolbox briefing begins at 7:15 and finishes at 7:30.'"
      },
      {
        question: "What is recommended at the end of the text?",
        options: ["Arrive at 7:35", "Always be on site ten minutes early", "Skip the briefing"],
        answer: 1,
        explanation: "Câu cuối khuyên: 'Always be on site ten minutes early.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["it?", "What", "is", "time"], solution: "What time is it?", hint: "Câu hỏi giờ." },
      { words: ["starts", "eight", "shift", "The", "at", "o'clock."], solution: "The shift starts at eight o'clock.", hint: "The shift starts at..." }
    ],
    fill_blank: [
      { sentence_with_blank: "The meeting starts _______ 7:30 AM.", answer: "at", hint: "Giới từ đi với giờ giấc." },
      { sentence_with_blank: "It is eight _______ (giờ đúng).", answer: "o'clock", hint: "Từ chỉ giờ tròn." }
    ],
    translation: [
      { vietnamese: "Mấy giờ rồi?", model_answer: "What time is it?", explanation: "What time is it?" },
      { vietnamese: "Ca làm việc bắt đầu lúc 7 giờ sáng.", model_answer: "The shift starts at seven AM.", explanation: "The shift starts at seven AM (hoặc at seven o'clock in the morning)." }
    ]
  },
  quiz: [
    {
      question: "Khi nào ta mới được sử dụng từ 'o'clock'?",
      options: ["Khi có phút lẻ (như 7:15)", "Chỉ khi là giờ tròn đúng (như 7:00, 8:00)", "Bất kỳ giờ nào"],
      answer: 1,
      explanation: "Từ 'o'clock' chỉ dùng khi nói giờ tròn, không có phút lẻ đi kèm."
    },
    {
      question: "Từ 'hour' (tiếng đồng hồ) có cách phát âm như thế nào?",
      options: ["Chữ 'h' phát âm là /h/", "Chữ 'h' là âm câm, phát âm là /aʊər/", "Phát âm là /hɔːr/"],
      answer: 1,
      explanation: "Trong từ 'hour', chữ 'h' là âm câm hoàn toàn, phát âm giống như từ 'our' (/aʊər/). Do đó dùng 'an hour'."
    },
    {
      question: "Để nói 'Cuộc họp diễn ra lúc 8 giờ rưỡi', câu nào ĐÚNG?",
      options: ["The meeting is in 8:30.", "The meeting is on 8:30.", "The meeting is at 8:30."],
      answer: 2,
      explanation: "Trước mốc giờ cụ thể luôn luôn dùng giới từ 'at'."
    }
  ]
});

console.log("Week 3 part 1 generated (Days 15-17).");
module.exports = days;
