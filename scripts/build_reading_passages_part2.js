// Part 2 for Reading Passages 6 through 15
module.exports = function buildPart2() {
  return [
    // 6. Nội quy và hướng dẫn đơn giản
    {
      id: "read-06",
      topic: "Nội quy và hướng dẫn đơn giản",
      title_en: "Workshop Safety Rules and Housekeeping (5S Standards)",
      title_vi: "Nội quy an toàn phân xưởng và thực hành 5S",
      level: "A2",
      estimated_time: "8-10 phút",
      word_count: 142,
      week: 16,
      objectives: [
        "Nắm rõ các mệnh lệnh và hướng dẫn an toàn: must, must not, ensure.",
        "Hiểu phương pháp 5S áp dụng thực tế tại nhà xưởng.",
        "Nhận diện các từ vựng chỉ sự cấm đoán và bắt buộc."
      ],
      text: "All personnel entering the central workshop must strictly follow three core safety rules. First, Personal Protective Equipment (PPE) is mandatory at all times. Technicians must wear high-impact safety glasses, steel-toe boots, and ear protection in designated noisy zones. Loose clothing, wristwatches, and long hair must be secured to eliminate entanglement risks near spinning lathes and drill presses.\n\nSecond, workshop cleanliness adheres to international 5S standards. Workbenches must be swept clean after each shift, and oil spills must be absorbed immediately using granules from the spill kit. Flammable solvents must never be left in open containers; they must be stored inside certified yellow fireproof cabinets.\n\nFinally, emergency escape routes, fire extinguishers, and eye-wash stations must remain completely unobstructed. Anyone observing a safety violation is empowered to exercise Stop Work Authority immediately.",
      sentences: [
        "All personnel entering the central workshop must strictly follow three core safety rules.",
        "First, Personal Protective Equipment (PPE) is mandatory at all times.",
        "Technicians must wear high-impact safety glasses, steel-toe boots, and ear protection in designated noisy zones.",
        "Loose clothing, wristwatches, and long hair must be secured to eliminate entanglement risks near spinning lathes and drill presses.",
        "Second, workshop cleanliness adheres to international 5S standards.",
        "Workbenches must be swept clean after each shift, and oil spills must be absorbed immediately using granules from the spill kit.",
        "Flammable solvents must never be left in open containers; they must be stored inside certified yellow fireproof cabinets.",
        "Finally, emergency escape routes, fire extinguishers, and eye-wash stations must remain completely unobstructed.",
        "Anyone observing a safety violation is empowered to exercise Stop Work Authority immediately."
      ],
      translation: "Tất cả nhân viên khi bước vào phân xưởng trung tâm phải tuân thủ nghiêm ngặt 3 quy tắc an toàn cốt lõi. Thứ nhất, Trang bị Bảo hộ Cá nhân (PPE) là bắt buộc tại mọi thời điểm. Kỹ thuật viên phải đeo kính chống va đập, đi giày mũi thép và đeo bảo hộ tai tại các khu vực ồn được chỉ định. Quần áo lỏng lẻo, đồng hồ đeo tay và tóc dài phải được buộc gọn để loại bỏ nguy cơ quấn kẹt gần máy tiện và máy khoan đang quay.\n\nThứ hai, việc vệ sinh phân xưởng tuân thủ theo tiêu chuẩn 5S quốc tế. Bàn làm việc phải được quét sạch sau mỗi ca, và các vết dầu tràn phải được hút sạch ngay lập tức bằng hạt thấm từ bộ dụng cụ xử lý sự cố tràn. Dung môi dễ cháy tuyệt đối không được để trong thùng hở; chúng phải được cất giữ trong tủ chống cháy màu vàng có chứng nhận.\n\nCuối cùng, lối thoát hiểm khẩn cấp, bình chữa cháy và trạm rửa mắt phải luôn thông thoáng không bị vật cản. Bất kỳ ai phát hiện vi phạm an toàn đều có quyền thực hiện Quyền Dừng Công Việc ngay lập tức.",
      vocabulary: [
        { word: "mandatory", ipa: "/ˈmæn.də.tər.i/", pos: "adjective", vi: "bắt buộc", context: "PPE is mandatory at all times" },
        { word: "entanglement", ipa: "/ɪnˈtæŋ.ɡəl.mənt/", pos: "noun", vi: "sự quấn kẹt, vướng vào máy", context: "eliminate entanglement risks" },
        { word: "spinning lathes", ipa: "/ˈspɪn.ɪŋ leɪðz/", pos: "noun phrase", vi: "máy tiện đang quay", context: "spinning lathes and drill presses" },
        { word: "flammable solvents", ipa: "/ˈflæm.ə.bəl ˈsɒl.vənts/", pos: "noun phrase", vi: "dung môi dễ cháy", context: "flammable solvents" },
        { word: "unobstructed", ipa: "/ˌʌn.əbˈstrʌk.tɪd/", pos: "adjective", vi: "không bị cản trở, thông thoáng", context: "remain completely unobstructed" }
      ],
      questions: [
        {
          id: "q-6-1",
          type: "mcq",
          question: "Where must flammable solvents be stored in the workshop?",
          options: ["In open plastic buckets", "Inside certified yellow fireproof cabinets", "Under the workbench", "Next to the drill press"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'stored inside certified yellow fireproof cabinets'."
        },
        {
          id: "q-6-2",
          type: "detail",
          question: "Why must long hair, wristwatches, and loose clothing be secured?",
          options: ["To look fashionable", "To eliminate entanglement risks near spinning machinery", "To stay warm during winter", "Because the manager dislikes jewelry"],
          answer: 1,
          explanation: "Bài đọc nêu: 'to eliminate entanglement risks near spinning lathes and drill presses'."
        },
        {
          id: "q-6-3",
          type: "true_false",
          question: "Technicians may block fire extinguishers temporarily if space is limited.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc yêu cầu: 'fire extinguishers... must remain completely unobstructed'."
        },
        {
          id: "q-6-4",
          type: "vocab",
          question: "The word 'empowered' in sentence 9 means that employees:",
          options: ["Are given the full right and authority", "Are punished", "Must pay a fee", "Are forbidden from acting"],
          answer: 0,
          explanation: "'Empowered' nghĩa là được trao toàn quyền (given the full right and authority)."
        },
        {
          id: "q-6-5",
          type: "inference",
          question: "What is the consequence of leaving an oil spill on the workshop floor?",
          options: ["The floor becomes shinier", "It creates a severe slip and fall hazard", "It speeds up machine maintenance", "It improves 5S scores"],
          answer: 1,
          explanation: "Vết dầu trên sàn nhà xưởng tạo ra nguy cơ trượt ngã (slip and fall hazard) cực kỳ nguy hiểm."
        },
        {
          id: "q-6-6",
          type: "main_idea",
          question: "Which title best captures the core message of this passage?",
          options: ["How to Buy Drill Presses", "Essential Safety Guidelines and Housekeeping for Workshop Personnel", "History of German Lathes", "Chemical Pricing in Vietnam"],
          answer: 1,
          explanation: "Đoạn văn tóm lược các quy tắc an toàn cốt lõi và tiêu chuẩn 5S cho nhân sự phân xưởng."
        }
      ]
    },

    // 7. Mô tả dụng cụ và thiết bị
    {
      id: "read-07",
      topic: "Mô tả dụng cụ và thiết bị",
      title_en: "Essential Mechanical Hand and Power Tools",
      title_vi: "Các dụng cụ cơ khí cầm tay và dụng cụ điện thiết yếu",
      level: "A2",
      estimated_time: "8-10 phút",
      word_count: 148,
      week: 20,
      objectives: [
        "Nhận diện tên gọi và công năng của các dụng cụ bảo trì thông dụng.",
        "Phân biệt giữa dụng cụ cầm tay (hand tools) và dụng cụ dùng lực/điện (power tools).",
        "Hiểu các hướng dẫn sử dụng dụng cụ đúng quy cách kỹ thuật."
      ],
      text: "Industrial mechanical technicians rely on diverse hand and precision tools to maintain plant machinery. Among essential hand tools, combination wrenches have an open-ended jaw for fast turning and a 12-point box ring for applying heavy torque without rounding off bolt corners. For hexagonal fasteners, socket sets with reversible ratchets allow technicians to tighten or loosen bolts in tight spaces without removing the tool head after each turn.\n\nWhen precise fastening is critical, calibrated torque wrenches must be used. Unlike standard spanners, a torque wrench clicks when the preset tightening limit is reached, preventing bolt stretch and thread stripping on pressure flanges. Precision measurement also requires digital vernier calipers and micrometer gauges to measure shaft diameters within 0.01 millimeters. Finally, pneumatic impact wrenches speed up disassembly of stubborn rusty bolts, but should never be used for final precision assembly.",
      sentences: [
        "Industrial mechanical technicians rely on diverse hand and precision tools to maintain plant machinery.",
        "Among essential hand tools, combination wrenches have an open-ended jaw for fast turning and a 12-point box ring for applying heavy torque without rounding off bolt corners.",
        "For hexagonal fasteners, socket sets with reversible ratchets allow technicians to tighten or loosen bolts in tight spaces without removing the tool head after each turn.",
        "When precise fastening is critical, calibrated torque wrenches must be used.",
        "Unlike standard spanners, a torque wrench clicks when the preset tightening limit is reached, preventing bolt stretch and thread stripping on pressure flanges.",
        "Precision measurement also requires digital vernier calipers and micrometer gauges to measure shaft diameters within 0.01 millimeters.",
        "Finally, pneumatic impact wrenches speed up disassembly of stubborn rusty bolts, but should never be used for final precision assembly."
      ],
      translation: "Các kỹ thuật viên cơ khí công nghiệp dựa vào nhiều dụng cụ cầm tay và dụng cụ đo chính xác để bảo trì máy móc nhà máy. Trong số các dụng cụ cầm tay thiết yếu, cờ lê vòng miệng có một đầu hở để vặn nhanh và một đầu tròng 12 cạnh để tác dụng lực siết lớn mà không làm trượt mép góc bu-lông. Đối với bu-lông lục giác, bộ đầu tuýp với cần siết tự động (cần lắc lắt léo) cho phép kỹ thuật viên siết hoặc nới lỏng bu-lông trong không gian hẹp mà không cần nhấc đầu tuýp ra sau mỗi vòng vặn.\n\nKhi việc siết lực chuẩn xác là tối quan trọng, cờ lê cân lực đã hiệu chuẩn bắt buộc phải được sử dụng. Khác với cờ lê thông thường, cờ lê lực phát ra tiếng 'tách' khi đạt đến giới hạn siết đã cài đặt, ngăn ngừa hiện tượng dãn đứt bu-lông và tuột ren trên mặt bích chịu áp. Việc đo kiểm chính xác cũng đòi hỏi thước cặp điện tử và pan-me để đo đường kính trục với độ chính xác đến 0.01 mm. Cuối cùng, súng siết bu-lông khí nén giúp tăng tốc độ tháo các bu-lông rỉ sét cứng đầu, nhưng tuyệt đối không bao giờ được dùng để siết lắp ráp chính xác cuối cùng.",
      vocabulary: [
        { word: "combination wrenches", ipa: "/ˌkɒm.bɪˈneɪ.ʃən ˈrentʃ.ɪz/", pos: "noun phrase", vi: "cờ lê vòng miệng", context: "combination wrenches have an open-ended jaw" },
        { word: "reversible ratchets", ipa: "/rɪˈvɜː.sə.bəl ˈrætʃ.ɪts/", pos: "noun phrase", vi: "cần lắc đảo chiều (cần tự động)", context: "socket sets with reversible ratchets" },
        { word: "calibrated torque wrench", ipa: "/ˈkæl.ɪ.breɪ.tɪd tɔːk rentʃ/", pos: "noun phrase", vi: "cờ lê cân lực đã hiệu chuẩn", context: "calibrated torque wrenches must be used" },
        { word: "thread stripping", ipa: "/θred ˈstrɪp.ɪŋ/", pos: "noun phrase", vi: "hiện tượng trờn ren, tuột ren", context: "preventing thread stripping" },
        { word: "pneumatic impact wrench", ipa: "/njuːˈmæt.ɪk ˈɪm.pækt rentʃ/", pos: "noun phrase", vi: "súng mở ốc dùng khí nén", context: "pneumatic impact wrenches speed up disassembly" }
      ],
      questions: [
        {
          id: "q-7-1",
          type: "mcq",
          question: "What happens when a preset torque limit is reached on a torque wrench?",
          options: ["The wrench stops turning completely", "It emits an audible click sound", "A red alarm lamp turns on", "The bolt falls off"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'a torque wrench clicks when the preset tightening limit is reached'."
        },
        {
          id: "q-7-2",
          type: "detail",
          question: "What tool allows turning bolts in tight spaces without lifting the head after each turn?",
          options: ["Flathead screwdriver", "Socket set with reversible ratchet", "Heavy claw hammer", "Hand hacksaw"],
          answer: 1,
          explanation: "Bài đọc nêu: 'socket sets with reversible ratchets allow technicians to tighten or loosen bolts in tight spaces without removing the tool head'."
        },
        {
          id: "q-7-3",
          type: "true_false",
          question: "Pneumatic impact wrenches are recommended for final precision assembly.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc nêu rõ: 'should never be used for final precision assembly'."
        },
        {
          id: "q-7-4",
          type: "detail",
          question: "What precision tools are mentioned for measuring shaft diameter to 0.01 mm?",
          options: ["Measuring tape and ruler", "Digital vernier calipers and micrometer gauges", "Pressure gauge and thermometer", "Laser pointer"],
          answer: 1,
          explanation: "Bài đọc nêu: 'digital vernier calipers and micrometer gauges'."
        },
        {
          id: "q-7-5",
          type: "vocab",
          question: "The word 'fasteners' in sentence 3 refers to:",
          options: ["Bolts, nuts, and screws used to join parts", "Electrical cables", "Chemical liquids", "Factory workers"],
          answer: 0,
          explanation: "'Fasteners' là thuật ngữ kỹ thuật chỉ các chi tiết kẹp chặt như bu-lông, đai ốc, ốc vít."
        },
        {
          id: "q-7-6",
          type: "inference",
          question: "Why is overtightening bolts dangerous on a pressure flange?",
          options: ["It makes the machine heavier", "It can stretch bolts beyond their yield point or strip threads, causing leaks", "It changes the color of the steel", "It wastes battery power"],
          answer: 1,
          explanation: "Siết quá lực gây kéo dãn bu-lông quá giới hạn đàn hồi hoặc trờn ren, dẫn đến rò rỉ áp lực nguy hiểm."
        }
      ]
    },

    // 8. Kiểm tra trước khi vận hành
    {
      id: "read-08",
      topic: "Kiểm tra trước khi vận hành",
      title_en: "Pre-Operation Machine Checklist and Verification",
      title_vi: "Quy trình kiểm tra máy móc trước khi vận hành",
      level: "A2-B1",
      estimated_time: "9-12 phút",
      word_count: 165,
      week: 24,
      objectives: [
        "Nắm rõ 4 bước kiểm tra trước khi khởi động máy công nghiệp.",
        "Hiểu các thông số thị giác: sight glass, oil level, guards, interlocks.",
        "Phát triển kỹ năng suy luận nguyên nhân sự cố do bỏ sót kiểm tra."
      ],
      text: "Starting high-speed rotating machinery without completing a rigorous pre-operation inspection is one of the leading causes of premature equipment breakdown and workplace injuries. Before pressing the master power button on any industrial system, technicians must conduct a four-phase verification.\n\nPhase 1 involves visual inspection of mechanical integrity. Ensure all safety guards, belt enclosures, and chain shields are bolted securely in place. Check that no stray wrenches, rags, or testing leads have been left inside rotating compartments.\n\nPhase 2 focuses on lubrication status. Inspect sight glasses on bearing housings and gearboxes to verify fluid levels sit precisely between the minimum and maximum indicator lines. Dark, emulsified, or milky oil signifies water contamination and demands immediate drainage before startup.\n\nPhase 3 verifies control readiness. Test that emergency stop push-buttons latch mechanically and reset smoothly. Ensure safety light curtains and interlock door switches cut control voltage when breached.\n\nPhase 4 requires turning the shaft manually by hand. If rotation is smooth and free of binding, start the machine in jog mode for thirty seconds.",
      sentences: [
        "Starting high-speed rotating machinery without completing a rigorous pre-operation inspection is one of the leading causes of premature equipment breakdown and workplace injuries.",
        "Before pressing the master power button on any industrial system, technicians must conduct a four-phase verification.",
        "Phase 1 involves visual inspection of mechanical integrity.",
        "Ensure all safety guards, belt enclosures, and chain shields are bolted securely in place.",
        "Check that no stray wrenches, rags, or testing leads have been left inside rotating compartments.",
        "Phase 2 focuses on lubrication status.",
        "Inspect sight glasses on bearing housings and gearboxes to verify fluid levels sit precisely between the minimum and maximum indicator lines.",
        "Dark, emulsified, or milky oil signifies water contamination and demands immediate drainage before startup.",
        "Phase 3 verifies control readiness.",
        "Test that emergency stop push-buttons latch mechanically and reset smoothly.",
        "Ensure safety light curtains and interlock door switches cut control voltage when breached.",
        "Phase 4 requires turning the shaft manually by hand.",
        "If rotation is smooth and free of binding, start the machine in jog mode for thirty seconds."
      ],
      translation: "Khởi động máy móc quay tốc độ cao mà không hoàn thành việc kiểm tra nghiêm ngặt trước khi vận hành là một trong những nguyên nhân hàng đầu gây hư hỏng thiết bị sớm và tai nạn lao động. Trước khi nhấn nút nguồn tổng trên bất kỳ hệ thống công nghiệp nào, kỹ thuật viên phải tiến hành quy trình xác nhận qua 4 giai đoạn.\n\nGiai đoạn 1 liên quan đến kiểm tra trực quan độ nguyên vẹn cơ khí. Đảm bảo toàn bộ tấm chắn an toàn, vỏ bọc dây đai và tấm chắn xích được bắt bu-lông chắc chắn đúng vị trí. Kiểm tra để chắc chắn không có cờ lê, giẻ lau hoặc que đo bị bỏ quên bên trong các khoang quay.\n\nGiai đoạn 2 tập trung vào tình trạng bôi trơn. Kiểm tra mắt thăm dầu trên gối đỡ ổ bi và hộp giảm tốc để xác nhận mức dầu nằm chính xác giữa hai vạch chỉ báo Min và Max. Dầu bị sẫm màu, nhũ tương hoặc đục như sữa biểu thị sự nhiễm nước và bắt buộc phải xả thay dầu mới ngay trước khi khởi động.\n\nGiai đoạn 3 kiểm tra tính sẵn sàng của hệ thống điều khiển. Kiểm tra các nút dừng khẩn cấp có khóa cơ học và nhả chốt êm ái hay không. Đảm bảo cảm biến quang an toàn và công tắc cửa liên động ngắt điện điều khiển ngay khi bị vi phạm.\n\nGiai đoạn 4 yêu cầu quay thử trục bằng tay. Nếu trục quay êm và không bị kẹt, hãy khởi động máy ở chế độ nhấp (jog mode) trong 30 giây.",
      vocabulary: [
        { word: "rigorous", ipa: "/ˈrɪɡ.ər.əs/", pos: "adjective", vi: "nghiêm ngặt, khắt khe", context: "rigorous pre-operation inspection" },
        { word: "premature breakdown", ipa: "/ˌprem.əˈtʃʊər ˈbreɪk.daʊn/", pos: "noun phrase", vi: "hư hỏng, sự cố sớm", context: "leading causes of premature breakdown" },
        { word: "sight glasses", ipa: "/saɪt ɡlɑːs.ɪz/", pos: "noun (pl)", vi: "mắt thăm dầu, kính quan sát", context: "inspect sight glasses on bearing housings" },
        { word: "milky oil", ipa: "/ˈmɪl.ki ɔɪl/", pos: "noun phrase", vi: "dầu bị đục như sữa (nhiễm nước)", context: "milky oil signifies water contamination" },
        { word: "jog mode", ipa: "/dʒɒɡ məʊd/", pos: "noun phrase", vi: "chế độ chạy nhấp (chạy chậm từng nhịp)", context: "start the machine in jog mode" }
      ],
      questions: [
        {
          id: "q-8-1",
          type: "mcq",
          question: "What does milky or emulsified lubricating oil signify?",
          options: ["The oil is brand new", "Water contamination inside the oil", "High operating temperature", "Excessive electrical voltage"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'Dark, emulsified, or milky oil signifies water contamination'."
        },
        {
          id: "q-8-2",
          type: "detail",
          question: "What should technicians check before powering up in Phase 1?",
          options: ["The lunch menu", "That all guards are bolted and no tools are left inside compartments", "The factory Wi-Fi password", "The air conditioning temperature"],
          answer: 1,
          explanation: "Giai đoạn 1 yêu cầu: 'guards are bolted... no stray wrenches, rags, or testing leads have been left inside'."
        },
        {
          id: "q-8-3",
          type: "sequence",
          question: "According to the passage, what should be done right before starting in jog mode?",
          options: ["Draining all oil", "Turning the shaft manually by hand to check for binding", "Replacing the electric motor", "Cleaning the plant floor"],
          answer: 1,
          explanation: "Giai đoạn 4 nêu: 'turning the shaft manually by hand. If rotation is smooth... start in jog mode'."
        },
        {
          id: "q-8-4",
          type: "true_false",
          question: "If emergency stop buttons fail to latch, the operator can still start production.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Nút dừng khẩn cấp phải hoạt động hoàn hảo trước khi vận hành."
        },
        {
          id: "q-8-5",
          type: "vocab",
          question: "The word 'binding' in sentence 13 is closest in meaning to:",
          options: ["Free movement", "Mechanical friction or resistance preventing smooth rotation", "High speed", "Quiet operation"],
          answer: 1,
          explanation: "'Binding' trong cơ khí có nghĩa là bị kẹt, sít hoặc có ma sát cản trở trục quay tự do."
        },
        {
          id: "q-8-6",
          type: "inference",
          question: "Why is a 30-second jog test run recommended instead of running full speed immediately?",
          options: ["To save electricity", "To safely observe rotation direction, abnormal noise, or vibration under low risk", "To test the cafeteria food", "Because technicians get tired"],
          answer: 1,
          explanation: "Chạy nhấp 30 giây giúp người thợ quan sát chiều quay, kiểm tra tiếng động lạ và độ rung mà không gây nguy cơ hư hại lớn."
        }
      ]
    },

    // 9. Bảo trì định kỳ
    {
      id: "read-09",
      topic: "Bảo trì định kỳ",
      title_en: "Preventive Maintenance Procedures for Centrifugal Pumps",
      title_vi: "Quy trình bảo trì phòng ngừa cho máy bơm ly tâm",
      level: "B1",
      estimated_time: "10-14 phút",
      word_count: 184,
      week: 28,
      objectives: [
        "Nắm vững các thuật ngữ chuyên ngành bơm: mechanical seal, impeller, cavitation, bearing clearance.",
        "Phân biệt giữa bảo trì theo thời gian (time-based) và bảo trì theo tình trạng (CBM).",
        "Hiểu phương pháp kiểm tra độ hở khe hở bạc và phân tích rung động."
      ],
      text: "Centrifugal pumps are the lifeblood of fluid transport in chemical plants, oil refineries, and food processing facilities. To prevent catastrophic failure and unplanned shutdowns, modern maintenance departments implement condition-based preventive maintenance (CBM) protocols alongside scheduled routine servicing.\n\nDuring monthly preventive inspections, technicians record overall vibration velocity on drive-end and non-drive-end bearing housings using accelerometer sensors. Vibration readings exceeding 4.5 mm/s according to ISO 10816 standards indicate developing defects, such as shaft misalignment, unbalance, or early raceway flaking. In addition, technicians monitor the mechanical seal flush plan. A dripping mechanical seal indicates face wear or damaged elastomer O-rings, which must be serviced before flammable or hazardous fluids escape into the atmosphere.\n\nEvery six months, the pump casing is split for comprehensive internal overhaul. Technicians inspect the stainless steel impeller for signs of cavitation erosion, which appears as microscopic pitting resembling sponge surfaces. Casing wear rings must be measured with inside micrometers; if the diametrical clearance exceeds manufacturer specifications by more than fifty percent, replacement is essential to restore pumping efficiency and prevent internal hydraulic recirculation.",
      sentences: [
        "Centrifugal pumps are the lifeblood of fluid transport in chemical plants, oil refineries, and food processing facilities.",
        "To prevent catastrophic failure and unplanned shutdowns, modern maintenance departments implement condition-based preventive maintenance (CBM) protocols alongside scheduled routine servicing.",
        "During monthly preventive inspections, technicians record overall vibration velocity on drive-end and non-drive-end bearing housings using accelerometer sensors.",
        "Vibration readings exceeding 4.5 mm/s according to ISO 10816 standards indicate developing defects, such as shaft misalignment, unbalance, or early raceway flaking.",
        "In addition, technicians monitor the mechanical seal flush plan.",
        "A dripping mechanical seal indicates face wear or damaged elastomer O-rings, which must be serviced before flammable or hazardous fluids escape into the atmosphere.",
        "Every six months, the pump casing is split for comprehensive internal overhaul.",
        "Technicians inspect the stainless steel impeller for signs of cavitation erosion, which appears as microscopic pitting resembling sponge surfaces.",
        "Casing wear rings must be measured with inside micrometers; if the diametrical clearance exceeds manufacturer specifications by more than fifty percent, replacement is essential to restore pumping efficiency and prevent internal hydraulic recirculation."
      ],
      translation: "Máy bơm ly tâm là huyết mạch trong vận chuyển chất lỏng tại các nhà máy hóa chất, nhà máy lọc dầu và cơ sở chế biến thực phẩm. Để ngăn ngừa sự cố thảm khốc và các đợt dừng máy đột xuất, các phòng bảo trì hiện đại triển khai quy trình bảo trì dựa trên tình trạng thiết bị (CBM) song hành cùng công tác bảo dưỡng định kỳ theo lịch trình.\n\nTrong các đợt kiểm tra phòng ngừa hàng tháng, kỹ thuật viên đo vận tốc rung tổng thể trên gối đỡ ổ bi đầu truyền động và đầu tự do bằng cảm biến gia tốc. Các số đo rung vượt quá 4.5 mm/s theo tiêu chuẩn ISO 10816 biểu thị các khiếm khuyết đang phát triển, ví dụ như lệch tâm trục, mất cân bằng hoặc tróc rỗ rãnh bi sớm. Ngoài ra, kỹ thuật viên theo dõi kế hoạch xả rửa phớt cơ khí. Một chiếc phớt cơ khí bị nhỏ giọt cho thấy bề mặt chà bị mòn hoặc hỏng vòng đệm O-ring cao su, cần phải bảo dưỡng trước khi chất lỏng nguy hại hoặc dễ cháy rò rỉ ra môi trường.\n\nMỗi 6 tháng một lần, vỏ bơm được mở ra để đại tu toàn diện bên trong. Kỹ thuật viên kiểm tra cánh bơm inox để tìm dấu hiệu xói mòn do xâm thực khí (cavitation), vốn biểu hiện dưới dạng các lỗ rỗ siêu nhỏ trông giống như bề mặt bọt biển. Vòng chống mòn vỏ bơm phải được đo bằng pan-me đo trong; nếu khe hở đường kính vượt quá 50% so với thông số của nhà sản xuất, việc thay thế là bắt buộc để khôi phục hiệu suất bơm và chống hiện tượng tuần hoàn thủy lực nội bộ.",
      vocabulary: [
        { word: "centrifugal pumps", ipa: "/senˈtrɪf.jʊ.ɡəl pʌmps/", pos: "noun phrase", vi: "máy bơm ly tâm", context: "Centrifugal pumps are the lifeblood" },
        { word: "condition-based maintenance (CBM)", ipa: "/kənˈdɪʃ.ən beɪst/", pos: "noun phrase", vi: "bảo trì dựa trên tình trạng thiết bị", context: "implement CBM protocols" },
        { word: "mechanical seal", ipa: "/mɪˈkæn.ɪ.kəl siːl/", pos: "noun phrase", vi: "phớt cơ khí, phớt làm kín", context: "monitor the mechanical seal flush plan" },
        { word: "cavitation erosion", ipa: "/ˌkæv.ɪˈteɪ.ʃən ɪˈrəʊ.ʒən/", pos: "noun phrase", vi: "xói mòn do hiện tượng xâm thực khí", context: "signs of cavitation erosion" },
        { word: "diametrical clearance", ipa: "/ˌdaɪ.əˈmet.rɪ.kəl ˈklɪə.rəns/", pos: "noun phrase", vi: "khe hở đường kính", context: "if the diametrical clearance exceeds" }
      ],
      questions: [
        {
          id: "q-9-1",
          type: "mcq",
          question: "According to ISO 10816 standards, vibration velocity exceeding what value indicates developing defects?",
          options: ["1.5 mm/s", "2.8 mm/s", "4.5 mm/s", "10.0 mm/s"],
          answer: 2,
          explanation: "Bài đọc nêu rõ: 'Vibration readings exceeding 4.5 mm/s according to ISO 10816 standards indicate developing defects'."
        },
        {
          id: "q-9-2",
          type: "detail",
          question: "What does cavitation erosion on a stainless steel impeller look like?",
          options: ["Shiny polished metal", "Microscopic pitting resembling sponge surfaces", "Black burnt marks", "Smooth circular scratches"],
          answer: 1,
          explanation: "Bài đọc nêu: 'cavitation erosion, which appears as microscopic pitting resembling sponge surfaces'."
        },
        {
          id: "q-9-3",
          type: "detail",
          question: "When should pump casing wear rings be replaced?",
          options: ["Every week", "When diametrical clearance exceeds manufacturer specs by more than 50%", "Only when the pump stops spinning", "Every year regardless of condition"],
          answer: 1,
          explanation: "Bài đọc nêu: 'if the diametrical clearance exceeds manufacturer specifications by more than fifty percent, replacement is essential'."
        },
        {
          id: "q-9-4",
          type: "true_false",
          question: "A dripping mechanical seal can be safely ignored if fluid is not acidic.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc nêu phớt nhỏ giọt phải được sửa chữa trước khi chất lỏng nguy hại rò rỉ ra môi trường."
        },
        {
          id: "q-9-5",
          type: "vocab",
          question: "The word 'flaking' in sentence 4 refers to:",
          options: ["Chipping or peeling away of metal particles from the bearing raceway", "Painting the motor", "Greasing the bearings", "Washing with soap"],
          answer: 0,
          explanation: "'Flaking' trong ổ bi là hiện tượng tróc vảy mỏi kim loại trên bề mặt rãnh lăn."
        },
        {
          id: "q-9-6",
          type: "inference",
          question: "What is the primary advantage of CBM over traditional calendar-based maintenance?",
          options: ["It eliminates the need for technicians", "It repairs machines based on actual measured health, avoiding unnecessary tear-down and surprise breakdowns", "It makes spare parts cheaper", "It requires no sensors"],
          answer: 1,
          explanation: "CBM chẩn đoán tình trạng thực tế của máy, giúp thay thế đúng thời điểm, tránh tháo máy khi đang tốt và tránh sự cố bất ngờ."
        },
        {
          id: "q-9-7",
          type: "main_idea",
          question: "What is the central focus of this passage?",
          options: ["Comparing electricity bills of factories", "Systematic vibration, seal, and internal inspection protocols for pump reliability", "How to install water pipes at home", "History of chemical factories"],
          answer: 1,
          explanation: "Bài đọc trình bày các quy trình kiểm tra độ rung, phớt cơ khí và linh kiện bên trong để đảm bảo độ tin cậy của máy bơm."
        }
      ]
    },

    // 10. Báo cáo tiếng ồn bất thường
    {
      id: "read-10",
      topic: "Báo cáo tiếng ồn bất thường",
      title_en: "Abnormal Noise and Acoustic Diagnostics in Rotating Machinery",
      title_vi: "Chẩn đoán tiếng ồn bất thường và âm học trong máy quay",
      level: "B1",
      estimated_time: "10-14 phút",
      word_count: 198,
      week: 32,
      objectives: [
        "Học các tính từ mô tả âm thanh cơ khí: screeching, rattling, humming, cavitation.",
        "Hiểu phương pháp phân tích phổ tần số (FFT spectrum analysis).",
        "Áp dụng nguyên lý chẩn đoán âm học kết hợp đo nhiệt độ hồng ngoại."
      ],
      text: "Experienced industrial technicians know that machinery communicates its mechanical health through sound long before catastrophic structural damage occurs. An abnormal noise is frequently the earliest warning signal of an impending component breakdown. Learning to distinguish acoustic patterns enables maintenance crews to diagnose underlying mechanical defects with remarkable precision.\n\nA high-pitched screeching or squealing sound typically originates from slipping transmission V-belts or unlubricated friction between rotating shafts and damaged lip seals. In contrast, a deep, rhythmic humming or buzzing noise at double electrical line frequency (100 Hz or 120 Hz) points toward an electromagnetic imbalance in an electric motor stator, such as uneven air gaps or loose core laminations.\n\nWhen gearboxes produce a harsh, rattling or clicking sound under varying loads, it signifies tooth pitting, broken gear teeth, or excessive backlash. Meanwhile, a distinct acoustic phenomenon resembling gravel being shaken inside a pump casing denotes cavitation, where collapsing vapor bubbles erode metal surfaces at supersonic micro-jet velocities. Whenever unusual acoustics are detected, technicians must deploy specialized acoustic stethoscopes and digital sound level meters to pinpoint the noise source, cross-checking findings with infrared thermal imaging before deciding whether immediate shutdown is warranted.",
      sentences: [
        "Experienced industrial technicians know that machinery communicates its mechanical health through sound long before catastrophic structural damage occurs.",
        "An abnormal noise is frequently the earliest warning signal of an impending component breakdown.",
        "Learning to distinguish acoustic patterns enables maintenance crews to diagnose underlying mechanical defects with remarkable precision.",
        "A high-pitched screeching or squealing sound typically originates from slipping transmission V-belts or unlubricated friction between rotating shafts and damaged lip seals.",
        "In contrast, a deep, rhythmic humming or buzzing noise at double electrical line frequency (100 Hz or 120 Hz) points toward an electromagnetic imbalance in an electric motor stator, such as uneven air gaps or loose core laminations.",
        "When gearboxes produce a harsh, rattling or clicking sound under varying loads, it signifies tooth pitting, broken gear teeth, or excessive backlash.",
        "Meanwhile, a distinct acoustic phenomenon resembling gravel being shaken inside a pump casing denotes cavitation, where collapsing vapor bubbles erode metal surfaces at supersonic micro-jet velocities.",
        "Whenever unusual acoustics are detected, technicians must deploy specialized acoustic stethoscopes and digital sound level meters to pinpoint the noise source, cross-checking findings with infrared thermal imaging before deciding whether immediate shutdown is warranted."
      ],
      translation: "Các kỹ thuật viên công nghiệp giàu kinh nghiệm đều hiểu rằng máy móc truyền đạt tình trạng sức khỏe cơ khí của nó qua âm thanh rất lâu trước khi các hư hỏng kết cấu thảm khốc xảy ra. Một tiếng ồn bất thường thường là tín hiệu cảnh báo sớm nhất về một sự cố hỏng hóc linh kiện sắp xảy ra. Việc học cách phân biệt các dạng âm học cho phép đội ngũ bảo trì chẩn đoán các khiếm khuyết cơ khí tiềm ẩn với độ chuẩn xác đáng kinh ngạc.\n\nTiếng rít chói tai thường bắt nguồn từ hiện tượng trượt dây đai truyền động V-belt hoặc ma sát thiếu bôi trơn giữa trục quay và phớt chắn dầu bị rách. Trái lại, tiếng vo ve hoặc ù trầm theo nhịp ở tần số gấp đôi tần số lưới điện (100 Hz hoặc 120 Hz) chỉ ra sự mất cân bằng điện từ trong stato động cơ điện, chẳng hạn như khe hở không khí không đều hoặc lỏng lá thép phe stato.\n\nKhi hộp số phát ra tiếng lạch cạch hoặc lách cách gay gắt dưới các mức tải thay đổi, điều đó biểu thị rỗ bề mặt răng, mẻ răng bánh răng hoặc khe hở ăn khớp (backlash) quá lớn. Trong khi đó, hiện tượng âm thanh đặc trưng nghe như sỏi đá bị lắc mạnh bên trong vỏ bơm biểu thị sự xâm thực khí (cavitation), nơi các bọt hơi sụp đổ bắn phá xói mòn bề mặt kim loại với vận tốc tia siêu âm. Bất cứ khi nào phát hiện âm học bất thường, kỹ thuật viên phải triển khai ống nghe âm học chuyên dụng và máy đo độ ồn kỹ thuật số để xác định chính xác nguồn phát ra tiếng ồn, đối chiếu với ảnh nhiệt hồng ngoại trước khi quyết định có cần dừng máy khẩn cấp hay không.",
      vocabulary: [
        { word: "screeching", ipa: "/ˈskriː.tʃɪŋ/", pos: "adjective", vi: "kêu rít chói tai", context: "A high-pitched screeching sound" },
        { word: "rhythmic humming", ipa: "/ˈrɪð.mɪk ˈhʌm.ɪŋ/", pos: "noun phrase", vi: "tiếng vo ve có nhịp điệu", context: "a deep, rhythmic humming or buzzing noise" },
        { word: "excessive backlash", ipa: "/ɪkˈses.ɪv ˈbæk.læʃ/", pos: "noun phrase", vi: "khe hở ăn khớp quá lớn (độ rơ)", context: "broken gear teeth, or excessive backlash" },
        { word: "acoustic stethoscope", ipa: "/əˈkuː.stɪk ˈsteθ.ə.skəʊp/", pos: "noun phrase", vi: "ống nghe âm học công nghiệp", context: "deploy specialized acoustic stethoscopes" },
        { word: "infrared thermal imaging", ipa: "/ˌɪn.frəˈred ˈθɜː.məl ˈɪm.ɪ.dʒɪŋ/", pos: "noun phrase", vi: "chụp ảnh nhiệt hồng ngoại", context: "cross-checking findings with infrared thermal imaging" }
      ],
      questions: [
        {
          id: "q-10-1",
          type: "mcq",
          question: "What mechanical problem is indicated by a sound resembling gravel rattling inside a pump?",
          options: ["Slipping belts", "Cavitation with collapsing vapor bubbles", "Stator air gap imbalance", "Broken coupling bolt"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'acoustic phenomenon resembling gravel being shaken inside a pump casing denotes cavitation'."
        },
        {
          id: "q-10-2",
          type: "detail",
          question: "What causes a high-pitched screeching or squealing sound?",
          options: ["Slipping V-belts or unlubricated shaft friction against damaged seals", "Good lubrication", "Low electric current", "A new paint coating"],
          answer: 0,
          explanation: "Bài đọc nêu: 'high-pitched screeching... originates from slipping transmission V-belts or unlubricated friction'."
        },
        {
          id: "q-10-3",
          type: "detail",
          question: "What diagnostic tools are mentioned for investigating abnormal acoustics?",
          options: ["Measuring tape and hammer", "Acoustic stethoscopes, sound level meters, and infrared thermal imaging", "Water bucket and soap", "Paper notebook only"],
          answer: 1,
          explanation: "Bài đọc nêu: 'deploy specialized acoustic stethoscopes and digital sound level meters... cross-checking findings with infrared thermal imaging'."
        },
        {
          id: "q-10-4",
          type: "true_false",
          question: "A deep humming noise at 100 Hz usually indicates broken gearbox teeth.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc chỉ rõ tiếng humming ở tần số lưới điện đôi chỉ ra mất cân bằng điện từ stato động cơ (electromagnetic imbalance in stator)."
        },
        {
          id: "q-10-5",
          type: "vocab",
          question: "The word 'impending' in sentence 2 means:",
          options: ["About to happen soon", "Happened five years ago", "Impossible to occur", "Pleasant and fun"],
          answer: 0,
          explanation: "'Impending' nghĩa là sắp sửa xảy ra (about to happen soon)."
        },
        {
          id: "q-10-6",
          type: "inference",
          question: "Why should sound diagnostics be cross-checked with infrared thermal imaging?",
          options: ["To take pretty pictures for social media", "Because mechanical friction and electrical faults generate localized heat alongside sound", "Because sound meters are always wrong", "To cool down the room"],
          answer: 1,
          explanation: "Ma sát cơ học và lỗi điện từ luôn sinh nhiệt cục bộ song song với âm thanh, đối chiếu nhiệt giúp xác thực 100% vị trí sự cố."
        },
        {
          id: "q-10-7",
          type: "main_idea",
          question: "What is the main takeaway of this article?",
          options: ["Factories are too noisy for human ears", "Acoustic signatures provide early, actionable insights into specific rotating machinery defects", "Always wear earplugs and ignore machine noises", "Gearboxes do not make sounds"],
          answer: 1,
          explanation: "Dấu hiệu âm học cung cấp cảnh báo sớm và chính xác về các hư hỏng cơ khí cụ thể trong máy móc quay."
        }
      ]
    },

    // 11. Bàn giao ca
    {
      id: "read-11",
      topic: "Bàn giao ca",
      title_en: "Standard Operating Procedure for Industrial Shift Handover",
      title_vi: "Quy trình vận hành chuẩn cho bàn giao ca công nghiệp",
      level: "B1",
      estimated_time: "10-14 phút",
      word_count: 206,
      week: 36,
      objectives: [
        "Nắm vững 3 giai đoạn của quy trình bàn giao ca: chuẩn bị, đối thoại trực tiếp, ký nhận nhật ký.",
        "Hiểu thuật ngữ LOTO bàn giao: transfer of locks, open work orders.",
        "Nhận thức tầm quan trọng của việc truyền thông không giả định (no assumptions)."
      ],
      text: "The transition between operating shifts represents one of the most vulnerable windows in plant operations. Historical industrial disaster investigations reveal that communication breakdowns during shift handovers frequently lead to catastrophic errors, such as starting machinery under active maintenance or misunderstanding critical bypass valves. To safeguard plant reliability and worker safety, organizations mandate a rigorous Three-Stage Shift Handover Procedure.\n\nStage 1: Preparation. Thirty minutes prior to shift end, outgoing technicians inspect their designated zones, update electronic logbooks, and compile an accurate summary of equipment status, ongoing work orders, and abnormal parameters. Any active Lockout/Tagout (LOTO) isolations must be cross-checked against physical padlock stations.\n\nStage 2: Face-to-Face Dialogue. Handover must never occur through hurried telephone calls or unverified text messages. Incoming and outgoing crews meet directly in the control room or at the machine. Outgoing staff verbally walk through key operational events, maintenance obstacles, and pending safety permits. The incoming technician must actively ask clarifying questions and repeat critical numbers.\n\nStage 3: Joint Inspection and Formal Sign-off. Both leads conduct a physical walk-through of active work areas. Only after verifying that machine guards are intact, safety tags are accounted for, and environmental readings are normal do both supervisors sign the shift handover register.",
      sentences: [
        "The transition between operating shifts represents one of the most vulnerable windows in plant operations.",
        "Historical industrial disaster investigations reveal that communication breakdowns during shift handovers frequently lead to catastrophic errors, such as starting machinery under active maintenance or misunderstanding critical bypass valves.",
        "To safeguard plant reliability and worker safety, organizations mandate a rigorous Three-Stage Shift Handover Procedure.",
        "Stage 1: Preparation.",
        "Thirty minutes prior to shift end, outgoing technicians inspect their designated zones, update electronic logbooks, and compile an accurate summary of equipment status, ongoing work orders, and abnormal parameters.",
        "Any active Lockout/Tagout (LOTO) isolations must be cross-checked against physical padlock stations.",
        "Stage 2: Face-to-Face Dialogue.",
        "Handover must never occur through hurried telephone calls or unverified text messages.",
        "Incoming and outgoing crews meet directly in the control room or at the machine.",
        "Outgoing staff verbally walk through key operational events, maintenance obstacles, and pending safety permits.",
        "The incoming technician must actively ask clarifying questions and repeat critical numbers.",
        "Stage 3: Joint Inspection and Formal Sign-off.",
        "Both leads conduct a physical walk-through of active work areas.",
        "Only after verifying that machine guards are intact, safety tags are accounted for, and environmental readings are normal do both supervisors sign the shift handover register."
      ],
      translation: "Khoảng thời gian chuyển giao giữa các ca làm việc là một trong những thời điểm dễ phát sinh rủi ro nhất trong hoạt động nhà máy. Các cuộc điều tra thảm họa công nghiệp trong lịch sử tiết lộ rằng sự đứt gãy thông tin liên lạc khi giao ca thường dẫn đến những sai lầm thảm khốc, chẳng hạn như bật máy khi đang bảo dưỡng hoặc hiểu lầm van xả nhánh khẩn cấp. Để bảo vệ độ tin cậy của nhà máy và an toàn cho người lao động, các tổ chức ban hành Quy trình Bàn giao Ca 3 Giai đoạn nghiêm ngặt.\n\nGiai đoạn 1: Chuẩn bị. Ba mươi phút trước khi kết thúc ca, các kỹ thuật viên ca trước kiểm tra khu vực được phân công, cập nhật sổ nhật ký điện tử và lập bản tóm tắt chính xác về trạng thái thiết bị, các phiếu công việc đang dở dang và các thông số bất thường. Mọi điểm cô lập LOTO đang hiệu lực phải được đối chiếu với vị trí khóa móc thực tế.\n\nGiai đoạn 2: Đối thoại Trực tiếp. Việc bàn giao tuyệt đối không bao giờ được thực hiện qua các cuộc điện thoại vội vã hay tin nhắn chưa xác thực. Đội ngũ ca cũ và ca mới gặp mặt trực tiếp trong phòng điều khiển hoặc tại máy móc. Nhân sự ca trước trình bày trực tiếp các sự kiện vận hành then chốt, các trở ngại bảo trì và các giấy phép an toàn còn hiệu lực. Kỹ thuật viên ca sau phải tích cực đặt câu hỏi làm rõ và nhắc lại các con số quan trọng.\n\nGiai đoạn 3: Kiểm tra Hiện trường Chung và Ký nhận Chính thức. Trưởng nhóm cả hai ca cùng nhau đi kiểm tra thực tế các khu vực làm việc đang hoạt động. Chỉ sau khi xác nhận che chắn máy còn nguyên vẹn, thẻ an toàn được kiểm đếm đầy đủ và các chỉ số môi trường bình thường thì cả hai giám sát ca mới ký vào sổ đăng ký bàn giao ca.",
      vocabulary: [
        { word: "vulnerable windows", ipa: "/ˈvʌl.nər.ə.bəl ˈwɪn.dəʊz/", pos: "noun phrase", vi: "khoảng thời gian dễ bị tổn thương, nhiều rủi ro", context: "represents one of the most vulnerable windows" },
        { word: "communication breakdowns", ipa: "/kəˌmjuː.nɪˈkeɪ.ʃən ˈbreɪk.daʊnz/", pos: "noun phrase", vi: "sự đứt gãy, thất bại trong giao tiếp", context: "communication breakdowns during shift handovers" },
        { word: "face-to-face dialogue", ipa: "/feɪs tu feɪs ˈdaɪ.ə.lɒɡ/", pos: "noun phrase", vi: "đối thoại trực tiếp mặt đối mặt", context: "Handover must never occur through hurried telephone calls" },
        { word: "pending safety permits", ipa: "/ˈpen.dɪŋ ˈseɪf.ti pəˈmɪts/", pos: "noun phrase", vi: "giấy phép an toàn còn hiệu lực / đang chờ", context: "pending safety permits" },
        { word: "joint inspection", ipa: "/dʒɔɪnt ɪnˈspek.ʃən/", pos: "noun phrase", vi: "kiểm tra hiện trường phối hợp chung", context: "conduct a physical walk-through" }
      ],
      questions: [
        {
          id: "q-11-1",
          type: "mcq",
          question: "How should shift handover communication take place according to Stage 2?",
          options: ["Through quick text messages", "Through a brief phone call from the bus", "Face-to-face dialogue directly in the control room or at the machine", "By leaving sticky notes on the screen"],
          answer: 2,
          explanation: "Bài đọc nhấn mạnh: 'Handover must never occur through hurried telephone calls... meet directly in the control room or at the machine'."
        },
        {
          id: "q-11-2",
          type: "detail",
          question: "When does Stage 1 (Preparation) begin?",
          options: ["At the start of the shift", "Thirty minutes prior to shift end", "After going home", "During lunch"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'Thirty minutes prior to shift end, outgoing technicians inspect their designated zones'."
        },
        {
          id: "q-11-3",
          type: "true_false",
          question: "Incoming technicians should passively listen without asking clarifying questions.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc nêu: 'The incoming technician must actively ask clarifying questions and repeat critical numbers'."
        },
        {
          id: "q-11-4",
          type: "sequence",
          question: "What must happen BEFORE both supervisors sign the shift handover register in Stage 3?",
          options: ["A joint physical walk-through to verify machine guards, safety tags, and environmental readings", "Starting all motors at maximum speed", "Clocking out and going to the cafeteria", "Painting the workshop floor"],
          answer: 0,
          explanation: "Giai đoạn 3 yêu cầu kiểm tra hiện trường chung (joint walk-through) trước khi ký nhận."
        },
        {
          id: "q-11-5",
          type: "vocab",
          question: "The word 'mandate' in sentence 3 means:",
          options: ["Suggest as an optional idea", "Officially require or order as compulsory", "Forbid completely", "Forget to do"],
          answer: 1,
          explanation: "'Mandate' có nghĩa là bắt buộc, ban hành quy định chính thức (officially require)."
        },
        {
          id: "q-11-6",
          type: "inference",
          question: "Why does the procedure insist on repeating critical numbers (read-back)?",
          options: ["To practice English pronunciation", "To eliminate misunderstandings of setpoints, pressures, or chemical quantities", "Because the control room is too quiet", "To prolong the meeting"],
          answer: 1,
          explanation: "Nhắc lại các con số (read-back) triệt tiêu sai sót số liệu áp suất, nhiệt độ, ngăn chặn sự cố vận hành."
        },
        {
          id: "q-11-7",
          type: "main_idea",
          question: "What is the primary objective of the Three-Stage Shift Handover Procedure?",
          options: ["To reduce worker wages", "To ensure seamless operational continuity and eliminate safety hazards during shift transitions", "To write longer reports", "To clean the breakroom"],
          answer: 1,
          explanation: "Mục tiêu trọng tâm là đảm bảo sự liên tục trong vận hành và xóa bỏ các mối nguy an toàn trong lúc chuyển giao ca."
        }
      ]
    },

    // 12. SHE, PPE và nhận diện nguy cơ
    {
      id: "read-12",
      topic: "SHE, PPE và nhận diện nguy cơ",
      title_en: "Hierarchy of Controls and Industrial Hazard Identification",
      title_vi: "Hệ thống phân cấp kiểm soát và nhận diện mối nguy công nghiệp",
      level: "B1",
      estimated_time: "11-15 phút",
      word_count: 218,
      week: 40,
      objectives: [
        "Nắm vững 5 cấp bậc trong Tháp Kiểm soát Mối nguy: Elimination, Substitution, Engineering Controls, Administrative Controls, PPE.",
        "Phân biệt giữa 'Mối nguy' (Hazard) và 'Rủi ro' (Risk).",
        "Hiểu vì sao PPE là tuyến phòng thủ cuối cùng (last line of defense)."
      ],
      text: "Safety, Health, and Environmental (SHE) excellence in industrial plants is founded upon proactive hazard identification and the systematic application of the Hierarchy of Controls. A hazard is defined as any biological, chemical, mechanical, or physical condition with the potential to cause harm or damage. In contrast, risk represents the probability and severity that harm will actually occur under specific working conditions.\n\nWhen mitigating identified workplace hazards, safety professionals adhere to the internationally recognized five-tier Hierarchy of Controls:\n\n1. Elimination: Physically remove the hazard completely, such as redesigning a piping layout to eliminate work at heights.\n2. Substitution: Replace a hazardous substance with a safer alternative, like swapping toxic solvent-based degreasers for biodegradable water-based cleaners.\n3. Engineering Controls: Isolate workers from the hazard through physical barriers, such as installing acoustic enclosures around noisy blowers, interlocking machine guards, or local exhaust ventilation hoods.\n4. Administrative Controls: Change the way people work through standard operating procedures, comprehensive safety training, warning signs, and rotational schedules to limit exposure duration.\n5. Personal Protective Equipment (PPE): Equip technicians with respirators, arc-flash suits, face shields, and cut-resistant gloves.\n\nCrucially, safety experts emphasize that PPE represents the lowest and least reliable tier because it does not eliminate the hazard; it merely places a physical barrier between the worker and danger.",
      sentences: [
        "Safety, Health, and Environmental (SHE) excellence in industrial plants is founded upon proactive hazard identification and the systematic application of the Hierarchy of Controls.",
        "A hazard is defined as any biological, chemical, mechanical, or physical condition with the potential to cause harm or damage.",
        "In contrast, risk represents the probability and severity that harm will actually occur under specific working conditions.",
        "When mitigating identified workplace hazards, safety professionals adhere to the internationally recognized five-tier Hierarchy of Controls:",
        "1. Elimination: Physically remove the hazard completely, such as redesigning a piping layout to eliminate work at heights.",
        "2. Substitution: Replace a hazardous substance with a safer alternative, like swapping toxic solvent-based degreasers for biodegradable water-based cleaners.",
        "3. Engineering Controls: Isolate workers from the hazard through physical barriers, such as installing acoustic enclosures around noisy blowers, interlocking machine guards, or local exhaust ventilation hoods.",
        "4. Administrative Controls: Change the way people work through standard operating procedures, comprehensive safety training, warning signs, and rotational schedules to limit exposure duration.",
        "5. Personal Protective Equipment (PPE): Equip technicians with respirators, arc-flash suits, face shields, and cut-resistant gloves.",
        "Crucially, safety experts emphasize that PPE represents the lowest and least reliable tier because it does not eliminate the hazard; it merely places a physical barrier between the worker and danger."
      ],
      translation: "Sự xuất sắc trong công tác An toàn, Sức khỏe và Môi trường (SHE) tại các nhà máy công nghiệp được xây dựng dựa trên việc chủ động nhận diện mối nguy và áp dụng có hệ thống Tháp Kiểm soát Mối nguy. Mối nguy (Hazard) được định nghĩa là bất kỳ điều kiện sinh học, hóa học, cơ học hoặc vật lý nào có tiềm năng gây tổn hại hoặc thiệt hại. Trái lại, Rủi ro (Risk) đại diện cho xác suất và mức độ nghiêm trọng mà tổn hại đó thực tế sẽ xảy ra trong các điều kiện làm việc cụ thể.\n\nKhi giảm thiểu các mối nguy đã nhận diện tại nơi làm việc, các chuyên gia an toàn tuân thủ Tháp Kiểm soát 5 bậc được quốc tế công nhận:\n\n1. Loại bỏ (Elimination): Loại bỏ hoàn toàn mối nguy về mặt vật lý, ví dụ như thiết kế lại tuyến đường ống để triệt tiêu hoàn toàn công việc làm trên cao.\n2. Thay thế (Substitution): Thay thế một chất nguy hại bằng một giải pháp thay thế an toàn hơn, như thay chất tẩy nhờn dung môi độc hại bằng chất tẩy rửa gốc nước phân hủy sinh học.\n3. Biện pháp Kỹ thuật (Engineering Controls): Cách ly công nhân khỏi mối nguy bằng rào cản vật lý, chẳng hạn như lắp vỏ cách âm quanh quạt hút ồn, làm nắp che chắn liên động, hoặc chụp hút thông gió cục bộ.\n4. Biện pháp Hành chính (Administrative Controls): Thay đổi cách thức con người làm việc thông qua quy trình vận hành chuẩn, huấn luyện an toàn, biển cảnh báo và luân chuyển ca để hạn chế thời gian phơi nhiễm.\n5. Trang bị Bảo hộ Cá nhân (PPE): Trang bị cho kỹ thuật viên mặt nạ phòng độc, bộ quần áo chống hồ quang điện, mặt nạ che mặt và găng tay chống cắt.\n\nĐiều cốt yếu là các chuyên gia an toàn nhấn mạnh rằng PPE đại diện cho bậc thấp nhất và kém tin cậy nhất vì nó không loại bỏ mối nguy; nó chỉ đặt một rào cản vật lý giữa người lao động và hiểm nguy.",
      vocabulary: [
        { word: "Hierarchy of Controls", ipa: "/ˈhaɪə.rɑː.ki əv kənˈtrəʊlz/", pos: "noun phrase", vi: "Tháp phân cấp kiểm soát mối nguy", context: "systematic application of the Hierarchy of Controls" },
        { word: "Elimination", ipa: "/ɪˌlɪm.ɪˈneɪ.ʃən/", pos: "noun", vi: "Biện pháp Loại bỏ mối nguy", context: "Physically remove the hazard completely" },
        { word: "Substitution", ipa: "/ˌsʌb.stɪˈtʃuː.ʃən/", pos: "noun", vi: "Biện pháp Thay thế", context: "Replace a hazardous substance with a safer alternative" },
        { word: "Engineering Controls", ipa: "/ˌen.dʒɪˈnɪə.rɪŋ kənˈtrəʊlz/", pos: "noun phrase", vi: "Biện pháp kỹ thuật công nghệ", context: "Isolate workers from the hazard" },
        { word: "least reliable tier", ipa: "/liːst rɪˈlaɪ.ə.bəl tɪər/", pos: "noun phrase", vi: "bậc kiểm soát kém tin cậy nhất", context: "PPE represents the lowest and least reliable tier" }
      ],
      questions: [
        {
          id: "q-12-1",
          type: "mcq",
          question: "Which tier in the Hierarchy of Controls is considered the most effective?",
          options: ["Personal Protective Equipment", "Administrative Controls", "Elimination", "Warning Signs"],
          answer: 2,
          explanation: "Bậc cao nhất và hiệu quả nhất luôn là Loại bỏ (Elimination) - triệt tiêu hoàn toàn mối nguy."
        },
        {
          id: "q-12-2",
          type: "detail",
          question: "What is an example of 'Substitution' given in the passage?",
          options: ["Installing earplugs", "Swapping toxic solvent degreasers for biodegradable water-based cleaners", "Wearing an arc-flash suit", "Writing a warning sign"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'swapping toxic solvent-based degreasers for biodegradable water-based cleaners'."
        },
        {
          id: "q-12-3",
          type: "detail",
          question: "What is the difference between a hazard and a risk?",
          options: ["They mean identical things", "A hazard is the potential source of harm; risk is the probability and severity that harm actually occurs", "Hazards only exist at home, risks exist at work", "Risks are chemical, hazards are mechanical"],
          answer: 1,
          explanation: "Bài đọc định nghĩa: Hazard là điều kiện có tiềm năng gây hại; Risk là xác suất và độ nghiêm trọng tổn hại thực tế."
        },
        {
          id: "q-12-4",
          type: "true_false",
          question: "PPE completely eliminates hazards from the work environment.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc nêu rõ: 'it does not eliminate the hazard; it merely places a physical barrier between the worker and danger'."
        },
        {
          id: "q-12-5",
          type: "vocab",
          question: "The word 'mitigating' in sentence 4 means:",
          options: ["Increasing the danger", "Reducing or lessening the severity of a hazard", "Ignoring the rules", "Buying new tools"],
          answer: 1,
          explanation: "'Mitigate' có nghĩa là giảm nhẹ, làm giảm mức độ nghiêm trọng (reducing or lessening)."
        },
        {
          id: "q-12-6",
          type: "inference",
          question: "Why do safety experts rank PPE as the last line of defense?",
          options: ["Because PPE is expensive", "Because if PPE fails or is worn incorrectly, the worker is immediately exposed to injury", "Because workers dislike wearing PPE", "Because PPE breaks machines"],
          answer: 1,
          explanation: "Nếu PPE hỏng hoặc đeo sai, người thợ sẽ trực tiếp gánh chịu hiểm nguy do mối nguy gốc vẫn còn tồn tại nguyên vẹn."
        },
        {
          id: "q-12-7",
          type: "main_idea",
          question: "What is the primary message of this text?",
          options: ["PPE is the only tool needed for safety", "Safety must prioritize higher-order controls like elimination and engineering over relying solely on PPE", "Contractors should not work in factories", "Chemicals cannot be replaced"],
          answer: 1,
          explanation: "Thông điệp cốt lõi là phải ưu tiên các bậc kiểm soát cấp cao (loại bỏ, kỹ thuật) thay vì chỉ phó mặc cho đồ bảo hộ cá nhân."
        }
      ]
    },

    // 13. Near Miss và bài học an toàn
    {
      id: "read-13",
      topic: "Near Miss và bài học an toàn",
      title_en: "Learning from Near Misses: The Heinrich Safety Triangle",
      title_vi: "Bài học từ sự cố suýt nguy và Tháp An toàn Heinrich",
      level: "B1",
      estimated_time: "11-15 phút",
      word_count: 228,
      week: 44,
      objectives: [
        "Hiểu mô hình Tháp An toàn Heinrich: tỷ lệ 300 suýt nguy - 29 tai nạn nhẹ - 1 tử vong.",
        "Nhận thức tầm quan trọng của văn hóa báo cáo không đổ lỗi (no-blame reporting culture).",
        "Áp dụng phân tích nguyên nhân gốc rễ để phòng ngừa tai nạn tái diễn."
      ],
      text: "In the philosophy of modern industrial loss prevention, proactive companies treat Near Miss incidents not as lucky escapes, but as free educational gifts from the workplace environment. A Near Miss is an unplanned event that did not result in injury, illness, or property damage, but had the distinct potential to do so under slightly altered circumstances. For example, if a heavy steel scaffolding coupler drops from ten meters and embeds itself in the concrete floor three feet from a passing mechanic, no blood was shed; yet, the potential for a fatal head trauma was undeniable.\n\nHerbert Heinrich's renowned safety triangle illustrates the mathematical correlation between minor occurrences and major catastrophes. Heinrich demonstrated that for every 1 major fatality or permanent disability, there are approximately 29 minor recordable injuries, and 300 unsafe near misses and hazardous acts at the foundation. Consequently, addressing the vast foundation of 300 near misses is the only scientifically validated strategy to prevent the single catastrophic fatality at the apex.\n\nTo foster high reporting rates, progressive manufacturers cultivate a transparent, non-punitive reporting culture. If employees fear disciplinary retaliation or embarrassment when reporting close calls, hazards remain concealed until disaster strikes. When near misses are actively logged, analyzed through 5-Why root cause investigations, and celebrated during safety briefings, the entire organization continuously strengthens its defensive safety barriers.",
      sentences: [
        "In the philosophy of modern industrial loss prevention, proactive companies treat Near Miss incidents not as lucky escapes, but as free educational gifts from the workplace environment.",
        "A Near Miss is an unplanned event that did not result in injury, illness, or property damage, but had the distinct potential to do so under slightly altered circumstances.",
        "For example, if a heavy steel scaffolding coupler drops from ten meters and embeds itself in the concrete floor three feet from a passing mechanic, no blood was shed; yet, the potential for a fatal head trauma was undeniable.",
        "Herbert Heinrich's renowned safety triangle illustrates the mathematical correlation between minor occurrences and major catastrophes.",
        "Heinrich demonstrated that for every 1 major fatality or permanent disability, there are approximately 29 minor recordable injuries, and 300 unsafe near misses and hazardous acts at the foundation.",
        "Consequently, addressing the vast foundation of 300 near misses is the only scientifically validated strategy to prevent the single catastrophic fatality at the apex.",
        "To foster high reporting rates, progressive manufacturers cultivate a transparent, non-punitive reporting culture.",
        "If employees fear disciplinary retaliation or embarrassment when reporting close calls, hazards remain concealed until disaster strikes.",
        "When near misses are actively logged, analyzed through 5-Why root cause investigations, and celebrated during safety briefings, the entire organization continuously strengthens its defensive safety barriers."
      ],
      translation: "Trong triết lý phòng ngừa tổn thất công nghiệp hiện đại, các công ty tiến bộ xem các sự cố Suýt Nguy (Near Miss) không phải là sự may mắn thoát nạn, mà là những món quà giáo dục miễn phí từ môi trường làm việc. Sự cố Suýt Nguy là một sự việc ngoài ý muốn không gây ra chấn thương, bệnh tật hay thiệt hại tài sản, nhưng có tiềm năng rất lớn gây ra điều đó trong những hoàn cảnh thay đổi đôi chút. Ví dụ, nếu một chiếc cùm giàn giáo bằng thép nặng rơi từ độ cao 10 mét cắm phập xuống sàn bê tông cách một người thợ máy vừa đi qua chỉ 1 mét, thì dù chưa có giọt máu nào đổ; tiềm năng xảy ra chấn thương sọ não tử vong là không thể chối cãi.\n\nTháp an toàn nổi tiếng của Herbert Heinrich minh họa mối tương quan toán học giữa các sự việc nhỏ và các thảm họa lớn. Heinrich đã chứng minh rằng cứ mỗi 1 vụ tử vong hoặc tàn tật vĩnh viễn nghiêm trọng, thì có khoảng 29 vụ chấn thương nhẹ có ghi nhận, và 300 sự cố suýt nguy cùng các hành vi không an toàn nằm ở phần đáy tháp. Do đó, việc giải quyết triệt để đáy tháp gồm 300 sự cố suýt nguy là chiến lược duy nhất có cơ sở khoa học để ngăn chặn 1 vụ tai nạn thảm khốc tại đỉnh tháp.\n\nĐể thúc đẩy tỷ lệ báo cáo cao, các nhà sản xuất tiến bộ nuôi dưỡng một văn hóa báo cáo minh bạch và không đổ lỗi/trừng phạt (non-punitive). Nếu người lao động lo sợ bị kỷ luật trả đũa hay xấu hổ khi báo cáo các tình huống suýt chết, các mối nguy sẽ bị che giấu cho đến khi thảm họa ập xuống. Khi các sự cố suýt nguy được tích cực ghi nhận, phân tích qua phương pháp 5 Tại sao và được biểu dương trong các buổi họp an toàn, toàn bộ tổ chức sẽ liên tục củng cố các rào chắn phòng thủ an toàn của mình.",
      vocabulary: [
        { word: "loss prevention", ipa: "/lɒs prɪˈven.ʃən/", pos: "noun phrase", vi: "phòng ngừa tổn thất", context: "modern industrial loss prevention" },
        { word: "fatal head trauma", ipa: "/ˈfeɪ.təl hed ˈtrɔː.mə/", pos: "noun phrase", vi: "chấn thương sọ não gây tử vong", context: "potential for a fatal head trauma" },
        { word: "Heinrich safety triangle", ipa: "/ˈhaɪn.rɪk ˈseɪf.ti ˈtraɪ.æŋ.ɡəl/", pos: "noun phrase", vi: "Tháp An toàn Heinrich (300-29-1)", context: "Heinrich's renowned safety triangle" },
        { word: "non-punitive culture", ipa: "/nɒn ˈpjuː.nɪ.tɪv ˈkʌl.tʃər/", pos: "noun phrase", vi: "văn hóa không đổ lỗi / không trừng phạt", context: "cultivate a transparent, non-punitive reporting culture" },
        { word: "disciplinary retaliation", ipa: "/ˈdɪs.ə.plɪn.ər.i rɪˌtæl.iˈeɪ.ʃən/", pos: "noun phrase", vi: "sự trừng phạt hoặc trả đũa kỷ luật", context: "fear disciplinary retaliation or embarrassment" }
      ],
      questions: [
        {
          id: "q-13-1",
          type: "mcq",
          question: "According to Heinrich's safety triangle, how many near misses/unsafe acts correspond to 1 major fatality?",
          options: ["10", "29", "100", "300"],
          answer: 3,
          explanation: "Mô hình Heinrich nêu rõ: tỷ lệ là 300 sự cố suýt nguy và hành vi không an toàn ứng với 1 ca tử vong."
        },
        {
          id: "q-13-2",
          type: "detail",
          question: "What is a Near Miss defined as in the passage?",
          options: ["A minor injury that needs first aid", "An unplanned event with no injury or damage, but with distinct potential to cause harm", "A broken tool that cannot be fixed", "A fire drill"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'unplanned event that did not result in injury... but had the distinct potential to do so'."
        },
        {
          id: "q-13-3",
          type: "true_false",
          question: "Companies should punish workers who report near misses to discourage future errors.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc nêu công ty phải xây dựng văn hóa không trừng phạt (non-punitive culture) để khuyến khích báo cáo."
        },
        {
          id: "q-13-4",
          type: "vocab",
          question: "The word 'non-punitive' in sentence 7 means:",
          options: ["Very strict and punishing", "Free from punishment or discipline for reporting mistakes", "Requiring exams", "Very expensive"],
          answer: 1,
          explanation: "'Non-punitive' có nghĩa là không trừng phạt, tạo tâm lý an toàn để chia sẻ sự cố."
        },
        {
          id: "q-13-5",
          type: "inference",
          question: "What happens if a company culture penalizes workers for reporting close calls?",
          options: ["Safety improves automatically", "Workers conceal hazards until a catastrophic accident occurs", "Equipment lasts longer", "Workers earn bonuses"],
          answer: 1,
          explanation: "Nếu bị phạt, công nhân sẽ giấu nhẹm mối nguy cho đến khi thảm họa thực sự bùng phát."
        },
        {
          id: "q-13-6",
          type: "detail",
          question: "What scaffolding component is mentioned in the paragraph 1 example?",
          options: ["A wooden plank", "A heavy steel coupler dropping from ten meters", "A safety net", "A paint roller"],
          answer: 1,
          explanation: "Bài đọc nêu: 'a heavy steel scaffolding coupler drops from ten meters'."
        },
        {
          id: "q-13-7",
          type: "main_idea",
          question: "What is the primary conclusion of Heinrich's triangle for safety management?",
          options: ["Fatalities are inevitable bad luck", "Eliminating minor near misses at the base prevents major disasters at the top", "Only major injuries matter", "Scaffolds are illegal"],
          answer: 1,
          explanation: "Xử lý triệt để các sự cố suýt nguy ở đáy tháp là cách duy nhất chặn đứng tai nạn thảm khốc tại đỉnh tháp."
        }
      ]
    },

    // 14. Hướng dẫn sử dụng thiết bị
    {
      id: "read-14",
      topic: "Hướng dẫn sử dụng thiết bị",
      title_en: "Operating Manual and Bolting Standards for Industrial Flanges",
      title_vi: "Sổ tay hướng dẫn vận hành và tiêu chuẩn siết bu-lông mặt bích",
      level: "B1+",
      estimated_time: "12-16 phút",
      word_count: 242,
      week: 48,
      objectives: [
        "Đọc hiểu hướng dẫn kỹ thuật của nhà sản xuất (OEM Manual).",
        "Nắm vững kỹ thuật siết bu-lông 4 giai đoạn (cross-pattern bolting stages: 30%, 60%, 100%, pass).",
        "Hiểu các thông số cơ khí: flange rating, gasket compression, yield strength."
      ],
      text: "Industrial pipeline integrity depends critically on proper flange assembly and precise bolt torque management. Leaking process flanges in chemical processing and power generation plants not only create severe environmental and fire hazards, but also account for millions of dollars in unscheduled downtime. To ensure leak-free joint integrity under extreme cyclic thermal and pressure conditions, maintenance technicians must strictly adhere to ASME PCC-1 bolting guidelines.\n\nPrior to assembly, both mating flange faces must be thoroughly inspected for radial scratches or gouges. Any scratch running across the serrated gasket seating face exceeding 0.25 mm in depth will provide an escape pathway for pressurized media and requires in-situ flange facing machining. Spiral-wound gaskets with internal centering rings must be centered accurately; old gaskets must never be reused under any circumstances due to permanent loss of elastomer recovery elasticity.\n\nBolts and nuts must be lubricated on threads and nut contact surfaces with nickel-based anti-seize paste with a certified friction coefficient (k-factor = 0.13). Tightening must proceed systematically in a four-pass cross-star pattern:\n- Pass 1: Tighten all studs crosswise to 30% of target torque.\n- Pass 2: Tighten crosswise to 60% of target torque.\n- Pass 3: Tighten crosswise to 100% of target torque.\n- Pass 4 (Rotational Pass): Complete one final continuous clockwise pass at 100% torque around all studs until no further rotation occurs.\n\nThis staged sequence ensures uniform gasket compression, preventing uneven gasket crushing and localized flange tilting.",
      sentences: [
        "Industrial pipeline integrity depends critically on proper flange assembly and precise bolt torque management.",
        "Leaking process flanges in chemical processing and power generation plants not only create severe environmental and fire hazards, but also account for millions of dollars in unscheduled downtime.",
        "To ensure leak-free joint integrity under extreme cyclic thermal and pressure conditions, maintenance technicians must strictly adhere to ASME PCC-1 bolting guidelines.",
        "Prior to assembly, both mating flange faces must be thoroughly inspected for radial scratches or gouges.",
        "Any scratch running across the serrated gasket seating face exceeding 0.25 mm in depth will provide an escape pathway for pressurized media and requires in-situ flange facing machining.",
        "Spiral-wound gaskets with internal centering rings must be centered accurately; old gaskets must never be reused under any circumstances due to permanent loss of elastomer recovery elasticity.",
        "Bolts and nuts must be lubricated on threads and nut contact surfaces with nickel-based anti-seize paste with a certified friction coefficient (k-factor = 0.13).",
        "Tightening must proceed systematically in a four-pass cross-star pattern:",
        "- Pass 1: Tighten all studs crosswise to 30% of target torque.",
        "- Pass 2: Tighten crosswise to 60% of target torque.",
        "- Pass 3: Tighten crosswise to 100% of target torque.",
        "- Pass 4 (Rotational Pass): Complete one final continuous clockwise pass at 100% torque around all studs until no further rotation occurs.",
        "This staged sequence ensures uniform gasket compression, preventing uneven gasket crushing and localized flange tilting."
      ],
      translation: "Độ toàn vẹn của đường ống công nghiệp phụ thuộc mang tính sống còn vào việc lắp ráp mặt bích đúng kỹ thuật và kiểm soát chính xác lực siết bu-lông. Rò rỉ mặt bích trong các nhà máy hóa chất và nhà máy điện không chỉ tạo ra các hiểm họa nghiêm trọng về môi trường và hỏa hoạn, mà còn gây ra hàng triệu đô la tổn thất do dừng máy đột xuất. Để đảm bảo mối nối không rò rỉ trong điều kiện nhiệt độ và áp suất tuần hoàn khắc nghiệt, kỹ thuật viên bảo trì phải tuân thủ nghiêm ngặt hướng dẫn siết bu-lông ASME PCC-1.\n\nTrước khi lắp ráp, cả hai bề mặt tiếp xúc của mặt bích phải được kiểm tra kỹ lưỡng để tìm các vết xước hoặc rãnh xuyên tâm. Bất kỳ vết xước nào chạy ngang qua bề mặt gân tạo rãnh đặt gioăng sâu quá 0.25 mm sẽ tạo thành một con đường rò rỉ cho môi chất chịu áp và đòi hỏi phải vát phẳng lại mặt bích tại chỗ bằng máy gia công chuyên dụng. Gioăng kim loại xoắn ốc (spiral-wound) có vòng định tâm bên trong phải được đặt đồng tâm chính xác; gioăng cũ tuyệt đối không bao giờ được tái sử dụng trong bất kỳ trường hợp nào do đã mất hoàn toàn độ đàn hồi hồi phục.\n\nBu-lông và đai ốc phải được bôi trơn trên ren và bề mặt tiếp xúc của đai ốc bằng mỡ chống kẹt gốc niken với hệ số ma sát được chứng nhận (hệ số k = 0.13). Việc siết lực phải tiến hành có hệ thống theo mô hình hình sao chéo 4 lượt:\n- Lượt 1: Siết chéo toàn bộ bu-lông đến 30% lực mục tiêu.\n- Lượt 2: Siết chéo đến 60% lực mục tiêu.\n- Lượt 3: Siết chéo đến 100% lực mục tiêu.\n- Lượt 4 (Lượt xoay tròn): Hoàn thành một lượt siết liên tục theo chiều kim đồng hồ ở 100% lực quanh toàn bộ các bu-lông cho đến khi không còn chuyển động xoay nào nữa.\n\nQuy trình phân giai đoạn này đảm bảo độ nén gioăng đồng đều, ngăn chặn hiện tượng dập nát gioăng cục bộ và cong vênh mặt bích.",
      vocabulary: [
        { word: "flange integrity", ipa: "/flændʒ ɪnˈteɡ.rə.ti/", pos: "noun phrase", vi: "độ toàn vẹn, kín khít của mặt bích", context: "pipeline integrity depends on flange assembly" },
        { word: "ASME PCC-1 guidelines", ipa: "/ˈɡaɪd.laɪnz/", pos: "noun phrase", vi: "tiêu chuẩn siết bu-lông ASME PCC-1", context: "adhere to ASME PCC-1 bolting guidelines" },
        { word: "serrated seating face", ipa: "/səˈreɪ.tɪd ˈsiː.tɪŋ feɪs/", pos: "noun phrase", vi: "bề mặt răng cưa gân đặt gioăng", context: "scratch across the serrated gasket seating face" },
        { word: "spiral-wound gasket", ipa: "/ˈspaɪə.rəl waʊnd ˈɡæs.kɪt/", pos: "noun phrase", vi: "gioăng kim loại cuộn xoắn ốc", context: "Spiral-wound gaskets with internal centering rings" },
        { word: "anti-seize paste", ipa: "/ˈæn.ti siːz peɪst/", pos: "noun phrase", vi: "mỡ bò chống kẹt ren chịu nhiệt", context: "nickel-based anti-seize paste" }
      ],
      questions: [
        {
          id: "q-14-1",
          type: "mcq",
          question: "What standard guidelines for flange bolting are referenced in the text?",
          options: ["ISO 9001", "ASME PCC-1", "API 610", "NFPA 70"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'strictly adhere to ASME PCC-1 bolting guidelines'."
        },
        {
          id: "q-14-2",
          type: "detail",
          question: "Why must old spiral-wound gaskets NEVER be reused?",
          options: ["Because they look dirty", "Due to permanent loss of elastomer recovery elasticity", "Because they are too thick", "Because the manufacturer forbids it for profit"],
          answer: 1,
          explanation: "Bài đọc nêu: 'due to permanent loss of elastomer recovery elasticity' (mất hoàn toàn độ đàn hồi hồi phục)."
        },
        {
          id: "q-14-3",
          type: "sequence",
          question: "In the 4-pass cross-star pattern, what percentage of target torque is applied in Pass 2?",
          options: ["30%", "60%", "100%", "120%"],
          answer: 1,
          explanation: "Bài đọc nêu: '- Pass 2: Tighten crosswise to 60% of target torque'."
        },
        {
          id: "q-14-4",
          type: "true_false",
          question: "Radial scratches deeper than 0.25 mm across the flange seating face require re-machining.",
          options: ["True", "False", "Not Given"],
          answer: 0,
          explanation: "Đúng (True). Bài đọc nêu vết xước sâu trên 0.25 mm cần gia công phay phẳng lại tại chỗ (requires in-situ flange facing machining)."
        },
        {
          id: "q-14-5",
          type: "vocab",
          question: "What is the purpose of applying 'anti-seize paste' with a certified k-factor?",
          options: ["To glue the nuts permanently", "To ensure a predictable friction coefficient and prevent thread galling", "To make bolts shiny", "To cool the pipe"],
          answer: 1,
          explanation: "Mỡ chống kẹt ren đảm bảo hệ số ma sát chuẩn xác (k-factor = 0.13) để chuyển đổi lực xoay thành lực ép dọc trục đồng đều, chống cháy ren."
        },
        {
          id: "q-14-6",
          type: "inference",
          question: "What is the mechanical danger of tightening bolts in a simple clockwise circle from 0 to 100% immediately?",
          options: ["The wrench breaks", "It tilts the flange, crushes one side of the gasket, and creates high leak risks on the opposite side", "The pipe turns blue", "Bolts become too cold"],
          answer: 1,
          explanation: "Siết vòng tròn một phát lên 100% sẽ làm vênh mặt bích, dập nát một nửa gioăng và để lại khe hở xì hở phía đối diện."
        },
        {
          id: "q-14-7",
          type: "detail",
          question: "What is the purpose of Pass 4 (Rotational Pass)?",
          options: ["To loosen all bolts slightly", "To complete one final clockwise pass at 100% torque until no stud rotates further", "To test the pressure gauge", "To paint the nuts"],
          answer: 1,
          explanation: "Lượt 4 là lượt đi vòng tròn theo chiều kim đồng hồ ở 100% lực để triệt tiêu độ chùng đàn hồi còn sót lại."
        }
      ]
    },

    // 15. Báo cáo công việc và trao đổi với quản lý
    {
      id: "read-15",
      topic: "Báo cáo công việc và trao đổi với quản lý",
      title_en: "Formal Incident Investigation and Management Briefing Report",
      title_vi: "Báo cáo điều tra sự cố chính thức và giải trình quản lý",
      level: "B1+",
      estimated_time: "12-16 phút",
      word_count: 265,
      week: 52,
      objectives: [
        "Đọc hiểu cấu trúc báo cáo sự cố chuyên nghiệp cấp quản lý (Incident Briefing Report).",
        "Nắm vững các đề mục kỹ thuật: Executive Summary, Root Cause Analysis, Corrective & Preventive Actions (CAPA).",
        "Hiểu ngôn ngữ báo cáo tài chính và thời gian dừng máy (downtime loss)."
      ],
      text: "INCIDENT BRIEFING AND ROOT CAUSE INVESTIGATION REPORT\nTO: Plant General Manager & Executive Technical Committee\nFROM: Senior Reliability Engineer & Lead Mechanical Technician\nDATE: October 24, 2026\nSUBJECT: Catastrophic Main Turbine Lube Oil Cooler Failure on Line 1\n\n1. Executive Summary\nOn October 21 at 04:15 during Shift 3, the Line 1 power turbine tripped automatically on low lube oil header pressure (1.2 bar vs. 2.5 bar normal). Rapid investigation identified a rupture in the shell-and-tube oil cooler heat exchanger tube bundle, causing cross-contamination of 800 liters of turbine oil into the cooling water circuit. Immediate operator response and automated interlocks prevented catastrophic bearing seizure. Total unplanned production downtime was 14.5 hours, representing an estimated financial impact of $72,000.\n\n2. Root Cause Analysis (RCA)\nMetallurgical laboratory examination of the ruptured copper-nickel tube revealed high-cycle fatigue cracking initiated by flow-induced vibration. The secondary root cause was missing baffle plate support dampeners, which were mistakenly omitted during the previous turnaround contractor overhaul eighteen months prior. Without dampening, resonant turbulence under 110% cooling water flow rates caused harmonic flexing, resulting in circumferential tube wall fatigue fracture.\n\n3. Corrective and Preventive Actions (CAPA)\n- Action 1: Replaced entire copper-nickel tube bundle with corrosion-resistant titanium grade tubing with reinforced baffle support clips (Completed Oct 21, 18:30).\n- Action 2: Installed continuous differential pressure transmitters linked to DCS alarms for early leak detection (Completed Oct 22).\n- Action 3: Revised contractor quality assurance audit checklist: all heat exchanger overhauls now require mandatory third-party eddy current non-destructive testing (NDT) prior to final closure.\n\nRespectfully submitted for executive review and CAPA budget ratification.",
      sentences: [
        "On October 21 at 04:15 during Shift 3, the Line 1 power turbine tripped automatically on low lube oil header pressure (1.2 bar vs. 2.5 bar normal).",
        "Rapid investigation identified a rupture in the shell-and-tube oil cooler heat exchanger tube bundle, causing cross-contamination of 800 liters of turbine oil into the cooling water circuit.",
        "Immediate operator response and automated interlocks prevented catastrophic bearing seizure.",
        "Total unplanned production downtime was 14.5 hours, representing an estimated financial impact of $72,000.",
        "Metallurgical laboratory examination of the ruptured copper-nickel tube revealed high-cycle fatigue cracking initiated by flow-induced vibration.",
        "The secondary root cause was missing baffle plate support dampeners, which were mistakenly omitted during the previous turnaround contractor overhaul eighteen months prior.",
        "Without dampening, resonant turbulence under 110% cooling water flow rates caused harmonic flexing, resulting in circumferential tube wall fatigue fracture.",
        "Action 1: Replaced entire copper-nickel tube bundle with corrosion-resistant titanium grade tubing with reinforced baffle support clips.",
        "Action 2: Installed continuous differential pressure transmitters linked to DCS alarms for early leak detection.",
        "Action 3: Revised contractor quality assurance audit checklist: all heat exchanger overhauls now require mandatory third-party eddy current non-destructive testing (NDT) prior to final closure.",
        "Respectfully submitted for executive review and CAPA budget ratification."
      ],
      translation: "BÁO CÁO ĐIỀU TRA NGUYÊN NHÂN GỐC RỄ VÀ TÓM TẮT SỰ CỐ\nTỚI: Tổng Giám đốc Nhà máy & Hội đồng Kỹ thuật Điều hành\nTỪ: Kỹ sư Độ tin cậy Cấp cao & Trưởng nhóm Cơ khí\nNGÀY: 24/10/2026\nTIÊU ĐỀ: Sự cố vỡ bình làm mát dầu bôi trơn Tuabin chính Dây chuyền 1\n\n1. Tóm tắt Điều hành\nVào ngày 21/10 lúc 04h15 trong Ca 3, tuabin phát điện Dây chuyền 1 đã tự động ngắt do áp suất ống góp dầu bôi trơn thấp (1.2 bar so với mức bình thường 2.5 bar). Cuộc điều tra nhanh đã xác định một vết bục rách trong chùm ống trao đổi nhiệt dạng ống chùm, gây nhiễm bẩn chéo 800 lít dầu tuabin vào hệ thống nước làm mát. Phản ứng tức thời của người vận hành và các khóa liên động tự động đã ngăn chặn thảm họa bó kẹt gối đỡ bạc. Tổng thời gian dừng sản xuất đột xuất là 14.5 giờ, tương đương với tổn thất tài chính ước tính 72.000 USD.\n\n2. Phân tích Nguyên nhân Gốc rễ (RCA)\nKiểm tra của phòng thí nghiệm luyện kim đối với ống đồng-niken bị vỡ cho thấy vết nứt do mỏi chu kỳ cao bắt nguồn từ rung động do dòng chảy chất lỏng gây ra. Nguyên nhân gốc thứ cấp là thiếu các tấm đệm giảm chấn tấm ngăn (baffle plate), vốn đã bị nhà thầu bỏ sót nhầm lẫn trong đợt đại tu 18 tháng trước đó. Thiếu giảm chấn, dòng xoáy cộng hưởng dưới lưu lượng nước làm mát 110% đã gây ra hiện tượng uốn dao động điều hòa, dẫn đến gãy mỏi chu vi thành ống.\n\n3. Biện pháp Khắc phục và Phòng ngừa (CAPA)\n- Biện pháp 1: Thay thế toàn bộ chùm ống đồng-niken bằng ống hợp kim titan chống ăn mòn với kẹp đỡ tấm ngăn gia cường (Hoàn thành 21/10, 18h30).\n- Biện pháp 2: Lắp đặt cảm biến chênh áp liên tục kết nối với còi báo động DCS để phát hiện rò rỉ sớm (Hoàn thành 22/10).\n- Biện pháp 3: Sửa đổi checklist kiểm toán chất lượng nhà thầu: tất cả các đợt đại tu thiết bị trao đổi nhiệt hiện bắt buộc phải có kiểm tra không phá hủy dòng xoáy (NDT) bởi bên thứ ba trước khi đóng nắp máy.\n\nKính trình ban điều hành xem xét và phê chuẩn ngân sách CAPA.",
      vocabulary: [
        { word: "Executive Summary", ipa: "/ɪɡˈzek.jə.tɪv ˈsʌm.ər.i/", pos: "noun phrase", vi: "Tóm tắt điều hành (dành cho lãnh đạo)", context: "Executive Summary" },
        { word: "shell-and-tube heat exchanger", ipa: "/ʃel ənd tjuːb hiːt ɪksˈtʃeɪn.dʒər/", pos: "noun phrase", vi: "bộ trao đổi nhiệt dạng ống chùm", context: "rupture in the shell-and-tube oil cooler" },
        { word: "flow-induced vibration", ipa: "/fləʊ ɪnˈdjuːst vaɪˈbreɪ.ʃən/", pos: "noun phrase", vi: "rung động cảm ứng do dòng chảy", context: "high-cycle fatigue cracking initiated by flow-induced vibration" },
        { word: "baffle plate", ipa: "/ˈbæf.əl pleɪt/", pos: "noun phrase", vi: "tấm ngăn định hướng dòng chảy / đỡ ống", context: "missing baffle plate support dampeners" },
        { word: "CAPA (Corrective and Preventive Actions)", ipa: "/ˈkæp.ə/", pos: "acronym", vi: "Hành động Khắc phục và Phòng ngừa", context: "CAPA budget ratification" }
      ],
      questions: [
        {
          id: "q-15-1",
          type: "mcq",
          question: "Why did the Line 1 power turbine trip automatically at 04:15?",
          options: ["High vibration on generator", "Low lube oil header pressure (1.2 bar vs. 2.5 bar normal)", "Fire in control room", "High temperature in cafeteria"],
          answer: 1,
          explanation: "Bài đọc nêu rõ: 'tripped automatically on low lube oil header pressure (1.2 bar vs. 2.5 bar normal)'."
        },
        {
          id: "q-15-2",
          type: "detail",
          question: "What was the estimated financial impact of the 14.5-hour unplanned downtime?",
          options: ["$10,000", "$25,000", "$72,000", "$1,000,000"],
          answer: 2,
          explanation: "Bài đọc nêu: 'representing an estimated financial impact of $72,000'."
        },
        {
          id: "q-15-3",
          type: "detail",
          question: "What metallurgical root cause initiated the tube fracture?",
          options: ["Acid corrosion", "High-cycle fatigue cracking initiated by flow-induced vibration", "Excessive electrical voltage", "Human operator error"],
          answer: 1,
          explanation: "Bài đọc nêu: 'high-cycle fatigue cracking initiated by flow-induced vibration'."
        },
        {
          id: "q-15-4",
          type: "true_false",
          question: "The contractor had installed all baffle plate dampeners correctly 18 months ago.",
          options: ["True", "False", "Not Given"],
          answer: 1,
          explanation: "Sai (False). Bài đọc nêu: 'missing baffle plate support dampeners, which were mistakenly omitted during the previous turnaround'."
        },
        {
          id: "q-15-5",
          type: "vocab",
          question: "The acronym 'CAPA' in section 3 stands for:",
          options: ["Computer Aided Plant Analysis", "Corrective and Preventive Actions", "Capital Asset Pricing Agreement", "Cooling Air Pressure Assessment"],
          answer: 1,
          explanation: "'CAPA' là thuật ngữ quản lý chất lượng quốc tế: Corrective and Preventive Actions (Hành động Khắc phục và Phòng ngừa)."
        },
        {
          id: "q-15-6",
          type: "sequence",
          question: "What material was used to replace the damaged copper-nickel tube bundle in Action 1?",
          options: ["Plastic PVC tubing", "Corrosion-resistant titanium grade tubing with reinforced baffle support clips", "Cast iron pipes", "Aluminum foil"],
          answer: 1,
          explanation: "Bài đọc nêu trong Action 1: 'titanium grade tubing with reinforced baffle support clips'."
        },
        {
          id: "q-15-7",
          type: "inference",
          question: "Why was third-party eddy current NDT testing made mandatory in Action 3?",
          options: ["To satisfy the insurance company only", "To independently detect wall thinning, cracks, or missing supports before closing heat exchangers, preventing contractor omissions", "To increase repair costs", "Because eddy current cools the metal"],
          answer: 1,
          explanation: "Kiểm tra NDT dòng xoáy độc lập của bên thứ ba giúp phát hiện nứt mỏi và sai sót lắp ráp trước khi đóng nắp máy, ngăn chặn tái diễn lỗi bỏ sót của nhà thầu."
        },
        {
          id: "q-15-8",
          type: "main_idea",
          question: "What is the primary role of this technical investigation report?",
          options: ["To fire the operators on Shift 3", "To objectively present the incident, demonstrate technical root cause analysis, and secure budget for systemic CAPA prevention", "To advertise titanium tubes", "To cancel the turbine"],
          answer: 1,
          explanation: "Báo cáo trình bày sự việc khách quan, phân tích nguyên nhân gốc rễ bằng khoa học luyện kim và đề xuất các hành động CAPA triệt để để bảo vệ an toàn nhà máy."
        }
      ]
    }
  ];
};
