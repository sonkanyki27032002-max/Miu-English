// Deep-dive interactive milestone lessons for Technical & SHE English
// Day 125 (Month 5 - Week 18): PPE Inspection & Hazard Identification
// Day 135 (Month 5 - Week 20): Lockout/Tagout (LOTO) 6-Step SOP
// Day 155 (Month 6 - Week 22): Abnormal Vibration & Bearing Inspection
// Day 190 (Month 7 - Week 27): Past Tense Work Log & Shift Handover
// Day 220 (Month 8 - Week 31): Reading Equipment Manuals, Tolerances & Specs
// Day 250 (Month 9 - Week 36): Problem Solving & Safety Committee Meeting
// Day 280 (Month 10 - Week 40): Emergency Radio Communication & Immediate Response
// Day 315 (Month 11 - Week 45): Writing Technical Incident Reports & Workplace Emails

const milestones = {};

// Milestone 1: Day 125
milestones[125] = {
  day: 125,
  month: 5,
  week: 18,
  title: "Cột mốc SHE 1: Kiểm tra PPE & Nhận diện Mối nguy (PPE Inspection & Hazard ID)",
  topic_en: "PPE Inspection, Hazard Identification and Near Miss Reporting",
  level: "A1",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Gọi tên chính xác 8 loại trang bị bảo hộ cá nhân (PPE): helmet, goggles, earplugs, safety boots, gloves, high-vis vest, respirator, harness.",
    "Nhận diện 4 nhóm mối nguy cơ bản tại hiện trường: slip/trip hazard, electrical hazard, chemical hazard, falling object.",
    "Báo cáo một sự cố suýt nguy (Near Miss) bằng mẫu câu chuẩn.",
    "Hiểu quyền và nghĩa vụ 'Stop Work Authority' (Quyền dừng công việc không an toàn)."
  ],
  new_vocab: [
    { en: "personal protective equipment", vi: "trang thiết bị bảo hộ cá nhân (PPE)", ipa: "/ˈpɜː.sən.əl prəˈtek.tɪv ɪˈkwɪp.mənt/", example: "PPE is mandatory in this production plant.", collocation: "wear PPE" },
    { en: "safety helmet", vi: "mũ bảo hộ", ipa: "/ˈseɪf.ti ˈhel.mɪt/", example: "Fasten your safety helmet chinstrap.", collocation: "hard hat / helmet" },
    { en: "safety goggles", vi: "kính bảo hộ chống văng bắn", ipa: "/ˈseɪf.ti ˈɡɒɡ.əlz/", example: "Wear safety goggles when grinding metal.", collocation: "wear goggles" },
    { en: "earplugs", vi: "nút bịt tai chống ồn", ipa: "/ˈɪə.plʌɡz/", example: "Insert earplugs properly in high noise zones.", collocation: "insert earplugs" },
    { en: "safety boots", vi: "giày bảo hộ mũi thép", ipa: "/ˈseɪf.ti buːts/", example: "Steel-toe safety boots protect your feet.", collocation: "steel-toe boots" },
    { en: "hazard", vi: "mối nguy hiểm tiềm ẩn", ipa: "/ˈhæz.əd/", example: "This exposed wire is an electrical hazard.", collocation: "identify a hazard" },
    { en: "near miss", vi: "sự cố suýt nguy / suýt xảy ra tai nạn", ipa: "/nɪə mɪs/", example: "Report the near miss to prevent future injury.", collocation: "report a near miss" },
    { en: "stop work", vi: "dừng công việc (khi không an toàn)", ipa: "/stɒp wɜːk/", example: "Every worker has the right to stop work.", collocation: "stop work authority" }
  ],
  review_vocab: ["safe", "dangerous", "wet", "broken", "loose", "clean", "because", "so", "check", "inspect"],
  grammar_vi: `### 1. Cấu trúc Báo cáo Mối nguy & Nhận diện rủi ro (Hazard Identification)
- **There is a [loại mối nguy] + [ở vị trí nào]**:
  - *There is a slip hazard near Tank 3 because oil is leaking.*
  - *There is a falling object hazard under the scaffolding.*
- **Modal Verb 'MUST' và 'SHOULD' trong An toàn Lao động**:
  - **MUST (Bắt buộc theo luật/quy định)**: *All personnel must wear safety helmets and steel-toe boots.*
  - **MUST NOT (Tuyệt đối cấm)**: *You must not enter the confined space without gas testing.*
  - **SHOULD (Khuyến cáo an toàn)**: *You should inspect your harness before climbing.*

### 2. Mẫu câu Stop Work Authority (Quyền dừng công việc)
Khi phát hiện tình huống nguy hiểm đến tính mạng hoặc vi phạm an toàn nghiêm trọng:
- *"Stop work! This condition is unsafe."*
- *"We need to eliminate the hazard before continuing."*`,
  listening: {
    audio_prompt: "Listen to a safety officer conducting a toolbox talk before shift startup.",
    transcript: `Safety Officer: Good morning team. Today we start scaffolding maintenance on Level 3.
Worker: Are full-body harnesses required for this task?
Safety Officer: Yes, absolutely. Working at heights above 1.8 meters requires a certified full-body harness, 100% tie-off, and safety helmets with chinstraps.
Worker: What about the wet floor near the elevator?
Safety Officer: Good catch! That is a slip hazard. Mark it with caution cones immediately. Remember our golden rule: If you see any unsafe condition, exercise your Stop Work Authority. Nobody will blame you for keeping everyone safe.`,
    questions: [
      {
        question: "When is a full-body harness required according to the safety officer?",
        options: ["Only during rain", "When working at heights above 1.8 meters", "Only for managers"],
        answer: 1,
        explanation: "Safety Officer nói: 'Working at heights above 1.8 meters requires a certified full-body harness.'"
      },
      {
        question: "What is the team's golden safety rule?",
        options: [
          "Finish the shift as fast as possible",
          "Exercise your Stop Work Authority if you see an unsafe condition",
          "Never talk about hazards"
        ],
        answer: 1,
        explanation: "Safety officer khẳng định: 'If you see any unsafe condition, exercise your Stop Work Authority.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành báo cáo nhanh một mối nguy trơn trượt và yêu cầu đồng nghiệp mang PPE phù hợp.",
    target_sentence: "Stop work! There is an oil leak on the walkway. Please put on your safety goggles and report this hazard.",
    substitution_drill: [
      { cue: "electrical cable / trip hazard", sentence: "Watch out! That loose electrical cable is a serious trip hazard." },
      { cue: "chemical splash / wear face shield", sentence: "Wear a face shield because chemical splash is dangerous." },
      { cue: "high noise / insert earplugs", sentence: "This generator room has high noise. You must insert earplugs." }
    ],
    sample_answer: "Attention team. There is a slip hazard on Line 2 because hydraulic oil is leaking. We must stop work, put up caution tape, and clean the spill before resuming.",
    self_check: [
      "Tôi đã phát âm chuẩn từ 'hazard' (/ˈhæz.əd/ - trọng âm 1) chưa?",
      "Tôi đã dùng cấu trúc 'must wear' cho PPE bắt buộc chưa?"
    ]
  },
  reading: {
    text: `SAFETY BULLETIN: NEAR MISS INCIDENT REPORT
Date: Shift 1, Station: Conveyor Line 4
Reported by: Nguyen Van Tuan (Mechanical Technician)

INCIDENT DESCRIPTION:
At 09:45 AM, while performing visual inspection on Conveyor 4, a heavy steel bracket fell from the overhead walkway, landing 50 centimeters from an operator. The operator was wearing a certified hard hat and safety shoes. No physical injury occurred, but this was a high-potential near miss.

ROOT CAUSE ANALYSIS:
The overhead bracket was loosened during yesterday's maintenance overhaul. Vibration caused the remaining bolt to back out completely. No secondary tethering wire was installed.

CORRECTIVE ACTIONS:
1. Immediately inspect all overhead brackets along Lines 1 through 5.
2. Install dual-locking nuts and stainless steel safety lanyards on all overhead components.
3. Conduct a mandatory 15-minute safety stand-down for all maintenance teams.

Reminder: Report every near miss within 2 hours. A near miss reported today prevents a fatal accident tomorrow.`,
    translation: `BẢN TIN AN TOÀN: BÁO CÁO SỰ CỐ SUÝT NGUY (NEAR MISS)
Ngày: Ca 1, Trạm: Băng chuyền số 4
Người báo cáo: Nguyễn Văn Tuấn (Kỹ thuật viên cơ khí)

MÔ TẢ SỰ CỐ:
Vào lúc 09:45 sáng, trong khi kiểm tra bằng mắt tại Băng chuyền 4, một giá đỡ thép nặng rơi từ sàn thao tác trên cao xuống, cách vị trí một công nhân vận hành 50 cm. Công nhân lúc đó có đội mũ bảo hộ đạt chuẩn và mang giày bảo hộ. Không có thương tích xảy ra, nhưng đây là một sự cố suýt nguy mức độ nghiêm trọng cao.

PHÂN TÍCH NGUYÊN NHÂN GỐC RỄ:
Giá đỡ trên cao đã bị nới lỏng trong đợt đại tu bảo dưỡng ngày hôm qua. Rung động khiến chiếc bu-lông còn lại bị tuột hoàn toàn. Không có dây cáp an toàn phụ trợ nào được lắp đặt.

HÀNH ĐỘNG KHẮC PHỤC:
1. Kiểm tra ngay lập tức toàn bộ giá đỡ trên cao dọc theo Dây chuyền 1 đến 5.
2. Lắp đai ốc khóa kép và dây treo an toàn bằng thép không gỉ cho tất cả chi tiết trên cao.
3. Tổ chức buổi dừng họp an toàn bắt buộc 15 phút cho tất cả các đội bảo trì.

Nhắc nhở: Báo cáo mọi sự cố suýt nguy trong vòng 2 giờ. Một sự cố suýt nguy được báo cáo hôm nay sẽ ngăn chặn tai nạn chết người ngày mai.`,
    questions: [
      {
        question: "Why was this incident classified as a 'near miss'?",
        options: [
          "Because someone was severely injured",
          "Because the heavy bracket fell near a worker without causing physical injury",
          "Because nothing fell at all"
        ],
        answer: 1,
        explanation: "Bài đọc nêu: 'landing 50 centimeters from an operator. No physical injury occurred, but this was a high-potential near miss.'"
      },
      {
        question: "What corrective action was required on all overhead brackets?",
        options: [
          "Paint them red",
          "Remove all brackets completely",
          "Install dual-locking nuts and stainless steel safety lanyards"
        ],
        answer: 2,
        explanation: "Mục 2 nêu: 'Install dual-locking nuts and stainless steel safety lanyards on all overhead components.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["must", "All", "wear", "PPE.", "workers"], solution: "All workers must wear PPE.", hint: "All workers..." },
      { words: ["is", "slip", "There", "hazard.", "a"], solution: "There is a slip hazard.", hint: "There is a..." }
    ],
    fill_blank: [
      { sentence_with_blank: "A _______ (sự cố suýt nguy) must be reported within 2 hours.", answer: "near miss", hint: "near m___" },
      { sentence_with_blank: "Workers must wear safety _______ (kính) when cutting metal.", answer: "goggles", hint: "goggles / glasses" }
    ],
    translation: [
      { vietnamese: "Mọi kỹ thuật viên phải đeo kính bảo hộ và đi giày bảo hộ.", model_answer: "All technicians must wear safety goggles and safety boots.", explanation: "All technicians must wear safety goggles and safety boots." },
      { vietnamese: "Tôi có quyền dừng công việc khi phát hiện mối nguy.", model_answer: "I have the right to stop work when I identify a hazard.", explanation: "I have the right to stop work when I identify a hazard." }
    ]
  },
  quiz: [
    {
      question: "Thuật ngữ PPE là viết tắt của cụm từ nào?",
      options: [
        "Personal Product Engineering",
        "Personal Protective Equipment",
        "Public Protection Environment",
        "Plant Power Energy"
      ],
      answer: 1,
      explanation: "PPE = Personal Protective Equipment (Trang bị bảo hộ cá nhân)."
    },
    {
      question: "'Near Miss' trong quản lý an toàn SHE nghĩa là gì?",
      options: [
        "Một tai nạn rất nặng gây tử vong",
        "Một sự cố suýt nguy chưa gây thương tích nhưng có nguy cơ cao",
        "Một cuộc hẹn bị lỡ",
        "Một bài kiểm tra trượt điểm"
      ],
      answer: 1,
      explanation: "Near Miss là sự cố suýt xảy ra tai nạn trong gang tấc."
    },
    {
      question: "Động từ khiếm khuyết nào thể hiện quy định an toàn bắt buộc?",
      options: ["might", "could", "must", "maybe"],
      answer: 2,
      explanation: "'Must' thể hiện tính bắt buộc tuyệt đối trong an toàn."
    },
    {
      question: "Khi thấy dây điện hở và vũng nước trên sàn, hành động đầu tiên theo nguyên tắc Stop Work là:",
      options: [
        "Tiếp tục bước qua thật nhanh",
        "Dừng công việc, cảnh báo khu vực và báo cáo người phụ trách",
        "Đợi hết ca rồi báo",
        "Lấy chổi quét nước vào dây điện"
      ],
      answer: 1,
      explanation: "Phải thực hiện Stop Work, khoanh vùng cảnh báo và báo cáo ngay lập tức."
    },
    {
      question: "Kính bảo hộ che chắn tia lửa và hóa chất văng bắn tiếng Anh là:",
      options: ["safety helmet", "safety goggles", "earplugs", "high-vis vest"],
      answer: 1,
      explanation: "Safety goggles = kính bảo hộ chống văng bắn."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Ghi nhớ 8 thuật ngữ PPE và quyền Stop Work Authority.",
      "Viết thử một báo cáo Near Miss 3 câu dựa trên hiện trường làm việc thực tế."
    ]
  }
};

// Milestone 2: Day 135
milestones[135] = {
  day: 135,
  month: 5,
  week: 20,
  title: "Cột mốc SHE 2: Quy trình Khóa & Treo thẻ cô lập nguồn năng lượng (LOTO 6 Steps)",
  topic_en: "Lockout/Tagout (LOTO) Six-Step Standard Operating Procedure",
  level: "A1",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Nắm vững 6 bước chuẩn mực trong quy trình LOTO (Lockout/Tagout).",
    "Hiểu các thuật ngữ cô lập năng lượng: isolate, lockout, tagout, zero energy, dissipate residual energy, padlock, lockout hasp.",
    "Sử dụng các trạng từ chỉ trình tự: First, Second, Then, Next, After that, Finally.",
    "Thực hành giao tiếp và xác nhận trạng thái năng lượng bằng không (Zero Energy State)."
  ],
  new_vocab: [
    { en: "lockout tagout", vi: "khóa và treo thẻ cô lập nguồn năng lượng (LOTO)", ipa: "/ˈlɒk.aʊt ˈtæɡ.aʊt/", example: "Apply lockout tagout before servicing the machine.", collocation: "LOTO procedure" },
    { en: "isolate", vi: "cô lập, cách ly (năng lượng)", ipa: "/ˈaɪ.sə.leɪt/", example: "Isolate all electrical and pneumatic energy sources.", collocation: "isolate energy source" },
    { en: "padlock", vi: "ổ khóa an toàn LOTO", ipa: "/ˈpæd.lɒk/", example: "Every technician attaches their own red padlock.", collocation: "safety padlock" },
    { en: "tagout", vi: "treo thẻ cảnh báo", ipa: "/ˈtæɡ.aʊt/", example: "The danger tag identifies the worker and phone number.", collocation: "danger tag" },
    { en: "zero energy state", vi: "trạng thái năng lượng bằng không", ipa: "/ˈzɪə.rəʊ ˈen.ə.dʒi steɪt/", example: "Always verify zero energy state before entering.", collocation: "verify zero energy" },
    { en: "residual energy", vi: "năng lượng dư thừa / tồn dư", ipa: "/rɪˈzɪdʒ.u.əl ˈen.ə.dʒi/", example: "Dissipate all residual hydraulic pressure.", collocation: "dissipate residual energy" },
    { en: "circuit breaker", vi: "áptômát, cầu dao ngắt mạch", ipa: "/ˈsɜː.kɪt ˈbreɪ.kər/", example: "Switch off and lock the main circuit breaker.", collocation: "trip the circuit breaker" },
    { en: "verify", vi: "kiểm chứng, xác nhận", ipa: "/ˈver.ɪ.faɪ/", example: "Press the start button to verify the unit will not start.", collocation: "verify isolation" }
  ],
  review_vocab: ["start", "stop", "push", "clean", "valve", "switch", "must", "safe"],
  grammar_vi: `### 1. 6 Bước chuẩn mực của quy trình LOTO (The 6 Steps of LOTO)
1. **Preparation (Chuẩn bị)**: *Identify all energy sources (electrical, hydraulic, pneumatic, thermal).*
2. **Shutdown (Tắt máy)**: *Shut down the machine using normal operational controls.*
3. **Isolation (Cô lập)**: *Isolate the machine by disconnecting circuit breakers and closing valves.*
4. **Lockout & Tagout (Khóa & Treo thẻ)**: *Attach personal padlocks and danger tags to every energy isolating device.*
5. **Stored Energy Dissipation (Xả năng lượng tồn dư)**: *Release residual pressure, drain fluids, bleed air tanks, block elevated parts.*
6. **Zero Energy Verification (Xác nhận năng lượng bằng 0)**: *Attempt to restart the equipment to verify it will not move or energize.*

### 2. Trạng từ chỉ trình tự thao tác (Sequencing Adverbs)
- **First**: *First, notify all affected operators.*
- **Second / Then**: *Second, shut down the electrical supply.*
- **Next**: *Next, attach your personal red padlock.*
- **After that**: *After that, bleed the pneumatic pressure.*
- **Finally**: *Finally, test the start button to verify zero energy.*`,
  listening: {
    audio_prompt: "Listen to the senior electrical engineer coaching a technician on applying LOTO before changing a motor.",
    transcript: `Senior Engineer: Alex, we are replacing the 45-kilowatt motor on Mixer 3. What is our first step?
Alex: First, we inform the line supervisor and shut down Mixer 3.
Senior Engineer: Correct. What about step 3 and 4?
Alex: Step 3 is isolation: open the main circuit breaker CB-05. Step 4 is lockout tagout: place our individual padlocks and danger tags on the breaker hasp.
Senior Engineer: What about the hydraulic clamp on the mixer lid?
Alex: We must release the stored hydraulic pressure through the manual bleed valve to reach zero energy state.
Senior Engineer: Excellent. And how do you verify step 6?
Alex: I push the local start button. If the mixer does not move and the meter reads zero volts, the machine is verified safe.
Senior Engineer: Perfect. Let's execute the LOTO.`,
    questions: [
      {
        question: "What must Alex do to address the hydraulic clamp on the mixer lid?",
        options: [
          "Leave it pressurized",
          "Release stored hydraulic pressure through the manual bleed valve",
          "Cut the hydraulic hose with scissors"
        ],
        answer: 1,
        explanation: "Alex nói: 'release the stored hydraulic pressure through the manual bleed valve to reach zero energy state.'"
      },
      {
        question: "How does Alex verify the zero energy state in Step 6?",
        options: [
          "By asking a colleague across the room",
          "By pushing the local start button and confirming zero volts",
          "By smelling the motor"
        ],
        answer: 1,
        explanation: "Alex trả lời: 'I push the local start button. If the mixer does not move and the meter reads zero volts, the machine is verified safe.'"
      }
    ]
  },
  speaking: {
    prompt: "Giải thích 6 bước LOTO bằng tiếng Anh cho một kỹ thuật viên mới.",
    target_sentence: "First shut down the power. Next attach your padlock and tag. Then release residual pressure and verify zero energy.",
    substitution_drill: [
      { cue: "lock circuit breaker / attach tag", sentence: "Lock the circuit breaker and attach your personal danger tag." },
      { cue: "bleed air tank / release pressure", sentence: "Bleed the air tank to release all pneumatic pressure." },
      { cue: "push button / verify zero energy", sentence: "Push the start button to verify zero energy state." }
    ],
    sample_answer: "To perform LOTO safely: First, shut down the machine. Second, open the breaker. Third, attach your personal padlock and tag. Fourth, bleed residual energy. Finally, test the switch to verify zero energy.",
    self_check: [
      "Tôi đã dùng đúng các trạng từ: First, Second, Next, Then, Finally chưa?",
      "Tôi đã phát âm đúng cụm từ 'zero energy state' (/ˈzɪə.rəʊ ˈen.ə.dʒi steɪt/) chưa?"
    ]
  },
  reading: {
    text: `GOLDEN SAFETY RULE: ONE PERSON, ONE LOCK, ONE KEY

The fundamental rule of Lockout/Tagout is personal accountability: 'One person, one lock, one key'. 

Never let another worker apply a lock for you, and never lend your key to anyone. When multiple technicians service the same equipment, a multi-lock hasp must be used. Every technician attaches their own padlock to the hasp. The equipment cannot be re-energized until the very last worker finishes their work, removes their tools, and unlocks their personal lock.

If a padlock key is lost, only the designated plant manager can authorize emergency lock removal after physically confirming that the worker is away from danger. Violating LOTO procedure results in immediate work suspension because an unexpected equipment start-up can be fatal.`,
    translation: `QUY TẮC AN TOÀN VÀNG: MỘT NGƯỜI, MỘT KHÓA, MỘT CHÌA

Nguyên tắc cơ bản nhất của Khóa & Treo thẻ (LOTO) là trách nhiệm cá nhân: 'Một người, một khóa, một chìa'.

Tuyệt đối không để người khác bấm khóa thay bạn, và không bao giờ cho bất kỳ ai mượn chìa khóa của bạn. Khi nhiều kỹ thuật viên cùng sửa chữa một thiết bị, phải sử dụng kẹp khóa nhiều lỗ (hasp). Mỗi kỹ thuật viên tự móc ổ khóa riêng của mình vào kẹp. Thiết bị sẽ không thể được cấp điện trở lại cho đến khi người cuối cùng làm xong, thu dọn dụng cụ và tự tay tháo ổ khóa của mình.

Nếu mất chìa khóa, chỉ có giám đốc nhà máy được chỉ định mới có quyền phê duyệt phá khóa khẩn cấp sau khi đã xác minh trực tiếp rằng kỹ thuật viên đó đang an toàn tuyệt đối ở ngoài khu vực nguy hiểm. Vi phạm quy trình LOTO sẽ bị đình chỉ công việc ngay lập tức vì việc máy móc khởi động bất ngờ có thể gây chết người.`,
    questions: [
      {
        question: "What does the golden rule 'One person, one lock, one key' mean?",
        options: [
          "One key opens all locks in the city",
          "Each worker must use their own personal padlock and never lend their key",
          "Only one lock is needed for ten workers"
        ],
        answer: 1,
        explanation: "Bài đọc nêu: 'personal accountability: One person, one lock, one key. Never let another worker apply a lock for you, and never lend your key.'"
      },
      {
        question: "When can equipment be re-energized when multiple workers use a multi-lock hasp?",
        options: [
          "As soon as the supervisor wants to test",
          "Only when the very last worker finishes and removes their personal padlock",
          "After 30 minutes automatically"
        ],
        answer: 1,
        explanation: "Trong bài: 'The equipment cannot be re-energized until the very last worker finishes their work, removes their tools, and unlocks their personal lock.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["lockout", "Apply", "tagout", "maintenance.", "before"], solution: "Apply lockout tagout before maintenance.", hint: "Apply lockout tagout..." },
      { words: ["zero", "energy", "Verify", "always", "state."], solution: "Always verify zero energy state.", hint: "Always verify..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Every technician must attach their own _______ (ổ khóa) to the hasp.", answer: "padlock", hint: "safety p____" },
      { sentence_with_blank: "We must dissipate all _______ (tồn dư) hydraulic pressure.", answer: "residual", hint: "residual = tồn dư." }
    ],
    translation: [
      { vietnamese: "Hãy cách ly áptômát điện và treo thẻ nguy hiểm.", model_answer: "Isolate the electrical breaker and attach the danger tag.", explanation: "Isolate the electrical breaker and attach the danger tag." },
      { vietnamese: "Bước cuối cùng là xác nhận trạng thái năng lượng bằng không.", model_answer: "The final step is to verify zero energy state.", explanation: "The final step is to verify zero energy state." }
    ]
  },
  quiz: [
    {
      question: "Ý nghĩa của bước 'Zero Energy Verification' trong LOTO là gì?",
      options: [
        "Kiểm tra hóa đơn tiền điện",
        "Thử bật máy hoặc đo điện áp để đảm bảo không còn bất kỳ năng lượng nào",
        "Để máy chạy hết công suất",
        "Thay ổ khóa mới"
      ],
      answer: 1,
      explanation: "Zero energy verification là bước xác minh máy đã hoàn toàn ngắt mọi nguồn năng lượng trước khi chạm vào."
    },
    {
      question: "Khi có 3 kỹ thuật viên cùng sửa một máy, họ phải làm gì?",
      options: [
        "Chỉ cần 1 người khóa là đủ",
        "Dùng kẹp khóa (hasp) và mỗi người móc 1 ổ khóa riêng của mình",
        "Không cần khóa vì có đông người",
        "Để chìa khóa cắm sẵn trong ổ"
      ],
      answer: 1,
      explanation: "Quy tắc an toàn: Mỗi người tự móc ổ khóa riêng của mình qua kẹp khóa hasp."
    },
    {
      question: "Từ 'padlock' có nghĩa là:",
      options: ["ổ khóa an toàn", "công tắc", "cờ lê", "găng tay"],
      answer: 0,
      explanation: "Padlock = ổ khóa móc."
    },
    {
      question: "Từ nào đồng nghĩa với 'isolate' trong ngữ cảnh an toàn điện?",
      options: ["connect", "disconnect / separate", "turn on", "repair"],
      answer: 1,
      explanation: "Isolate = ngắt kết nối / cách ly nguồn năng lượng."
    },
    {
      question: "Trạng từ chỉ trình tự nào dùng cho bước kết thúc?",
      options: ["First", "Second", "Finally", "Next"],
      answer: 2,
      explanation: "Finally = cuối cùng (bước chót)."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Thuộc lòng 6 bước LOTO bằng tiếng Anh.",
      "Hiểu rõ nguyên tắc 'One person, one lock, one key'."
    ]
  }
};

// Milestone 3: Day 155
milestones[155] = {
  day: 155,
  month: 6,
  week: 22,
  title: "Cột mốc Kỹ thuật 1: Kiểm tra Ổ bi & Rung động Bất thường (Bearing & Vibration)",
  topic_en: "Abnormal Vibration, Bearing Inspection and Predictive Maintenance",
  level: "A1",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Mô tả các hiện tượng cơ khí bất thường: vibration, overheating, grinding noise, misalignment, unbalance.",
    "Nắm các bộ phận chính của ổ bi (bearing): inner ring, outer ring, balls/rollers, cage, seal.",
    "Sử dụng các từ vựng đo lường và đơn vị: millimeter per second (mm/s), degrees Celsius (°C), RPM.",
    "Lập báo cáo kiểm tra tình trạng máy bơm hoặc quạt công nghiệp."
  ],
  new_vocab: [
    { en: "bearing", vi: "ổ bi, vòng bi, bạc đạn", ipa: "/ˈbeə.rɪŋ/", example: "The drive-end bearing is worn out.", collocation: "bearing housing" },
    { en: "vibration", vi: "độ rung, sự rung động", ipa: "/vaɪˈbreɪ.ʃən/", example: "Vibration level exceeds 4.5 mm/s.", collocation: "abnormal vibration" },
    { en: "overheating", vi: "sự quá nhiệt, quá nóng", ipa: "/ˌəʊ.vəˈhiː.tɪŋ/", example: "Bearing overheating is caused by lack of grease.", collocation: "prevent overheating" },
    { en: "misalignment", vi: "sự lệch trục, lệch tâm", ipa: "/ˌmɪs.əˈlaɪn.mənt/", example: "Shaft misalignment causes rapid seal wear.", collocation: "shaft misalignment" },
    { en: "lubrication", vi: "sự bôi trơn, tra dầu mỡ", ipa: "/ˌluː.brɪˈkeɪ.ʃən/", example: "Follow the lubrication schedule strictly.", collocation: "grease lubrication" },
    { en: "grease gun", vi: "súng bơm mỡ bôi trơn", ipa: "/ɡriːs ɡʌn/", example: "Inject two pumps of grease with the grease gun.", collocation: "use a grease gun" },
    { en: "rpm", vi: "vòng trên phút (revolutions per minute)", ipa: "/ˌɑː.piːˈem/", example: "The motor operates at 1480 RPM.", collocation: "rated RPM" },
    { en: "tolerance", vi: "dung sai cho phép", ipa: "/ˈtɒl.ər.əns/", example: "The shaft clearance is within tolerance.", collocation: "within tolerance" }
  ],
  review_vocab: ["hot", "noisy", "working", "broken", "tight", "loose", "check", "inspect", "replace"],
  grammar_vi: `### 1. Cách diễn đạt thông số đo lường và trạng thái vượt ngưỡng
- **[Chỉ số] + is + [giá trị]**:
  - *The vibration velocity is 6.2 mm/s.* (Vận tốc rung là 6.2 mm/s.)
  - *The bearing temperature is 85°C.* (Nhiệt độ ổ bi là 85°C.)
- **Cấu trúc vượt ngưỡng / Trong ngưỡng**:
  - **Within acceptable limits**: *Vibration is within acceptable limits.* (Độ rung trong giới hạn cho phép.)
  - **Exceeds the threshold**: *Temperature exceeds the maximum threshold.* (Nhiệt độ vượt ngưỡng tối đa.)

### 2. Mẫu câu nguyên nhân - kết quả trong chẩn đoán hỏng hóc
- *The high vibration is caused by **misalignment**.* (Độ rung cao bị gây ra bởi lệch tâm trục.)
- *Lack of grease leads to **bearing overheating**.* (Thiếu mỡ dẫn đến ổ bi quá nhiệt.)`,
  listening: {
    audio_prompt: "Listen to a condition monitoring technician reporting vibration analysis data to the plant reliability engineer.",
    transcript: `Tech: Good morning Mr. Lee. I finished vibration analysis on Induced Draft Fan 2.
Engineer: What did the spectrum show?
Tech: The overall vibration on the drive-end bearing reached 7.8 millimeters per second. That is in the RED alarm zone.
Engineer: What is the dominant frequency?
Tech: High peak at 1X RPM, which strongly indicates mechanical unbalance on the fan impeller. Also, bearing temperature reached 82 degrees Celsius.
Engineer: We cannot let it run like this. Plan an emergency shutdown at 4 PM to clean the impeller dust and check bearing clearances.
Tech: Understood. I will prepare the vibration balancing equipment.`,
    questions: [
      {
        question: "What is the overall vibration level on the fan bearing?",
        options: ["1.2 mm/s", "7.8 mm/s in the RED alarm zone", "0.5 mm/s"],
        answer: 1,
        explanation: "Tech báo cáo: 'overall vibration on the drive-end bearing reached 7.8 millimeters per second. That is in the RED alarm zone.'"
      },
      {
        question: "What does the 1X RPM peak indicate according to the technician?",
        options: ["Low oil", "Mechanical unbalance on the fan impeller", "Electrical power cut"],
        answer: 1,
        explanation: "Tech chỉ ra: 'High peak at 1X RPM, which strongly indicates mechanical unbalance on the fan impeller.'"
      }
    ]
  },
  speaking: {
    prompt: "Báo cáo thông số nhiệt độ và độ rung của một ổ bi động cơ.",
    target_sentence: "The motor bearing temperature is 78°C and vibration is 5.2 mm/s, which exceeds the normal limit.",
    substitution_drill: [
      { cue: "fan bearing / 85°C / abnormal noise", sentence: "The fan bearing temperature is 85°C with severe abnormal noise." },
      { cue: "pump shaft / misalignment / high vibration", sentence: "The pump shaft has misalignment, causing high vibration." }
    ],
    sample_answer: "Inspection report: Pump P-101 bearing temperature is currently 75°C. Vibration is 4.8 mm/s. I recommend greasing the bearing immediately.",
    self_check: [
      "Tôi đã phát âm đúng đơn vị 'millimeters per second' và 'degrees Celsius' chưa?",
      "Tôi đã dùng từ 'exceeds' (/ɪkˈsiːdz/) khi nói về vượt ngưỡng chưa?"
    ]
  },
  reading: {
    text: `PREDICTIVE MAINTENANCE TECHNICAL REPORT: BEARING CONDITION
Equipment Tag: Exhaust Blower B-301
Motor Rating: 75 kW, 2950 RPM
Inspection Tool: Fluke 805 Vibration Meter & Flir Thermal Camera

FINDINGS:
1. Vibration Velocity: 6.8 mm/s RMS (ISO 10816-3 Zone C: Unsatisfactory).
2. Peak Impact: High frequency bearing defect factor shows stage 2 inner race flaking.
3. Thermal Profile: Drive-end housing is 88°C, while non-drive end is 52°C. Temperature differential is 36°C.
4. Acoustic Check: Audible metallic clicking sound detected during load increase.

CONCLUSION & RECOMMENDATION:
The drive-end spherical roller bearing (SKF 22216) has suffered lubrication starvation and surface spalling. Immediate replacement is scheduled during next planned stop to prevent catastrophic rotor seizure.`,
    translation: `BÁO CÁO KỸ THUẬT BẢO TRÌ DỰ ĐOÁN: TÌNH TRẠNG Ổ BI
Mã thiết bị: Quạt hút B-301
Công suất động cơ: 75 kW, 2950 vòng/phút
Dụng cụ kiểm tra: Máy đo rung Fluke 805 & Camera nhiệt Flir

KẾT QUẢ ĐO:
1. Vận tốc rung: 6.8 mm/s RMS (Theo ISO 10816-3 Vùng C: Không đạt yêu cầu).
2. Tác động đỉnh: Hệ số khuyết tật ổ bi tần số cao cho thấy hiện tượng tróc rãnh trong cấp 2.
3. Hồ sơ nhiệt: Thân gối đỡ đầu truyền động là 88°C, trong khi đầu tự do là 52°C. Độ chênh lệch nhiệt độ là 36°C.
4. Kiểm tra âm học: Phát hiện tiếng lách cách kim loại nghe rõ khi tăng tải.

KẾT LUẬN & KIẾN NGHỊ:
Ổ bi tang trống tự lựa (SKF 22216) đầu truyền động đã bị cạn kiệt mỡ bôi trơn và tróc bề mặt rãnh lăn. Lên lịch thay thế khẩn trương trong đợt dừng máy tới để tránh kẹt rotor thảm họa.`,
    questions: [
      {
        question: "What is the temperature differential between the drive-end and non-drive end housings?",
        options: ["10°C", "36°C", "100°C"],
        answer: 1,
        explanation: "Báo cáo ghi rõ: 'Drive-end housing is 88°C, while non-drive end is 52°C. Temperature differential is 36°C.'"
      },
      {
        question: "What failure mechanism affected bearing SKF 22216?",
        options: [
          "Water flood",
          "Lubrication starvation and surface spalling",
          "Lightning strike"
        ],
        answer: 1,
        explanation: "Kết luận nêu: 'suffered lubrication starvation and surface spalling.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["exceeds", "limit.", "The", "safe", "vibration"], solution: "The vibration exceeds safe limit.", hint: "The vibration exceeds..." },
      { words: ["is", "hot.", "bearing", "The", "motor", "too"], solution: "The motor bearing is too hot.", hint: "The motor bearing..." }
    ],
    fill_blank: [
      { sentence_with_blank: "The pump shaft has _______ (lệch trục), causing high vibration.", answer: "misalignment", hint: "misalign____" },
      { sentence_with_blank: "Please inject grease using the _______ (súng bơm mỡ).", answer: "grease gun", hint: "grease g__" }
    ],
    translation: [
      { vietnamese: "Nhiệt độ ổ bi là 85 độ C, vượt quá ngưỡng cho phép.", model_answer: "The bearing temperature is 85°C, which exceeds the allowable limit.", explanation: "The bearing temperature is 85°C, which exceeds the allowable limit." },
      { vietnamese: "Chúng tôi cần thay thế ổ bi bị hỏng này ngay hôm nay.", model_answer: "We need to replace this damaged bearing today.", explanation: "We need to replace this damaged bearing today." }
    ]
  },
  quiz: [
    {
      question: "Thuật ngữ 'bearing' trong thiết bị cơ khí là:",
      options: ["Ổ bi / bạc đạn", "Dây curoa", "Bóng đèn", "Đồng hồ đo áp"],
      answer: 0,
      explanation: "Bearing = ổ bi / vòng bi / bạc đạn."
    },
    {
      question: "Đơn vị đo vận tốc rung tiêu chuẩn ISO thường dùng là:",
      options: ["km/h", "mm/s", "kg/m3", "bar"],
      answer: 1,
      explanation: "Vận tốc rung thường đo bằng mm/s RMS (millimeter per second)."
    },
    {
      question: "'Misalignment' trong truyền động cơ khí nghĩa là:",
      options: ["Độ ẩm cao", "Lệch tâm / lệch trục giữa 2 khớp nối", "Đứt dây đai", "Điện áp chập chờn"],
      answer: 1,
      explanation: "Misalignment = sự lệch trục hoặc lệch tâm."
    },
    {
      question: "Nguyên nhân phổ biến gây quá nhiệt (overheating) ổ bi là:",
      options: [
        "Vệ sinh quá sạch",
        "Thiếu mỡ bôi trơn hoặc tra quá nhiều mỡ",
        "Sơn màu xanh",
        "Chạy chậm"
      ],
      answer: 1,
      explanation: "Thiếu mỡ (starvation) hoặc bơm quá nhiều mỡ (overgreasing) đều làm tăng nhiệt độ ổ bi."
    },
    {
      question: "Cụm từ 'within tolerance' có nghĩa là:",
      options: ["Bị gãy nát", "Trong khoảng dung sai cho phép", "Vượt quá giới hạn nguy hiểm", "Không dùng được nữa"],
      answer: 1,
      explanation: "Within tolerance = nằm trong dung sai cho phép."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Nắm vững các thuật ngữ chẩn đoán rung động và ổ bi.",
      "Thực hành báo cáo thông số nhiệt độ và rung động bằng tiếng Anh."
    ]
  }
};

// Milestone 4: Day 190
milestones[190] = {
  day: 190,
  month: 7,
  week: 27,
  title: "Cột mốc Giao tiếp 1: Nhật ký Công việc Quá khứ & Bàn giao Ca (Past Work Log)",
  topic_en: "Past simple tense, maintenance work logs, and shift handover reports",
  level: "A2",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Sử dụng thành thạo thì Quá khứ đơn (Past Simple) với động từ có quy tắc (-ed) và bất quy tắc (saw, had, made, took, found).",
    "Ghi chép nhật ký công việc (Maintenance Log) chuẩn xác theo mốc thời gian đã hoàn thành.",
    "Bàn giao ca đầy đủ 3 phần: Việc đã hoàn thành (Completed), Việc đang dở dang (Pending), Lưu ý cho ca tới (Notes/Precautions).",
    "Sử dụng các trạng từ thời gian quá khứ: yesterday, this morning, at 2 PM, last shift."
  ],
  new_vocab: [
    { en: "replaced", vi: "đã thay thế", ipa: "/rɪˈpleɪst/", example: "We replaced the mechanical seal yesterday.", collocation: "replaced the seal" },
    { en: "inspected", vi: "đã kiểm tra, thanh tra", ipa: "/ɪnˈspektɪd/", example: "The technician inspected all cables.", collocation: "inspected the equipment" },
    { en: "adjusted", vi: "đã căn chỉnh, hiệu chỉnh", ipa: "/əˈdʒʌstɪd/", example: "I adjusted the belt tension to 65 Hertz.", collocation: "adjusted the tension" },
    { en: "lubricated", vi: "đã bôi trơn, tra dầu mỡ", ipa: "/ˈluː.brɪ.keɪ.tɪd/", example: "We lubricated the bearings this morning.", collocation: "lubricated the joints" },
    { en: "found", vi: "đã phát hiện ra (quá khứ của find)", ipa: "/faʊnd/", example: "The operator found an air leak on Line 2.", collocation: "found a leak" },
    { en: "took", vi: "đã mất thời gian / đã lấy (quá khứ của take)", ipa: "/tʊk/", example: "The overhaul took four hours.", collocation: "took two hours" },
    { en: "repaired", vi: "đã sửa chữa xong", ipa: "/rɪˈpeəd/", example: "The team repaired the broken bracket.", collocation: "repaired the fault" },
    { en: "pending", vi: "đang chờ xử lý / còn dở dang", ipa: "/ˈpen.dɪŋ/", example: "Two work orders are still pending.", collocation: "pending task" }
  ],
  review_vocab: ["shift", "handover", "machine", "valve", "pump", "safe", "hours", "yesterday"],
  grammar_vi: `### 1. Thì Quá khứ đơn (Past Simple Tense) trong Báo cáo Kỹ thuật
Khi báo cáo công việc đã làm xong trong ca trước, luôn chia động từ ở quá khứ:

#### Động từ có quy tắc (+ ed):
- *check* → **checked** /tʃekt/
- *inspect* → **inspected** /ɪnˈspektɪd/
- *replace* → **replaced** /rɪˈpleɪst/
- *clean* → **cleaned** /kliːnd/
- *lubricate* → **lubricated** /ˈluːbrɪkeɪtɪd/
- *tighten* → **tightened** /ˈtaɪtənd/

#### Động từ bất quy tắc thường gặp:
- *find* → **found** /faʊnd/ (*We found a loose wire.*)
- *see* → **saw** /sɔː/ (*I saw smoke coming from the motor.*)
- *shut* → **shut** /ʃʌt/ (*He shut the isolation valve.*)
- *take* → **took** /tʊk/ (*The repair took three hours.*)
- *have* → **had** /hæd/ (*We had an alarm at 3 AM.*)

### 2. Cấu trúc chuẩn 3 phần của Biên bản Bàn giao ca (Shift Handover)
1. **Completed Tasks (Đã hoàn thành)**: *We replaced the filter and lubricated Pump 1.*
2. **Pending Tasks (Việc đang dở dang)**: *Air Compressor 2 is still tagged out, waiting for spare gasket.*
3. **Important Notes for Next Shift (Lưu ý cho ca tới)**: *Monitor the bearing temperature on Motor 4 every two hours.*`,
  listening: {
    audio_prompt: "Listen to the shift supervisor delivering the end-of-shift handover summary to incoming staff.",
    transcript: `Supervisor: Welcome team. Here is our shift summary for Shift 1.
Technician: Did you finish the preventive maintenance on the stamping press?
Supervisor: Yes. At 10:00 AM, we locked out Press 1. We inspected the hydraulic hoses, adjusted the safety light curtains, and replaced two worn guide bushings. The machine was tested at 1:30 PM and returned to production.
Technician: What about the chiller unit alarm?
Supervisor: We investigated the error code at 11:15 AM. The technician found low coolant level. He refilled 20 liters of glycol mix, and the temperature stabilized at 6 degrees.
Technician: Any pending tasks for us tonight?
Supervisor: Only one: Line 3 needs raw material replenishment at 8:00 PM. All lines are safe and clean. Sign here, please.`,
    questions: [
      {
        question: "What maintenance tasks were completed on Press 1?",
        options: [
          "Painted the press and washed the floor",
          "Inspected hydraulic hoses, adjusted light curtains, and replaced guide bushings",
          "Replaced the entire computer system"
        ],
        answer: 1,
        explanation: "Supervisor nêu rõ: 'inspected the hydraulic hoses, adjusted the safety light curtains, and replaced two worn guide bushings.'"
      },
      {
        question: "What did the technician find when investigating the chiller alarm?",
        options: ["Broken fan blade", "Low coolant level", "Burnt electrical motor"],
        answer: 1,
        explanation: "Supervisor nói: 'The technician found low coolant level. He refilled 20 liters of glycol mix.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành báo cáo 3 công việc bạn đã hoàn thành trong ca làm việc vừa qua bằng thì Quá khứ đơn.",
    target_sentence: "During Shift 1, I inspected the valves, replaced the oil filter, and tested the emergency stop button.",
    substitution_drill: [
      { cue: "tightened bolts / cleaned motor", sentence: "We tightened all foundation bolts and cleaned the cooling fan." },
      { cue: "found water leak / repaired pipe", sentence: "I found a water leak on Line 2 and repaired the joint." },
      { cue: "lubricated bearings / took 30 mins", sentence: "The technician lubricated the motor bearings; it took 30 minutes." }
    ],
    sample_answer: "Good evening. In our shift, we completed the PM on Pump 3. We replaced the mechanical seal, adjusted the belt, and confirmed zero leaks. Line 2 is pending spare parts.",
    self_check: [
      "Tôi đã phát âm đúng đuôi -ed trong 'inspected' (/ɪd/), 'replaced' (/t/), 'cleaned' (/d/) chưa?",
      "Tôi đã dùng dạng quá khứ 'found' thay vì 'find' chưa?"
    ]
  },
  reading: {
    text: `DAILY MAINTENANCE WORK LOG - SHIFT 2 (14:00 - 22:00)
Technicians on Duty: Alex Nguyen, Tran Van Minh

14:15 - Attended daily shift briefing and reviewed open work orders.
15:00 - Performed 500-hour PM on Boiler Feed Pump B. Replaced drive belt (Part #B-48), cleaned suction strainer, and checked alignment. Work completed at 16:30.
17:00 - Emergency call: Packaging Line 1 stopped due to photo-eye sensor error. Minh cleaned sensor lens and readjusted reflector position. Reset controller. Line restarted at 17:25 (Downtime: 25 minutes).
19:00 - Routine vibration rounds completed across Utility Building. All pump readings were within normal limits except Chiller Pump #1 (slight increase in drive-end temperature).
21:30 - Housekeeping and tool inventory completed. All 18 toolkits accounted for. Shift handover signed with Shift 3 lead.`,
    translation: `NHẬT KÝ CÔNG VIỆC BẢO TRÌ HẰNG NGÀY - CA 2 (14:00 - 22:00)
Kỹ thuật viên trực ca: Alex Nguyen, Trần Văn Minh

14:15 - Tham gia họp giao ban đầu ca và xem xét các phiếu công việc đang mở.
15:00 - Thực hiện bảo dưỡng định kỳ 500 giờ cho Bơm cấp lò hơi B. Đã thay dây curoa truyền động (Mã #B-48), vệ sinh rọ lọc hút và kiểm tra độ đồng tâm. Hoàn thành công việc lúc 16:30.
17:00 - Cuộc gọi khẩn: Dây chuyền đóng gói số 1 dừng do lỗi cảm biến quang. Minh đã lau sạch kính cảm biến và căn chỉnh lại vị trí gương phản xạ. Đã reset bộ điều khiển. Dây chuyền khởi động lại lúc 17:25 (Thời gian dừng máy: 25 phút).
19:00 - Hoàn thành đợt đo rung định kỳ khắp Tòa nhà Phụ trợ. Toàn bộ thông số bơm đều trong giới hạn bình thường trừ Bơm Chiller 1 (nhiệt độ đầu truyền động tăng nhẹ).
21:30 - Hoàn tất vệ sinh 5S và kiểm kê dụng cụ. Đầy đủ 18 bộ đồ nghề. Ký biên bản bàn giao ca cho trưởng Ca 3.`,
    questions: [
      {
        question: "How long was the total downtime on Packaging Line 1?",
        options: ["2 hours", "25 minutes", "10 hours", "Zero minutes"],
        answer: 1,
        explanation: "Nhật ký ghi rõ: 'Line restarted at 17:25 (Downtime: 25 minutes).'"
      },
      {
        question: "What maintenance action was taken on Boiler Feed Pump B?",
        options: [
          "Scrapped the pump entirely",
          "Replaced drive belt, cleaned suction strainer, and checked alignment",
          "Only washed the paint"
        ],
        answer: 1,
        explanation: "Mục 15:00 nêu: 'Replaced drive belt (Part #B-48), cleaned suction strainer, and checked alignment.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["replaced", "filter.", "We", "the", "yesterday", "oil"], solution: "We replaced the oil filter yesterday.", hint: "We replaced the..." },
      { words: ["found", "leak", "pipe.", "on", "the", "I", "a"], solution: "I found a leak on the pipe.", hint: "I found a..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Yesterday, the technician _______ (đã kiểm tra) the safety valves.", answer: "inspected", hint: "inspect + ed" },
      { sentence_with_blank: "The repair work _______ (đã mất) two hours to finish.", answer: "took", hint: "Quá khứ của take là took." }
    ],
    translation: [
      { vietnamese: "Chúng tôi đã vệ sinh cảm biến và khởi động lại dây chuyền lúc 5 giờ chiều.", model_answer: "We cleaned the sensor and restarted the line at 5 PM.", explanation: "We cleaned the sensor and restarted the line at 5 PM." },
      { vietnamese: "Tôi đã phát hiện ra một bu-lông bị lỏng và đã siết chặt nó.", model_answer: "I found a loose bolt and tightened it.", explanation: "I found a loose bolt and tightened it." }
    ]
  },
  quiz: [
    {
      question: "Dạng quá khứ của động từ 'find' (tìm thấy/phát hiện) là:",
      options: ["finded", "found", "founding", "finds"],
      answer: 1,
      explanation: "Find là động từ bất quy tắc, quá khứ là 'found'."
    },
    {
      question: "Cách phát âm đuôi -ed của từ 'inspected' là:",
      options: ["/t/", "/d/", "/ɪd/", "không phát âm"],
      answer: 2,
      explanation: "Động từ kết thúc bằng âm /t/ (inspect) khi thêm -ed đọc là /ɪd/: /ɪnˈspektɪd/."
    },
    {
      question: "Trong biên bản bàn giao ca, mục 'Pending tasks' có nghĩa là:",
      options: [
        "Những việc đã làm xong tuần trước",
        "Những công việc còn dở dang, đang chờ xử lý",
        "Tiền lương và thưởng",
        "Danh sách khen thưởng"
      ],
      answer: 1,
      explanation: "Pending tasks = các nhiệm vụ đang chờ thực hiện / chưa hoàn tất."
    },
    {
      question: "Chọn câu viết đúng thì quá khứ đơn:",
      options: [
        "We replace the seal yesterday afternoon.",
        "We replaced the seal yesterday afternoon.",
        "We replaces the seal yesterday afternoon.",
        "We was replace the seal yesterday afternoon."
      ],
      answer: 1,
      explanation: "Yesterday afternoon cần chia quá khứ đơn: 'replaced'."
    },
    {
      question: "Thuật ngữ 'downtime' trong sản xuất công nghiệp mang nghĩa gì?",
      options: [
        "Thời gian nghỉ trưa của nhân viên",
        "Thời gian dừng máy / ngưng trệ sản xuất",
        "Thời gian đi từ nhà đến công ty",
        "Thời gian họp đầu giờ"
      ],
      answer: 1,
      explanation: "Downtime = thời gian máy dừng hoạt động ngoài kế hoạch."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Luyện phát âm 3 cách đọc đuôi -ed: /t/, /d/, /ɪd/.",
      "Tự viết một báo cáo công việc 3 câu về những gì đã làm ngày hôm qua."
    ]
  }
};

// Milestone 5: Day 220
milestones[220] = {
  day: 220,
  month: 8,
  week: 31,
  title: "Cột mốc Kỹ thuật 2: Đọc Sổ tay Hướng dẫn, Thông số & Dung sai (Manuals & Specs)",
  topic_en: "Reading equipment manuals, technical specifications, units, and tolerances",
  level: "A2",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Đọc hiểu cấu trúc một User/Maintenance Manual: Safety Warnings, Technical Specifications, Installation, Maintenance Schedule, Troubleshooting Guide.",
    "Làm chủ các đơn vị đo lường kỹ thuật: bar/PSI (áp suất), kW/HP (công suất), mm/inch (kích thước), Nm (mô-men xoắn), L/min (lưu lượng).",
    "Hiểu các ký hiệu cảnh báo: DANGER, WARNING, CAUTION, NOTICE.",
    "Tra cứu dung sai lắp ráp (clearance, torque specification) trong bảng kỹ thuật."
  ],
  new_vocab: [
    { en: "manual", vi: "sổ tay hướng dẫn sử dụng / tài liệu kỹ thuật", ipa: "/ˈmæn.ju.əl/", example: "Refer to the manufacturer manual before overhaul.", collocation: "user manual" },
    { en: "specification", vi: "thông số kỹ thuật, quy cách", ipa: "/ˌspes.ɪ.fɪˈkeɪ.ʃən/", example: "Tighten bolts according to torque specification.", collocation: "technical specifications" },
    { en: "torque", vi: "mô-men xoắn (lực siết)", ipa: "/tɔːk/", example: "The required torque is 85 Newton-meters.", collocation: "torque wrench" },
    { en: "pressure", vi: "áp suất, áp lực", ipa: "/ˈpreʃ.ər/", example: "Operating pressure must not exceed 10 bar.", collocation: "operating pressure" },
    { en: "flow rate", vi: "lưu lượng dòng chảy", ipa: "/fləʊ reɪt/", example: "Maximum flow rate is 250 liters per minute.", collocation: "rated flow rate" },
    { en: "clearance", vi: "khe hở kỹ thuật / khoảng hở", ipa: "/ˈklɪə.rəns/", example: "Radial clearance is between 0.05 and 0.08 mm.", collocation: "radial clearance" },
    { en: "caution", vi: "cẩn trọng / chú ý cảnh báo mức trung bình", ipa: "/ˈkɔː.ʃən/", example: "CAUTION: Hot surface during operation.", collocation: "caution notice" },
    { en: "troubleshooting", vi: "xử lý sự cố, tìm nguyên nhân lỗi", ipa: "/ˈtrʌb.əlˌʃuː.tɪŋ/", example: "Check page 42 for the troubleshooting matrix.", collocation: "troubleshooting guide" }
  ],
  review_vocab: ["safe", "dangerous", "tight", "loose", "valve", "pump", "check", "inspect", "must"],
  grammar_vi: `### 1. 4 Cấp độ Cảnh báo Chuẩn ANSI Z535 trong Tài liệu Kỹ thuật
1. **DANGER (Nguy hiểm chết người)**: Tình huống nguy hiểm khẩn cấp; nếu không tránh sẽ dẫn đến **tử vong hoặc thương tật vĩnh viễn**.
2. **WARNING (Cảnh báo)**: Tình huống nguy hiểm tiềm ẩn; nếu không tránh có thể dẫn đến **tử vong hoặc chấn thương nghiêm trọng**.
3. **CAUTION (Cẩn trọng)**: Tình huống rủi ro mức độ vừa; có thể gây **thương tích nhẹ hoặc làm hỏng thiết bị**.
4. **NOTICE (Lưu ý / Thông báo)**: Thông tin quan trọng liên quan đến bảo vệ tài sản, vận hành đúng, không gây thương tích cơ thể.

### 2. Các Đơn vị Đo lường Thường gặp & Cách Đọc
- **Nm**: *Newton-meter* (đơn vị lực siết: *85 Nm = eighty-five Newton-meters*)
- **bar / PSI**: *bar / Pounds per square inch* (áp suất: *6 bar = six bar; 90 PSI*)
- **L/min**: *Liters per minute* (lưu lượng: *120 L/min*)
- **kW / HP**: *Kilowatts / Horsepower* (công suất: *15 kW = fifteen kilowatts*)
- **°C / °F**: *Degrees Celsius / Degrees Fahrenheit* (nhiệt độ)`,
  listening: {
    audio_prompt: "Listen to the maintenance lead consulting an OEM manual before tightening cylinder head bolts.",
    transcript: `Lead: Minh, do not tighten those cylinder head bolts with an impact wrench!
Minh: Why not? The impact gun is much faster.
Lead: Check page 28 of the technical manual. The bolt torque specification is strictly 65 Newton-meters in a cross-pattern sequence. If you over-torque, the aluminum head will warp.
Minh: Let me see... You are right. It says: 'WARNING: Over-tightening causes irreversible thread damage.'
Lead: Exactly. Grab the calibrated torque wrench, set it to 65 Nm, and tighten bolts 1 through 8 in the diagonal order shown in Figure 4.
Minh: Understood. I will use the torque wrench now.`,
    questions: [
      {
        question: "Why does the lead technician stop Minh from using an impact wrench?",
        options: [
          "Because the battery is dead",
          "Because the manual specifies 65 Nm torque in a cross-pattern to prevent warping",
          "Because impact wrenches are forbidden in the factory"
        ],
        answer: 1,
        explanation: "Lead nói: 'The bolt torque specification is strictly 65 Newton-meters in a cross-pattern sequence. If you over-torque, the aluminum head will warp.'"
      },
      {
        question: "What warning is written on page 28 of the manual?",
        options: [
          "Over-tightening causes irreversible thread damage",
          "Always wash bolts with soap",
          "Bolts are optional"
        ],
        answer: 0,
        explanation: "Minh đọc: 'WARNING: Over-tightening causes irreversible thread damage.'"
      }
    ]
  },
  speaking: {
    prompt: "Đọc to các thông số kỹ thuật của một máy bơm từ bảng Manual specs.",
    target_sentence: "The maximum operating pressure is 10 bar, the flow rate is 150 liters per minute, and bolt torque is 45 Nm.",
    substitution_drill: [
      { cue: "motor / 22 kW / 1450 RPM", sentence: "The motor power is 22 kilowatts at 1450 RPM." },
      { cue: "temperature / 75°C / oil viscosity 46", sentence: "Maximum operating temperature is 75 degrees Celsius with ISO VG 46 oil." }
    ],
    sample_answer: "According to the manual, the air compressor operates at 8 bar. The recommended oil change interval is 2000 operating hours. Tighten all flange bolts to 50 Newton-meters.",
    self_check: [
      "Tôi đã phát âm đúng đơn vị 'Newton-meters' (/ˈnjuː.tən ˌmiː.təz/) chưa?",
      "Tôi đã phân biệt được giữa DANGER và CAUTION chưa?"
    ]
  },
  reading: {
    text: `TECHNICAL SPECIFICATION EXTRACT: MODEL CR-45 CENTRIFUGAL PUMP
Manufacturer: FlowTech Industrial Systems

1. OPERATING PARAMETERS:
- Maximum Working Pressure: 16 bar (232 PSI)
- Rated Discharge Flow: 180 m³/h at 2900 RPM
- Allowable Fluid Temperature: -10°C to +110°C
- Mechanical Seal Type: Cartridge balanced SiC/SiC

2. BOLT TORQUE SPECIFICATIONS (ISO Grade 8.8):
- Casing Bolts (M16): 120 Nm ± 5 Nm
- Flange Bolts (M20): 210 Nm ± 10 Nm
- Impeller Nut: 85 Nm (Apply Loctite 243 threadlocker)

3. SAFETY WARNING:
DANGER: Hazardous Voltage and High Pressure.
Disconnect and lock out electrical power before removing the coupling guard. Depressurize the casing by opening drain valve V-2 before disassembling mechanical seal. Never run the pump dry. Dry running will destroy the silicon carbide seal faces within 30 seconds.`,
    translation: `TRÍCH ĐOẠN THÔNG SỐ KỸ THUẬT: MÁY BƠM LY TÂM MODEL CR-45
Nhà sản xuất: FlowTech Industrial Systems

1. CÁC THÔNG SỐ VẬN HÀNH:
- Áp suất làm việc tối đa: 16 bar (232 PSI)
- Lưu lượng xả định mức: 180 m³/h ở 2900 vòng/phút
- Nhiệt độ chất lỏng cho phép: -10°C đến +110°C
- Loại phớt cơ khí: Cartridge cân bằng SiC/SiC

2. QUY CÁCH LỰC SIẾT BU-LÔNG (Cấp bền ISO 8.8):
- Bu-lông thân vỏ (M16): 120 Nm ± 5 Nm
- Bu-lông mặt bích (M20): 210 Nm ± 10 Nm
- Đai ốc cánh bơm: 85 Nm (Sử dụng keo khóa ren Loctite 243)

3. CẢNH BÁO AN TOÀN:
NGUY HIỂM: Điện áp nguy hiểm và Áp suất cao.
Ngắt và khóa cô lập nguồn điện trước khi tháo tấm chắn khớp nối. Xả áp trong thân bơm bằng cách mở van xả V-2 trước khi tháo rời phớt cơ khí. Tuyệt đối không để bơm chạy khô. Chạy khô sẽ phá hủy các mặt chà phớt silicon carbide trong vòng 30 giây.`,
    questions: [
      {
        question: "What will happen if the pump is run dry according to the DANGER warning?",
        options: [
          "It will save electricity",
          "Dry running will destroy the silicon carbide seal faces within 30 seconds",
          "The water will freeze"
        ],
        answer: 1,
        explanation: "Cảnh báo DANGER nêu: 'Never run the pump dry. Dry running will destroy the silicon carbide seal faces within 30 seconds.'"
      },
      {
        question: "What is the specified torque for the M16 casing bolts?",
        options: ["210 Nm", "120 Nm ± 5 Nm", "85 Nm", "16 Nm"],
        answer: 1,
        explanation: "Mục 2 ghi rõ: 'Casing Bolts (M16): 120 Nm ± 5 Nm'."
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["to", "Refer", "the", "manual.", "manufacturer"], solution: "Refer to the manufacturer manual.", hint: "Refer to..." },
      { words: ["is", "torque", "85", "Nm.", "The", "required"], solution: "The required torque is 85 Nm.", hint: "The required torque is..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Tighten the flange bolts using a calibrated _______ (cờ lê cân lực/lực siết).", answer: "torque wrench", hint: "torque w_____" },
      { sentence_with_blank: "Maximum operating _______ (áp suất) is 16 bar.", answer: "pressure", hint: "p-r-e-s-s-u-r-e" }
    ],
    translation: [
      { vietnamese: "Vui lòng đọc kỹ sổ tay hướng dẫn trước khi lắp đặt.", model_answer: "Please read the manual carefully before installation.", explanation: "Please read the manual carefully before installation." },
      { vietnamese: "Lực siết bu-lông phải tuân theo đúng thông số kỹ thuật.", model_answer: "Bolt torque must follow the technical specifications.", explanation: "Bolt torque must follow the technical specifications." }
    ]
  },
  quiz: [
    {
      question: "Ký hiệu 'DANGER' trong hướng dẫn kỹ thuật chỉ mức độ nguy hiểm nào?",
      options: [
        "Mức độ nhẹ, chỉ làm bẩn áo",
        "Mức cao nhất, có thể gây tử vong hoặc thương tật nghiêm trọng ngay lập tức",
        "Thông báo về giờ ăn trưa",
        "Khuyến khích làm theo nếu thích"
      ],
      answer: 1,
      explanation: "DANGER là mức độ cảnh báo cao nhất (nguy cơ tử vong hoặc thương tật nghiêm trọng)."
    },
    {
      question: "Đơn vị 'Nm' (Newton-meter) dùng để đo đại lượng nào?",
      options: ["Nhiệt độ", "Mô-men xoắn / lực siết bu-lông", "Khối lượng", "Thể tích nước"],
      answer: 1,
      explanation: "Nm là đơn vị đo mô-men xoắn (torque)."
    },
    {
      question: "Cụm từ 'run the pump dry' có nghĩa là:",
      options: [
        "Chạy bơm ngoài trời nắng",
        "Chạy bơm khi không có chất lỏng bên trong buồng bơm (chạy khô)",
        "Dùng máy sấy khô bơm",
        "Sơn lót chống ẩm"
      ],
      answer: 1,
      explanation: "Running dry = vận hành bơm khi buồng bơm rỗng, không có chất lỏng bôi trơn/làm mát."
    },
    {
      question: "Để siết bu-lông đúng lực quy định, người thợ phải dùng dụng cụ nào?",
      options: ["Kìm bấm", "Búa tạ", "Cờ lê lực (Torque wrench)", "Tua vít dẹp"],
      answer: 2,
      explanation: "Torque wrench (cờ lê cân lực) là dụng cụ bắt buộc để siết bu-lông đúng thông số Nm."
    },
    {
      question: "Mục 'Troubleshooting' trong sổ tay hướng dẫn dùng để làm gì?",
      options: [
        "Xem danh sách giá bán",
        "Tra cứu bảng hướng dẫn chẩn đoán và xử lý các sự cố thường gặp",
        "Đăng ký bảo hành online",
        "Giới thiệu lịch sử công ty"
      ],
      answer: 1,
      explanation: "Troubleshooting guide = hướng dẫn tìm nguyên nhân và khắc phục sự cố."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Hiểu rõ 4 cấp độ cảnh báo DANGER / WARNING / CAUTION / NOTICE.",
      "Luyện đọc các đơn vị kỹ thuật: bar, PSI, Nm, RPM, °C."
    ]
  }
};

// Milestone 6: Day 250
milestones[250] = {
  day: 250,
  month: 9,
  week: 36,
  title: "Cột mốc Hội họp 1: Họp Giải quyết Vấn đề & Cuộc họp An toàn (Safety Meeting)",
  topic_en: "Problem solving meetings, expressing opinions, and proposing corrective actions",
  level: "B1",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Tham gia tích cực vào một cuộc họp an toàn (Toolbox Meeting) hoặc giải quyết sự cố kỹ thuật.",
    "Bày tỏ ý kiến một cách chuyên nghiệp: I think, In my opinion, I suggest that, From my perspective.",
    "Đồng ý và phản đối lịch sự: I completely agree, I see your point but, That might not work because.",
    "Đề xuất biện pháp khắc phục (Corrective & Preventive Actions - CAPA) theo phương pháp 5 Whys."
  ],
  new_vocab: [
    { en: "agenda", vi: "chương trình cuộc họp, nội dung nghị sự", ipa: "/əˈdʒen.də/", example: "Today's agenda covers three recurring defects.", collocation: "meeting agenda" },
    { en: "root cause", vi: "nguyên nhân gốc rễ", ipa: "/ruːt kɔːz/", example: "We must identify the root cause before replacing parts.", collocation: "root cause analysis" },
    { en: "propose", vi: "đề xuất, kiến nghị", ipa: "/prəˈpəʊz/", example: "I propose installing an interlock safety gate.", collocation: "propose a solution" },
    { en: "corrective action", vi: "hành động khắc phục", ipa: "/kəˈrek.tɪv ˈæk.ʃən/", example: "The corrective action must be completed by Friday.", collocation: "implement corrective action" },
    { en: "agree", vi: "đồng ý, tán thành", ipa: "/əˈɡriː/", example: "I agree with Alex's assessment.", collocation: "completely agree" },
    { en: "disagree", vi: "không đồng ý, phản đối", ipa: "/ˌdɪs.əˈɡriː/", example: "I politely disagree because the cost is too high.", collocation: "politely disagree" },
    { en: "opinion", vi: "quan điểm, ý kiến", ipa: "/əˈpɪn.jən/", example: "In my opinion, preventive greasing will solve this.", collocation: "in my opinion" },
    { en: "action item", vi: "hạng mục hành động cần làm", ipa: "/ˈæk.ʃən ˌaɪ.təm/", example: "Assign each action item to a responsible person.", collocation: "assign action item" }
  ],
  review_vocab: ["problem", "hazard", "replace", "inspect", "safe", "dangerous", "because", "so", "must"],
  grammar_vi: `### 1. Mẫu câu Bày tỏ Quan điểm & Đề xuất trong Cuộc họp Kỹ thuật
- **Nêu quan điểm cá nhân**:
  - *In my opinion, ...* (Theo ý kiến của tôi, ...)
  - *From my perspective, ...* (Theo góc nhìn của tôi, ...)
  - *I believe the main cause is ...* (Tôi tin rằng nguyên nhân chính là ...)
- **Đề xuất giải pháp**:
  - *I suggest that we [verb nguyên mẫu] ...* (Tôi đề xuất chúng ta nên ...)
  - *Why don't we [verb nguyên mẫu] ...?* (Tại sao chúng ta không ...?)
  - *I propose installing a backup sensor.* (Tôi đề xuất lắp cảm biến dự phòng.)

### 2. Đồng ý & Phản đối Lịch sự (Agreeing & Disagreeing Professionally)
- **Đồng ý hoàn toàn**:
  - *I completely agree with that point.* (Tôi hoàn toàn đồng tình với điểm đó.)
  - *That makes total sense.* (Điều đó hoàn toàn hợp lý.)
- **Phản đối lịch sự (Đưa lý do phản biện)**:
  - *I see your point, but [nêu lý do] ...* (Tôi hiểu ý bạn, nhưng ...)
  - *I am not sure about that because [nêu lý do] ...* (Tôi không chắc về điều đó vì ...)`,
  listening: {
    audio_prompt: "Listen to a cross-functional problem solving meeting discussing recurring conveyor stoppages.",
    transcript: `Chairman: Welcome everyone. Item 1 on our agenda is the recurring chain jam on Conveyor Line 3. Over the past week, it jammed four times. What is the root cause?
Production Lead: In my opinion, the operators are overloading the trays.
Maintenance Lead: I see your point, John, but our data shows the jams also happen during light loads. We inspected the drive sprocket yesterday and found severe tooth wear.
Chairman: Good insight. So the root cause is mechanical wear, not operator overloading. What do you propose as a permanent corrective action?
Maintenance Lead: I propose replacing both drive sprockets and upgrading to hardened alloy steel. We should also install an automatic chain oiler.
Chairman: I completely agree. Let's make that Action Item 1. David, please issue the purchase requisition today.
David: Consider it done.`,
    questions: [
      {
        question: "What did the maintenance inspection reveal about the conveyor jam root cause?",
        options: [
          "Operator overloading exclusively",
          "Severe tooth wear on the drive sprocket",
          "Electrical power blackouts"
        ],
        answer: 1,
        explanation: "Maintenance Lead nêu: 'We inspected the drive sprocket yesterday and found severe tooth wear.'"
      },
      {
        question: "What corrective action was proposed and approved by the chairman?",
        options: [
          "Fining the operators",
          "Replacing drive sprockets with hardened alloy steel and installing an automatic chain oiler",
          "Shutting down the factory forever"
        ],
        answer: 1,
        explanation: "Maintenance Lead đề xuất: 'replacing both drive sprockets and upgrading to hardened alloy steel... install an automatic chain oiler.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành phát biểu ý kiến và đề xuất giải pháp trong cuộc họp an toàn đầu ca.",
    target_sentence: "In my opinion, we should install caution mirrors at the blind intersection to prevent forklift collisions.",
    substitution_drill: [
      { cue: "propose / replace worn hoses", sentence: "I propose replacing all worn hydraulic hoses during this weekend shutdown." },
      { cue: "see your point / but need budget", sentence: "I see your point, but we need manager approval for this budget." }
    ],
    sample_answer: "Good morning team. In my opinion, the recent near miss occurred because lighting in Warehouse B is insufficient. I suggest that we install four LED floodlights this week.",
    self_check: [
      "Tôi đã dùng cấu trúc 'In my opinion' hoặc 'I propose' một cách tự tin chưa?",
      "Tôi đã phát âm đúng từ 'propose' (/prəˈpəʊz/) và 'agenda' (/əˈdʒen.də/) chưa?"
    ]
  },
  reading: {
    text: `MINUTES OF THE MONTHLY SAFETY & RELIABILITY COMMITTEE MEETING
Date: October 24, 2026 | Location: Conference Room 2
Chair: Robert Davis (SHE Director) | Secretary: Lan Nguyen

AGENDA ITEMS REVIEWED:
1. Review of Open Action Items from September Meeting:
- Item 09-01: Installation of machine guards on Mixer 4 is 100% complete and verified.
- Item 09-02: PPE compliance audit conducted: earplug usage reached 96%.

2. Incident Investigation (5 Whys Analysis):
- Problem: Hydraulic oil leak on Press Line 2 on Oct 18th.
- Why 1: Hose ruptured under pressure.
- Why 2: Hose was rubbing against a sharp metal frame.
- Why 3: Clamp bracket was missing.
- Why 4: Previous repair team did not reinstall the bracket.
- Why 5: Lack of post-maintenance verification checklist.

3. AGREED CORRECTIVE ACTIONS (CAPA):
- CAPA 10-01: Implement a mandatory 'Independent Quality Inspection' sign-off before machine release. Assigned to: Maintenance Supervisor (Due: Nov 5).
- CAPA 10-02: Inspect all pressurized hoses across the facility for chafing. Assigned to: Mechanical Team (Due: Oct 31).`,
    translation: `BIÊN BẢN CUỘC HỌP BAN AN TOÀN & ĐỘ TIN CẬY HÀNG THÁNG
Ngày: 24/10/2026 | Địa điểm: Phòng họp 2
Chủ tọa: Robert Davis (Giám đốc SHE) | Thư ký: Lan Nguyen

CÁC NỘI DUNG NGHỊ SỰ ĐÃ XEM XÉT:
1. Rà soát các hạng mục hành động còn mở từ cuộc họp tháng 9:
- Hạng mục 09-01: Lắp đặt che chắn an toàn máy trên Máy trộn 4 đã hoàn thành 100% và được nghiệm thu.
- Hạng mục 09-02: Đánh giá tuân thủ PPE: tỷ lệ đeo nút tai chống ồn đạt 96%.

2. Điều tra sự cố (Phương pháp phân tích 5 Tại sao - 5 Whys):
- Vấn đề: Rò rỉ dầu thủy lực trên Máy ép 2 ngày 18/10.
- Tại sao 1: Ống mềm bị vỡ dưới áp suất cao.
- Tại sao 2: Ống bị cọ xát vào khung kim loại sắc nhọn.
- Tại sao 3: Thiếu đai kẹp cố định ống.
- Tại sao 4: Đội sửa chữa trước đó không lắp lại đai kẹp.
- Tại sao 5: Thiếu quy trình checklist kiểm tra độc lập sau bảo trì.

3. HÀNH ĐỘNG KHẮC PHỤC ĐÃ THỐNG NHẤT (CAPA):
- CAPA 10-01: Áp dụng ký xác nhận 'Kiểm tra Chất lượng Độc lập' bắt buộc trước khi bàn giao máy. Phân công: Giám sát bảo trì (Hạn: 05/11).
- CAPA 10-02: Kiểm tra toàn bộ đường ống chịu áp trên toàn nhà máy xem có bị cọ xát không. Phân công: Đội Cơ khí (Hạn: 31/10).`,
    questions: [
      {
        question: "According to the 5 Whys analysis, what was the root cause (Why 5) of the hydraulic leak?",
        options: [
          "Bad weather",
          "Lack of a post-maintenance verification checklist",
          "Operator error"
        ],
        answer: 1,
        explanation: "Biên bản nêu: 'Why 5: Lack of post-maintenance verification checklist.'"
      },
      {
        question: "What is CAPA 10-01 assigned to the Maintenance Supervisor?",
        options: [
          "Buy new office chairs",
          "Implement mandatory Independent Quality Inspection sign-off before machine release",
          "Cancel all future meetings"
        ],
        answer: 1,
        explanation: "Mục CAPA 10-01 ghi rõ: 'Implement a mandatory Independent Quality Inspection sign-off before machine release.'"
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["opinion,", "In", "the", "my", "pump", "is", "worn."], solution: "In my opinion, the pump is worn.", hint: "In my opinion..." },
      { words: ["propose", "I", "a", "sensor.", "new", "installing"], solution: "I propose installing a new sensor.", hint: "I propose installing..." }
    ],
    fill_blank: [
      { sentence_with_blank: "I see your point, _______ (nhưng) we must consider safety first.", answer: "but", hint: "Chỉ sự phản biện lịch sự." },
      { sentence_with_blank: "We must find the _______ (nguyên nhân gốc rễ) of this failure.", answer: "root cause", hint: "root c____" }
    ],
    translation: [
      { vietnamese: "Theo ý kiến của tôi, chúng ta nên thay thế các bu-lông này.", model_answer: "In my opinion, we should replace these bolts.", explanation: "In my opinion, we should replace these bolts." },
      { vietnamese: "Tôi hoàn toàn đồng ý với giải pháp của bạn.", model_answer: "I completely agree with your solution.", explanation: "I completely agree with your solution." }
    ]
  },
  quiz: [
    {
      question: "Cụm từ chuyên nghiệp nào dùng để nêu ý kiến cá nhân trong cuộc họp?",
      options: ["You are wrong,", "In my opinion,", "Shut up and listen,", "I don't care,"],
      answer: 1,
      explanation: "'In my opinion,' là cách nêu quan điểm lịch sự và chuyên nghiệp."
    },
    {
      question: "Phương pháp phân tích sự cố '5 Whys' nhằm mục đích gì?",
      options: [
        "Hỏi 5 câu ngẫu nhiên để giải trí",
        "Tìm ra nguyên nhân gốc rễ (root cause) sâu xa của vấn đề",
        "Đếm số lượng công nhân",
        "Tìm người để phạt tiền"
      ],
      answer: 1,
      explanation: "5 Whys là công cụ cốt lõi trong kỹ thuật để truy tìm Root Cause."
    },
    {
      question: "Thuật ngữ CAPA trong quản lý chất lượng và an toàn là viết tắt của:",
      options: [
        "Car And Plane Association",
        "Corrective And Preventive Actions",
        "Central Automatic Power Alarm",
        "Company Annual Profit Account"
      ],
      answer: 1,
      explanation: "CAPA = Corrective And Preventive Actions (Hành động khắc phục và phòng ngừa)."
    },
    {
      question: "Để phản đối một ý kiến trong cuộc họp mà vẫn giữ được sự tôn trọng, bạn nên nói:",
      options: [
        "That is stupid.",
        "I see your point, but let's consider another factor.",
        "You know nothing.",
        "I hate this idea."
      ],
      answer: 1,
      explanation: "'I see your point, but...' ghi nhận ý kiến đối phương trước khi đưa ra phản biện."
    },
    {
      question: "Cụm từ 'Action item' trong biên bản cuộc họp có nghĩa là:",
      options: [
        "Trò chơi hành động",
        "Hạng mục công việc cụ thể được giao cho người chịu trách nhiệm thực hiện",
        "Món quà lưu niệm",
        "Món ăn nhẹ trong giờ giải lao"
      ],
      answer: 1,
      explanation: "Action item = đầu việc cụ thể cần thực hiện sau cuộc họp."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Luyện cấu trúc 'In my opinion, we should...' và 'I propose...'.",
      "Thực hành giải thích phương pháp 5 Whys bằng tiếng Anh."
    ]
  }
};

// Milestone 7: Day 280
milestones[280] = {
  day: 280,
  month: 10,
  week: 40,
  title: "Cột mốc Khẩn cấp: Đàm thoại Bộ đàm & Ứng phó Sự cố (Emergency Radio)",
  topic_en: "Emergency radio protocol, phonetic alphabet, Mayday, and evacuation communication",
  level: "B1",
  estimated_minutes: 55,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Sử dụng chuẩn mực đàm thoại bộ đàm hai chiều (Two-Way Radio Protocol): Over, Out, Copy that, Say again, Stand by.",
    "Báo cáo tình huống khẩn cấp: Hỏa hoạn (Fire), Rò rỉ hóa chất (Chemical spill), Thương tích (Medical emergency).",
    "Sử dụng bảng chữ cái ngữ âm NATO (Phonetic Alphabet: Alpha, Bravo, Charlie...) khi đánh vần mã thiết bị và vị trí khẩn cấp.",
    "Hiểu quy trình sơ tán khẩn cấp (Evacuation procedure) và tập kết tại Assembly Point."
  ],
  new_vocab: [
    { en: "radio", vi: "máy bộ đàm hai chiều", ipa: "/ˈreɪ.di.əʊ/", example: "Switch your two-way radio to Channel 1.", collocation: "two-way radio" },
    { en: "copy that", vi: "rõ, đã nhận thông tin (thuật ngữ bộ đàm)", ipa: "/ˈkɒp.i ðæt/", example: "Copy that, proceeding to Building B.", collocation: "copy that" },
    { en: "over", vi: "hết lượt nói (chờ đối phương đáp)", ipa: "/ˈəʊ.vər/", example: "What is your current location? Over.", collocation: "over and out" },
    { en: "evacuate", vi: "sơ tán khẩn cấp", ipa: "/ɪˈvæk.ju.eɪt/", example: "Evacuate the building through Exit 2.", collocation: "evacuate immediately" },
    { en: "assembly point", vi: "điểm tập kết khẩn cấp", ipa: "/əˈsem.bli pɔɪnt/", example: "Gather at Assembly Point Alpha.", collocation: "designated assembly point" },
    { en: "chemical spill", vi: "sự cố tràn đổ hóa chất", ipa: "/ˈkem.ɪ.kəl spɪl/", example: "Contain the acid chemical spill immediately.", collocation: "contain a spill" },
    { en: "casualty", vi: "người bị thương vong", ipa: "/ˈkæʒ.ju.əl.ti/", example: "Report shows one casualty with an ankle sprain.", collocation: "zero casualties" },
    { en: "stand by", vi: "chờ một chút, giữ máy", ipa: "/stænd baɪ/", example: "Stand by while I contact emergency services.", collocation: "stand by on channel" }
  ],
  review_vocab: ["emergency", "dangerous", "safe", "fire", "exit", "door", "must", "stop", "report"],
  grammar_vi: `### 1. Thuật ngữ Chuẩn mực khi Đàm thoại Bộ đàm (Radio Etiquette)
- **ROGER / COPY THAT**: Tôi đã hiểu rõ mệnh lệnh/thông điệp của bạn.
- **SAY AGAIN**: Yêu cầu đối phương nhắc lại (tuyệt đối KHÔNG nói *"repeat"* trong vô tuyến quân sự/công nghiệp).
- **OVER**: Tôi đã nói xong phần của tôi, mời bạn trả lời.
- **OUT**: Kết thúc hoàn toàn cuộc đàm thoại, không cần trả lời.
- **STAND BY**: Vui lòng chờ trên kênh, tôi đang kiểm tra hoặc bận vài giây.
- **AFFIRMATIVE**: Đúng / Có (thay cho *"yes"* vì sóng rè khó nghe).
- **NEGATIVE**: Sai / Không (thay cho *"no"*).

### 2. Mẫu câu Báo cáo Khẩn cấp 3C (Clear - Concise - Calm)
- *"Emergency, Emergency, Emergency. This is [Tên bạn] at [Vị trí]."*
- *"We have a [loại sự cố: fire / chemical spill / injured worker]."*
- *"Exact location is [Building / Line / Floor]."*
- *"Send the emergency response team immediately. Over."*`,
  listening: {
    audio_prompt: "Listen to an urgent two-way radio transmission during a chemical drum puncture in the warehouse.",
    transcript: `Technician: Emergency, Emergency! Control Room, this is Technician Minh at Warehouse Bravo, do you copy? Over.
Control Room: Control Room copies you Minh. State your emergency. Over.
Technician: A forklift punctured a 200-liter drum of solvent at Bay Charlie-4. We have a severe chemical spill and strong vapor fumes. No casualties so far. Over.
Control Room: Copy that Minh: 200-liter solvent spill at Bay Charlie-4, no casualties. Is the area isolated? Over.
Technician: Affirmative. I am evacuating all personnel toward Assembly Point 1 right now. We need the Hazardous Spill Response Team and foam extinguishers immediately. Over.
Control Room: Understood Minh. Spill team is dispatched. Stand by on Channel 3. Control Room out.`,
    questions: [
      {
        question: "What is the emergency reported by Technician Minh?",
        options: [
          "A small water leak on the lawn",
          "A forklift punctured a 200-liter drum of solvent at Bay Charlie-4",
          "Someone lost their car keys"
        ],
        answer: 1,
        explanation: "Minh báo cáo: 'A forklift punctured a 200-liter drum of solvent at Bay Charlie-4. We have a severe chemical spill.'"
      },
      {
        question: "Where is Minh evacuating personnel to?",
        options: ["To the cafeteria", "Toward Assembly Point 1", "Home"],
        answer: 1,
        explanation: "Minh nói: 'evacuating all personnel toward Assembly Point 1 right now.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành đàm thoại bộ đàm báo cáo sự cố cháy nhỏ tại phòng máy nén khí.",
    target_sentence: "Control Room, this is Alex at Compressor Room. We have smoke detected on Unit 2. Area is evacuated. Over.",
    substitution_drill: [
      { cue: "water pipe burst / Workshop C", sentence: "Control Room, high-pressure water pipe burst in Workshop C. Stand by. Over." },
      { cue: "injured worker / need medical", sentence: "Medical emergency at Line 4. One worker injured. Dispatch first aid immediately. Over." }
    ],
    sample_answer: "Emergency, Emergency. This is Nam at Boiler Room. Steam leak detected at Valve 4. I have isolated the main line. No casualties. Evacuating to Assembly Point Alpha. Over.",
    self_check: [
      "Tôi đã dùng từ 'Over' khi kết thúc lượt nói chưa?",
      "Tôi đã dùng 'Say again' thay vì 'repeat' khi không nghe rõ chưa?"
    ]
  },
  reading: {
    text: `FACILITY EMERGENCY RESPONSE PROCEDURE: CODE RED & CODE YELLOW
Standard Operating Procedure #EHS-SOP-99

1. CODE RED (FIRE / EXPLOSION HAZARD):
Upon discovering flame or dense smoke:
- Immediately activate the nearest manual fire alarm pull station.
- Broadcast on Radio Channel 1: 'Code Red, Code Red, [Location]'.
- If the fire is smaller than a wastebasket and you are trained, discharge an appropriate fire extinguisher (PASS technique: Pull, Aim, Squeeze, Sweep).
- If fire spreads, EVACUATE immediately. Do not use elevators. Proceed directly to your designated Assembly Point.

2. CODE YELLOW (HAZARDOUS MATERIAL RELEASE):
- Stop all hot work and shut down local ventilation intake dampers.
- Stay upwind and uphill of the chemical vapor cloud.
- Only certified HAZMAT personnel with self-contained breathing apparatus (SCBA) may enter the exclusion zone.
- Team leaders must conduct head counts at Assembly Points and report missing personnel within 3 minutes.`,
    translation: `QUY TRÌNH ỨNG PHÓ KHẨN CẤP NHÀ MÁY: MÃ ĐỎ & MÃ VÀNG
Quy trình vận hành tiêu chuẩn #EHS-SOP-99

1. MÃ ĐỎ (NGUY CƠ CHÁY / NỔ):
Khi phát hiện ngọn lửa hoặc khói đặc:
- Kích hoạt ngay trạm kéo báo cháy thủ công gần nhất.
- Phát thanh trên Kênh bộ đàm 1: 'Code Red, Code Red, [Vị trí]'.
- Nếu đám cháy nhỏ hơn thùng rác và bạn đã qua đào tạo, sử dụng bình chữa cháy thích hợp (Kỹ thuật PASS: Rút chốt, Hướng vòi, Bóp cò, Quét đều).
- Nếu đám cháy lan rộng, SƠ TÁN ngay lập tức. Không sử dụng thang máy. Đi thẳng đến Điểm tập kết quy định.

2. MÃ VÀNG (RÒ RỈ HÓA CHẤT NGUY HẠI):
- Dừng toàn bộ công việc phát sinh nhiệt và đóng van gió hút của hệ thống thông gió cục bộ.
- Luôn đứng ở vị trí đầu hướng gió và cao hơn đám mây hơi hóa chất.
- Chỉ nhân sự HAZMAT được cấp chứng chỉ mang mặt nạ dưỡng khí cách ly (SCBA) mới được vào vùng cấm.
- Các trưởng nhóm phải điểm danh quân số tại Điểm tập kết và báo cáo người mất tích trong vòng 3 phút.`,
    questions: [
      {
        question: "What should workers do regarding wind direction during a hazardous chemical release (Code Yellow)?",
        options: [
          "Run directly into the smoke cloud",
          "Stay upwind and uphill of the chemical vapor cloud",
          "Hide underground in the basement"
        ],
        answer: 1,
        explanation: "Quy trình nêu rõ: 'Stay upwind and uphill of the chemical vapor cloud.'"
      },
      {
        question: "What is the acronym for operating a portable fire extinguisher correctly?",
        options: ["FAST", "PASS (Pull, Aim, Squeeze, Sweep)", "LOTO", "STOP"],
        answer: 1,
        explanation: "Trong bài: 'PASS technique: Pull, Aim, Squeeze, Sweep'."
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["to", "Point.", "Evacuate", "Assembly", "the"], solution: "Evacuate to the Assembly Point.", hint: "Evacuate to..." },
      { words: ["channel.", "Stand", "by", "on", "this"], solution: "Stand by on this channel.", hint: "Stand by on..." }
    ],
    fill_blank: [
      { sentence_with_blank: "When you finish your radio transmission, say '_______' (hết lượt nói).", answer: "over", hint: "o-v-e-r" },
      { sentence_with_blank: "Gather all workers at the designated _______ (điểm tập kết).", answer: "assembly point", hint: "assembly p____" }
    ],
    translation: [
      { vietnamese: "Tôi đã nhận thông tin rõ, đang tiến về Tòa nhà B.", model_answer: "Copy that, proceeding to Building B.", explanation: "Copy that, proceeding to Building B." },
      { vietnamese: "Tất cả mọi người phải sơ tán ngay lập tức.", model_answer: "Everyone must evacuate immediately.", explanation: "Everyone must evacuate immediately." }
    ]
  },
  quiz: [
    {
      question: "Từ nào dùng trong đàm thoại bộ đàm khi bạn muốn đối phương nhắc lại vì nghe không rõ?",
      options: ["Repeat please", "Say again", "What did you say", "Pardon me"],
      answer: 1,
      explanation: "Trong chuẩn vô tuyến công nghiệp/quân sự, dùng 'Say again' ('repeat' bị cấm vì dễ nhầm lệnh bắn pháo)."
    },
    {
      question: "Thuật ngữ 'Assembly Point' có nghĩa là:",
      options: [
        "Nơi lắp ráp linh kiện",
        "Điểm tập kết sơ tán khẩn cấp an toàn",
        "Quầy cà phê",
        "Phòng thay đồ"
      ],
      answer: 1,
      explanation: "Assembly Point = Điểm tập hợp/tập kết khẩn cấp ngoài trời an toàn."
    },
    {
      question: "Từ nào mang nghĩa 'Đồng ý / Đúng' để tránh nhầm lẫn qua sóng vô tuyến?",
      options: ["Affirmative", "Negative", "Maybe", "Possibly"],
      answer: 0,
      explanation: "Affirmative = Đúng / Khẳng định (thay cho 'Yes')."
    },
    {
      question: "Khi có rò rỉ khí độc hóa chất, vị trí đứng an toàn nhất là:",
      options: [
        "Đứng dưới chân dốc và cuối hướng gió",
        "Đứng đầu hướng gió (upwind) và trên cao (uphill)",
        "Đứng sát nguồn rò rỉ để chụp ảnh",
        "Nằm sát mặt đất"
      ],
      answer: 1,
      explanation: "Luôn đứng đầu hướng gió (upwind) để tránh hít phải đám mây hơi độc."
    },
    {
      question: "Thuật ngữ 'Casualty' trong báo cáo tai nạn sự cố có nghĩa là:",
      options: ["Quần áo bảo hộ", "Người bị thương vong trong tai nạn", "Hóa đơn viện phí", "Thời gian hoàn thành"],
      answer: 1,
      explanation: "Casualty = thương vong / nạn nhân trong tai nạn."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Ghi nhớ các khẩu lệnh bộ đàm: Over, Out, Copy that, Say again, Affirmative, Negative.",
      "Thuộc quy tắc an toàn khi gặp sự cố cháy nổ và rò rỉ hóa chất."
    ]
  }
};

// Milestone 8: Day 315
milestones[315] = {
  day: 315,
  month: 11,
  week: 45,
  title: "Cột mốc Báo cáo Chuyên nghiệp: Viết Báo cáo Sự cố & Email Kỹ thuật",
  topic_en: "Writing professional incident investigation reports and technical workplace emails",
  level: "B1",
  estimated_minutes: 60,
  is_review_day: false,
  is_milestone: true,
  objectives: [
    "Viết một email kỹ thuật chuyên nghiệp hoàn chỉnh gửi quản lý hoặc nhà cung cấp thiết bị quốc tế.",
    "Nắm cấu trúc chuẩn của một Báo cáo Điều tra Sự cố Kỹ thuật (Incident Report): Executive Summary, Timeline, Root Cause, Damage Assessment, CAPA.",
    "Sử dụng ngôn phong trang trọng (formal tone): I am writing to inform you, Please find attached, We would appreciate your prompt response.",
    "Rà soát ngữ pháp, chính tả và số liệu kỹ thuật trước khi gửi tài liệu."
  ],
  new_vocab: [
    { en: "incident report", vi: "báo cáo điều tra sự cố", ipa: "/ˈɪn.sɪ.dənt rɪˈpɔːt/", example: "Submit the incident report within 24 hours.", collocation: "draft an incident report" },
    { en: "attached", vi: "được đính kèm (trong email/tài liệu)", ipa: "/əˈtætʃt/", example: "Please find attached the vibration spectrum.", collocation: "please find attached" },
    { en: "prompt", vi: "nhanh chóng, kịp thời", ipa: "/prɒmpt/", example: "Thank you for your prompt response.", collocation: "prompt response" },
    { en: "investigation", vi: "cuộc điều tra, thẩm tra", ipa: "/ɪnˌves.tɪˈɡeɪ.ʃən/", example: "The technical investigation is underway.", collocation: "incident investigation" },
    { en: "warranty", vi: "bảo hành (thiết bị)", ipa: "/ˈwɒr.ən.ti/", example: "The damaged motor is still under warranty.", collocation: "under warranty" },
    { en: "claim", vi: "yêu cầu bồi thường / khiếu nại", ipa: "/kleɪm/", example: "We filed a warranty claim with the supplier.", collocation: "warranty claim" },
    { en: "preventive", vi: "phòng ngừa, ngăn ngừa", ipa: "/prɪˈven.tɪv/", example: "Preventive measures are listed in section 4.", collocation: "preventive measures" },
    { en: "regarding", vi: "về việc, liên quan đến", ipa: "/rɪˈɡɑː.dɪŋ/", example: "I am writing regarding the delayed spare parts.", collocation: "writing regarding" }
  ],
  review_vocab: ["report", "supervisor", "damage", "replace", "repair", "safe", "because", "so", "took", "found"],
  grammar_vi: `### 1. Cấu trúc Chuẩn của một Email Kỹ thuật Chuyên nghiệp (Formal Workplace Email)
1. **Subject Line (Tiêu đề rõ ràng)**:
   - *[URGENT] Warranty Claim - Bearing Failure on Pump Model CR-45*
   - *Technical Inquiry: Replacement Parts for Line 3 Conveyor*
2. **Salutation (Lời chào trang trọng)**:
   - *Dear Mr. Davis,* / *Dear Technical Support Team,*
3. **Opening Sentence (Nêu lý do viết thư)**:
   - *I am writing to inform you about ...*
   - *I am writing regarding the unexpected shutdown on Line 2 ...*
4. **Body Paragraphs (Chi tiết sự việc, dữ liệu, phân tích)**:
   - *As discussed, ...* / *Please find attached the diagnostic log ...*
5. **Call to Action / Next Steps (Hành động mong đợi)**:
   - *Could you please arrange an on-site service technician by Tuesday?*
   - *We would appreciate your prompt response regarding the warranty replacement.*
6. **Sign-off (Lời kết chuyên nghiệp)**:
   - *Best regards,* / *Sincerely,* + [Họ tên, Chức vụ, Công ty].

### 2. Cấu trúc Câu Khách quan trong Báo cáo Sự cố (Passive Voice)
Khi báo cáo kỹ thuật, người ta thường dùng câu bị động để tăng tính khách quan:
- *The motor **was inspected** at 10 AM.* (Động cơ đã được kiểm tra lúc 10h.)
- *The broken seal **has been replaced**.* (Phớt hỏng đã được thay thế.)
- *No injuries **were reported**.* (Không có thương tích nào được ghi nhận.)`,
  listening: {
    audio_prompt: "Listen to the engineering manager reviewing a draft incident report with the lead technician.",
    transcript: `Manager: Alex, I reviewed your draft incident report for the boiler feedwater pump trip. The technical content is solid, but we need to refine the tone for the general manager.
Alex: What should I adjust, sir?
Manager: In section 2, instead of saying 'operator made a mistake', write: 'Procedure deviation: suction valve was closed prior to pump initialization'. It is more professional and objective.
Alex: Good point. What about the supplier warranty claim?
Manager: Add a formal email draft to the pump manufacturer in Germany. State that the pump was commissioned only three months ago, so it is fully covered under factory warranty. Request an urgent replacement mechanical seal under warranty terms.
Alex: Understood. I will revise the wording and attach the trend logs.`,
    questions: [
      {
        question: "Why did the manager ask Alex to rephrase 'operator made a mistake'?",
        options: [
          "To hide the incident from everyone",
          "To make the report more objective and professional: 'Procedure deviation: suction valve was closed prior to initialization'",
          "Because he wanted to blame the manager instead"
        ],
        answer: 1,
        explanation: "Manager nói: 'write: Procedure deviation: suction valve was closed prior to pump initialization. It is more professional and objective.'"
      },
      {
        question: "Why is the pump eligible for a warranty claim?",
        options: [
          "Because it was bought second-hand",
          "Because it was commissioned only three months ago and covered under factory warranty",
          "Because it has no warranty"
        ],
        answer: 1,
        explanation: "Manager giải thích: 'the pump was commissioned only three months ago, so it is fully covered under factory warranty.'"
      }
    ]
  },
  speaking: {
    prompt: "Thực hành tóm tắt một sự cố kỹ thuật trong 1 phút như khi báo cáo trước Ban Giám đốc.",
    target_sentence: "Yesterday at 3 PM, Line 2 tripped due to an electrical surge. The inverter was replaced, and production resumed at 6 PM.",
    substitution_drill: [
      { cue: "bearing seized / replaced in 2 hours", sentence: "The fan bearing seized at noon. Our team replaced it, taking two hours." },
      { cue: "steam leak / repaired joint / safe", sentence: "A minor steam leak was detected at 9 AM. We isolated the valve, repaired the gasket, and tested safe." }
    ],
    sample_answer: "Good afternoon. I am reporting on the Mixer 3 motor failure. The unit overheated due to a locked rotor. We isolated the breaker, installed a spare 45-kW motor, and verified zero vibration. Root cause analysis is underway.",
    self_check: [
      "Tôi đã nói ngắn gọn, đi thẳng vào nguyên nhân, hành động và kết quả chưa?",
      "Tôi đã phát âm chuẩn từ 'investigation' (/ɪnˌves.tɪˈɡeɪ.ʃən/) và 'incident' (/ˈɪn.sɪ.dənt/) chưa?"
    ]
  },
  reading: {
    text: `FORMAL TECHNICAL EMAIL SAMPLE:

Subject: [WARRANTY CLAIM] Premature Mechanical Seal Failure - Pump Tag P-204 (Serial #FT-2026-889)

Dear Customer Support Team at FlowTech Germany,

I am writing to officially report a premature mechanical seal failure on our Model CR-45 centrifugal pump (Serial No. FT-2026-889), installed at our Da Nang manufacturing facility.

The pump was commissioned on August 15, 2026, and operated for only 650 continuous hours under standard operating conditions (clear cooling water at 4 bar, 35°C). On October 22, the SiC/SiC cartridge seal experienced sudden catastrophic leakage.

Our preliminary technical investigation revealed no dry-running marks or shaft deflection. Therefore, we suspect a manufacturing defect in the silicon carbide seal face. 

As this equipment is well within the 24-month factory warranty period, we hereby submit a formal warranty claim. Please find attached:
1. Complete vibration and temperature trend logs prior to failure.
2. High-resolution photographs of the disassembled seal faces.
3. Original commissioning certificate.

We would appreciate your prompt review and dispatch of a replacement seal assembly (Part #MS-45-SiC) via air freight at your earliest convenience.

Sincerely,
Alex Nguyen
Senior Reliability Engineer | English Hub Plant Operations
Phone: +84-912-345-678 | Email: alex.nguyen@plant.vn`,
    translation: `MẪU EMAIL KỸ THUẬT TRANG TRỌNG:

Tiêu đề: [KHIẾU NẠI BẢO HÀNH] Hư hỏng Phớt Cơ khí Sớm - Mã Bơm P-204 (Số sê-ri #FT-2026-889)

Kính gửi: Bộ phận Chăm sóc Khách hàng FlowTech Đức,

Tôi viết thư này để chính thức báo cáo về sự cố hư hỏng phớt cơ khí sớm trên máy bơm ly tâm Model CR-45 của chúng tôi (Số sê-ri FT-2026-889), được lắp đặt tại nhà máy sản xuất ở Đà Nẵng.

Máy bơm được đưa vào vận hành ngày 15/08/2026 và mới chỉ hoạt động 650 giờ liên tục trong điều kiện vận hành tiêu chuẩn (nước làm mát sạch ở 4 bar, 35°C). Vào ngày 22/10, phớt cụm SiC/SiC bất ngờ bị rò rỉ nghiêm trọng.

Điều tra kỹ thuật sơ bộ của chúng tôi cho thấy không có dấu hiệu chạy khô hay lệch trục. Do đó, chúng tôi nghi ngờ có khuyết tật sản xuất trên mặt chà silicon carbide.

Do thiết bị này vẫn nằm trong thời hạn bảo hành nhà máy 24 tháng, chúng tôi xin chính thức gửi hồ sơ khiếu nại bảo hành. Vui lòng xem đính kèm:
1. Toàn bộ nhật ký xu hướng rung động và nhiệt độ trước khi xảy ra sự cố.
2. Ảnh chụp độ phân giải cao của các mặt phớt đã tháo rời.
3. Chứng nhận nghiệm thu ban đầu.

Chúng tôi rất mong nhận được phản hồi nhanh chóng và việc gửi cụm phớt thay thế (Mã #MS-45-SiC) qua đường hàng không sớm nhất có thể.

Trân trọng,
Alex Nguyen
Kỹ sư Độ tin cậy Cấp cao | Vận hành Nhà máy English Hub
Điện thoại: +84-912-345-678 | Email: alex.nguyen@plant.vn`,
    questions: [
      {
        question: "How many operating hours did the pump run before the seal failed?",
        options: ["10,000 hours", "Only 650 continuous hours", "Zero hours", "Five years"],
        answer: 1,
        explanation: "Thư nêu rõ: 'operated for only 650 continuous hours under standard operating conditions.'"
      },
      {
        question: "What documents did Alex attach to the warranty claim email?",
        options: [
          "A poem and music files",
          "Vibration/temperature trend logs, high-resolution photographs, and commissioning certificate",
          "Only a company logo"
        ],
        answer: 1,
        explanation: "Trong email có 3 mục đính kèm: trend logs, photos of disassembled seal, and commissioning certificate."
      }
    ]
  },
  writing: {
    unscramble: [
      { words: ["writing", "I", "to", "am", "the", "report", "incident."], solution: "I am writing to report the incident.", hint: "I am writing to..." },
      { words: ["find", "attached", "the", "Please", "report."], solution: "Please find attached the report.", hint: "Please find attached..." }
    ],
    fill_blank: [
      { sentence_with_blank: "Please find _______ (được đính kèm) the inspection report and photos.", answer: "attached", hint: "a-t-t-a-c-h-e-d" },
      { sentence_with_blank: "The equipment is still under manufacturer _______ (bảo hành).", answer: "warranty", hint: "w-a-r-r-a-n-t-y" }
    ],
    translation: [
      { vietnamese: "Tôi viết thư này để báo cáo về sự cố hỏng hóc máy bơm hôm qua.", model_answer: "I am writing to report the pump failure yesterday.", explanation: "I am writing to report the pump failure yesterday." },
      { vietnamese: "Chúng tôi rất mong nhận được phản hồi nhanh chóng của bạn.", model_answer: "We would appreciate your prompt response.", explanation: "We would appreciate your prompt response." }
    ]
  },
  quiz: [
    {
      question: "Câu mở đầu chuẩn mực và trang trọng cho email kỹ thuật là:",
      options: [
        "Hey you, answer me now!",
        "I am writing to inform you regarding...",
        "What's happening bro?",
        "Don't ignore this!"
      ],
      answer: 1,
      explanation: "'I am writing to inform you regarding...' là câu mở đầu email trang trọng tiêu chuẩn."
    },
    {
      question: "Khi gửi kèm tệp tin trong email, cụm từ tiếng Anh chuyên nghiệp nên dùng là:",
      options: [
        "Look at my files below:",
        "Please find attached...",
        "Click here right now:",
        "Files are somewhere:"
      ],
      answer: 1,
      explanation: "'Please find attached...' (Vui lòng xem tệp đính kèm) là quy chuẩn giao dịch quốc tế."
    },
    {
      question: "Từ 'prompt' trong cụm 'prompt response' có nghĩa là:",
      options: ["chậm trễ", "nhanh chóng, kịp thời", "tức giận", "miễn phí"],
      answer: 1,
      explanation: "Prompt = mau chóng, kịp thời."
    },
    {
      question: "Cụm từ 'under warranty' có nghĩa là:",
      options: [
        "Đang bị cảnh sát điều tra",
        "Còn trong thời hạn bảo hành",
        "Đã hết hạn sử dụng",
        "Đang sửa chữa mất tiền"
      ],
      answer: 1,
      explanation: "Under warranty = còn trong hạn bảo hành."
    },
    {
      question: "Tại sao trong báo cáo sự cố kỹ thuật người ta chuộng thể bị động (passive voice)?",
      options: [
        "Để làm câu dài hơn",
        "Để tăng tính khách quan khoa học, tập trung vào đối tượng kỹ thuật thay vì đổ lỗi cá nhân",
        "Vì không biết ai đã làm",
        "Vì ngữ pháp tiếng Anh bắt buộc"
      ],
      answer: 1,
      explanation: "Thể bị động giúp bản báo cáo mang tính khách quan, tập trung vào thiết bị và quy trình thay vì văn phong công kích cá nhân."
    }
  ],
  completion_criteria: {
    min_score: 80,
    action_items: [
      "Thuộc các cấu trúc mở đầu và kết thúc email chuyên nghiệp.",
      "Tự viết một email khiếu nại bảo hành hoặc thông báo sự cố kỹ thuật 5 câu."
    ]
  }
};

module.exports = milestones;
