// Month 1 detailed daily curriculum: Week 2 (Days 8 to 14)
// Numbers 0-100, Personal Info, a/an, this/that/these/those, There is/are, Weekly Review
const days = [];

// Day 8
days.push({
  day: 8,
  month: 1,
  week: 2,
  title: "Số đếm 0–20, Số điện thoại & Mã thẻ nhân viên",
  topic_en: "Numbers 0 to 20, phone numbers and employee badge ID",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Đọc chuẩn xác các số từ 0 đến 20, đặc biệt chú ý trọng âm của các số đuôi '-teen' (13-19).",
    "Đọc số điện thoại tách từng chữ số (số 0 đọc là 'zero' hoặc 'oh').",
    "Hỏi và trả lời về mã nhân viên và số điện thoại liên hệ.",
    "Luyện nghe các chữ số trong môi trường xưởng làm việc."
  ],
  new_vocab: [
    { en: "zero", vi: "số 0", ipa: "/ˈzɪə.rəʊ/", example: "Dial zero for reception.", collocation: "below zero" },
    { en: "one", vi: "số 1", ipa: "/wʌn/", example: "We have one pump running.", collocation: "one by one" },
    { en: "two", vi: "số 2", ipa: "/tuː/", example: "Two technicians are on site.", collocation: "number two" },
    { en: "three", vi: "số 3", ipa: "/θriː/", example: "Check three valves.", collocation: "three times" },
    { en: "five", vi: "số 5", ipa: "/faɪv/", example: "Take a five-minute break.", collocation: "high five" },
    { en: "ten", vi: "số 10", ipa: "/ten/", example: "The team has ten members.", collocation: "top ten" },
    { en: "phone number", vi: "số điện thoại", ipa: "/fəʊn ˈnʌmbə/", example: "What is your phone number?", collocation: "mobile phone number" },
    { en: "badge", vi: "thẻ nhân viên / phù hiệu", ipa: "/bædʒ/", example: "Wear your security badge.", collocation: "ID badge" }
  ],
  review_vocab: ["name", "spell", "code", "please", "thank you"],
  grammar_vi: `### 1. Số đếm từ 0 đến 20
- **0** zero / o, **1** one, **2** two, **3** three (/θriː/), **4** four, **5** five
- **6** six, **7** seven, **8** eight, **9** nine, **10** ten
- **11** eleven, **12** twelve
- **13** thirteen, **14** fourteen, **15** fifteen, **16** sixteen, **17** seventeen, **18** eighteen, **19** nineteen, **20** twenty

> **Quy tắc phát âm cực kỳ quan trọng**:
> - Các số từ **13 đến 19** có đuôi **-teen** (\`/ˈtiːn/\`). Trọng âm nhấn mạnh vào chính âm tiết cuối **TEEN**: *thir-TEEN, four-TEEN, fif-TEEN*.
> - Chú ý biến đổi chính tả: five -> **fifteen** (không phải fiveteen); three -> **thirteen** (không phải threeteen).

### 2. Cách đọc số điện thoại trong tiếng Anh:
- Đọc tách riêng từng chữ số một.
  - Ví dụ: \`0912 345 678\` đọc là: *zero - nine - one - two, three - four - five, six - seven - eight*.
- Hai số giống nhau đứng liền: có thể đọc là *double + [số]*. Ví dụ: \`00\` đọc là *double zero*.`,
  listening: {
    audio_text: "Security: Good morning. Please state your badge number. Worker: Good morning. My badge number is one - five - eight. Security: And what is your emergency contact phone number? Worker: It is zero - nine - one, two - three - four, five - six - seven. Security: Thank you, verified. Please enter.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Security", text: "Good morning. Please state your badge number." },
      { speaker: "Worker", text: "Good morning. My badge number is one - five - eight." },
      { speaker: "Security", text: "And what is your emergency contact phone number?" },
      { speaker: "Worker", text: "It is zero - nine - one, two - three - four, five - six - seven." },
      { speaker: "Security", text: "Thank you, verified. Please enter." }
    ],
    questions: [
      {
        question: "What is the worker's badge number?",
        options: ["1 - 5 - 8", "1 - 8 - 5", "5 - 1 - 8"],
        answer: 0,
        explanation: "Công nhân trả lời rõ: 'My badge number is one - five - eight' (158)."
      },
      {
        question: "How does the worker read his phone number?",
        options: ["All digits combined together", "Digit by digit clearly", "Only the last two digits"],
        answer: 1,
        explanation: "Đọc tách từng chữ số rõ ràng theo thông lệ tiếng Anh."
      }
    ]
  },
  speaking: {
    prompt: "Đọc to số điện thoại và mã số thẻ nhân viên của bạn.",
    target_sentence: "My badge number is one-two-four. My phone number is zero-nine-eight, seven-six-five, four-three-two.",
    substitution_drill: [
      { cue: "Badge 15", sentence: "My badge number is fifteen." },
      { cue: "Badge 18", sentence: "My badge number is eighteen." },
      { cue: "Room 12", sentence: "The room number is twelve." }
    ],
    sample_answer: "My badge number is sixteen. My contact number is zero-nine-one-two-three-four-five-six-seven.",
    self_check: [
      "Tôi đã nhấn trọng âm vào âm cuối -TEEN của các số 13-19 chưa?",
      "Tôi đã đọc số 3 (/θriː/) với lưỡi kẹp giữa hai răng chưa?"
    ]
  },
  reading: {
    text: "Safety badges are numbered from one to one hundred. Alex has badge number fifteen. His direct phone number is 0903 112 233. In case of an emergency, call extension twelve. There are eight technicians on the day shift today. Every badge must be scanned at Gate 1.",
    translation: "Thẻ an toàn được đánh số từ một đến một trăm. Alex mang thẻ số mười lăm. Số điện thoại trực tiếp của anh ấy là 0903 112 233. Trong trường hợp khẩn cấp, hãy gọi số máy lẻ mười hai. Có tám kỹ thuật viên trong ca ngày hôm nay. Mỗi thẻ đều phải được quét tại Cổng 1.",
    questions: [
      {
        question: "What is Alex's badge number?",
        options: ["Twelve", "Fifteen", "Eight"],
        answer: 1,
        explanation: "Đoạn văn ghi: 'Alex has badge number fifteen' (15)."
      },
      {
        question: "How many technicians are on the day shift?",
        options: ["Eight", "Twelve", "Fifteen"],
        answer: 0,
        explanation: "Trong bài: 'There are eight technicians on the day shift today.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["phone", "your", "What", "is", "number?"], solution: "What is your phone number?", hint: "Câu hỏi bắt đầu bằng What." },
      { words: ["fifteen.", "is", "badge", "number", "My"], solution: "My badge number is fifteen.", hint: "My badge number..." }
    ],
    fill_blank: [
      { sentence_with_blank: "There are _______ (12) months in a year.", answer: "twelve", hint: "Viết bằng chữ số 12." },
      { sentence_with_blank: "My phone _______ is 0912345678.", answer: "number", hint: "Từ chỉ số điện thoại." }
    ],
    translation: [
      { vietnamese: "Số điện thoại của bạn là gì?", model_answer: "What is your phone number?", explanation: "What is your phone number?" },
      { vietnamese: "Thẻ của tôi là số mười tám.", model_answer: "My badge is number eighteen.", explanation: "My badge is number eighteen." }
    ]
  },
  quiz: [
    {
      question: "Số 15 trong tiếng Anh được viết chính tả là gì?",
      options: ["fiveteen", "fifteen", "fivteen"],
      answer: 1,
      explanation: "Số 15 viết là 'fifteen' (chú ý 'fif-', không phải 'five-')."
    },
    {
      question: "Số 12 trong tiếng Anh đọc là gì?",
      options: ["twelve", "twenty", "eleven"],
      answer: 0,
      explanation: "11 là eleven, 12 là twelve, 20 là twenty."
    },
    {
      question: "Khi đọc số điện thoại '0905 123 456', ta đọc như thế nào?",
      options: ["Đọc từng số một", "Đọc gộp thành chín trăm linh năm triệu...", "Chỉ đọc 3 số cuối"],
      answer: 0,
      explanation: "Trong tiếng Anh, số điện thoại luôn được đọc tách riêng rẽ từng chữ số một."
    }
  ]
});

