// Month 1 detailed daily curriculum: Days 1 to 28 (Foundations of Pronunciation, Greetings, be, Pronouns, Numbers, Time, Basic Sentences)
const days = [];

// ==========================================
// WEEK 1: Days 1 to 7 (Alphabet, Greetings, Pronouns, Verb Be)
// ==========================================

// Day 1
days.push({
  day: 1,
  month: 1,
  week: 1,
  title: "Làm quen, chào hỏi & giới thiệu tên cơ bản",
  topic_en: "Greetings and introducing your name",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Biết cách phát âm lời chào cơ bản: Hello, Hi, Good morning.",
    "Nắm vững 2 cách giới thiệu tên: 'I am [Tên]' và 'My name is [Tên]'.",
    "Phân biệt lời chào trang trọng và thân mật.",
    "Luyện nghe và nhắc lại câu giới thiệu đầu tiên mà không ngại ngùng."
  ],
  new_vocab: [
    { en: "hello", vi: "xin chào (chuẩn mực)", ipa: "/həˈləʊ/", example: "Hello, my name is Alex.", collocation: "say hello to someone" },
    { en: "hi", vi: "chào (thân mật)", ipa: "/haɪ/", example: "Hi, I am Nam.", collocation: "say hi" },
    { en: "name", vi: "tên gọi", ipa: "/neɪm/", example: "What is your name?", collocation: "my name is..." },
    { en: "good morning", vi: "chào buổi sáng (trước 12h trưa)", ipa: "/ɡʊd ˈmɔːnɪŋ/", example: "Good morning, team.", collocation: "wish someone good morning" },
    { en: "I", vi: "tôi (đại từ xưng hô)", ipa: "/aɪ/", example: "I am an engineer.", collocation: "I am..." }
  ],
  review_vocab: [],
  grammar_vi: `### 1. Cấu trúc giới thiệu tên
Trong tiếng Anh, có 2 cách đơn giản nhất để giới thiệu tên mình:
- **Cách 1**: \`I am + [Tên]\` (Viết tắt: \`I'm + [Tên]\`)
  - Ví dụ: *I am Alex.* (Tôi là Alex.) hoặc *I'm Nam.* (Tôi là Nam.)
- **Cách 2**: \`My name is + [Tên]\` (Viết tắt: \`My name's + [Tên]\`)
  - Ví dụ: *My name is Lan.* (Tên của tôi là Lan.)

> **Lưu ý phát âm cho người Việt**:
> - Từ **I** đọc là \`/aɪ/\` (mở rộng miệng rồi thu hẹp về âm /ɪ/), đừng đọc cụt thành "ai".
> - Từ **name** có âm cuối \`/m/\`: khép hai môi lại nhẹ nhàng ở cuối từ.
> - Từ **is** phát âm là \`/ɪz/\`, có âm rung nhẹ \`/z/\` ở cuối, tuyệt đối không nuốt âm cuối này.`,
  listening: {
    audio_text: "A: Hello! Good morning. B: Hi! Good morning. What is your name? A: My name is Alex. And you? B: I am David. Nice to meet you, Alex.",
    slow_rate: 0.7,
    dialogue: [
      { speaker: "A", text: "Hello! Good morning." },
      { speaker: "B", text: "Hi! Good morning. What is your name?" },
      { speaker: "A", text: "My name is Alex. And you?" },
      { speaker: "B", text: "I am David. Nice to meet you, Alex." }
    ],
    questions: [
      {
        question: "What is speaker A's name?",
        options: ["David", "Alex", "Nam"],
        answer: 1,
        explanation: "Người nói A trả lời: 'My name is Alex.'"
      },
      {
        question: "What time of day is it in the dialogue?",
        options: ["Morning", "Afternoon", "Night"],
        answer: 0,
        explanation: "Cả hai người đều chào 'Good morning' (buổi sáng)."
      }
    ]
  },
  speaking: {
    prompt: "Hãy giới thiệu tên của bạn bằng cả 2 cách.",
    target_sentence: "Hello, my name is Alex. I am glad to meet you.",
    substitution_drill: [
      { cue: "Alex", sentence: "Hello, I am Alex." },
      { cue: "Minh", sentence: "Hello, my name is Minh." },
      { cue: "Good morning", sentence: "Good morning, my name is Alex." }
    ],
    sample_answer: "Hello! Good morning. My name is Alex.",
    self_check: [
      "Tôi đã phát âm rõ âm /m/ ở cuối từ 'name' chưa?",
      "Tôi đã phát âm âm /z/ ở cuối từ 'is' chưa?",
      "Tôi đã nói liền mạch không ngập ngừng chưa?"
    ]
  },
  reading: {
    text: "Hello, my name is Alex. I am from Vietnam. Good morning, everyone. I am happy to learn English today. Step by step, I practice speaking every morning.",
    translation: "Xin chào, tên tôi là Alex. Tôi đến từ Việt Nam. Chào buổi sáng mọi người. Hôm nay tôi rất vui được học tiếng Anh. Từng bước một, tôi luyện nói vào mỗi buổi sáng.",
    questions: [
      {
        question: "Where is Alex from?",
        options: ["England", "Vietnam", "Japan"],
        answer: 1,
        explanation: "Đoạn văn ghi rõ: 'I am from Vietnam.'"
      },
      {
        question: "When does Alex practice speaking?",
        options: ["Every morning", "Every night", "Only Sundays"],
        answer: 0,
        explanation: "Trong câu cuối: 'I practice speaking every morning.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "Alex", "My", "name"], solution: "My name is Alex.", hint: "Bắt đầu bằng từ viết hoa 'My'." },
      { words: ["am", "I", "Nam"], solution: "I am Nam.", hint: "Chủ ngữ I đứng đầu câu." }
    ],
    fill_blank: [
      { sentence_with_blank: "Good _______, Mr. David.", answer: "morning", hint: "Lời chào trước 12 giờ trưa." },
      { sentence_with_blank: "My name _______ Alex.", answer: "is", hint: "Động từ to be đi với 'My name'." }
    ],
    translation: [
      { vietnamese: "Xin chào, tôi là Alex.", model_answer: "Hello, I am Alex.", explanation: "Có thể dùng 'Hello' hoặc 'Hi', đi kèm 'I am Alex'." },
      { vietnamese: "Chào buổi sáng, tên tôi là Minh.", model_answer: "Good morning, my name is Minh.", explanation: "Good morning + dấu phẩy + my name is Minh." }
    ]
  },
  quiz: [
    {
      question: "Câu nào dưới đây là câu giới thiệu tên đúng ngữ pháp?",
      options: ["I name is Alex.", "My name is Alex.", "My is Alex name."],
      answer: 1,
      explanation: "Cấu trúc đúng là 'My name is + Tên' hoặc 'I am + Tên'."
    },
    {
      question: "Lời chào 'Good morning' được sử dụng vào thời điểm nào trong ngày?",
      options: ["Sau 6 giờ tối", "Từ 12h trưa đến 6h chiều", "Trước 12 giờ trưa"],
      answer: 2,
      explanation: "'Good morning' là chào buổi sáng, dùng trước 12h trưa."
    },
    {
      question: "Từ 'name' có phiên âm chuẩn là gì?",
      options: ["/neɪm/", "/næm/", "/nem/"],
      answer: 0,
      explanation: "Từ 'name' phát âm là nguyên âm đôi /eɪ/ với phụ âm đuôi /m/: /neɪm/."
    }
  ]
});

