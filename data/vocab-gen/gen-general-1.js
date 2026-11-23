// Generator for General English Vocabulary (~950+ items)
const fs = require('fs');
const path = require('path');

// Helper to construct entries
const items = [];

function item(en, vi, pos, ipa, example, example_vi, collocation, topic, level, first_lesson, notes = "") {
  items.push({
    en, vi, pos, ipa, example, example_vi, collocation, topic,
    category: "general",
    level, first_lesson, notes
  });
}

// 1. Greetings & Politeness (35)
item("hello", "xin chào", "phrase", "/həˈləʊ/", "Hello, my name is Alex.", "Xin chào, tên tôi là Alex.", "say hello to someone", "greetings", "A0", "D01", "Lời chào phổ biến trong mọi hoàn cảnh.");
item("hi", "chào (thân mật)", "phrase", "/haɪ/", "Hi Alex, how are you?", "Chào Alex, bạn khỏe không?", "say hi", "greetings", "A0", "D01", "Dùng với đồng nghiệp thân thiết hoặc bạn bè.");
item("good morning", "chào buổi sáng", "phrase", "/ɡʊd ˈmɔːnɪŋ/", "Good morning, everyone.", "Chào buổi sáng mọi người.", "wish someone good morning", "greetings", "A0", "D01", "Dùng trước 12 giờ trưa.");
item("good afternoon", "chào buổi chiều", "phrase", "/ɡʊd ˌɑːftəˈnuːn/", "Good afternoon, Mr. David.", "Chào buổi chiều, ông David.", "say good afternoon", "greetings", "A0", "D01", "Dùng từ sau 12h trưa đến chiều tối.");
item("good evening", "chào buổi tối", "phrase", "/ɡʊd ˈiːvnɪŋ/", "Good evening, team.", "Chào buổi tối cả đội.", "have a good evening", "greetings", "A0", "D01", "Dùng khi gặp gỡ vào buổi tối.");
item("goodbye", "tạm biệt", "phrase", "/ɡʊdˈbaɪ/", "Goodbye, see you tomorrow.", "Tạm biệt, hẹn gặp lại ngày mai.", "say goodbye", "greetings", "A0", "D01", "Lời chào tạm biệt chuẩn mực.");
item("bye", "tạm biệt (ngắn gọn)", "phrase", "/baɪ/", "Bye, have a great day!", "Tạm biệt, chúc bạn một ngày tuyệt vời!", "bye for now", "greetings", "A0", "D01", "Thân mật hơn goodbye.");
item("see you later", "hẹn gặp lại sau", "phrase", "/siː juː ˈleɪtə/", "See you later at the meeting.", "Hẹn gặp lại bạn sau ở cuộc họp nhé.", "see you later", "greetings", "A0", "D01", "Thường dùng khi sẽ gặp lại trong ngày.");
item("see you tomorrow", "hẹn gặp lại ngày mai", "phrase", "/siː juː təˈmɒrəʊ/", "See you tomorrow morning.", "Hẹn gặp lại bạn vào sáng mai.", "see you tomorrow", "greetings", "A0", "D01", "Chào cuối ca làm việc.");
item("see you soon", "hẹn sớm gặp lại", "phrase", "/siː juː suːn/", "Take care and see you soon.", "Bảo trọng và hẹn sớm gặp lại nhé.", "see you soon", "greetings", "A0", "D01", "Chào tạm biệt thân mật.");
item("have a nice day", "chúc một ngày tốt lành", "phrase", "/hæv ə naɪs deɪ/", "Thank you, have a nice day!", "Cảm ơn, chúc bạn một ngày tốt lành!", "have a nice day", "greetings", "A0", "D01", "Lời chúc lịch sự phổ biến.");
item("have a good weekend", "chúc cuối tuần vui vẻ", "phrase", "/hæv ə ɡʊd ˈwiːk.end/", "Have a good weekend, Alex.", "Chúc Alex cuối tuần vui vẻ nhé.", "have a good weekend", "greetings", "A0", "D01", "Chào nhau vào chiều thứ Sáu.");
item("take care", "bảo trọng / giữ gìn sức khỏe", "phrase", "/teɪk keər/", "Take care on your way home.", "Đi đường cẩn thận nhé.", "take care of yourself", "greetings", "A0", "D01", "Lời chúc ấm áp khi chia tay.");
item("please", "làm ơn / xin vui lòng", "adv", "/pliːz/", "Please sit down.", "Xin vui lòng ngồi xuống.", "yes, please", "greetings", "A0", "D01", "Thêm vào đầu hoặc cuối câu để thể hiện phép lịch sự.");
item("thank you", "cảm ơn bạn", "phrase", "/ˈθæŋk juː/", "Thank you for your support.", "Cảm ơn bạn đã hỗ trợ.", "thank you very much", "greetings", "A0", "D01", "Âm /θ/ đặt đầu lưỡi giữa hai hàm răng.");
item("thanks", "cảm ơn (thân mật)", "phrase", "/θæŋks/", "Thanks for the cup of tea.", "Cảm ơn vì tách trà nhé.", "thanks a lot", "greetings", "A0", "D01", "Dùng trong ngữ cảnh không quá trang trọng.");
item("you are welcome", "không có chi / rất hân hạnh", "phrase", "/jʊər ˈwelkəm/", "You are welcome. Anytime!", "Không có chi. Bất cứ lúc nào nhé!", "you are always welcome", "greetings", "A0", "D01", "Lời đáp chuẩn sau khi được cảm ơn.");
item("no problem", "không có vấn đề gì / không sao đâu", "phrase", "/nəʊ ˈprɒbləm/", "No problem, I can help you.", "Không sao cả, tôi có thể giúp bạn.", "no problem at all", "greetings", "A0", "D01", "Cách đáp lại lời cảm ơn hoặc xin lỗi rất tự nhiên.");
item("excuse me", "xin lỗi (để gây chú ý / hỏi chuyện)", "phrase", "/ɪkˈskjuːz miː/", "Excuse me, do you have the key?", "Xin lỗi, bạn có giữ chìa khóa không?", "excuse me for asking", "greetings", "A0", "D02", "Dùng khi bắt đầu làm phiền hoặc hỏi người khác.");
item("sorry", "xin lỗi (khi mắc lỗi / bày tỏ tiếc nuối)", "adj", "/ˈsɒri/", "I am sorry for the delay.", "Tôi xin lỗi vì sự chậm trễ.", "feel sorry about", "greetings", "A0", "D02", "Dùng khi nhận lỗi thật lòng.");
item("pardon", "xin thứ lỗi / xin nhắc lại", "phrase", "/ˈpɑːdn/", "Pardon? Could you say that again?", "Xin lỗi? Bạn có thể nói lại điều đó không?", "beg your pardon", "greetings", "A0", "D02", "Lịch sự khi nghe chưa rõ câu nói.");
item("nice to meet you", "rất vui được gặp bạn", "phrase", "/naɪs tuː miːt juː/", "Nice to meet you, Mr. Brown.", "Rất vui được gặp bạn, ông Brown.", "pleased to meet you", "greetings", "A0", "D02", "Chỉ dùng khi gặp lần đầu tiên.");
item("nice to see you again", "rất vui được gặp lại bạn", "phrase", "/naɪs tuː siː juː əˈɡen/", "It is nice to see you again.", "Rất vui được gặp lại bạn.", "nice to see you", "greetings", "A0", "D02", "Dùng khi gặp người đã từng quen trước đó.");
item("how are you", "bạn khỏe không?", "phrase", "/haʊ ɑː juː/", "How are you today?", "Hôm nay bạn khỏe không?", "how are you doing", "greetings", "A0", "D02", "Câu hỏi chào đầu ngày.");
item("how is it going", "mọi việc thế nào rồi?", "phrase", "/haʊ ɪz ɪt ˈɡəʊɪŋ/", "How is it going with the new machine?", "Mọi việc với cỗ máy mới thế nào rồi?", "how is it going", "greetings", "A0", "D02", "Câu hỏi thăm tự nhiên hằng ngày.");
item("fine", "khỏe / ổn", "adj", "/faɪn/", "I am fine, thank you.", "Tôi khỏe, cảm ơn bạn.", "feel fine", "greetings", "A0", "D02", "Câu trả lời phổ biến.");
item("good", "tốt / khỏe", "adj", "/ɡʊd/", "I am good today.", "Hôm nay tôi thấy ổn.", "feel good", "greetings", "A0", "D02", "Trả lời tự nhiên thay cho fine.");
item("great", "rất tuyệt", "adj", "/ɡreɪt/", "Everything is great, thank you.", "Mọi thứ rất tuyệt vời, cảm ơn bạn.", "do great", "greetings", "A0", "D02", "Năng lượng tích cực hơn good.");
item("not bad", "không tệ / tạm ổn", "phrase", "/nɒt bæd/", "Not bad, just busy as usual.", "Không tệ, chỉ là bận như thường lệ thôi.", "not bad at all", "greetings", "A0", "D02", "Trả lời trung tính thường gặp.");
item("tired", "mệt mỏi", "adj", "/ˈtaɪəd/", "I feel a bit tired today.", "Hôm nay tôi thấy hơi mệt.", "look tired", "greetings", "A0", "D02", "Âm kết thúc có âm /d/ nhẹ.");
item("welcome", "chào đón", "v", "/ˈwelkəm/", "Welcome to our plant.", "Chào mừng bạn đến với nhà máy của chúng tôi.", "warm welcome", "greetings", "A0", "D02", "Dùng đón khách hoặc nhân viên mới.");
item("congratulations", "chúc mừng", "noun", "/kənˌɡrætʃ.uˈleɪ.ʃənz/", "Congratulations on passing the test!", "Chúc mừng bạn đã vượt qua bài kiểm tra!", "offer congratulations", "greetings", "A1", "D03", "Thường có số nhiều 's'.");
item("cheers", "nâng ly / cảm ơn (thân mật)", "phrase", "/tʃɪəz/", "Cheers! Thanks for the ride.", "Cảm ơn nhé! Cảm ơn đã cho mình đi nhờ xe.", "cheers mate", "greetings", "A1", "D03", "Phổ biến trong tiếng Anh Anh / Úc.");
item("bless you", "chúc sức khỏe (khi ai đó hắt hơi)", "phrase", "/bles juː/", "Bless you! Do you need a tissue?", "Chúc sức khỏe nhé! Bạn có cần khăn giấy không?", "God bless you", "greetings", "A1", "D03", "Phép lịch sự khi thấy người khác hắt hơi.");
item("good luck", "chúc may mắn", "phrase", "/ɡʊd lʌk/", "Good luck with your interview.", "Chúc bạn may mắn trong buổi phỏng vấn nhé.", "wish good luck", "greetings", "A1", "D03", "Động viên người khác trước thử thách.");