// Day 9
days.push({
  day: 9,
  month: 1,
  week: 2,
  title: "Số hàng chục 20–100, Tuổi tác & Phân biệt '-teen' / '-ty'",
  topic_en: "Numbers 20 to 100, expressing age, and distinguishing -teen vs -ty",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Đọc thành thạo các số hàng chục từ 20 đến 100: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.",
    "Phân biệt dứt điểm trọng âm giữa các cặp số dễ nhầm: 13 / 30, 14 / 40, 15 / 50.",
    "Hỏi và trả lời về tuổi: 'How old are you? - I am 28 years old.'",
    "Áp dụng đọc các thông số nhiệt độ, áp suất hoặc tải trọng cơ bản."
  ],
  new_vocab: [
    { en: "twenty", vi: "số 20", ipa: "/ˈtwen.ti/", example: "Twenty workers are on site.", collocation: "twenty percent" },
    { en: "thirty", vi: "số 30", ipa: "/ˈθɜː.ti/", example: "The temperature is thirty degrees.", collocation: "thirty minutes" },
    { en: "forty", vi: "số 40", ipa: "/ˈfɔː.ti/", example: "The limit is forty bar.", collocation: "forty hours" },
    { en: "fifty", vi: "số 50", ipa: "/ˈfɪf.ti/", example: "Fifty items completed.", collocation: "fifty percent" },
    { en: "hundred", vi: "trăm (100)", ipa: "/ˈhʌn.drəd/", example: "One hundred meters long.", collocation: "one hundred" },
    { en: "how old", vi: "bao nhiêu tuổi", ipa: "/haʊ əʊld/", example: "How old are you?", collocation: "how old is he" },
    { en: "year old", vi: "tuổi (đơn vị tuổi)", ipa: "/jɪər əʊld/", example: "I am thirty years old.", collocation: "twenty years old" }
  ],
  review_vocab: ["zero", "one", "ten", "fifteen", "badge"],
  grammar_vi: `### 1. Số đếm hàng chục (20 - 100)
- **20** twenty, **30** thirty, **40** forty (chú ý: không có chữ 'u'), **50** fifty
- **60** sixty, **70** seventy, **80** eighty, **90** ninety, **100** one hundred

Ghép số hàng chục với hàng đơn vị bằng dấu gạch nối (-):
- 25: *twenty-five*
- 38: *thirty-eight*
- 42: *forty-two*
- 75: *seventy-five*

### 2. Bí quyết phân biệt '-teen' (13-19) và '-ty' (20, 30, 40...):
- **13-19 (-teen)**: Trọng âm rơi vào âm tiết **CUỐI** (\`/tiːn/\`). Ví dụ: *thir-TEEN*, *fif-TEEN*.
- **20-90 (-ty)**: Trọng âm rơi vào âm tiết **ĐẦU**. Âm cuối đọc nhẹ và ngắn (\`/ti/\`). Ví dụ: *THIR-ty*, *FIF-ty*.

### 3. Cấu trúc hỏi và nói tuổi:
- Câu hỏi: \`How old are you?\` (Bạn bao nhiêu tuổi?)
  - Hoặc hỏi người khác: \`How old is he / she?\`
- Câu trả lời: \`I am + [Số tuổi] + (years old).\`
  - Ví dụ: *I am 28 years old.* hoặc ngắn gọn: *I am 28.*`,
  listening: {
    audio_text: "Interviewer: Welcome to the interview. What is your full name? Applicant: My name is Minh Tran. Interviewer: How old are you, Minh? Applicant: I am thirty-four years old. Interviewer: And how many years of mechanical experience do you have? Applicant: I have twelve years of experience.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Interviewer", text: "Welcome to the interview. What is your full name?" },
      { speaker: "Applicant", text: "My name is Minh Tran." },
      { speaker: "Interviewer", text: "How old are you, Minh?" },
      { speaker: "Applicant", text: "I am thirty-four years old." },
      { speaker: "Interviewer", text: "And how many years of mechanical experience do you have?" },
      { speaker: "Applicant", text: "I have twelve years of experience." }
    ],
    questions: [
      {
        question: "How old is Minh?",
        options: ["24 years old", "34 years old", "44 years old"],
        answer: 1,
        explanation: "Minh nói: 'I am thirty-four years old' (34 tuổi)."
      },
      {
        question: "How many years of experience does Minh have?",
        options: ["2 years", "12 years", "20 years"],
        answer: 1,
        explanation: "Minh có: 'twelve years of experience' (12 năm kinh nghiệm)."
      }
    ]
  },
  speaking: {
    prompt: "Hỏi và nói tuổi của bạn cùng tuổi một đồng nghiệp.",
    target_sentence: "How old are you? - I am twenty-eight years old. He is thirty-five.",
    substitution_drill: [
      { cue: "30 / forty", sentence: "I am thirty years old. He is forty." },
      { cue: "25 / fifty", sentence: "I am twenty-five years old. My manager is fifty." }
    ],
    sample_answer: "How old are you? I am thirty-two years old. My colleague is twenty-six.",
    self_check: [
      "Tôi đã phát âm đúng trọng âm đầu của 'thirty' thay vì nhầm sang 'thirteen' chưa?",
      "Tôi đã phát âm âm cuối /z/ trong 'years' chưa?"
    ]
  },
  reading: {
    text: "Our plant maintenance crew has four technicians. Alex is twenty-five years old. Lan is thirty years old. David is forty-two years old, and their supervisor is fifty-six. Together, they have over fifty years of combined industrial experience. Age brings wisdom, and youth brings energy to safety.",
    translation: "Kíp bảo trì nhà máy chúng tôi gồm 4 kỹ thuật viên. Alex 25 tuổi. Lan 30 tuổi. David 42 tuổi, và người giám sát của họ 56 tuổi. Cùng nhau, họ có hơn 50 năm kinh nghiệm công nghiệp tổng cộng. Tuổi tác mang lại sự khôn ngoan, và tuổi trẻ mang lại năng lượng cho sự an toàn.",
    questions: [
      {
        question: "How old is David?",
        options: ["25 years old", "30 years old", "42 years old"],
        answer: 2,
        explanation: "Bài đọc nêu: 'David is forty-two years old' (42 tuổi)."
      },
      {
        question: "How old is the supervisor?",
        options: ["56 years old", "42 years old", "50 years old"],
        answer: 0,
        explanation: "Người giám sát: 'their supervisor is fifty-six' (56 tuổi)."
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["old", "are", "How", "you?"], solution: "How old are you?", hint: "Câu hỏi tuổi." },
      { words: ["am", "twenty-eight", "I", "old.", "years"], solution: "I am twenty-eight years old.", hint: "I am + số tuổi + years old." }
    ],
    fill_blank: [
      { sentence_with_blank: "He is _______ (40) years old.", answer: "forty", hint: "Số 40 không có chữ u." },
      { sentence_with_blank: "The tank capacity is one _______ (100) liters.", answer: "hundred", hint: "Số 100." }
    ],
    translation: [
      { vietnamese: "Bạn bao nhiêu tuổi?", model_answer: "How old are you?", explanation: "How old are you?" },
      { vietnamese: "Tôi 30 tuổi và anh ấy 45 tuổi.", model_answer: "I am thirty years old and he is forty-five.", explanation: "I am thirty years old and he is forty-five." }
    ]
  },
  quiz: [
    {
      question: "Số 40 trong tiếng Anh viết chính tả như thế nào là đúng?",
      options: ["fourty", "forty", "fourtey"],
      answer: 1,
      explanation: "Số 40 viết là 'forty' (không có chữ 'u'). Đây là lỗi sai rất phổ biến."
    },
    {
      question: "Trọng âm của từ 'fifty' (50) nằm ở âm tiết nào?",
      options: ["Âm tiết thứ nhất (FIF-ty)", "Âm tiết thứ hai (fif-TY)", "Đều nhau"],
      answer: 0,
      explanation: "Các số hàng chục có đuôi '-ty' luôn có trọng âm ở âm tiết đầu tiên: FIF-ty."
    },
    {
      question: "Câu nào dưới đây trả lời đúng ngữ pháp cho câu hỏi 'How old is she?'",
      options: ["She has 30 years old.", "She is thirty years old.", "She is thirty age."],
      answer: 1,
      explanation: "Trong tiếng Anh dùng động từ to be để nói tuổi: 'She is thirty years old'."
    }
  ]
});

