// Month 1 detailed daily curriculum: Week 3 (Days 18 to 21)
// Months, Seasons, Possessive adjectives, Wh- questions, and Week 3 Review
const days = [];

// Day 18
days.push({
  day: 18,
  month: 1,
  week: 3,
  title: "Các tháng trong năm, Mùa & Giới từ 'IN'",
  topic_en: "Months of the year, seasons, and preposition IN",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Đọc chuẩn xác 12 tháng trong năm từ January đến December.",
    "Nắm 4 mùa: spring, summer, autumn (fall), winter và các mùa nhiệt đới (rainy season, dry season).",
    "Áp dụng giới từ 'IN' trước tháng, mùa và năm (in July, in summer, in 2026).",
    "Phân biệt: on + ngày cụ thể (on July 15) vs in + tháng/năm (in July)."
  ],
  new_vocab: [
    { en: "January", vi: "tháng Một", ipa: "/ˈdʒæn.ju.ə.ri/", example: "The year begins in January.", collocation: "in January" },
    { en: "February", vi: "tháng Hai", ipa: "/ˈfeb.ru.ə.ri/", example: "Audit starts in February.", collocation: "in February" },
    { en: "March", vi: "tháng Ba", ipa: "/mɑːtʃ/", example: "Spring begins in March.", collocation: "in March" },
    { en: "April", vi: "tháng Tư", ipa: "/ˈeɪ.prəl/", example: "Quarter two starts in April.", collocation: "in April" },
    { en: "May", vi: "tháng Năm", ipa: "/meɪ/", example: "Labor Day is in May.", collocation: "in May" },
    { en: "June", vi: "tháng Sáu", ipa: "/dʒuːn/", example: "Mid-year review is in June.", collocation: "in June" },
    { en: "July", vi: "tháng Bảy", ipa: "/dʒuˈlaɪ/", example: "Shutdown is in July.", collocation: "in July" },
    { en: "August", vi: "tháng Tám", ipa: "/ɔːˈɡʌst/", example: "Summer heat peaks in August.", collocation: "in August" },
    { en: "September", vi: "tháng Chín", ipa: "/sepˈtem.bər/", example: "Quarter three ends in September.", collocation: "in September" },
    { en: "October", vi: "tháng Mười", ipa: "/ɒkˈtəʊ.bər/", example: "Fire drill is in October.", collocation: "in October" },
    { en: "November", vi: "tháng Mười Một", ipa: "/nəʊˈvem.bər/", example: "New tools arrive in November.", collocation: "in November" },
    { en: "December", vi: "tháng Mười Hai", ipa: "/dɪˈsem.bər/", example: "Inventory check is in December.", collocation: "in December" },
    { en: "season", vi: "mùa trong năm", ipa: "/ˈsiː.zən/", example: "The rainy season brings high humidity.", collocation: "rainy season" }
  ],
  review_vocab: ["Monday", "today", "yesterday", "tomorrow", "date of birth", "year"],
  grammar_vi: `### 1. 12 tháng trong năm (Luôn viết hoa chữ cái đầu)
1. **January** /ˈdʒæn.ju.ə.ri/
2. **February** /ˈfeb.ru.ə.ri/
3. **March** /mɑːtʃ/
4. **April** /ˈeɪ.prəl/
5. **May** /meɪ/
6. **June** /dʒuːn/
7. **July** /dʒuˈlaɪ/ (trọng âm rơi vào âm tiết 2)
8. **August** /ˈɔː.ɡʌst/
9. **September** /sepˈtem.bər/
10. **October** /ɒkˈtəʊ.bər/
11. **November** /nəʊˈvem.bər/
12. **December** /dɪˈsem.bər/

### 2. Quy tắc dùng Giới từ IN vs ON:
- **Dùng IN**: Đi với **Tháng**, **Mùa**, **Năm** (khoảng thời gian dài):
  - *in July* (vào tháng Bảy)
  - *in the summer* (vào mùa hè)
  - *in 2026* (vào năm 2026)
- **Dùng ON**: Khi có **Ngày cụ thể** gắn với tháng:
  - *on July 15* (vào ngày 15 tháng Bảy)
  - *on May 1st* (vào ngày 1 tháng Năm)`,
  listening: {
    audio_text: "Manager: When is our planned plant shutdown? Engineer: It is scheduled in July, sir. Manager: In July? Isn't it very hot in the summer? Engineer: Yes, but the rainy season starts in August. We need to complete all roof maintenance before the heavy rains.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Manager", text: "When is our planned plant shutdown?" },
      { speaker: "Engineer", text: "It is scheduled in July, sir." },
      { speaker: "Manager", text: "In July? Isn't it very hot in the summer?" },
      { speaker: "Engineer", text: "Yes, but the rainy season starts in August. We need to complete all roof maintenance before the heavy rains." }
    ],
    questions: [
      {
        question: "In which month is the plant shutdown planned?",
        options: ["In May", "In July", "In August"],
        answer: 1,
        explanation: "Kỹ sư nói rõ: 'It is scheduled in July, sir.'"
      },
      {
        question: "When does the rainy season start according to the dialogue?",
        options: ["In July", "In August", "In December"],
        answer: 1,
        explanation: "Kỹ sư giải thích: 'the rainy season starts in August.'"
      }
    ]
  },
  speaking: {
    prompt: "Nói tháng sinh của bạn và tháng diễn ra kỳ bảo dưỡng nhà máy.",
    target_sentence: "My birthday is in October. The plant maintenance is in July.",
    substitution_drill: [
      { cue: "May / hot", sentence: "It is very hot in May." },
      { cue: "August / rainy season", sentence: "The rainy season starts in August." },
      { cue: "December / inventory", sentence: "The inventory check is in December." }
    ],
    sample_answer: "I was born in March. The annual boiler inspection is in November.",
    self_check: [
      "Tôi đã phát âm trọng âm của July (/dʒuˈlaɪ/) ở âm tiết thứ 2 chưa?",
      "Tôi đã dùng giới từ 'in' trước tháng chưa?"
    ]
  },
  reading: {
    text: "Industrial maintenance follows the seasons. In spring (March and April), teams clean outdoor drainage systems. In summer (June and July), workers take extra hydration breaks to prevent heatstroke. In autumn (September and October), electrical cabinets are sealed against humidity. In winter (December and January), heating and insulation systems are tested.",
    translation: "Bảo trì công nghiệp tuân theo các mùa. Vào mùa xuân (tháng Ba và tháng Tư), các đội dọn dẹp hệ thống thoát nước ngoài trời. Vào mùa hè (tháng Sáu và tháng Bảy), công nhân được nghỉ bù nước tăng cường để phòng tránh say nắng. Vào mùa thu (tháng Chín và tháng Mười), các tủ điện được bọc kín để chống ẩm. Vào mùa đông (tháng Mười Hai và tháng Một), hệ thống sưởi và cách nhiệt được kiểm tra nghiệm thu.",
    questions: [
      {
        question: "What do workers do in summer to prevent heatstroke?",
        options: ["Wear heavy coats", "Take extra hydration breaks", "Stop working completely"],
        answer: 1,
        explanation: "Bài đọc nêu: 'workers take extra hydration breaks to prevent heatstroke.'"
      },
      {
        question: "In which months are drainage systems cleaned?",
        options: ["In March and April", "In June and July", "In December and January"],
        answer: 0,
        explanation: "Trong bài: 'In spring (March and April), teams clean outdoor drainage systems.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "shutdown", "The", "July.", "in"], solution: "The shutdown is in July.", hint: "The shutdown is in..." },
      { words: ["begins", "summer.", "in", "Maintenance", "the"], solution: "Maintenance begins in the summer.", hint: "In the summer..." }
    ],
    fill_blank: [
      { sentence_with_blank: "The new contract starts _______ (vào tháng) January.", answer: "in", hint: "Giới từ trước tháng." },
      { sentence_with_blank: "Labor Day is celebrated _______ May 1st.", answer: "on", hint: "Có ngày cụ thể dùng on." }
    ],
    translation: [
      { vietnamese: "Đợt dừng máy bảo trì diễn ra vào tháng Bảy.", model_answer: "The maintenance shutdown takes place in July.", explanation: "The maintenance shutdown is in July (hoặc takes place in July)." },
      { vietnamese: "Mùa mưa bắt đầu vào tháng Tám.", model_answer: "The rainy season starts in August.", explanation: "The rainy season starts in August." }
    ]
  },
  quiz: [
    {
      question: "Giới từ nào đi với tháng đứng một mình (ví dụ: '_______ October')?",
      options: ["on", "in", "at"],
      answer: 1,
      explanation: "Đứng trước tháng (không có ngày cụ thể đi kèm) luôn dùng giới từ 'in'."
    },
    {
      question: "Tháng nào dưới đây có trọng âm rơi vào âm tiết thứ HAI?",
      options: ["August", "July", "April"],
      answer: 1,
      explanation: "July phát âm là /dʒuˈlaɪ/, trọng âm rơi vào âm tiết thứ hai. August và April trọng âm rơi vào âm đầu."
    },
    {
      question: "Câu nào dưới đây ĐÚNG khi nói về ngày 15 tháng 5?",
      options: ["The audit is in May 15.", "The audit is on May 15.", "The audit is at May 15."],
      answer: 1,
      explanation: "Khi có ngày cụ thể (May 15), ta bắt buộc phải dùng giới từ 'on'."
    }
  ]
});