// Day 2
days.push({
  day: 2,
  month: 1,
  week: 1,
  title: "Lời chào theo buổi, phép lịch sự & xin lỗi",
  topic_en: "Greetings by time of day, politeness and apologies",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Sử dụng thành thạo: Good afternoon, Good evening, Goodbye.",
    "Biết cách nói lời cảm ơn ('Thank you / Thanks') và xin vui lòng ('Please').",
    "Phân biệt giữa 'Excuse me' (làm phiền / hỏi chuyện) và 'Sorry' (nhận lỗi).",
    "Phát âm chuẩn âm /θ/ trong 'thank you'."
  ],
  new_vocab: [
    { en: "good afternoon", vi: "chào buổi chiều (sau 12h)", ipa: "/ɡʊd ˌɑːftəˈnuːn/", example: "Good afternoon, Mr. Brown.", collocation: "say good afternoon" },
    { en: "good evening", vi: "chào buổi tối", ipa: "/ɡʊd ˈiːvnɪŋ/", example: "Good evening, everyone.", collocation: "have a good evening" },
    { en: "goodbye", vi: "tạm biệt", ipa: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow.", collocation: "say goodbye" },
    { en: "please", vi: "làm ơn / xin vui lòng", ipa: "/pliːz/", example: "Please sit down.", collocation: "yes, please" },
    { en: "thank you", vi: "cảm ơn bạn", ipa: "/ˈθæŋk juː/", example: "Thank you for your help.", collocation: "thank you very much" },
    { en: "excuse me", vi: "xin lỗi (để bắt chuyện / hỏi đường)", ipa: "/ɪkˈskjuːz miː/", example: "Excuse me, where is the office?", collocation: "excuse me for asking" },
    { en: "sorry", vi: "xin lỗi (khi làm sai)", ipa: "/ˈsɒri/", example: "I am sorry for being late.", collocation: "feel sorry" }
  ],
  review_vocab: ["hello", "good morning", "name", "I"],
  grammar_vi: `### 1. Phân biệt các lời chào theo buổi
- **Good morning**: Buổi sáng (từ rạng sáng đến 12h trưa).
- **Good afternoon**: Buổi chiều (từ sau 12h trưa đến khoảng 18h).
- **Good evening**: Buổi tối (từ khoảng 18h trở đi khi gặp mặt).
- *Lưu ý*: **Good night** không phải lời chào khi gặp, mà là câu chúc ngủ ngon hoặc lời chào tạm biệt vào ban đêm.

### 2. Phép lịch sự: Please & Thank you
- Đặt **Please** ở đầu câu hoặc cuối câu mệnh lệnh để câu trở nên lịch sự:
  - *Please come in.* (Xin mời vào.)
  - *Sit down, please.* (Xin mời ngồi.)
- Đáp lại lời cảm ơn: **You are welcome.** (Không có chi.)

### 3. Phân biệt Excuse me và Sorry
- **Excuse me**: Dùng TRƯỚC KHI làm phiền người khác (để hỏi đường, ngắt lời, hoặc xin lối đi qua).
- **Sorry**: Dùng SAU KHI bạn đã làm điều gì đó sai hoặc gây bất tiện cho người khác.`,
  listening: {
    audio_text: "A: Excuse me, are you Mr. David? B: Yes, I am. A: Good afternoon, sir. My name is Alex. B: Good afternoon, Alex. Nice to meet you. Please take a seat. A: Thank you very much.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "A", text: "Excuse me, are you Mr. David?" },
      { speaker: "B", text: "Yes, I am." },
      { speaker: "A", text: "Good afternoon, sir. My name is Alex." },
      { speaker: "B", text: "Good afternoon, Alex. Nice to meet you. Please take a seat." },
      { speaker: "A", text: "Thank you very much." }
    ],
    questions: [
      {
        question: "Why does speaker A say 'Excuse me' at the beginning?",
        options: ["To apologize for a mistake", "To politely get someone's attention", "To say goodbye"],
        answer: 1,
        explanation: "'Excuse me' dùng để bắt chuyện và thu hút sự chú ý một cách lịch sự."
      },
      {
        question: "What does Mr. David invite Alex to do?",
        options: ["Leave the room", "Take a seat", "Stand up"],
        answer: 1,
        explanation: "Mr. David nói: 'Please take a seat' (Xin mời ngồi)."
      }
    ]
  },
  speaking: {
    prompt: "Thực hành hỏi chuyện một người và cảm ơn họ.",
    target_sentence: "Excuse me, good afternoon. Thank you for your time.",
    substitution_drill: [
      { cue: "morning", sentence: "Excuse me, good morning. Thank you for your time." },
      { cue: "help", sentence: "Thank you for your help." },
      { cue: "support", sentence: "Thank you for your support." }
    ],
    sample_answer: "Excuse me, good afternoon. My name is Alex. Thank you very much.",
    self_check: [
      "Tôi đã đặt đầu lưỡi giữa hai hàm răng khi phát âm âm /θ/ trong 'thank' chưa?",
      "Tôi đã phát âm âm cuối /z/ trong 'please' chưa?",
      "Tôi đã dùng đúng 'Excuse me' khi bắt đầu câu chưa?"
    ]
  },
  reading: {
    text: "At 2:00 PM, Alex walks into the workshop. He says: 'Good afternoon, team.' His supervisor answers: 'Good afternoon, Alex. Please check the tool list.' Alex replies: 'Yes, thank you.' When he accidentally drops a bolt, he immediately says: 'I am sorry.' Good manners make the workplace safe and friendly.",
    translation: "Lúc 2 giờ chiều, Alex bước vào phân xưởng. Anh nói: 'Chào buổi chiều cả đội.' Người giám sát đáp: 'Chào buổi chiều, Alex. Xin vui lòng kiểm tra danh mục dụng cụ.' Alex đáp: 'Vâng, cảm ơn anh.' Khi anh vô tình đánh rơi chiếc bu lông, anh lập tức nói: 'Tôi xin lỗi.' Phép lịch sự giúp nơi làm việc trở nên an toàn và thân thiện.",
    questions: [
      {
        question: "What time does Alex enter the workshop?",
        options: ["At 8:00 AM", "At 2:00 PM", "At 9:00 PM"],
        answer: 1,
        explanation: "Bài đọc nêu rõ: 'At 2:00 PM, Alex walks into the workshop.'"
      },
      {
        question: "Why does Alex say 'I am sorry'?",
        options: ["He is late", "He dropped a bolt", "He forgot his helmet"],
        answer: 1,
        explanation: "Trong bài: 'When he accidentally drops a bolt, he immediately says: I am sorry.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["afternoon,", "Good", "David.", "Mr."], solution: "Good afternoon, Mr. David.", hint: "Chào buổi chiều." },
      { words: ["you", "very", "much.", "Thank"], solution: "Thank you very much.", hint: "Cảm ơn nhiều." }
    ],
    fill_blank: [
      { sentence_with_blank: "_______ me, where is the exit?", answer: "Excuse", hint: "Dùng để hỏi lịch sự trước khi làm phiền." },
      { sentence_with_blank: "I am _______ for being late.", answer: "sorry", hint: "Dùng để xin lỗi khi mắc lỗi." }
    ],
    translation: [
      { vietnamese: "Xin lỗi, văn phòng ở đâu ạ?", model_answer: "Excuse me, where is the office?", explanation: "Dùng 'Excuse me' khi mở lời hỏi đường." },
      { vietnamese: "Cảm ơn bạn rất nhiều vì đã giúp đỡ.", model_answer: "Thank you very much for your help.", explanation: "'Thank you very much for...' là mẫu câu chuẩn." }
    ]
  },
  quiz: [
    {
      question: "Khi bạn vô tình giẫm vào chân đồng nghiệp, bạn nên nói câu nào?",
      options: ["Excuse me!", "I am sorry!", "You are welcome!"],
      answer: 1,
      explanation: "Khi đã gây ra lỗi hoặc sự cố, dùng 'I am sorry' để xin lỗi."
    },
    {
      question: "Âm đầu tiên của từ 'thank' (/θ/) được tạo ra bằng cách nào?",
      options: ["Bặm hai môi lại", "Đặt đầu lưỡi giữa hai hàm răng và đẩy hơi nhẹ", "Uốn cong lưỡi chạm ngạc mềm"],
      answer: 1,
      explanation: "Âm /θ/ (âm vô thanh) được tạo bằng cách đặt đầu lưỡi giữa hai hàm răng và thổi luồng hơi ra."
    },
    {
      question: "Người khác nói 'Thank you', câu đáp lại lịch sự và chuẩn mực nhất là gì?",
      options: ["No thanks.", "You are welcome.", "I am sorry."],
      answer: 1,
      explanation: "'You are welcome' nghĩa là không có chi / rất hân hạnh, là câu đáp chuẩn mực."
    }
  ]
});