// Day 10
days.push({
  day: 10,
  month: 1,
  week: 2,
  title: "Thông tin cá nhân & Biểu mẫu khai báo công trường",
  topic_en: "Personal information and site registration forms",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Hiểu các mục cơ bản trong phiếu thông tin cá nhân: Full Name, DOB, Address, Phone, Emergency Contact.",
    "Hỏi và trả lời thông tin địa chỉ và nơi cư trú: 'What is your address?'",
    "Tự tin điền mẫu đơn đăng ký nhà thầu / công nhân mới bằng tiếng Anh.",
    "Phát âm chuẩn từ 'address' và 'emergency contact'."
  ],
  new_vocab: [
    { en: "address", vi: "địa chỉ cư trú", ipa: "/əˈdres/", example: "What is your address?", collocation: "home address" },
    { en: "date of birth", vi: "ngày tháng năm sinh (DOB)", ipa: "/deɪt əv bɜːθ/", example: "State your date of birth.", collocation: "enter DOB" },
    { en: "emergency contact", vi: "người liên hệ khẩn cấp", ipa: "/ɪˈmɜː.dʒən.si ˌkɒn.tækt/", example: "Provide an emergency contact.", collocation: "emergency contact number" },
    { en: "form", vi: "mẫu đơn / tờ khai", ipa: "/fɔːm/", example: "Fill in this registration form.", collocation: "application form" },
    { en: "signature", vi: "chữ ký", ipa: "/ˈsɪɡ.nə.tʃər/", example: "Put your signature here.", collocation: "authorized signature" }
  ],
  review_vocab: ["name", "first name", "last name", "phone number", "age", "years old"],
  grammar_vi: `### 1. Các thuật ngữ trong tờ khai thông tin cá nhân (Form)
- **First Name**: Tên chính (ví dụ: *Nam*)
- **Last Name / Surname / Family Name**: Họ (ví dụ: *Nguyen*)
- **Full Name**: Họ và tên đầy đủ
- **DOB (Date of Birth)**: Ngày sinh (thường viết định dạng: Ngày/Tháng/Năm hoặc Tháng/Ngày/Năm)
- **Address**: Địa chỉ nơi ở
- **Phone Number / Mobile**: Số điện thoại
- **Emergency Contact**: Người thân liên hệ khi có sự cố khẩn cấp (thường gồm Tên + Mối quan hệ + SĐT)
- **Signature**: Chữ ký

### 2. Cấu trúc câu hỏi thông tin:
- \`What is your + [Thông tin]?\`
  - *What is your address?* -> *My address is 45 Le Loi Street.*
  - *What is your emergency contact number?* -> *It is 0912 345 678.*`,
  listening: {
    audio_text: "HR Officer: Please fill out this site entry form. Worker: Sure. What does DOB mean? HR Officer: DOB stands for Date of Birth. For example, 12 March 1995. Worker: Got it. And for emergency contact? HR Officer: Write your wife or parent's name and phone number. Don't forget your signature at the bottom. Worker: Thank you very much.",
    slow_rate: 0.75,
    dialogue: [
      { speaker: "HR Officer", text: "Please fill out this site entry form." },
      { speaker: "Worker", text: "Sure. What does DOB mean?" },
      { speaker: "HR Officer", text: "DOB stands for Date of Birth. For example, 12 March 1995." },
      { speaker: "Worker", text: "Got it. And for emergency contact?" },
      { speaker: "HR Officer", text: "Write your wife or parent's name and phone number. Don't forget your signature at the bottom." },
      { speaker: "Worker", text: "Thank you very much." }
    ],
    questions: [
      {
        question: "What does the abbreviation 'DOB' stand for?",
        options: ["Department of Business", "Date of Birth", "Driver of Bus"],
        answer: 1,
        explanation: "Cán bộ HR giải thích: 'DOB stands for Date of Birth' (Ngày sinh)."
      },
      {
        question: "What is required at the bottom of the form?",
        options: ["A passport photo", "A signature", "A company stamp"],
        answer: 1,
        explanation: "HR nhắc: 'Don't forget your signature at the bottom' (chữ ký ở cuối trang)."
      }
    ]
  },
  speaking: {
    prompt: "Trả lời các câu hỏi về thông tin cá nhân của bạn.",
    target_sentence: "My full name is Alex Nguyen. My date of birth is May 10, 1996. My address is 12 Tran Phu Street.",
    substitution_drill: [
      { cue: "Address", sentence: "My address is 25 Nguyen Hue Street." },
      { cue: "Emergency contact", sentence: "My emergency contact is my brother, phone number 0905 123 456." }
    ],
    sample_answer: "My full name is Nam Tran. My address is Da Nang City. My emergency contact is my wife, 0905 111 222.",
    self_check: [
      "Tôi đã phát âm từ 'signature' có âm /ɡ/ rõ: /ˈsɪɡ.nə.tʃər/ chưa?",
      "Tôi đã hiểu nghĩa của DOB khi điền đơn chưa?"
    ]
  },
  reading: {
    text: "Before any technician enters the industrial plant, an emergency contact form must be filed. The form lists full name, permanent address, blood group, and emergency contact details. If an accident occurs, the plant clinic calls the emergency contact immediately. Keeping this information updated saves precious time.",
    translation: "Trước khi bất kỳ kỹ thuật viên nào bước vào nhà máy công nghiệp, tờ khai liên hệ khẩn cấp phải được hoàn tất. Biểu mẫu liệt kê họ tên đầy đủ, địa chỉ thường trú, nhóm máu và thông tin liên hệ khẩn cấp. Nếu xảy ra tai nạn, trạm y tế nhà máy sẽ gọi cho người liên hệ khẩn cấp ngay lập tức. Việc giữ thông tin này luôn cập nhật sẽ tiết kiệm thời gian quý báu.",
    questions: [
      {
        question: "Why is the emergency contact form required?",
        options: ["To issue monthly salaries", "To contact family immediately if an accident occurs", "To check uniform sizes"],
        answer: 1,
        explanation: "Đoạn văn nêu: 'If an accident occurs, the plant clinic calls the emergency contact immediately.'"
      },
      {
        question: "What details are listed on the form?",
        options: ["Only shoe size", "Full name, address, blood group, emergency contact", "Favorite movies"],
        answer: 1,
        explanation: "Bài đọc liệt kê: 'full name, permanent address, blood group, and emergency contact details.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["address?", "What", "your", "is"], solution: "What is your address?", hint: "Câu hỏi địa chỉ." },
      { words: ["signature", "your", "here.", "Put"], solution: "Put your signature here.", hint: "Ký tên ở đây." }
    ],
    fill_blank: [
      { sentence_with_blank: "Please write your _______ (ngày sinh) on the line.", answer: "date of birth", hint: "Cụm từ 3 từ." },
      { sentence_with_blank: "My emergency _______ is my brother.", answer: "contact", hint: "Người liên hệ." }
    ],
    translation: [
      { vietnamese: "Địa chỉ của bạn ở đâu?", model_answer: "What is your address?", explanation: "What is your address?" },
      { vietnamese: "Xin vui lòng ký tên của bạn ở đây.", model_answer: "Please put your signature here.", explanation: "Please put your signature here (hoặc Please sign here)." }
    ]
  },
  quiz: [
    {
      question: "Trong biểu mẫu tiếng Anh, từ viết tắt 'DOB' có nghĩa là gì?",
      options: ["Date of Build", "Date of Birth", "Day of Business"],
      answer: 1,
      explanation: "DOB viết tắt của 'Date of Birth' nghĩa là ngày tháng năm sinh."
    },
    {
      question: "Mục 'Emergency Contact' trong hồ sơ lao động dùng để làm gì?",
      options: ["Ghi tên người bạn thân đi uống cà phê", "Ghi tên và số điện thoại người thân để liên hệ khi có tai nạn/sự cố khẩn cấp", "Ghi tên công ty cung cấp thiết bị"],
      answer: 1,
      explanation: "'Emergency Contact' là người liên hệ khẩn cấp khi người lao động gặp tai nạn hoặc biến cố."
    },
    {
      question: "Từ 'signature' có phát âm chuẩn là gì?",
      options: ["/ˈsaɪn.tʃər/", "/ˈsɪɡ.nə.tʃər/", "/sɪɡˈneɪ.tʃər/"],
      answer: 1,
      explanation: "Từ 'signature' phát âm có âm /ɡ/ rõ: /ˈsɪɡ.nə.tʃər/, trọng âm ở âm đầu."
    }
  ]
});