// 2. Personal Information & Identity (35)
item("name", "tên", "noun", "/neɪm/", "What is your name?", "Tên của bạn là gì?", "first name / full name", "identity", "A0", "D01", "Danh từ cơ bản.");
item("first name", "tên gọi (tên chính)", "noun", "/ˈfɜːst neɪm/", "My first name is Nam.", "Tên chính của tôi là Nam.", "enter first name", "identity", "A0", "D01", "Trong mẫu đơn tiếng Anh.");
item("last name", "họ", "noun", "/ˈlɑːst neɪm/", "His last name is Nguyen.", "Họ của anh ấy là Nguyễn.", "family name / surname", "identity", "A0", "D01", "Còn gọi là surname hoặc family name.");
item("full name", "họ và tên đầy đủ", "noun", "/ˌfʊl ˈneɪm/", "Please write your full name here.", "Xin vui lòng viết họ tên đầy đủ ở đây.", "state your full name", "identity", "A0", "D01", "Dùng trong giấy tờ, thủ tục.");
item("nickname", "biệt danh / tên gọi thân mật", "noun", "/ˈnɪkneɪm/", "My friends call me by my nickname.", "Bạn bè thường gọi tôi bằng biệt danh.", "have a nickname", "identity", "A1", "D01", "Tên gọi ở nhà hoặc nơi làm việc.");
item("age", "tuổi", "noun", "/eɪdʒ/", "He is 28 years of age.", "Anh ấy 28 tuổi.", "at the age of", "identity", "A0", "D03", "Hỏi tuổi: How old are you?");
item("year", "năm / tuổi", "noun", "/jɪər/", "I am 30 years old.", "Tôi 30 tuổi.", "years old", "identity", "A0", "D03", "Phát âm bắt đầu bằng bán nguyên âm /j/.");
item("gender", "giới tính", "noun", "/ˈdʒendə/", "Please indicate your gender.", "Xin vui lòng ghi rõ giới tính.", "gender identity", "identity", "A1", "D03", "Trong các tờ khai thông tin.");
item("male", "nam", "noun", "/meɪl/", "Mark 'M' for male.", "Đánh dấu 'M' cho nam.", "male employee", "identity", "A0", "D03", "Ký hiệu 'M' trong hồ sơ.");
item("female", "nữ", "noun", "/ˈfiːmeɪl/", "Mark 'F' for female.", "Đánh dấu 'F' cho nữ.", "female applicant", "identity", "A0", "D03", "Ký hiệu 'F' trong hồ sơ.");
item("date of birth", "ngày sinh", "noun", "/deɪt əv bɜːθ/", "My date of birth is May 12, 1995.", "Ngày sinh của tôi là ngày 12 tháng 5 năm 1995.", "enter date of birth (DOB)", "identity", "A0", "D03", "Viết tắt thường gặp là DOB.");
item("place of birth", "nơi sinh", "noun", "/pleɪs əv bɜːθ/", "His place of birth is Da Nang.", "Nơi sinh của anh ấy là Đà Nẵng.", "city of birth", "identity", "A1", "D03", "Thường hỏi thành phố hoặc tỉnh.");
item("nationality", "quốc tịch", "noun", "/ˌnæʃ.ənˈæl.ə.ti/", "My nationality is Vietnamese.", "Quốc tịch của tôi là Việt Nam.", "dual nationality", "identity", "A1", "D03", "Trọng âm rơi vào âm tiết thứ 3.");
item("country", "quốc gia / đất nước", "noun", "/ˈkʌn.tri/", "Vietnam is a developing country.", "Việt Nam là một quốc gia đang phát triển.", "home country", "identity", "A0", "D03", "Âm 'ou' phát âm là /ʌ/.");
item("hometown", "quê quán", "noun", "/ˈhəʊm.taʊn/", "My hometown is Hai Phong.", "Quê tôi ở Hải Phòng.", "visit hometown", "identity", "A0", "D03", "Nơi sinh ra và lớn lên.");
item("address", "địa chỉ", "noun", "/əˈdres/", "What is your current address?", "Địa chỉ hiện tại của bạn là gì?", "home address / email address", "identity", "A0", "D03", "Trọng âm rơi vào âm tiết 2.");
item("phone number", "số điện thoại", "noun", "/fəʊn ˈnʌmbə/", "Can I have your phone number?", "Tôi có thể xin số điện thoại của bạn không?", "mobile phone number", "identity", "A0", "D03", "Đọc từng chữ số một.");
item("email", "thư điện tử", "noun", "/ˈiːmeɪl/", "Please send me your email address.", "Xin hãy gửi địa chỉ email của bạn cho tôi.", "check email / send email", "identity", "A0", "D03", "Đọc rõ âm đuôi /l/.");
item("job", "công việc / nghề nghiệp", "noun", "/dʒɒb/", "What is your job?", "Công việc của bạn là gì?", "full-time job", "identity", "A0", "D02", "Âm đầu /dʒ/ bật hơi tròn môi.");
item("occupation", "nghề nghiệp (chính thức)", "noun", "/ˌɒk.jəˈpeɪ.ʃən/", "Write your occupation on the form.", "Hãy ghi nghề nghiệp của bạn vào đơn.", "current occupation", "identity", "A1", "D02", "Trang trọng hơn job.");
item("profession", "chuyên môn / nghề chuyên nghiệp", "noun", "/prəˈfeʃ.ən/", "Engineering is a respected profession.", "Kỹ thuật là một nghề nghiệp được tôn trọng.", "by profession", "identity", "A2", "D02", "Ám chỉ ngành nghề có bằng cấp, đào tạo.");
item("worker", "công nhân / người lao động", "noun", "/ˈwɜːkə/", "He is a factory worker.", "Anh ấy là một công nhân nhà máy.", "production worker", "identity", "A0", "D02", "Người làm việc trực tiếp.");
item("employee", "nhân viên / người làm công", "noun", "/ɪmˈplɔɪ.iː/", "The company has 500 employees.", "Công ty có 500 nhân viên.", "new employee", "identity", "A1", "D02", "Trọng âm thường ở âm cuối /iː/.");
item("employer", "người sử dụng lao động / chủ doanh nghiệp", "noun", "/ɪmˈplɔɪ.ər/", "He is a fair employer.", "Ông ấy là một người chủ công bằng.", "prospective employer", "identity", "A2", "D02", "Phân biệt với employee.");
item("technician", "kỹ thuật viên", "noun", "/tekˈnɪʃ.ən/", "The technician inspects the motor.", "Kỹ thuật viên đang kiểm tra động cơ.", "maintenance technician", "identity", "A0", "D02", "Người phụ trách thao tác kỹ thuật.");
item("engineer", "kỹ sư", "noun", "/ˌen.dʒɪˈnɪər/", "She is an electrical engineer.", "Cô ấy là một kỹ sư điện.", "mechanical engineer", "identity", "A0", "D02", "Trọng âm rơi vào âm cuối.");
item("supervisor", "người giám sát / tổ trưởng", "noun", "/ˈsuː.pə.vaɪ.zər/", "Report this incident to your supervisor.", "Hãy báo cáo sự cố này cho người giám sát của bạn.", "immediate supervisor", "identity", "A1", "D02", "Người quản lý trực tiếp ca làm.");
item("manager", "quản lý / trưởng phòng", "noun", "/ˈmæn.ɪ.dʒər/", "The plant manager will visit today.", "Trưởng nhà máy sẽ đến thăm hôm nay.", "project manager", "identity", "A1", "D02", "Trọng âm rơi vào âm đầu.");
item("student", "học sinh / sinh viên", "noun", "/ˈstjuː.dənt/", "I am an English student.", "Tôi là một người học tiếng Anh.", "university student", "identity", "A0", "D02", "Âm đầu /stj/ hoặc /stuː/.");
item("marital status", "tình trạng hôn nhân", "noun", "/ˌmær.ɪ.təl ˈsteɪ.təs/", "What is your marital status?", "Tình trạng hôn nhân của bạn là gì?", "check marital status", "identity", "A1", "D03", "Mục thông dụng trong hồ sơ nhân sự.");
item("single", "độc thân", "adj", "/ˈsɪŋ.ɡəl/", "He is currently single.", "Hiện tại anh ấy vẫn còn độc thân.", "single person", "identity", "A0", "D03", "Chưa kết hôn.");
item("married", "đã kết hôn", "adj", "/ˈmær.id/", "She has been married for five years.", "Cô ấy đã kết hôn được 5 năm.", "happily married", "identity", "A0", "D03", "Trọng âm rơi vào âm đầu.");
item("id card", "thẻ căn cước / thẻ căn cước công dân", "noun", "/ˌaɪˈdiː kɑːd/", "Please show your ID card at the gate.", "Xin vui lòng xuất trình thẻ căn cước ở cổng.", "national ID card", "identity", "A0", "D03", "ID là viết tắt của Identification.");
item("passport", "hộ chiếu", "noun", "/ˈpɑːs.pɔːt/", "Keep your passport in a safe place.", "Hãy cất hộ chiếu ở nơi an toàn.", "valid passport", "identity", "A1", "D03", "Giấy tờ đi lại quốc tế.");
item("signature", "chữ ký", "noun", "/ˈsɪɡ.nə.tʃər/", "Your signature is required here.", "Cần có chữ ký của bạn ở đây.", "put your signature", "identity", "A1", "D03", "Âm 'g' đọc là /ɡ/ rõ ràng.");

// Let's write the module export
const outPath = path.join(__dirname, 'gen-general.js');
console.log("General vocab part 1 count:", items.length);
module.exports = items;