// Day 3
days.push({
  day: 3,
  month: 1,
  week: 1,
  title: "Bảng chữ cái, đánh vần tên & mã thiết bị",
  topic_en: "Alphabet, spelling names and equipment codes",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Đọc chuẩn 26 chữ cái tiếng Anh từ A đến Z.",
    "Hỏi và đánh vần tên: 'How do you spell your name? - It is A-L-E-X.'",
    "Áp dụng đánh vần mã số máy móc, biển số hoặc mã thiết bị (ví dụ: P-101, V-02).",
    "Nhận diện 5 nguyên âm: A, E, I, O, U."
  ],
  new_vocab: [
    { en: "alphabet", vi: "bảng chữ cái", ipa: "/ˈæl.fə.bet/", example: "Learn the English alphabet.", collocation: "English alphabet" },
    { en: "spell", vi: "đánh vần", ipa: "/spel/", example: "How do you spell that?", collocation: "spell your name" },
    { en: "letter", vi: "chữ cái / lá thư", ipa: "/ˈlet.ər/", example: "There are 26 letters in the alphabet.", collocation: "capital letter" },
    { en: "capital letter", vi: "chữ cái viết hoa", ipa: "/ˌkæp.ɪ.təl ˈlet.ər/", example: "Start names with a capital letter.", collocation: "write in capital letters" },
    { en: "code", vi: "mã số / ký hiệu", ipa: "/kəʊd/", example: "What is the equipment code?", collocation: "equipment code" }
  ],
  review_vocab: ["name", "please", "thank you", "hello"],
  grammar_vi: `### 1. Bảng 26 chữ cái tiếng Anh và phát âm
- **A** /eɪ/, **B** /biː/, **C** /siː/, **D** /diː/, **E** /iː/, **F** /ef/, **G** /dʒiː/
- **H** /eɪtʃ/, **I** /aɪ/, **J** /dʒeɪ/, **K** /keɪ/, **L** /el/, **M** /em/, **N** /en/
- **O** /əʊ/, **P** /piː/, **Q** /kjuː/, **R** /ɑːr/, **S** /es/, **T** /tiː/, **U** /juː/
- **V** /viː/, **W** /ˈdʌb.əl.juː/, **X** /eks/, **Y** /waɪ/, **Z** /zed/ (hoặc /ziː/ theo Mỹ)

### 2. Các cặp chữ cái người Việt thường nhầm:
- **E** (/iː/) và **I** (/aɪ/)
- **A** (/eɪ/) và **H** (/eɪtʃ/)
- **G** (/dʒiː/) và **J** (/dʒeɪ/)
- **B** (/biː/) và **P** (/piː/ bật hơi mạnh)

### 3. Mẫu câu hỏi cách đánh vần:
- *How do you spell your name?* (Bạn đánh vần tên bạn như thế nào?)
  - *It is A-L-E-X.* (Nó được đánh vần là A-L-E-X.)
- *Can you spell that, please?* (Làm ơn đánh vần từ đó được không?)`,
  listening: {
    audio_text: "A: What is your full name, please? B: My name is Nam Nguyen. A: How do you spell your first name? B: It is N-A-M. A: And your last name? B: N-G-U-Y-E-N. A: Thank you. What is the pump code? B: It is P-1-0-2.",
    slow_rate: 0.75,
    dialogue: [
      { speaker: "A", text: "What is your full name, please?" },
      { speaker: "B", text: "My name is Nam Nguyen." },
      { speaker: "A", text: "How do you spell your first name?" },
      { speaker: "B", text: "It is N-A-M." },
      { speaker: "A", text: "And your last name?" },
      { speaker: "B", text: "N-G-U-Y-E-N." },
      { speaker: "A", text: "Thank you. What is the pump code?" },
      { speaker: "B", text: "It is P-1-0-2." }
    ],
    questions: [
      {
        question: "How is the speaker's first name spelled?",
        options: ["N-A-M", "M-A-N", "N-A-N"],
        answer: 0,
        explanation: "Người nói đánh vần tên chính: N-A-M."
      },
      {
        question: "What is the equipment code mentioned?",
        options: ["P-1-0-1", "P-1-0-2", "V-1-0-2"],
        answer: 1,
        explanation: "Mã máy bơm là P-1-0-2."
      }
    ]
  },
  speaking: {
    prompt: "Đánh vần tên của bạn và mã máy bơm P-201.",
    target_sentence: "My name is Alex, spelled A-L-E-X. The pump code is P-2-0-1.",
    substitution_drill: [
      { cue: "Lan", sentence: "My name is Lan, spelled L-A-N." },
      { cue: "David", sentence: "My name is David, spelled D-A-V-I-D." },
      { cue: "Valve V-04", sentence: "The valve code is V-0-4." }
    ],
    sample_answer: "My name is Nam, N-A-M. The code is P-1-0-2.",
    self_check: [
      "Tôi đã phân biệt được âm /eɪ/ của chữ A và /aɪ/ của chữ I chưa?",
      "Tôi đã đọc rõ chữ P (/piː/ bật hơi) và V (/viː/ răng cắn môi) chưa?"
    ]
  },
  reading: {
    text: "At the factory security gate, every new worker must state their name and spell it. Nam arrives at Gate A. The guard asks: 'How do you spell your name?' Nam answers: 'N-A-M.' The guard checks the list and finds tag P-102. Correct spelling avoids confusion and keeps records accurate.",
    translation: "Tại cổng bảo vệ nhà máy, mỗi công nhân mới đều phải nói tên và đánh vần tên. Nam đến Cổng A. Bảo vệ hỏi: 'Bạn đánh vần tên bạn thế nào?' Nam trả lời: 'N-A-M.' Bảo vệ kiểm tra danh sách và tìm thấy thẻ P-102. Đánh vần chính xác giúp tránh nhầm lẫn và giữ cho hồ sơ chuẩn xác.",
    questions: [
      {
        question: "Where is Nam registering?",
        options: ["At the cafeteria", "At the factory security gate", "In the hospital"],
        answer: 1,
        explanation: "Câu đầu tiên: 'At the factory security gate...'"
      },
      {
        question: "Why is correct spelling important according to the text?",
        options: ["To finish work early", "To avoid confusion and keep records accurate", "To learn singing"],
        answer: 1,
        explanation: "Câu cuối: 'Correct spelling avoids confusion and keeps records accurate.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["spell", "you", "How", "do", "it?"], solution: "How do you spell it?", hint: "Câu hỏi đánh vần bắt đầu bằng How." },
      { words: ["is", "name.", "A-L-E-X", "my"], solution: "A-L-E-X is my name.", hint: "Hoặc: My name is A-L-E-X." }
    ],
    fill_blank: [
      { sentence_with_blank: "How do you _______ your name?", answer: "spell", hint: "Động từ đánh vần." },
      { sentence_with_blank: "The equipment _______ is P-101.", answer: "code", hint: "Từ chỉ mã số." }
    ],
    translation: [
      { vietnamese: "Bạn đánh vần tên của bạn như thế nào?", model_answer: "How do you spell your name?", explanation: "Mẫu câu chuẩn hỏi cách đánh vần tên." },
      { vietnamese: "Mã thiết bị là V-102.", model_answer: "The equipment code is V-102.", explanation: "Equipment code = mã thiết bị." }
    ]
  },
  quiz: [
    {
      question: "Chữ cái 'H' trong tiếng Anh được phát âm chuẩn là gì?",
      options: ["/eɪtʃ/", "/hæt/", "/haɪ/"],
      answer: 0,
      explanation: "Chữ H đọc là /eɪtʃ/ (bắt đầu bằng âm /eɪ/ và kết thúc bằng âm /tʃ/)."
    },
    {
      question: "Câu nào dùng để hỏi cách đánh vần một từ?",
      options: ["How do you spell that?", "What is your old?", "Where do you do?"],
      answer: 0,
      explanation: "'How do you spell that?' là câu hỏi đánh vần chuẩn xác."
    },
    {
      question: "Trong 5 chữ cái sau, chữ nào là một NGUYÊN ÂM (vowel)?",
      options: ["B", "E", "T"],
      answer: 1,
      explanation: "Năm nguyên âm chính trong tiếng Anh là A, E, I, O, U. Do đó E là nguyên âm."
    }
  ]
});