// Day 11
days.push({
  day: 11,
  month: 1,
  week: 2,
  title: "Mạo từ A / An & Danh từ số ít, số nhiều cơ bản",
  topic_en: "Articles A / An and regular singular/plural nouns",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Nắm vững quy tắc dùng 'a' (trước phụ âm) và 'an' (trước nguyên âm u, e, o, a, i).",
    "Biết cách chuyển danh từ số ít sang số nhiều bằng cách thêm '-s' hoặc '-es'.",
    "Phát âm chuẩn âm đuôi số nhiều: /s/, /z/, /ɪz/.",
    "Áp dụng gọi tên các linh kiện và dụng cụ trong xưởng."
  ],
  new_vocab: [
    { en: "motor", vi: "động cơ điện", ipa: "/ˈməʊ.tər/", example: "We inspect a motor.", collocation: "electric motor" },
    { en: "pump", vi: "máy bơm", ipa: "/pʌmp/", example: "There is a pump here.", collocation: "water pump" },
    { en: "valve", vi: "van khóa", ipa: "/vælv/", example: "Close the valve.", collocation: "safety valve" },
    { en: "tool", vi: "dụng cụ", ipa: "/tuːl/", example: "Clean your tools.", collocation: "hand tool" },
    { en: "bolt", vi: "bu lông", ipa: "/bəʊlt/", example: "Tighten the bolt.", collocation: "hex bolt" }
  ],
  review_vocab: ["engineer", "technician", "code", "badge", "form"],
  grammar_vi: `### 1. Quy tắc dùng Mạo từ A và An (Nghĩa là "một")
- **A**: Dùng trước danh từ số ít bắt đầu bằng một **PHỤ ÂM** (consonant sound).
  - *a motor* (một động cơ)
  - *a pump* (một máy bơm)
  - *a technician* (một kỹ thuật viên)
- **An**: Dùng trước danh từ số ít bắt đầu bằng một **NGUYÊN ÂM** (vowel sound: u, e, o, a, i - mẹo nhớ: *uể oải*).
  - *an engineer* (một kỹ sư - bắt đầu bằng /e/)
  - *an operator* (một vận hành viên - bắt đầu bằng /ɒ/)
  - *an emergency* (một tình huống khẩn cấp - bắt đầu bằng /ɪ/)

### 2. Danh từ số ít chuyển sang số nhiều (Nhiều cái)
- Thêm **-s** vào sau hầu hết danh từ:
  - *one pump* -> *two pumps* (/pʌmps/)
  - *one motor* -> *three motors* (/ˈməʊ.təz/)
  - *one bolt* -> *four bolts* (/bəʊlts/)
- Thêm **-es** sau các từ kết thúc bằng *ch, sh, s, x, z*:
  - *one switch* -> *two switches* (/ˈswɪtʃ.ɪz/)
  - *one box* -> *five boxes* (/ˈbɒk.sɪz/)`,
  listening: {
    audio_text: "A: What do you need for the repair? B: I need a new gasket and two bolts. A: Do we have an engineer on site? B: Yes, an engineer and three technicians are in the workshop. A: Please bring a wrench and two screwdrivers.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "A", text: "What do you need for the repair?" },
      { speaker: "B", text: "I need a new gasket and two bolts." },
      { speaker: "A", text: "Do we have an engineer on site?" },
      { speaker: "B", text: "Yes, an engineer and three technicians are in the workshop." },
      { speaker: "A", text: "Please bring a wrench and two screwdrivers." }
    ],
    questions: [
      {
        question: "How many bolts does speaker B need?",
        options: ["One bolt", "Two bolts", "Ten bolts"],
        answer: 1,
        explanation: "Người nói B nói: 'I need a new gasket and two bolts.'"
      },
      {
        question: "Who is in the workshop?",
        options: ["Only an engineer", "An engineer and three technicians", "Ten workers"],
        answer: 1,
        explanation: "Trong bài: 'an engineer and three technicians are in the workshop.'"
      }
    ]
  },
  speaking: {
    prompt: "Luyện nói các cụm từ có 'a', 'an' và danh từ số nhiều.",
    target_sentence: "I have a wrench, an engineer, two pumps, and four bolts.",
    substitution_drill: [
      { cue: "motor / motors", sentence: "This is a motor. These are two motors." },
      { cue: "engineer / engineers", sentence: "He is an engineer. They are three engineers." },
      { cue: "switch / switches", sentence: "This is a switch. Those are two switches." }
    ],
    sample_answer: "We have an engineer, a technician, two pumps, and three valves.",
    self_check: [
      "Tôi đã dùng 'an' trước 'engineer' chưa?",
      "Tôi đã phát âm âm đuôi /s/ hoặc /z/ ở các danh từ số nhiều chưa?"
    ]
  },
  reading: {
    text: "In the mechanical storeroom, spare parts are neatly organized. On Shelf A, there is an electric motor and three pumps. On Shelf B, there are twenty bolts and ten gaskets. A technician inspects the items daily. An organized storeroom prevents delays and keeps maintenance work safe.",
    translation: "Trong kho cơ khí, các phụ tùng được sắp xếp ngăn nắp. Trên Kệ A, có một động cơ điện và ba máy bơm. Trên Kệ B, có hai mươi chiếc bu lông và mười chiếc gioăng đệm. Một kỹ thuật viên kiểm tra các vật phẩm này hằng ngày. Một nhà kho ngăn nắp giúp ngăn ngừa sự chậm trễ và giữ cho công việc bảo trì luôn an toàn.",
    questions: [
      {
        question: "What is on Shelf A?",
        options: ["Only ten gaskets", "An electric motor and three pumps", "Five screwdrivers"],
        answer: 1,
        explanation: "Bài đọc nêu: 'On Shelf A, there is an electric motor and three pumps.'"
      },
      {
        question: "How many bolts are on Shelf B?",
        options: ["Ten bolts", "Twenty bolts", "Three bolts"],
        answer: 1,
        explanation: "Trong bài: 'On Shelf B, there are twenty bolts and ten gaskets.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "He", "engineer.", "an"], solution: "He is an engineer.", hint: "Dùng an trước engineer." },
      { words: ["have", "pumps.", "two", "We"], solution: "We have two pumps.", hint: "Số nhiều pumps." }
    ],
    fill_blank: [
      { sentence_with_blank: "I need _______ (a/an) operator for this line.", answer: "an", hint: "Operator bắt đầu bằng nguyên âm O." },
      { sentence_with_blank: "There are three _______ (valve) on the pipe.", answer: "valves", hint: "Danh từ số nhiều thêm s." }
    ],
    translation: [
      { vietnamese: "Anh ấy là một kỹ sư giàu kinh nghiệm.", model_answer: "He is an experienced engineer.", explanation: "Dùng an trước experienced engineer." },
      { vietnamese: "Chúng tôi có hai máy bơm và bốn chiếc van.", model_answer: "We have two pumps and four valves.", explanation: "Two pumps and four valves (số nhiều thêm s)." }
    ]
  },
  quiz: [
    {
      question: "Chọn mạo từ đúng: 'David is _______ electrical technician.'",
      options: ["a", "an", "the"],
      answer: 1,
      explanation: "Từ 'electrical' bắt đầu bằng nguyên âm /ɪ/ (chữ e), nên dùng mạo từ 'an'."
    },
    {
      question: "Dạng số nhiều của từ 'switch' (công tắc) là gì?",
      options: ["switchs", "switches", "switchies"],
      answer: 1,
      explanation: "Danh từ tận cùng bằng 'ch' khi sang số nhiều phải thêm '-es': switches."
    },
    {
      question: "Cụm từ nào dưới đây là ĐÚNG?",
      options: ["an pump", "a engineer", "a technician"],
      answer: 2,
      explanation: "'technician' bắt đầu bằng phụ âm /t/ nên đi với 'a': 'a technician'."
    }
  ]
});

