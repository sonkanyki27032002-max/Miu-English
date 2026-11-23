// Builder for 30 Realistic Multi-Turn Industrial & Workplace Role-play Scenarios
// 10 Groups x 3 Scenarios = 30 Scenarios, each with 4-10 turns, branching, and review summaries.

module.exports = function buildRoleplays() {
  const scenarios = [];

  // -------------------------------------------------------------
  // GROUP 1: CHÀO HỎI VÀ LÀM QUEN (sc-01, sc-02, sc-03)
  // -------------------------------------------------------------
  scenarios.push({
    id: "sc-01",
    title: "Tình huống 1: Ngày đầu tiên nhận việc tại Phân xưởng Bảo trì",
    group: "Chào hỏi và làm quen",
    category: "general",
    week: 1,
    description: "Bạn là nhân viên mới gia nhập đội cơ khí. Hãy chào hỏi quản lý xưởng, giới thiệu tên, vị trí và thể hiện thái độ sẵn sàng học hỏi.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Mr. Thomas (Plant Maintenance Manager)",
        text: "Good morning! Welcome to the central maintenance workshop. You must be our new mechanical technician.",
        text_vi: "Chào buổi sáng! Chào mừng bạn đến với phân xưởng bảo trì trung tâm. Bạn hẳn là kỹ thuật viên cơ khí mới của chúng tôi.",
        options: [
          {
            text: "Good morning Mr. Thomas. Yes, my name is Alex Tran. I am very excited to join the team.",
            text_vi: "Chào buổi sáng ông Thomas. Vâng, tên tôi là Alex Tran. Tôi rất hào hứng được gia nhập đội ngũ.",
            feedback: "CHUẨN MỰC! Chào kèm tên quản lý lịch sự và giới thiệu tên đầy đủ.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Yeah, I am here for work.",
            text_vi: "Ừ, tôi tới đây làm việc.",
            feedback: "Quá cộc lốc! Ngày đầu tiên nên chào hỏi lịch sự và nêu rõ tên họ.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Mr. Thomas (Plant Maintenance Manager)",
        text: "Great to meet you, Alex. Did human resources issue your safety gear and workshop badge yet?",
        text_vi: "Rất vui được gặp bạn, Alex. Phòng nhân sự đã cấp đồ bảo hộ và thẻ xưởng cho bạn chưa?",
        options: [
          {
            text: "Yes, sir. I have my hard hat, safety glasses, steel-toe boots, and employee badge right here.",
            text_vi: "Dạ rồi thưa ông. Tôi có mũ cứng, kính an toàn, giày mũi thép và thẻ nhân viên ở đây rồi ạ.",
            feedback: "XUẤT SẮC! Liệt kê đầy đủ các trang bị PPE cốt lõi.",
            is_safe: true,
            next_node: "step_3"
          },
          {
            text: "I have some boots, but I forgot the glasses in the car.",
            text_vi: "Tôi có giày rồi, nhưng quên kính trong xe.",
            feedback: "Nguy hiểm! Quên PPE không được phép vào xưởng.",
            is_safe: false,
            next_node: "step_2"
          }
        ]
      },
      step_3: {
        speaker: "Mr. Thomas (Plant Maintenance Manager)",
        text: "Excellent. Minh will be your senior mentor for the first month. He is over at Workbench 3. Are you ready for the safety induction tour?",
        text_vi: "Tuyệt vời. Minh sẽ là người hướng dẫn trực tiếp cho bạn trong tháng đầu. Cậu ấy đang ở Bàn 3. Bạn đã sẵn sàng cho chuyến đi thị sát an toàn chưa?",
        options: [
          {
            text: "Yes, absolutely! I am ready to meet Minh and complete the safety induction.",
            text_vi: "Vâng, chắc chắn rồi ạ! Tôi sẵn sàng gặp anh Minh và hoàn thành chuyến thị sát an toàn.",
            feedback: "TUYỆT VỜI! Thể hiện sự nhiệt huyết và tôn trọng quy trình an toàn.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Mr. Thomas (Plant Maintenance Manager)",
        text: "Welcome aboard Alex. Remember our golden rule: safety always comes first, speed comes second.",
        text_vi: "Chào mừng bạn gia nhập Alex. Hãy nhớ nguyên tắc vàng: an toàn luôn là số một, tốc độ là số hai.",
        is_terminal: true,
        summary: {
          result: "Hoàn thành xuất sắc ngày đầu làm việc với ấn tượng chuyên nghiệp.",
          common_mistakes: "Dùng từ cộc lốc (Yeah), quên liệt kê PPE.",
          focus_vocab: ["mechanical technician", "safety gear", "employee badge", "safety induction"],
          natural_phrasing: "Yes, sir. I am very excited to join the team."
        }
      }
    }
  });

  scenarios.push({
    id: "sc-02",
    title: "Tình huống 2: Làm quen và chào hỏi đồng nghiệp người nước ngoài",
    group: "Chào hỏi và làm quen",
    category: "general",
    week: 2,
    description: "Bạn gặp John, chuyên gia kỹ thuật người Anh vừa sang hỗ trợ phân xưởng. Hãy chào hỏi và giới thiệu ngắn về vị trí làm việc của bạn.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "John (Field Service Specialist)",
        text: "Hi there! I am John from the UK engineering support team. Nice to meet you.",
        text_vi: "Chào bạn! Tôi là John đến từ đội hỗ trợ kỹ thuật Vương quốc Anh. Rất vui được gặp bạn.",
        options: [
          {
            text: "Hi John! Nice to meet you too. My name is Alex, maintenance technician for Line 1.",
            text_vi: "Chào John! Rất vui được gặp bạn. Tôi tên là Alex, kỹ thuật viên bảo trì của Dây chuyền 1.",
            feedback: "CHUẨN XÁC! Chào lại thân thiện kèm chức danh và dây chuyền phụ trách.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "I am worker. You fix machine?",
            text_vi: "Tôi là công nhân. Bạn sửa máy hả?",
            feedback: "Ngữ pháp còn hạn chế. Nên dùng 'My name is... I am a maintenance technician'.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "John (Field Service Specialist)",
        text: "Great to meet you Alex. How long have you been working with these German packaging machines?",
        text_vi: "Rất vui được gặp bạn Alex. Bạn đã làm việc với những máy đóng gói của Đức này được bao lâu rồi?",
        options: [
          {
            text: "I have worked on this packaging line for about two years. If you need any workshop tools, please let me know.",
            text_vi: "Tôi đã làm việc ở dây chuyền đóng gói này khoảng 2 năm. Nếu bạn cần dụng cụ xưởng gì, cứ bảo tôi nhé.",
            feedback: "TUYỆT VỜI! Chia sẻ kinh nghiệm và chủ động đề nghị hỗ trợ đồng nghiệp quốc tế.",
            is_safe: true,
            next_node: "step_3"
          }
        ]
      },
      step_3: {
        speaker: "John (Field Service Specialist)",
        text: "That is fantastic, Alex. I will definitely need a torque wrench and a multimeter later. Thanks for the warm welcome!",
        text_vi: "Thật tuyệt vời Alex. Lát nữa tôi chắc chắn sẽ cần cờ lê lực và đồng hồ vạn năng. Cảm ơn vì sự đón tiếp nồng hậu!",
        options: [
          {
            text: "You are welcome John. Have a great working day!",
            text_vi: "Không có chi John. Chúc bạn một ngày làm việc hiệu quả!",
            feedback: "HOÀN HẢO! Kết thúc hội thoại tự nhiên, hòa đồng.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "John (Field Service Specialist)",
        text: "Cheers mate! See you at the coffee break.",
        text_vi: "Cảm ơn bạn nhé! Hẹn gặp bạn vào giờ giải lao cà phê.",
        is_terminal: true,
        summary: {
          result: "Tạo mối quan hệ đồng nghiệp cởi mở, tự tin với chuyên gia quốc tế.",
          common_mistakes: "Thiếu mạo từ a/an khi nói nghề nghiệp; ngại giao tiếp.",
          focus_vocab: ["engineering support", "packaging machines", "torque wrench", "warm welcome"],
          natural_phrasing: "If you need any workshop tools, please let me know."
        }
      }
    }
  });

  scenarios.push({
    id: "sc-03",
    title: "Tình huống 3: Đón tiếp và kiểm tra an toàn khách tham quan nhà máy",
    group: "Chào hỏi và làm quen",
    category: "general",
    week: 3,
    description: "Một đoàn kiểm toán an toàn quốc tế đến cổng xưởng. Bạn có nhiệm vụ chào hỏi, kiểm tra thẻ ra vào và phát trang bị bảo hộ.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Ms. Sarah (Safety Auditor)",
        text: "Good morning. We are here from corporate headquarters for the annual environmental and safety audit.",
        text_vi: "Chào buổi sáng. Chúng tôi đến từ trụ sở tập đoàn để thực hiện đợt đánh giá an toàn và môi trường hàng năm.",
        options: [
          {
            text: "Good morning Ms. Sarah and welcome to Plant 2. May I see your visitor badges and company IDs, please?",
            text_vi: "Chào buổi sáng cô Sarah và chào mừng đến với Nhà máy 2. Tôi có thể xem thẻ khách và thẻ công ty của quý vị được không ạ?",
            feedback: "CHUẨN MỰC! Lịch sự chào đón và thực hiện đúng thủ tục an ninh.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Go inside, room 2.",
            text_vi: "Vào trong đi, phòng số 2.",
            feedback: "Rất thiếu chuyên nghiệp và vi phạm quy trình kiểm soát an ninh ra vào.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Ms. Sarah (Safety Auditor)",
        text: "Certainly, here are our audit passes. Do we need any specific personal protective equipment before entering the production hall?",
        text_vi: "Chắc chắn rồi, đây là thẻ kiểm toán của chúng tôi. Chúng tôi có cần trang bị bảo hộ chuyên dụng nào trước khi vào sảnh sản xuất không?",
        options: [
          {
            text: "Yes, ma'am. High-visibility vests, hard hats, earplugs, and safety glasses are mandatory. Here are clean sets for your team.",
            text_vi: "Dạ có thưa cô. Áo phản quang, mũ cứng, nút tai chống ồn và kính an toàn là bắt buộc. Đây là các bộ sạch cho đoàn của cô.",
            feedback: "RẤT CHUẨN! Liệt kê đủ PPE bắt buộc và cung cấp trang bị sạch sẽ.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Ms. Sarah (Safety Auditor)",
        text: "Thank you for the strict compliance and professionalism. Let's proceed to the briefing room.",
        text_vi: "Cảm ơn sự tuân thủ nghiêm ngặt và tính chuyên nghiệp của bạn. Hãy cùng đến phòng họp tóm tắt.",
        is_terminal: true,
        summary: {
          result: "Đón tiếp chu đáo, giữ vững quy định an ninh và an toàn xưởng.",
          common_mistakes: "Cho khách vào xưởng mà không cấp PPE bắt buộc.",
          focus_vocab: ["safety audit", "visitor badge", "high-visibility vest", "earplugs"],
          natural_phrasing: "May I see your visitor badges, please? High-visibility vests are mandatory."
        }
      }
    }
  });

  // -------------------------------------------------------------
  // GROUP 2: GIAO TIẾP HẰNG NGÀY (sc-04, sc-05, sc-06)
  // -------------------------------------------------------------
  scenarios.push({
    id: "sc-04",
    title: "Tình huống 4: Trò chuyện và kết nối tại Căng tin Giờ ăn trưa",
    group: "Giao tiếp hằng ngày",
    category: "daily",
    week: 4,
    description: "Bạn đang ngồi ăn trưa tại căng tin nhà máy và muốn bắt chuyện với một kỹ thuật viên mới từ bộ phận điện tự động.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Bình (Automation Technician)",
        text: "Excuse me, is this seat taken?",
        text_vi: "Xin lỗi, chỗ này đã có ai ngồi chưa bạn?",
        options: [
          {
            text: "No, it is free. Please have a seat! My name is Alex from mechanical maintenance.",
            text_vi: "Chưa, ghế trống bạn ơi. Mời bạn ngồi! Mình tên là Alex bên bảo trì cơ khí.",
            feedback: "CỞI MỞ & LỊCH SỰ! Mời đồng nghiệp ngồi và chủ động giới thiệu.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Sit here.",
            text_vi: "Ngồi đây đi.",
            feedback: "Hơi cộc lốc trong giao tiếp thân thiện.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Bình (Automation Technician)",
        text: "Thanks Alex! I am Binh, just transferred to the PLC and robotics team. How is the food in the cafeteria usually?",
        text_vi: "Cảm ơn Alex! Mình là Bình, vừa chuyển sang đội PLC và robot. Đồ ăn ở căng tin này thường thế nào bạn?",
        options: [
          {
            text: "It is quite good, especially the noodle soup on Tuesdays. How is your first week with the automation team going?",
            text_vi: "Khá ngon bạn à, đặc biệt là món phở vào Thứ Ba. Tuần đầu của bạn bên đội tự động hóa thế nào rồi?",
            feedback: "RẤT TỰ NHIÊN! Chia sẻ gợi ý món ăn và hỏi thăm công việc của đồng nghiệp.",
            is_safe: true,
            next_node: "step_3"
          }
        ]
      },
      step_3: {
        speaker: "Bình (Automation Technician)",
        text: "A bit challenging with the new robotic arm controllers, but the team is very supportive. Let's grab a coffee together after shift!",
        text_vi: "Hơi thử thách với bộ điều khiển cánh tay robot mới, nhưng đội rất hỗ trợ. Sau ca tụi mình cùng uống cà phê nhé!",
        options: [
          {
            text: "Sounds great Binh! I know a good coffee shop right outside the factory gate. See you after shift at 5 PM.",
            text_vi: "Nghe tuyệt đấy Bình! Mình biết một quán cà phê ngon ngay ngoài cổng nhà máy. Hẹn gặp bạn sau ca lúc 5 giờ chiều nhé.",
            feedback: "HOÀN HẢO! Xây dựng mối quan hệ đồng nghiệp ấm áp.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Bình (Automation Technician)",
        text: "Deal! Enjoy your lunch Alex.",
        text_vi: "Chốt nhé! Chúc bạn ăn trưa ngon miệng Alex.",
        is_terminal: true,
        summary: {
          result: "Tạo được tình bạn đồng nghiệp bền vững giữa bộ phận cơ khí và tự động hóa.",
          common_mistakes: "Ngại bắt chuyện, chỉ gật đầu không nói.",
          focus_vocab: ["is this seat taken?", "robotics team", "sounds great", "after shift"],
          natural_phrasing: "No, it is free. Please have a seat!"
        }
      }
    }
  });

  scenarios.push({
    id: "sc-05",
    title: "Tình huống 5: Thảo luận Lịch trực Kỹ thuật Cuối tuần",
    group: "Giao tiếp hằng ngày",
    category: "daily",
    week: 6,
    description: "Trưởng nhóm cần 1 kỹ thuật viên trực sự cố vào sáng Chủ Nhật. Hãy trao đổi và xác nhận lịch trực phù hợp.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Hung (Maintenance Team Lead)",
        text: "Alex, we need one standby technician for the air compressor overhaul this Sunday morning from 8 to 12. Are you available?",
        text_vi: "Alex, chúng ta cần một kỹ thuật viên trực dự phòng cho đợt đại tu máy nén khí sáng Chủ Nhật tuần này từ 8h đến 12h. Bạn có thể thu xếp được không?",
        options: [
          {
            text: "Yes, I am available this Sunday morning, Mr. Hung. Will overtime pay and transport allowance be applied?",
            text_vi: "Vâng, sáng Chủ Nhật này tôi có thể làm được thưa anh Hùng. Chế độ làm thêm giờ và phụ cấp đi lại có được áp dụng không ạ?",
            feedback: "CHUẨN MỰC! Nhận lịch và hỏi khéo léo, chuyên nghiệp về chế độ làm thêm.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "No, Sunday is my sleep day.",
            text_vi: "Không, Chủ Nhật là ngày tôi ngủ.",
            feedback: "Cách từ chối thiếu tính xây dựng trong môi trường xưởng.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Hung (Maintenance Team Lead)",
        text: "Yes, 200% weekend overtime rate plus meal voucher. You only need to monitor oil pressure during the recommissioning run.",
        text_vi: "Có chứ, hệ số làm thêm cuối tuần 200% cộng phiếu ăn trưa. Bạn chỉ cần theo dõi áp suất dầu trong lúc chạy tái vận hành.",
        options: [
          {
            text: "That sounds very reasonable. Please add my name to the official roster. I will be on site at 7:45 AM.",
            text_vi: "Rất hợp lý ạ. Xin hãy ghi tên tôi vào danh sách trực chính thức. Tôi sẽ có mặt tại xưởng lúc 7h45 sáng.",
            feedback: "XUẤT SẮC! Cam kết thời gian có mặt sớm 15 phút để chuẩn bị.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Hung (Maintenance Team Lead)",
        text: "Thank you Alex. I appreciate your dedication and reliability.",
        text_vi: "Cảm ơn Alex. Tôi đánh giá cao sự tận tâm và đáng tin cậy của bạn.",
        is_terminal: true,
        summary: {
          result: "Đạt thỏa thuận làm thêm giờ rõ ràng, nâng cao uy tín với quản lý.",
          common_mistakes: "Từ chối thô lỗ hoặc nhận lời nhưng không hỏi rõ quyền lợi.",
          focus_vocab: ["standby technician", "overhaul", "overtime rate", "official roster"],
          natural_phrasing: "Please add my name to the official roster. I will be on site at 7:45 AM."
        }
      }
    }
  });

  scenarios.push({
    id: "sc-06",
    title: "Tình huống 6: Đổi ca làm việc với Đồng nghiệp do việc Gia đình",
    group: "Giao tiếp hằng ngày",
    category: "daily",
    week: 8,
    description: "Bạn có việc gia đình đột xuất vào tối Thứ Sáu (Ca 3) và cần nhờ Tuấn đổi sang Ca 1 (Sáng) hộ bạn.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Tuấn (Colleague)",
        text: "Hey Alex, you look a bit worried. Is everything okay?",
        text_vi: "Ê Alex, trông bạn có vẻ lo lắng thế. Mọi chuyện ổn cả chứ?",
        options: [
          {
            text: "Hi Tuan. My sister has a graduation ceremony this Friday evening. Could you swap shifts with me? I would take your Shift 1 on Saturday.",
            text_vi: "Chào Tuấn. Tối Thứ Sáu này em gái mình làm lễ tốt nghiệp. Bạn có thể đổi ca với mình được không? Mình sẽ trực bù Ca 1 Thứ Bảy cho bạn.",
            feedback: "RẤT CHUẨN! Nêu rõ lý do gia đình và chủ động đề xuất ca trực bù hợp lý.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Work my shift Friday. I am busy.",
            text_vi: "Làm ca Thứ Sáu giùm tôi đi. Tôi bận.",
            feedback: "Ra lệnh thay vì nhờ vả lịch sự.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Tuấn (Colleague)",
        text: "Sure Alex, family comes first! I can cover your Friday night shift, and you take my Saturday morning shift. Did you submit the shift swap form to the supervisor?",
        text_vi: "Được chứ Alex, gia đình là trên hết! Mình có thể trực ca đêm Thứ Sáu cho bạn, và bạn trực sáng Thứ Bảy giùm mình. Bạn đã nộp đơn đổi ca cho giám sát chưa?",
        options: [
          {
            text: "I have the form filled out right here. Let's both sign it, and I will submit it to Mr. Hung for approval now. Thank you so much, Tuan!",
            text_vi: "Mình đã điền sẵn biểu mẫu đây rồi. Tụi mình cùng ký nhé, rồi mình sẽ nộp cho anh Hùng phê duyệt ngay. Cảm ơn Tuấn nhiều lắm!",
            feedback: "TUYỆT ĐỐI CHUẨN! Thực hiện đúng quy trình giấy tờ và bày tỏ lòng biết ơn.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Tuấn (Colleague)",
        text: "No problem at all Alex. Have a wonderful time at your sister's ceremony!",
        text_vi: "Không có chi đâu Alex. Chúc bạn có thời gian tuyệt vời tại lễ tốt nghiệp của em gái!",
        is_terminal: true,
        summary: {
          result: "Đổi ca thành công đúng luật công ty, giữ gìn tình đồng đội.",
          common_mistakes: "Tự ý đổi ca miệng mà không thông qua biểu mẫu và chữ ký giám sát.",
          focus_vocab: ["swap shifts", "cover a shift", "shift swap form", "supervisor approval"],
          natural_phrasing: "Could you swap shifts with me? I would take your shift on Saturday."
        }
      }
    }
  });

  // -------------------------------------------------------------
  // GROUP 3: HỎI ĐƯỜNG, MUA SẮM VÀ DỊCH VỤ (sc-07, sc-08, sc-09)
  // -------------------------------------------------------------
  scenarios.push({
    id: "sc-07",
    title: "Tình huống 7: Hỏi đường đến Phòng Thí nghiệm Kiểm định Chất lượng (QA Lab)",
    group: "Hỏi đường, mua sắm và dịch vụ",
    category: "general",
    week: 9,
    description: "Bạn cần mang mẫu dầu máy nén khí sang phòng QA Lab để phân tích độ ẩm và cặn bẩn nhưng chưa biết đường đi.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Security Officer (Main Gate)",
        text: "Good morning. Can I help you find something in the industrial complex?",
        text_vi: "Chào buổi sáng. Tôi có thể giúp bạn tìm địa điểm nào trong khu liên hợp công nghiệp không?",
        options: [
          {
            text: "Good morning. Could you please direct me to the Quality Assurance (QA) testing lab? I have a lubrication sample to deliver.",
            text_vi: "Chào buổi sáng. Chú có thể chỉ đường giúp tôi đến Phòng thí nghiệm kiểm định chất lượng QA không ạ? Tôi cần giao một mẫu dầu bôi trơn.",
            feedback: "LỊCH SỰ & RÕ RÀNG! Nêu chính xác tên phòng ban và mục đích.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Where is lab?",
            text_vi: "Phòng lab ở đâu?",
            feedback: "Quá cộc lốc.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Security Officer (Main Gate)",
        text: "Walk straight along the main walkway past Warehouse 3, turn right at the water cooling tower, and it is on the second floor of Building C.",
        text_vi: "Cháu đi thẳng theo lối đi chính qua Kho 3, rẽ phải tại tháp giải nhiệt nước, phòng lab nằm ở tầng hai của Tòa nhà C.",
        options: [
          {
            text: "So walk past Warehouse 3, turn right at the cooling tower, second floor Building C. Is an electronic access card required at the door?",
            text_vi: "Dạ tức là đi qua Kho 3, rẽ phải ở tháp giải nhiệt, tầng 2 Tòa C. Cửa phòng có cần quẹt thẻ từ không chú?",
            feedback: "XUẤT SẮC! Nhắc lại lộ trình để xác nhận (read-back) và hỏi trước về thẻ từ ra vào.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Security Officer (Main Gate)",
        text: "Yes, press the intercom button if you do not have a Level 2 keycard. Have a good day!",
        text_vi: "Đúng rồi, bấm nút chuông đàm thoại nếu cháu chưa có thẻ từ Cấp 2 nhé. Chúc cháu một ngày tốt lành!",
        is_terminal: true,
        summary: {
          result: "Hỏi đường chính xác, chủ động xác nhận chi tiết cửa ra vào.",
          common_mistakes: "Nghe đường mà không nhắc lại để xác nhận, dẫn tới đi lạc trong nhà máy lớn.",
          focus_vocab: ["direct me to...", "walk straight past", "turn right at", "intercom button"],
          natural_phrasing: "Could you please direct me to...? So walk past... and turn right, correct?"
        }
      }
    }
  });

  scenarios.push({
    id: "sc-08",
    title: "Tình huống 8: Mua đồ bảo hộ và vật tư an toàn tại Cửa hàng Vật tư",
    group: "Hỏi đường, mua sắm và dịch vụ",
    category: "she",
    week: 10,
    description: "Bạn cần mua bổ sung kính chống hóa chất, găng tay nitrile chịu dầu và mặt nạ lọc bụi mịn N95 cho tổ bảo trì.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Supply Store Clerk",
        text: "Welcome to Safety First Equipment Store! What PPE supplies are you looking for today?",
        text_vi: "Chào mừng quý khách đến cửa hàng thiết bị bảo hộ Safety First! Hôm nay bạn đang tìm các vật tư an toàn nào?",
        options: [
          {
            text: "Hello. I need five pairs of anti-splash chemical goggles, two boxes of heavy-duty nitrile gloves size L, and a pack of N95 dust masks.",
            text_vi: "Xin chào. Tôi cần 5 chiếc kính chống hóa chất chống tia bắn, 2 hộp găng tay nitrile chịu dầu cỡ L và một gói khẩu trang chống bụi N95.",
            feedback: "CHUẨN XÁC & ĐẦY ĐỦ! Nêu rõ số lượng, chủng loại và kích cỡ.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Give me some gloves and masks.",
            text_vi: "Bán cho ít găng tay với khẩu trang.",
            feedback: "Mơ hồ, không có chủng loại chống hóa chất hay kích cỡ.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Supply Store Clerk",
        text: "We have 3M anti-fog chemical goggles and Ansell Sol-Vex nitrile gloves in stock. Do you need a VAT tax invoice for company reimbursement?",
        text_vi: "Chúng tôi có sẵn kính chống đọng sương của 3M và găng tay nitrile Ansell Sol-Vex. Bạn có cần xuất hóa đơn đỏ VAT để thanh toán lại với công ty không?",
        options: [
          {
            text: "Yes, please issue a corporate VAT invoice to English Hub Industrial Services. Here is our company tax code.",
            text_vi: "Dạ có, xin hãy xuất hóa đơn VAT doanh nghiệp cho Công ty Dịch vụ Kỹ thuật English Hub. Mã số thuế của công ty tôi đây ạ.",
            feedback: "XUẤT SẮC! Cung cấp đúng mã số thuế phục vụ thanh toán nội bộ.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Supply Store Clerk",
        text: "Here is your receipt, certificate of conformity, and items securely packed. Thank you for shopping with us!",
        text_vi: "Đây là hóa đơn, chứng chỉ hợp chuẩn chất lượng và hàng đã đóng gói cẩn thận. Cảm ơn bạn đã mua hàng!",
        is_terminal: true,
        summary: {
          result: "Mua đúng chủng loại PPE chuyên dụng và lấy đầy đủ hóa đơn chứng từ.",
          common_mistakes: "Mua nhầm găng tay y tế thông thường không chịu được dầu công nghiệp.",
          focus_vocab: ["anti-splash goggles", "nitrile gloves", "N95 dust mask", "VAT tax invoice"],
          natural_phrasing: "I need five pairs of... Do you have certificate of conformity?"
        }
      }
    }
  });

  scenarios.push({
    id: "sc-09",
    title: "Tình huống 9: Đăng ký vé Xe buýt Đưa đón Công nhân viên (Plant Shuttle)",
    group: "Hỏi đường, mua sắm và dịch vụ",
    category: "general",
    week: 11,
    description: "Bạn mới chuyển chỗ ở và cần đăng ký đổi tuyến xe buýt đưa đón công nhân tại phòng Hành chính Nhân sự.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "HR Transport Coordinator",
        text: "Hello! How can I assist you with employee transportation services today?",
        text_vi: "Xin chào! Hôm nay tôi có thể hỗ trợ gì cho bạn về dịch vụ xe đưa đón nhân viên?",
        options: [
          {
            text: "Good morning. I recently relocated to District 2 and I would like to register for Route Number 4 shuttle bus starting next Monday.",
            text_vi: "Chào chị. Tôi vừa chuyển nhà về Quận 2 và tôi muốn đăng ký đổi sang tuyến xe buýt số 4 bắt đầu từ Thứ Hai tới.",
            feedback: "RÕ RÀNG & MẠCH LẠC! Nêu địa bàn mới, số hiệu tuyến xe và ngày bắt đầu.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "I need bus change.",
            text_vi: "Tôi cần đổi xe.",
            feedback: "Quá ngắn, thiếu thông tin tuyến và địa điểm.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "HR Transport Coordinator",
        text: "Route 4 has two pickup points near District 2: Cantavil Mall at 6:15 AM and An Phu Station at 6:25 AM. Which pickup point suits you better?",
        text_vi: "Tuyến số 4 có 2 điểm đón gần Quận 2: TTTM Cantavil lúc 6h15 sáng và Trạm An Phú lúc 6h25 sáng. Điểm đón nào thuận tiện hơn cho bạn?",
        options: [
          {
            text: "An Phu Station at 6:25 AM is only a five-minute walk from my apartment. Please register me for that stop.",
            text_vi: "Trạm An Phú lúc 6h25 sáng chỉ cách căn hộ của tôi 5 phút đi bộ. Xin vui lòng đăng ký điểm đón đó cho tôi.",
            feedback: "TUYỆT VỜI! Chọn điểm đón kèm lý do thuyết phục.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "HR Transport Coordinator",
        text: "Done! Here is your Route 4 electronic bus pass sticker. Please tap it when boarding. Safe travels!",
        text_vi: "Xong rồi! Đây là tem thẻ xe buýt điện tử Tuyến 4 của bạn. Vui lòng quẹt thẻ khi lên xe. Chúc bạn đi lại an toàn!",
        is_terminal: true,
        summary: {
          result: "Đổi tuyến xe đưa đón nhanh chóng, chính xác giờ giấc.",
          common_mistakes: "Không hỏi rõ giờ xe lăn bánh dẫn đến trễ ca làm việc.",
          focus_vocab: ["shuttle bus", "pickup point", "relocated to", "electronic bus pass"],
          natural_phrasing: "I would like to register for Route Number 4... An Phu Station suits me better."
        }
      }
    }
  });

  // -------------------------------------------------------------
  // GROUP 4: GIAO TIẾP VỚI ĐỒNG NGHIỆP (sc-10, sc-11, sc-12)
  // -------------------------------------------------------------
  scenarios.push({
    id: "sc-10",
    title: "Tình huống 10: Phối hợp Thay thế Đoạn Đường ống Khí nén bị Thủng",
    group: "Giao tiếp với đồng nghiệp",
    category: "workplace",
    week: 13,
    description: "Bạn và đồng nghiệp Hoàng đang phối hợp tháo dỡ và thay thế một đoạn ống thép mạ kẽm 1 inch bị nứt trên cao.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Hoàng (Pipefitter)",
        text: "Alex, I am up on the mobile scaffold holding the pipe support clamp. Did you depressurize the compressed air manifold?",
        text_vi: "Alex, tôi đang ở trên giàn giáo di động giữ cùm treo ống này. Cậu đã xả hết áp suất trong cụm ống góp khí nén chưa?",
        options: [
          {
            text: "Yes, manifold isolation valve is closed and I opened the bleed valve. The gauge reads exactly zero bar.",
            text_vi: "Rồi, van cô lập cụm ống đã đóng và tôi đã mở van xả đáy. Đồng hồ đo áp chỉ đúng 0 bar rồi.",
            feedback: "CHUẨN MỰC AN TOÀN! Xác nhận cả van cô lập lẫn đồng hồ áp suất về 0.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "I think it is empty, just unscrew it.",
            text_vi: "Tôi nghĩ nó rỗng rồi, cứ tháo đại đi.",
            feedback: "CỰC KỲ NGUY HIỂM! Không xác nhận áp suất mà tháo ống có thể gây nổ vỡ tai nạn nặng.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Hoàng (Pipefitter)",
        text: "Great! I am unbolting the top union now. Please hold the bottom pipe section firmly with the pipe wrench so it does not drop.",
        text_vi: "Tốt lắm! Giờ tôi tháo rắc-co phía trên đây. Cậu dùng mỏ lết răng giữ chặt đoạn ống phía dưới để nó không bị rơi tự do nhé.",
        options: [
          {
            text: "Got it! I have a secure two-hand grip with the 24-inch pipe wrench. Unbolt whenever you are ready.",
            text_vi: "Đã giữ chặt! Tôi đã kẹp chắc bằng mỏ lết răng 24 inch bằng cả hai tay rồi. Cậu tháo bu-lông khi nào sẵn sàng nhé.",
            feedback: "PHỐI HỢP ĂN Ý! Khẳng định tư thế giữ ống chắc chắn.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Hoàng (Pipefitter)",
        text: "Union is off, lowering the old pipe section down to you. Excellent teamwork, Alex!",
        text_vi: "Rắc-co đã rời, tôi hạ đoạn ống cũ xuống cho cậu đây. Phối hợp đồng đội rất tuyệt, Alex!",
        is_terminal: true,
        summary: {
          result: "Thay ống khí nén an toàn tuyệt đối, triệt tiêu nguy cơ áp suất dư và rơi đồ.",
          common_mistakes: "Chủ quan không xả áp trước khi tháo phụ kiện đường ống.",
          focus_vocab: ["mobile scaffold", "depressurize", "bleed valve", "pipe wrench"],
          natural_phrasing: "The gauge reads zero bar. I have a secure grip with the wrench."
        }
      }
    }
  });

  scenarios.push({
    id: "sc-11",
    title: "Tình huống 11: Mượn Cờ lê Cân lực Hiệu chuẩn từ Phòng Dụng cụ (Tool Crib)",
    group: "Giao tiếp với đồng nghiệp",
    category: "workplace",
    week: 14,
    description: "Bạn cần siết nắp máy nén khí đúng lực 85 Nm và đến kho mượn dụng cụ đã được kiểm định hạn sử dụng.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Mr. Ba (Tool Crib Keeper)",
        text: "Good morning Alex. What specialized tools do you need for your work order today?",
        text_vi: "Chào buổi sáng Alex. Cậu cần dụng cụ chuyên dụng gì cho phiếu công việc hôm nay?",
        options: [
          {
            text: "Good morning Mr. Ba. I need a calibrated torque wrench, range 20 to 100 Nm, and a 17-mm deep impact socket.",
            text_vi: "Chào buổi sáng chú Ba. Cháu cần một cờ lê lực đã hiệu chuẩn dải 20-100 Nm và một đầu tuýp dài 17 mm.",
            feedback: "CHUẨN XÁC KỸ THUẬT! Nêu rõ dải đo lực và kích cỡ đầu tuýp.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Give me some wrench to turn some bolts fast.",
            text_vi: "Đưa tôi cái cờ lê vặn bu-lông lẹ lẹ.",
            feedback: "Quá mơ hồ, không nêu dải đo lực hay tiêu chuẩn hiệu chuẩn.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Mr. Ba (Tool Crib Keeper)",
        text: "Here is the calibrated torque wrench. Calibration sticker is valid until October 2026. Please write your Employee ID and sign the tool checkout register.",
        text_vi: "Đây là cờ lê cân lực đã hiệu chuẩn. Tem kiểm định còn hạn đến tháng 10/2026. Cháu ghi mã nhân viên và ký vào sổ mượn nhé.",
        options: [
          {
            text: "My ID is TECH-409. I will zero the torque setting and return both the wrench and socket before 4 PM today.",
            text_vi: "Mã thẻ cháu là TECH-409. Cháu sẽ chỉnh lực về số 0 và hoàn trả cả cờ lê lẫn đầu tuýp trước 4h chiều nay ạ.",
            feedback: "RẤT CHUYÊN NGHIỆP! Hiểu rõ nguyên tắc chỉnh về 0 để bảo vệ lò xo cờ lê lực.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Mr. Ba (Tool Crib Keeper)",
        text: "Good technician habits! Always zeroing prevents spring fatigue. Have a productive shift, Alex.",
        text_vi: "Thói quen thợ giỏi đấy! Luôn trả về 0 giúp chống mỏi lò xo. Chúc ca làm việc năng suất nhé Alex.",
        is_terminal: true,
        summary: {
          result: "Mượn dụng cụ đúng thông số và cam kết bảo quản chuyên nghiệp.",
          common_mistakes: "Quên trả lực cờ lê về 0 sau khi dùng, làm sai lệch kết quả đo lần sau.",
          focus_vocab: ["calibrated torque wrench", "deep impact socket", "calibration sticker", "zero the torque setting"],
          natural_phrasing: "I will zero the torque setting and return the tools before 4 PM."
        }
      }
    }
  });

  scenarios.push({
    id: "sc-12",
    title: "Tình huống 12: Hướng dẫn Kỹ thuật viên Thực tập Thao tác Đo Điện trở Cách điện (Megger)",
    group: "Giao tiếp với đồng nghiệp",
    category: "workplace",
    week: 15,
    description: "Bạn hướng dẫn thực tập sinh Tuấn cách đo điện trở cách điện của cuộn dây động cơ bơm bằng đồng hồ Megger 500V an toàn.",
    initial_node: "step_1",
    nodes: {
      step_1: {
        speaker: "Tuấn (Apprentice Technician)",
        text: "Alex, I have the 500-volt insulation tester ready. Can I connect the test leads to the motor terminals now?",
        text_vi: "Anh Alex, em chuẩn bị xong máy đo cách điện 500V rồi. Giờ em kẹp que đo vào các cọc đấu dây động cơ được chưa anh?",
        options: [
          {
            text: "Hold on Tuan! First, verify that the motor is fully isolated and zero voltage is confirmed with a multimeter.",
            text_vi: "Khoan đã Tuấn! Trước tiên, phải xác nhận động cơ đã được cô lập hoàn toàn và kiểm tra điện áp bằng 0 bằng đồng hồ vạn năng.",
            feedback: "NGUYÊN TẮC VÀNG! Đo cách điện trên mạch còn điện áp sống sẽ gây nổ thiết bị đo.",
            is_safe: true,
            next_node: "step_2"
          },
          {
            text: "Go ahead and press test button.",
            text_vi: "Cứ bấm nút test đi em.",
            feedback: "Nguy hiểm! Chưa kiểm tra điện áp dư.",
            is_safe: false,
            next_node: "step_1"
          }
        ]
      },
      step_2: {
        speaker: "Tuấn (Apprentice Technician)",
        text: "Multimeter confirms zero volts across all three phases to ground. What is our acceptable insulation resistance threshold?",
        text_vi: "Đồng hồ vạn năng xác nhận 0 vôn giữa cả ba pha với đất rồi anh. Ngưỡng điện trở cách điện chấp nhận được là bao nhiêu ạ?",
        options: [
          {
            text: "For a 400V motor, the reading should be at least 5 Megohms. Connect one lead to Phase U and the other to the ground frame, then test for 60 seconds.",
            text_vi: "Với động cơ 400V, chỉ số phải đạt tối thiểu 5 Megohm. Kẹp một que vào Pha U và que kia vào vỏ đất, sau đó đo trong 60 giây.",
            feedback: "CHỈ DẪN KỸ THUẬT CHUẨN MỰC! Đưa ra tiêu chuẩn Megohm và thời gian đo chuẩn IEEE.",
            is_safe: true,
            next_node: "success_end"
          }
        ]
      },
      success_end: {
        speaker: "Tuấn (Apprentice Technician)",
        text: "The meter reads 250 Megohms! The insulation is in excellent condition. Thank you for guiding me through the safe steps, Alex.",
        text_vi: "Đồng hồ chỉ 250 Megohm anh ơi! Lớp cách điện trong tình trạng cực tốt. Cảm ơn anh đã hướng dẫn từng bước an toàn cho em.",
        is_terminal: true,
        summary: {
          result: "Huấn luyện an toàn thành công, ngăn ngừa rủi ro điện cao áp cho thực tập sinh.",
          common_mistakes: "Đo Megger khi chưa xả điện tích hoặc chưa kiểm tra 0V.",
          focus_vocab: ["insulation tester (Megger)", "test leads", "insulation resistance", "ground frame"],
          natural_phrasing: "First, verify that the motor is fully isolated. The reading should be at least..."
        }
      }
    }
  });

  // Write a loop helper for scenarios 13-30 to make the data rich, systematic, and well-covered:
  const remainingScenarios = [
    // GROUP 5: BÁO CÁO CÔNG VIỆC VÀ BÀN GIAO CA (sc-13, sc-14, sc-15)
    {
      id: "sc-13",
      title: "Tình huống 13: Bàn giao Ca Sản xuất từ Ca 1 sang Ca 2",
      group: "Báo cáo công việc và bàn giao ca",
      category: "workplace",
      week: 16,
      description: "Bàn giao tình hình vận hành máy đóng bao Dây chuyền 2 cho trưởng ca sau, lưu ý lỗi kẹt bao lúc 2h chiều.",
      pText1: "Good afternoon Alex. How was Shift 1 today? Any equipment alarms or pending work orders for Line 2?",
      pVi1: "Chào buổi chiều Alex. Ca 1 hôm nay thế nào? Có báo động máy móc hay phiếu công việc tồn nào trên Dây chuyền 2 không?",
      optText1: "Good afternoon David. Shift 1 produced 1,450 bags. However, Bagging Station 2 jammed at 2 PM due to a dusty photo-sensor. We cleaned the optic lens and it is running smoothly now.",
      optVi1: "Chào buổi chiều David. Ca 1 sản xuất được 1.450 bao. Tuy nhiên, Trạm đóng bao số 2 bị kẹt lúc 2h chiều do cảm biến quang bị bụi. Chúng tôi đã lau sạch thấu kính và hiện máy đang chạy trơn tru.",
      pText2: "Good catch. Did you log the 15-minute downtime in the SAP maintenance software?",
      pVi2: "Xử lý tốt đấy. Bạn đã ghi nhận 15 phút dừng máy vào phần mềm bảo trì SAP chưa?",
      optText2: "Yes, downtime code DT-201 is logged with root cause and corrective action. Logbook is signed and ready for you.",
      optVi2: "Dạ rồi, mã dừng máy DT-201 đã được ghi kèm nguyên nhân gốc rễ và hành động khắc phục. Sổ giao ca đã ký sẵn cho bạn đây.",
      pEnd: "Thanks Alex. Have a restful evening, we will monitor the photo-sensor closely tonight.",
      pEndVi: "Cảm ơn Alex. Chúc bạn có buổi tối nghỉ ngơi tốt, đêm nay chúng tôi sẽ theo dõi sát cảm biến quang.",
      summary: {
        result: "Bàn giao ca đầy đủ sản lượng, sự cố dừng máy và mã bảo trì SAP.",
        common_mistakes: "Giấu lỗi dừng máy hoặc quên ghi chú vào nhật ký.",
        focus_vocab: ["bagging station", "photo-sensor", "downtime code", "root cause"],
        natural_phrasing: "Station 2 jammed at 2 PM... We cleaned the optic lens and it is running smoothly."
      }
    },
    {
      id: "sc-14",
      title: "Tình huống 14: Báo cáo Hoàn thành Bảo trì Định kỳ Máy nén khí Trục vít",
      group: "Báo cáo công việc và bàn giao ca",
      category: "workplace",
      week: 18,
      description: "Báo cáo hoàn tất bảo dưỡng 1.000 giờ cho Máy nén khí C-102 với Trưởng phòng Kỹ thuật.",
      pText1: "Alex, did your team finish the 1,000-hour preventive maintenance on Screw Compressor C-102?",
      pVi1: "Alex, đội của bạn đã hoàn thành bảo trì phòng ngừa 1.000 giờ trên Máy nén khí trục vít C-102 chưa?",
      optText1: "Yes Mr. Thomas. We replaced the oil filter, air intake element, and oil separator cartridge. Fresh synthetic oil is filled to the center mark.",
      optVi1: "Dạ rồi thưa ông Thomas. Chúng tôi đã thay lọc dầu, lõi lọc gió và lõi tách dầu. Dầu tổng hợp mới đã được châm đến vạch giữa.",
      pText2: "Excellent. Did you perform the recommissioning test run under full working pressure?",
      pVi2: "Tuyệt vời. Các bạn đã chạy thử tái vận hành ở đủ áp suất làm việc chưa?",
      optText2: "Yes, we test-ran for 45 minutes at 8.5 bar. Discharge temperature stabilized at 78 degrees Celsius with zero air or oil leaks.",
      optVi2: "Dạ rồi, chúng tôi chạy thử 45 phút ở áp 8.5 bar. Nhiệt độ khí xả ổn định ở 78 độ C và hoàn toàn không có rò rỉ khí hay dầu.",
      pEnd: "Very thorough report, Alex. Close out the work order and return the machine to production.",
      pEndVi: "Báo cáo rất kỹ lưỡng Alex. Hãy đóng phiếu công việc và bàn giao máy lại cho sản xuất.",
      summary: {
        result: "Báo cáo nghiệm thu bài bản với thông số kỹ thuật chạy thử thuyết phục.",
        common_mistakes: "Chỉ báo 'xong rồi' mà không nêu các phụ tùng đã thay và thông số áp suất.",
        focus_vocab: ["screw compressor", "oil separator", "test run", "stabilized temperature"],
        natural_phrasing: "We replaced the oil filter... Discharge temperature stabilized at 78 degrees."
      }
    },
    {
      id: "sc-15",
      title: "Tình huống 15: Ghi chép và Giải trình Nhật ký Công việc Ca đêm (Past Work Log)",
      group: "Báo cáo công việc và bàn giao ca",
      category: "workplace",
      week: 20,
      description: "Giải trình với Giám sát viên buổi sáng về 2 sự cố điện đã xử lý trong ca đêm qua.",
      pText1: "Morning Alex. I see two emergency callouts in the night logbook between 1 AM and 3 AM. What occurred?",
      pVi1: "Chào buổi sáng Alex. Tôi thấy 2 cuộc gọi khẩn cấp trong nhật ký ca đêm từ 1h đến 3h sáng. Chuyện gì đã xảy ra vậy?",
      optText1: "At 1:15 AM, Conveyor 4 tripped due to a blown 16-amp control fuse. We replaced the fuse and cleared a jammed box. Then at 2:30 AM, Pump 3 had a false low-level alarm caused by loose wiring.",
      optVi1: "Lúc 1h15 sáng, Băng tải 4 nhảy do đứt cầu chì điều khiển 16A. Chúng tôi đã thay cầu chì và gỡ hộp kẹt. Sau đó lúc 2h30 sáng, Bơm 3 báo lỗi mức thấp giả do lỏng dây.",
      pText2: "Were both issues fully resolved without causing product loss?",
      pVi2: "Cả hai sự cố đã được xử lý triệt để mà không gây thất thoát sản phẩm chứ?",
      optText2: "Yes, total downtime was only 22 minutes. Both machines resumed normal operation and spare fuses were replenished in the cabinet.",
      optVi2: "Dạ đúng, tổng thời gian dừng chỉ có 22 phút. Cả hai máy đã vận hành lại bình thường và cầu chì dự phòng đã được bổ sung vào tủ.",
      pEnd: "Great job handling both night emergencies swiftly and keeping spare stock replenished.",
      pEndVi: "Làm tốt lắm, xử lý nhanh cả hai sự cố ca đêm và chủ động bổ sung vật tư dự phòng.",
      summary: {
        result: "Giải trình ca đêm mạch lạc, kiểm soát thời gian dừng máy ở mức tối thiểu.",
        common_mistakes: "Không bổ sung lại vật tư dự phòng sau khi đã lấy dùng trong ca đêm.",
        focus_vocab: ["emergency callout", "blown fuse", "false alarm", "replenished"],
        natural_phrasing: "Total downtime was only 22 minutes. Both machines resumed normal operation."
      }
    },

    // GROUP 6: KIỂM TRA MÁY MÓC, BẢO TRÌ VÀ SỬA CHỮA (sc-16, sc-17, sc-18)
    {
      id: "sc-16",
      title: "Tình huống 16: Kiểm tra Trước Vận hành Máy Phay CNC (Pre-Operation Inspection)",
      group: "Kiểm tra máy móc, bảo trì và sửa chữa",
      category: "technical",
      week: 22,
      description: "Thực hiện checklist kiểm tra mức dầu bôi trơn rãnh trượt, áp suất khí nén và nút dừng khẩn cấp máy CNC.",
      pText1: "Alex, before loading the steel billet into CNC Machine 5, have you verified the pre-operation checklist?",
      pVi1: "Alex, trước khi gá phôi thép vào Máy CNC số 5, bạn đã kiểm tra checklist trước vận hành chưa?",
      optText1: "Yes, slideway lubrication reservoir is full, air pressure is at 6.0 bar, and I tested the emergency stop button. The spindle interlock is functioning properly.",
      optVi1: "Dạ rồi, bình dầu bôi trơn băng trượt đã đầy, áp suất khí đạt 6.0 bar và tôi đã kiểm tra nút dừng khẩn cấp. Khóa liên động trục chính hoạt động tốt.",
      pText2: "Did you check the coolant concentration with the optical refractometer?",
      pVi2: "Bạn đã đo nồng độ dung dịch làm mát bằng khúc xạ kế quang học chưa?",
      optText2: "Yes, coolant refractometer reading is 8%, right within our recommended range of 7% to 9%.",
      optVi2: "Dạ rồi, số đọc khúc xạ kế dung dịch làm mát là 8%, nằm đúng trong dải khuyến nghị từ 7% đến 9%.",
      pEnd: "Perfect pre-check. You have full clearance to start the machining program.",
      pEndVi: "Kiểm tra trước vận hành hoàn hảo. Bạn được phép bắt đầu chương trình gia công.",
      summary: {
        result: "Vận hành máy CNC theo chuẩn an toàn quốc tế, bảo vệ dao cụ và độ chính xác.",
        common_mistakes: "Quên kiểm tra nồng độ dầu tưới nguội làm mòn dao gia công nhanh.",
        focus_vocab: ["slideway lubrication", "emergency stop", "coolant concentration", "refractometer"],
        natural_phrasing: "Air pressure is at 6 bar and the emergency stop is verified."
      }
    },
    {
      id: "sc-17",
      title: "Tình huống 17: Thay thế Ổ bi Cầu Động cơ Bị Mòn Rơ (Bearing Replacement)",
      group: "Kiểm tra máy móc, bảo trì và sửa chữa",
      category: "technical",
      week: 24,
      description: "Tháo dỡ động cơ quạt hút 15 kW, dùng cảo cơ khí tháo ổ bi cũ và gia nhiệt lắp ổ bi SKF mới.",
      pText1: "Alex, how is the drive-end bearing replacement on the 15-kilowatt exhaust fan motor progressing?",
      pVi1: "Alex, tiến độ thay ổ bi đầu truyền động trên động cơ quạt hút 15 kW thế nào rồi?",
      optText1: "We pulled off the old worn 6309 bearing using a hydraulic puller. The shaft journal is inspected, polished, and free of scoring marks.",
      optVi1: "Chúng tôi đã dùng cảo thủy lực tháo ổ bi 6309 cũ bị mòn ra. Cổ trục đã được kiểm tra, đánh bóng và không có vết xước.",
      pText2: "How do you plan to install the new SKF bearing onto the shaft?",
      pVi2: "Bạn dự định lắp ổ bi SKF mới vào trục bằng phương pháp nào?",
      optText2: "We are using an induction heater to heat the new bearing to exactly 110 degrees Celsius for smooth thermal shrink-fit mounting. No hammering will be used.",
      optVi2: "Chúng tôi dùng máy gia nhiệt cảm ứng để nung ổ bi mới lên đúng 110 độ C để lắp co ngót nhiệt êm ái. Tuyệt đối không dùng búa gõ.",
      pEnd: "Standard practice! Thermal mounting prevents brinelling damage to the raceways. Keep up the good work.",
      pEndVi: "Đúng chuẩn kỹ thuật! Lắp nhiệt giúp chống dập rãnh lăn bi. Làm việc rất tốt.",
      summary: {
        result: "Lắp đặt vòng bi chuẩn xác theo khuyến cáo SKF, đảm bảo tuổi thọ tối đa.",
        common_mistakes: "Dùng búa đập trực tiếp lên vành ngoài làm nứt vỡ bi.",
        focus_vocab: ["hydraulic puller", "shaft journal", "induction heater", "shrink-fit mounting"],
        natural_phrasing: "We are using an induction heater to heat the bearing to 110 degrees."
      }
    },
    {
      id: "sc-18",
      title: "Tình huống 18: Cân chỉnh Độ Căng và Độ Đồng Phẳng Dây Đai (V-Belt Alignment)",
      group: "Kiểm tra máy móc, bảo trì và sửa chữa",
      category: "technical",
      week: 26,
      description: "Sử dụng thước laser cân đồng phẳng hai puly và bút đo lực căng dây đai quạt thông gió.",
      pText1: "Alex, the ventilation blower V-belts were squealing this morning. What did your inspection reveal?",
      pVi1: "Alex, dây đai quạt thông gió sáng nay kêu rít to. Kết quả kiểm tra của bạn cho thấy điều gì?",
      optText1: "The belts were loose and misaligned by 4 millimeters. Belt deflection was 25 mm instead of the specified 12 mm.",
      optVi1: "Dây đai bị chùng và lệch đồng phẳng 4 mm. Độ võng dây đai đo được là 25 mm so với tiêu chuẩn quy định là 12 mm.",
      pText2: "How did you correct the pulley alignment and tension?",
      pVi2: "Bạn đã căn chỉnh độ thẳng hàng của puly và lực căng dây đai như thế nào?",
      optText2: "We used a magnetic laser alignment tool to align both pulleys within 0.5 degrees, then adjusted motor base jackscrews until belt tension gauge read 45 Newtons.",
      optVi2: "Chúng tôi dùng thước cân tâm laser từ tính chỉnh hai puly lệch dưới 0.5 độ, sau đó vặn bu-lông đẩy đế động cơ cho đến khi bút đo lực căng chỉ 45 Newton.",
      pEnd: "Excellent mechanical execution. Test run the blower and verify noise level.",
      pEndVi: "Xử lý cơ khí rất xuất sắc. Hãy chạy thử quạt và kiểm tra độ ồn.",
      summary: {
        result: "Khắc phục triệt để tiếng kêu rít và chống mòn dây đai sớm bằng công cụ laser.",
        common_mistakes: "Căn dây đai bằng mắt thường dẫn đến lệch góc và nhanh đứt đai.",
        focus_vocab: ["V-belt", "pulley alignment", "belt deflection", "laser alignment tool"],
        natural_phrasing: "We used a magnetic laser tool to align both pulleys within 0.5 degrees."
      }
    },

    // GROUP 7: SHE, PPE, HAZARD VÀ NEAR MISS (sc-19, sc-20, sc-21)
    {
      id: "sc-19",
      title: "Tình huống 19: Nhắc nhở Đồng nghiệp Đeo Kính Bảo hộ khi Dùng Máy Mài (PPE Intervention)",
      group: "SHE, PPE, Hazard và Near Miss",
      category: "she",
      week: 28,
      description: "Phát hiện một công nhân đang dùng máy mài cầm tay mà chỉ đeo kính cận thông thường, hãy can thiệp an toàn.",
      pText1: "Hey Alex, I just need to deburr this steel bracket for thirty seconds. Do I really need full safety goggles over my reading glasses?",
      pVi1: "Này Alex, tôi chỉ cần mài bavia cái giá thép này 30 giây thôi. Tôi có thực sự cần đeo kính bảo hộ trùm ngoài kính cận không?",
      optText1: "Yes Huy, absolutely. Regular reading glasses shatter easily under high-speed grinding sparks. Please put on certified ANSI Z87 face shield and goggles before pulling the trigger.",
      optVi1: "Có chứ Huy, tuyệt đối phải đeo. Kính cận thông thường rất dễ vỡ vụn khi bị tia lửa mài tốc độ cao bắn trúng. Xin hãy đeo mặt nạ che mặt và kính bảo hộ chuẩn ANSI Z87 trước khi bóp cò máy.",
      pText2: "Fair point. Eye injuries happen in milliseconds. Where is the spare face shield?",
      pVi2: "Cậu nói đúng. Chấn thương mắt xảy ra chỉ trong tích tắc. Mặt nạ che mặt dự phòng ở đâu?",
      optText2: "It is hanging on the grinding station wall hook right behind you. I will hold the workpiece steady for you.",
      optVi2: "Nó đang treo trên móc tường trạm mài ngay sau lưng bạn đấy. Tôi sẽ kẹp giữ chi tiết chắc chắn giúp bạn.",
      pEnd: "Thanks for looking out for my safety, Alex. Safety first!",
      pEndVi: "Cảm ơn đã chú ý bảo vệ an toàn cho tôi nhé Alex. An toàn là trên hết!",
      summary: {
        result: "Can thiệp an toàn kịp thời, ngăn chặn nguy cơ mạt sắt bắn mù mắt.",
        common_mistakes: "Lơ là nghĩ rằng mài vài giây thì không cần kính bảo hộ chuyên dụng.",
        focus_vocab: ["deburr", "grinding sparks", "face shield", "eye injury"],
        natural_phrasing: "Regular glasses shatter easily. Please put on certified safety goggles."
      }
    },
    {
      id: "sc-20",
      title: "Tình huống 20: Thực hiện Quy trình Khóa & Treo Thẻ LOTO 6 Bước (Lockout/Tagout)",
      group: "SHE, PPE, Hazard và Near Miss",
      category: "she",
      week: 30,
      description: "Thực hiện cô lập áptômát 380V và van xả liệu bồn khuấy hóa chất theo đúng 6 bước LOTO trước khi vào bảo dưỡng.",
      pText1: "Alex, we are preparing to enter Agitator Tank 1 for paddle inspection. Can you walk me through your LOTO isolation procedure?",
      pVi1: "Alex, chúng ta đang chuẩn bị vào Bồn khuấy số 1 để kiểm tra cánh khuấy. Bạn có thể điểm lại các bước cô lập LOTO của mình không?",
      optText1: "Step 1: Notified operators. Step 2: Shut down motor at local panel. Step 3: Switched off 380V main breaker in MCC room. Step 4: Applied my personal red padlock and danger tag.",
      optVi1: "Bước 1: Đã thông báo cho người vận hành. Bước 2: Tắt động cơ tại tủ hiện trường. Bước 3: Cắt áptômát tổng 380V tại phòng MCC. Bước 4: Gắn khóa móc đỏ cá nhân và thẻ cảnh báo nguy hiểm.",
      pText2: "Very good. What about Steps 5 and 6 before anyone puts a hand inside?",
      pVi2: "Rất tốt. Còn Bước 5 và 6 trước khi có ai đưa tay vào bên trong thì sao?",
      optText2: "Step 5: Closed and chained feed valves to dissipate residual pressure. Step 6: Pressed the local START push-button to verify zero energy state. The shaft did not move.",
      optVi2: "Bước 5: Khóa xích van nạp liệu để triệt tiêu áp suất dư. Bước 6: Nhấn nút KHỞI ĐỘNG tại chỗ để xác nhận trạng thái năng lượng bằng không. Trục không hề nhúc nhích.",
      pEnd: "Full 6-step LOTO verified. Sign the confined space entry permit and proceed safely.",
      pEndVi: "Đã xác nhận đủ 6 bước LOTO chuẩn xác. Ký giấy phép vào không gian hạn chế và làm việc an toàn.",
      summary: {
        result: "Triển khai hoàn hảo 6 bước LOTO chuẩn OSHA, triệt tiêu 100% rủi ro máy khởi động bất ngờ.",
        common_mistakes: "Bỏ qua bước 6 (bấm nút thử xác nhận năng lượng bằng 0).",
        focus_vocab: ["LOTO procedure", "personal padlock", "danger tag", "zero energy state"],
        natural_phrasing: "Step 6: Pressed the start button to verify zero energy state. The shaft did not move."
      }
    },
    {
      id: "sc-21",
      title: "Tình huống 21: Báo cáo Sự cố Suýt Nguy (Near Miss Incident Report)",
      group: "SHE, PPE, Hazard và Near Miss",
      category: "she",
      week: 32,
      description: "Báo cáo một chiếc cờ lê 24mm rơi từ sàn thao tác tầng 2 xuống lối đi nhưng may mắn không trúng người.",
      pText1: "Alex, I heard an incident occurred near Line 3 walkway ten minutes ago. Was anyone injured?",
      pVi1: "Alex, tôi nghe nói có sự việc xảy ra gần lối đi Dây chuyền 3 mười phút trước. Có ai bị thương không?",
      optText1: "No one was injured, sir. It was a serious Near Miss. A 24-millimeter combination wrench slipped from a contractor's hand on the mezzanine floor and landed two meters from an operator.",
      optVi1: "Dạ không ai bị thương thưa anh. Đó là một sự cố Suýt Nguy nghiêm trọng. Một chiếc cờ lê vòng miệng 24mm bị trượt khỏi tay nhà thầu ở sàn lửng và rơi cách người vận hành 2 mét.",
      pText2: "That could have been fatal! What immediate corrective action did you take on site?",
      pVi2: "Việc đó có thể gây chết người đấy! Bạn đã thực hiện biện pháp khắc phục tức thời nào tại hiện trường?",
      optText2: "I immediately barricaded the walkway below with caution tape, stopped the overhead work, and mandated that all contractor tools must have safety wrist lanyards attached.",
      optVi2: "Tôi lập tức chăng dây cảnh báo cô lập lối đi bên dưới, đình chỉ công việc trên cao và yêu cầu toàn bộ dụng cụ nhà thầu bắt buộc phải buộc dây chống rơi vào cổ tay.",
      pEnd: "Outstanding response Alex. Let's document this in the plant SHE portal so all departments learn from this near miss.",
      pEndVi: "Phản ứng xuất sắc Alex. Hãy ghi lại sự việc này lên cổng an toàn của nhà máy để tất cả các bộ phận rút kinh nghiệm.",
      summary: {
        result: "Xử lý sự cố suýt nguy chuyên nghiệp, ngăn chặn tai nạn rơi vật thể trong tương lai.",
        common_mistakes: "Không báo cáo suýt nguy vì nghĩ 'chưa ai bị thương thì thôi'.",
        focus_vocab: ["Near Miss", "mezzanine floor", "barricaded the walkway", "tool safety lanyard"],
        natural_phrasing: "No one was injured. It was a serious Near Miss... We mandated tool safety lanyards."
      }
    },

    // GROUP 8: BÁO CÁO BẤT THƯỜNG HOẶC SỰ CỐ (sc-22, sc-23, sc-24)
    {
      id: "sc-22",
      title: "Tình huống 22: Báo cáo Tiếng ồn Lạ và Rung Động Bất Thường tại Hộp Giảm Tốc",
      group: "Báo cáo bất thường hoặc sự cố",
      category: "technical",
      week: 34,
      description: "Phát hiện tiếng rít kim loại và rung lắc 8.2 mm/s tại hộp số băng tải chuyển quặng.",
      pText1: "Alex, what abnormal condition prompted you to hit the inspection hold button on Conveyor 1?",
      pVi1: "Alex, điều kiện bất thường nào khiến bạn nhấn nút tạm dừng kiểm tra trên Băng tải 1?",
      optText1: "During my round, I detected a high-pitched grinding metallic noise from Gearbox 1. My portable vibration meter showed 8.2 mm/s, well above the 4.5 mm/s ISO alert threshold.",
      optVi1: "Trong ca tuần tra, tôi phát hiện tiếng rít kim loại chói tai từ Hộp số 1. Máy đo rung cầm tay của tôi chỉ 8.2 mm/s, vượt xa ngưỡng cảnh báo ISO 4.5 mm/s.",
      pText2: "Did you take thermal readings on the gearbox casing?",
      pVi2: "Bạn đã đo nhiệt độ trên vỏ hộp số chưa?",
      optText2: "Yes, the infrared thermometer registered 88 degrees Celsius near the input pinion bearing. I recommend switching to standby Conveyor 2 immediately.",
      optVi2: "Dạ rồi, nhiệt kế hồng ngoại ghi nhận 88 độ C gần ổ bi trục bánh răng đầu vào. Tôi khuyến nghị chuyển sang Băng tải dự phòng 2 ngay lập tức.",
      pEnd: "Smart decision to stop early. Running any longer would have destroyed the gear teeth completely.",
      pEndVi: "Quyết định dừng sớm rất thông minh. Chạy thêm nữa là sẽ phá hỏng hoàn toàn các răng bánh răng.",
      summary: {
        result: "Phát hiện hư hỏng hộp số ở giai đoạn sớm, cứu nhà máy khỏi thiệt hại hàng trăm triệu đồng.",
        common_mistakes: "Nghe tiếng kêu nhưng chủ quan để chạy tiếp cho hết ca.",
        focus_vocab: ["grinding metallic noise", "vibration threshold", "infrared thermometer", "pinion bearing"],
        natural_phrasing: "Vibration meter showed 8.2 mm/s, well above the alert threshold."
      }
    },
    {
      id: "sc-23",
      title: "Tình huống 23: Xử lý Sự cố Rò rỉ Dầu Thủy lực Áp cao Máy Ép (Hydraulic Leak Response)",
      group: "Báo cáo bất thường hoặc sự cố",
      category: "technical",
      week: 36,
      description: "Ống mềm thủy lực 210 bar của máy ép bị rò tia dầu nhỏ, xử lý nguy cơ phun áp suất cao.",
      pText1: "Alex, operator reported misting oil near Hydraulic Press 3. How are you handling the situation?",
      pVi1: "Alex, người vận hành báo có sương dầu gần Máy ép thủy lực 3. Bạn đang xử lý tình huống thế nào?",
      optText1: "I pressed the hydraulic pump emergency stop immediately. High-pressure pinhole leaks can inject oil through human skin, which is a life-threatening hazard. Nobody is allowed near the press.",
      optVi1: "Tôi đã nhấn dừng khẩn cấp bơm thủy lực ngay lập tức. Tia dầu áp cao qua lỗ mọt có thể đâm xuyên qua da người gây nguy hiểm tính mạng. Không ai được phép lại gần máy ép.",
      pText2: "Crucial safety awareness! Is the system depressurized now?",
      pVi2: "Nhận thức an toàn cực kỳ chuẩn! Hệ thống đã được xả áp chưa?",
      optText2: "Yes, accumulator dump valve is opened and pressure is zero. We deployed chemical absorbent booms to contain 15 liters of spilled oil from reaching floor drains.",
      optVi2: "Dạ rồi, van xả bình tích áp đã mở và áp suất về 0. Chúng tôi đã rải phao thấm dầu chuyên dụng cô lập 15 lít dầu tràn không cho chảy vào cống thoát sàn.",
      pEnd: "Flawless emergency protocol execution. Replace the burst hose with a genuine 350-bar rated assembly.",
      pEndVi: "Thực hiện quy trình khẩn cấp hoàn hảo. Hãy thay ống vỡ bằng cụm ống chính hãng chịu áp 350 bar.",
      summary: {
        result: "Ngăn ngừa tai nạn đâm xuyên da áp suất cao và bảo vệ môi trường khỏi ô nhiễm dầu.",
        common_mistakes: "Dùng tay sờ tìm điểm rò rỉ áp cao gây hoại tử tay.",
        focus_vocab: ["hydraulic leak", "pinhole injection hazard", "accumulator dump valve", "absorbent boom"],
        natural_phrasing: "High-pressure leaks can inject oil through skin. We depressurized the system immediately."
      }
    },
    {
      id: "sc-24",
      title: "Tình huống 24: Động cơ Quạt Thông gió Bị Quá Nhiệt Nhảy Rơ le Nhiệt (Motor Overheat)",
      group: "Báo cáo bất thường hoặc sự cố",
      category: "technical",
      week: 38,
      description: "Động cơ quạt hút 22 kW bị ngắt điện do rơ le quá tải kích hoạt, kiểm tra nguyên nhân kẹt cơ khí hay mất pha.",
      pText1: "Alex, Exhaust Blower 4 tripped the main thermal overload relay at 3 PM. What are your diagnostic findings?",
      pVi1: "Alex, Quạt hút số 4 bị nhảy rơ le nhiệt quá tải lúc 3h chiều. Kết quả chẩn đoán của bạn là gì?",
      optText1: "I checked motor windings with a Megger: insulation resistance is good at 80 Megohms. However, the fan shaft was extremely hard to rotate by hand, indicating mechanical jamming.",
      optVi1: "Tôi đã đo cuộn dây bằng máy Megger: cách điện tốt ở mức 80 Megohm. Tuy nhiên, trục quạt quay bằng tay cực kỳ nặng, cho thấy có hiện tượng kẹt cơ khí.",
      pText2: "Did you inspect inside the blower housing scroll?",
      pVi2: "Bạn đã mở nắp kiểm tra bên trong buồng xoắn quạt chưa?",
      optText2: "Yes, we opened the inspection port and discovered a piece of plastic packaging wrapped tightly around the impeller hub. We removed the foreign object and the shaft spins freely now.",
      optVi2: "Dạ rồi, chúng tôi mở cửa thăm và phát hiện một mảnh bao bì nhựa quấn chặt vào moay-ơ cánh quạt. Chúng tôi đã gỡ dị vật ra và hiện trục đã quay trơn tru.",
      pEnd: "Great diagnosis separating electrical faults from mechanical jams. Reset the relay and resume testing.",
      pEndVi: "Chẩn đoán rất tốt, phân biệt rõ lỗi điện và kẹt cơ khí. Hãy reset rơ le và chạy thử lại.",
      summary: {
        result: "Tìm đúng nguyên nhân gốc rễ (dị vật kẹt cánh quạt) thay vì vội vàng thay động cơ.",
        common_mistakes: "Chỉ reset rơ le rồi bấm chạy lại ngay làm cháy động cơ.",
        focus_vocab: ["thermal overload relay", "insulation resistance", "mechanical jamming", "impeller hub"],
        natural_phrasing: "Insulation resistance is good. The shaft was hard to rotate due to a jammed object."
      }
    },

    // GROUP 9: HỌP NHÓM VÀ GIẢI THÍCH VẤN ĐỀ (sc-25, sc-26, sc-27)
    {
      id: "sc-25",
      title: "Tình huống 25: Tham gia Cuộc họp An toàn Đầu ca 5 Phút (Daily Toolbox Talk)",
      group: "Họp nhóm và giải thích vấn đề",
      category: "workplace",
      week: 40,
      description: "Trình bày chủ đề an toàn làm việc trong không gian kín trước tổ bảo trì trong buổi họp đầu giờ.",
      pText1: "Alex, today it is your turn to lead our five-minute daily toolbox talk. What topic have you prepared for the team?",
      pVi1: "Alex, hôm nay đến lượt bạn chủ trì cuộc họp an toàn đầu ca 5 phút. Bạn đã chuẩn bị chủ đề gì cho cả đội?",
      optText1: "Good morning team. Today's safety topic is 'Three Golden Rules for Confined Space Entry'. Rule 1: Never enter without a signed entry permit and atmospheric test.",
      optVi1: "Chào buổi sáng cả đội. Chủ đề an toàn hôm nay là '3 Nguyên Tắc Vàng Khi Vào Không Gian Hạn Chế'. Nguyên tắc 1: Tuyệt đối không vào khi chưa có giấy phép và kết quả đo khí.",
      pText2: "Very relevant topic, considering our silo maintenance next week. What are Rules 2 and 3?",
      pVi2: "Chủ đề rất sát thực tế với công việc bảo trì xilô tuần tới. Nguyên tắc 2 và 3 là gì Alex?",
      optText2: "Rule 2: Continuous forced-air ventilation and calibrated gas detector at all times. Rule 3: Dedicated standby watchman outside with emergency retrieval tripod and harness ready.",
      optVi2: "Nguyên tắc 2: Luôn thông gió cưỡng bức liên tục và mở máy đo khí suốt quá trình. Nguyên tắc 3: Luôn có người cảnh giới túc trực bên ngoài với giá ba chân và dây cứu hộ sẵn sàng.",
      pEnd: "Clear, practical, and life-saving guidelines. Let's all sign the toolbox meeting attendance sheet.",
      pEndVi: "Các chỉ dẫn rất rõ ràng, thực tế và cứu sinh mạng. Mời mọi người ký vào bảng điểm danh cuộc họp.",
      summary: {
        result: "Chủ trì cuộc họp Toolbox Talk tự tin, truyền cảm hứng an toàn cho đồng đội.",
        common_mistakes: "Nói chung chung lý thuyết mà không đưa ra 3 nguyên tắc hành động cụ thể.",
        focus_vocab: ["toolbox talk", "confined space entry", "gas detector", "standby watchman"],
        natural_phrasing: "Rule 1: Never enter without a signed permit. Continuous ventilation is mandatory."
      }
    },
    {
      id: "sc-26",
      title: "Tình huống 26: Phân tích Nguyên nhân Gốc rễ Dừng Dây chuyền theo Phương pháp 5 Why",
      group: "Họp nhóm và giải thích vấn đề",
      category: "technical",
      week: 42,
      description: "Tham gia cuộc họp RCA phân tích tại sao động cơ gầu tải bị cháy cuộn dây bằng công cụ 5 Tại sao.",
      pText1: "Welcome team. We are conducting a Root Cause Analysis (RCA) on the Bucket Elevator 2 motor failure. Alex, walk us through the 5-Why chain.",
      pVi1: "Chào cả đội. Chúng ta đang phân tích nguyên nhân gốc rễ (RCA) vụ hỏng động cơ Gầu tải số 2. Alex, hãy trình bày chuỗi 5 Tại sao.",
      optText1: "Why 1: Motor burned out because of severe overload. Why 2: Overload occurred because the elevator chain was jammed with clinker rocks. Why 3: Clinker rocks bypassed because the grizzly screen had a 10-cm tear.",
      optVi1: "Tại sao 1: Động cơ bị cháy do quá tải nặng. Tại sao 2: Quá tải xảy ra do xích gầu bị kẹt đá clinker. Tại sao 3: Đá clinker lọt qua do lưới sàng bị rách một lỗ 10 cm.",
      pText2: "Excellent breakdown so far. What are Why 4 and the root cause Why 5?",
      pVi2: "Phân tích tới đây rất tốt. Còn Tại sao 4 và nguyên nhân gốc Tại sao 5 là gì?",
      optText2: "Why 4: Screen tear was not noticed because weekly visual screen checks were skipped. Why 5 (Root Cause): Preventive maintenance checklist lacked a mandatory sign-off item for screen mesh integrity.",
      optVi2: "Tại sao 4: Vết rách lưới không được phát hiện do bỏ qua kiểm tra trực quan hàng tuần. Tại sao 5 (Gốc rễ): Checklist bảo trì phòng ngừa thiếu mục ký xác nhận bắt buộc về độ nguyên vẹn lưới sàng.",
      pEnd: "Outstanding root cause finding. We will update the PM checklist today to include screen thickness inspection.",
      pEndVi: "Tìm ra nguyên nhân gốc rất xuất sắc. Chúng ta sẽ cập nhật checklist PM ngay hôm nay bao gồm kiểm tra độ dày lưới sàng.",
      summary: {
        result: "Áp dụng phương pháp 5 Why chuẩn xác, biến sự cố thành giải pháp cải tiến hệ thống.",
        common_mistakes: "Dừng lại ở lỗi con người (người thợ) thay vì tìm lỗi quy trình checklist.",
        focus_vocab: ["Root Cause Analysis (RCA)", "5-Why method", "bucket elevator", "mesh integrity"],
        natural_phrasing: "Why 1: Motor burned due to overload... Why 5: Checklist lacked mandatory sign-off."
      }
    },
    {
      id: "sc-27",
      title: "Tình huống 27: Đề xuất Cải tiến 5S Sắp xếp Bảng Treo Dụng cụ Xưởng Cơ khí",
      group: "Họp nhóm và giải thích vấn đề",
      category: "workplace",
      week: 44,
      description: "Đề xuất dự án Kaizen làm bảng shadow board sơn bóng hình dụng cụ để loại bỏ 15 phút tìm đồ mỗi ngày.",
      pText1: "Alex, you submitted a Kaizen 5S proposal for the mechanical workshop tool area. Please explain your idea to the committee.",
      pVi1: "Alex, bạn đã gửi một đề xuất cải tiến Kaizen 5S cho khu vực dụng cụ xưởng cơ khí. Xin mời bạn trình bày ý tưởng trước hội đồng.",
      optText1: "Currently, technicians spend an average of fifteen minutes per shift searching for scattered wrenches. I propose implementing custom shadow boards with color-coded tool silhouettes.",
      optVi1: "Hiện tại, kỹ thuật viên mất trung bình 15 phút mỗi ca để tìm cờ lê bị để lung tung. Tôi đề xuất triển khai bảng bóng mờ (shadow board) với hình sơn bóng dụng cụ phân loại theo màu sắc.",
      pText2: "What measurable benefits and investment costs are you projecting for this 5S improvement?",
      pVi2: "Bạn dự tính những lợi ích đo lường được và chi phí đầu tư cho cải tiến 5S này là bao nhiêu?",
      optText2: "Cost is only about fifty dollars for plywood, hooks, and spray paint. Benefits include saving 90 labor hours annually and immediate visual detection if any tool is missing before line startup.",
      optVi2: "Chi phí chỉ khoảng 50 đô la mua ván ép, móc treo và sơn xịt. Lợi ích tiết kiệm được 90 giờ công mỗi năm và phát hiện trực quan ngay lập tức nếu thiếu dụng cụ trước khi chạy máy.",
      pEnd: "Low cost, high impact idea. Proposal approved with full budget! Start implementation this Friday.",
      pEndVi: "Ý tưởng chi phí thấp nhưng hiệu quả cao. Đề xuất được phê duyệt đầy đủ ngân sách! Triển khai từ Thứ Sáu này nhé.",
      summary: {
        result: "Bảo vệ thành công đề xuất cải tiến Kaizen 5S với số liệu ROI định lượng thuyết phục.",
        common_mistakes: "Đề xuất ý tưởng chung chung mà không tính toán chi phí và giờ công tiết kiệm.",
        focus_vocab: ["Kaizen 5S proposal", "shadow board", "tool silhouette", "visual detection"],
        natural_phrasing: "I propose implementing shadow boards... Cost is fifty dollars, saving 90 hours annually."
      }
    },

    // GROUP 10: GIAO TIẾP VỚI QUẢN LÝ HOẶC NHÀ CUNG CẤP (sc-28, sc-29, sc-30)
    {
      id: "sc-28",
      title: "Tình huống 28: Giải trình với Giám đốc Kỹ thuật về Kế hoạch Dừng Máy Đại tu (Overhaul Briefing)",
      group: "Giao tiếp với quản lý hoặc nhà cung cấp",
      category: "workplace",
      week: 46,
      description: "Báo cáo tiến độ chuẩn bị đại tu lò hơi 3 ngày với Giám đốc Kỹ thuật nhà máy.",
      pText1: "Alex, our annual boiler shutdown starts in three days. As lead maintenance coordinator, are all contractors and spare parts ready?",
      pVi1: "Alex, đợt dừng máy đại tu lò hơi hàng năm bắt đầu sau 3 ngày nữa. Với tư cách điều phối viên bảo trì chính, nhà thầu và phụ tùng đã sẵn sàng chưa?",
      optText1: "Yes Director. All 12 specialized gaskets, safety relief valves, and boiler tube refractory bricks have arrived in warehouse. Contractor safety orientations are 100% completed.",
      optVi1: "Dạ thưa Giám đốc. Toàn bộ 12 bộ gioăng chuyên dụng, van an toàn xả áp và gạch chịu lửa ống lò đã về kho đầy đủ. Huấn luyện an toàn cho nhà thầu đã hoàn tất 100%.",
      pText2: "What is your critical path risk and mitigation plan for meeting the 72-hour target?",
      pVi2: "Rủi ro đường găng tiến độ và kế hoạch giảm thiểu rủi ro của bạn để đạt mục tiêu 72 giờ là gì?",
      optText2: "The critical path is hydrostatic pressure testing. If a leak appears, we have two backup certified welders on standby to make immediate weld repairs without schedule slippage.",
      optVi2: "Đường găng quan trọng nhất là thử áp lực thủy tĩnh. Nếu xuất hiện rò rỉ, chúng tôi đã bố trí sẵn 2 thợ hàn chứng chỉ quốc tế túc trực để sửa chữa ngay mà không làm trễ tiến độ.",
      pEnd: "Extremely thorough contingency planning. You have my full endorsement for the overhaul execution.",
      pEndVi: "Kế hoạch dự phòng cực kỳ chu đáo. Tôi hoàn toàn ủng hộ và phê duyệt kế hoạch đại tu của bạn.",
      summary: {
        result: "Báo cáo cấp quản lý cấp cao đĩnh đạc, nắm chắc đường găng tiến độ và phương án dự phòng.",
        common_mistakes: "Không lường trước rủi ro thử áp và thiếu thợ hàn dự phòng.",
        focus_vocab: ["annual boiler shutdown", "safety relief valve", "critical path", "hydrostatic test"],
        natural_phrasing: "All spare parts have arrived. We have backup welders on standby for immediate repairs."
      }
    },
    {
      id: "sc-29",
      title: "Tình huống 29: Làm việc với Chuyên gia Kỹ thuật của Nhà sản xuất Thiết bị (OEM Vendor)",
      group: "Giao tiếp với quản lý hoặc nhà cung cấp",
      category: "technical",
      week: 48,
      description: "Hợp tác với kỹ sư hãng máy Krones (Đức) để hiệu chuẩn cụm chiết rót tốc độ cao.",
      pText1: "Hello Alex. I am Hans, service engineer from Krones Germany. Today we need to calibrate the electromagnetic flow meters on the filling carousel.",
      pVi1: "Chào Alex. Tôi là Hans, kỹ sư dịch vụ từ Krones Đức. Hôm nay chúng ta cần hiệu chuẩn các lưu lượng kế điện từ trên bàn quay chiết rót.",
      optText1: "Guten Tag Hans! Welcome to our bottling plant. I have already cleaned all 48 filling valves and prepared our calibrated gravimetric test scale.",
      optVi1: "Chào Hans! Chào mừng bạn đến nhà máy chiết chai của chúng tôi. Tôi đã vệ sinh sạch sẽ toàn bộ 48 van chiết và chuẩn bị sẵn cân thử trọng lượng đã hiệu chuẩn.",
      pText2: "Excellent preparation, Alex. Have you connected the laptop interface cable to the Profibus diagnostic port on Panel 2?",
      pVi2: "Chuẩn bị rất tuyệt Alex. Bạn đã cắm cáp giao tiếp máy tính vào cổng chẩn đoán Profibus trên Tủ 2 chưa?",
      optText2: "Yes, communication link is active and PLC baud rate is configured at 1.5 Mbps. We are ready to begin test filling on Valve 1.",
      optVi2: "Dạ rồi, đường truyền thông đang hoạt động và tốc độ baud PLC được cấu hình ở 1.5 Mbps. Chúng ta sẵn sàng bắt đầu chiết thử trên Van 1.",
      pEnd: "Wunderbar! Working with such a competent local technician makes commissioning fast and enjoyable.",
      pEndVi: "Tuyệt vời! Làm việc với một kỹ thuật viên bản địa thành thạo như bạn giúp công tác nghiệm thu nhanh chóng và rất thoải mái.",
      summary: {
        result: "Làm việc chuyên nghiệp với chuyên gia kỹ thuật toàn cầu, sử dụng chuẩn xác thuật ngữ PLC/Profibus.",
        common_mistakes: "Lúng túng không chuẩn bị trước thiết bị kiểm tra làm mất thời gian chuyên gia đắt đỏ.",
        focus_vocab: ["electromagnetic flow meter", "filling carousel", "gravimetric test scale", "diagnostic port"],
        natural_phrasing: "Communication link is active and baud rate is configured. We are ready to begin."
      }
    },
    {
      id: "sc-30",
      title: "Tình huống 30: Khiếu nại và Yêu cầu Đổi Phụ tùng Sai Quy cách với Nhà Cung cấp (Vendor Claim)",
      group: "Giao tiếp với quản lý hoặc nhà cung cấp",
      category: "workplace",
      week: 50,
      description: "Phát hiện lô phớt chặn dầu 10 chiếc giao sai kích thước trục (giao 45mm thay vì 48mm), gọi điện khiếu nại nhà cung cấp.",
      pText1: "Good afternoon, Industrial Supplies Hotline. How may I help you with your recent delivery?",
      pVi1: "Chào buổi chiều, Đường dây nóng Vật tư Công nghiệp xin nghe. Tôi có thể hỗ trợ gì cho đơn hàng gần đây của quý khách?",
      optText1: "Good afternoon. This is Alex from English Hub Plant. We received Order PO-9912 today, but your shipment contains oil seals with a 45-millimeter inner diameter instead of the 48-millimeter specified in our PO.",
      optVi1: "Chào buổi chiều. Tôi là Alex từ Nhà máy English Hub. Hôm nay chúng tôi nhận Đơn hàng PO-9912, nhưng lô hàng lại chứa phớt dầu đường kính trong 45mm thay vì 48mm như đã nêu rõ trong PO.",
      pText2: "I apologize for the warehouse picking discrepancy. Do you have urgent production downtime dependent on these seals?",
      pVi2: "Tôi rất xin lỗi vì sự nhầm lẫn khi nhặt hàng tại kho. Quý công ty có đang bị dừng máy khẩn cấp chờ những chiếc phớt này không?",
      optText2: "Yes, our main pump rebuild is waiting. We need your courier to deliver ten correct 48-millimeter Viton seals by 9 AM tomorrow, and we will return the wrong items.",
      optVi2: "Đúng vậy, công tác đại tu máy bơm chính đang phải chờ. Chúng tôi yêu cầu quý công ty chuyển phát nhanh 10 chiếc phớt Viton 48mm đúng chuẩn trước 9h sáng mai, và chúng tôi sẽ hoàn trả lô hàng sai.",
      pEnd: "Understood. I am dispatching a priority courier with the correct Viton 48-mm seals right now. Our sincere apologies.",
      pEndVi: "Đã rõ. Tôi đang cho chuyển phát hỏa tốc lô phớt Viton 48mm đúng chuẩn ngay bây giờ. Thành thật xin lỗi quý công ty.",
      summary: {
        result: "Khiếu nại cứng rắn, lịch sự, giải quyết xong phụ tùng thay thế hỏa tốc trong 24 giờ.",
        common_mistakes: "Nổi nóng quát tháo vô ích hoặc không nêu số PO và kích thước mm cụ thể.",
        focus_vocab: ["purchase order (PO)", "picking discrepancy", "inner diameter", "priority courier"],
        natural_phrasing: "Your shipment contains 45-mm seals instead of the 48-mm specified in our PO."
      }
    }
  ];

  // Convert remaining scenarios into full node structure
  remainingScenarios.forEach(s => {
    scenarios.push({
      id: s.id,
      title: s.title,
      group: s.group,
      category: s.category,
      week: s.week,
      description: s.description,
      initial_node: "step_1",
      nodes: {
        step_1: {
          speaker: s.id.startsWith("sc-2") && parseInt(s.id.slice(3)) >= 28 ? "Representative" : "Supervisor / Partner",
          text: s.pText1,
          text_vi: s.pVi1,
          options: [
            {
              text: s.optText1,
              text_vi: s.optVi1,
              feedback: "RẤT CHUẨN MỰC! Phản xạ kỹ thuật chính xác và tự tin.",
              is_safe: true,
              next_node: "step_2"
            },
            {
              text: "I do not know, everything is confusing.",
              text_vi: "Tôi không biết, mọi thứ rối tinh rối mù.",
              feedback: "Thiếu tự tin và chưa nắm rõ thông tin công việc.",
              is_safe: false,
              next_node: "step_1"
            }
          ]
        },
        step_2: {
          speaker: s.id.startsWith("sc-2") && parseInt(s.id.slice(3)) >= 28 ? "Representative" : "Supervisor / Partner",
          text: s.pText2,
          text_vi: s.pVi2,
          options: [
            {
              text: s.optText2,
              text_vi: s.optVi2,
              feedback: "XUẤT SẮC! Báo cáo thông số và cam kết hành động rõ ràng.",
              is_safe: true,
              next_node: "success_end"
            }
          ]
        },
        success_end: {
          speaker: s.id.startsWith("sc-2") && parseInt(s.id.slice(3)) >= 28 ? "Representative" : "Supervisor / Partner",
          text: s.pEnd,
          text_vi: s.pEndVi,
          is_terminal: true,
          summary: s.summary
        }
      }
    });
  });

  return scenarios;
};
