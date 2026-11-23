// Month 1 detailed daily curriculum: Week 4 Part 1 (Days 22 to 24)
// Day 22: Ending sounds & minimal pairs
// Day 23: Adjectives for equipment status & condition
// Day 24: Basic action verbs & S + V + O simple sentences
const days = [];

// Day 22
days.push({
  day: 22,
  month: 1,
  week: 4,
  title: "Âm cuối quan trọng & Cặp âm dễ nhầm",
  topic_en: "Critical ending sounds and confusing minimal pairs",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: false,
  objectives: [
    "Nhận biết và bật rõ 4 âm cuối cốt lõi hay bị người Việt bỏ quên: /s/, /z/, /t/, /d/.",
    "Phân biệt cặp âm vô thanh vs hữu thanh: /p/ vs /b/, /f/ vs /v/, /t/ vs /d/.",
    "Luyện phát âm cặp âm th: /θ/ (voiceless - thanks, three) vs /ð/ (voiced - this, that, the).",
    "Áp dụng vào các từ vựng công việc & kỹ thuật cơ bản: test, check, valve, pipe, belt."
  ],
  new_vocab: [
    { en: "test", vi: "bài kiểm tra / kiểm tra thử", ipa: "/test/", example: "We test the pump before start-up.", collocation: "test the pump" },
    { en: "check", vi: "kiểm tra", ipa: "/tʃek/", example: "Please check the oil level.", collocation: "check the level" },
    { en: "pipe", vi: "đường ống", ipa: "/paɪp/", example: "The water pipe is clean.", collocation: "pipe connection" },
    { en: "valve", vi: "van", ipa: "/vælv/", example: "Turn the safety valve slowly.", collocation: "safety valve" },
    { en: "bolt", vi: "bu-lông", ipa: "/bəʊlt/", example: "Tighten this steel bolt.", collocation: "tighten the bolt" },
    { en: "nut", vi: "đai ốc, tán", ipa: "/nʌt/", example: "The nut is loose.", collocation: "loose nut" },
    { en: "switch", vi: "công tắc / bật tắt", ipa: "/swɪtʃ/", example: "Turn off the main switch.", collocation: "main switch" },
    { en: "plug", vi: "phích cắm / cắm điện", ipa: "/plʌɡ/", example: "Pull the power plug out.", collocation: "power plug" }
  ],
  review_vocab: ["this", "that", "these", "those", "safe", "desk", "book", "first"],
  grammar_vi: `### 1. Tại sao âm cuối (Ending Sounds) quyết định người bản ngữ có hiểu bạn không?
Trong tiếng Việt, các từ đều kết thúc khép miệng hoặc mở nguyên âm, ta không có thói quen bật gió âm cuối.
Trong tiếng Anh, **bỏ âm cuối làm mất nghĩa hoặc biến thành từ khác**:
- *pipe* (/paɪp/) nếu bỏ /p/ sẽ nghe như *pie* (bánh nướng).
- *safe* (/seɪf/) nếu bỏ /f/ sẽ nghe như *say* (nói).
- *test* (/test/) nếu bỏ /st/ sẽ nghe như *tea* (trà) hoặc *te*.

### 2. Ba cặp âm vô thanh (Voiceless) và hữu thanh (Voiced) quan trọng
| Vô thanh (Dây thanh quản KHÔNG rung) | Hữu thanh (Dây thanh quản RUNG) |
| :--- | :--- |
| **/p/**: *pipe, cap, pump, stop* | **/b/**: *belt, bolt, cab, bulb* |
| **/t/**: *test, start, light, nut* | **/d/**: *hold, card, load, lead* |
| **/f/**: *safe, off, leaf, brief* | **/v/**: *valve, leave, live, glove* |
| **/s/**: *gas, pass, bus, press* | **/z/**: *noise, fuse, phase, please* |

### 3. Âm "TH": /θ/ (thổi gió) và /ð/ (rung)
- **/θ/** (không rung): Đặt đầu lưỡi giữa hai hàm răng, thổi luồng hơi nhẹ: *thanks, three, thin, think, thermal*.
- **/ð/** (rung): Đặt lưỡi tương tự, nhưng rung dây thanh quản: *this, that, these, those, the, there, with*.`,
  listening: {
    audio_prompt: "Listen to the senior technician correcting a rookie's pronunciation on the shop floor.",
    transcript: "Alex: Good morning Mr. John. I need to check the safe valve.\nJohn: Listen closely Alex: it is 'safety valve' with a clear /v/ at the end of valve. Say /vælv/.\nAlex: Valve! Safety valve.\nJohn: Exactly! And remember the /t/ sound at the end of 'test' and 'bolt'. We never say 'tes' or 'bo'. Clear ending sounds prevent costly misunderstandings.\nAlex: Understood. I will check the bolt and test the valve now.",
    questions: [
      {
        question: "What ending sound did John emphasize for the word 'valve'?",
        options: ["The /s/ sound", "The /v/ sound", "The /p/ sound"],
        answer: 1,
        explanation: "John nói: 'with a clear /v/ at the end of valve. Say /vælv/'."
      },
      {
        question: "Why are clear ending sounds important in an industrial workplace?",
        options: ["To sound like a native singer", "To prevent costly misunderstandings", "To speak faster than normal"],
        answer: 1,
        explanation: "John nhấn mạnh: 'Clear ending sounds prevent costly misunderstandings.'"
      }
    ]
  },
  speaking: {
    prompt: "Luyện bật rõ âm cuối các cặp từ: safe - save, test - text, bolt - belt, cap - cab.",
    target_sentence: "Please check the safety valve and tighten the loose bolt.",
    substitution_drill: [
      { cue: "pipe / clean", sentence: "The pipe is clean. Remember the /p/ sound in pipe." },
      { cue: "test / pump", sentence: "We test the pump today. Emphasize /st/ and /mp/." },
      { cue: "switch / off", sentence: "Turn off the main switch. Clearly sound the /tʃ/." }
    ],
    sample_answer: "I check the pipe /paɪp/, test the valve /vælv/, and inspect the switch /swɪtʃ/.",
    self_check: [
      "Tôi đã bật rõ âm /t/ ở cuối từ 'test' và 'bolt' chưa?",
      "Tôi đã khép răng rung môi cho âm /v/ ở 'valve' chưa?"
    ]
  },
  reading: {
    text: "Clear communication saves lives in technical environments. Many English words sound similar if ending sounds are dropped. For example, 'lock' /lɒk/ and 'log' /lɒɡ/ have very different meanings. A 'cap' is a cover, while a 'cab' is a vehicle cabin. A technician who says 'tes the val' instead of 'test the valve' risks confusion. Always pronounce the final consonants /t/, /d/, /p/, /k/, /s/, and /v/ firmly and distinctly.",
    translation: "Giao tiếp rõ ràng cứu mạng sống trong môi trường kỹ thuật. Nhiều từ tiếng Anh nghe gần giống nhau nếu âm cuối bị bỏ quên. Ví dụ, 'lock' (khóa) và 'log' (ghi nhật ký) có nghĩa rất khác nhau. 'Cap' là nắp chụp, trong khi 'cab' là buồng lái. Một kỹ thuật viên nói 'tes the val' thay vì 'test the valve' rất dễ gây hiểu lầm. Hãy luôn phát âm các phụ âm cuối /t/, /d/, /p/, /k/, /s/, và /v/ một cách dứt khoát và rõ ràng.",
    questions: [
      {
        question: "What is the difference between 'cap' and 'cab' highlighted in the text?",
        options: ["A cap is a cover; a cab is a vehicle cabin", "They have the exact same meaning", "A cap is a tool; a cab is a chemical"],
        answer: 0,
        explanation: "Bài đọc nêu rõ: 'A cap is a cover, while a cab is a vehicle cabin.'"
      },
      {
        question: "Which final consonant sounds should technicians pronounce firmly?",
        options: ["Only vowels A, E, I", "Final consonants /t/, /d/, /p/, /k/, /s/, and /v/", "Only ending /s/"],
        answer: 1,
        explanation: "Bài đọc kết luận: 'Always pronounce the final consonants /t/, /d/, /p/, /k/, /s/, and /v/ firmly and distinctly.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["valve.", "safety", "the", "Test"], solution: "Test the safety valve.", hint: "Test the..." },
      { words: ["is", "The", "tight.", "bolt", "steel"], solution: "The steel bolt is tight.", hint: "The steel bolt..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Please _______ (kiểm tra) the oil filter before starting the engine.", answer: "check", hint: "Bắt đầu bằng ch- kết thúc bằng -ck." },
      { sentence_with_blank: "Do not touch the electrical _______ (phích cắm) with wet hands.", answer: "plug", hint: "Kết thúc bằng âm /ɡ/." }
    ],
    translation: [
      { vietnamese: "Hãy kiểm tra van an toàn trước ca làm việc.", model_answer: "Check the safety valve before the shift.", explanation: "Check the safety valve before the shift." },
      { vietnamese: "Bu-lông này bị lỏng.", model_answer: "This bolt is loose.", explanation: "This bolt is loose." }
    ]
  },
  quiz: [
    {
      question: "Âm cuối của từ 'test' phát âm là gì?",
      options: ["/s/", "/t/", "/st/", "Không phát âm"],
      answer: 2,
      explanation: "Từ 'test' kết thúc bằng cụm phụ âm /st/, cần bật cả /s/ và /t/."
    },
    {
      question: "Cặp từ nào sau đây là cặp âm vô thanh vs hữu thanh (/p/ vs /b/)?",
      options: ["cap - cab", "safe - save", "test - text", "this - that"],
      answer: 0,
      explanation: "Cap tận cùng bằng /p/ (vô thanh), cab tận cùng bằng /b/ (hữu thanh)."
    },
    {
      question: "Từ 'valve' (van khí/nước) kết thúc bằng âm nào?",
      options: ["/f/", "/v/", "/b/", "/p/"],
      answer: 1,
      explanation: "Valve có phiên âm là /vælv/, kết thúc bằng âm hữu thanh /v/."
    },
    {
      question: "Từ 'three' (số 3) bắt đầu bằng âm th nào?",
      options: ["/θ/ (thổi gió, không rung)", "/ð/ (rung thanh quản)", "/t/ (âm t thông thường)", "/s/"],
      answer: 0,
      explanation: "'Three' /θriː/ bắt đầu bằng âm vô thanh /θ/."
    },
    {
      question: "Chọn câu viết đúng ngữ pháp và chính tả:",
      options: [
        "Please chek the safeti valv.",
        "Please check the safety valve.",
        "Please checks the safeties valves.",
        "Please to check the safe valve."
      ],
      answer: 1,
      explanation: "Câu đúng là 'Please check the safety valve.' (check nguyên mẫu sau please)."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Đọc to 5 lần từng cặp từ: cap-cab, safe-save, test-text, lock-log.",
      "Ghi nhớ âm cuối /v/ của 'valve' và /t/ của 'bolt'."
    ]
  }
});

// Day 23
days.push({
  day: 23,
  month: 1,
  week: 4,
  title: "Tính từ miêu tả trạng thái thiết bị & vật dụng",
  topic_en: "Adjectives for equipment status and condition",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: false,
  objectives: [
    "Nắm 12 cặp tính từ thông dụng nhất trong nhà xưởng và đời sống.",
    "Mô tả trạng thái thiết bị: safe/dangerous, clean/dirty, broken/working, hot/cold, tight/loose, wet/dry.",
    "Sử dụng cấu trúc câu miêu tả: 'The [noun] is [adjective]' và 'It is [adjective]'.",
    "Áp dụng vào báo cáo tình trạng thiết bị hàng ngày."
  ],
  new_vocab: [
    { en: "safe", vi: "an toàn", ipa: "/seɪf/", example: "The working area is safe.", collocation: "safe condition" },
    { en: "dangerous", vi: "nguy hiểm", ipa: "/ˈdeɪn.dʒər.əs/", example: "High voltage is dangerous.", collocation: "dangerous area" },
    { en: "clean", vi: "sạch sẽ", ipa: "/kliːn/", example: "Keep the workbench clean.", collocation: "clean area" },
    { en: "dirty", vi: "bẩn, dơ", ipa: "/ˈdɜː.ti/", example: "The air filter is dirty.", collocation: "dirty filter" },
    { en: "broken", vi: "bị hỏng, gãy", ipa: "/ˈbrəʊ.kən/", example: "The ladder is broken.", collocation: "broken equipment" },
    { en: "working", vi: "đang hoạt động tốt", ipa: "/ˈwɜː.kɪŋ/", example: "All motors are working.", collocation: "working condition" },
    { en: "hot", vi: "nóng", ipa: "/hɒt/", example: "The pipe surface is very hot.", collocation: "hot surface" },
    { en: "cold", vi: "lạnh", ipa: "/kəʊld/", example: "The coolant water is cold.", collocation: "cold water" },
    { en: "tight", vi: "chặt, khít", ipa: "/taɪt/", example: "Make sure the connection is tight.", collocation: "tight connection" },
    { en: "loose", vi: "lỏng, chùng", ipa: "/luːs/", example: "This belt is loose.", collocation: "loose belt" },
    { en: "wet", vi: "ướt, ẩm", ipa: "/wet/", example: "Caution: wet floor.", collocation: "wet floor" },
    { en: "dry", vi: "khô ráo", ipa: "/draɪ/", example: "Keep chemical bags in a dry place.", collocation: "dry place" }
  ],
  review_vocab: ["bolt", "valve", "pipe", "plug", "switch", "desk", "is", "are"],
  grammar_vi: `### 1. Vị trí của Tính từ (Adjective) trong câu tiếng Anh
Tính từ bổ nghĩa cho danh từ và thường đứng ở 2 vị trí chính:

#### Vị trí 1: Sau động từ to be (S + be + Adjective)
- The floor **is wet**. *(Sàn nhà thì ướt.)*
- The bolts **are loose**. *(Các bu-lông thì lỏng.)*
- Machine 1 **is broken**. *(Máy số 1 bị hỏng.)*

#### Vị trí 2: Đứng TRƯỚC danh từ (Adjective + Noun)
Khác với tiếng Việt (nói "sàn ướt"), tiếng Anh đặt tính từ trước:
- a **wet floor** *(một sàn nhà ướt)*
- a **broken ladder** *(một cái thang bị gãy)*
- a **hot surface** *(bề mặt nóng)*
- a **safe workplace** *(nơi làm việc an toàn)*

### 2. Các cặp tính từ trái nghĩa thông dụng
1. **safe** (an toàn) ↔ **dangerous** (nguy hiểm)
2. **clean** (sạch) ↔ **dirty** (bẩn)
3. **tight** (chặt) ↔ **loose** (lỏng)
4. **broken** (hỏng) ↔ **working** / **in good condition** (hoạt động tốt)
5. **hot** (nóng) ↔ **cold** (lạnh)
6. **wet** (ướt) ↔ **dry** (khô)`,
  listening: {
    audio_prompt: "Listen to the supervisor inspecting the packaging area before the shift.",
    transcript: "Supervisor: Minh, please report the condition of Line 2.\nMinh: Yes, sir. The conveyor belt is clean and working normally. However, the safety guard on Motor B is loose.\nSupervisor: Is the emergency stop button safe?\nMinh: Yes, the emergency stop is tested and safe. But the floor near the pump is wet with hydraulic oil.\nSupervisor: Mark the wet floor immediately and tighten the loose guard before turning on the power.",
    questions: [
      {
        question: "What is wrong with Motor B?",
        options: ["It is too hot", "The safety guard is loose", "The motor is completely broken"],
        answer: 1,
        explanation: "Minh báo cáo: 'the safety guard on Motor B is loose.'"
      },
      {
        question: "Why is the floor near the pump wet?",
        options: ["Because of rain", "Because of hydraulic oil", "Because of cleaning soap"],
        answer: 1,
        explanation: "Minh nêu: 'the floor near the pump is wet with hydraulic oil.'"
      }
    ]
  },
  speaking: {
    prompt: "Mô tả trạng thái của 3 thiết bị xung quanh bạn bằng cấu trúc 'The ... is ...'.",
    target_sentence: "The belt is loose and the pipe is hot.",
    substitution_drill: [
      { cue: "ladder / broken", sentence: "The ladder is broken. Do not use it." },
      { cue: "floor / wet", sentence: "The floor is wet. Be careful." },
      { cue: "filter / dirty", sentence: "The filter is dirty. Replace it." }
    ],
    sample_answer: "The workbench is clean. The valve is tight. Machine number three is working well.",
    self_check: [
      "Tôi đã phân biệt phát âm 'loose' (/luːs/ - lỏng) và 'lose' (/luːz/ - mất) chưa?",
      "Tôi đã đặt tính từ đứng trước danh từ khi mô tả đồ vật chưa (ví dụ 'wet floor')?"
    ]
  },
  reading: {
    text: "Daily 5S inspection focuses on condition. Every morning, technicians check their assigned machines. A good operator notices small abnormalities immediately: a loose screw, a dirty sensor, a hot bearing, or a wet surface. When a part is broken, it must be tagged with a red label. When an area is dangerous, access is restricted. A clean and dry workplace is the first rule of industrial safety.",
    translation: "Kiểm tra 5S hằng ngày tập trung vào tình trạng hiện trường. Mỗi sáng, các kỹ thuật viên kiểm tra máy móc được phân công. Một người vận hành giỏi sẽ nhận thấy các bất thường nhỏ ngay lập tức: ốc bị lỏng, cảm biến bị bẩn, ổ bi bị nóng, hoặc bề mặt bị ướt. Khi một bộ phận bị hỏng, nó phải được gắn thẻ màu đỏ. Khi một khu vực nguy hiểm, lối ra vào bị hạn chế. Nơi làm việc sạch sẽ và khô ráo là nguyên tắc đầu tiên của an toàn công nghiệp.",
    questions: [
      {
        question: "What must be done when a part is broken?",
        options: ["Throw it away immediately", "Tag it with a red label", "Leave it running until shift end"],
        answer: 1,
        explanation: "Trong bài: 'When a part is broken, it must be tagged with a red label.'"
      },
      {
        question: "What is the first rule of industrial safety mentioned?",
        options: ["A clean and dry workplace", "Working fast without breaks", "Using old spare parts"],
        answer: 0,
        explanation: "Bài đọc viết: 'A clean and dry workplace is the first rule of industrial safety.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["is", "dangerous.", "The", "area", "chemical"], solution: "The chemical area is dangerous.", hint: "The chemical area..." },
      { words: ["Keep", "dry.", "and", "clean", "the", "tools"], solution: "Keep the tools clean and dry.", hint: "Keep the tools..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Warning! The conveyor belt is _______ (lỏng). Do not run the motor.", answer: "loose", hint: "Trái nghĩa với tight." },
      { sentence_with_blank: "The filter is _______ (bẩn). We must replace it.", answer: "dirty", hint: "Trái nghĩa với clean." }
    ],
    translation: [
      { vietnamese: "Sàn nhà gần máy bơm bị ướt.", model_answer: "The floor near the pump is wet.", explanation: "The floor near the pump is wet." },
      { vietnamese: "Tất cả các bu-lông đều chặt và an toàn.", model_answer: "All bolts are tight and safe.", explanation: "All bolts are tight and safe." }
    ]
  },
  quiz: [
    {
      question: "Từ trái nghĩa với 'safe' (an toàn) là gì?",
      options: ["clean", "dangerous", "tight", "dry"],
      answer: 1,
      explanation: "Safe (an toàn) trái nghĩa với dangerous (nguy hiểm)."
    },
    {
      question: "Chọn câu có trật tự từ đúng trong tiếng Anh:",
      options: [
        "This is a floor wet.",
        "This is a wet floor.",
        "This is wet a floor.",
        "This wet is floor."
      ],
      answer: 1,
      explanation: "Tính từ 'wet' đứng trước danh từ 'floor': 'a wet floor'."
    },
    {
      question: "Khi bu-lông bị lỏng, ta dùng từ nào?",
      options: ["loose", "lose", "lost", "loss"],
      answer: 0,
      explanation: "Tính từ 'loose' /luːs/ có nghĩa là lỏng, chùng."
    },
    {
      question: "Dịch câu: 'Máy bơm đang hoạt động tốt.'",
      options: [
        "The pump is broken.",
        "The pump is working.",
        "The pump are work.",
        "The pump working is."
      ],
      answer: 1,
      explanation: "'The pump is working' nghĩa là máy bơm đang chạy/hoạt động tốt."
    },
    {
      question: "Hoàn thành biển cảnh báo: 'Caution: _______ surface. Do not touch!'",
      options: ["hot", "cold", "clean", "safe"],
      answer: 0,
      explanation: "'Caution: hot surface' (Cẩn thận: bề mặt nóng)."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Thuộc 6 cặp tính từ trái nghĩa công việc.",
      "Viết 3 câu miêu tả tình trạng bàn làm việc hoặc máy móc của bạn."
    ]
  }
});

// Day 24
days.push({
  day: 24,
  month: 1,
  week: 4,
  title: "Cấu trúc câu đơn S + V + O & Động từ thao tác cơ bản",
  topic_en: "Basic action verbs and S + V + O simple sentences",
  level: "A0",
  estimated_minutes: 50,
  is_review_day: false,
  objectives: [
    "Nắm cấu trúc câu đơn chuẩn trong tiếng Anh: Subject + Verb + Object (S + V + O).",
    "Học 10 động từ thao tác cốt lõi: check, start, stop, open, close, push, pull, clean, inspect, lock.",
    "Hình thành câu mệnh lệnh trực tiếp (Imperative sentences) dùng cho hướng dẫn vận hành.",
    "Thực hành viết các bước thao tác kỹ thuật đơn giản."
  ],
  new_vocab: [
    { en: "check", vi: "kiểm tra", ipa: "/tʃek/", example: "I check the pressure gauge.", collocation: "check the pressure" },
    { en: "start", vi: "khởi động, bắt đầu", ipa: "/stɑːt/", example: "The operator starts the conveyor.", collocation: "start the engine" },
    { en: "stop", vi: "dừng lại", ipa: "/stɒp/", example: "Stop the machine in emergency.", collocation: "stop the machine" },
    { en: "open", vi: "mở", ipa: "/ˈəʊ.pən/", example: "Open the drain valve slowly.", collocation: "open the valve" },
    { en: "close", vi: "đóng", ipa: "/kləʊz/", example: "Close the safety door before starting.", collocation: "close the door" },
    { en: "push", vi: "ấn, đẩy", ipa: "/pʊʃ/", example: "Push the green button to start.", collocation: "push the button" },
    { en: "pull", vi: "kéo", ipa: "/pʊl/", example: "Pull the emergency switch.", collocation: "pull the lever" },
    { en: "clean", vi: "lau chùi, làm sạch", ipa: "/kliːn/", example: "Technicians clean the filters weekly.", collocation: "clean the filter" },
    { en: "inspect", vi: "thanh tra, kiểm tra kỹ lưỡng", ipa: "/ɪnˈspekt/", example: "The safety officer inspects the site.", collocation: "inspect the site" },
    { en: "lock", vi: "khóa lại", ipa: "/lɒk/", example: "Lock the electrical breaker before maintenance.", collocation: "lock the breaker" }
  ],
  review_vocab: ["safe", "dangerous", "valve", "switch", "plug", "bolt", "pipe"],
  grammar_vi: `### 1. Cấu trúc câu đơn S + V + O (Subject + Verb + Object)
Mọi câu trần thuật chuẩn tiếng Anh đều cần Chủ ngữ (S), Động từ (V) và Tân ngữ (O):
- **I** (S) + **check** (V) + **the pump** (O). *(Tôi kiểm tra máy bơm.)*
- **The operator** (S) + **starts** (V) + **the engine** (O). *(Người vận hành khởi động động cơ.)*
- **We** (S) + **clean** (V) + **the tools** (O). *(Chúng tôi lau chùi dụng cụ.)*

### 2. Quy tắc chia động từ ở thì Hiện tại đơn với ngôi thứ 3 số ít (He, She, It, Danh từ số ít)
- Khi chủ ngữ là *I, You, We, They, Danh từ số nhiều*: Giữ nguyên động từ (*I check, They start, Operators clean*).
- Khi chủ ngữ là *He, She, It, Danh từ số ít*: Thêm **-s** hoặc **-es** vào sau động từ:
  - *He checks the oil level.*
  - *The technician starts the generator.*
  - *She inspects the safety gear.*

### 3. Câu mệnh lệnh (Imperative sentences)
Dùng để ra lệnh hoặc hướng dẫn quy trình, bắt đầu trực tiếp bằng **Động từ nguyên mẫu**, không có chủ ngữ:
- **Push the green button.** *(Hãy ấn nút màu xanh.)*
- **Close the valve.** *(Hãy đóng van lại.)*
- **Do not touch the hot pipe!** *(Không chạm vào đường ống nóng!)*`,
  listening: {
    audio_prompt: "Listen to the team leader explaining step-by-step operating instructions.",
    transcript: "Team Leader: Attention everyone. Follow these three steps to operate Pump 4.\nStep 1: Inspect the suction valve and confirm it is open.\nStep 2: Check the oil level on the sight glass.\nStep 3: Push the green start button and listen for unusual vibration.\nWorker: What should I do if the oil level is low?\nTeam Leader: If the oil level is low, do not start the pump. Report to maintenance immediately.",
    questions: [
      {
        question: "What is Step 1 in the operating instructions?",
        options: ["Push the red button", "Inspect the suction valve and confirm it is open", "Clean the electrical cabinet"],
        answer: 1,
        explanation: "Trưởng nhóm nói: 'Step 1: Inspect the suction valve and confirm it is open.'"
      },
      {
        question: "What should the worker do if the oil level is low?",
        options: ["Add any water into the tank", "Do not start the pump and report to maintenance", "Ignore it and run the motor"],
        answer: 1,
        explanation: "Trưởng nhóm dặn: 'If the oil level is low, do not start the pump. Report to maintenance immediately.'"
      }
    ]
  },
  speaking: {
    prompt: "Đọc to 3 câu mệnh lệnh thao tác máy móc bằng tiếng Anh.",
    target_sentence: "Open the valve, check the pressure, and start the pump.",
    substitution_drill: [
      { cue: "push / green button", sentence: "Push the green button to start." },
      { cue: "pull / emergency switch", sentence: "Pull the emergency switch to stop." },
      { cue: "lock / breaker", sentence: "Lock the circuit breaker before service." }
    ],
    sample_answer: "First, I inspect the pipeline. Next, I open the valve. Finally, I push the green button.",
    self_check: [
      "Tôi đã bật rõ phụ âm cuối /k/ trong 'check', /p/ trong 'stop', /ʃ/ trong 'push' chưa?",
      "Tôi đã nhớ thêm -s khi nói 'He checks' hoặc 'The operator starts' chưa?"
    ]
  },
  reading: {
    text: "Standard Operating Procedures (SOPs) protect workers and machinery. An SOP uses simple active verbs: inspect, verify, open, close, push, and monitor. For example, before cleaning a mixer, the technician locks the main power switch. Then, the technician verifies zero energy. Next, the team opens the access hatch and cleans the blades with warm water. Finally, the supervisor inspects the area and signs the work permit.",
    translation: "Quy trình vận hành tiêu chuẩn (SOP) bảo vệ người lao động và máy móc. Một SOP sử dụng các động từ hành động đơn giản: kiểm tra, xác nhận, mở, đóng, nhấn và giám sát. Ví dụ, trước khi vệ sinh máy trộn, kỹ thuật viên khóa công tắc nguồn chính. Sau đó, kỹ thuật viên xác nhận năng lượng về 0. Tiếp theo, đội mở nắp cửa kiểm tra và vệ sinh các cánh khuấy bằng nước ấm. Cuối cùng, giám sát viên kiểm tra khu vực và ký giấy phép công việc.",
    questions: [
      {
        question: "What does the technician do before cleaning a mixer?",
        options: ["Turns on the heat", "Locks the main power switch", "Paints the machine"],
        answer: 1,
        explanation: "Bài đọc nêu rõ: 'before cleaning a mixer, the technician locks the main power switch.'"
      },
      {
        question: "Who signs the work permit after inspection?",
        options: ["The visitor", "The cleaner", "The supervisor"],
        answer: 2,
        explanation: "Trong bài: 'Finally, the supervisor inspects the area and signs the work permit.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["button.", "green", "the", "Push"], solution: "Push the green button.", hint: "Câu mệnh lệnh bắt đầu bằng động từ..." },
      { words: ["checks", "technician", "pressure.", "The", "the"], solution: "The technician checks the pressure.", hint: "The technician checks..." }
    ],
    fill_blank: [
      { sentence_with_blank: "He _______ (kiểm tra) the oil level every morning.", answer: "checks", hint: "Chủ ngữ là He, thêm -s vào động từ check." },
      { sentence_with_blank: "Please _______ (dừng) the conveyor belt now.", answer: "stop", hint: "Động từ nguyên mẫu." }
    ],
    translation: [
      { vietnamese: "Tôi đóng van và kiểm tra áp suất.", model_answer: "I close the valve and check the pressure.", explanation: "I close the valve and check the pressure." },
      { vietnamese: "Kỹ thuật viên khởi động máy bơm.", model_answer: "The technician starts the pump.", explanation: "The technician starts the pump (thêm -s vì chủ ngữ số ít)." }
    ]
  },
  quiz: [
    {
      question: "Trong câu 'The worker checks the machine', thành phần 'the machine' đóng vai trò gì?",
      options: ["Chủ ngữ (Subject)", "Động từ (Verb)", "Tân ngữ (Object)", "Trạng từ (Adverb)"],
      answer: 2,
      explanation: "'The machine' nhận tác động của hành động 'checks' nên là Tân ngữ (Object)."
    },
    {
      question: "Chọn dạng đúng của động từ: 'The engineer _______ (inspect) the electrical cabinet.'",
      options: ["inspect", "inspects", "inspecting", "inspected to"],
      answer: 1,
      explanation: "Chủ ngữ 'The engineer' là danh từ số ít ngôi thứ 3, động từ thêm -s: 'inspects'."
    },
    {
      question: "Câu mệnh lệnh nào dưới đây dùng đúng cấu trúc?",
      options: [
        "You to push the button.",
        "Push the button.",
        "Pushes the button.",
        "Pushing the button."
      ],
      answer: 1,
      explanation: "Câu mệnh lệnh bắt đầu trực tiếp bằng động từ nguyên mẫu: 'Push the button.'"
    },
    {
      question: "Nghĩa của câu 'Lock the main switch before maintenance' là gì?",
      options: [
        "Mở công tắc chính khi đang bảo trì.",
        "Khóa công tắc chính trước khi bảo trì.",
        "Thay thế công tắc chính sau bảo trì.",
        "Lau chùi công tắc chính bằng nước."
      ],
      answer: 1,
      explanation: "Lock (khóa) + main switch (công tắc chính) + before maintenance (trước khi bảo dưỡng)."
    },
    {
      question: "Từ nào trái nghĩa với 'open' (mở)?",
      options: ["clean", "start", "close", "inspect"],
      answer: 2,
      explanation: "Open (mở) trái nghĩa với close (đóng)."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Nhớ quy tắc thêm -s khi chủ ngữ là He/She/It/Danh từ số ít.",
      "Thực hành viết 3 câu mệnh lệnh thao tác tại nơi làm việc."
    ]
  }
});

module.exports = days;