// Day 19
days.push({
  day: 19,
  month: 1,
  week: 3,
  title: "Tính từ sở hữu: My, Your, His, Her, Our, Their",
  topic_en: "Possessive adjectives: My, Your, His, Her, Our, Their",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Nắm chắc 6 tính từ sở hữu: my (của tôi), your (của bạn), his (của anh ấy), her (của cô ấy), our (của chúng tôi), their (của họ).",
    "Phân biệt rõ ràng giữa Đại từ nhân xưng (He/She/They) và Tính từ sở hữu (His/Her/Their).",
    "Nói về đồ dùng cá nhân, trách nhiệm và người quản lý.",
    "Tránh lỗi sai phổ biến: nhầm lẫn giữa 'he' và 'his', 'they' và 'their'."
  ],
  new_vocab: [
    { en: "my", vi: "của tôi", ipa: "/maɪ/", example: "This is my toolbox.", collocation: "my name / my job" },
    { en: "your", vi: "của bạn / của các bạn", ipa: "/jɔːr/", example: "Where is your badge?", collocation: "your turn" },
    { en: "his", vi: "của anh ấy", ipa: "/hɪz/", example: "His locker is number ten.", collocation: "his supervisor" },
    { en: "her", vi: "của cô ấy", ipa: "/hɜːr/", example: "Her presentation was clear.", collocation: "her office" },
    { en: "our", vi: "của chúng tôi / chúng ta", ipa: "/aʊər/", example: "Our safety goal is zero harm.", collocation: "our team" },
    { en: "their", vi: "của họ", ipa: "/ðeər/", example: "Their tools are clean.", collocation: "their responsibility" }
  ],
  review_vocab: ["I", "you", "he", "she", "we", "they", "name", "tool", "badge", "supervisor"],
  grammar_vi: `### 1. Bảng đối chiếu Đại từ nhân xưng & Tính từ sở hữu
| Đại từ nhân xưng (Làm chủ ngữ) | Tính từ sở hữu (Đứng trước danh từ) | Ví dụ minh họa |
| :--- | :--- | :--- |
| **I** (Tôi) | **my** (của tôi) | *This is **my** helmet.* |
| **You** (Bạn) | **your** (của bạn) | *Show me **your** badge.* |
| **He** (Anh ấy) | **his** (của anh ấy) | *Mr. David is **his** supervisor.* |
| **She** (Cô ấy) | **her** (của cô ấy) | *Lan is at **her** desk.* |
| **It** (Nó) | **its** (của nó - không có dấu phẩy) | *The pump and **its** motor.* |
| **We** (Chúng tôi) | **our** (của chúng tôi) | *Safety is **our** priority.* |
| **They** (Họ) | **their** (của họ) | *Contractors wear **their** PPE.* |

> **Lỗi sai chết người cần tránh**:
> - KHÔNG nói: *He car is blue* -> Phải nói: *His car is blue.*
> - KHÔNG nói: *They tools are missing* -> Phải nói: *Their tools are missing.*
> - **its** (sở hữu) khác với **it's** (viết tắt của *it is*).`,
  listening: {
    audio_text: "Supervisor: Whose toolbox is this? Alex: It is my toolbox, sir. Supervisor: Keep it organized. And where is David? Is that his wrench on the floor? Alex: Yes, that is his wrench. He is in the breakroom. Supervisor: Tell David to store his tools properly. Our safety depends on everyone.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Supervisor", text: "Whose toolbox is this?" },
      { speaker: "Alex", text: "It is my toolbox, sir." },
      { speaker: "Supervisor", text: "Keep it organized. And where is David? Is that his wrench on the floor?" },
      { speaker: "Alex", text: "Yes, that is his wrench. He is in the breakroom." },
      { speaker: "Supervisor", text: "Tell David to store his tools properly. Our safety depends on everyone." }
    ],
    questions: [
      {
        question: "Whose wrench is on the floor?",
        options: ["Alex's wrench", "David's wrench", "The supervisor's wrench"],
        answer: 1,
        explanation: "Alex xác nhận: 'Yes, that is his wrench' (David's wrench)."
      },
      {
        question: "What does the supervisor say about safety at the end?",
        options: ["Safety is not important", "Our safety depends on everyone", "Only managers are responsible"],
        answer: 1,
        explanation: "Người giám sát khẳng định: 'Our safety depends on everyone.'"
      }
    ]
  },
  speaking: {
    prompt: "Chỉ các đồ vật và giới thiệu người sở hữu chúng.",
    target_sentence: "This is my badge. That is his toolbox. These are our safety helmets.",
    substitution_drill: [
      { cue: "his / supervisor", sentence: "Mr. David is his supervisor." },
      { cue: "her / report", sentence: "This is her safety report." },
      { cue: "their / contractor team", sentence: "They are proud of their team." }
    ],
    sample_answer: "This is my safety helmet. That is his locker. Safety is our number one priority.",
    self_check: [
      "Tôi đã phát âm đúng 'our' (/aʊər/ giống âm hour) chưa?",
      "Tôi đã dùng 'his' thay vì nhầm thành 'he' trước danh từ chưa?"
    ]
  },
  reading: {
    text: "Every worker is responsible for their personal protective equipment. Alex inspects his safety boots every morning. Lan cleans her safety glasses after every shift. Our supervisor reminds us: 'Your PPE protects your life. Take care of your equipment, and it will take care of you.' Respecting company property is our shared duty.",
    translation: "Mỗi người lao động đều chịu trách nhiệm về trang thiết bị bảo hộ cá nhân của mình. Alex kiểm tra đôi ủng bảo hộ của anh ấy vào mỗi buổi sáng. Lan lau sạch kính bảo hộ của cô ấy sau mỗi ca làm việc. Người giám sát của chúng tôi nhắc nhở: 'BHLĐ của các bạn bảo vệ tính mạng của các bạn. Hãy chăm sóc thiết bị của bạn, và nó sẽ bảo vệ bạn.' Tôn trọng tài sản công ty là trách nhiệm chung của chúng ta.",
    questions: [
      {
        question: "What does Lan clean after every shift?",
        options: ["Her safety boots", "Her safety glasses", "Her car"],
        answer: 1,
        explanation: "Bài đọc nêu: 'Lan cleans her safety glasses after every shift.'"
      },
      {
        question: "Who is responsible for personal protective equipment?",
        options: ["Only the plant manager", "Every worker for their own PPE", "Nobody"],
        answer: 1,
        explanation: "Câu đầu tiên: 'Every worker is responsible for their personal protective equipment.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "helmet.", "This", "my"], solution: "This is my helmet.", hint: "This is my..." },
      { words: ["our", "is", "priority.", "Safety"], solution: "Safety is our priority.", hint: "Safety is our..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Alex is in the workshop. _______ (của anh ấy) toolbox is on the bench.", answer: "His", hint: "Tính từ sở hữu cho nam giới." },
      { sentence_with_blank: "We are proud of _______ (của chúng tôi) plant.", answer: "our", hint: "Tính từ sở hữu của we." }
    ],
    translation: [
      { vietnamese: "Đây là thẻ nhân viên của tôi.", model_answer: "This is my employee badge.", explanation: "This is my employee badge (hoặc my badge)." },
      { vietnamese: "Người giám sát của họ là ông David.", model_answer: "Their supervisor is Mr. David.", explanation: "Their supervisor is Mr. David." }
    ]
  },
  quiz: [
    {
      question: "Chọn từ đúng điền vào chỗ trống: 'Alex forgot _______ safety glasses at home.'",
      options: ["he", "his", "him"],
      answer: 1,
      explanation: "Trước danh từ 'safety glasses', ta cần một tính từ sở hữu: 'his'."
    },
    {
      question: "Từ nào là tính từ sở hữu của đại từ 'We' (Chúng tôi)?",
      options: ["us", "our", "their"],
      answer: 1,
      explanation: "Tính từ sở hữu của 'We' là 'our' (của chúng tôi)."
    },
    {
      question: "Câu nào dưới đây đúng ngữ pháp?",
      options: ["She is reading she report.", "She is reading her report.", "She is reading hers report."],
      answer: 1,
      explanation: "'của cô ấy' đi kèm danh từ là 'her report'."
    }
  ]
});

