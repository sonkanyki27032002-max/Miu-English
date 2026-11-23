// English Hub V1 - Reflex & Conversation Arena Scenarios
// Version: 2.1.0
// Comprehensive data: 105 Quick Response Drills, 30 Role-play Scenarios, 8 Shadowing Drills
(function(root) {
  const REFLEX_DATA = {
  "version": "2.1.0",
  "quick_drills": [
    {
      "id": "qr-01",
      "level": "beginner",
      "category": "general",
      "week": 1,
      "time_limit_seconds": 5,
      "prompt_en": "Good morning! How are you doing today?",
      "prompt_vi": "Chào buổi sáng! Hôm nay bạn thế nào?",
      "model_answers": [
        "Good morning! I am doing great, thank you.",
        "I am good, thanks. How about you?",
        "Good morning. Ready for work!"
      ],
      "keywords": [
        "good",
        "great",
        "fine",
        "ready",
        "thank",
        "you"
      ],
      "focus_vocab": "Greeting / Be: I am...",
      "tip": "Chào lại lịch sự và dùng câu ngắn rõ ràng."
    },
    {
      "id": "qr-02",
      "level": "beginner",
      "category": "general",
      "week": 1,
      "time_limit_seconds": 5,
      "prompt_en": "What is your name?",
      "prompt_vi": "Tên của bạn là gì?",
      "model_answers": [
        "My name is Nam.",
        "I am Alex Tran.",
        "My name is Minh. Nice to meet you."
      ],
      "keywords": [
        "name",
        "is",
        "am"
      ],
      "focus_vocab": "My name is [Name]",
      "tip": "Nói rõ tên hoặc dùng 'I am...'"
    },
    {
      "id": "qr-03",
      "level": "beginner",
      "category": "general",
      "week": 1,
      "time_limit_seconds": 5,
      "prompt_en": "What do you do?",
      "prompt_vi": "Bạn làm nghề gì?",
      "model_answers": [
        "I am a maintenance technician.",
        "I am an electrical engineer.",
        "I am a machine operator."
      ],
      "keywords": [
        "technician",
        "engineer",
        "operator",
        "am",
        "worker"
      ],
      "focus_vocab": "I am a/an [Job]",
      "tip": "Dùng mạo từ 'a' hoặc 'an' trước chức danh."
    },
    {
      "id": "qr-04",
      "level": "beginner",
      "category": "general",
      "week": 2,
      "time_limit_seconds": 5,
      "prompt_en": "Where are you from?",
      "prompt_vi": "Bạn đến từ đâu?",
      "model_answers": [
        "I am from Da Nang, Vietnam.",
        "I come from Hanoi.",
        "I am from Vietnam."
      ],
      "keywords": [
        "from",
        "vietnam",
        "hanoi",
        "danang",
        "come"
      ],
      "focus_vocab": "I am from [Place]",
      "tip": "Nêu tên thành phố hoặc quốc gia."
    },
    {
      "id": "qr-05",
      "level": "beginner",
      "category": "workplace",
      "week": 2,
      "time_limit_seconds": 5,
      "prompt_en": "Are you ready to work?",
      "prompt_vi": "Bạn đã sẵn sàng làm việc chưa?",
      "model_answers": [
        "Yes, I am ready.",
        "Yes, all set for the shift.",
        "Yes, let's start."
      ],
      "keywords": [
        "yes",
        "ready",
        "am",
        "start"
      ],
      "focus_vocab": "Yes/No with Be: Yes, I am.",
      "tip": "Trả lời khẳng định nhanh: 'Yes, I am ready.'"
    },
    {
      "id": "qr-06",
      "level": "beginner",
      "category": "workplace",
      "week": 3,
      "time_limit_seconds": 5,
      "prompt_en": "Could you repeat that, please?",
      "prompt_vi": "Bạn có thể nhắc lại câu đó được không?",
      "model_answers": [
        "Sure, I said the machine is running safely.",
        "Of course. Let me repeat it.",
        "Yes, no problem."
      ],
      "keywords": [
        "sure",
        "repeat",
        "course",
        "said",
        "yes"
      ],
      "focus_vocab": "Polite response: Sure / Of course",
      "tip": "Phản hồi lịch sự và lặp lại thông tin quan trọng."
    },
    {
      "id": "qr-07",
      "level": "beginner",
      "category": "technical",
      "week": 3,
      "time_limit_seconds": 5,
      "prompt_en": "What is this tool called in English?",
      "prompt_vi": "Dụng cụ này tiếng Anh gọi là gì?",
      "model_answers": [
        "It is an adjustable wrench.",
        "This is a digital multimeter.",
        "It is a flathead screwdriver."
      ],
      "keywords": [
        "is",
        "wrench",
        "screwdriver",
        "multimeter",
        "tool",
        "it"
      ],
      "focus_vocab": "This is a/an [Tool name]",
      "tip": "Gọi đúng tên dụng cụ kỹ thuật."
    },
    {
      "id": "qr-08",
      "level": "beginner",
      "category": "workplace",
      "week": 3,
      "time_limit_seconds": 5,
      "prompt_en": "Where is your hard hat?",
      "prompt_vi": "Mũ bảo hộ của bạn ở đâu?",
      "model_answers": [
        "It is in my locker.",
        "I am wearing it right now.",
        "It is on the workbench."
      ],
      "keywords": [
        "in",
        "on",
        "wearing",
        "locker",
        "workbench",
        "hat"
      ],
      "focus_vocab": "Preposition: in / on / under",
      "tip": "Nêu nhanh vị trí bằng giới từ in/on."
    },
    {
      "id": "qr-09",
      "level": "beginner",
      "category": "workplace",
      "week": 4,
      "time_limit_seconds": 5,
      "prompt_en": "What time do you start work?",
      "prompt_vi": "Mấy giờ bạn bắt đầu làm việc?",
      "model_answers": [
        "I start work at seven AM.",
        "My shift begins at eight o'clock.",
        "I start at 7:30 AM."
      ],
      "keywords": [
        "start",
        "at",
        "seven",
        "eight",
        "shift",
        "am"
      ],
      "focus_vocab": "At + Time: at 7 AM",
      "tip": "Dùng giới từ 'at' trước giờ giấc."
    },
    {
      "id": "qr-10",
      "level": "beginner",
      "category": "general",
      "week": 4,
      "time_limit_seconds": 5,
      "prompt_en": "Nice to meet you!",
      "prompt_vi": "Rất vui được gặp bạn!",
      "model_answers": [
        "Nice to meet you too!",
        "Pleasure to meet you.",
        "Glad to meet you as well."
      ],
      "keywords": [
        "nice",
        "meet",
        "you",
        "too",
        "pleasure"
      ],
      "focus_vocab": "Response: Nice to meet you too!",
      "tip": "Thêm 'too' vào cuối để đáp lại."
    },
    {
      "id": "qr-11",
      "level": "beginner",
      "category": "workplace",
      "week": 4,
      "time_limit_seconds": 5,
      "prompt_en": "Who is your shift supervisor?",
      "prompt_vi": "Ai là người giám sát ca của bạn?",
      "model_answers": [
        "Mr. David is my supervisor.",
        "My supervisor is Mr. Hung.",
        "It is Mr. Alex."
      ],
      "keywords": [
        "is",
        "supervisor",
        "mr",
        "david",
        "hung"
      ],
      "focus_vocab": "Subject + is + Name",
      "tip": "Nêu tên kèm chức danh Mr./Ms."
    },
    {
      "id": "qr-12",
      "level": "beginner",
      "category": "technical",
      "week": 5,
      "time_limit_seconds": 5,
      "prompt_en": "Is the machine running or stopped?",
      "prompt_vi": "Cỗ máy đang chạy hay đang dừng?",
      "model_answers": [
        "The machine is running smoothly.",
        "It is stopped for inspection.",
        "It is running normally."
      ],
      "keywords": [
        "running",
        "stopped",
        "is",
        "machine",
        "normal"
      ],
      "focus_vocab": "State: running / stopped",
      "tip": "Nêu rõ trạng thái vận hành."
    },
    {
      "id": "qr-13",
      "level": "beginner",
      "category": "general",
      "week": 5,
      "time_limit_seconds": 5,
      "prompt_en": "How do you spell your last name?",
      "prompt_vi": "Bạn đánh vần họ của bạn như thế nào?",
      "model_answers": [
        "It is N-G-U-Y-E-N.",
        "It is T-R-A-N.",
        "L-E, Le."
      ],
      "keywords": [
        "is",
        "it",
        "spelled"
      ],
      "focus_vocab": "Alphabet spelling",
      "tip": "Đánh vần từng chữ cái rõ ràng."
    },
    {
      "id": "qr-14",
      "level": "beginner",
      "category": "workplace",
      "week": 5,
      "time_limit_seconds": 5,
      "prompt_en": "Which shift are you on this week?",
      "prompt_vi": "Tuần này bạn làm ca nào?",
      "model_answers": [
        "I am on Shift 1 (morning shift).",
        "I work on Shift 2 this week.",
        "I am on the night shift."
      ],
      "keywords": [
        "shift",
        "morning",
        "night",
        "one",
        "two",
        "on"
      ],
      "focus_vocab": "On Shift [Number]",
      "tip": "Dùng giới từ 'on' + Shift."
    },
    {
      "id": "qr-15",
      "level": "beginner",
      "category": "technical",
      "week": 6,
      "time_limit_seconds": 5,
      "prompt_en": "Is this pump safe to use?",
      "prompt_vi": "Chiếc máy bơm này có an toàn để sử dụng không?",
      "model_answers": [
        "Yes, it is completely safe.",
        "No, it is under maintenance.",
        "Yes, it is inspected and safe."
      ],
      "keywords": [
        "yes",
        "safe",
        "no",
        "maintenance",
        "is"
      ],
      "focus_vocab": "Safe / Unsafe",
      "tip": "Trả lời dứt khoát về độ an toàn."
    },
    {
      "id": "qr-16",
      "level": "beginner",
      "category": "workplace",
      "week": 6,
      "time_limit_seconds": 5,
      "prompt_en": "Where is the emergency exit?",
      "prompt_vi": "Lối thoát hiểm khẩn cấp ở đâu?",
      "model_answers": [
        "It is next to the main gate.",
        "Turn left, it is at the end of the corridor.",
        "It is on the right side."
      ],
      "keywords": [
        "exit",
        "next",
        "left",
        "right",
        "door",
        "gate"
      ],
      "focus_vocab": "Location description",
      "tip": "Chỉ hướng đi cụ thể."
    },
    {
      "id": "qr-17",
      "level": "beginner",
      "category": "technical",
      "week": 6,
      "time_limit_seconds": 5,
      "prompt_en": "What color is the warning sign?",
      "prompt_vi": "Biển cảnh báo màu gì?",
      "model_answers": [
        "It is yellow with black text.",
        "The sign is red.",
        "It is bright orange."
      ],
      "keywords": [
        "yellow",
        "red",
        "color",
        "sign",
        "orange"
      ],
      "focus_vocab": "Colors: yellow, red, orange",
      "tip": "Nêu màu sắc chính xác."
    },
    {
      "id": "qr-18",
      "level": "beginner",
      "category": "general",
      "week": 7,
      "time_limit_seconds": 5,
      "prompt_en": "What day is today?",
      "prompt_vi": "Hôm nay là thứ mấy?",
      "model_answers": [
        "Today is Monday.",
        "It is Wednesday today.",
        "Today is Friday."
      ],
      "keywords": [
        "today",
        "is",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
      ],
      "focus_vocab": "Days of the week",
      "tip": "Nói đúng thứ trong tuần."
    },
    {
      "id": "qr-19",
      "level": "beginner",
      "category": "workplace",
      "week": 7,
      "time_limit_seconds": 5,
      "prompt_en": "Do you have your safety glasses?",
      "prompt_vi": "Bạn có mang kính bảo hộ không?",
      "model_answers": [
        "Yes, I have them on.",
        "Yes, they are right here.",
        "Yes, I am wearing them."
      ],
      "keywords": [
        "yes",
        "have",
        "wearing",
        "glasses"
      ],
      "focus_vocab": "Have / Wear",
      "tip": "Khẳng định đã trang bị kính."
    },
    {
      "id": "qr-20",
      "level": "beginner",
      "category": "technical",
      "week": 7,
      "time_limit_seconds": 5,
      "prompt_en": "How many bolts are there on this cover?",
      "prompt_vi": "Có bao nhiêu bu-lông trên nắp đậy này?",
      "model_answers": [
        "There are four bolts.",
        "There are six bolts.",
        "There are eight bolts on it."
      ],
      "keywords": [
        "there",
        "are",
        "bolts",
        "four",
        "six",
        "eight"
      ],
      "focus_vocab": "There are + Number",
      "tip": "Đếm số lượng số đếm chính xác."
    },
    {
      "id": "qr-21",
      "level": "beginner",
      "category": "general",
      "week": 8,
      "time_limit_seconds": 5,
      "prompt_en": "Can you speak more slowly, please?",
      "prompt_vi": "Bạn có thể nói chậm hơn một chút được không?",
      "model_answers": [
        "Yes, of course. I will speak slowly.",
        "Sure, no problem at all.",
        "Certainly. Let me slow down."
      ],
      "keywords": [
        "yes",
        "sure",
        "slowly",
        "speak",
        "course"
      ],
      "focus_vocab": "Polite agreement",
      "tip": "Đồng ý điều chỉnh tốc độ nói."
    },
    {
      "id": "qr-22",
      "level": "beginner",
      "category": "technical",
      "week": 8,
      "time_limit_seconds": 5,
      "prompt_en": "Is the power switch on or off?",
      "prompt_vi": "Công tắc nguồn đang bật hay tắt?",
      "model_answers": [
        "The power switch is OFF.",
        "It is currently ON.",
        "It is switched OFF for safety."
      ],
      "keywords": [
        "switch",
        "on",
        "off",
        "power",
        "is"
      ],
      "focus_vocab": "State: on / off",
      "tip": "Khẳng định rõ ràng ON hoặc OFF."
    },
    {
      "id": "qr-23",
      "level": "beginner",
      "category": "workplace",
      "week": 8,
      "time_limit_seconds": 5,
      "prompt_en": "Where can I wash my hands?",
      "prompt_vi": "Tôi có thể rửa tay ở đâu?",
      "model_answers": [
        "The washroom is down the hall on the left.",
        "The sink is right behind the workshop.",
        "Over there, next to the breakroom."
      ],
      "keywords": [
        "washroom",
        "sink",
        "left",
        "behind",
        "there"
      ],
      "focus_vocab": "Directions: left / right / behind",
      "tip": "Chỉ vị trí bồn rửa tay."
    },
    {
      "id": "qr-24",
      "level": "beginner",
      "category": "general",
      "week": 8,
      "time_limit_seconds": 5,
      "prompt_en": "Have a great shift!",
      "prompt_vi": "Chúc một ca làm việc tuyệt vời nhé!",
      "model_answers": [
        "Thank you! You too.",
        "Thanks, have a safe shift as well!",
        "Thank you very much."
      ],
      "keywords": [
        "thank",
        "you",
        "too",
        "safe",
        "thanks"
      ],
      "focus_vocab": "Social closing",
      "tip": "Cảm ơn và chúc lại."
    },
    {
      "id": "qr-25",
      "level": "beginner",
      "category": "workplace",
      "week": 8,
      "time_limit_seconds": 5,
      "prompt_en": "Is anyone working inside Tank 3?",
      "prompt_vi": "Có ai đang làm việc bên trong Bồn số 3 không?",
      "model_answers": [
        "No, nobody is inside.",
        "Yes, two technicians are working under permit.",
        "No, it is locked out."
      ],
      "keywords": [
        "no",
        "yes",
        "inside",
        "nobody",
        "working",
        "technician"
      ],
      "focus_vocab": "Confirmation of confined space",
      "tip": "Xác nhận ngay có người hay không."
    },
    {
      "id": "qr-26",
      "level": "elementary",
      "category": "workplace",
      "week": 9,
      "time_limit_seconds": 8,
      "prompt_en": "What do you do first when you arrive at the plant?",
      "prompt_vi": "Bạn làm gì đầu tiên khi đến nhà máy?",
      "model_answers": [
        "First, I clock in and put on all required PPE.",
        "I attend the five-minute safety briefing first.",
        "I inspect my personal locker and get my tools."
      ],
      "keywords": [
        "first",
        "clock",
        "ppe",
        "briefing",
        "safety",
        "put"
      ],
      "focus_vocab": "First, I [action]...",
      "tip": "Dùng từ nối thời gian 'First'."
    },
    {
      "id": "qr-27",
      "level": "elementary",
      "category": "technical",
      "week": 9,
      "time_limit_seconds": 8,
      "prompt_en": "Where is the 19-millimeter socket wrench?",
      "prompt_vi": "Cái cờ lê đầu tuýp 19 mm ở đâu?",
      "model_answers": [
        "It is inside the top drawer of the red toolbox.",
        "Minh is using it at Line 2 right now.",
        "It is hanging on the tool board on shelf B."
      ],
      "keywords": [
        "in",
        "toolbox",
        "drawer",
        "board",
        "shelf",
        "using"
      ],
      "focus_vocab": "Tool location",
      "tip": "Nêu cụ thể ngăn tủ hoặc người đang dùng."
    },
    {
      "id": "qr-28",
      "level": "elementary",
      "category": "she",
      "week": 10,
      "time_limit_seconds": 8,
      "prompt_en": "Can I enter this chemical room without a respirator?",
      "prompt_vi": "Tôi có thể vào phòng hóa chất này mà không đeo mặt nạ phòng độc không?",
      "model_answers": [
        "No, absolutely not. A respirator is mandatory here.",
        "Negative! You must wear a certified respirator before entering.",
        "No, toxic vapors are present inside."
      ],
      "keywords": [
        "no",
        "respirator",
        "mandatory",
        "must",
        "wear",
        "danger"
      ],
      "focus_vocab": "Prohibition: No, you must not...",
      "tip": "Từ chối dứt khoát vì lý do an toàn."
    },
    {
      "id": "qr-29",
      "level": "elementary",
      "category": "technical",
      "week": 10,
      "time_limit_seconds": 8,
      "prompt_en": "What does this blinking amber light mean?",
      "prompt_vi": "Đèn màu vàng nhấp nháy này có nghĩa là gì?",
      "model_answers": [
        "It indicates a warning that the filter is clogged.",
        "The blinking amber light means low oil level.",
        "It means the machine is in standby mode."
      ],
      "keywords": [
        "means",
        "indicates",
        "warning",
        "amber",
        "filter",
        "level"
      ],
      "focus_vocab": "Meaning: It means / indicates...",
      "tip": "Giải thích ý nghĩa cảnh báo."
    },
    {
      "id": "qr-30",
      "level": "elementary",
      "category": "workplace",
      "week": 11,
      "time_limit_seconds": 8,
      "prompt_en": "Could you help me lift this motor onto the bench?",
      "prompt_vi": "Bạn có thể giúp tôi nhấc động cơ này lên bàn làm việc được không?",
      "model_answers": [
        "Sure, let's lift together on the count of three.",
        "Certainly, let me put on my gloves first.",
        "Yes, be careful with your back."
      ],
      "keywords": [
        "sure",
        "lift",
        "together",
        "help",
        "careful"
      ],
      "focus_vocab": "Teamwork response",
      "tip": "Đồng ý hỗ trợ và nhắc nhở an toàn."
    },
    {
      "id": "qr-31",
      "level": "elementary",
      "category": "technical",
      "week": 11,
      "time_limit_seconds": 8,
      "prompt_en": "Did you check the oil level before starting the compressor?",
      "prompt_vi": "Bạn đã kiểm tra mức dầu trước khi khởi động máy nén khí chưa?",
      "model_answers": [
        "Yes, the oil level is right at the center mark.",
        "Yes, I verified the sight glass ten minutes ago.",
        "Not yet, let me check it immediately."
      ],
      "keywords": [
        "yes",
        "oil",
        "level",
        "checked",
        "sight",
        "glass"
      ],
      "focus_vocab": "Past verification: Yes, I checked...",
      "tip": "Xác nhận đã kiểm tra mắt thăm dầu."
    },
    {
      "id": "qr-32",
      "level": "elementary",
      "category": "she",
      "week": 12,
      "time_limit_seconds": 8,
      "prompt_en": "Why do we need to wear steel-toe boots in the workshop?",
      "prompt_vi": "Tại sao chúng ta phải đi giày mũi thép trong phân xưởng?",
      "model_answers": [
        "To protect our feet from falling heavy objects.",
        "Because heavy tools and steel parts can drop.",
        "It is a mandatory company safety rule."
      ],
      "keywords": [
        "protect",
        "feet",
        "falling",
        "objects",
        "heavy",
        "because"
      ],
      "focus_vocab": "Purpose: To protect...",
      "tip": "Dùng 'To protect...' để nêu mục đích."
    },
    {
      "id": "qr-33",
      "level": "elementary",
      "category": "workplace",
      "week": 12,
      "time_limit_seconds": 8,
      "prompt_en": "Can you hand me the digital caliper from the shelf?",
      "prompt_vi": "Bạn có thể đưa cho tôi thước cặp điện tử trên kệ được không?",
      "model_answers": [
        "Here you go. It is zeroed and ready.",
        "Sure, here is the caliper.",
        "Certainly, catch it carefully."
      ],
      "keywords": [
        "here",
        "you",
        "go",
        "caliper",
        "sure"
      ],
      "focus_vocab": "Giving something: Here you go.",
      "tip": "Đáp lại tự nhiên khi đưa đồ vật."
    },
    {
      "id": "qr-34",
      "level": "elementary",
      "category": "technical",
      "week": 13,
      "time_limit_seconds": 8,
      "prompt_en": "How often should we grease this bearing?",
      "prompt_vi": "Bao lâu thì chúng ta nên tra mỡ vào ổ bi này một lần?",
      "model_answers": [
        "We grease it once every two weeks.",
        "According to the manual, grease it every 500 operating hours.",
        "It should be greased once a month."
      ],
      "keywords": [
        "every",
        "once",
        "weeks",
        "month",
        "hours",
        "grease"
      ],
      "focus_vocab": "Frequency: once every...",
      "tip": "Nêu tần suất định kỳ."
    },
    {
      "id": "qr-35",
      "level": "elementary",
      "category": "she",
      "week": 13,
      "time_limit_seconds": 8,
      "prompt_en": "Caution! There is an oil puddle near the conveyor. What should we do?",
      "prompt_vi": "Cẩn thận! Có vũng dầu gần băng chuyền. Chúng ta nên làm gì?",
      "model_answers": [
        "Put up caution cones immediately and get the spill kit.",
        "Stop work and clean the oil before someone slips.",
        "Notify the lead and absorb the spill right away."
      ],
      "keywords": [
        "cones",
        "spill",
        "clean",
        "oil",
        "stop",
        "hazard"
      ],
      "focus_vocab": "Action plan for slip hazard",
      "tip": "Cô lập nguy cơ trượt ngã và xử lý."
    },
    {
      "id": "qr-36",
      "level": "elementary",
      "category": "workplace",
      "week": 14,
      "time_limit_seconds": 8,
      "prompt_en": "Are you finished with the torque wrench?",
      "prompt_vi": "Bạn đã dùng xong cờ lê cân lực chưa?",
      "model_answers": [
        "Yes, I just finished. You can take it now.",
        "Almost done, give me two more minutes.",
        "Yes, I zeroed the setting and cleaned it."
      ],
      "keywords": [
        "finished",
        "done",
        "take",
        "yes",
        "minutes"
      ],
      "focus_vocab": "Status confirmation",
      "tip": "Xác nhận trạng thái xong hay chưa."
    },
    {
      "id": "qr-37",
      "level": "elementary",
      "category": "technical",
      "week": 14,
      "time_limit_seconds": 8,
      "prompt_en": "Is this bolt metric or imperial size?",
      "prompt_vi": "Chiếc bu-lông này cỡ hệ mét hay hệ inch?",
      "model_answers": [
        "It is an M12 metric bolt with standard pitch.",
        "It is metric size.",
        "It is imperial, half-inch diameter."
      ],
      "keywords": [
        "metric",
        "m12",
        "imperial",
        "size",
        "bolt"
      ],
      "focus_vocab": "Specification clarification",
      "tip": "Nêu rõ hệ đo lường."
    },
    {
      "id": "qr-38",
      "level": "elementary",
      "category": "general",
      "week": 15,
      "time_limit_seconds": 8,
      "prompt_en": "Excuse me, where is the plant cafeteria?",
      "prompt_vi": "Xin lỗi, căng tin nhà máy ở đâu?",
      "model_answers": [
        "It is on the second floor of Building B.",
        "Walk straight past the warehouse and turn left.",
        "It is next to the main administration office."
      ],
      "keywords": [
        "floor",
        "building",
        "straight",
        "left",
        "cafeteria"
      ],
      "focus_vocab": "Giving plant directions",
      "tip": "Chỉ đường cụ thể trong khuôn viên."
    },
    {
      "id": "qr-39",
      "level": "elementary",
      "category": "she",
      "week": 15,
      "time_limit_seconds": 8,
      "prompt_en": "Why is this red tag attached to the circuit breaker?",
      "prompt_vi": "Tại sao lại có thẻ màu đỏ gắn vào áptômát này?",
      "model_answers": [
        "It is a LOTO tag; maintenance work is in progress.",
        "It means do not operate; someone is servicing the line.",
        "It indicates the breaker is locked out for safety."
      ],
      "keywords": [
        "loto",
        "tag",
        "locked",
        "maintenance",
        "operate",
        "safety"
      ],
      "focus_vocab": "Safety tag explanation",
      "tip": "Giải thích ý nghĩa thẻ LOTO đỏ."
    },
    {
      "id": "qr-40",
      "level": "elementary",
      "category": "technical",
      "week": 16,
      "time_limit_seconds": 8,
      "prompt_en": "What is the operating temperature of Pump 1 right now?",
      "prompt_vi": "Nhiệt độ vận hành của Máy bơm 1 lúc này là bao nhiêu?",
      "model_answers": [
        "It is sixty-five degrees Celsius, which is normal.",
        "The bearing temperature is 78 degrees Celsius.",
        "It is running at 50 degrees."
      ],
      "keywords": [
        "degrees",
        "celsius",
        "temperature",
        "normal",
        "sixty"
      ],
      "focus_vocab": "Degrees Celsius reading",
      "tip": "Đọc số đo nhiệt độ kèm đơn vị Celsius."
    },
    {
      "id": "qr-41",
      "level": "elementary",
      "category": "workplace",
      "week": 16,
      "time_limit_seconds": 8,
      "prompt_en": "Did the shift handover report get signed?",
      "prompt_vi": "Biên bản bàn giao ca đã được ký chưa?",
      "model_answers": [
        "Yes, both shift supervisors signed it ten minutes ago.",
        "Yes, it is signed and filed in the logbook.",
        "Not yet, Mr. Tuan is signing it now."
      ],
      "keywords": [
        "signed",
        "yes",
        "supervisors",
        "logbook",
        "report"
      ],
      "focus_vocab": "Verification: Yes, it is signed.",
      "tip": "Xác nhận tình trạng chữ ký biên bản."
    },
    {
      "id": "qr-42",
      "level": "elementary",
      "category": "technical",
      "week": 17,
      "time_limit_seconds": 8,
      "prompt_en": "Which cable connects to the positive terminal?",
      "prompt_vi": "Dây cáp nào nối vào cực dương?",
      "model_answers": [
        "The red cable connects to the positive terminal.",
        "Always connect the red wire to positive and black to negative.",
        "The red one."
      ],
      "keywords": [
        "red",
        "positive",
        "cable",
        "terminal",
        "wire"
      ],
      "focus_vocab": "Electrical polarity convention",
      "tip": "Khẳng định dây đỏ là cực dương."
    },
    {
      "id": "qr-43",
      "level": "elementary",
      "category": "she",
      "week": 17,
      "time_limit_seconds": 8,
      "prompt_en": "What should you do if an alarm sounds in the battery room?",
      "prompt_vi": "Bạn nên làm gì nếu có chuông báo động vang lên trong phòng ắc quy?",
      "model_answers": [
        "Evacuate immediately and report hydrogen gas alarm to control.",
        "Exit the room and notify the safety officer right away.",
        "Do not create sparks and evacuate outside."
      ],
      "keywords": [
        "evacuate",
        "alarm",
        "notify",
        "exit",
        "outside",
        "safety"
      ],
      "focus_vocab": "Emergency response: Evacuate immediately",
      "tip": "Hành động sơ tán ngay lập tức."
    },
    {
      "id": "qr-44",
      "level": "elementary",
      "category": "workplace",
      "week": 18,
      "time_limit_seconds": 8,
      "prompt_en": "Can we borrow your hydraulic jack for an hour?",
      "prompt_vi": "Chúng tôi có thể mượn kích thủy lực của bạn một tiếng được không?",
      "model_answers": [
        "Yes, sure. Please return it to Bay 4 when you are done.",
        "Yes, but make sure to clean it after use.",
        "Certainly, here is the operating lever too."
      ],
      "keywords": [
        "yes",
        "sure",
        "return",
        "done",
        "borrow"
      ],
      "focus_vocab": "Lending equipment",
      "tip": "Cho mượn và nhắc hoàn trả đúng vị trí."
    },
    {
      "id": "qr-45",
      "level": "elementary",
      "category": "technical",
      "week": 18,
      "time_limit_seconds": 8,
      "prompt_en": "Why did the air pressure drop below 4 bar?",
      "prompt_vi": "Tại sao áp suất khí nén lại tụt xuống dưới 4 bar?",
      "model_answers": [
        "There is an air leak in the distribution hose.",
        "The main compressor intake filter is dirty.",
        "Someone left the drain valve open."
      ],
      "keywords": [
        "leak",
        "air",
        "filter",
        "compressor",
        "valve",
        "drop"
      ],
      "focus_vocab": "Cause: There is a leak...",
      "tip": "Nêu nguyên nhân gây tụt áp."
    },
    {
      "id": "qr-46",
      "level": "elementary",
      "category": "she",
      "week": 19,
      "time_limit_seconds": 8,
      "prompt_en": "Is it permissible to wear loose jewelry around spinning shafts?",
      "prompt_vi": "Có được phép đeo trang sức lỏng lẻo gần các trục quay không?",
      "model_answers": [
        "No, never. Loose items can be caught in moving parts.",
        "Negative, entanglement hazard is extremely dangerous.",
        "No, all jewelry must be removed before work."
      ],
      "keywords": [
        "no",
        "never",
        "caught",
        "entanglement",
        "hazard",
        "jewelry"
      ],
      "focus_vocab": "Entanglement safety rule",
      "tip": "Khẳng định tuyệt đối cấm."
    },
    {
      "id": "qr-47",
      "level": "elementary",
      "category": "workplace",
      "week": 19,
      "time_limit_seconds": 8,
      "prompt_en": "Who has the key to the hazardous chemical cabinet?",
      "prompt_vi": "Ai giữ chìa khóa tủ hóa chất nguy hại?",
      "model_answers": [
        "The safety supervisor, Mr. Hai, holds the key.",
        "It is kept in the main safety office.",
        "Mr. Nam has the key on his master ring."
      ],
      "keywords": [
        "key",
        "safety",
        "supervisor",
        "cabinet",
        "holds",
        "office"
      ],
      "focus_vocab": "Key custody",
      "tip": "Chỉ rõ người chịu trách nhiệm giữ chìa."
    },
    {
      "id": "qr-48",
      "level": "elementary",
      "category": "technical",
      "week": 20,
      "time_limit_seconds": 8,
      "prompt_en": "How many liters of hydraulic oil does this reservoir take?",
      "prompt_vi": "Bình chứa dầu thủy lực này chứa được bao nhiêu lít?",
      "model_answers": [
        "It takes approximately fifty liters of ISO VG 46 oil.",
        "The full capacity is 75 liters.",
        "About 40 liters to reach the top level."
      ],
      "keywords": [
        "liters",
        "capacity",
        "fifty",
        "oil",
        "reservoir"
      ],
      "focus_vocab": "Fluid volume specification",
      "tip": "Nêu dung tích kèm loại dầu."
    },
    {
      "id": "qr-49",
      "level": "elementary",
      "category": "general",
      "week": 20,
      "time_limit_seconds": 8,
      "prompt_en": "Could you tell me what time the lunch break ends?",
      "prompt_vi": "Bạn có thể cho tôi biết giờ nghỉ trưa kết thúc lúc mấy giờ không?",
      "model_answers": [
        "Lunch break ends at twelve forty-five PM.",
        "It ends at 1:00 PM sharp.",
        "We resume work at 12:45."
      ],
      "keywords": [
        "ends",
        "lunch",
        "at",
        "twelve",
        "one",
        "resume"
      ],
      "focus_vocab": "Schedule clarification",
      "tip": "Nêu giờ giấc chính xác."
    },
    {
      "id": "qr-50",
      "level": "elementary",
      "category": "workplace",
      "week": 20,
      "time_limit_seconds": 8,
      "prompt_en": "What should we write in the remarks column of the logbook?",
      "prompt_vi": "Chúng ta nên ghi gì vào cột ghi chú của sổ nhật ký?",
      "model_answers": [
        "Note down any replaced parts and the vibration reading.",
        "Write the root cause of the downtime.",
        "Log the pending tasks for the next shift."
      ],
      "keywords": [
        "write",
        "log",
        "replaced",
        "vibration",
        "pending",
        "downtime"
      ],
      "focus_vocab": "Logbook entry instructions",
      "tip": "Ghi chú các thông số bất thường hoặc bàn giao."
    },
    {
      "id": "qr-51",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 21,
      "time_limit_seconds": 10,
      "prompt_en": "Why did Motor 2 suddenly trip?",
      "prompt_vi": "Tại sao Động cơ số 2 lại bị nhảy ngắt đột ngột?",
      "model_answers": [
        "It tripped because the thermal overload relay was activated due to excessive current.",
        "The motor overheated because of a locked mechanical impeller.",
        "A temporary short circuit caused the main breaker to trip."
      ],
      "keywords": [
        "tripped",
        "overload",
        "thermal",
        "relay",
        "overheated",
        "because",
        "current"
      ],
      "focus_vocab": "Explaining technical causes with 'because'",
      "tip": "Nêu rõ nguyên nhân kỹ thuật và rơ le bảo vệ."
    },
    {
      "id": "qr-52",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 22,
      "time_limit_seconds": 10,
      "prompt_en": "What happened to the machine?",
      "prompt_vi": "Chuyện gì đã xảy ra với cỗ máy vậy?",
      "model_answers": [
        "The conveyor belt snapped while running under full load.",
        "A bearing seized up on the drive roller, producing heavy smoke.",
        "The safety interlock triggered when an operator opened the guard."
      ],
      "keywords": [
        "happened",
        "belt",
        "snapped",
        "bearing",
        "seized",
        "interlock",
        "smoke"
      ],
      "focus_vocab": "Describing past technical incidents",
      "tip": "Mô tả sự việc đã xảy ra bằng thì quá khứ."
    },
    {
      "id": "qr-53",
      "level": "pre-intermediate",
      "category": "she",
      "week": 23,
      "time_limit_seconds": 10,
      "prompt_en": "What should we do first when an oil leak is detected on Line 4?",
      "prompt_vi": "Chúng ta nên làm gì đầu tiên khi phát hiện rò rỉ dầu trên Dây chuyền 4?",
      "model_answers": [
        "First, shut down the pump, isolate the feed valve, and place drip pans.",
        "We should isolate the energy source and deploy absorbent pads immediately.",
        "Alert the supervisor and mark the area with caution tape."
      ],
      "keywords": [
        "first",
        "shut",
        "isolate",
        "valve",
        "absorbent",
        "pads",
        "pans"
      ],
      "focus_vocab": "Prioritizing immediate containment actions",
      "tip": "Ưu tiên cô lập nguồn rò và ngăn chặn loang dầu."
    },
    {
      "id": "qr-54",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 24,
      "time_limit_seconds": 10,
      "prompt_en": "Can you explain the problem with the cooling fan?",
      "prompt_vi": "Bạn có thể giải thích vấn đề của quạt làm mát được không?",
      "model_answers": [
        "The fan blades are vibrating excessively because one blade is chipped.",
        "The electric motor is drawing 15 amps instead of its 10-amp rating.",
        "The mounting bolts became loose, causing severe misalignment."
      ],
      "keywords": [
        "vibrating",
        "blades",
        "chipped",
        "drawing",
        "loose",
        "misalignment"
      ],
      "focus_vocab": "Problem diagnosis with specific symptoms",
      "tip": "Chỉ rõ triệu chứng hư hỏng cụ thể."
    },
    {
      "id": "qr-55",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 25,
      "time_limit_seconds": 10,
      "prompt_en": "What maintenance work was completed this morning?",
      "prompt_vi": "Công việc bảo trì nào đã được hoàn thành sáng nay?",
      "model_answers": [
        "We replaced the mechanical seal on Pump 101 and aligned the coupling.",
        "The team completed the 500-hour preventive maintenance on Compressor 2.",
        "We inspected all safety interlocks and calibrated three pressure sensors."
      ],
      "keywords": [
        "replaced",
        "seal",
        "aligned",
        "completed",
        "calibrated",
        "maintenance"
      ],
      "focus_vocab": "Summarizing completed maintenance tasks",
      "tip": "Tóm tắt các đầu việc đã hoàn thành."
    },
    {
      "id": "qr-56",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 26,
      "time_limit_seconds": 10,
      "prompt_en": "What needs to be checked next before restarting the line?",
      "prompt_vi": "Cần kiểm tra điều gì tiếp theo trước khi khởi động lại dây chuyền?",
      "model_answers": [
        "We must verify that all machine guards are reinstalled and all tools are removed.",
        "Next, check that oil pressure is stable and no alarms remain active.",
        "Confirm with the operator that all personnel are outside the perimeter."
      ],
      "keywords": [
        "must",
        "guards",
        "reinstalled",
        "tools",
        "pressure",
        "personnel",
        "check"
      ],
      "focus_vocab": "Pre-restart verification protocol",
      "tip": "Nhấn mạnh kiểm tra che chắn và công cụ."
    },
    {
      "id": "qr-57",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 27,
      "time_limit_seconds": 10,
      "prompt_en": "How can we reduce the high vibration level on this pump?",
      "prompt_vi": "Làm thế nào để chúng ta giảm mức rung cao trên máy bơm này?",
      "model_answers": [
        "We should precision-align the motor and pump shafts using laser tools.",
        "Rebalance the impeller and replace the worn ball bearings.",
        "Check the base bolts for soft foot and torque them to spec."
      ],
      "keywords": [
        "align",
        "laser",
        "rebalance",
        "bearings",
        "bolts",
        "vibration",
        "reduce"
      ],
      "focus_vocab": "Technical corrective proposals",
      "tip": "Đề xuất giải pháp kỹ thuật cụ thể."
    },
    {
      "id": "qr-58",
      "level": "pre-intermediate",
      "category": "she",
      "week": 28,
      "time_limit_seconds": 10,
      "prompt_en": "Why is an observer required during hot work in the tank farm?",
      "prompt_vi": "Tại sao lại cần người cảnh giới trong suốt quá trình làm việc sinh nhiệt tại khu bồn chứa?",
      "model_answers": [
        "To continuously monitor for flammable gases and respond instantly with a fire extinguisher.",
        "Because flying sparks can ignite volatile vapors in adjacent tanks.",
        "Company safety regulations mandate a dedicated fire watch for all hot work."
      ],
      "keywords": [
        "monitor",
        "gases",
        "fire",
        "extinguisher",
        "sparks",
        "watch",
        "safety"
      ],
      "focus_vocab": "Hot work safety justifications",
      "tip": "Nêu rõ vai trò của người cảnh giới PCCC."
    },
    {
      "id": "qr-59",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 29,
      "time_limit_seconds": 10,
      "prompt_en": "What is the difference between preventive and corrective maintenance?",
      "prompt_vi": "Sự khác biệt giữa bảo trì phòng ngừa và bảo trì khắc phục là gì?",
      "model_answers": [
        "Preventive is scheduled before failure, while corrective repairs equipment after breakdown.",
        "Preventive prevents downtime, whereas corrective responds to unexpected failures.",
        "Preventive relies on time or condition; corrective deals with broken parts."
      ],
      "keywords": [
        "preventive",
        "corrective",
        "scheduled",
        "failure",
        "breakdown",
        "downtime"
      ],
      "focus_vocab": "Technical concept comparison",
      "tip": "Phân biệt rõ trước và sau sự cố."
    },
    {
      "id": "qr-60",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 30,
      "time_limit_seconds": 10,
      "prompt_en": "How should we handle an urgent part shortage for Line 1?",
      "prompt_vi": "Chúng ta nên xử lý tình huống thiếu phụ tùng khẩn cấp cho Dây chuyền 1 như thế nào?",
      "model_answers": [
        "Check the central warehouse database or arrange an emergency courier delivery.",
        "Consult the maintenance engineer to see if an approved substitute part can be used.",
        "Borrow the spare unit from Line 3 if it is currently offline."
      ],
      "keywords": [
        "warehouse",
        "emergency",
        "delivery",
        "substitute",
        "spare",
        "borrow"
      ],
      "focus_vocab": "Problem-solving under production pressure",
      "tip": "Đề xuất các phương án ứng phó khả thi."
    },
    {
      "id": "qr-61",
      "level": "pre-intermediate",
      "category": "she",
      "week": 31,
      "time_limit_seconds": 10,
      "prompt_en": "What is a Near Miss incident?",
      "prompt_vi": "Sự cố Suýt Nguy (Near Miss) là gì?",
      "model_answers": [
        "It is an unplanned event that did not cause injury or damage, but had the potential to do so.",
        "A close call where an accident almost happened, like a wrench falling near a worker.",
        "An event with zero injury that must still be reported to prevent future harm."
      ],
      "keywords": [
        "unplanned",
        "injury",
        "potential",
        "accident",
        "damage",
        "reported",
        "prevent"
      ],
      "focus_vocab": "Safety definition: Near Miss",
      "tip": "Định nghĩa chính xác bản chất suýt nguy."
    },
    {
      "id": "qr-62",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 32,
      "time_limit_seconds": 10,
      "prompt_en": "What does cavitation sound like in a centrifugal pump?",
      "prompt_vi": "Hiện tượng xâm thực khí phát ra âm thanh như thế nào trong bơm ly tâm?",
      "model_answers": [
        "It sounds like marbles or gravel rattling inside the pump casing.",
        "A loud popping and crackling noise accompanied by fluctuating pressure.",
        "It creates a distinctive grinding sound like stones being shaken."
      ],
      "keywords": [
        "marbles",
        "gravel",
        "popping",
        "noise",
        "pressure",
        "cavitation"
      ],
      "focus_vocab": "Acoustic diagnostic vocabulary",
      "tip": "Miêu tả âm thanh sỏi đá lạo xạo."
    },
    {
      "id": "qr-63",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 33,
      "time_limit_seconds": 10,
      "prompt_en": "How do you prioritize multiple work orders during a breakdown?",
      "prompt_vi": "Bạn ưu tiên giải quyết nhiều phiếu công việc như thế nào khi có sự cố?",
      "model_answers": [
        "I prioritize based on safety hazards first, then production bottleneck lines.",
        "Safety risks come first, followed by environmental impacts and high-value machines.",
        "I consult the shift manager to identify the critical path equipment."
      ],
      "keywords": [
        "prioritize",
        "safety",
        "hazards",
        "production",
        "bottleneck",
        "critical"
      ],
      "focus_vocab": "Prioritization criteria: Safety -> Production",
      "tip": "Ưu tiên An toàn trước, Năng suất theo sau."
    },
    {
      "id": "qr-64",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 34,
      "time_limit_seconds": 10,
      "prompt_en": "Why must we verify zero energy state after locking out a breaker?",
      "prompt_vi": "Tại sao chúng ta phải xác nhận trạng thái năng lượng bằng không sau khi khóa áptômát?",
      "model_answers": [
        "Because residual electrical charge or stored mechanical pressure can still kill you.",
        "To prove that the breaker contacts actually opened and no voltage remains.",
        "Locking out is not enough; test before touch is the golden rule."
      ],
      "keywords": [
        "residual",
        "voltage",
        "energy",
        "kill",
        "test",
        "touch",
        "zero"
      ],
      "focus_vocab": "Safety rule: Test before touch",
      "tip": "Khẳng định nguy cơ điện tích dư."
    },
    {
      "id": "qr-65",
      "level": "pre-intermediate",
      "category": "she",
      "week": 35,
      "time_limit_seconds": 10,
      "prompt_en": "What should an employee do if they observe an unsafe act on site?",
      "prompt_vi": "Nhân viên nên làm gì nếu họ quan sát thấy một hành vi không an toàn tại hiện trường?",
      "model_answers": [
        "Exercise Stop Work Authority politely and explain the hazard to the colleague.",
        "Stop the work immediately and notify the safety supervisor.",
        "Intervene kindly: safety is everyone's responsibility."
      ],
      "keywords": [
        "stop",
        "authority",
        "hazard",
        "intervene",
        "responsibility",
        "colleague"
      ],
      "focus_vocab": "Empowerment: Stop Work Authority",
      "tip": "Sử dụng quyền dừng công việc để bảo vệ bạn bè."
    },
    {
      "id": "qr-66",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 36,
      "time_limit_seconds": 10,
      "prompt_en": "Why should you never use compressed air to blow dust off your clothes?",
      "prompt_vi": "Tại sao bạn không bao giờ được dùng khí nén để thổi bụi trên quần áo?",
      "model_answers": [
        "Because high-pressure air can penetrate the skin and introduce fatal air embolisms.",
        "Particles can fly into your eyes, and compressed air can enter your bloodstream.",
        "It is strictly prohibited due to severe skin and eye puncture hazards."
      ],
      "keywords": [
        "penetrate",
        "skin",
        "embolism",
        "eyes",
        "bloodstream",
        "prohibited",
        "hazard"
      ],
      "focus_vocab": "Compressed air safety hazards",
      "tip": "Cảnh báo nguy cơ tắc mạch khí vào máu."
    },
    {
      "id": "qr-67",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 37,
      "time_limit_seconds": 10,
      "prompt_en": "What should you do if you cannot understand an instruction over the radio?",
      "prompt_vi": "Bạn nên làm gì nếu bạn không nghe hiểu chỉ dẫn qua bộ đàm?",
      "model_answers": [
        "Say 'Say again, transmission unreadable' and ask for clarification.",
        "Do not guess. Request: 'Radio check, please repeat message slowly.'",
        "Acknowledge that signal is poor and ask them to spell out key numbers."
      ],
      "keywords": [
        "repeat",
        "say",
        "again",
        "unreadable",
        "radio",
        "clarification",
        "guess"
      ],
      "focus_vocab": "Radio protocol: Do not guess",
      "tip": "Quy tắc bộ đàm: 'Say again' chứ không đoán."
    },
    {
      "id": "qr-68",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 38,
      "time_limit_seconds": 10,
      "prompt_en": "What is the function of a thermal overload relay?",
      "prompt_vi": "Chức năng của rơ le nhiệt quá tải là gì?",
      "model_answers": [
        "It disconnects power when motor current stays too high for too long.",
        "To protect the electric motor from burning out due to prolonged overcurrent.",
        "It senses excessive heat and opens the control circuit."
      ],
      "keywords": [
        "disconnects",
        "current",
        "motor",
        "burning",
        "overcurrent",
        "protect"
      ],
      "focus_vocab": "Electrical protection explanation",
      "tip": "Giải thích chức năng bảo vệ quá dòng."
    },
    {
      "id": "qr-69",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 39,
      "time_limit_seconds": 10,
      "prompt_en": "How do you confirm that a task was completed properly?",
      "prompt_vi": "Làm thế nào để bạn xác nhận một công việc đã hoàn thành chuẩn xác?",
      "model_answers": [
        "I conduct a test run, verify operating parameters, and clean the work area.",
        "We check all bolts, test the equipment under load, and get supervisor sign-off.",
        "Compare results against the standard operating procedure checklist."
      ],
      "keywords": [
        "test",
        "run",
        "verify",
        "parameters",
        "clean",
        "checklist",
        "sign-off"
      ],
      "focus_vocab": "Work verification protocol",
      "tip": "Chạy thử, kiểm tra thông số và dọn dẹp."
    },
    {
      "id": "qr-70",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 40,
      "time_limit_seconds": 10,
      "prompt_en": "Why is laser alignment better than straightedge alignment?",
      "prompt_vi": "Tại sao cân tâm bằng laser lại tốt hơn cân tâm bằng thước thẳng?",
      "model_answers": [
        "Laser alignment provides micron-level accuracy and eliminates human parallax error.",
        "It is much faster, more precise, and handles angular and parallel misalignment simultaneously.",
        "It directly calculates shim corrections for all four motor feet."
      ],
      "keywords": [
        "laser",
        "accuracy",
        "micron",
        "precision",
        "misalignment",
        "shim"
      ],
      "focus_vocab": "Precision maintenance concepts",
      "tip": "Nêu độ chính xác tới mi-crô-mét."
    },
    {
      "id": "qr-71",
      "level": "pre-intermediate",
      "category": "she",
      "week": 41,
      "time_limit_seconds": 10,
      "prompt_en": "What are the three essential elements of the Fire Triangle?",
      "prompt_vi": "Ba yếu tố cốt lõi của Tam giác Cháy là gì?",
      "model_answers": [
        "Oxygen, Heat, and Fuel.",
        "The three elements are fuel, oxygen, and ignition heat.",
        "Fuel, heat, and air."
      ],
      "keywords": [
        "oxygen",
        "heat",
        "fuel",
        "fire",
        "triangle"
      ],
      "focus_vocab": "Core safety concept: Fire Triangle",
      "tip": "Nêu đủ: Nhiệt, Nhiên liệu và Oxy."
    },
    {
      "id": "qr-72",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 42,
      "time_limit_seconds": 10,
      "prompt_en": "What causes a hydraulic cylinder to creep or drift under load?",
      "prompt_vi": "Điều gì khiến xi lanh thủy lực bị tụt hoặc trôi khi chịu tải?",
      "model_answers": [
        "Internal leakage past the piston seal or a leaking counterbalance valve.",
        "Worn piston cups allowing oil to bypass between cylinder chambers.",
        "A damaged check valve or contamination in the directional control valve."
      ],
      "keywords": [
        "leakage",
        "piston",
        "seal",
        "cylinder",
        "valve",
        "bypass",
        "creep"
      ],
      "focus_vocab": "Hydraulic troubleshooting vocabulary",
      "tip": "Chẩn đoán rò rỉ trong qua phớt pít-tông."
    },
    {
      "id": "qr-73",
      "level": "pre-intermediate",
      "category": "workplace",
      "week": 43,
      "time_limit_seconds": 10,
      "prompt_en": "How should you report a minor hand cut sustained while handling sheet metal?",
      "prompt_vi": "Bạn nên báo cáo vết đứt tay nhẹ gặp phải khi cầm tấm kim loại như thế nào?",
      "model_answers": [
        "Report it to the first-aider immediately, clean the wound, and log a first-aid incident.",
        "Always report every injury, no matter how small, to the safety officer within the hour.",
        "Get first aid right away and document it on the daily safety log."
      ],
      "keywords": [
        "report",
        "first-aid",
        "injury",
        "wound",
        "safety",
        "log"
      ],
      "focus_vocab": "First-aid reporting protocol",
      "tip": "Báo cáo ngay để tránh nhiễm trùng và hoàn thiện hồ sơ."
    },
    {
      "id": "qr-74",
      "level": "pre-intermediate",
      "category": "technical",
      "week": 44,
      "time_limit_seconds": 10,
      "prompt_en": "What does an IP65 rating on an electrical enclosure mean?",
      "prompt_vi": "Cấp bảo vệ IP65 trên vỏ tủ điện có nghĩa là gì?",
      "model_answers": [
        "Dust-tight protection and resistance to water jets from any direction.",
        "Complete protection against dust and protection against low-pressure water streams.",
        "It is ingress protection level 6 for dust and level 5 for water."
      ],
      "keywords": [
        "dust",
        "water",
        "protection",
        "ingress",
        "jets",
        "enclosure"
      ],
      "focus_vocab": "Ingress protection standards",
      "tip": "Chống bụi hoàn toàn và chống tia nước."
    },
    {
      "id": "qr-75",
      "level": "pre-intermediate",
      "category": "general",
      "week": 45,
      "time_limit_seconds": 10,
      "prompt_en": "Could you explain why you arrived late for the morning meeting?",
      "prompt_vi": "Bạn có thể giải thích lý do bạn đến muộn cuộc họp sáng không?",
      "model_answers": [
        "I apologize. My plant shuttle bus broke down on Highway 1.",
        "I am sorry for being late. There was a power outage at the workshop entrance.",
        "My apologies. I had to respond to an urgent steam leak at Boiler 2."
      ],
      "keywords": [
        "apologize",
        "sorry",
        "late",
        "broke",
        "traffic",
        "shuttle",
        "leak"
      ],
      "focus_vocab": "Polite professional apology",
      "tip": "Xin lỗi chân thành và nêu lý do bất khả kháng."
    },
    {
      "id": "qr-76",
      "level": "workplace",
      "category": "she",
      "week": 46,
      "time_limit_seconds": 12,
      "prompt_en": "What is the recommended bolt torque for this M16 flange?",
      "prompt_vi": "Lực siết bu-lông khuyến nghị cho mặt bích M16 này là bao nhiêu?",
      "model_answers": [
        "According to the pipe manual, it is 120 Newton-meters in cross pattern.",
        "The torque specification is 125 Nm using a calibrated torque wrench.",
        "Set the torque wrench to 120 Nm and tighten in 3 stages."
      ],
      "keywords": [
        "torque",
        "newton",
        "meters",
        "flange",
        "pattern",
        "calibrated"
      ],
      "focus_vocab": "Bolting technical specs",
      "tip": "Nêu rõ giá trị Nm và phương pháp siết chéo."
    },
    {
      "id": "qr-77",
      "level": "workplace",
      "category": "she",
      "week": 47,
      "time_limit_seconds": 12,
      "prompt_en": "Why must we test the atmosphere before entering a confined space?",
      "prompt_vi": "Tại sao chúng ta phải đo khí môi trường trước khi vào không gian hạn chế?",
      "model_answers": [
        "To verify oxygen is between 19.5% and 23.5% and ensure toxic or flammable gases are zero.",
        "Because toxic gases like H2S or CO can be odorless and lethal within seconds.",
        "Atmospheric testing is required by law to prevent asphyxiation."
      ],
      "keywords": [
        "oxygen",
        "toxic",
        "flammable",
        "testing",
        "atmosphere",
        "confined",
        "lethal"
      ],
      "focus_vocab": "Confined space entry safety",
      "tip": "Đo nồng độ oxy và khí độc H2S, CO."
    },
    {
      "id": "qr-78",
      "level": "workplace",
      "category": "workplace",
      "week": 47,
      "time_limit_seconds": 12,
      "prompt_en": "What should you do if an operator refuses to wear safety goggles?",
      "prompt_vi": "Bạn nên làm gì nếu một người vận hành từ chối đeo kính bảo hộ?",
      "model_answers": [
        "Remind them calmly that goggles are mandatory PPE and stop the work if they persist.",
        "Explain the eye injury hazard, offer a clean pair, and notify the area supervisor if needed.",
        "Remind them of plant safety policy: no goggles, no work."
      ],
      "keywords": [
        "mandatory",
        "goggles",
        "ppe",
        "supervisor",
        "hazard",
        "stop",
        "remind"
      ],
      "focus_vocab": "Conflict resolution on safety compliance",
      "tip": "Nhắc nhở bình tĩnh, kiên quyết tuân thủ quy định."
    },
    {
      "id": "qr-79",
      "level": "workplace",
      "category": "technical",
      "week": 48,
      "time_limit_seconds": 12,
      "prompt_en": "How do you detect a vacuum leak on a condenser?",
      "prompt_vi": "Làm thế nào để bạn phát hiện điểm rò rỉ chân không trên bình ngưng?",
      "model_answers": [
        "Using an ultrasonic leak detector or helium leak testing technique.",
        "Apply shaving foam or soapy water around suspected joints while monitoring vacuum.",
        "Use an acoustic camera to pinpoint air rushing into the vacuum system."
      ],
      "keywords": [
        "ultrasonic",
        "detector",
        "helium",
        "vacuum",
        "leak",
        "acoustic"
      ],
      "focus_vocab": "Advanced leak detection techniques",
      "tip": "Dùng máy siêu âm hoặc khí heli."
    },
    {
      "id": "qr-80",
      "level": "workplace",
      "category": "workplace",
      "week": 48,
      "time_limit_seconds": 12,
      "prompt_en": "What key points should be communicated during a shift handover?",
      "prompt_vi": "Những điểm mấu chốt nào cần được truyền đạt khi bàn giao ca?",
      "model_answers": [
        "Machine status, ongoing maintenance, safety hazards, and pending tasks.",
        "Output numbers, breakdown logs, active LOTO tags, and parts on order.",
        "Any abnormal vibration readings and critical orders from management."
      ],
      "keywords": [
        "status",
        "hazards",
        "pending",
        "loto",
        "handover",
        "abnormal"
      ],
      "focus_vocab": "Comprehensive shift handover items",
      "tip": "Bàn giao thiết bị, mối nguy, LOTO và việc còn tồn."
    },
    {
      "id": "qr-81",
      "level": "workplace",
      "category": "she",
      "week": 49,
      "time_limit_seconds": 12,
      "prompt_en": "Where is the Material Safety Data Sheet (MSDS) located?",
      "prompt_vi": "Bảng Dữ liệu An toàn Hóa chất (MSDS) được đặt ở đâu?",
      "model_answers": [
        "In the yellow binder mounted next to the chemical storage entrance.",
        "Online on the company safety portal and printed in the foreman's office.",
        "Inside the emergency chemical response cabinet."
      ],
      "keywords": [
        "msds",
        "binder",
        "yellow",
        "chemical",
        "storage",
        "portal"
      ],
      "focus_vocab": "Chemical hazard communication",
      "tip": "Chỉ rõ vị trí sổ vàng hoặc hệ thống dữ liệu."
    },
    {
      "id": "qr-82",
      "level": "workplace",
      "category": "technical",
      "week": 49,
      "time_limit_seconds": 12,
      "prompt_en": "Why does a centrifugal pump lose suction prime?",
      "prompt_vi": "Tại sao máy bơm ly tâm lại bị mất mồi hút?",
      "model_answers": [
        "Air leakage into the suction piping or a clogged foot valve.",
        "The suction lift is too high, or the mechanical seal is drawing air.",
        "The liquid level dropped below the suction pipe inlet."
      ],
      "keywords": [
        "suction",
        "air",
        "prime",
        "clogged",
        "valve",
        "leakage"
      ],
      "focus_vocab": "Pump troubleshooting principles",
      "tip": "Khí lọt vào đường hút hoặc kẹt van chân."
    },
    {
      "id": "qr-83",
      "level": "workplace",
      "category": "she",
      "week": 50,
      "time_limit_seconds": 12,
      "prompt_en": "What is the procedure for an eyewash station inspection?",
      "prompt_vi": "Quy trình kiểm tra trạm rửa mắt khẩn cấp là gì?",
      "model_answers": [
        "Activate weekly, flush for 3 minutes, check water clarity, and sign the inspection tag.",
        "Verify water pressure is gentle, nozzles are clean, and pathway is unobstructed.",
        "Inspect nozzles, measure water temperature, and record in the safety checklist."
      ],
      "keywords": [
        "flush",
        "weekly",
        "nozzles",
        "water",
        "tag",
        "checklist",
        "unobstructed"
      ],
      "focus_vocab": "Safety fixture maintenance",
      "tip": "Xả rửa hàng tuần, kiểm tra độ sạch và ký thẻ."
    },
    {
      "id": "qr-84",
      "level": "workplace",
      "category": "technical",
      "week": 50,
      "time_limit_seconds": 12,
      "prompt_en": "What does a high differential pressure across a filter indicate?",
      "prompt_vi": "Độ chênh áp cao qua bộ lọc biểu thị điều gì?",
      "model_answers": [
        "It indicates the filter element is saturated with contaminants and needs replacement.",
        "The filter media is clogged and restricting flow rate.",
        "A clogged cartridge causing high resistance across the housing."
      ],
      "keywords": [
        "differential",
        "clogged",
        "saturated",
        "filter",
        "replacement",
        "contaminants"
      ],
      "focus_vocab": "Differential pressure diagnostics",
      "tip": "Báo hiệu lõi lọc đã nghẹt cặn bẩn và cần thay."
    },
    {
      "id": "qr-85",
      "level": "workplace",
      "category": "workplace",
      "week": 51,
      "time_limit_seconds": 12,
      "prompt_en": "How do you respond to a radio call: 'Maintenance Lead, report to Line 1'?",
      "prompt_vi": "Bạn trả lời thế nào với cuộc gọi bộ đàm: 'Trưởng nhóm Bảo trì, đến Dây chuyền 1'?",
      "model_answers": [
        "'Maintenance Lead copying. On my way to Line 1 now, ETA 2 minutes.'",
        "'This is Maintenance Lead, received. Proceeding to Line 1 immediately.'",
        "'Maintenance Lead here, copy that. Heading to Line 1.'"
      ],
      "keywords": [
        "copying",
        "received",
        "proceeding",
        "way",
        "eta",
        "minutes"
      ],
      "focus_vocab": "Professional radio acknowledgement",
      "tip": "Xác nhận đã nhận lệnh và báo thời gian dự kiến (ETA)."
    },
    {
      "id": "qr-86",
      "level": "workplace",
      "category": "she",
      "week": 51,
      "time_limit_seconds": 12,
      "prompt_en": "What precautions are required when working at heights above 2 meters?",
      "prompt_vi": "Những biện pháp phòng ngừa nào bắt buộc khi làm việc trên cao quá 2 mét?",
      "model_answers": [
        "Wear a full-body harness tied off 100% to a certified anchor point, and secure tools with lanyards.",
        "Use an inspected mobile scaffold or scissor lift with toe boards and guardrails.",
        "A valid Working at Heights permit and mandatory fall-arrest system."
      ],
      "keywords": [
        "harness",
        "anchor",
        "lanyard",
        "heights",
        "fall",
        "scaffold",
        "permit"
      ],
      "focus_vocab": "Fall protection safety standards",
      "tip": "Đeo dây nịt toàn thân và buộc dây chống rơi dụng cụ."
    },
    {
      "id": "qr-87",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What causes electrical motor winding burnout?",
      "prompt_vi": "Điều gì gây cháy cuộn dây động cơ điện?",
      "model_answers": [
        "Single phasing, persistent overload, or insulation breakdown due to moisture and heat.",
        "Operating on two phases when one fuse blows, leading to rapid overheating.",
        "Contamination inside the winding deteriorating dielectric insulation."
      ],
      "keywords": [
        "winding",
        "burnout",
        "overload",
        "insulation",
        "single",
        "phasing",
        "heat"
      ],
      "focus_vocab": "Electrical failure mechanisms",
      "tip": "Nêu mất pha (single phasing) hoặc quá nhiệt kéo dài."
    },
    {
      "id": "qr-88",
      "level": "workplace",
      "category": "workplace",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "How do you request a replacement part from purchasing?",
      "prompt_vi": "Làm thế nào để bạn yêu cầu phòng mua hàng cấp phụ tùng thay thế?",
      "model_answers": [
        "Submit a purchase requisition with manufacturer part number, quantity, and equipment tag.",
        "Include full technical specifications, preferred brand, and required delivery date.",
        "Create a PR in the SAP system referencing the maintenance work order."
      ],
      "keywords": [
        "purchase",
        "requisition",
        "part",
        "number",
        "quantity",
        "sap",
        "specifications"
      ],
      "focus_vocab": "Procurement workflow communication",
      "tip": "Nêu rõ mã phụ tùng, số lượng và tag máy."
    },
    {
      "id": "qr-89",
      "level": "workplace",
      "category": "she",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What should be done with oily rags after equipment maintenance?",
      "prompt_vi": "Nên làm gì với giẻ lau dính dầu sau khi bảo trì thiết bị?",
      "model_answers": [
        "Dispose of them in designated self-closing metal hazardous waste bins to prevent spontaneous combustion.",
        "Place them inside the red metal oily rag container, never in regular trash.",
        "Put them in approved hazardous waste cans with tight-fitting lids."
      ],
      "keywords": [
        "oily",
        "rags",
        "metal",
        "hazardous",
        "combustion",
        "bins",
        "container"
      ],
      "focus_vocab": "Flammable waste handling",
      "tip": "Vứt vào thùng kim loại chống tự cháy."
    },
    {
      "id": "qr-90",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "How do you test if a thermocouple is functioning correctly?",
      "prompt_vi": "Làm thế nào để kiểm tra một can nhiệt (thermocouple) có hoạt động đúng không?",
      "model_answers": [
        "Measure millivolt output with a calibrated multimeter and compare against the temperature conversion table.",
        "Check loop resistance and simulate temperature input using a calibrator.",
        "Verify that millivoltage changes predictably when heat is applied."
      ],
      "keywords": [
        "millivolt",
        "multimeter",
        "thermocouple",
        "calibrator",
        "resistance",
        "table"
      ],
      "focus_vocab": "Instrumentation calibration technique",
      "tip": "Đo điện áp mV và đối chiếu bảng quy đổi."
    },
    {
      "id": "qr-91",
      "level": "workplace",
      "category": "workplace",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What is the procedure when an urgent delivery arrives with damaged packaging?",
      "prompt_vi": "Quy trình xử lý khi chuyến hàng khẩn cấp đến nơi nhưng bao bì bị rách hỏng là gì?",
      "model_answers": [
        "Photograph the damage, note it on the delivery receipt, and inspect internal components with the carrier present.",
        "Do not sign acceptance until opening the box and verifying goods are intact.",
        "Document serial numbers and notify procurement immediately of shipping damage."
      ],
      "keywords": [
        "photograph",
        "damage",
        "receipt",
        "inspect",
        "carrier",
        "procurement"
      ],
      "focus_vocab": "Receiving logistics protocol",
      "tip": "Chụp ảnh hư hại, ghi chú lên biên bản và kiểm tra chi tiết."
    },
    {
      "id": "qr-92",
      "level": "workplace",
      "category": "she",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What is the primary danger of nitrogen gas leaks in enclosed spaces?",
      "prompt_vi": "Mối nguy hiểm hàng đầu của rò rỉ khí nitơ trong không gian kín là gì?",
      "model_answers": [
        "Nitrogen is colorless and odorless, and displaces oxygen, leading to rapid unconsciousness and death.",
        "Asphyxiation without any prior warning symptoms because nitrogen has no smell.",
        "Sudden oxygen deficiency causing collapse within two breaths."
      ],
      "keywords": [
        "nitrogen",
        "displaces",
        "oxygen",
        "odorless",
        "asphyxiation",
        "unconsciousness"
      ],
      "focus_vocab": "Asphyxiant gas dangers",
      "tip": "Khí không mùi làm suy giảm oxy gây bất tỉnh đột ngột."
    },
    {
      "id": "qr-93",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "Why must we let hot machinery cool down before checking fluid levels?",
      "prompt_vi": "Tại sao chúng ta phải để máy móc nguội bớt trước khi kiểm tra mức chất lỏng?",
      "model_answers": [
        "To avoid violent pressurized steam or boiling oil spray when the cap is removed.",
        "Thermal expansion distorts reading, and opening hot systems causes severe burn risks.",
        "High pressure can erupt hot coolant onto your face and hands."
      ],
      "keywords": [
        "burn",
        "pressurized",
        "steam",
        "cool",
        "coolant",
        "erupt",
        "spray"
      ],
      "focus_vocab": "Burn and scald prevention",
      "tip": "Ngăn hơi nóng và dầu sôi bắn tung tóe."
    },
    {
      "id": "qr-94",
      "level": "workplace",
      "category": "workplace",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "How do you explain a 30-minute delay in returning a borrowed specialized tool?",
      "prompt_vi": "Bạn giải thích thế nào về việc trễ 30 phút khi trả dụng cụ chuyên dụng đã mượn?",
      "model_answers": [
        "'My apologies Mr. Ba. Torquing the final flange took longer than anticipated. The tool is cleaned and zeroed.'",
        "'Sorry for the delay. An extra inspection was requested. Here is the wrench in perfect condition.'",
        "'Apologies for running late. We finished the task safely and returned the tool immediately.'"
      ],
      "keywords": [
        "apologies",
        "delay",
        "torquing",
        "cleaned",
        "zeroed",
        "tool"
      ],
      "focus_vocab": "Courteous explanation for delay",
      "tip": "Xin lỗi nhã nhặn, giải thích rõ lý do và hoàn trả sạch sẽ."
    },
    {
      "id": "qr-95",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What does excessive backlash in a gearbox signify?",
      "prompt_vi": "Độ rơ ăn khớp quá mức trong hộp số biểu thị điều gì?",
      "model_answers": [
        "Worn gear teeth or degraded shaft bearings causing improper gear mesh.",
        "Severe tooth flank wear that will lead to catastrophic gear failure if unaddressed.",
        "Excessive play between mating teeth requiring gearset replacement."
      ],
      "keywords": [
        "backlash",
        "gear",
        "teeth",
        "wear",
        "bearings",
        "mesh"
      ],
      "focus_vocab": "Gearbox mechanical wear diagnostics",
      "tip": "Mòn bề mặt răng hoặc mòn vòng bi đỡ trục."
    },
    {
      "id": "qr-96",
      "level": "workplace",
      "category": "she",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What does the abbreviation SDS stand for, and what is its purpose?",
      "prompt_vi": "Chữ viết tắt SDS là viết tắt của từ gì, và mục đích của nó là gì?",
      "model_answers": [
        "Safety Data Sheet; it provides comprehensive hazard, handling, and first-aid info for chemicals.",
        "Safety Data Sheet, used to understand toxicological risks and PPE requirements.",
        "It is the standardized document for chemical safety management."
      ],
      "keywords": [
        "safety",
        "data",
        "sheet",
        "hazard",
        "chemical",
        "handling",
        "first-aid"
      ],
      "focus_vocab": "Chemical safety acronyms",
      "tip": "Bảng dữ liệu an toàn hóa chất."
    },
    {
      "id": "qr-97",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "Why is soft foot a serious issue in rotating machinery?",
      "prompt_vi": "Tại sao lỗi chân kênh (soft foot) lại là vấn đề nghiêm trọng ở máy quay?",
      "model_answers": [
        "Soft foot distorts the motor frame, pinches bearings, and creates extreme vibration when bolted down.",
        "It causes high mechanical stress and premature bearing failure due to uneven base contact.",
        "Frame distortion throws internal air gap off-center."
      ],
      "keywords": [
        "soft",
        "foot",
        "distorts",
        "frame",
        "bearings",
        "vibration",
        "stress"
      ],
      "focus_vocab": "Machinery installation issues",
      "tip": "Gây vặn xoắn thân máy và phá hủy ổ bi nhanh chóng."
    },
    {
      "id": "qr-98",
      "level": "workplace",
      "category": "workplace",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "How do you coordinate with the production supervisor before starting preventive maintenance?",
      "prompt_vi": "Bạn phối hợp với giám sát sản xuất thế nào trước khi bắt đầu bảo trì phòng ngừa?",
      "model_answers": [
        "Inform them of scheduled duration, ensure machines are empty of product, and verify LOTO sign-off.",
        "Confirm the line handover time and agree on re-commissioning targets.",
        "Explain the scope of work and confirm buffer stock is prepared."
      ],
      "keywords": [
        "inform",
        "duration",
        "product",
        "handover",
        "loto",
        "scope"
      ],
      "focus_vocab": "Maintenance-production coordination",
      "tip": "Thống nhất thời gian dừng, xả sạch liệu và ký LOTO."
    },
    {
      "id": "qr-99",
      "level": "workplace",
      "category": "she",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What is the first step in responding to an electrical fire?",
      "prompt_vi": "Bước đầu tiên trong ứng phó với đám cháy điện là gì?",
      "model_answers": [
        "Cut off the electrical power supply immediately if safe to do so.",
        "Isolate the main power switch before deploying a CO2 or dry powder extinguisher.",
        "De-energize the circuit to eliminate the ignition source."
      ],
      "keywords": [
        "cut",
        "power",
        "electrical",
        "isolate",
        "de-energize",
        "extinguisher",
        "co2"
      ],
      "focus_vocab": "Electrical fire first action: De-energize",
      "tip": "Cắt nguồn điện ngay lập tức trước khi dập."
    },
    {
      "id": "qr-100",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "How do you check for phase imbalance on a three-phase motor?",
      "prompt_vi": "Làm thế nào để kiểm tra mất cân bằng pha trên động cơ 3 pha?",
      "model_answers": [
        "Measure current on each of the three phases with a clamp meter and calculate percentage deviation.",
        "Measure line-to-line voltages and phase currents; imbalance must not exceed 1% voltage or 10% current.",
        "Clamp each lead: L1, L2, L3 under steady load to compare current draws."
      ],
      "keywords": [
        "clamp",
        "meter",
        "current",
        "phase",
        "imbalance",
        "voltage",
        "deviation"
      ],
      "focus_vocab": "Electrical motor testing method",
      "tip": "Đo ampe kẹp trên cả 3 pha và tính độ lệch."
    },
    {
      "id": "qr-101",
      "level": "workplace",
      "category": "workplace",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What do you do if a machine alarm keeps sounding intermittently?",
      "prompt_vi": "Bạn làm gì nếu còi báo động máy liên tục kêu ngắt quãng?",
      "model_answers": [
        "Investigate the root cause, check sensor wiring and thresholds, and never silence without investigating.",
        "Check the alarm log on the HMI to see the exact fault code.",
        "Inspect for loose connections or intermittent sensor signals."
      ],
      "keywords": [
        "root",
        "cause",
        "alarm",
        "sensor",
        "hmi",
        "fault",
        "investigate"
      ],
      "focus_vocab": "Alarm management attitude",
      "tip": "Tìm nguyên nhân gốc rễ, tuyệt đối không tắt còi rồi bỏ qua."
    },
    {
      "id": "qr-102",
      "level": "workplace",
      "category": "she",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "Why are synthetic ropes not allowed for lifting sharp steel beams?",
      "prompt_vi": "Tại sao không được dùng dây cáp vải để cẩu các dầm thép sắc cạnh?",
      "model_answers": [
        "Sharp edges can slice through synthetic webbing under tension, dropping the suspended load.",
        "Severe abrasion will cut synthetic fibers instantly unless certified corner protectors are used.",
        "Edge cutting hazard can lead to catastrophic rigging failure."
      ],
      "keywords": [
        "sharp",
        "slice",
        "synthetic",
        "load",
        "rigging",
        "cut",
        "edges"
      ],
      "focus_vocab": "Rigging and lifting safety",
      "tip": "Cạnh sắc dễ cứa đứt cáp vải gây rơi tải trọng."
    },
    {
      "id": "qr-103",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What is the purpose of an accumulator in a hydraulic circuit?",
      "prompt_vi": "Mục đích của bình tích áp trong mạch thủy lực là gì?",
      "model_answers": [
        "To store pressurized fluid, absorb pressure spikes, and supply emergency power.",
        "It dampens hydraulic shocks and maintains pressure during rapid actuator cycles.",
        "To act as an energy reservoir and smooth out pump pulsations."
      ],
      "keywords": [
        "accumulator",
        "hydraulic",
        "pressurized",
        "shocks",
        "spikes",
        "energy",
        "store"
      ],
      "focus_vocab": "Hydraulic accumulator functions",
      "tip": "Tích trữ áp suất và dập xung kích thủy lực."
    },
    {
      "id": "qr-104",
      "level": "workplace",
      "category": "workplace",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "How do you explain an equipment modification in the engineering change record?",
      "prompt_vi": "Bạn giải thích việc cải tiến thiết bị thế nào trong sổ ghi thay đổi kỹ thuật?",
      "model_answers": [
        "Detail the modification reason, attached drawings, part numbers, and safety risk assessment.",
        "Document what was changed, who approved it, and date of post-modification testing.",
        "Provide before-and-after schematics and verify compliance with standards."
      ],
      "keywords": [
        "modification",
        "drawings",
        "approved",
        "assessment",
        "record",
        "schematics"
      ],
      "focus_vocab": "Management of change (MOC) documentation",
      "tip": "Nêu lý do, bản vẽ đính kèm và đánh giá an toàn."
    },
    {
      "id": "qr-105",
      "level": "workplace",
      "category": "technical",
      "week": 52,
      "time_limit_seconds": 12,
      "prompt_en": "What criteria determine whether a conveyor belt needs vulcanized splicing?",
      "prompt_vi": "Tiêu chí nào xác định băng chuyền cần dán lưu hóa thay vì nối ghim cơ khí?",
      "model_answers": [
        "High-tension applications, continuous heavy loads, and food or dust-free requirements.",
        "When operational speed and tensile strength demand a smooth, permanent endless joint.",
        "Mechanical clips leak dust and wear quickly; heavy belts require hot vulcanizing."
      ],
      "keywords": [
        "vulcanized",
        "splicing",
        "tension",
        "conveyor",
        "belt",
        "joint",
        "strength"
      ],
      "focus_vocab": "Conveyor splicing engineering choices",
      "tip": "Tải trọng lớn, lực căng cao và yêu cầu chống bụi."
    }
  ],
  "branching_scenarios": [
    {
      "id": "sc-01",
      "title": "Tình huống 1: Ngày đầu tiên nhận việc tại Phân xưởng Bảo trì",
      "group": "Chào hỏi và làm quen",
      "category": "general",
      "week": 1,
      "description": "Bạn là nhân viên mới gia nhập đội cơ khí. Hãy chào hỏi quản lý xưởng, giới thiệu tên, vị trí và thể hiện thái độ sẵn sàng học hỏi.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Mr. Thomas (Plant Maintenance Manager)",
          "text": "Good morning! Welcome to the central maintenance workshop. You must be our new mechanical technician.",
          "text_vi": "Chào buổi sáng! Chào mừng bạn đến với phân xưởng bảo trì trung tâm. Bạn hẳn là kỹ thuật viên cơ khí mới của chúng tôi.",
          "options": [
            {
              "text": "Good morning Mr. Thomas. Yes, my name is Alex Tran. I am very excited to join the team.",
              "text_vi": "Chào buổi sáng ông Thomas. Vâng, tên tôi là Alex Tran. Tôi rất hào hứng được gia nhập đội ngũ.",
              "feedback": "CHUẨN MỰC! Chào kèm tên quản lý lịch sự và giới thiệu tên đầy đủ.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Yeah, I am here for work.",
              "text_vi": "Ừ, tôi tới đây làm việc.",
              "feedback": "Quá cộc lốc! Ngày đầu tiên nên chào hỏi lịch sự và nêu rõ tên họ.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Mr. Thomas (Plant Maintenance Manager)",
          "text": "Great to meet you, Alex. Did human resources issue your safety gear and workshop badge yet?",
          "text_vi": "Rất vui được gặp bạn, Alex. Phòng nhân sự đã cấp đồ bảo hộ và thẻ xưởng cho bạn chưa?",
          "options": [
            {
              "text": "Yes, sir. I have my hard hat, safety glasses, steel-toe boots, and employee badge right here.",
              "text_vi": "Dạ rồi thưa ông. Tôi có mũ cứng, kính an toàn, giày mũi thép và thẻ nhân viên ở đây rồi ạ.",
              "feedback": "XUẤT SẮC! Liệt kê đầy đủ các trang bị PPE cốt lõi.",
              "is_safe": true,
              "next_node": "step_3"
            },
            {
              "text": "I have some boots, but I forgot the glasses in the car.",
              "text_vi": "Tôi có giày rồi, nhưng quên kính trong xe.",
              "feedback": "Nguy hiểm! Quên PPE không được phép vào xưởng.",
              "is_safe": false,
              "next_node": "step_2"
            }
          ]
        },
        "step_3": {
          "speaker": "Mr. Thomas (Plant Maintenance Manager)",
          "text": "Excellent. Minh will be your senior mentor for the first month. He is over at Workbench 3. Are you ready for the safety induction tour?",
          "text_vi": "Tuyệt vời. Minh sẽ là người hướng dẫn trực tiếp cho bạn trong tháng đầu. Cậu ấy đang ở Bàn 3. Bạn đã sẵn sàng cho chuyến đi thị sát an toàn chưa?",
          "options": [
            {
              "text": "Yes, absolutely! I am ready to meet Minh and complete the safety induction.",
              "text_vi": "Vâng, chắc chắn rồi ạ! Tôi sẵn sàng gặp anh Minh và hoàn thành chuyến thị sát an toàn.",
              "feedback": "TUYỆT VỜI! Thể hiện sự nhiệt huyết và tôn trọng quy trình an toàn.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Mr. Thomas (Plant Maintenance Manager)",
          "text": "Welcome aboard Alex. Remember our golden rule: safety always comes first, speed comes second.",
          "text_vi": "Chào mừng bạn gia nhập Alex. Hãy nhớ nguyên tắc vàng: an toàn luôn là số một, tốc độ là số hai.",
          "is_terminal": true,
          "summary": {
            "result": "Hoàn thành xuất sắc ngày đầu làm việc với ấn tượng chuyên nghiệp.",
            "common_mistakes": "Dùng từ cộc lốc (Yeah), quên liệt kê PPE.",
            "focus_vocab": [
              "mechanical technician",
              "safety gear",
              "employee badge",
              "safety induction"
            ],
            "natural_phrasing": "Yes, sir. I am very excited to join the team."
          }
        }
      }
    },
    {
      "id": "sc-02",
      "title": "Tình huống 2: Làm quen và chào hỏi đồng nghiệp người nước ngoài",
      "group": "Chào hỏi và làm quen",
      "category": "general",
      "week": 2,
      "description": "Bạn gặp John, chuyên gia kỹ thuật người Anh vừa sang hỗ trợ phân xưởng. Hãy chào hỏi và giới thiệu ngắn về vị trí làm việc của bạn.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "John (Field Service Specialist)",
          "text": "Hi there! I am John from the UK engineering support team. Nice to meet you.",
          "text_vi": "Chào bạn! Tôi là John đến từ đội hỗ trợ kỹ thuật Vương quốc Anh. Rất vui được gặp bạn.",
          "options": [
            {
              "text": "Hi John! Nice to meet you too. My name is Alex, maintenance technician for Line 1.",
              "text_vi": "Chào John! Rất vui được gặp bạn. Tôi tên là Alex, kỹ thuật viên bảo trì của Dây chuyền 1.",
              "feedback": "CHUẨN XÁC! Chào lại thân thiện kèm chức danh và dây chuyền phụ trách.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I am worker. You fix machine?",
              "text_vi": "Tôi là công nhân. Bạn sửa máy hả?",
              "feedback": "Ngữ pháp còn hạn chế. Nên dùng 'My name is... I am a maintenance technician'.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "John (Field Service Specialist)",
          "text": "Great to meet you Alex. How long have you been working with these German packaging machines?",
          "text_vi": "Rất vui được gặp bạn Alex. Bạn đã làm việc với những máy đóng gói của Đức này được bao lâu rồi?",
          "options": [
            {
              "text": "I have worked on this packaging line for about two years. If you need any workshop tools, please let me know.",
              "text_vi": "Tôi đã làm việc ở dây chuyền đóng gói này khoảng 2 năm. Nếu bạn cần dụng cụ xưởng gì, cứ bảo tôi nhé.",
              "feedback": "TUYỆT VỜI! Chia sẻ kinh nghiệm và chủ động đề nghị hỗ trợ đồng nghiệp quốc tế.",
              "is_safe": true,
              "next_node": "step_3"
            }
          ]
        },
        "step_3": {
          "speaker": "John (Field Service Specialist)",
          "text": "That is fantastic, Alex. I will definitely need a torque wrench and a multimeter later. Thanks for the warm welcome!",
          "text_vi": "Thật tuyệt vời Alex. Lát nữa tôi chắc chắn sẽ cần cờ lê lực và đồng hồ vạn năng. Cảm ơn vì sự đón tiếp nồng hậu!",
          "options": [
            {
              "text": "You are welcome John. Have a great working day!",
              "text_vi": "Không có chi John. Chúc bạn một ngày làm việc hiệu quả!",
              "feedback": "HOÀN HẢO! Kết thúc hội thoại tự nhiên, hòa đồng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "John (Field Service Specialist)",
          "text": "Cheers mate! See you at the coffee break.",
          "text_vi": "Cảm ơn bạn nhé! Hẹn gặp bạn vào giờ giải lao cà phê.",
          "is_terminal": true,
          "summary": {
            "result": "Tạo mối quan hệ đồng nghiệp cởi mở, tự tin với chuyên gia quốc tế.",
            "common_mistakes": "Thiếu mạo từ a/an khi nói nghề nghiệp; ngại giao tiếp.",
            "focus_vocab": [
              "engineering support",
              "packaging machines",
              "torque wrench",
              "warm welcome"
            ],
            "natural_phrasing": "If you need any workshop tools, please let me know."
          }
        }
      }
    },
    {
      "id": "sc-03",
      "title": "Tình huống 3: Đón tiếp và kiểm tra an toàn khách tham quan nhà máy",
      "group": "Chào hỏi và làm quen",
      "category": "general",
      "week": 3,
      "description": "Một đoàn kiểm toán an toàn quốc tế đến cổng xưởng. Bạn có nhiệm vụ chào hỏi, kiểm tra thẻ ra vào và phát trang bị bảo hộ.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Ms. Sarah (Safety Auditor)",
          "text": "Good morning. We are here from corporate headquarters for the annual environmental and safety audit.",
          "text_vi": "Chào buổi sáng. Chúng tôi đến từ trụ sở tập đoàn để thực hiện đợt đánh giá an toàn và môi trường hàng năm.",
          "options": [
            {
              "text": "Good morning Ms. Sarah and welcome to Plant 2. May I see your visitor badges and company IDs, please?",
              "text_vi": "Chào buổi sáng cô Sarah và chào mừng đến với Nhà máy 2. Tôi có thể xem thẻ khách và thẻ công ty của quý vị được không ạ?",
              "feedback": "CHUẨN MỰC! Lịch sự chào đón và thực hiện đúng thủ tục an ninh.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Go inside, room 2.",
              "text_vi": "Vào trong đi, phòng số 2.",
              "feedback": "Rất thiếu chuyên nghiệp và vi phạm quy trình kiểm soát an ninh ra vào.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Ms. Sarah (Safety Auditor)",
          "text": "Certainly, here are our audit passes. Do we need any specific personal protective equipment before entering the production hall?",
          "text_vi": "Chắc chắn rồi, đây là thẻ kiểm toán của chúng tôi. Chúng tôi có cần trang bị bảo hộ chuyên dụng nào trước khi vào sảnh sản xuất không?",
          "options": [
            {
              "text": "Yes, ma'am. High-visibility vests, hard hats, earplugs, and safety glasses are mandatory. Here are clean sets for your team.",
              "text_vi": "Dạ có thưa cô. Áo phản quang, mũ cứng, nút tai chống ồn và kính an toàn là bắt buộc. Đây là các bộ sạch cho đoàn của cô.",
              "feedback": "RẤT CHUẨN! Liệt kê đủ PPE bắt buộc và cung cấp trang bị sạch sẽ.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Ms. Sarah (Safety Auditor)",
          "text": "Thank you for the strict compliance and professionalism. Let's proceed to the briefing room.",
          "text_vi": "Cảm ơn sự tuân thủ nghiêm ngặt và tính chuyên nghiệp của bạn. Hãy cùng đến phòng họp tóm tắt.",
          "is_terminal": true,
          "summary": {
            "result": "Đón tiếp chu đáo, giữ vững quy định an ninh và an toàn xưởng.",
            "common_mistakes": "Cho khách vào xưởng mà không cấp PPE bắt buộc.",
            "focus_vocab": [
              "safety audit",
              "visitor badge",
              "high-visibility vest",
              "earplugs"
            ],
            "natural_phrasing": "May I see your visitor badges, please? High-visibility vests are mandatory."
          }
        }
      }
    },
    {
      "id": "sc-04",
      "title": "Tình huống 4: Trò chuyện và kết nối tại Căng tin Giờ ăn trưa",
      "group": "Giao tiếp hằng ngày",
      "category": "daily",
      "week": 4,
      "description": "Bạn đang ngồi ăn trưa tại căng tin nhà máy và muốn bắt chuyện với một kỹ thuật viên mới từ bộ phận điện tự động.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Bình (Automation Technician)",
          "text": "Excuse me, is this seat taken?",
          "text_vi": "Xin lỗi, chỗ này đã có ai ngồi chưa bạn?",
          "options": [
            {
              "text": "No, it is free. Please have a seat! My name is Alex from mechanical maintenance.",
              "text_vi": "Chưa, ghế trống bạn ơi. Mời bạn ngồi! Mình tên là Alex bên bảo trì cơ khí.",
              "feedback": "CỞI MỞ & LỊCH SỰ! Mời đồng nghiệp ngồi và chủ động giới thiệu.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Sit here.",
              "text_vi": "Ngồi đây đi.",
              "feedback": "Hơi cộc lốc trong giao tiếp thân thiện.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Bình (Automation Technician)",
          "text": "Thanks Alex! I am Binh, just transferred to the PLC and robotics team. How is the food in the cafeteria usually?",
          "text_vi": "Cảm ơn Alex! Mình là Bình, vừa chuyển sang đội PLC và robot. Đồ ăn ở căng tin này thường thế nào bạn?",
          "options": [
            {
              "text": "It is quite good, especially the noodle soup on Tuesdays. How is your first week with the automation team going?",
              "text_vi": "Khá ngon bạn à, đặc biệt là món phở vào Thứ Ba. Tuần đầu của bạn bên đội tự động hóa thế nào rồi?",
              "feedback": "RẤT TỰ NHIÊN! Chia sẻ gợi ý món ăn và hỏi thăm công việc của đồng nghiệp.",
              "is_safe": true,
              "next_node": "step_3"
            }
          ]
        },
        "step_3": {
          "speaker": "Bình (Automation Technician)",
          "text": "A bit challenging with the new robotic arm controllers, but the team is very supportive. Let's grab a coffee together after shift!",
          "text_vi": "Hơi thử thách với bộ điều khiển cánh tay robot mới, nhưng đội rất hỗ trợ. Sau ca tụi mình cùng uống cà phê nhé!",
          "options": [
            {
              "text": "Sounds great Binh! I know a good coffee shop right outside the factory gate. See you after shift at 5 PM.",
              "text_vi": "Nghe tuyệt đấy Bình! Mình biết một quán cà phê ngon ngay ngoài cổng nhà máy. Hẹn gặp bạn sau ca lúc 5 giờ chiều nhé.",
              "feedback": "HOÀN HẢO! Xây dựng mối quan hệ đồng nghiệp ấm áp.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Bình (Automation Technician)",
          "text": "Deal! Enjoy your lunch Alex.",
          "text_vi": "Chốt nhé! Chúc bạn ăn trưa ngon miệng Alex.",
          "is_terminal": true,
          "summary": {
            "result": "Tạo được tình bạn đồng nghiệp bền vững giữa bộ phận cơ khí và tự động hóa.",
            "common_mistakes": "Ngại bắt chuyện, chỉ gật đầu không nói.",
            "focus_vocab": [
              "is this seat taken?",
              "robotics team",
              "sounds great",
              "after shift"
            ],
            "natural_phrasing": "No, it is free. Please have a seat!"
          }
        }
      }
    },
    {
      "id": "sc-05",
      "title": "Tình huống 5: Thảo luận Lịch trực Kỹ thuật Cuối tuần",
      "group": "Giao tiếp hằng ngày",
      "category": "daily",
      "week": 6,
      "description": "Trưởng nhóm cần 1 kỹ thuật viên trực sự cố vào sáng Chủ Nhật. Hãy trao đổi và xác nhận lịch trực phù hợp.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Hung (Maintenance Team Lead)",
          "text": "Alex, we need one standby technician for the air compressor overhaul this Sunday morning from 8 to 12. Are you available?",
          "text_vi": "Alex, chúng ta cần một kỹ thuật viên trực dự phòng cho đợt đại tu máy nén khí sáng Chủ Nhật tuần này từ 8h đến 12h. Bạn có thể thu xếp được không?",
          "options": [
            {
              "text": "Yes, I am available this Sunday morning, Mr. Hung. Will overtime pay and transport allowance be applied?",
              "text_vi": "Vâng, sáng Chủ Nhật này tôi có thể làm được thưa anh Hùng. Chế độ làm thêm giờ và phụ cấp đi lại có được áp dụng không ạ?",
              "feedback": "CHUẨN MỰC! Nhận lịch và hỏi khéo léo, chuyên nghiệp về chế độ làm thêm.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "No, Sunday is my sleep day.",
              "text_vi": "Không, Chủ Nhật là ngày tôi ngủ.",
              "feedback": "Cách từ chối thiếu tính xây dựng trong môi trường xưởng.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Hung (Maintenance Team Lead)",
          "text": "Yes, 200% weekend overtime rate plus meal voucher. You only need to monitor oil pressure during the recommissioning run.",
          "text_vi": "Có chứ, hệ số làm thêm cuối tuần 200% cộng phiếu ăn trưa. Bạn chỉ cần theo dõi áp suất dầu trong lúc chạy tái vận hành.",
          "options": [
            {
              "text": "That sounds very reasonable. Please add my name to the official roster. I will be on site at 7:45 AM.",
              "text_vi": "Rất hợp lý ạ. Xin hãy ghi tên tôi vào danh sách trực chính thức. Tôi sẽ có mặt tại xưởng lúc 7h45 sáng.",
              "feedback": "XUẤT SẮC! Cam kết thời gian có mặt sớm 15 phút để chuẩn bị.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Hung (Maintenance Team Lead)",
          "text": "Thank you Alex. I appreciate your dedication and reliability.",
          "text_vi": "Cảm ơn Alex. Tôi đánh giá cao sự tận tâm và đáng tin cậy của bạn.",
          "is_terminal": true,
          "summary": {
            "result": "Đạt thỏa thuận làm thêm giờ rõ ràng, nâng cao uy tín với quản lý.",
            "common_mistakes": "Từ chối thô lỗ hoặc nhận lời nhưng không hỏi rõ quyền lợi.",
            "focus_vocab": [
              "standby technician",
              "overhaul",
              "overtime rate",
              "official roster"
            ],
            "natural_phrasing": "Please add my name to the official roster. I will be on site at 7:45 AM."
          }
        }
      }
    },
    {
      "id": "sc-06",
      "title": "Tình huống 6: Đổi ca làm việc với Đồng nghiệp do việc Gia đình",
      "group": "Giao tiếp hằng ngày",
      "category": "daily",
      "week": 8,
      "description": "Bạn có việc gia đình đột xuất vào tối Thứ Sáu (Ca 3) và cần nhờ Tuấn đổi sang Ca 1 (Sáng) hộ bạn.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Tuấn (Colleague)",
          "text": "Hey Alex, you look a bit worried. Is everything okay?",
          "text_vi": "Ê Alex, trông bạn có vẻ lo lắng thế. Mọi chuyện ổn cả chứ?",
          "options": [
            {
              "text": "Hi Tuan. My sister has a graduation ceremony this Friday evening. Could you swap shifts with me? I would take your Shift 1 on Saturday.",
              "text_vi": "Chào Tuấn. Tối Thứ Sáu này em gái mình làm lễ tốt nghiệp. Bạn có thể đổi ca với mình được không? Mình sẽ trực bù Ca 1 Thứ Bảy cho bạn.",
              "feedback": "RẤT CHUẨN! Nêu rõ lý do gia đình và chủ động đề xuất ca trực bù hợp lý.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Work my shift Friday. I am busy.",
              "text_vi": "Làm ca Thứ Sáu giùm tôi đi. Tôi bận.",
              "feedback": "Ra lệnh thay vì nhờ vả lịch sự.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Tuấn (Colleague)",
          "text": "Sure Alex, family comes first! I can cover your Friday night shift, and you take my Saturday morning shift. Did you submit the shift swap form to the supervisor?",
          "text_vi": "Được chứ Alex, gia đình là trên hết! Mình có thể trực ca đêm Thứ Sáu cho bạn, và bạn trực sáng Thứ Bảy giùm mình. Bạn đã nộp đơn đổi ca cho giám sát chưa?",
          "options": [
            {
              "text": "I have the form filled out right here. Let's both sign it, and I will submit it to Mr. Hung for approval now. Thank you so much, Tuan!",
              "text_vi": "Mình đã điền sẵn biểu mẫu đây rồi. Tụi mình cùng ký nhé, rồi mình sẽ nộp cho anh Hùng phê duyệt ngay. Cảm ơn Tuấn nhiều lắm!",
              "feedback": "TUYỆT ĐỐI CHUẨN! Thực hiện đúng quy trình giấy tờ và bày tỏ lòng biết ơn.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Tuấn (Colleague)",
          "text": "No problem at all Alex. Have a wonderful time at your sister's ceremony!",
          "text_vi": "Không có chi đâu Alex. Chúc bạn có thời gian tuyệt vời tại lễ tốt nghiệp của em gái!",
          "is_terminal": true,
          "summary": {
            "result": "Đổi ca thành công đúng luật công ty, giữ gìn tình đồng đội.",
            "common_mistakes": "Tự ý đổi ca miệng mà không thông qua biểu mẫu và chữ ký giám sát.",
            "focus_vocab": [
              "swap shifts",
              "cover a shift",
              "shift swap form",
              "supervisor approval"
            ],
            "natural_phrasing": "Could you swap shifts with me? I would take your shift on Saturday."
          }
        }
      }
    },
    {
      "id": "sc-07",
      "title": "Tình huống 7: Hỏi đường đến Phòng Thí nghiệm Kiểm định Chất lượng (QA Lab)",
      "group": "Hỏi đường, mua sắm và dịch vụ",
      "category": "general",
      "week": 9,
      "description": "Bạn cần mang mẫu dầu máy nén khí sang phòng QA Lab để phân tích độ ẩm và cặn bẩn nhưng chưa biết đường đi.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Security Officer (Main Gate)",
          "text": "Good morning. Can I help you find something in the industrial complex?",
          "text_vi": "Chào buổi sáng. Tôi có thể giúp bạn tìm địa điểm nào trong khu liên hợp công nghiệp không?",
          "options": [
            {
              "text": "Good morning. Could you please direct me to the Quality Assurance (QA) testing lab? I have a lubrication sample to deliver.",
              "text_vi": "Chào buổi sáng. Chú có thể chỉ đường giúp tôi đến Phòng thí nghiệm kiểm định chất lượng QA không ạ? Tôi cần giao một mẫu dầu bôi trơn.",
              "feedback": "LỊCH SỰ & RÕ RÀNG! Nêu chính xác tên phòng ban và mục đích.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Where is lab?",
              "text_vi": "Phòng lab ở đâu?",
              "feedback": "Quá cộc lốc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Security Officer (Main Gate)",
          "text": "Walk straight along the main walkway past Warehouse 3, turn right at the water cooling tower, and it is on the second floor of Building C.",
          "text_vi": "Cháu đi thẳng theo lối đi chính qua Kho 3, rẽ phải tại tháp giải nhiệt nước, phòng lab nằm ở tầng hai của Tòa nhà C.",
          "options": [
            {
              "text": "So walk past Warehouse 3, turn right at the cooling tower, second floor Building C. Is an electronic access card required at the door?",
              "text_vi": "Dạ tức là đi qua Kho 3, rẽ phải ở tháp giải nhiệt, tầng 2 Tòa C. Cửa phòng có cần quẹt thẻ từ không chú?",
              "feedback": "XUẤT SẮC! Nhắc lại lộ trình để xác nhận (read-back) và hỏi trước về thẻ từ ra vào.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Security Officer (Main Gate)",
          "text": "Yes, press the intercom button if you do not have a Level 2 keycard. Have a good day!",
          "text_vi": "Đúng rồi, bấm nút chuông đàm thoại nếu cháu chưa có thẻ từ Cấp 2 nhé. Chúc cháu một ngày tốt lành!",
          "is_terminal": true,
          "summary": {
            "result": "Hỏi đường chính xác, chủ động xác nhận chi tiết cửa ra vào.",
            "common_mistakes": "Nghe đường mà không nhắc lại để xác nhận, dẫn tới đi lạc trong nhà máy lớn.",
            "focus_vocab": [
              "direct me to...",
              "walk straight past",
              "turn right at",
              "intercom button"
            ],
            "natural_phrasing": "Could you please direct me to...? So walk past... and turn right, correct?"
          }
        }
      }
    },
    {
      "id": "sc-08",
      "title": "Tình huống 8: Mua đồ bảo hộ và vật tư an toàn tại Cửa hàng Vật tư",
      "group": "Hỏi đường, mua sắm và dịch vụ",
      "category": "she",
      "week": 10,
      "description": "Bạn cần mua bổ sung kính chống hóa chất, găng tay nitrile chịu dầu và mặt nạ lọc bụi mịn N95 cho tổ bảo trì.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supply Store Clerk",
          "text": "Welcome to Safety First Equipment Store! What PPE supplies are you looking for today?",
          "text_vi": "Chào mừng quý khách đến cửa hàng thiết bị bảo hộ Safety First! Hôm nay bạn đang tìm các vật tư an toàn nào?",
          "options": [
            {
              "text": "Hello. I need five pairs of anti-splash chemical goggles, two boxes of heavy-duty nitrile gloves size L, and a pack of N95 dust masks.",
              "text_vi": "Xin chào. Tôi cần 5 chiếc kính chống hóa chất chống tia bắn, 2 hộp găng tay nitrile chịu dầu cỡ L và một gói khẩu trang chống bụi N95.",
              "feedback": "CHUẨN XÁC & ĐẦY ĐỦ! Nêu rõ số lượng, chủng loại và kích cỡ.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Give me some gloves and masks.",
              "text_vi": "Bán cho ít găng tay với khẩu trang.",
              "feedback": "Mơ hồ, không có chủng loại chống hóa chất hay kích cỡ.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supply Store Clerk",
          "text": "We have 3M anti-fog chemical goggles and Ansell Sol-Vex nitrile gloves in stock. Do you need a VAT tax invoice for company reimbursement?",
          "text_vi": "Chúng tôi có sẵn kính chống đọng sương của 3M và găng tay nitrile Ansell Sol-Vex. Bạn có cần xuất hóa đơn đỏ VAT để thanh toán lại với công ty không?",
          "options": [
            {
              "text": "Yes, please issue a corporate VAT invoice to English Hub Industrial Services. Here is our company tax code.",
              "text_vi": "Dạ có, xin hãy xuất hóa đơn VAT doanh nghiệp cho Công ty Dịch vụ Kỹ thuật English Hub. Mã số thuế của công ty tôi đây ạ.",
              "feedback": "XUẤT SẮC! Cung cấp đúng mã số thuế phục vụ thanh toán nội bộ.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supply Store Clerk",
          "text": "Here is your receipt, certificate of conformity, and items securely packed. Thank you for shopping with us!",
          "text_vi": "Đây là hóa đơn, chứng chỉ hợp chuẩn chất lượng và hàng đã đóng gói cẩn thận. Cảm ơn bạn đã mua hàng!",
          "is_terminal": true,
          "summary": {
            "result": "Mua đúng chủng loại PPE chuyên dụng và lấy đầy đủ hóa đơn chứng từ.",
            "common_mistakes": "Mua nhầm găng tay y tế thông thường không chịu được dầu công nghiệp.",
            "focus_vocab": [
              "anti-splash goggles",
              "nitrile gloves",
              "N95 dust mask",
              "VAT tax invoice"
            ],
            "natural_phrasing": "I need five pairs of... Do you have certificate of conformity?"
          }
        }
      }
    },
    {
      "id": "sc-09",
      "title": "Tình huống 9: Đăng ký vé Xe buýt Đưa đón Công nhân viên (Plant Shuttle)",
      "group": "Hỏi đường, mua sắm và dịch vụ",
      "category": "general",
      "week": 11,
      "description": "Bạn mới chuyển chỗ ở và cần đăng ký đổi tuyến xe buýt đưa đón công nhân tại phòng Hành chính Nhân sự.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "HR Transport Coordinator",
          "text": "Hello! How can I assist you with employee transportation services today?",
          "text_vi": "Xin chào! Hôm nay tôi có thể hỗ trợ gì cho bạn về dịch vụ xe đưa đón nhân viên?",
          "options": [
            {
              "text": "Good morning. I recently relocated to District 2 and I would like to register for Route Number 4 shuttle bus starting next Monday.",
              "text_vi": "Chào chị. Tôi vừa chuyển nhà về Quận 2 và tôi muốn đăng ký đổi sang tuyến xe buýt số 4 bắt đầu từ Thứ Hai tới.",
              "feedback": "RÕ RÀNG & MẠCH LẠC! Nêu địa bàn mới, số hiệu tuyến xe và ngày bắt đầu.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I need bus change.",
              "text_vi": "Tôi cần đổi xe.",
              "feedback": "Quá ngắn, thiếu thông tin tuyến và địa điểm.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "HR Transport Coordinator",
          "text": "Route 4 has two pickup points near District 2: Cantavil Mall at 6:15 AM and An Phu Station at 6:25 AM. Which pickup point suits you better?",
          "text_vi": "Tuyến số 4 có 2 điểm đón gần Quận 2: TTTM Cantavil lúc 6h15 sáng và Trạm An Phú lúc 6h25 sáng. Điểm đón nào thuận tiện hơn cho bạn?",
          "options": [
            {
              "text": "An Phu Station at 6:25 AM is only a five-minute walk from my apartment. Please register me for that stop.",
              "text_vi": "Trạm An Phú lúc 6h25 sáng chỉ cách căn hộ của tôi 5 phút đi bộ. Xin vui lòng đăng ký điểm đón đó cho tôi.",
              "feedback": "TUYỆT VỜI! Chọn điểm đón kèm lý do thuyết phục.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "HR Transport Coordinator",
          "text": "Done! Here is your Route 4 electronic bus pass sticker. Please tap it when boarding. Safe travels!",
          "text_vi": "Xong rồi! Đây là tem thẻ xe buýt điện tử Tuyến 4 của bạn. Vui lòng quẹt thẻ khi lên xe. Chúc bạn đi lại an toàn!",
          "is_terminal": true,
          "summary": {
            "result": "Đổi tuyến xe đưa đón nhanh chóng, chính xác giờ giấc.",
            "common_mistakes": "Không hỏi rõ giờ xe lăn bánh dẫn đến trễ ca làm việc.",
            "focus_vocab": [
              "shuttle bus",
              "pickup point",
              "relocated to",
              "electronic bus pass"
            ],
            "natural_phrasing": "I would like to register for Route Number 4... An Phu Station suits me better."
          }
        }
      }
    },
    {
      "id": "sc-10",
      "title": "Tình huống 10: Phối hợp Thay thế Đoạn Đường ống Khí nén bị Thủng",
      "group": "Giao tiếp với đồng nghiệp",
      "category": "workplace",
      "week": 13,
      "description": "Bạn và đồng nghiệp Hoàng đang phối hợp tháo dỡ và thay thế một đoạn ống thép mạ kẽm 1 inch bị nứt trên cao.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Hoàng (Pipefitter)",
          "text": "Alex, I am up on the mobile scaffold holding the pipe support clamp. Did you depressurize the compressed air manifold?",
          "text_vi": "Alex, tôi đang ở trên giàn giáo di động giữ cùm treo ống này. Cậu đã xả hết áp suất trong cụm ống góp khí nén chưa?",
          "options": [
            {
              "text": "Yes, manifold isolation valve is closed and I opened the bleed valve. The gauge reads exactly zero bar.",
              "text_vi": "Rồi, van cô lập cụm ống đã đóng và tôi đã mở van xả đáy. Đồng hồ đo áp chỉ đúng 0 bar rồi.",
              "feedback": "CHUẨN MỰC AN TOÀN! Xác nhận cả van cô lập lẫn đồng hồ áp suất về 0.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I think it is empty, just unscrew it.",
              "text_vi": "Tôi nghĩ nó rỗng rồi, cứ tháo đại đi.",
              "feedback": "CỰC KỲ NGUY HIỂM! Không xác nhận áp suất mà tháo ống có thể gây nổ vỡ tai nạn nặng.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Hoàng (Pipefitter)",
          "text": "Great! I am unbolting the top union now. Please hold the bottom pipe section firmly with the pipe wrench so it does not drop.",
          "text_vi": "Tốt lắm! Giờ tôi tháo rắc-co phía trên đây. Cậu dùng mỏ lết răng giữ chặt đoạn ống phía dưới để nó không bị rơi tự do nhé.",
          "options": [
            {
              "text": "Got it! I have a secure two-hand grip with the 24-inch pipe wrench. Unbolt whenever you are ready.",
              "text_vi": "Đã giữ chặt! Tôi đã kẹp chắc bằng mỏ lết răng 24 inch bằng cả hai tay rồi. Cậu tháo bu-lông khi nào sẵn sàng nhé.",
              "feedback": "PHỐI HỢP ĂN Ý! Khẳng định tư thế giữ ống chắc chắn.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Hoàng (Pipefitter)",
          "text": "Union is off, lowering the old pipe section down to you. Excellent teamwork, Alex!",
          "text_vi": "Rắc-co đã rời, tôi hạ đoạn ống cũ xuống cho cậu đây. Phối hợp đồng đội rất tuyệt, Alex!",
          "is_terminal": true,
          "summary": {
            "result": "Thay ống khí nén an toàn tuyệt đối, triệt tiêu nguy cơ áp suất dư và rơi đồ.",
            "common_mistakes": "Chủ quan không xả áp trước khi tháo phụ kiện đường ống.",
            "focus_vocab": [
              "mobile scaffold",
              "depressurize",
              "bleed valve",
              "pipe wrench"
            ],
            "natural_phrasing": "The gauge reads zero bar. I have a secure grip with the wrench."
          }
        }
      }
    },
    {
      "id": "sc-11",
      "title": "Tình huống 11: Mượn Cờ lê Cân lực Hiệu chuẩn từ Phòng Dụng cụ (Tool Crib)",
      "group": "Giao tiếp với đồng nghiệp",
      "category": "workplace",
      "week": 14,
      "description": "Bạn cần siết nắp máy nén khí đúng lực 85 Nm và đến kho mượn dụng cụ đã được kiểm định hạn sử dụng.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Mr. Ba (Tool Crib Keeper)",
          "text": "Good morning Alex. What specialized tools do you need for your work order today?",
          "text_vi": "Chào buổi sáng Alex. Cậu cần dụng cụ chuyên dụng gì cho phiếu công việc hôm nay?",
          "options": [
            {
              "text": "Good morning Mr. Ba. I need a calibrated torque wrench, range 20 to 100 Nm, and a 17-mm deep impact socket.",
              "text_vi": "Chào buổi sáng chú Ba. Cháu cần một cờ lê lực đã hiệu chuẩn dải 20-100 Nm và một đầu tuýp dài 17 mm.",
              "feedback": "CHUẨN XÁC KỸ THUẬT! Nêu rõ dải đo lực và kích cỡ đầu tuýp.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Give me some wrench to turn some bolts fast.",
              "text_vi": "Đưa tôi cái cờ lê vặn bu-lông lẹ lẹ.",
              "feedback": "Quá mơ hồ, không nêu dải đo lực hay tiêu chuẩn hiệu chuẩn.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Mr. Ba (Tool Crib Keeper)",
          "text": "Here is the calibrated torque wrench. Calibration sticker is valid until October 2026. Please write your Employee ID and sign the tool checkout register.",
          "text_vi": "Đây là cờ lê cân lực đã hiệu chuẩn. Tem kiểm định còn hạn đến tháng 10/2026. Cháu ghi mã nhân viên và ký vào sổ mượn nhé.",
          "options": [
            {
              "text": "My ID is TECH-409. I will zero the torque setting and return both the wrench and socket before 4 PM today.",
              "text_vi": "Mã thẻ cháu là TECH-409. Cháu sẽ chỉnh lực về số 0 và hoàn trả cả cờ lê lẫn đầu tuýp trước 4h chiều nay ạ.",
              "feedback": "RẤT CHUYÊN NGHIỆP! Hiểu rõ nguyên tắc chỉnh về 0 để bảo vệ lò xo cờ lê lực.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Mr. Ba (Tool Crib Keeper)",
          "text": "Good technician habits! Always zeroing prevents spring fatigue. Have a productive shift, Alex.",
          "text_vi": "Thói quen thợ giỏi đấy! Luôn trả về 0 giúp chống mỏi lò xo. Chúc ca làm việc năng suất nhé Alex.",
          "is_terminal": true,
          "summary": {
            "result": "Mượn dụng cụ đúng thông số và cam kết bảo quản chuyên nghiệp.",
            "common_mistakes": "Quên trả lực cờ lê về 0 sau khi dùng, làm sai lệch kết quả đo lần sau.",
            "focus_vocab": [
              "calibrated torque wrench",
              "deep impact socket",
              "calibration sticker",
              "zero the torque setting"
            ],
            "natural_phrasing": "I will zero the torque setting and return the tools before 4 PM."
          }
        }
      }
    },
    {
      "id": "sc-12",
      "title": "Tình huống 12: Hướng dẫn Kỹ thuật viên Thực tập Thao tác Đo Điện trở Cách điện (Megger)",
      "group": "Giao tiếp với đồng nghiệp",
      "category": "workplace",
      "week": 15,
      "description": "Bạn hướng dẫn thực tập sinh Tuấn cách đo điện trở cách điện của cuộn dây động cơ bơm bằng đồng hồ Megger 500V an toàn.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Tuấn (Apprentice Technician)",
          "text": "Alex, I have the 500-volt insulation tester ready. Can I connect the test leads to the motor terminals now?",
          "text_vi": "Anh Alex, em chuẩn bị xong máy đo cách điện 500V rồi. Giờ em kẹp que đo vào các cọc đấu dây động cơ được chưa anh?",
          "options": [
            {
              "text": "Hold on Tuan! First, verify that the motor is fully isolated and zero voltage is confirmed with a multimeter.",
              "text_vi": "Khoan đã Tuấn! Trước tiên, phải xác nhận động cơ đã được cô lập hoàn toàn và kiểm tra điện áp bằng 0 bằng đồng hồ vạn năng.",
              "feedback": "NGUYÊN TẮC VÀNG! Đo cách điện trên mạch còn điện áp sống sẽ gây nổ thiết bị đo.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "Go ahead and press test button.",
              "text_vi": "Cứ bấm nút test đi em.",
              "feedback": "Nguy hiểm! Chưa kiểm tra điện áp dư.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Tuấn (Apprentice Technician)",
          "text": "Multimeter confirms zero volts across all three phases to ground. What is our acceptable insulation resistance threshold?",
          "text_vi": "Đồng hồ vạn năng xác nhận 0 vôn giữa cả ba pha với đất rồi anh. Ngưỡng điện trở cách điện chấp nhận được là bao nhiêu ạ?",
          "options": [
            {
              "text": "For a 400V motor, the reading should be at least 5 Megohms. Connect one lead to Phase U and the other to the ground frame, then test for 60 seconds.",
              "text_vi": "Với động cơ 400V, chỉ số phải đạt tối thiểu 5 Megohm. Kẹp một que vào Pha U và que kia vào vỏ đất, sau đó đo trong 60 giây.",
              "feedback": "CHỈ DẪN KỸ THUẬT CHUẨN MỰC! Đưa ra tiêu chuẩn Megohm và thời gian đo chuẩn IEEE.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Tuấn (Apprentice Technician)",
          "text": "The meter reads 250 Megohms! The insulation is in excellent condition. Thank you for guiding me through the safe steps, Alex.",
          "text_vi": "Đồng hồ chỉ 250 Megohm anh ơi! Lớp cách điện trong tình trạng cực tốt. Cảm ơn anh đã hướng dẫn từng bước an toàn cho em.",
          "is_terminal": true,
          "summary": {
            "result": "Huấn luyện an toàn thành công, ngăn ngừa rủi ro điện cao áp cho thực tập sinh.",
            "common_mistakes": "Đo Megger khi chưa xả điện tích hoặc chưa kiểm tra 0V.",
            "focus_vocab": [
              "insulation tester (Megger)",
              "test leads",
              "insulation resistance",
              "ground frame"
            ],
            "natural_phrasing": "First, verify that the motor is fully isolated. The reading should be at least..."
          }
        }
      }
    },
    {
      "id": "sc-13",
      "title": "Tình huống 13: Bàn giao Ca Sản xuất từ Ca 1 sang Ca 2",
      "group": "Báo cáo công việc và bàn giao ca",
      "category": "workplace",
      "week": 16,
      "description": "Bàn giao tình hình vận hành máy đóng bao Dây chuyền 2 cho trưởng ca sau, lưu ý lỗi kẹt bao lúc 2h chiều.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Good afternoon Alex. How was Shift 1 today? Any equipment alarms or pending work orders for Line 2?",
          "text_vi": "Chào buổi chiều Alex. Ca 1 hôm nay thế nào? Có báo động máy móc hay phiếu công việc tồn nào trên Dây chuyền 2 không?",
          "options": [
            {
              "text": "Good afternoon David. Shift 1 produced 1,450 bags. However, Bagging Station 2 jammed at 2 PM due to a dusty photo-sensor. We cleaned the optic lens and it is running smoothly now.",
              "text_vi": "Chào buổi chiều David. Ca 1 sản xuất được 1.450 bao. Tuy nhiên, Trạm đóng bao số 2 bị kẹt lúc 2h chiều do cảm biến quang bị bụi. Chúng tôi đã lau sạch thấu kính và hiện máy đang chạy trơn tru.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Good catch. Did you log the 15-minute downtime in the SAP maintenance software?",
          "text_vi": "Xử lý tốt đấy. Bạn đã ghi nhận 15 phút dừng máy vào phần mềm bảo trì SAP chưa?",
          "options": [
            {
              "text": "Yes, downtime code DT-201 is logged with root cause and corrective action. Logbook is signed and ready for you.",
              "text_vi": "Dạ rồi, mã dừng máy DT-201 đã được ghi kèm nguyên nhân gốc rễ và hành động khắc phục. Sổ giao ca đã ký sẵn cho bạn đây.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Thanks Alex. Have a restful evening, we will monitor the photo-sensor closely tonight.",
          "text_vi": "Cảm ơn Alex. Chúc bạn có buổi tối nghỉ ngơi tốt, đêm nay chúng tôi sẽ theo dõi sát cảm biến quang.",
          "is_terminal": true,
          "summary": {
            "result": "Bàn giao ca đầy đủ sản lượng, sự cố dừng máy và mã bảo trì SAP.",
            "common_mistakes": "Giấu lỗi dừng máy hoặc quên ghi chú vào nhật ký.",
            "focus_vocab": [
              "bagging station",
              "photo-sensor",
              "downtime code",
              "root cause"
            ],
            "natural_phrasing": "Station 2 jammed at 2 PM... We cleaned the optic lens and it is running smoothly."
          }
        }
      }
    },
    {
      "id": "sc-14",
      "title": "Tình huống 14: Báo cáo Hoàn thành Bảo trì Định kỳ Máy nén khí Trục vít",
      "group": "Báo cáo công việc và bàn giao ca",
      "category": "workplace",
      "week": 18,
      "description": "Báo cáo hoàn tất bảo dưỡng 1.000 giờ cho Máy nén khí C-102 với Trưởng phòng Kỹ thuật.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, did your team finish the 1,000-hour preventive maintenance on Screw Compressor C-102?",
          "text_vi": "Alex, đội của bạn đã hoàn thành bảo trì phòng ngừa 1.000 giờ trên Máy nén khí trục vít C-102 chưa?",
          "options": [
            {
              "text": "Yes Mr. Thomas. We replaced the oil filter, air intake element, and oil separator cartridge. Fresh synthetic oil is filled to the center mark.",
              "text_vi": "Dạ rồi thưa ông Thomas. Chúng tôi đã thay lọc dầu, lõi lọc gió và lõi tách dầu. Dầu tổng hợp mới đã được châm đến vạch giữa.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Excellent. Did you perform the recommissioning test run under full working pressure?",
          "text_vi": "Tuyệt vời. Các bạn đã chạy thử tái vận hành ở đủ áp suất làm việc chưa?",
          "options": [
            {
              "text": "Yes, we test-ran for 45 minutes at 8.5 bar. Discharge temperature stabilized at 78 degrees Celsius with zero air or oil leaks.",
              "text_vi": "Dạ rồi, chúng tôi chạy thử 45 phút ở áp 8.5 bar. Nhiệt độ khí xả ổn định ở 78 độ C và hoàn toàn không có rò rỉ khí hay dầu.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Very thorough report, Alex. Close out the work order and return the machine to production.",
          "text_vi": "Báo cáo rất kỹ lưỡng Alex. Hãy đóng phiếu công việc và bàn giao máy lại cho sản xuất.",
          "is_terminal": true,
          "summary": {
            "result": "Báo cáo nghiệm thu bài bản với thông số kỹ thuật chạy thử thuyết phục.",
            "common_mistakes": "Chỉ báo 'xong rồi' mà không nêu các phụ tùng đã thay và thông số áp suất.",
            "focus_vocab": [
              "screw compressor",
              "oil separator",
              "test run",
              "stabilized temperature"
            ],
            "natural_phrasing": "We replaced the oil filter... Discharge temperature stabilized at 78 degrees."
          }
        }
      }
    },
    {
      "id": "sc-15",
      "title": "Tình huống 15: Ghi chép và Giải trình Nhật ký Công việc Ca đêm (Past Work Log)",
      "group": "Báo cáo công việc và bàn giao ca",
      "category": "workplace",
      "week": 20,
      "description": "Giải trình với Giám sát viên buổi sáng về 2 sự cố điện đã xử lý trong ca đêm qua.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Morning Alex. I see two emergency callouts in the night logbook between 1 AM and 3 AM. What occurred?",
          "text_vi": "Chào buổi sáng Alex. Tôi thấy 2 cuộc gọi khẩn cấp trong nhật ký ca đêm từ 1h đến 3h sáng. Chuyện gì đã xảy ra vậy?",
          "options": [
            {
              "text": "At 1:15 AM, Conveyor 4 tripped due to a blown 16-amp control fuse. We replaced the fuse and cleared a jammed box. Then at 2:30 AM, Pump 3 had a false low-level alarm caused by loose wiring.",
              "text_vi": "Lúc 1h15 sáng, Băng tải 4 nhảy do đứt cầu chì điều khiển 16A. Chúng tôi đã thay cầu chì và gỡ hộp kẹt. Sau đó lúc 2h30 sáng, Bơm 3 báo lỗi mức thấp giả do lỏng dây.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Were both issues fully resolved without causing product loss?",
          "text_vi": "Cả hai sự cố đã được xử lý triệt để mà không gây thất thoát sản phẩm chứ?",
          "options": [
            {
              "text": "Yes, total downtime was only 22 minutes. Both machines resumed normal operation and spare fuses were replenished in the cabinet.",
              "text_vi": "Dạ đúng, tổng thời gian dừng chỉ có 22 phút. Cả hai máy đã vận hành lại bình thường và cầu chì dự phòng đã được bổ sung vào tủ.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Great job handling both night emergencies swiftly and keeping spare stock replenished.",
          "text_vi": "Làm tốt lắm, xử lý nhanh cả hai sự cố ca đêm và chủ động bổ sung vật tư dự phòng.",
          "is_terminal": true,
          "summary": {
            "result": "Giải trình ca đêm mạch lạc, kiểm soát thời gian dừng máy ở mức tối thiểu.",
            "common_mistakes": "Không bổ sung lại vật tư dự phòng sau khi đã lấy dùng trong ca đêm.",
            "focus_vocab": [
              "emergency callout",
              "blown fuse",
              "false alarm",
              "replenished"
            ],
            "natural_phrasing": "Total downtime was only 22 minutes. Both machines resumed normal operation."
          }
        }
      }
    },
    {
      "id": "sc-16",
      "title": "Tình huống 16: Kiểm tra Trước Vận hành Máy Phay CNC (Pre-Operation Inspection)",
      "group": "Kiểm tra máy móc, bảo trì và sửa chữa",
      "category": "technical",
      "week": 22,
      "description": "Thực hiện checklist kiểm tra mức dầu bôi trơn rãnh trượt, áp suất khí nén và nút dừng khẩn cấp máy CNC.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, before loading the steel billet into CNC Machine 5, have you verified the pre-operation checklist?",
          "text_vi": "Alex, trước khi gá phôi thép vào Máy CNC số 5, bạn đã kiểm tra checklist trước vận hành chưa?",
          "options": [
            {
              "text": "Yes, slideway lubrication reservoir is full, air pressure is at 6.0 bar, and I tested the emergency stop button. The spindle interlock is functioning properly.",
              "text_vi": "Dạ rồi, bình dầu bôi trơn băng trượt đã đầy, áp suất khí đạt 6.0 bar và tôi đã kiểm tra nút dừng khẩn cấp. Khóa liên động trục chính hoạt động tốt.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Did you check the coolant concentration with the optical refractometer?",
          "text_vi": "Bạn đã đo nồng độ dung dịch làm mát bằng khúc xạ kế quang học chưa?",
          "options": [
            {
              "text": "Yes, coolant refractometer reading is 8%, right within our recommended range of 7% to 9%.",
              "text_vi": "Dạ rồi, số đọc khúc xạ kế dung dịch làm mát là 8%, nằm đúng trong dải khuyến nghị từ 7% đến 9%.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Perfect pre-check. You have full clearance to start the machining program.",
          "text_vi": "Kiểm tra trước vận hành hoàn hảo. Bạn được phép bắt đầu chương trình gia công.",
          "is_terminal": true,
          "summary": {
            "result": "Vận hành máy CNC theo chuẩn an toàn quốc tế, bảo vệ dao cụ và độ chính xác.",
            "common_mistakes": "Quên kiểm tra nồng độ dầu tưới nguội làm mòn dao gia công nhanh.",
            "focus_vocab": [
              "slideway lubrication",
              "emergency stop",
              "coolant concentration",
              "refractometer"
            ],
            "natural_phrasing": "Air pressure is at 6 bar and the emergency stop is verified."
          }
        }
      }
    },
    {
      "id": "sc-17",
      "title": "Tình huống 17: Thay thế Ổ bi Cầu Động cơ Bị Mòn Rơ (Bearing Replacement)",
      "group": "Kiểm tra máy móc, bảo trì và sửa chữa",
      "category": "technical",
      "week": 24,
      "description": "Tháo dỡ động cơ quạt hút 15 kW, dùng cảo cơ khí tháo ổ bi cũ và gia nhiệt lắp ổ bi SKF mới.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, how is the drive-end bearing replacement on the 15-kilowatt exhaust fan motor progressing?",
          "text_vi": "Alex, tiến độ thay ổ bi đầu truyền động trên động cơ quạt hút 15 kW thế nào rồi?",
          "options": [
            {
              "text": "We pulled off the old worn 6309 bearing using a hydraulic puller. The shaft journal is inspected, polished, and free of scoring marks.",
              "text_vi": "Chúng tôi đã dùng cảo thủy lực tháo ổ bi 6309 cũ bị mòn ra. Cổ trục đã được kiểm tra, đánh bóng và không có vết xước.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "How do you plan to install the new SKF bearing onto the shaft?",
          "text_vi": "Bạn dự định lắp ổ bi SKF mới vào trục bằng phương pháp nào?",
          "options": [
            {
              "text": "We are using an induction heater to heat the new bearing to exactly 110 degrees Celsius for smooth thermal shrink-fit mounting. No hammering will be used.",
              "text_vi": "Chúng tôi dùng máy gia nhiệt cảm ứng để nung ổ bi mới lên đúng 110 độ C để lắp co ngót nhiệt êm ái. Tuyệt đối không dùng búa gõ.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Standard practice! Thermal mounting prevents brinelling damage to the raceways. Keep up the good work.",
          "text_vi": "Đúng chuẩn kỹ thuật! Lắp nhiệt giúp chống dập rãnh lăn bi. Làm việc rất tốt.",
          "is_terminal": true,
          "summary": {
            "result": "Lắp đặt vòng bi chuẩn xác theo khuyến cáo SKF, đảm bảo tuổi thọ tối đa.",
            "common_mistakes": "Dùng búa đập trực tiếp lên vành ngoài làm nứt vỡ bi.",
            "focus_vocab": [
              "hydraulic puller",
              "shaft journal",
              "induction heater",
              "shrink-fit mounting"
            ],
            "natural_phrasing": "We are using an induction heater to heat the bearing to 110 degrees."
          }
        }
      }
    },
    {
      "id": "sc-18",
      "title": "Tình huống 18: Cân chỉnh Độ Căng và Độ Đồng Phẳng Dây Đai (V-Belt Alignment)",
      "group": "Kiểm tra máy móc, bảo trì và sửa chữa",
      "category": "technical",
      "week": 26,
      "description": "Sử dụng thước laser cân đồng phẳng hai puly và bút đo lực căng dây đai quạt thông gió.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, the ventilation blower V-belts were squealing this morning. What did your inspection reveal?",
          "text_vi": "Alex, dây đai quạt thông gió sáng nay kêu rít to. Kết quả kiểm tra của bạn cho thấy điều gì?",
          "options": [
            {
              "text": "The belts were loose and misaligned by 4 millimeters. Belt deflection was 25 mm instead of the specified 12 mm.",
              "text_vi": "Dây đai bị chùng và lệch đồng phẳng 4 mm. Độ võng dây đai đo được là 25 mm so với tiêu chuẩn quy định là 12 mm.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "How did you correct the pulley alignment and tension?",
          "text_vi": "Bạn đã căn chỉnh độ thẳng hàng của puly và lực căng dây đai như thế nào?",
          "options": [
            {
              "text": "We used a magnetic laser alignment tool to align both pulleys within 0.5 degrees, then adjusted motor base jackscrews until belt tension gauge read 45 Newtons.",
              "text_vi": "Chúng tôi dùng thước cân tâm laser từ tính chỉnh hai puly lệch dưới 0.5 độ, sau đó vặn bu-lông đẩy đế động cơ cho đến khi bút đo lực căng chỉ 45 Newton.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Excellent mechanical execution. Test run the blower and verify noise level.",
          "text_vi": "Xử lý cơ khí rất xuất sắc. Hãy chạy thử quạt và kiểm tra độ ồn.",
          "is_terminal": true,
          "summary": {
            "result": "Khắc phục triệt để tiếng kêu rít và chống mòn dây đai sớm bằng công cụ laser.",
            "common_mistakes": "Căn dây đai bằng mắt thường dẫn đến lệch góc và nhanh đứt đai.",
            "focus_vocab": [
              "V-belt",
              "pulley alignment",
              "belt deflection",
              "laser alignment tool"
            ],
            "natural_phrasing": "We used a magnetic laser tool to align both pulleys within 0.5 degrees."
          }
        }
      }
    },
    {
      "id": "sc-19",
      "title": "Tình huống 19: Nhắc nhở Đồng nghiệp Đeo Kính Bảo hộ khi Dùng Máy Mài (PPE Intervention)",
      "group": "SHE, PPE, Hazard và Near Miss",
      "category": "she",
      "week": 28,
      "description": "Phát hiện một công nhân đang dùng máy mài cầm tay mà chỉ đeo kính cận thông thường, hãy can thiệp an toàn.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Hey Alex, I just need to deburr this steel bracket for thirty seconds. Do I really need full safety goggles over my reading glasses?",
          "text_vi": "Này Alex, tôi chỉ cần mài bavia cái giá thép này 30 giây thôi. Tôi có thực sự cần đeo kính bảo hộ trùm ngoài kính cận không?",
          "options": [
            {
              "text": "Yes Huy, absolutely. Regular reading glasses shatter easily under high-speed grinding sparks. Please put on certified ANSI Z87 face shield and goggles before pulling the trigger.",
              "text_vi": "Có chứ Huy, tuyệt đối phải đeo. Kính cận thông thường rất dễ vỡ vụn khi bị tia lửa mài tốc độ cao bắn trúng. Xin hãy đeo mặt nạ che mặt và kính bảo hộ chuẩn ANSI Z87 trước khi bóp cò máy.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Fair point. Eye injuries happen in milliseconds. Where is the spare face shield?",
          "text_vi": "Cậu nói đúng. Chấn thương mắt xảy ra chỉ trong tích tắc. Mặt nạ che mặt dự phòng ở đâu?",
          "options": [
            {
              "text": "It is hanging on the grinding station wall hook right behind you. I will hold the workpiece steady for you.",
              "text_vi": "Nó đang treo trên móc tường trạm mài ngay sau lưng bạn đấy. Tôi sẽ kẹp giữ chi tiết chắc chắn giúp bạn.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Thanks for looking out for my safety, Alex. Safety first!",
          "text_vi": "Cảm ơn đã chú ý bảo vệ an toàn cho tôi nhé Alex. An toàn là trên hết!",
          "is_terminal": true,
          "summary": {
            "result": "Can thiệp an toàn kịp thời, ngăn chặn nguy cơ mạt sắt bắn mù mắt.",
            "common_mistakes": "Lơ là nghĩ rằng mài vài giây thì không cần kính bảo hộ chuyên dụng.",
            "focus_vocab": [
              "deburr",
              "grinding sparks",
              "face shield",
              "eye injury"
            ],
            "natural_phrasing": "Regular glasses shatter easily. Please put on certified safety goggles."
          }
        }
      }
    },
    {
      "id": "sc-20",
      "title": "Tình huống 20: Thực hiện Quy trình Khóa & Treo Thẻ LOTO 6 Bước (Lockout/Tagout)",
      "group": "SHE, PPE, Hazard và Near Miss",
      "category": "she",
      "week": 30,
      "description": "Thực hiện cô lập áptômát 380V và van xả liệu bồn khuấy hóa chất theo đúng 6 bước LOTO trước khi vào bảo dưỡng.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, we are preparing to enter Agitator Tank 1 for paddle inspection. Can you walk me through your LOTO isolation procedure?",
          "text_vi": "Alex, chúng ta đang chuẩn bị vào Bồn khuấy số 1 để kiểm tra cánh khuấy. Bạn có thể điểm lại các bước cô lập LOTO của mình không?",
          "options": [
            {
              "text": "Step 1: Notified operators. Step 2: Shut down motor at local panel. Step 3: Switched off 380V main breaker in MCC room. Step 4: Applied my personal red padlock and danger tag.",
              "text_vi": "Bước 1: Đã thông báo cho người vận hành. Bước 2: Tắt động cơ tại tủ hiện trường. Bước 3: Cắt áptômát tổng 380V tại phòng MCC. Bước 4: Gắn khóa móc đỏ cá nhân và thẻ cảnh báo nguy hiểm.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Very good. What about Steps 5 and 6 before anyone puts a hand inside?",
          "text_vi": "Rất tốt. Còn Bước 5 và 6 trước khi có ai đưa tay vào bên trong thì sao?",
          "options": [
            {
              "text": "Step 5: Closed and chained feed valves to dissipate residual pressure. Step 6: Pressed the local START push-button to verify zero energy state. The shaft did not move.",
              "text_vi": "Bước 5: Khóa xích van nạp liệu để triệt tiêu áp suất dư. Bước 6: Nhấn nút KHỞI ĐỘNG tại chỗ để xác nhận trạng thái năng lượng bằng không. Trục không hề nhúc nhích.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Full 6-step LOTO verified. Sign the confined space entry permit and proceed safely.",
          "text_vi": "Đã xác nhận đủ 6 bước LOTO chuẩn xác. Ký giấy phép vào không gian hạn chế và làm việc an toàn.",
          "is_terminal": true,
          "summary": {
            "result": "Triển khai hoàn hảo 6 bước LOTO chuẩn OSHA, triệt tiêu 100% rủi ro máy khởi động bất ngờ.",
            "common_mistakes": "Bỏ qua bước 6 (bấm nút thử xác nhận năng lượng bằng 0).",
            "focus_vocab": [
              "LOTO procedure",
              "personal padlock",
              "danger tag",
              "zero energy state"
            ],
            "natural_phrasing": "Step 6: Pressed the start button to verify zero energy state. The shaft did not move."
          }
        }
      }
    },
    {
      "id": "sc-21",
      "title": "Tình huống 21: Báo cáo Sự cố Suýt Nguy (Near Miss Incident Report)",
      "group": "SHE, PPE, Hazard và Near Miss",
      "category": "she",
      "week": 32,
      "description": "Báo cáo một chiếc cờ lê 24mm rơi từ sàn thao tác tầng 2 xuống lối đi nhưng may mắn không trúng người.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, I heard an incident occurred near Line 3 walkway ten minutes ago. Was anyone injured?",
          "text_vi": "Alex, tôi nghe nói có sự việc xảy ra gần lối đi Dây chuyền 3 mười phút trước. Có ai bị thương không?",
          "options": [
            {
              "text": "No one was injured, sir. It was a serious Near Miss. A 24-millimeter combination wrench slipped from a contractor's hand on the mezzanine floor and landed two meters from an operator.",
              "text_vi": "Dạ không ai bị thương thưa anh. Đó là một sự cố Suýt Nguy nghiêm trọng. Một chiếc cờ lê vòng miệng 24mm bị trượt khỏi tay nhà thầu ở sàn lửng và rơi cách người vận hành 2 mét.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "That could have been fatal! What immediate corrective action did you take on site?",
          "text_vi": "Việc đó có thể gây chết người đấy! Bạn đã thực hiện biện pháp khắc phục tức thời nào tại hiện trường?",
          "options": [
            {
              "text": "I immediately barricaded the walkway below with caution tape, stopped the overhead work, and mandated that all contractor tools must have safety wrist lanyards attached.",
              "text_vi": "Tôi lập tức chăng dây cảnh báo cô lập lối đi bên dưới, đình chỉ công việc trên cao và yêu cầu toàn bộ dụng cụ nhà thầu bắt buộc phải buộc dây chống rơi vào cổ tay.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Outstanding response Alex. Let's document this in the plant SHE portal so all departments learn from this near miss.",
          "text_vi": "Phản ứng xuất sắc Alex. Hãy ghi lại sự việc này lên cổng an toàn của nhà máy để tất cả các bộ phận rút kinh nghiệm.",
          "is_terminal": true,
          "summary": {
            "result": "Xử lý sự cố suýt nguy chuyên nghiệp, ngăn chặn tai nạn rơi vật thể trong tương lai.",
            "common_mistakes": "Không báo cáo suýt nguy vì nghĩ 'chưa ai bị thương thì thôi'.",
            "focus_vocab": [
              "Near Miss",
              "mezzanine floor",
              "barricaded the walkway",
              "tool safety lanyard"
            ],
            "natural_phrasing": "No one was injured. It was a serious Near Miss... We mandated tool safety lanyards."
          }
        }
      }
    },
    {
      "id": "sc-22",
      "title": "Tình huống 22: Báo cáo Tiếng ồn Lạ và Rung Động Bất Thường tại Hộp Giảm Tốc",
      "group": "Báo cáo bất thường hoặc sự cố",
      "category": "technical",
      "week": 34,
      "description": "Phát hiện tiếng rít kim loại và rung lắc 8.2 mm/s tại hộp số băng tải chuyển quặng.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, what abnormal condition prompted you to hit the inspection hold button on Conveyor 1?",
          "text_vi": "Alex, điều kiện bất thường nào khiến bạn nhấn nút tạm dừng kiểm tra trên Băng tải 1?",
          "options": [
            {
              "text": "During my round, I detected a high-pitched grinding metallic noise from Gearbox 1. My portable vibration meter showed 8.2 mm/s, well above the 4.5 mm/s ISO alert threshold.",
              "text_vi": "Trong ca tuần tra, tôi phát hiện tiếng rít kim loại chói tai từ Hộp số 1. Máy đo rung cầm tay của tôi chỉ 8.2 mm/s, vượt xa ngưỡng cảnh báo ISO 4.5 mm/s.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Did you take thermal readings on the gearbox casing?",
          "text_vi": "Bạn đã đo nhiệt độ trên vỏ hộp số chưa?",
          "options": [
            {
              "text": "Yes, the infrared thermometer registered 88 degrees Celsius near the input pinion bearing. I recommend switching to standby Conveyor 2 immediately.",
              "text_vi": "Dạ rồi, nhiệt kế hồng ngoại ghi nhận 88 độ C gần ổ bi trục bánh răng đầu vào. Tôi khuyến nghị chuyển sang Băng tải dự phòng 2 ngay lập tức.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Smart decision to stop early. Running any longer would have destroyed the gear teeth completely.",
          "text_vi": "Quyết định dừng sớm rất thông minh. Chạy thêm nữa là sẽ phá hỏng hoàn toàn các răng bánh răng.",
          "is_terminal": true,
          "summary": {
            "result": "Phát hiện hư hỏng hộp số ở giai đoạn sớm, cứu nhà máy khỏi thiệt hại hàng trăm triệu đồng.",
            "common_mistakes": "Nghe tiếng kêu nhưng chủ quan để chạy tiếp cho hết ca.",
            "focus_vocab": [
              "grinding metallic noise",
              "vibration threshold",
              "infrared thermometer",
              "pinion bearing"
            ],
            "natural_phrasing": "Vibration meter showed 8.2 mm/s, well above the alert threshold."
          }
        }
      }
    },
    {
      "id": "sc-23",
      "title": "Tình huống 23: Xử lý Sự cố Rò rỉ Dầu Thủy lực Áp cao Máy Ép (Hydraulic Leak Response)",
      "group": "Báo cáo bất thường hoặc sự cố",
      "category": "technical",
      "week": 36,
      "description": "Ống mềm thủy lực 210 bar của máy ép bị rò tia dầu nhỏ, xử lý nguy cơ phun áp suất cao.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, operator reported misting oil near Hydraulic Press 3. How are you handling the situation?",
          "text_vi": "Alex, người vận hành báo có sương dầu gần Máy ép thủy lực 3. Bạn đang xử lý tình huống thế nào?",
          "options": [
            {
              "text": "I pressed the hydraulic pump emergency stop immediately. High-pressure pinhole leaks can inject oil through human skin, which is a life-threatening hazard. Nobody is allowed near the press.",
              "text_vi": "Tôi đã nhấn dừng khẩn cấp bơm thủy lực ngay lập tức. Tia dầu áp cao qua lỗ mọt có thể đâm xuyên qua da người gây nguy hiểm tính mạng. Không ai được phép lại gần máy ép.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Crucial safety awareness! Is the system depressurized now?",
          "text_vi": "Nhận thức an toàn cực kỳ chuẩn! Hệ thống đã được xả áp chưa?",
          "options": [
            {
              "text": "Yes, accumulator dump valve is opened and pressure is zero. We deployed chemical absorbent booms to contain 15 liters of spilled oil from reaching floor drains.",
              "text_vi": "Dạ rồi, van xả bình tích áp đã mở và áp suất về 0. Chúng tôi đã rải phao thấm dầu chuyên dụng cô lập 15 lít dầu tràn không cho chảy vào cống thoát sàn.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Flawless emergency protocol execution. Replace the burst hose with a genuine 350-bar rated assembly.",
          "text_vi": "Thực hiện quy trình khẩn cấp hoàn hảo. Hãy thay ống vỡ bằng cụm ống chính hãng chịu áp 350 bar.",
          "is_terminal": true,
          "summary": {
            "result": "Ngăn ngừa tai nạn đâm xuyên da áp suất cao và bảo vệ môi trường khỏi ô nhiễm dầu.",
            "common_mistakes": "Dùng tay sờ tìm điểm rò rỉ áp cao gây hoại tử tay.",
            "focus_vocab": [
              "hydraulic leak",
              "pinhole injection hazard",
              "accumulator dump valve",
              "absorbent boom"
            ],
            "natural_phrasing": "High-pressure leaks can inject oil through skin. We depressurized the system immediately."
          }
        }
      }
    },
    {
      "id": "sc-24",
      "title": "Tình huống 24: Động cơ Quạt Thông gió Bị Quá Nhiệt Nhảy Rơ le Nhiệt (Motor Overheat)",
      "group": "Báo cáo bất thường hoặc sự cố",
      "category": "technical",
      "week": 38,
      "description": "Động cơ quạt hút 22 kW bị ngắt điện do rơ le quá tải kích hoạt, kiểm tra nguyên nhân kẹt cơ khí hay mất pha.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, Exhaust Blower 4 tripped the main thermal overload relay at 3 PM. What are your diagnostic findings?",
          "text_vi": "Alex, Quạt hút số 4 bị nhảy rơ le nhiệt quá tải lúc 3h chiều. Kết quả chẩn đoán của bạn là gì?",
          "options": [
            {
              "text": "I checked motor windings with a Megger: insulation resistance is good at 80 Megohms. However, the fan shaft was extremely hard to rotate by hand, indicating mechanical jamming.",
              "text_vi": "Tôi đã đo cuộn dây bằng máy Megger: cách điện tốt ở mức 80 Megohm. Tuy nhiên, trục quạt quay bằng tay cực kỳ nặng, cho thấy có hiện tượng kẹt cơ khí.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Did you inspect inside the blower housing scroll?",
          "text_vi": "Bạn đã mở nắp kiểm tra bên trong buồng xoắn quạt chưa?",
          "options": [
            {
              "text": "Yes, we opened the inspection port and discovered a piece of plastic packaging wrapped tightly around the impeller hub. We removed the foreign object and the shaft spins freely now.",
              "text_vi": "Dạ rồi, chúng tôi mở cửa thăm và phát hiện một mảnh bao bì nhựa quấn chặt vào moay-ơ cánh quạt. Chúng tôi đã gỡ dị vật ra và hiện trục đã quay trơn tru.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Great diagnosis separating electrical faults from mechanical jams. Reset the relay and resume testing.",
          "text_vi": "Chẩn đoán rất tốt, phân biệt rõ lỗi điện và kẹt cơ khí. Hãy reset rơ le và chạy thử lại.",
          "is_terminal": true,
          "summary": {
            "result": "Tìm đúng nguyên nhân gốc rễ (dị vật kẹt cánh quạt) thay vì vội vàng thay động cơ.",
            "common_mistakes": "Chỉ reset rơ le rồi bấm chạy lại ngay làm cháy động cơ.",
            "focus_vocab": [
              "thermal overload relay",
              "insulation resistance",
              "mechanical jamming",
              "impeller hub"
            ],
            "natural_phrasing": "Insulation resistance is good. The shaft was hard to rotate due to a jammed object."
          }
        }
      }
    },
    {
      "id": "sc-25",
      "title": "Tình huống 25: Tham gia Cuộc họp An toàn Đầu ca 5 Phút (Daily Toolbox Talk)",
      "group": "Họp nhóm và giải thích vấn đề",
      "category": "workplace",
      "week": 40,
      "description": "Trình bày chủ đề an toàn làm việc trong không gian kín trước tổ bảo trì trong buổi họp đầu giờ.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, today it is your turn to lead our five-minute daily toolbox talk. What topic have you prepared for the team?",
          "text_vi": "Alex, hôm nay đến lượt bạn chủ trì cuộc họp an toàn đầu ca 5 phút. Bạn đã chuẩn bị chủ đề gì cho cả đội?",
          "options": [
            {
              "text": "Good morning team. Today's safety topic is 'Three Golden Rules for Confined Space Entry'. Rule 1: Never enter without a signed entry permit and atmospheric test.",
              "text_vi": "Chào buổi sáng cả đội. Chủ đề an toàn hôm nay là '3 Nguyên Tắc Vàng Khi Vào Không Gian Hạn Chế'. Nguyên tắc 1: Tuyệt đối không vào khi chưa có giấy phép và kết quả đo khí.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Very relevant topic, considering our silo maintenance next week. What are Rules 2 and 3?",
          "text_vi": "Chủ đề rất sát thực tế với công việc bảo trì xilô tuần tới. Nguyên tắc 2 và 3 là gì Alex?",
          "options": [
            {
              "text": "Rule 2: Continuous forced-air ventilation and calibrated gas detector at all times. Rule 3: Dedicated standby watchman outside with emergency retrieval tripod and harness ready.",
              "text_vi": "Nguyên tắc 2: Luôn thông gió cưỡng bức liên tục và mở máy đo khí suốt quá trình. Nguyên tắc 3: Luôn có người cảnh giới túc trực bên ngoài với giá ba chân và dây cứu hộ sẵn sàng.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Clear, practical, and life-saving guidelines. Let's all sign the toolbox meeting attendance sheet.",
          "text_vi": "Các chỉ dẫn rất rõ ràng, thực tế và cứu sinh mạng. Mời mọi người ký vào bảng điểm danh cuộc họp.",
          "is_terminal": true,
          "summary": {
            "result": "Chủ trì cuộc họp Toolbox Talk tự tin, truyền cảm hứng an toàn cho đồng đội.",
            "common_mistakes": "Nói chung chung lý thuyết mà không đưa ra 3 nguyên tắc hành động cụ thể.",
            "focus_vocab": [
              "toolbox talk",
              "confined space entry",
              "gas detector",
              "standby watchman"
            ],
            "natural_phrasing": "Rule 1: Never enter without a signed permit. Continuous ventilation is mandatory."
          }
        }
      }
    },
    {
      "id": "sc-26",
      "title": "Tình huống 26: Phân tích Nguyên nhân Gốc rễ Dừng Dây chuyền theo Phương pháp 5 Why",
      "group": "Họp nhóm và giải thích vấn đề",
      "category": "technical",
      "week": 42,
      "description": "Tham gia cuộc họp RCA phân tích tại sao động cơ gầu tải bị cháy cuộn dây bằng công cụ 5 Tại sao.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Welcome team. We are conducting a Root Cause Analysis (RCA) on the Bucket Elevator 2 motor failure. Alex, walk us through the 5-Why chain.",
          "text_vi": "Chào cả đội. Chúng ta đang phân tích nguyên nhân gốc rễ (RCA) vụ hỏng động cơ Gầu tải số 2. Alex, hãy trình bày chuỗi 5 Tại sao.",
          "options": [
            {
              "text": "Why 1: Motor burned out because of severe overload. Why 2: Overload occurred because the elevator chain was jammed with clinker rocks. Why 3: Clinker rocks bypassed because the grizzly screen had a 10-cm tear.",
              "text_vi": "Tại sao 1: Động cơ bị cháy do quá tải nặng. Tại sao 2: Quá tải xảy ra do xích gầu bị kẹt đá clinker. Tại sao 3: Đá clinker lọt qua do lưới sàng bị rách một lỗ 10 cm.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "Excellent breakdown so far. What are Why 4 and the root cause Why 5?",
          "text_vi": "Phân tích tới đây rất tốt. Còn Tại sao 4 và nguyên nhân gốc Tại sao 5 là gì?",
          "options": [
            {
              "text": "Why 4: Screen tear was not noticed because weekly visual screen checks were skipped. Why 5 (Root Cause): Preventive maintenance checklist lacked a mandatory sign-off item for screen mesh integrity.",
              "text_vi": "Tại sao 4: Vết rách lưới không được phát hiện do bỏ qua kiểm tra trực quan hàng tuần. Tại sao 5 (Gốc rễ): Checklist bảo trì phòng ngừa thiếu mục ký xác nhận bắt buộc về độ nguyên vẹn lưới sàng.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Outstanding root cause finding. We will update the PM checklist today to include screen thickness inspection.",
          "text_vi": "Tìm ra nguyên nhân gốc rất xuất sắc. Chúng ta sẽ cập nhật checklist PM ngay hôm nay bao gồm kiểm tra độ dày lưới sàng.",
          "is_terminal": true,
          "summary": {
            "result": "Áp dụng phương pháp 5 Why chuẩn xác, biến sự cố thành giải pháp cải tiến hệ thống.",
            "common_mistakes": "Dừng lại ở lỗi con người (người thợ) thay vì tìm lỗi quy trình checklist.",
            "focus_vocab": [
              "Root Cause Analysis (RCA)",
              "5-Why method",
              "bucket elevator",
              "mesh integrity"
            ],
            "natural_phrasing": "Why 1: Motor burned due to overload... Why 5: Checklist lacked mandatory sign-off."
          }
        }
      }
    },
    {
      "id": "sc-27",
      "title": "Tình huống 27: Đề xuất Cải tiến 5S Sắp xếp Bảng Treo Dụng cụ Xưởng Cơ khí",
      "group": "Họp nhóm và giải thích vấn đề",
      "category": "workplace",
      "week": 44,
      "description": "Đề xuất dự án Kaizen làm bảng shadow board sơn bóng hình dụng cụ để loại bỏ 15 phút tìm đồ mỗi ngày.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Alex, you submitted a Kaizen 5S proposal for the mechanical workshop tool area. Please explain your idea to the committee.",
          "text_vi": "Alex, bạn đã gửi một đề xuất cải tiến Kaizen 5S cho khu vực dụng cụ xưởng cơ khí. Xin mời bạn trình bày ý tưởng trước hội đồng.",
          "options": [
            {
              "text": "Currently, technicians spend an average of fifteen minutes per shift searching for scattered wrenches. I propose implementing custom shadow boards with color-coded tool silhouettes.",
              "text_vi": "Hiện tại, kỹ thuật viên mất trung bình 15 phút mỗi ca để tìm cờ lê bị để lung tung. Tôi đề xuất triển khai bảng bóng mờ (shadow board) với hình sơn bóng dụng cụ phân loại theo màu sắc.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "What measurable benefits and investment costs are you projecting for this 5S improvement?",
          "text_vi": "Bạn dự tính những lợi ích đo lường được và chi phí đầu tư cho cải tiến 5S này là bao nhiêu?",
          "options": [
            {
              "text": "Cost is only about fifty dollars for plywood, hooks, and spray paint. Benefits include saving 90 labor hours annually and immediate visual detection if any tool is missing before line startup.",
              "text_vi": "Chi phí chỉ khoảng 50 đô la mua ván ép, móc treo và sơn xịt. Lợi ích tiết kiệm được 90 giờ công mỗi năm và phát hiện trực quan ngay lập tức nếu thiếu dụng cụ trước khi chạy máy.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Low cost, high impact idea. Proposal approved with full budget! Start implementation this Friday.",
          "text_vi": "Ý tưởng chi phí thấp nhưng hiệu quả cao. Đề xuất được phê duyệt đầy đủ ngân sách! Triển khai từ Thứ Sáu này nhé.",
          "is_terminal": true,
          "summary": {
            "result": "Bảo vệ thành công đề xuất cải tiến Kaizen 5S với số liệu ROI định lượng thuyết phục.",
            "common_mistakes": "Đề xuất ý tưởng chung chung mà không tính toán chi phí và giờ công tiết kiệm.",
            "focus_vocab": [
              "Kaizen 5S proposal",
              "shadow board",
              "tool silhouette",
              "visual detection"
            ],
            "natural_phrasing": "I propose implementing shadow boards... Cost is fifty dollars, saving 90 hours annually."
          }
        }
      }
    },
    {
      "id": "sc-28",
      "title": "Tình huống 28: Giải trình với Giám đốc Kỹ thuật về Kế hoạch Dừng Máy Đại tu (Overhaul Briefing)",
      "group": "Giao tiếp với quản lý hoặc nhà cung cấp",
      "category": "workplace",
      "week": 46,
      "description": "Báo cáo tiến độ chuẩn bị đại tu lò hơi 3 ngày với Giám đốc Kỹ thuật nhà máy.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Representative",
          "text": "Alex, our annual boiler shutdown starts in three days. As lead maintenance coordinator, are all contractors and spare parts ready?",
          "text_vi": "Alex, đợt dừng máy đại tu lò hơi hàng năm bắt đầu sau 3 ngày nữa. Với tư cách điều phối viên bảo trì chính, nhà thầu và phụ tùng đã sẵn sàng chưa?",
          "options": [
            {
              "text": "Yes Director. All 12 specialized gaskets, safety relief valves, and boiler tube refractory bricks have arrived in warehouse. Contractor safety orientations are 100% completed.",
              "text_vi": "Dạ thưa Giám đốc. Toàn bộ 12 bộ gioăng chuyên dụng, van an toàn xả áp và gạch chịu lửa ống lò đã về kho đầy đủ. Huấn luyện an toàn cho nhà thầu đã hoàn tất 100%.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Representative",
          "text": "What is your critical path risk and mitigation plan for meeting the 72-hour target?",
          "text_vi": "Rủi ro đường găng tiến độ và kế hoạch giảm thiểu rủi ro của bạn để đạt mục tiêu 72 giờ là gì?",
          "options": [
            {
              "text": "The critical path is hydrostatic pressure testing. If a leak appears, we have two backup certified welders on standby to make immediate weld repairs without schedule slippage.",
              "text_vi": "Đường găng quan trọng nhất là thử áp lực thủy tĩnh. Nếu xuất hiện rò rỉ, chúng tôi đã bố trí sẵn 2 thợ hàn chứng chỉ quốc tế túc trực để sửa chữa ngay mà không làm trễ tiến độ.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Representative",
          "text": "Extremely thorough contingency planning. You have my full endorsement for the overhaul execution.",
          "text_vi": "Kế hoạch dự phòng cực kỳ chu đáo. Tôi hoàn toàn ủng hộ và phê duyệt kế hoạch đại tu của bạn.",
          "is_terminal": true,
          "summary": {
            "result": "Báo cáo cấp quản lý cấp cao đĩnh đạc, nắm chắc đường găng tiến độ và phương án dự phòng.",
            "common_mistakes": "Không lường trước rủi ro thử áp và thiếu thợ hàn dự phòng.",
            "focus_vocab": [
              "annual boiler shutdown",
              "safety relief valve",
              "critical path",
              "hydrostatic test"
            ],
            "natural_phrasing": "All spare parts have arrived. We have backup welders on standby for immediate repairs."
          }
        }
      }
    },
    {
      "id": "sc-29",
      "title": "Tình huống 29: Làm việc với Chuyên gia Kỹ thuật của Nhà sản xuất Thiết bị (OEM Vendor)",
      "group": "Giao tiếp với quản lý hoặc nhà cung cấp",
      "category": "technical",
      "week": 48,
      "description": "Hợp tác với kỹ sư hãng máy Krones (Đức) để hiệu chuẩn cụm chiết rót tốc độ cao.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Representative",
          "text": "Hello Alex. I am Hans, service engineer from Krones Germany. Today we need to calibrate the electromagnetic flow meters on the filling carousel.",
          "text_vi": "Chào Alex. Tôi là Hans, kỹ sư dịch vụ từ Krones Đức. Hôm nay chúng ta cần hiệu chuẩn các lưu lượng kế điện từ trên bàn quay chiết rót.",
          "options": [
            {
              "text": "Guten Tag Hans! Welcome to our bottling plant. I have already cleaned all 48 filling valves and prepared our calibrated gravimetric test scale.",
              "text_vi": "Chào Hans! Chào mừng bạn đến nhà máy chiết chai của chúng tôi. Tôi đã vệ sinh sạch sẽ toàn bộ 48 van chiết và chuẩn bị sẵn cân thử trọng lượng đã hiệu chuẩn.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Representative",
          "text": "Excellent preparation, Alex. Have you connected the laptop interface cable to the Profibus diagnostic port on Panel 2?",
          "text_vi": "Chuẩn bị rất tuyệt Alex. Bạn đã cắm cáp giao tiếp máy tính vào cổng chẩn đoán Profibus trên Tủ 2 chưa?",
          "options": [
            {
              "text": "Yes, communication link is active and PLC baud rate is configured at 1.5 Mbps. We are ready to begin test filling on Valve 1.",
              "text_vi": "Dạ rồi, đường truyền thông đang hoạt động và tốc độ baud PLC được cấu hình ở 1.5 Mbps. Chúng ta sẵn sàng bắt đầu chiết thử trên Van 1.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Representative",
          "text": "Wunderbar! Working with such a competent local technician makes commissioning fast and enjoyable.",
          "text_vi": "Tuyệt vời! Làm việc với một kỹ thuật viên bản địa thành thạo như bạn giúp công tác nghiệm thu nhanh chóng và rất thoải mái.",
          "is_terminal": true,
          "summary": {
            "result": "Làm việc chuyên nghiệp với chuyên gia kỹ thuật toàn cầu, sử dụng chuẩn xác thuật ngữ PLC/Profibus.",
            "common_mistakes": "Lúng túng không chuẩn bị trước thiết bị kiểm tra làm mất thời gian chuyên gia đắt đỏ.",
            "focus_vocab": [
              "electromagnetic flow meter",
              "filling carousel",
              "gravimetric test scale",
              "diagnostic port"
            ],
            "natural_phrasing": "Communication link is active and baud rate is configured. We are ready to begin."
          }
        }
      }
    },
    {
      "id": "sc-30",
      "title": "Tình huống 30: Khiếu nại và Yêu cầu Đổi Phụ tùng Sai Quy cách với Nhà Cung cấp (Vendor Claim)",
      "group": "Giao tiếp với quản lý hoặc nhà cung cấp",
      "category": "workplace",
      "week": 50,
      "description": "Phát hiện lô phớt chặn dầu 10 chiếc giao sai kích thước trục (giao 45mm thay vì 48mm), gọi điện khiếu nại nhà cung cấp.",
      "initial_node": "step_1",
      "nodes": {
        "step_1": {
          "speaker": "Supervisor / Partner",
          "text": "Good afternoon, Industrial Supplies Hotline. How may I help you with your recent delivery?",
          "text_vi": "Chào buổi chiều, Đường dây nóng Vật tư Công nghiệp xin nghe. Tôi có thể hỗ trợ gì cho đơn hàng gần đây của quý khách?",
          "options": [
            {
              "text": "Good afternoon. This is Alex from English Hub Plant. We received Order PO-9912 today, but your shipment contains oil seals with a 45-millimeter inner diameter instead of the 48-millimeter specified in our PO.",
              "text_vi": "Chào buổi chiều. Tôi là Alex từ Nhà máy English Hub. Hôm nay chúng tôi nhận Đơn hàng PO-9912, nhưng lô hàng lại chứa phớt dầu đường kính trong 45mm thay vì 48mm như đã nêu rõ trong PO.",
              "feedback": "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              "is_safe": true,
              "next_node": "step_2"
            },
            {
              "text": "I do not know, everything is confusing.",
              "text_vi": "Tôi không biết, mọi thứ rối tinh rối mù.",
              "feedback": "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              "is_safe": false,
              "next_node": "step_1"
            }
          ]
        },
        "step_2": {
          "speaker": "Supervisor / Partner",
          "text": "I apologize for the warehouse picking discrepancy. Do you have urgent production downtime dependent on these seals?",
          "text_vi": "Tôi rất xin lỗi vì sự nhầm lẫn khi nhặt hàng tại kho. Quý công ty có đang bị dừng máy khẩn cấp chờ những chiếc phớt này không?",
          "options": [
            {
              "text": "Yes, our main pump rebuild is waiting. We need your courier to deliver ten correct 48-millimeter Viton seals by 9 AM tomorrow, and we will return the wrong items.",
              "text_vi": "Đúng vậy, công tác đại tu máy bơm chính đang phải chờ. Chúng tôi yêu cầu quý công ty chuyển phát nhanh 10 chiếc phớt Viton 48mm đúng chuẩn trước 9h sáng mai, và chúng tôi sẽ hoàn trả lô hàng sai.",
              "feedback": "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              "is_safe": true,
              "next_node": "success_end"
            }
          ]
        },
        "success_end": {
          "speaker": "Supervisor / Partner",
          "text": "Understood. I am dispatching a priority courier with the correct Viton 48-mm seals right now. Our sincere apologies.",
          "text_vi": "Đã rõ. Tôi đang cho chuyển phát hỏa tốc lô phớt Viton 48mm đúng chuẩn ngay bây giờ. Thành thật xin lỗi quý công ty.",
          "is_terminal": true,
          "summary": {
            "result": "Khiếu nại cứng rắn, lịch sự, giải quyết xong phụ tùng thay thế hỏa tốc trong 24 giờ.",
            "common_mistakes": "Nổi nóng quát tháo vô ích hoặc không nêu số PO và kích thước mm cụ thể.",
            "focus_vocab": [
              "purchase order (PO)",
              "picking discrepancy",
              "inner diameter",
              "priority courier"
            ],
            "natural_phrasing": "Your shipment contains 45-mm seals instead of the 48-mm specified in our PO."
          }
        }
      }
    }
  ],
  "shadowing_drills": [
    {
      "id": "sh-01",
      "title": "Workplace Greeting & Morning Briefing",
      "category": "general",
      "week": 1,
      "sentence_en": "Good morning team. Shift 1 is ready to begin. Please verify your personal protective equipment.",
      "sentence_vi": "Chào buổi sáng cả đội. Ca 1 đã sẵn sàng bắt đầu. Xin vui lòng kiểm tra trang bị bảo hộ cá nhân của bạn.",
      "ipa": "/ɡʊd ˈmɔː.nɪŋ tiːm. ʃɪft wʌn ɪz ˈred.i tuː bɪˈɡɪn. pliːz ˈver.ɪ.faɪ jɔːr ˈpɜː.sən.əl prəˈtek.tɪv ɪˈkwɪp.mənt/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/ʃ/ in shift",
        "/v/ in verify",
        "/t/ in equipment"
      ]
    },
    {
      "id": "sh-02",
      "title": "Safety Rule: Stop Work Authority",
      "category": "she",
      "week": 5,
      "sentence_en": "If you observe any unsafe condition or hazard, immediately exercise your Stop Work Authority.",
      "sentence_vi": "Nếu bạn quan sát thấy bất kỳ điều kiện hoặc mối nguy không an toàn nào, hãy thực hiện ngay quyền Dừng Công việc của mình.",
      "ipa": "/ɪf juː əbˈzɜːv ˈen.i ʌnˈseɪf kənˈdɪʃ.ən ɔːr ˈhæz.əd, ɪˈmiː.di.ət.li ˈek.sə.saɪz jɔːr stɒp wɜːk ɔːˈθɒr.ə.ti/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/z/ in hazard",
        "/θ/ in authority",
        "/v/ in observe"
      ]
    },
    {
      "id": "sh-03",
      "title": "Technical Diagnostic: Bearing Vibration",
      "category": "technical",
      "week": 12,
      "sentence_en": "The overall vibration level on the drive-end bearing reached seven point eight millimeters per second.",
      "sentence_vi": "Mức rung tổng thể trên gối đỡ đầu truyền động đã đạt bảy phẩy tám mi-li-mét trên giây.",
      "ipa": "/ðiː ˈəʊ.vər.ɔːl vaɪˈbreɪ.ʃən ˈlev.əl ɒn ðə draɪv end ˈbeə.rɪŋ riːtʃt ˈsev.ən pɔɪnt eɪt ˈmɪl.ɪˌmiː.təz pɜː ˈsek.ənd/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/v/ in vibration",
        "/tʃt/ in reached",
        "/z/ in millimeters"
      ]
    },
    {
      "id": "sh-04",
      "title": "Lockout/Tagout Golden Rule",
      "category": "she",
      "week": 16,
      "sentence_en": "Always isolate all electrical breakers and verify zero energy state before servicing machinery.",
      "sentence_vi": "Luôn luôn cô lập toàn bộ áptômát điện và xác nhận trạng thái năng lượng bằng không trước khi sửa chữa máy móc.",
      "ipa": "/ˈɔːl.weɪz ˈaɪ.sə.leɪt ɔːl ɪˈlek.trɪ.kəl ˈbreɪ.kəz ænd ˈver.ɪ.faɪ ˈzɪə.rəʊ ˈen.ə.dʒi steɪt bɪˈfɔː ˈsɜː.vɪ.sɪŋ məˈʃiː.nər.i/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/z/ in always & breakers",
        "/z/ in zero",
        "/ʃ/ in machinery"
      ]
    },
    {
      "id": "sh-05",
      "title": "Precision Bolting Torque Specification",
      "category": "technical",
      "week": 22,
      "sentence_en": "Tighten all sixteen flange bolts in a cross pattern to exactly one hundred and twenty Newton meters.",
      "sentence_vi": "Siết toàn bộ 16 bu-lông mặt bích theo hình chéo đối xứng đúng chính xác 120 Newton-mét.",
      "ipa": "/ˈtaɪ.tən ɔːl sɪkˈstiːn flændʒ bəʊlts ɪn ə krɒs ˈpæt.ən tuː ɪɡˈzækt.li wʌn ˈhʌn.drəd ænd ˈtwen.ti ˈnjuː.tən ˈmiː.təz/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/t/ in tighten",
        "/fl/ in flange",
        "/ks/ in cross"
      ]
    },
    {
      "id": "sh-06",
      "title": "Shift Handover Logbook Entry",
      "category": "workplace",
      "week": 28,
      "sentence_en": "All work orders for Shift 1 are completed and signed off in the central logbook.",
      "sentence_vi": "Toàn bộ phiếu công việc của Ca 1 đã được hoàn thành và ký nhận trong sổ nhật ký trung tâm.",
      "ipa": "/ɔːl wɜːk ˈɔː.dəz fɔːr ʃɪft wʌn ɑːr kəmˈpliː.tɪd ænd saɪnd ɒf ɪn ðə ˈsen.trəl ˈlɒɡ.bʊk/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/d/ in completed & signed",
        "/ɡb/ in logbook"
      ]
    },
    {
      "id": "sh-07",
      "title": "Emergency Radio Communication",
      "category": "she",
      "week": 36,
      "sentence_en": "Emergency, Emergency! Chemical leak detected at Tank 4. Evacuate upwind immediately.",
      "sentence_vi": "Khẩn cấp, Khẩn cấp! Phát hiện rò rỉ hóa chất tại Bồn 4. Sơ tán ngược hướng gió ngay lập tức.",
      "ipa": "/ɪˈmɜː.dʒən.si, ɪˈmɜː.dʒən.si! ˈkem.ɪ.kəl liːk dɪˈtek.tɪd æt tæŋk fɔːr. ɪˈvæk.ju.eɪt ʌpˈwɪnd ɪˈmiː.di.ət.li/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/dʒ/ in emergency",
        "/kt/ in detected",
        "/pw/ in upwind"
      ]
    },
    {
      "id": "sh-08",
      "title": "Confined Space Atmospheric Testing",
      "category": "she",
      "week": 42,
      "sentence_en": "Atmospheric test confirms twenty point nine percent oxygen and zero toxic gas inside the vessel.",
      "sentence_vi": "Đo khí môi trường xác nhận 20.9% oxy và không có khí độc bên trong bồn chứa.",
      "ipa": "/ˌæt.məsˈfer.ɪk test kənˈfɜːmz ˈtwen.ti pɔɪnt naɪn pəˈsent ˈɒk.sɪ.dʒən ænd ˈzɪə.rəʊ ˈtɒk.sɪk ɡæs ɪnˈsaɪd ðə ˈves.əl/",
      "speed_options": [
        0.8,
        1,
        1.2
      ],
      "key_sounds": [
        "/θ/ in atmospheric",
        "/ks/ in toxic",
        "/v/ in vessel"
      ]
    }
  ]
};

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = REFLEX_DATA;
  }
  if (typeof window !== 'undefined') {
    window.REFLEX_DATA = REFLEX_DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
