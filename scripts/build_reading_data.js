// Script to generate all 15 rich Reading Comprehension Passages with 5-8 questions each
const fs = require('fs');
const path = require('path');

const passages = [
  // 1. Giới thiệu bản thân
  {
    id: "read-01",
    topic: "Giới thiệu bản thân",
    title_en: "Hello, I am a Maintenance Technician",
    title_vi: "Xin chào, tôi là một kỹ thuật viên bảo trì",
    level: "A1",
    estimated_time: "5-7 phút",
    word_count: 68,
    week: 1,
    objectives: [
      "Làm quen với cấu trúc giới thiệu tên, tuổi và nghề nghiệp.",
      "Nhận diện các đại từ nhân xưng và động từ to be cơ bản.",
      "Trả lời câu hỏi tìm thông tin cụ thể về nơi làm việc."
    ],
    text: "My name is Alex Tran. I am twenty-eight years old and I live in Da Nang, Vietnam. I am a mechanical maintenance technician at a modern manufacturing plant. Every morning, I inspect machine components and check safety equipment. I enjoy working with my hands and learning practical English. My team has five technicians. We always cooperate closely to keep production running safely.",
    sentences: [
      "My name is Alex Tran.",
      "I am twenty-eight years old and I live in Da Nang, Vietnam.",
      "I am a mechanical maintenance technician at a modern manufacturing plant.",
      "Every morning, I inspect machine components and check safety equipment.",
      "I enjoy working with my hands and learning practical English.",
      "My team has five technicians.",
      "We always cooperate closely to keep production running safely."
    ],
    translation: "Tôi tên là Alex Tran. Tôi 28 tuổi và sống tại Đà Nẵng, Việt Nam. Tôi là một kỹ thuật viên bảo trì cơ khí tại một nhà máy sản xuất hiện đại. Mỗi buổi sáng, tôi kiểm tra các bộ phận máy móc và kiểm tra thiết bị an toàn. Tôi thích làm việc với đôi tay của mình và học tiếng Anh thực hành. Đội của tôi có 5 kỹ thuật viên. Chúng tôi luôn phối hợp chặt chẽ để giữ cho dây chuyền sản xuất vận hành an toàn.",
    vocabulary: [
      { word: "technician", ipa: "/tekˈnɪʃ.ən/", pos: "noun", vi: "kỹ thuật viên", context: "I am a mechanical maintenance technician." },
      { word: "manufacturing plant", ipa: "/ˌmæn.jʊˈfæk.tʃə.rɪŋ plɑːnt/", pos: "noun phrase", vi: "nhà máy sản xuất", context: "at a modern manufacturing plant" },
      { word: "inspect", ipa: "/ɪnˈspekt/", pos: "verb", vi: "kiểm tra, thị sát", context: "I inspect machine components." },
      { word: "components", ipa: "/kəmˈpəʊ.nənts/", pos: "noun (pl)", vi: "các bộ phận, linh kiện", context: "inspect machine components" },
      { word: "cooperate", ipa: "/kəʊˈɒp.ər.eɪt/", pos: "verb", vi: "hợp tác, phối hợp", context: "We always cooperate closely." }
    ],
    questions: [
      {
        id: "q-1-1",
        type: "mcq",
        question: "What is Alex Tran's current occupation?",
        options: ["Electrical engineer", "Mechanical maintenance technician", "Plant manager", "Security guard"],
        answer: 1,
        explanation: "Bài đọc nêu rõ: 'I am a mechanical maintenance technician at a modern manufacturing plant.'"
      },
      {
        id: "q-1-2",
        type: "true_false",
        question: "Alex Tran lives in Hanoi, Vietnam.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "Sai (False). Bài đọc nêu: 'I live in Da Nang, Vietnam.'"
      },
      {
        id: "q-1-3",
        type: "detail",
        question: "How many technicians are there in Alex's team?",
        options: ["Three", "Four", "Five", "Six"],
        answer: 2,
        explanation: "Bài đọc nêu rõ: 'My team has five technicians.'"
      },
      {
        id: "q-1-4",
        type: "vocab",
        question: "The word 'inspect' in sentence 4 is closest in meaning to:",
        options: ["buy", "examine carefully", "break", "paint"],
        answer: 1,
        explanation: "'Inspect' nghĩa là kiểm tra kỹ lưỡng (examine carefully)."
      },
      {
        id: "q-1-5",
        type: "main_idea",
        question: "What is the primary purpose of this passage?",
        options: ["To sell factory tools", "To introduce a technician and his daily work", "To report a machine breakdown", "To apply for a job"],
        answer: 1,
        explanation: "Mục đích chính của đoạn văn là tự giới thiệu bản thân và công việc hàng ngày của người kỹ thuật viên."
      }
    ]
  },

  // 2. Gia đình và thói quen
  {
    id: "read-02",
    topic: "Gia đình và thói quen",
    title_en: "Family Life and Daily Habits",
    title_vi: "Đời sống gia đình và thói quen hàng ngày",
    level: "A1",
    estimated_time: "5-7 phút",
    word_count: 78,
    week: 3,
    objectives: [
      "Hiểu thì Hiện tại đơn miêu tả thói quen sinh hoạt gia đình.",
      "Nhận diện các từ chỉ thời gian và tần suất.",
      "Trả lời câu hỏi suy luận đơn giản về lịch trình."
    ],
    text: "Minh lives with his wife and young son in an apartment near the industrial park. He wakes up at five thirty every morning. After doing light exercise, he eats breakfast with his family. His wife works as a teacher, and his son attends kindergarten. Minh leaves for the plant at six thirty on his motorbike. In the evening, the family cooks dinner together and Minh studies technical English for thirty minutes before sleeping.",
    sentences: [
      "Minh lives with his wife and young son in an apartment near the industrial park.",
      "He wakes up at five thirty every morning.",
      "After doing light exercise, he eats breakfast with his family.",
      "His wife works as a teacher, and his son attends kindergarten.",
      "Minh leaves for the plant at six thirty on his motorbike.",
      "In the evening, the family cooks dinner together and Minh studies technical English for thirty minutes before sleeping."
    ],
    translation: "Minh sống cùng vợ và con trai nhỏ trong một căn hộ gần khu công nghiệp. Anh thức dậy lúc 5h30 mỗi buổi sáng. Sau khi tập thể dục nhẹ nhàng, anh ăn sáng cùng gia đình. Vợ anh làm giáo viên, còn con trai đi học mẫu giáo. Minh khởi hành đến nhà máy lúc 6h30 bằng xe máy. Vào buổi tối, cả gia đình cùng nấu bữa tối và Minh học tiếng Anh kỹ thuật 30 phút trước khi đi ngủ.",
    vocabulary: [
      { word: "industrial park", ipa: "/ɪnˈdʌs.tri.əl pɑːk/", pos: "noun phrase", vi: "khu công nghiệp", context: "near the industrial park" },
      { word: "wakes up", ipa: "/weɪks ʌp/", pos: "phrasal verb", vi: "thức dậy", context: "He wakes up at five thirty." },
      { word: "attends", ipa: "/əˈtendz/", pos: "verb", vi: "tham dự, đi học", context: "his son attends kindergarten" },
      { word: "motorbike", ipa: "/ˈməʊ.tə.baɪk/", pos: "noun", vi: "xe máy", context: "on his motorbike" },
      { word: "studies", ipa: "/ˈstʌd.iz/", pos: "verb", vi: "học tập, nghiên cứu", context: "Minh studies technical English" }
    ],
    questions: [
      {
        id: "q-2-1",
        type: "mcq",
        question: "What time does Minh wake up every morning?",
        options: ["5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"],
        answer: 1,
        explanation: "Bài đọc nêu rõ: 'He wakes up at five thirty every morning.'"
      },
      {
        id: "q-2-2",
        type: "detail",
        question: "How does Minh travel to the manufacturing plant?",
        options: ["By company bus", "By bicycle", "On his motorbike", "On foot"],
        answer: 2,
        explanation: "Bài đọc nêu: 'Minh leaves for the plant at six thirty on his motorbike.'"
      },
      {
        id: "q-2-3",
        type: "true_false",
        question: "Minh's wife is also an industrial technician.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "Sai (False). Bài đọc nêu: 'His wife works as a teacher.'"
      },
      {
        id: "q-2-4",
        type: "detail",
        question: "How long does Minh study technical English each evening?",
        options: ["15 minutes", "30 minutes", "One hour", "Two hours"],
        answer: 1,
        explanation: "Bài đọc nêu: 'Minh studies technical English for thirty minutes before sleeping.'"
      },
      {
        id: "q-2-5",
        type: "inference",
        question: "Which of the following is true about Minh?",
        options: ["He lives alone.", "He dislikes morning exercise.", "He maintains a disciplined daily routine.", "He walks to kindergarten with his son."],
        answer: 2,
        explanation: "Minh thức dậy đúng giờ, tập thể dục, ăn sáng cùng gia đình và học tiếng Anh mỗi tối, thể hiện một nếp sống kỷ luật (disciplined routine)."
      }
    ]
  },

  // 3. Một ngày làm việc
  {
    id: "read-03",
    topic: "Một ngày làm việc",
    title_en: "A Typical Workday on Shift 1",
    title_vi: "Một ngày làm việc tiêu biểu ở Ca 1",
    level: "A1-A2",
    estimated_time: "7-9 phút",
    word_count: 112,
    week: 5,
    objectives: [
      "Nắm vững các thuật ngữ quy trình đầu ca: clock in, PPE, briefing, handover.",
      "Hiểu trình tự thời gian của các hoạt động trong nhà xưởng.",
      "Luyện tập dạng câu hỏi sắp xếp thứ tự sự kiện."
    ],
    text: "Shift 1 at the beverage bottling plant begins promptly at seven in the morning. When technicians arrive, they clock in using electronic thumbprint scanners and change into uniform with mandatory PPE. At seven fifteen, the team supervisor conducts a toolbox talk to review production targets and safety precautions. Throughout the morning, technicians patrol conveyor lines, monitor motor temperatures, and lubricate mechanical bearings. At eleven forty-five, the team takes a staggered lunch break in the plant cafeteria. After lunch, they resume preventive maintenance tasks and inspect pneumatic valves. Finally, at three forty-five PM, technicians write detailed handover notes for Shift 2 before clocking out.",
    sentences: [
      "Shift 1 at the beverage bottling plant begins promptly at seven in the morning.",
      "When technicians arrive, they clock in using electronic thumbprint scanners and change into uniform with mandatory PPE.",
      "At seven fifteen, the team supervisor conducts a toolbox talk to review production targets and safety precautions.",
      "Throughout the morning, technicians patrol conveyor lines, monitor motor temperatures, and lubricate mechanical bearings.",
      "At eleven forty-five, the team takes a staggered lunch break in the plant cafeteria.",
      "After lunch, they resume preventive maintenance tasks and inspect pneumatic valves.",
      "Finally, at three forty-five PM, technicians write detailed handover notes for Shift 2 before clocking out."
    ],
    translation: "Ca 1 tại nhà máy đóng chai nước giải khát bắt đầu đúng 7 giờ sáng. Khi kỹ thuật viên đến nơi, họ chấm công bằng máy quét vân tay điện tử và thay đồng phục với trang bị bảo hộ bắt buộc. Lúc 7h15, trưởng nhóm tiến hành buổi họp đầu ca (toolbox talk) để điểm lại mục tiêu sản xuất và lưu ý an toàn. Suốt buổi sáng, các kỹ thuật viên tuần tra dây chuyền băng tải, theo dõi nhiệt độ động cơ và tra mỡ ổ bi cơ khí. Lúc 11h45, cả đội luân phiên nghỉ ăn trưa tại căng tin nhà máy. Sau bữa trưa, họ tiếp tục các công việc bảo trì phòng ngừa và kiểm tra van khí nén. Cuối cùng, lúc 15h45, kỹ thuật viên viết biên bản bàn giao chi tiết cho Ca 2 trước khi chấm công về.",
    vocabulary: [
      { word: "promptly", ipa: "/ˈprɒmpt.li/", pos: "adverb", vi: "đúng giờ, lập tức", context: "begins promptly at seven" },
      { word: "clock in", ipa: "/klɒk ɪn/", pos: "phrasal verb", vi: "chấm công vào ca", context: "they clock in using electronic scanners" },
      { word: "toolbox talk", ipa: "/ˈtuːl.bɒks tɔːk/", pos: "noun", vi: "cuộc họp an toàn đầu ca ngắn", context: "conducts a toolbox talk" },
      { word: "patrol", ipa: "/pəˈtrəʊl/", pos: "verb", vi: "tuần tra, kiểm tra khu vực", context: "technicians patrol conveyor lines" },
      { word: "pneumatic valves", ipa: "/njuːˈmæt.ɪk vælvz/", pos: "noun phrase", vi: "các van khí nén", context: "inspect pneumatic valves" }
    ],
    questions: [
      {
        id: "q-3-1",
        type: "mcq",
        question: "What happens at 7:15 AM every morning?",
        options: ["Lunch break begins", "Shift 2 takes over", "The supervisor conducts a toolbox safety talk", "Conveyor lines are shut down"],
        answer: 2,
        explanation: "Bài đọc nêu rõ: 'At seven fifteen, the team supervisor conducts a toolbox talk...'"
      },
      {
        id: "q-3-2",
        type: "detail",
        question: "How do technicians clock in when arriving at the plant?",
        options: ["By paper card", "Using electronic thumbprint scanners", "By signing a paper notebook", "By verbal reporting"],
        answer: 1,
        explanation: "Bài đọc nêu: 'using electronic thumbprint scanners'."
      },
      {
        id: "q-3-3",
        type: "sequence",
        question: "Which of the following events happens LAST in the workday?",
        options: ["Patrolling conveyor lines", "Taking lunch break", "Writing handover notes for Shift 2", "Conducting the toolbox talk"],
        answer: 2,
        explanation: "Viết biên bản bàn giao diễn ra cuối cùng lúc 15h45 trước khi chấm công về."
      },
      {
        id: "q-3-4",
        type: "true_false",
        question: "Technicians skip lunch to finish maintenance earlier.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "Sai (False). Bài đọc nêu: 'At eleven forty-five, the team takes a staggered lunch break in the plant cafeteria.'"
      },
      {
        id: "q-3-5",
        type: "vocab",
        question: "The word 'staggered' in sentence 5 implies that the lunch break is:",
        options: ["cancelled", "taken in rotating shifts to keep lines manned", "eaten outside the factory", "very loud"],
        answer: 1,
        explanation: "'Staggered' có nghĩa là so le, luân phiên để luôn có người trực dây chuyền."
      },
      {
        id: "q-3-6",
        type: "inference",
        question: "Why do technicians write detailed handover notes before leaving?",
        options: ["To practice their handwriting", "To ensure Shift 2 understands machine conditions and pending tasks", "Because it is required by the cafeteria", "To complain about colleagues"],
        answer: 1,
        explanation: "Mục đích của biên bản bàn giao là giúp ca sau nắm rõ trạng thái thiết bị và các công việc còn tồn đọng."
      }
    ]
  },

  // 4. Du lịch, ăn uống và giao tiếp xã hội
  {
    id: "read-04",
    topic: "Du lịch, ăn uống và giao tiếp xã hội",
    title_en: "Hosting an International Vendor for Dinner",
    title_vi: "Mời cơm tối một đại diện nhà cung cấp quốc tế",
    level: "A2",
    estimated_time: "7-10 phút",
    word_count: 125,
    week: 8,
    objectives: [
      "Học cách gọi món và giao tiếp lịch sự tại nhà hàng.",
      "Hiểu các câu hỏi về sở thích ẩm thực và dị ứng.",
      "Nhận diện phép lịch sự trong môi trường kinh doanh kỹ thuật."
    ],
    text: "Last night, the engineering team invited Mr. Schmidt, an equipment specialist from Germany, to a traditional Vietnamese restaurant in district one. Before ordering, Alex asked politely: 'Mr. Schmidt, do you have any dietary restrictions or food allergies?' Mr. Schmidt smiled and replied that he eats everything except spicy chili. The team ordered fresh spring rolls, grilled lemongrass fish, and lotus stem salad. During the meal, Mr. Schmidt praised the balance of fresh herbs and sweet-sour dipping sauces. They discussed cultural differences, football, and weekend travel plans to Ha Long Bay. At the end of the evening, Alex settled the bill on behalf of the company and thanked Mr. Schmidt for his valuable technical support.",
    sentences: [
      "Last night, the engineering team invited Mr. Schmidt, an equipment specialist from Germany, to a traditional Vietnamese restaurant in district one.",
      "Before ordering, Alex asked politely: 'Mr. Schmidt, do you have any dietary restrictions or food allergies?'",
      "Mr. Schmidt smiled and replied that he eats everything except spicy chili.",
      "The team ordered fresh spring rolls, grilled lemongrass fish, and lotus stem salad.",
      "During the meal, Mr. Schmidt praised the balance of fresh herbs and sweet-sour dipping sauces.",
      "They discussed cultural differences, football, and weekend travel plans to Ha Long Bay.",
      "At the end of the evening, Alex settled the bill on behalf of the company and thanked Mr. Schmidt for his valuable technical support."
    ],
    translation: "Tối qua, đội kỹ thuật đã mời ông Schmidt, một chuyên gia thiết bị đến từ Đức, dùng bữa tại một nhà hàng Việt Nam truyền thống ở Quận 1. Trước khi gọi món, Alex lịch sự hỏi: 'Thưa ông Schmidt, ông có kiêng ăn món gì hay bị dị ứng thực phẩm không ạ?' Ông Schmidt mỉm cười và trả lời rằng ông ăn được mọi thứ ngoại trừ ớt cay. Cả đội đã gọi món gỏi cuốn tươi, cá nướng sả và nộm ngó sen. Trong bữa ăn, ông Schmidt khen ngợi sự hài hòa của rau thơm tươi và nước chấm chua ngọt. Họ đã trò chuyện về sự khác biệt văn hóa, bóng đá và kế hoạch du lịch Vịnh Hạ Long vào cuối tuần. Cuối buổi tối, Alex đã thanh toán hóa đơn thay mặt công ty và cảm ơn ông Schmidt vì sự hỗ trợ kỹ thuật quý báu.",
    vocabulary: [
      { word: "dietary restrictions", ipa: "/ˈdaɪ.ə.ter.i rɪˈstrɪk.ʃənz/", pos: "noun phrase", vi: "chế độ kiêng ăn", context: "any dietary restrictions or food allergies" },
      { word: "food allergies", ipa: "/fuːd ˈæl.ə.dʒiz/", pos: "noun phrase", vi: "dị ứng thực phẩm", context: "food allergies" },
      { word: "praised", ipa: "/preɪzd/", pos: "verb (past)", vi: "khen ngợi, tán dương", context: "praised the balance of fresh herbs" },
      { word: "settled the bill", ipa: "/ˈset.əld ðə bɪl/", pos: "idiom", vi: "thanh toán hóa đơn", context: "Alex settled the bill on behalf of the company" },
      { word: "on behalf of", ipa: "/ɒn bɪˈhɑːf əv/", pos: "preposition phrase", vi: "thay mặt cho", context: "on behalf of the company" }
    ],
    questions: [
      {
        id: "q-4-1",
        type: "mcq",
        question: "Where does Mr. Schmidt come from?",
        options: ["The United States", "Germany", "Japan", "The United Kingdom"],
        answer: 1,
        explanation: "Bài đọc nêu rõ: 'Mr. Schmidt, an equipment specialist from Germany'."
      },
      {
        id: "q-4-2",
        type: "detail",
        question: "What ingredient does Mr. Schmidt NOT eat?",
        options: ["Fresh herbs", "Fish", "Spicy chili", "Lotus stem"],
        answer: 2,
        explanation: "Bài đọc nêu: 'he eats everything except spicy chili'."
      },
      {
        id: "q-4-3",
        type: "vocab",
        question: "What does the phrase 'settled the bill' mean in sentence 7?",
        options: ["Split the costs evenly", "Paid for the entire meal", "Asked for a discount", "Lost the receipt"],
        answer: 1,
        explanation: "'Settled the bill' có nghĩa là đã trả tiền thanh toán toàn bộ bữa ăn."
      },
      {
        id: "q-4-4",
        type: "true_false",
        question: "Mr. Schmidt strongly disliked the Vietnamese dipping sauces.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "Sai (False). Bài đọc nêu ông Schmidt khen ngợi (praised the balance of dipping sauces)."
      },
      {
        id: "q-4-5",
        type: "inference",
        question: "Why did Alex ask about dietary restrictions before ordering?",
        options: ["Because the restaurant had no menu", "To show professional courtesy and ensure guest safety", "To order the cheapest dishes", "Because he forgot his wallet"],
        answer: 1,
        explanation: "Hỏi về dị ứng thực phẩm thể hiện phép lịch sự chuyên nghiệp và tránh nguy hiểm cho khách mời."
      },
      {
        id: "q-4-6",
        type: "detail",
        question: "Which tourist destination did they discuss visiting on the weekend?",
        options: ["Phu Quoc Island", "Ha Long Bay", "Da Lat City", "Sapa"],
        answer: 1,
        explanation: "Bài đọc nêu: 'weekend travel plans to Ha Long Bay'."
      }
    ]
  },

  // 5. Email và thông báo
  {
    id: "read-05",
    topic: "Email và thông báo",
    title_en: "Urgent Maintenance Notice: Plant Electrical Shutdown",
    title_vi: "Thông báo bảo trì khẩn: Lịch cắt điện toàn nhà máy",
    level: "A2",
    estimated_time: "7-10 phút",
    word_count: 138,
    week: 12,
    objectives: [
      "Đọc hiểu cấu trúc email thông báo kỹ thuật trang trọng.",
      "Tìm thông tin ngày giờ, phạm vi cắt điện và hành động cần làm.",
      "Phân biệt giữa thông tin bắt buộc và lưu ý thêm."
    ],
    text: "FROM: Facilities & Electrical Department\nTO: All Production Leads and Workshop Supervisors\nDATE: October 24, 2026\nSUBJECT: Scheduled 4-Hour Electrical Substation Maintenance on Saturday\n\nPlease be informed that the 22-kV electrical substation will undergo mandatory statutory testing and transformer oil filtration this Saturday, October 28, from 13:00 to 17:00. During this four-hour maintenance window, the entire manufacturing complex will experience a total power outage. Secondary emergency diesel generators will supply critical lighting and fire detection systems only.\n\nAll department managers must ensure that:\n1. All production machinery and CNC equipment are shut down safely by 12:30.\n2. Air compressor drain valves are opened and pneumatic lines depressurized.\n3. IT servers and computers are backed up and powered off.\n\nNormal electrical supply will be restored at 17:00 following safety verification. If you have urgent concerns, contact Extension 402.\n\nThank you for your cooperation.\nHead of Electrical Maintenance",
    sentences: [
      "Please be informed that the 22-kV electrical substation will undergo mandatory statutory testing and transformer oil filtration this Saturday, October 28, from 13:00 to 17:00.",
      "During this four-hour maintenance window, the entire manufacturing complex will experience a total power outage.",
      "Secondary emergency diesel generators will supply critical lighting and fire detection systems only.",
      "All production machinery and CNC equipment are shut down safely by 12:30.",
      "Air compressor drain valves are opened and pneumatic lines depressurized.",
      "IT servers and computers are backed up and powered off.",
      "Normal electrical supply will be restored at 17:00 following safety verification.",
      "If you have urgent concerns, contact Extension 402."
    ],
    translation: "TỪ: Bộ phận Điện & Tiện ích\nTỚI: Tất cả Trưởng ca Sản xuất và Giám sát Phân xưởng\nNGÀY: 24/10/2026\nTIÊU ĐỀ: Lịch bảo trì trạm biến áp 4 tiếng vào Thứ Bảy\n\nXin thông báo rằng trạm biến áp 22-kV sẽ tiến hành thử nghiệm định kỳ bắt buộc theo luật và lọc dầu máy biến áp vào Thứ Bảy tuần này, ngày 28/10, từ 13h00 đến 17h00. Trong khoảng thời gian bảo trì 4 giờ này, toàn bộ khu liên hợp sản xuất sẽ bị cắt điện hoàn toàn. Máy phát điện diesel khẩn cấp dự phòng sẽ chỉ cấp điện cho hệ thống chiếu sáng thiết yếu và báo cháy.\n\nTất cả quản lý bộ phận phải đảm bảo rằng:\n1. Toàn bộ máy móc sản xuất và thiết bị CNC được tắt an toàn trước 12h30.\n2. Các van xả đáy máy nén khí được mở và đường ống khí nén được xả hết áp.\n3. Máy chủ IT và máy tính văn phòng được sao lưu dữ liệu và tắt nguồn.\n\nNguồn điện bình thường sẽ được cấp trở lại lúc 17h00 sau khi kiểm tra an toàn. Nếu có thắc mắc khẩn cấp, vui lòng liên hệ số máy nhánh 402.\n\nCảm ơn sự hợp tác của quý vị.\nTrưởng bộ phận Bảo trì Điện",
    vocabulary: [
      { word: "substation", ipa: "/ˈsʌbˌsteɪ.ʃən/", pos: "noun", vi: "trạm biến áp", context: "electrical substation will undergo testing" },
      { word: "mandatory statutory testing", ipa: "/ˈmæn.də.tər.i ˈstætʃ.ə.tər.i ˈtes.tɪŋ/", pos: "noun phrase", vi: "kiểm định bắt buộc theo luật định", context: "mandatory statutory testing" },
      { word: "power outage", ipa: "/ˈpaʊ.ər ˈaʊ.tɪdʒ/", pos: "noun phrase", vi: "mất điện, cúp điện", context: "experience a total power outage" },
      { word: "depressurized", ipa: "/diːˈpreʃ.ər.aɪzd/", pos: "adjective / verb", vi: "được xả áp suất", context: "pneumatic lines depressurized" },
      { word: "restored", ipa: "/rɪˈstɔːd/", pos: "verb (past)", vi: "được khôi phục lại", context: "electrical supply will be restored" }
    ],
    questions: [
      {
        id: "q-5-1",
        type: "mcq",
        question: "When is the scheduled power outage taking place?",
        options: ["Friday morning", "Saturday from 13:00 to 17:00", "Sunday night", "Monday afternoon"],
        answer: 1,
        explanation: "Thông báo nêu: 'this Saturday, October 28, from 13:00 to 17:00'."
      },
      {
        id: "q-5-2",
        type: "detail",
        question: "By what time must all production machinery be safely shut down?",
        options: ["12:00", "12:30", "13:00", "17:00"],
        answer: 1,
        explanation: "Mục 1 nêu rõ: 'machinery and CNC equipment are shut down safely by 12:30'."
      },
      {
        id: "q-5-3",
        type: "detail",
        question: "What will the backup diesel generators power during the outage?",
        options: ["All CNC milling machines", "The plant cafeteria cooking ovens", "Critical lighting and fire detection systems only", "Air conditioning in offices"],
        answer: 2,
        explanation: "Thông báo nêu rõ máy phát chỉ cấp cho: 'critical lighting and fire detection systems only'."
      },
      {
        id: "q-5-4",
        type: "true_false",
        question: "Employees can leave air compressor lines pressurized during the maintenance window.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "Sai (False). Mục 2 yêu cầu: 'pneumatic lines depressurized'."
      },
      {
        id: "q-5-5",
        type: "vocab",
        question: "The word 'outage' in sentence 2 means:",
        options: ["An increase in voltage", "A period when power supply stops", "A new generator", "A power cable fire"],
        answer: 1,
        explanation: "'Power outage' nghĩa là thời gian mất điện / ngừng cấp điện."
      },
      {
        id: "q-5-6",
        type: "inference",
        question: "Why are departments asked to shut down machines 30 minutes before the power cut?",
        options: ["To give operators a longer break", "To prevent damage from sudden voltage drops when power is cut", "Because generators are noisy", "To save electricity costs"],
        answer: 1,
        explanation: "Tắt máy trước 30 phút nhằm đảm bảo máy móc dừng êm ái, tránh hư hỏng linh kiện điện tử do sập nguồn đột ngột."
      }
    ]
  }
];

// Helper to push remaining passages 6-15 to ensure full 15 passages:
const remainingPassagesBuilder = require('./build_reading_passages_part2.js');
const allPassages = [...passages, ...remainingPassagesBuilder()];

console.log(`Successfully compiled ${allPassages.length} comprehensive Reading Comprehension Passages!`);

// Export to data/reading-data.js
const outputFile = path.join(__dirname, '../data/reading-data.js');
const outputJs = `// English Hub V1 - Reading Comprehension Bank
// Version: 2.0.0
// 15 Comprehensive Passages across A1, A2, B1, B1+ with vocabulary, sentence breakdown, and 5-8 quiz questions each.
(function(root) {
  const READING_DATA = ${JSON.stringify(allPassages, null, 2)};

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = READING_DATA;
  }
  if (typeof window !== 'undefined') {
    window.READING_DATA = READING_DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
`;

fs.writeFileSync(outputFile, outputJs, 'utf8');
console.log(`Successfully generated and wrote ${outputFile}!`);