// Day 4
days.push({
  day: 4,
  month: 1,
  week: 1,
  title: "Đại từ nhân xưng & Động từ Be (Khẳng định)",
  topic_en: "Personal pronouns and affirmative verb be",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Nắm vững 7 đại từ nhân xưng: I, you, he, she, it, we, they.",
    "Ghép chính xác với 3 dạng của động từ be ở hiện tại: am, is, are.",
    "Sử dụng dạng viết tắt thông dụng: I'm, you're, he's, she's, it's, we're, they're.",
    "Tạo các câu khẳng định đơn giản giới thiệu người và nghề nghiệp."
  ],
  new_vocab: [
    { en: "he", vi: "anh ấy / ông ấy (ngôi 3 số ít nam)", ipa: "/hiː/", example: "He is a technician.", collocation: "he is..." },
    { en: "she", vi: "cô ấy / bà ấy (ngôi 3 số ít nữ)", ipa: "/ʃiː/", example: "She is an engineer.", collocation: "she is..." },
    { en: "it", vi: "nó (đồ vật, máy móc, con vật)", ipa: "/ɪt/", example: "It is a new pump.", collocation: "it is..." },
    { en: "we", vi: "chúng tôi / chúng ta", ipa: "/wiː/", example: "We are colleagues.", collocation: "we are..." },
    { en: "they", vi: "họ / chúng nó", ipa: "/ðeɪ/", example: "They are workers.", collocation: "they are..." },
    { en: "technician", vi: "kỹ thuật viên", ipa: "/tekˈnɪʃ.ən/", example: "He is a skilled technician.", collocation: "maintenance technician" },
    { en: "engineer", vi: "kỹ sư", ipa: "/ˌen.dʒɪˈnɪər/", example: "She is a mechanical engineer.", collocation: "chief engineer" }
  ],
  review_vocab: ["I", "name", "hello", "code"],
  grammar_vi: `### 1. Bảng quy tắc Đại từ nhân xưng & Động từ Be (Hiện tại đơn)
| Đại từ (Pronoun) | Nghĩa tiếng Việt | Động từ Be | Dạng viết tắt | Ví dụ |
| :--- | :--- | :--- | :--- | :--- |
| **I** | Tôi | **am** | I'm | *I am a technician.* |
| **You** | Bạn / Các bạn | **are** | You're | *You are early today.* |
| **He** | Anh ấy / Ông ấy | **is** | He's | *He is an engineer.* |
| **She** | Cô ấy / Bà ấy | **is** | She's | *She is the supervisor.* |
| **It** | Nó (máy, vật) | **is** | It's | *It is a motor.* |
| **We** | Chúng tôi / Chúng ta | **are** | We're | *We are a team.* |
| **They** | Họ / Chúng nó | **are** | They're | *They are colleagues.* |

### 2. Quy tắc ghi nhớ nhanh:
- **am**: Chỉ đi duy nhất với **I**.
- **is**: Đi với các chủ ngữ **số ít** (He, She, It, danh từ số ít như *the motor*).
- **are**: Đi với **You** và các chủ ngữ **số nhiều** (We, They, danh từ số nhiều như *the workers*).`,
  listening: {
    audio_text: "A: Who is he? B: He is Alex. He is a mechanical technician. A: And who is she? B: She is Lan. She is our quality engineer. A: Are they new here? B: Yes, they are new employees.",
    slow_rate: 0.75,
    dialogue: [
      { speaker: "A", text: "Who is he?" },
      { speaker: "B", text: "He is Alex. He is a mechanical technician." },
      { speaker: "A", text: "And who is she?" },
      { speaker: "B", text: "She is Lan. She is our quality engineer." },
      { speaker: "A", text: "Are they new here?" },
      { speaker: "B", text: "Yes, they are new employees." }
    ],
    questions: [
      {
        question: "What is Alex's job?",
        options: ["Quality engineer", "Mechanical technician", "Plant manager"],
        answer: 1,
        explanation: "Người nói B nêu rõ: 'He is a mechanical technician.'"
      },
      {
        question: "What is Lan's job?",
        options: ["Mechanical technician", "Quality engineer", "Security guard"],
        answer: 1,
        explanation: "Người nói B nêu: 'She is Lan. She is our quality engineer.'"
      }
    ]
  },
  speaking: {
    prompt: "Giới thiệu bản thân và một người đồng nghiệp.",
    target_sentence: "I am a technician. He is an engineer. We are colleagues.",
    substitution_drill: [
      { cue: "She / engineer", sentence: "She is an engineer." },
      { cue: "They / workers", sentence: "They are workers." },
      { cue: "It / a motor", sentence: "It is a motor." }
    ],
    sample_answer: "I am Alex. I am a technician. She is Lan. She is an engineer.",
    self_check: [
      "Tôi đã dùng đúng 'is' cho He/She và 'are' cho We/They chưa?",
      "Tôi đã phát âm âm /ʃ/ trong từ 'she' tròn môi chưa?"
    ]
  },
  reading: {
    text: "Alex and David work at the factory. Alex is a technician. He is twenty-eight years old. David is an electrical engineer. He is thirty-five years old. They are in the workshop now. It is a busy day. We are happy to work together.",
    translation: "Alex và David làm việc tại nhà máy. Alex là một kỹ thuật viên. Anh ấy 28 tuổi. David là một kỹ sư điện. Anh ấy 35 tuổi. Hiện tại họ đang ở trong phân xưởng. Hôm nay là một ngày bận rộn. Chúng tôi rất vui được làm việc cùng nhau.",
    questions: [
      {
        question: "Who is an electrical engineer?",
        options: ["Alex", "David", "Neither"],
        answer: 1,
        explanation: "Bài đọc nêu: 'David is an electrical engineer.'"
      },
      {
        question: "Where are they now?",
        options: ["At home", "In the workshop", "At the airport"],
        answer: 1,
        explanation: "Bài đọc nêu: 'They are in the workshop now.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "He", "technician.", "a"], solution: "He is a technician.", hint: "Chủ ngữ He đi với is." },
      { words: ["are", "colleagues.", "We"], solution: "We are colleagues.", hint: "Chủ ngữ We đi với are." }
    ],
    fill_blank: [
      { sentence_with_blank: "She _______ an electrical engineer.", answer: "is", hint: "Động từ be cho ngôi She." },
      { sentence_with_blank: "They _______ workers in our plant.", answer: "are", hint: "Động từ be cho ngôi They." }
    ],
    translation: [
      { vietnamese: "Anh ấy là một kỹ sư.", model_answer: "He is an engineer.", explanation: "Dùng an trước engineer: He is an engineer." },
      { vietnamese: "Chúng tôi là đồng nghiệp.", model_answer: "We are colleagues.", explanation: "We are + colleagues (số nhiều)." }
    ]
  },
  quiz: [
    {
      question: "Chọn từ thích hợp điền vào chỗ trống: 'They _______ technicians.'",
      options: ["am", "is", "are"],
      answer: 2,
      explanation: "Chủ ngữ 'They' (họ - số nhiều) luôn đi với động từ to be 'are'."
    },
    {
      question: "Câu nào dưới đây sử dụng đúng dạng viết tắt?",
      options: ["He're an engineer.", "She's an engineer.", "I'is an engineer."],
      answer: 1,
      explanation: "'She is' viết tắt là 'She's'."
    },
    {
      question: "Từ nào dùng để thay thế cho một cỗ máy (vật)?",
      options: ["He", "She", "It"],
      answer: 2,
      explanation: "Đại từ 'It' dùng để chỉ đồ vật, máy móc, sự việc ở số ít."
    }
  ]
});