// Day 20
days.push({
  day: 20,
  month: 1,
  week: 3,
  title: "Câu hỏi Wh- cơ bản với Động từ Be (What, Where, Who, When)",
  topic_en: "Basic Wh- questions with verb be (What, Where, Who, When, How)",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Nắm chắc 5 từ để hỏi thông dụng: What (Cái gì), Where (Ở đâu), Who (Là ai), When (Khi nào), How (Như thế nào / Bằng cách nào).",
    "Đặt câu hỏi với động từ be: 'Wh- + am/is/are + Chủ ngữ?'",
    "Hỏi vị trí dụng cụ, danh tính người phụ trách và thời gian sự việc.",
    "Luyện ngữ điệu xuống giọng ở cuối câu hỏi Wh- (khác với câu hỏi Yes/No lên giọng)."
  ],
  new_vocab: [
    { en: "what", vi: "cái gì / gì", ipa: "/wɒt/", example: "What is the problem?", collocation: "what is this" },
    { en: "where", vi: "ở đâu / chỗ nào", ipa: "/weər/", example: "Where is the emergency exit?", collocation: "where is it" },
    { en: "who", vi: "ai / người nào", ipa: "/huː/", example: "Who is the shift supervisor?", collocation: "who is on duty" },
    { en: "when", vi: "khi nào / bao giờ", ipa: "/wen/", example: "When is the meeting?", collocation: "when is the shift" },
    { en: "how", vi: "như thế nào / làm sao", ipa: "/haʊ/", example: "How is the machine running?", collocation: "how are you" }
  ],
  review_vocab: ["is", "are", "name", "time", "supervisor", "motor", "pump"],
  grammar_vi: `### 1. Cấu trúc câu hỏi Wh- với động từ Be
$$\\text{Wh- word (What / Where / Who / When / How)} + \\text{am / is / are} + \\text{Chủ ngữ (Subject)}?$$

*Ví dụ thực tế công xưởng*:
- **What is it?** -> *It is a relief valve.* (Nó là cái gì? - Nó là van xả áp.)
- **Where is the supervisor?** -> *He is in room 102.* (Người giám sát ở đâu? - Anh ấy ở phòng 102.)
- **Who is on duty today?** -> *Alex and David are on duty.* (Ai trực ca hôm nay? - Alex và David trực.)
- **When is the toolbox meeting?** -> *It is at 7:30 AM.* (Khi nào họp an toàn? - Lúc 7:30 sáng.)
- **How is the motor?** -> *It is hot and noisy.* (Động cơ thế nào rồi? - Nó đang bị nóng và ồn.)

> **Quy tắc ngữ điệu**:
> - Câu hỏi Yes/No (*Are you ready?*): **Lên giọng** ở cuối câu (↗).
> - Câu hỏi Wh- (*Where is the exit?*): **Xuống giọng** ở cuối câu (↘).`,
  listening: {
    audio_text: "Technician: Excuse me, where is the main power breaker? Senior Fitter: It is on the wall behind pump four. Technician: Who is authorized to switch it off? Senior Fitter: Only the licensed electrician, Mr. Binh. Technician: What is his extension number? Senior Fitter: His extension is two-zero-four. Call him immediately.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Technician", text: "Excuse me, where is the main power breaker?" },
      { speaker: "Senior Fitter", text: "It is on the wall behind pump four." },
      { speaker: "Technician", text: "Who is authorized to switch it off?" },
      { speaker: "Senior Fitter", text: "Only the licensed electrician, Mr. Binh." },
      { speaker: "Technician", text: "What is his extension number?" },
      { speaker: "Senior Fitter", text: "His extension is two-zero-four. Call him immediately." }
    ],
    questions: [
      {
        question: "Where is the main power breaker located?",
        options: ["In the cafeteria", "On the wall behind pump four", "At the front gate"],
        answer: 1,
        explanation: "Thợ nguội chỉ: 'It is on the wall behind pump four.'"
      },
      {
        question: "Who is authorized to switch off the breaker?",
        options: ["Any worker", "Only the licensed electrician, Mr. Binh", "The security guard"],
        answer: 1,
        explanation: "Trong bài: 'Only the licensed electrician, Mr. Binh.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành đặt 4 câu hỏi: Cái gì, Ở đâu, Ai, Khi nào.",
    target_sentence: "What is this? Where is the tool? Who is the leader? When is the break?",
    substitution_drill: [
      { cue: "Where / first aid box", sentence: "Where is the first aid box?" },
      { cue: "Who / shift leader", sentence: "Who is the shift leader today?" },
      { cue: "When / inspection", sentence: "When is the next inspection?" }
    ],
    sample_answer: "Where is the emergency eyewash station? It is next to the exit. Who is on duty? Alex is on duty.",
    self_check: [
      "Tôi đã xuống giọng tự nhiên ở cuối các câu hỏi Wh- chưa?",
      "Tôi đã phân biệt rõ Where (ở đâu) và When (khi nào) chưa?"
    ]
  },
  reading: {
    text: "Clear communication prevents confusion. When a new technician joins the plant, they must ask five key questions: What is my designated task? Where are the emergency assembly points? Who is my direct supervisor? When are the shift changeovers? How do I report a near miss? Knowing the answers ensures safety from day one.",
    translation: "Giao tiếp rõ ràng giúp ngăn ngừa sự bối rối. Khi một kỹ thuật viên mới gia nhập nhà máy, họ phải hỏi 5 câu hỏi then chốt: Nhiệm vụ được giao của tôi là gì? Các điểm tập kết khẩn cấp nằm ở đâu? Ai là người giám sát trực tiếp của tôi? Khi nào diễn ra các đợt giao ca? Làm cách nào để tôi báo cáo một sự cố suýt nguy hiểm? Biết câu trả lời cho các câu hỏi này sẽ đảm bảo an toàn ngay từ ngày đầu tiên.",
    questions: [
      {
        question: "What does clear communication prevent according to the text?",
        options: ["Fast work", "Confusion", "Cleanliness"],
        answer: 1,
        explanation: "Câu đầu tiên: 'Clear communication prevents confusion.'"
      },
      {
        question: "How many key questions should a new technician ask?",
        options: ["Two", "Three", "Five key questions"],
        answer: 2,
        explanation: "Bài đọc nêu rõ: '...they must ask five key questions.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["the", "Where", "exit?", "is", "emergency"], solution: "Where is the emergency exit?", hint: "Where is the..." },
      { words: ["is", "supervisor?", "Who", "the", "shift"], solution: "Who is the shift supervisor?", hint: "Who is the..." }
    ],
    fill_blank: [
      { sentence_with_blank: "_______ (Ở đâu) is the chemical storage room?", answer: "Where", hint: "Từ để hỏi nơi chốn." },
      { sentence_with_blank: "_______ (Khi nào) is the maintenance scheduled?", answer: "When", hint: "Từ để hỏi thời gian." }
    ],
    translation: [
      { vietnamese: "Cửa thoát hiểm ở đâu?", model_answer: "Where is the emergency exit?", explanation: "Where is the emergency exit?" },
      { vietnamese: "Ai là người giám sát trực hôm nay?", model_answer: "Who is the supervisor on duty today?", explanation: "Who is the supervisor on duty today?" }
    ]
  },
  quiz: [
    {
      question: "Để hỏi 'Chiếc cờ lê lực ở đâu?', câu hỏi nào đúng?",
      options: ["When is the torque wrench?", "Where is the torque wrench?", "Who is the torque wrench?"],
      answer: 1,
      explanation: "Hỏi vị trí nơi chốn dùng từ 'Where': 'Where is the torque wrench?'"
    },
    {
      question: "Từ để hỏi nào dùng để hỏi về THỜI GIAN?",
      options: ["What", "Where", "When"],
      answer: 2,
      explanation: "'When' nghĩa là khi nào / bao giờ, dùng để hỏi thời gian."
    },
    {
      question: "Ngữ điệu của câu hỏi 'Where is the breaker?' ở cuối câu như thế nào?",
      options: ["Lên giọng mạnh mẽ (↗)", "Xuống giọng tự nhiên (↘)", "Giữ nguyên đều đều"],
      answer: 1,
      explanation: "Câu hỏi bắt đầu bằng Wh- có ngữ điệu đi xuống (falling intonation) ở cuối câu."
    }
  ]
});