// Day 12
days.push({
  day: 12,
  month: 1,
  week: 2,
  title: "Đại từ chỉ định: This, That, These, Those",
  topic_en: "Demonstratives: This, That, These, Those in the workplace",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Nắm vững 4 đại từ chỉ định: this (cái này - gần), that (cái kia - xa), these (những cái này - gần), those (những cái kia - xa).",
    "Kết hợp chính xác với động từ be: 'This is... / That is...' và 'These are... / Those are...'",
    "Chỉ trỏ và gọi tên các thiết bị, dụng cụ xung quanh vị trí làm việc.",
    "Luyện phát âm âm /ð/ rung trong cả 4 từ: this, that, these, those."
  ],
  new_vocab: [
    { en: "this", vi: "cái này / đây (số ít, ở gần)", ipa: "/ðɪs/", example: "This is my safety helmet.", collocation: "this machine" },
    { en: "that", vi: "cái kia / đó (số ít, ở xa)", ipa: "/ðæt/", example: "That is the main breaker.", collocation: "that switch" },
    { en: "these", vi: "những cái này (số nhiều, ở gần)", ipa: "/ðiːz/", example: "These are chemical gloves.", collocation: "these tools" },
    { en: "those", vi: "những cái kia (số nhiều, ở xa)", ipa: "/ðəʊz/", example: "Those are spare valves.", collocation: "those pumps" },
    { en: "helmet", vi: "mũ bảo hộ", ipa: "/ˈhel.mɪt/", example: "Wear this helmet.", collocation: "safety helmet" }
  ],
  review_vocab: ["motor", "pump", "valve", "tool", "bolt", "safe"],
  grammar_vi: `### 1. Bảng phân loại This, That, These, Those
| Khoảng cách | Số ít (1 cái) -> đi với **IS** | Số nhiều (2 cái trở lên) -> đi với **ARE** |
| :--- | :--- | :--- |
| **Ở gần (Near)** | **This is...** (Đây là / Cái này là...) | **These are...** (Đây là những / Những cái này là...) |
| **Ở xa (Far)** | **That is...** (Kia là / Cái kia là...) | **Those are...** (Kia là những / Những cái kia là...) |

*Ví dụ thực tế*:
- *This is my wrench.* (Đây là chiếc cờ lê của tôi - cầm trên tay).
- *That is the emergency exit.* (Kia là cửa thoát hiểm - chỉ tay về phía xa).
- *These are safety glasses.* (Đây là những chiếc kính bảo hộ - trên bàn trước mặt).
- *Those are steam pipes.* (Kia là những đường ống hơi - tít trên trần nhà).

> **Mẹo phát âm**: Cả 4 từ đều bắt đầu bằng âm **\`\\/ð\\/\`** (âm hữu thanh): đặt đầu lưỡi giữa hai hàm răng và làm rung dây thanh quản.`,
  listening: {
    audio_text: "Trainer: Welcome to the tool room. Let us review the equipment. This is a torque wrench. It is calibrated. That is the grinding machine over there in the corner. Technician: And what are these? Trainer: These are safety gloves. Take a pair. And those are high-visibility vests on the top shelf.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Trainer", text: "Welcome to the tool room. Let us review the equipment. This is a torque wrench. It is calibrated." },
      { speaker: "Trainer", text: "That is the grinding machine over there in the corner." },
      { speaker: "Technician", text: "And what are these?" },
      { speaker: "Trainer", text: "These are safety gloves. Take a pair. And those are high-visibility vests on the top shelf." }
    ],
    questions: [
      {
        question: "What is close to the trainer in his hand?",
        options: ["A torque wrench", "A grinding machine", "A safety vest"],
        answer: 0,
        explanation: "Người huấn luyện nói: 'This is a torque wrench' (Đây là cờ lê lực)."
      },
      {
        question: "Where are the high-visibility vests located?",
        options: ["In the trash bin", "On the top shelf", "On the floor"],
        answer: 1,
        explanation: "Trainer chỉ: 'those are high-visibility vests on the top shelf.'"
      }
    ]
  },
  speaking: {
    prompt: "Chỉ các đồ vật gần và xa bạn bằng tiếng Anh.",
    target_sentence: "This is a wrench. That is a pump. These are bolts. Those are valves.",
    substitution_drill: [
      { cue: "This / helmet", sentence: "This is my safety helmet." },
      { cue: "That / motor", sentence: "That is an electric motor." },
      { cue: "These / gloves", sentence: "These are protective gloves." },
      { cue: "Those / pipes", sentence: "Those are water pipes." }
    ],
    sample_answer: "This is a screwdriver. That is a pump over there. These are screws. Those are warning signs.",
    self_check: [
      "Tôi đã phát âm âm /ð/ rung ở đầu từ 'this, that, these, those' chưa?",
      "Tôi đã dùng 'is' cho this/that và 'are' cho these/those chưa?"
    ]
  },
  reading: {
    text: "During the workshop safety tour, the supervisor points out key equipment. 'Look at this table. This is our PPE station. These are clean earplugs and dust masks. Now look over there across the aisle. That is the emergency eyewash station. Those are fire extinguishers mounted on the wall. Memorize their locations.'",
    translation: "Trong chuyến đi dạo kiểm tra an toàn phân xưởng, người giám sát chỉ ra các thiết bị then chốt. 'Hãy nhìn vào chiếc bàn này. Đây là trạm BHLĐ của chúng ta. Đây là những nút bịt tai và khẩu trang sạch. Bây giờ hãy nhìn sang đằng kia bên kia lối đi. Kia là trạm rửa mắt khẩn cấp. Kia là những bình chữa cháy được gắn trên tường. Hãy ghi nhớ vị trí của chúng.'",
    questions: [
      {
        question: "What items are on the table nearby?",
        options: ["Heavy motors", "Clean earplugs and dust masks", "Chemical barrels"],
        answer: 1,
        explanation: "Đoạn văn nêu: 'These are clean earplugs and dust masks.'"
      },
      {
        question: "What is mounted on the wall across the aisle?",
        options: ["A television", "Fire extinguishers", "A clock"],
        answer: 1,
        explanation: "Trong bài: 'Those are fire extinguishers mounted on the wall.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "This", "wrench.", "torque", "a"], solution: "This is a torque wrench.", hint: "This is a..." },
      { words: ["are", "safety", "Those", "valves."], solution: "Those are safety valves.", hint: "Those are..." }
    ],
    fill_blank: [
      { sentence_with_blank: "_______ (Cái này ở gần) is a calibrated multimeter.", answer: "This", hint: "Số ít ở gần." },
      { sentence_with_blank: "_______ (Những cái kia ở xa) are spare hydraulic hoses.", answer: "Those", hint: "Số nhiều ở xa." }
    ],
    translation: [
      { vietnamese: "Đây là mũ bảo hộ của tôi.", model_answer: "This is my safety helmet.", explanation: "This is my safety helmet." },
      { vietnamese: "Kia là những chiếc van an toàn.", model_answer: "Those are safety valves.", explanation: "Those are safety valves (số nhiều ở xa dùng Those are)." }
    ]
  },
  quiz: [
    {
      question: "Chọn từ đúng để điền vào chỗ trống: '_______ are my safety glasses on the desk.'",
      options: ["This", "These", "That"],
      answer: 1,
      explanation: "'safety glasses' là danh từ số nhiều (cặp kính), ở gần trên bàn, nên dùng 'These are'."
    },
    {
      question: "Khi chỉ một cỗ máy phát điện ở tít góc xa nhà xưởng, ta nói:",
      options: ["This is a generator.", "That is a generator.", "These are a generator."],
      answer: 1,
      explanation: "Chỉ một vật (số ít) ở vị trí xa, ta dùng 'That is a generator'."
    },
    {
      question: "Cặp từ nào sau đây đi với động từ to be 'ARE'?",
      options: ["This và That", "These và Those", "This và These"],
      answer: 1,
      explanation: "'These' và 'Those' là đại từ số nhiều, luôn đi với động từ to be 'are'."
    }
  ]
});