// Day 5
days.push({
  day: 5,
  month: 1,
  week: 1,
  title: "Động từ Be: Phủ định & Câu hỏi Yes/No",
  topic_en: "Verb be: Negatives and Yes/No questions",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Thành thạo dạng phủ định: add 'not' sau động từ be (is not / isn't, are not / aren't).",
    "Đặt câu hỏi Yes/No bằng cách đảo Be lên trước chủ ngữ: 'Are you an engineer?'",
    "Trả lời ngắn gọn: 'Yes, I am.' hoặc 'No, I am not.'",
    "Thực hành hỏi đáp xác nhận vai trò và trạng thái máy móc."
  ],
  new_vocab: [
    { en: "not", vi: "không (từ phủ định)", ipa: "/nɒt/", example: "I am not tired.", collocation: "is not / are not" },
    { en: "yes", vi: "có / vâng / đúng vậy", ipa: "/jes/", example: "Yes, I am an engineer.", collocation: "yes, of course" },
    { en: "no", vi: "không / không phải", ipa: "/nəʊ/", example: "No, he is not here.", collocation: "no, thanks" },
    { en: "ready", vi: "sẵn sàng", ipa: "/ˈred.i/", example: "Are you ready?", collocation: "ready to work" },
    { en: "safe", vi: "an toàn", ipa: "/seɪf/", example: "Is the machine safe?", collocation: "safe condition" }
  ],
  review_vocab: ["he", "she", "it", "we", "they", "technician"],
  grammar_vi: `### 1. Dạng phủ định của động từ Be
Để tạo câu phủ định (nói "không phải"), ta thêm **not** ngay phía sau động từ be:
- **I am not** (viết tắt: *I'm not*)
- **He / She / It is not** (viết tắt: *isn't* hoặc *he's not*)
- **You / We / They are not** (viết tắt: *aren't* hoặc *we're not*)

*Ví dụ*:
- *He is not a manager. He is a technician.* (Anh ấy không phải quản lý. Anh ấy là kỹ thuật viên.)
- *The motor is not hot.* (Động cơ không bị nóng.)

### 2. Câu hỏi Yes/No (Đảo Be lên đầu câu)
Đưa **Am / Is / Are** lên trước chủ ngữ:
- *Are you a technician?* -> *Yes, I am.* / *No, I am not.*
- *Is he here today?* -> *Yes, he is.* / *No, he isn't.*
- *Is the pump safe?* -> *Yes, it is.* / *No, it isn't.*`,
  listening: {
    audio_prompt: "Luyện nghe đoạn hội thoại hỏi đáp thực tế về: Động từ Be: Phủ định & Câu hỏi Yes/No.",
    audio_text: "A: Are you the shift supervisor? B: No, I am not. I am a maintenance technician. A: Is Mr. David in the control room? B: Yes, he is. A: Is the generator ready to run? B: Yes, it is ready and safe.",
    transcript: "A: Are you the shift supervisor?\nB: No, I am not. I am a maintenance technician.\nA: Is Mr. David in the control room?\nB: Yes, he is.\nA: Is the generator ready to run?\nB: Yes, it is ready and safe.",
    translation_vi: "A: Bạn có phải là người giám sát ca không?\nB: Không, tôi không phải. Tôi là kỹ thuật viên bảo trì.\nA: Ông David có ở trong phòng điều khiển không?\nB: Vâng, ông ấy có ở đó.\nA: Máy phát điện đã sẵn sàng chạy chưa?\nB: Vâng, nó đã sẵn sàng và an toàn.",
    slow_rate: 0.72,
    dialogue: [
      { speaker: "A", text: "Are you the shift supervisor?", vi: "Bạn có phải là người giám sát ca không?" },
      { speaker: "B", text: "No, I am not. I am a maintenance technician.", vi: "Không, tôi không phải. Tôi là kỹ thuật viên bảo trì." },
      { speaker: "A", text: "Is Mr. David in the control room?", vi: "Ông David có ở trong phòng điều khiển không?" },
      { speaker: "B", text: "Yes, he is.", vi: "Vâng, ông ấy có ở đó." },
      { speaker: "A", text: "Is the generator ready to run?", vi: "Máy phát điện đã sẵn sàng chạy chưa?" },
      { speaker: "B", text: "Yes, it is ready and safe.", vi: "Vâng, nó đã sẵn sàng và an toàn." }
    ],
    questions: [
      {
        question: "Is speaker B the shift supervisor?",
        options: ["Yes, he is", "No, he is not", "He is the manager"],
        answer: 1,
        explanation: "Người nói B trả lời rõ ràng: 'No, I am not.'"
      },
      {
        question: "Is the generator ready to run?",
        options: ["No, it is broken", "Yes, it is ready and safe", "It is missing"],
        answer: 1,
        explanation: "Câu cuối: 'Yes, it is ready and safe.'"
      }
    ]
  },
  speaking: {
    prompt: "Hỏi và trả lời về nghề nghiệp và trạng thái sẵn sàng.",
    target_sentence: "Are you ready? - Yes, I am. The machine is not broken.",
    substitution_drill: [
      { cue: "an engineer / No", sentence: "Are you an engineer? - No, I am not." },
      { cue: "safe / Yes", sentence: "Is it safe? - Yes, it is." },
      { cue: "tired / No", sentence: "Are they tired? - No, they are not." }
    ],
    sample_answer: "Are you a technician? Yes, I am. Is the motor hot? No, it isn't.",
    self_check: [
      "Tôi đã lên giọng ở cuối câu hỏi Yes/No chưa?",
      "Tôi đã phát âm đúng 'isn't' (/ˈɪz.ənt/) và 'aren't' (/ɑːnt/) chưa?"
    ]
  },
  reading: {
    text: "Safety inspection is essential before starting any machine. Tom checks Pump 1. Is it clean? Yes, it is. Is it leaking oil? No, it is not. Are the warning signs visible? Yes, they are. Tom says: 'The pump is not dangerous. It is ready for operation.'",
    translation: "Kiểm tra an toàn là điều thiết yếu trước khi khởi động bất kỳ cỗ máy nào. Tom kiểm tra Máy bơm 1. Nó có sạch không? Có, nó sạch. Nó có bị rò rỉ dầu không? Không, nó không rò rỉ. Các biển cảnh báo có nhìn thấy rõ không? Có, nhìn rất rõ. Tom nói: 'Máy bơm không nguy hiểm. Nó đã sẵn sàng vận hành.'",
    questions: [
      {
        question: "Is Pump 1 leaking oil?",
        options: ["Yes, it is", "No, it is not", "It is smoking"],
        answer: 1,
        explanation: "Bài đọc nêu: 'Is it leaking oil? No, it is not.'"
      },
      {
        question: "Is the pump ready for operation?",
        options: ["Yes, it is ready", "No, it needs repair", "It is offline"],
        answer: 0,
        explanation: "Câu cuối: 'It is ready for operation.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["not", "is", "broken.", "It"], solution: "It is not broken.", hint: "Câu phủ định có not." },
      { words: ["ready?", "you", "Are"], solution: "Are you ready?", hint: "Đảo Are lên đầu câu hỏi." }
    ],
    fill_blank: [
      { sentence_with_blank: "He _______ not an electrician. He is a mechanic.", answer: "is", hint: "Động từ be đi với He." },
      { sentence_with_blank: "_______ you ready for the safety test?", answer: "Are", hint: "Đảo từ to be lên đầu câu hỏi cho 'you'." }
    ],
    translation: [
      { vietnamese: "Cỗ máy này không bị hỏng.", model_answer: "The machine is not broken.", explanation: "Dùng 'is not' (hoặc isn't) + broken." },
      { vietnamese: "Bạn có phải là kỹ sư không? - Không, tôi không phải.", model_answer: "Are you an engineer? - No, I am not.", explanation: "Are you...? - No, I am not." }
    ]
  },
  quiz: [
    {
      question: "Dạng phủ định viết tắt của 'is not' là gì?",
      options: ["aren't", "isn't", "am not"],
      answer: 1,
      explanation: "'is not' viết tắt thành 'isn't'."
    },
    {
      question: "Để hỏi 'Cô ấy có phải là người giám sát không?', câu hỏi nào đúng?",
      options: ["Is she the supervisor?", "She is the supervisor?", "Are she the supervisor?"],
      answer: 0,
      explanation: "Đảo động từ to be 'Is' lên trước chủ ngữ 'she': 'Is she the supervisor?'"
    },
    {
      question: "Câu trả lời ngắn đúng cho câu hỏi 'Are you ready?' khi bạn đã sẵn sàng là gì?",
      options: ["Yes, I do.", "Yes, I am.", "Yes, I be."],
      answer: 1,
      explanation: "Hỏi với 'Are you', câu trả lời khẳng định là 'Yes, I am.'"
    }
  ]
});