// Day 21
days.push({
  day: 21,
  month: 1,
  week: 3,
  title: "Tổng ôn Tuần 3 & Bài kiểm tra phản xạ thời gian",
  topic_en: "Week 3 Review and Time/Possession Assessment",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: true,
  review_target: "Toàn bộ kiến thức Tuần 3: Các thứ trong tuần (on), Buổi trong ngày (in/at), Nói giờ (at), Tháng & Mùa (in), Tính từ sở hữu (my/your/his/her/our/their) và Câu hỏi Wh- (What/Where/Who/When/How).",
  objectives: [
    "Sử dụng không nhầm lẫn bộ 3 giới từ thời gian: AT (giờ) - ON (thứ/ngày) - IN (tháng/mùa/buổi).",
    "Đặt và trả lời trôi chảy các câu hỏi Wh- về công việc hằng ngày.",
    "Hoàn thành bài kiểm tra tổng hợp tuần 3 đạt từ 80% trở lên.",
    "Nói đoạn 1 phút tóm tắt thời gian biểu ca trực của bạn."
  ],
  new_vocab: [
    { en: "calendar", vi: "cuốn lịch / lịch biểu", ipa: "/ˈkæl.ən.dər/", example: "Mark the shutdown on the calendar.", collocation: "maintenance calendar" },
    { en: "appointment", vi: "cuộc hẹn / buổi hẹn làm việc", ipa: "/əˈpɔɪnt.mənt/", example: "I have a medical appointment.", collocation: "make an appointment" },
    { en: "deadline", vi: "hạn chót hoàn thành", ipa: "/ˈded.laɪn/", example: "The deadline is on Friday at 5:00 PM.", collocation: "meet the deadline" }
  ],
  review_vocab: ["Monday", "Friday", "morning", "noon", "night", "hour", "minute", "January", "July", "my", "his", "her", "our", "their", "where", "when", "who"],
  grammar_vi: `### 1. Kim chỉ nam Giới từ thời gian: AT - ON - IN
1. **AT**: Điểm thời gian nhỏ nhất, chính xác nhất:
   - *at 7:30 AM*, *at noon*, *at night*, *at midnight*.
2. **ON**: Ngày, thứ (bất cứ từ nào có dính chữ "day"):
   - *on Monday*, *on Friday afternoon*, *on July 15*, *on the weekend*.
3. **IN**: Khoảng thời gian lớn hơn (tháng, mùa, năm, buổi):
   - *in the morning*, *in the afternoon*, *in July*, *in summer*, *in 2026*.

### 2. Tính từ sở hữu & Câu hỏi Wh-:
- *Where is **my** helmet?* -> *It is in **your** locker.*
- *Who is **his** supervisor?* -> *Mr. David is **his** supervisor.*
- *When is **our** meeting?* -> *It is on Monday at 8:00 AM.*`,
  listening: {
    audio_text: "Supervisor: Good morning, Alex. What is our schedule for this week? Alex: On Monday morning at eight o'clock, we have the safety meeting. In the afternoon, we inspect pump three. Supervisor: And where are our spare parts? Alex: They are in Store B. Our storekeeper is Mr. Nam. Supervisor: Excellent. When is the deadline for the report? Alex: The deadline is on Friday at four PM.",
    slow_rate: 0.75,
    dialogue: [
      { speaker: "Supervisor", text: "Good morning, Alex. What is our schedule for this week?" },
      { speaker: "Alex", text: "On Monday morning at eight o'clock, we have the safety meeting. In the afternoon, we inspect pump three." },
      { speaker: "Supervisor", text: "And where are our spare parts?" },
      { speaker: "Alex", text: "They are in Store B. Our storekeeper is Mr. Nam." },
      { speaker: "Supervisor", text: "Excellent. When is the deadline for the report?" },
      { speaker: "Alex", text: "The deadline is on Friday at four PM." }
    ],
    questions: [
      {
        question: "When is the safety meeting scheduled?",
        options: ["On Monday at 8:00 AM", "On Friday at 4:00 PM", "At noon on Tuesday"],
        answer: 0,
        explanation: "Alex báo cáo: 'On Monday morning at eight o'clock, we have the safety meeting.'"
      },
      {
        question: "When is the deadline for the report?",
        options: ["On Monday at 8:00 AM", "On Friday at 4:00 PM", "In July"],
        answer: 1,
        explanation: "Alex nói: 'The deadline is on Friday at four PM.'"
      }
    ]
  },
  speaking: {
    prompt: "Nói thời gian biểu tuần của bạn sử dụng đủ cả AT, ON, IN.",
    target_sentence: "I work on Monday. I start at seven AM in the morning. Our safety meeting is in July.",
    substitution_drill: [
      { cue: "Full summary", sentence: "My shift is on Tuesday at eight o'clock in the morning. His locker is in room two." }
    ],
    sample_answer: "Our toolbox talk is on Monday at seven fifteen in the morning. The plant overhaul is in July. Safety is our priority.",
    self_check: [
      "Tôi đã dùng đúng AT (giờ), ON (thứ), IN (buổi/tháng) chưa?",
      "Tôi đã dùng đúng các tính từ sở hữu 'my, his, our' chưa?"
    ]
  },
  reading: {
    text: "Week 3 mastery means you can navigate plant time and possessions effortlessly. You can tell your coworkers when meetings occur (on Wednesday at nine AM), where equipment is located (in Store A on the second shelf), and who is responsible for each machine (his pump or our team). Clear timekeeping avoids missed inspections and ensures smooth shift handovers.",
    translation: "Nắm vững Tuần 3 đồng nghĩa với việc bạn có thể định hướng thời gian và quyền sở hữu trong nhà máy một cách dễ dàng. Bạn có thể nói cho đồng nghiệp biết khi nào cuộc họp diễn ra (vào thứ Tư lúc 9 giờ sáng), thiết bị đặt ở đâu (trong Kho A trên tầng kệ thứ hai) và ai chịu trách nhiệm về từng máy móc (máy bơm của anh ấy hay đội của chúng ta). Việc quản lý thời gian rõ ràng giúp tránh bỏ sót kiểm tra và đảm bảo giao ca suôn sẻ.",
    questions: [
      {
        question: "What does clear timekeeping avoid according to the text?",
        options: ["Taking breaks", "Missed inspections", "Buying new tools"],
        answer: 1,
        explanation: "Bài đọc nêu: 'Clear timekeeping avoids missed inspections...'"
      },
      {
        question: "What example of a meeting time is given?",
        options: ["On Sunday at midnight", "On Wednesday at nine AM", "In December at noon"],
        answer: 1,
        explanation: "Trong bài: '(on Wednesday at nine AM)'."
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["on", "meeting", "The", "Monday.", "is"], solution: "The meeting is on Monday.", hint: "The meeting is on..." },
      { words: ["is", "Where", "toolbox?", "his"], solution: "Where is his toolbox?", hint: "Where is his..." }
    ],
    fill_blank: [
      { sentence_with_blank: "The briefing is _______ (vào) 7:30 AM _______ (vào) Monday.", answer: "at / on", hint: "Giờ đi với at, thứ đi với on." },
      { sentence_with_blank: "The shutdown is scheduled _______ (vào tháng) July.", answer: "in", hint: "Tháng đi với in." }
    ],
    translation: [
      { vietnamese: "Cuộc họp của chúng tôi diễn ra vào thứ Hai lúc 8 giờ sáng.", model_answer: "Our meeting is on Monday at 8:00 AM.", explanation: "Our meeting is on Monday at 8:00 AM." },
      { vietnamese: "Dụng cụ của anh ấy ở đâu?", model_answer: "Where are his tools?", explanation: "Where are his tools? (nhiều dụng cụ dùng are his tools)." }
    ]
  },
  quiz: [
    {
      question: "Câu nào dưới đây sử dụng bộ 3 giới từ thời gian CHÍNH XÁC nhất?",
      options: [
        "The test is in Monday on 8:00 AM at July.",
        "The test is on Monday at 8:00 AM in July.",
        "The test is at Monday in 8:00 AM on July."
      ],
      answer: 1,
      explanation: "on Monday (thứ) + at 8:00 AM (giờ) + in July (tháng)."
    },
    {
      question: "Để hỏi 'Ai là người giám sát của bạn?', câu hỏi nào đúng?",
      options: ["Who is your supervisor?", "Where is your supervisor?", "What is your supervisor?"],
      answer: 0,
      explanation: "Hỏi về người (Ai) ta dùng từ 'Who': 'Who is your supervisor?'"
    },
    {
      question: "Từ nào điền vào chỗ trống: 'Contractors must bring _______ own safety boots.'",
      options: ["they", "their", "them"],
      answer: 1,
      explanation: "Trước cụm danh từ 'own safety boots', ta cần tính từ sở hữu: 'their own safety boots'."
    },
    {
      question: "Cụm từ 'in the afternoon' mang nghĩa là gì?",
      options: ["Vào buổi sáng", "Vào buổi chiều", "Vào ban đêm"],
      answer: 1,
      explanation: "'in the afternoon' là vào buổi chiều (từ sau 12h trưa đến chiều tối)."
    }
  ]
});

console.log("Week 3 part 2 generated (Days 18-21).");
module.exports = days;