// Day 13
days.push({
  day: 13,
  month: 1,
  week: 2,
  title: "Cấu trúc tồn tại: There is & There are",
  topic_en: "Existential sentences: There is and There are in the workplace",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Nắm vững cấu trúc mô tả sự tồn tại: 'There is + Danh từ số ít' và 'There are + Danh từ số nhiều'.",
    "Sử dụng dạng phủ định ('There is no / There isn't...' và 'There are no / There aren't...').",
    "Áp dụng cấu trúc này để báo cáo sự cố thực tế: 'There is an unusual noise coming from the motor.'",
    "Phát âm nối âm tự nhiên: There is -> /ˈðeə.rɪz/."
  ],
  new_vocab: [
    { en: "there is", vi: "có... (dành cho số ít)", ipa: "/ˈðeə rɪz/", example: "There is a leak here.", collocation: "there is a problem" },
    { en: "there are", vi: "có... (dành cho số nhiều)", ipa: "/ˈðeər ɑːr/", example: "There are two technicians.", collocation: "there are three valves" },
    { en: "unusual noise", vi: "tiếng ồn bất thường", ipa: "/ʌnˌjuː.ʒu.əl ˈnɔɪz/", example: "Hear an unusual noise.", collocation: "hear an unusual noise" },
    { en: "problem", vi: "vấn đề / trục trặc", ipa: "/ˈprɒb.ləm/", example: "There is a serious problem.", collocation: "no problem" },
    { en: "coming from", vi: "phát ra từ / đến từ", ipa: "/ˈkʌm.ɪŋ frɒm/", example: "Smoke coming from the motor.", collocation: "noise coming from" }
  ],
  review_vocab: ["motor", "pump", "valve", "this", "that", "these", "those"],
  grammar_vi: `### 1. Cấu trúc There is / There are (Nghĩa là "Có...")
Cấu trúc này dùng để thông báo, mô tả sự hiện diện của người hoặc vật tại một nơi nào đó:
- **There is + Danh từ số ít**:
  - *There is a problem.* (Có một vấn đề.)
  - *There is an unusual noise coming from the motor.* (Có một tiếng ồn bất thường phát ra từ động cơ.)
- **There are + Danh từ số nhiều**:
  - *There are three technicians in the room.* (Có ba kỹ thuật viên trong phòng.)
  - *There are two pumps running.* (Có hai máy bơm đang chạy.)

### 2. Dạng phủ định (Nói "Không có..."):
- Cách 1: Thêm **no**:
  - *There is no oil leak.* (Không có rò rỉ dầu nào cả.)
  - *There are no workers on the scaffolding.* (Không có công nhân nào trên giàn giáo.)
- Cách 2: Thêm **not any**:
  - *There isn't any noise.* / *There aren't any spare parts.*

> **Lưu ý**: Đừng nhầm lẫn giữa **There is** (Có cái gì tồn tại) và **Have** (Chủ ngữ sở hữu cái gì đó). Ví dụ: *I have a wrench* (Tôi có cái cờ lê), nhưng *There is a wrench on the table* (Có một cái cờ lê ở trên bàn).`,
  listening: {
    audio_text: "Technician: Supervisor, please come here. There is an unusual noise coming from the motor. Supervisor: Let me listen. Yes, you are right. There is also a small oil leak near the shaft. Technician: Are there any spare seals in the storeroom? Supervisor: Yes, there are three spare seals in Store B. Let us shut down the pump first.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "Technician", text: "Supervisor, please come here. There is an unusual noise coming from the motor." },
      { speaker: "Supervisor", text: "Let me listen. Yes, you are right. There is also a small oil leak near the shaft." },
      { speaker: "Technician", text: "Are there any spare seals in the storeroom?" },
      { speaker: "Supervisor", text: "Yes, there are three spare seals in Store B. Let us shut down the pump first." }
    ],
    questions: [
      {
        question: "What problem does the technician report first?",
        options: ["A broken light", "An unusual noise coming from the motor", "A missing helmet"],
        answer: 1,
        explanation: "Kỹ thuật viên báo cáo: 'There is an unusual noise coming from the motor.'"
      },
      {
        question: "Are there any spare seals available?",
        options: ["No, there are none", "Yes, there are three spare seals in Store B", "The store is empty"],
        answer: 1,
        explanation: "Giám sát khẳng định: 'Yes, there are three spare seals in Store B.'"
      }
    ]
  },
  speaking: {
    prompt: "Báo cáo hai tình huống: một vấn đề đơn lẻ và số lượng phụ tùng có sẵn.",
    target_sentence: "There is an unusual noise coming from the motor. There are two technicians checking it.",
    substitution_drill: [
      { cue: "oil leak", sentence: "There is an oil leak coming from the pump." },
      { cue: "smoke", sentence: "There is smoke coming from the bearing." },
      { cue: "three valves", sentence: "There are three valves on this pipe." }
    ],
    sample_answer: "There is an unusual noise coming from the motor. There are no spare belts here.",
    self_check: [
      "Tôi đã phát âm chuẩn câu mục tiêu 'There is an unusual noise coming from the motor' chưa?",
      "Tôi đã dùng đúng 'There is' cho số ít và 'There are' cho số nhiều chưa?"
    ]
  },
  reading: {
    text: "Safety reports must be clear and factual. On Tuesday morning, Operator Nam logs an entry: 'There is a high vibration alarm on Pump 2. There is no visible oil leak, but there is an unusual noise inside the bearing housing. There are two spare bearings in the workshop. I recommend shutting down the unit for inspection.'",
    translation: "Báo cáo an toàn phải rõ ràng và dựa trên sự thật. Sáng thứ Ba, công nhân vận hành Nam ghi sổ nhật ký: 'Có một báo động độ rung cao trên Máy bơm 2. Không có rò rỉ dầu nhìn thấy được, nhưng có một tiếng ồn bất thường bên trong gối đỡ ổ bi. Có hai vòng bi dự phòng trong phân xưởng. Tôi khuyến nghị dừng tổ máy để kiểm tra.'",
    questions: [
      {
        question: "Is there any visible oil leak?",
        options: ["Yes, a massive leak", "No visible oil leak", "The report does not say"],
        answer: 1,
        explanation: "Trong báo cáo ghi rõ: 'There is no visible oil leak...'"
      },
      {
        question: "What does Nam recommend doing?",
        options: ["Running at maximum speed", "Shutting down the unit for inspection", "Ignoring the noise"],
        answer: 1,
        explanation: "Câu cuối: 'I recommend shutting down the unit for inspection.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "There", "problem.", "a"], solution: "There is a problem.", hint: "There is a..." },
      { words: ["from", "noise", "an", "unusual", "There", "the", "coming", "motor.", "is"], solution: "There is an unusual noise coming from the motor.", hint: "Câu mục tiêu trọng tâm." }
    ],
    fill_blank: [
      { sentence_with_blank: "There _______ (is/are) five workers on the platform.", answer: "are", hint: "Five workers là số nhiều." },
      { sentence_with_blank: "There _______ (is/are) an unusual vibration on the shaft.", answer: "is", hint: "Vibration số ít." }
    ],
    translation: [
      { vietnamese: "Có tiếng ồn bất thường phát ra từ động cơ.", model_answer: "There is an unusual noise coming from the motor.", explanation: "Câu mẫu trọng tâm: There is an unusual noise coming from the motor." },
      { vietnamese: "Có ba kỹ thuật viên ở trong xưởng.", model_answer: "There are three technicians in the workshop.", explanation: "There are three technicians in the workshop." }
    ]
  },
  quiz: [
    {
      question: "Chọn từ đúng điền vào chỗ trống: 'There _______ three spare pumps in the warehouse.'",
      options: ["is", "are", "have"],
      answer: 1,
      explanation: "'three spare pumps' là danh từ số nhiều, cấu trúc đúng là 'There are'."
    },
    {
      question: "Câu 'Có tiếng ồn bất thường phát ra từ động cơ' được dịch chuẩn xác là gì?",
      options: [
        "It have an unusual noise from motor.",
        "There is an unusual noise coming from the motor.",
        "There are unusual noise come from motor."
      ],
      answer: 1,
      explanation: "'There is an unusual noise coming from the motor' là câu tiếng Anh chuẩn xác tự nhiên."
    },
    {
      question: "Để nói 'Không có vấn đề gì cả', câu nào sau đây ĐÚNG?",
      options: ["There is no problem.", "There are not problem.", "It has not problem."],
      answer: 0,
      explanation: "'There is no problem' (hoặc No problem) là cách diễn đạt tự nhiên và chuẩn xác nhất."
    }
  ]
});