// Day 6
days.push({
  day: 6,
  month: 1,
  week: 1,
  title: "Tạo câu đơn hoàn chỉnh: Giới thiệu người & nơi làm việc",
  topic_en: "Simple sentences: Introducing people and workplaces",
  level: "A0",
  estimated_minutes: 45,
  is_review_day: false,
  objectives: [
    "Ghép nối các kiến thức đã học thành đoạn giới thiệu 4-5 câu mạch lạc.",
    "Sử dụng giới từ 'from' (đến từ đâu) và 'at' (làm việc tại đâu).",
    "Nắm cấu trúc câu đơn cơ bản: Chủ ngữ + Động từ Be + Bổ ngữ (S + be + Complement).",
    "Thực hành viết và nói đoạn tự giới thiệu bản thân hoàn chỉnh."
  ],
  new_vocab: [
    { en: "from", vi: "đến từ", ipa: "/frɒm/", example: "I am from Vietnam.", collocation: "come from / be from" },
    { en: "at", vi: "ở tại (nơi làm việc, địa điểm cụ thể)", ipa: "/æt/", example: "I work at the plant.", collocation: "at work / at the plant" },
    { en: "factory", vi: "nhà máy / xí nghiệp", ipa: "/ˈfæk.tər.i/", example: "The factory is modern.", collocation: "in the factory" },
    { en: "workshop", vi: "phân xưởng / xưởng cơ khí", ipa: "/ˈwɜːk.ʃɒp/", example: "He is in the workshop.", collocation: "mechanical workshop" },
    { en: "happy", vi: "vui vẻ / hài lòng", ipa: "/ˈhæp.i/", example: "We are happy to help.", collocation: "feel happy" }
  ],
  review_vocab: ["hello", "name", "technician", "engineer", "colleague"],
  grammar_vi: `### 1. Cấu trúc câu đơn với động từ Be (S + be + C)
Câu đơn cơ bản nhất trong tiếng Anh gồm:
$$\\text{Chủ ngữ (Subject)} + \\text{Động từ Be (am/is/are)} + \\text{Bổ ngữ (Danh từ / Tính từ / Cụm giới từ)}$$

*Ví dụ*:
- **Với Danh từ nghề nghiệp**: *I am a technician.* (Tôi là một kỹ thuật viên.)
- **Với Tính từ trạng thái**: *We are ready.* (Chúng tôi đã sẵn sàng.)
- **Với Cụm giới từ nơi chốn**: *He is at the workshop.* (Anh ấy đang ở phân xưởng.)

### 2. Giới thiệu quê quán và nơi công tác:
- Đến từ đâu: \`I am from + [Địa điểm]\`
  - *I am from Da Nang.* (Tôi đến từ Đà Nẵng.)
- Làm việc ở đâu: \`I am at + [Nơi làm việc]\`
  - *I am at the factory.* (Tôi đang ở nhà máy.)`,
  listening: {
    audio_text: "Hello everyone. My name is Alex. I am twenty-eight years old. I am from Hai Phong. I am a mechanical technician at this factory. My colleague is David. He is an electrical engineer. We are happy to work together. Thank you.",
    slow_rate: 0.75,
    dialogue: [
      { speaker: "Alex", text: "Hello everyone. My name is Alex." },
      { speaker: "Alex", text: "I am twenty-eight years old. I am from Hai Phong." },
      { speaker: "Alex", text: "I am a mechanical technician at this factory." },
      { speaker: "Alex", text: "My colleague is David. He is an electrical engineer." },
      { speaker: "Alex", text: "We are happy to work together. Thank you." }
    ],
    questions: [
      {
        question: "Where is Alex from?",
        options: ["Hanoi", "Hai Phong", "Da Nang"],
        answer: 1,
        explanation: "Alex nói: 'I am from Hai Phong.'"
      },
      {
        question: "What is David's profession?",
        options: ["Electrical engineer", "Mechanical technician", "Security guard"],
        answer: 0,
        explanation: "Alex giới thiệu: 'He is an electrical engineer.'"
      }
    ]
  },
  speaking: {
    prompt: "Nói 4 câu giới thiệu bản thân: Tên, quê quán, nghề nghiệp, trạng thái.",
    target_sentence: "Hello, my name is Alex. I am from Vietnam. I am a technician. I am ready to work.",
    substitution_drill: [
      { cue: "Nam / Hanoi / engineer", sentence: "My name is Nam. I am from Hanoi. I am an engineer." },
      { cue: "Lan / Da Nang / supervisor", sentence: "My name is Lan. I am from Da Nang. I am a supervisor." }
    ],
    sample_answer: "Hello, I am Minh. I am from Vietnam. I am a technician at the plant. I am glad to meet you.",
    self_check: [
      "Tôi đã nói đủ 4 câu chưa?",
      "Tôi đã nối các câu tự nhiên, phát âm rõ ràng chưa?"
    ]
  },
  reading: {
    text: "Welcome to our plant. My name is Lan. I am a safety officer here. This is our main workshop. It is clean and safe. Five technicians are on duty today. They are from different provinces in Vietnam. We are proud of our team.",
    translation: "Chào mừng đến với nhà máy của chúng tôi. Tên tôi là Lan. Tôi là cán bộ an toàn ở đây. Đây là phân xưởng chính của chúng tôi. Nó sạch sẽ và an toàn. Năm kỹ thuật viên đang trực hôm nay. Họ đến từ các tỉnh khác nhau ở Việt Nam. Chúng tôi tự hào về đội ngũ của mình.",
    questions: [
      {
        question: "What is Lan's job at the plant?",
        options: ["Safety officer", "Forklift driver", "Nurse"],
        answer: 0,
        explanation: "Lan giới thiệu: 'I am a safety officer here.'"
      },
      {
        question: "How is the main workshop described?",
        options: ["Dirty and noisy", "Clean and safe", "Dark and closed"],
        answer: 1,
        explanation: "Bài đọc mô tả: 'It is clean and safe.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["from", "am", "Vietnam.", "I"], solution: "I am from Vietnam.", hint: "Chủ ngữ I + am from..." },
      { words: ["at", "He", "factory.", "is", "the"], solution: "He is at the factory.", hint: "He is at..." }
    ],
    fill_blank: [
      { sentence_with_blank: "I am _______ Hai Phong city.", answer: "from", hint: "Giới từ chỉ xuất xứ." },
      { sentence_with_blank: "We are technicians _______ this plant.", answer: "at", hint: "Giới từ chỉ địa điểm làm việc." }
    ],
    translation: [
      { vietnamese: "Tôi là kỹ thuật viên tại nhà máy này.", model_answer: "I am a technician at this factory.", explanation: "I am a technician at this factory (hoặc plant)." },
      { vietnamese: "Chúng tôi rất vui được làm việc cùng nhau.", model_answer: "We are happy to work together.", explanation: "We are happy to work together." }
    ]
  },
  quiz: [
    {
      question: "Để nói 'Tôi đến từ Việt Nam', câu nào đúng?",
      options: ["I am come Vietnam.", "I am from Vietnam.", "I from is Vietnam."],
      answer: 1,
      explanation: "Cấu trúc đúng là 'I am from Vietnam' hoặc 'I come from Vietnam'."
    },
    {
      question: "Chọn giới từ đúng: 'David is an engineer _______ the workshop.'",
      options: ["at", "from", "to"],
      answer: 0,
      explanation: "Dùng 'at' để chỉ vị trí làm việc tại phân xưởng: 'at the workshop'."
    },
    {
      question: "Trong câu 'The workshop is clean and safe', từ 'clean' đóng vai trò là từ loại gì?",
      options: ["Động từ", "Tính từ", "Danh từ"],
      answer: 1,
      explanation: "'clean' (sạch sẽ) là một tính từ (adjective) bổ nghĩa cho chủ ngữ 'The workshop'."
    }
  ]
});

// Day 7
days.push({
  day: 7,
  month: 1,
  week: 1,
  title: "Tổng ôn Tuần 1 & Đánh giá tiến độ phản xạ",
  topic_en: "Week 1 Review and Reflex Assessment",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: true,
  review_target: "Toàn bộ kiến thức Tuần 1: Chào hỏi, Bảng chữ cái, Đại từ nhân xưng, Động từ Be (Khẳng định, Phủ định, Câu hỏi) và Giới thiệu bản thân.",
  objectives: [
    "Ôn tập lại 25 từ vựng then chốt đã học từ Ngày 1 đến Ngày 6.",
    "Khắc phục dứt điểm lỗi quên âm cuối (/s/, /z/, /m/, /t/).",
    "Hoàn thành bài kiểm tra tổng hợp tuần 1 đạt từ 80% trở lên.",
    "Tự tin nói một đoạn giới thiệu bản thân 1 phút không nhìn giấy."
  ],
  new_vocab: [
    { en: "review", vi: "ôn tập / xem xét lại", ipa: "/rɪˈvjuː/", example: "Review your notes today.", collocation: "weekly review" },
    { en: "test", vi: "bài kiểm tra", ipa: "/test/", example: "Pass the safety test.", collocation: "pass the test" },
    { en: "practice", vi: "luyện tập thực hành", ipa: "/ˈpræk.tɪs/", example: "Practice makes perfect.", collocation: "practice speaking" }
  ],
  review_vocab: ["hello", "good morning", "good afternoon", "thank you", "please", "excuse me", "sorry", "name", "spell", "he", "she", "it", "we", "they", "technician", "engineer", "ready", "safe", "from", "at"],
  grammar_vi: `### 1. Tóm tắt ngữ pháp trọng tâm Tuần 1
1. **Lời chào theo thời gian**:
   - Sáng: *Good morning*
   - Chiều: *Good afternoon*
   - Tối: *Good evening*
   - Tạm biệt: *Goodbye / See you tomorrow*
2. **Đại từ & Động từ Be**:
   - Khẳng định: \`S + am/is/are + C\` (*I am Alex. He is an engineer.*)
   - Phủ định: \`S + am/is/are + not + C\` (*It is not broken.*)
   - Câu hỏi Yes/No: \`Am/Is/Are + S + C?\` (*Are you ready? - Yes, I am.*)
3. **Phép lịch sự**:
   - Nhờ vả: *Please...*
   - Cảm ơn: *Thank you* -> Đáp lại: *You are welcome*
   - Bắt chuyện: *Excuse me...*
   - Nhận lỗi: *I am sorry...*`,
  listening: {
    audio_text: "Supervisor: Good morning, team. Welcome to Week 1 review. Is everyone here? Technician: Yes, we are all here. Supervisor: Alex, are you ready for the safety induction? Alex: Yes, I am ready, sir. My badge code is P-101. Supervisor: Excellent. Let us start.",
    slow_rate: 0.78,
    dialogue: [
      { speaker: "Supervisor", text: "Good morning, team. Welcome to Week 1 review. Is everyone here?" },
      { speaker: "Technician", text: "Yes, we are all here." },
      { speaker: "Supervisor", text: "Alex, are you ready for the safety induction?" },
      { speaker: "Alex", text: "Yes, I am ready, sir. My badge code is P-101." },
      { speaker: "Supervisor", text: "Excellent. Let us start." }
    ],
    questions: [
      {
        question: "Are all team members present?",
        options: ["No, two are missing", "Yes, they are all here", "Only the supervisor is there"],
        answer: 1,
        explanation: "Kỹ thuật viên trả lời: 'Yes, we are all here.'"
      },
      {
        question: "What is Alex's badge code?",
        options: ["P-101", "P-102", "V-201"],
        answer: 0,
        explanation: "Alex nói: 'My badge code is P-101.'"
      }
    ]
  },
  speaking: {
    prompt: "Nói một đoạn 1 phút giới thiệu bản thân, nghề nghiệp, nơi làm việc và xác nhận bạn đã sẵn sàng.",
    target_sentence: "Good morning. My name is Alex. I am a mechanical technician at this factory. I am ready to work safely.",
    substitution_drill: [
      { cue: "Full intro", sentence: "Hello. I am Alex from Vietnam. I am a technician. We are ready." }
    ],
    sample_answer: "Good morning, everyone. My name is Alex. I am twenty-eight years old. I am a technician at this plant. I am from Vietnam. Thank you for listening.",
    self_check: [
      "Tôi đã phát âm chuẩn các âm đuôi /s/, /z/, /m/ chưa?",
      "Tôi đã nói tự tin mà không cần nhìn tài liệu chưa?"
    ]
  },
  reading: {
    text: "Reviewing what you learn is the secret to mastering English. Week 1 is complete. Now you know how to greet people politely, spell your name and equipment codes, and form simple sentences with the verb be. Every small step builds confidence. Practice speaking aloud every day.",
    translation: "Ôn lại những gì đã học là bí quyết để làm chủ tiếng Anh. Tuần 1 đã hoàn thành. Giờ đây bạn đã biết cách chào hỏi lịch sự, đánh vần tên và mã thiết bị, cũng như tạo các câu đơn giản với động từ be. Mỗi bước đi nhỏ đều xây dựng sự tự tin. Hãy luyện nói thành tiếng mỗi ngày.",
    questions: [
      {
        question: "What is described as the secret to mastering English?",
        options: ["Buying expensive books", "Reviewing what you learn", "Speaking very fast"],
        answer: 1,
        explanation: "Câu mở đầu: 'Reviewing what you learn is the secret to mastering English.'"
      },
      {
        question: "What should you do every day according to the text?",
        options: ["Practice speaking aloud", "Stay silent", "Sleep all day"],
        answer: 0,
        explanation: "Câu cuối khuyên: 'Practice speaking aloud every day.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["welcome", "our", "to", "plant.", "You", "are"], solution: "You are welcome to our plant.", hint: "Chào mừng." },
      { words: ["ready", "We", "today.", "are"], solution: "We are ready today.", hint: "Chúng tôi đã sẵn sàng." }
    ],
    fill_blank: [
      { sentence_with_blank: "Alex _______ an experienced technician.", answer: "is", hint: "To be số ít." },
      { sentence_with_blank: "_______ are colleagues at the plant.", answer: "We", hint: "Đại từ chỉ chúng tôi." }
    ],
    translation: [
      { vietnamese: "Chào buổi sáng, tôi đã sẵn sàng làm việc.", model_answer: "Good morning, I am ready to work.", explanation: "Good morning, I am ready to work." },
      { vietnamese: "Họ không phải là công nhân mới.", model_answer: "They are not new workers.", explanation: "They are not (aren't) new workers." }
    ]
  },
  quiz: [
    {
      question: "Câu nào dưới đây hoàn toàn chính xác về ngữ pháp và chính tả?",
      options: ["She are a good engineer.", "She is an good engineer.", "She is a good engineer."],
      answer: 2,
      explanation: "Chủ ngữ She đi với is, trước 'good' (phụ âm /ɡ/) dùng mạo từ 'a': 'She is a good engineer.'"
    },
    {
      question: "Khi cần xin phép đi qua một lối đi đang bị người khác đứng chắn, bạn nên nói gì?",
      options: ["I am sorry!", "Excuse me, please.", "Thank you!"],
      answer: 1,
      explanation: "Dùng 'Excuse me, please' để xin phép đi qua một cách lịch sự."
    },
    {
      question: "Đại từ nào đi với động từ to be 'are'?",
      options: ["He", "She", "They"],
      answer: 2,
      explanation: "Chỉ có 'They' (cùng với We, You) đi với 'are'."
    },
    {
      question: "Mã thiết bị 'P-204' được đánh vần bằng tiếng Anh là gì?",
      options: ["P - two - zero - four", "B - two - o - four", "P - twenty - four"],
      answer: 0,
      explanation: "Chữ cái P đọc là /piː/, theo sau là từng chữ số 'two - zero - four'."
    }
  ]
});

console.log("Week 1 generated:", days.length, "days.");
module.exports = days;