// Day 14
days.push({
  day: 14,
  month: 1,
  week: 2,
  title: "Tổng ôn Tuần 2 & Bài kiểm tra thực hành",
  topic_en: "Week 2 Review and Practical Assessment",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: true,
  review_target: "Toàn bộ kiến thức Tuần 2: Số đếm 0-100, Đọc SĐT & Tuổi tác, Biểu mẫu cá nhân (DOB), Mạo từ a/an, Số nhiều (-s/-es), This/That/These/Those, và There is/There are.",
  objectives: [
    "Khắc sâu phân biệt '-teen' (13-19) và '-ty' (20-90) cùng phát âm âm đuôi số nhiều.",
    "Thành thạo chỉ trỏ đồ vật (this/that/these/those) và thông báo hiện trạng (There is/are).",
    "Hoàn thành bài kiểm tra trắc nghiệm và dịch câu tuần 2 với số điểm từ 80% trở lên.",
    "Nói lưu loát bài báo cáo ngắn 5 câu mô tả thiết bị và phụ tùng."
  ],
  new_vocab: [
    { en: "check", vi: "kiểm tra", ipa: "/tʃek/", example: "Check the oil level.", collocation: "double check" },
    { en: "count", vi: "đếm số lượng", ipa: "/kaʊnt/", example: "Count the spare bolts.", collocation: "count accurately" },
    { en: "report", vi: "bản báo cáo / báo cáo", ipa: "/rɪˈpɔːt/", example: "Submit your weekly report.", collocation: "safety report" }
  ],
  review_vocab: ["zero", "twenty", "thirty", "forty", "hundred", "address", "phone number", "a", "an", "this", "that", "these", "those", "there is", "there are", "unusual noise", "problem"],
  grammar_vi: `### 1. Bảng tóm tắt ngữ pháp Tuần 2
1. **Số đếm & Tuổi**:
   - *13-19*: Đuôi **-teen** (nhấn trọng âm cuối: *fif-TEEN*).
   - *20-90*: Đuôi **-ty** (nhấn trọng âm đầu: *FIF-ty*).
   - Tuổi: *I am 28 years old.*
2. **Mạo từ A / An**:
   - **A** + phụ âm (*a pump, a motor, a technician*).
   - **An** + nguyên âm u, e, o, a, i (*an engineer, an operator, an emergency*).
3. **Chỉ định (Demonstratives)**:
   - Gần: *This is...* (số ít) / *These are...* (số nhiều).
   - Xa: *That is...* (số ít) / *Those are...* (số nhiều).
4. **Tồn tại (Existential)**:
   - *There is a motor.* (Có 1 cái)
   - *There are three valves.* (Có nhiều cái)
   - *There is an unusual noise coming from the motor.*`,
  listening: {
    audio_text: "Supervisor: Good morning, team. Let us conduct the morning inspection. Alex: Sir, there is an unusual noise coming from motor number three. Supervisor: Is that the forty-kilowatt motor? Alex: Yes, that is the forty-kilowatt unit. Supervisor: Are there any replacement bearings in Store A? Alex: Yes, there are four bearings and an extra seal. Supervisor: Good. Tag out the breaker immediately.",
    slow_rate: 0.75,
    dialogue: [
      { speaker: "Supervisor", text: "Good morning, team. Let us conduct the morning inspection." },
      { speaker: "Alex", text: "Sir, there is an unusual noise coming from motor number three." },
      { speaker: "Supervisor", text: "Is that the forty-kilowatt motor?" },
      { speaker: "Alex", text: "Yes, that is the forty-kilowatt unit." },
      { speaker: "Supervisor", text: "Are there any replacement bearings in Store A?" },
      { speaker: "Alex", text: "Yes, there are four bearings and an extra seal." },
      { speaker: "Supervisor", text: "Good. Tag out the breaker immediately." }
    ],
    questions: [
      {
        question: "What is the power rating of the noisy motor?",
        options: ["Fourteen kilowatts", "Forty kilowatts", "Four kilowatts"],
        answer: 1,
        explanation: "Giám sát viên và Alex xác nhận: 'the forty-kilowatt motor' (40 kW)."
      },
      {
        question: "How many spare bearings are in Store A?",
        options: ["Four bearings", "Fourteen bearings", "Forty bearings"],
        answer: 0,
        explanation: "Alex trả lời: 'there are four bearings and an extra seal' (4 ổ bi)."
      }
    ]
  },
  speaking: {
    prompt: "Thực hành báo cáo tuần: nêu tên bạn, tuổi, số lượng máy móc và báo cáo một tiếng ồn lạ.",
    target_sentence: "Hello, my name is Alex. I am twenty-eight years old. There is an unusual noise coming from motor two. There are three technicians checking it.",
    substitution_drill: [
      { cue: "Full speech", sentence: "Good morning. I am Nam. I am thirty years old. There are five pumps here. This is pump one." }
    ],
    sample_answer: "Good morning. My name is Alex. I am twenty-eight years old. This is our workshop. There is an unusual noise coming from the motor. We have four spare bearings.",
    self_check: [
      "Tôi đã phát âm phân biệt rõ forty (40) và fourteen (14) chưa?",
      "Tôi đã nói trôi chảy câu 'There is an unusual noise coming from the motor' chưa?"
    ]
  },
  reading: {
    text: "Week 2 review brings all essential concepts together. A technician must know how to count parts, read badge numbers, state their age, and identify equipment nearby and at a distance. When an issue occurs, the phrase 'There is an unusual noise' alerts the whole team. Practicing these sentences aloud creates instant reflexes on site.",
    translation: "Bài ôn tập Tuần 2 kết nối tất cả các khái niệm thiết yếu lại với nhau. Một kỹ thuật viên phải biết cách đếm phụ tùng, đọc số thẻ, nói tuổi và nhận diện các thiết bị ở gần cũng như ở xa. Khi xảy ra sự cố, cụm từ 'There is an unusual noise' sẽ cảnh báo cho toàn đội. Luyện nói to những câu này sẽ tạo ra phản xạ tức thì trên công trường.",
    questions: [
      {
        question: "What does the phrase 'There is an unusual noise' do on site?",
        options: ["It stops the shift completely", "It alerts the whole team to an issue", "It plays music"],
        answer: 1,
        explanation: "Bài đọc nêu: '...the phrase 'There is an unusual noise' alerts the whole team.'"
      },
      {
        question: "How does one create instant reflexes on site according to the text?",
        options: ["By practicing these sentences aloud", "By staying quiet", "By reading only in silence"],
        answer: 0,
        explanation: "Câu cuối khẳng định: 'Practicing these sentences aloud creates instant reflexes on site.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["unusual", "There", "a", "is", "leak.", "oil"], solution: "There is an unusual oil leak.", hint: "There is an..." },
      { words: ["safety", "These", "helmets.", "are"], solution: "These are safety helmets.", hint: "These are..." }
    ],
    fill_blank: [
      { sentence_with_blank: "There are _______ (30) technicians at the meeting.", answer: "thirty", hint: "Số 30 viết bằng chữ." },
      { sentence_with_blank: "He is _______ (a/an) electrical engineer.", answer: "an", hint: "Đứng trước từ electrical." }
    ],
    translation: [
      { vietnamese: "Có bốn chiếc máy bơm ở trong phân xưởng.", model_answer: "There are four pumps in the workshop.", explanation: "There are four pumps in the workshop." },
      { vietnamese: "Kia là những chiếc kính bảo hộ mới.", model_answer: "Those are new safety glasses.", explanation: "Those are new safety glasses." }
    ]
  },
  quiz: [
    {
      question: "Câu nào dưới đây đúng ngữ pháp khi có 2 kỹ thuật viên đang trực?",
      options: ["There is two technicians on duty.", "There are two technicians on duty.", "It has two technicians on duty."],
      answer: 1,
      explanation: "Chủ ngữ số nhiều 'two technicians' phải đi với cấu trúc 'There are'."
    },
    {
      question: "Khi chỉ vào 3 chiếc cờ lê đang nằm trên bàn ngay trước mặt bạn, bạn nói:",
      options: ["This is wrenches.", "These are wrenches.", "Those are wrenches."],
      answer: 1,
      explanation: "Số nhiều ở vị trí gần ta dùng 'These are wrenches'."
    },
    {
      question: "Từ nào sau đây viết ĐÚNG chính tả số 15?",
      options: ["fiveteen", "fifteen", "fifty"],
      answer: 1,
      explanation: "15 là fifteen, 50 là fifty."
    },
    {
      question: "Cụm từ 'an unusual noise' dùng mạo từ 'an' vì lí do gì?",
      options: [
        "Vì noise là danh từ số nhiều",
        "Vì từ 'unusual' bắt đầu bằng nguyên âm /ʌ/ (chữ u)",
        "Vì câu mang nghĩa phủ định"
      ],
      answer: 1,
      explanation: "'unusual' bắt đầu bằng nguyên âm /ʌ/ nên phải dùng mạo từ 'an'."
    }
  ]
});

console.log("Week 2 generated:", days.length, "days.");
module.exports = days;
