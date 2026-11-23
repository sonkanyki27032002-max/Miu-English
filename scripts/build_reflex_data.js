// Script to generate comprehensive Reflex & Conversation Arena Scenarios (105 Quick Drills + 30 Role-plays + 12 Shadowing)
const fs = require('fs');
const path = require('path');

// 1. Build 105 Quick Response Drills
const quickDrills = [];

// Helper to push drill
function addDrill(id, level, category, week, time_limit, prompt_en, prompt_vi, model_answers, keywords, focus_vocab, tip) {
  quickDrills.push({
    id,
    level,
    category,
    week,
    time_limit_seconds: time_limit,
    prompt_en,
    prompt_vi,
    model_answers,
    keywords,
    focus_vocab,
    tip
  });
}

// ----------------- BEGINNER (qr-01 to qr-25) -----------------
addDrill("qr-01", "beginner", "general", 1, 5, "Good morning! How are you doing today?", "Chào buổi sáng! Hôm nay bạn thế nào?",
  ["Good morning! I am doing great, thank you.", "I am good, thanks. How about you?", "Good morning. Ready for work!"],
  ["good", "great", "fine", "ready", "thank", "you"], "Greeting / Be: I am...", "Chào lại lịch sự và dùng câu ngắn rõ ràng.");

addDrill("qr-02", "beginner", "general", 1, 5, "What is your name?", "Tên của bạn là gì?",
  ["My name is Nam.", "I am Alex Tran.", "My name is Minh. Nice to meet you."],
  ["name", "is", "am"], "My name is [Name]", "Nói rõ tên hoặc dùng 'I am...'");

addDrill("qr-03", "beginner", "general", 1, 5, "What do you do?", "Bạn làm nghề gì?",
  ["I am a maintenance technician.", "I am an electrical engineer.", "I am a machine operator."],
  ["technician", "engineer", "operator", "am", "worker"], "I am a/an [Job]", "Dùng mạo từ 'a' hoặc 'an' trước chức danh.");

addDrill("qr-04", "beginner", "general", 2, 5, "Where are you from?", "Bạn đến từ đâu?",
  ["I am from Da Nang, Vietnam.", "I come from Hanoi.", "I am from Vietnam."],
  ["from", "vietnam", "hanoi", "danang", "come"], "I am from [Place]", "Nêu tên thành phố hoặc quốc gia.");

addDrill("qr-05", "beginner", "workplace", 2, 5, "Are you ready to work?", "Bạn đã sẵn sàng làm việc chưa?",
  ["Yes, I am ready.", "Yes, all set for the shift.", "Yes, let's start."],
  ["yes", "ready", "am", "start"], "Yes/No with Be: Yes, I am.", "Trả lời khẳng định nhanh: 'Yes, I am ready.'");

addDrill("qr-06", "beginner", "workplace", 3, 5, "Could you repeat that, please?", "Bạn có thể nhắc lại câu đó được không?",
  ["Sure, I said the machine is running safely.", "Of course. Let me repeat it.", "Yes, no problem."],
  ["sure", "repeat", "course", "said", "yes"], "Polite response: Sure / Of course", "Phản hồi lịch sự và lặp lại thông tin quan trọng.");

addDrill("qr-07", "beginner", "technical", 3, 5, "What is this tool called in English?", "Dụng cụ này tiếng Anh gọi là gì?",
  ["It is an adjustable wrench.", "This is a digital multimeter.", "It is a flathead screwdriver."],
  ["is", "wrench", "screwdriver", "multimeter", "tool", "it"], "This is a/an [Tool name]", "Gọi đúng tên dụng cụ kỹ thuật.");

addDrill("qr-08", "beginner", "workplace", 3, 5, "Where is your hard hat?", "Mũ bảo hộ của bạn ở đâu?",
  ["It is in my locker.", "I am wearing it right now.", "It is on the workbench."],
  ["in", "on", "wearing", "locker", "workbench", "hat"], "Preposition: in / on / under", "Nêu nhanh vị trí bằng giới từ in/on.");

addDrill("qr-09", "beginner", "workplace", 4, 5, "What time do you start work?", "Mấy giờ bạn bắt đầu làm việc?",
  ["I start work at seven AM.", "My shift begins at eight o'clock.", "I start at 7:30 AM."],
  ["start", "at", "seven", "eight", "shift", "am"], "At + Time: at 7 AM", "Dùng giới từ 'at' trước giờ giấc.");

addDrill("qr-10", "beginner", "general", 4, 5, "Nice to meet you!", "Rất vui được gặp bạn!",
  ["Nice to meet you too!", "Pleasure to meet you.", "Glad to meet you as well."],
  ["nice", "meet", "you", "too", "pleasure"], "Response: Nice to meet you too!", "Thêm 'too' vào cuối để đáp lại.");

addDrill("qr-11", "beginner", "workplace", 4, 5, "Who is your shift supervisor?", "Ai là người giám sát ca của bạn?",
  ["Mr. David is my supervisor.", "My supervisor is Mr. Hung.", "It is Mr. Alex."],
  ["is", "supervisor", "mr", "david", "hung"], "Subject + is + Name", "Nêu tên kèm chức danh Mr./Ms.");

addDrill("qr-12", "beginner", "technical", 5, 5, "Is the machine running or stopped?", "Cỗ máy đang chạy hay đang dừng?",
  ["The machine is running smoothly.", "It is stopped for inspection.", "It is running normally."],
  ["running", "stopped", "is", "machine", "normal"], "State: running / stopped", "Nêu rõ trạng thái vận hành.");

addDrill("qr-13", "beginner", "general", 5, 5, "How do you spell your last name?", "Bạn đánh vần họ của bạn như thế nào?",
  ["It is N-G-U-Y-E-N.", "It is T-R-A-N.", "L-E, Le."],
  ["is", "it", "spelled"], "Alphabet spelling", "Đánh vần từng chữ cái rõ ràng.");

addDrill("qr-14", "beginner", "workplace", 5, 5, "Which shift are you on this week?", "Tuần này bạn làm ca nào?",
  ["I am on Shift 1 (morning shift).", "I work on Shift 2 this week.", "I am on the night shift."],
  ["shift", "morning", "night", "one", "two", "on"], "On Shift [Number]", "Dùng giới từ 'on' + Shift.");

addDrill("qr-15", "beginner", "technical", 6, 5, "Is this pump safe to use?", "Chiếc máy bơm này có an toàn để sử dụng không?",
  ["Yes, it is completely safe.", "No, it is under maintenance.", "Yes, it is inspected and safe."],
  ["yes", "safe", "no", "maintenance", "is"], "Safe / Unsafe", "Trả lời dứt khoát về độ an toàn.");

addDrill("qr-16", "beginner", "workplace", 6, 5, "Where is the emergency exit?", "Lối thoát hiểm khẩn cấp ở đâu?",
  ["It is next to the main gate.", "Turn left, it is at the end of the corridor.", "It is on the right side."],
  ["exit", "next", "left", "right", "door", "gate"], "Location description", "Chỉ hướng đi cụ thể.");

addDrill("qr-17", "beginner", "technical", 6, 5, "What color is the warning sign?", "Biển cảnh báo màu gì?",
  ["It is yellow with black text.", "The sign is red.", "It is bright orange."],
  ["yellow", "red", "color", "sign", "orange"], "Colors: yellow, red, orange", "Nêu màu sắc chính xác.");

addDrill("qr-18", "beginner", "general", 7, 5, "What day is today?", "Hôm nay là thứ mấy?",
  ["Today is Monday.", "It is Wednesday today.", "Today is Friday."],
  ["today", "is", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], "Days of the week", "Nói đúng thứ trong tuần.");

addDrill("qr-19", "beginner", "workplace", 7, 5, "Do you have your safety glasses?", "Bạn có mang kính bảo hộ không?",
  ["Yes, I have them on.", "Yes, they are right here.", "Yes, I am wearing them."],
  ["yes", "have", "wearing", "glasses"], "Have / Wear", "Khẳng định đã trang bị kính.");

addDrill("qr-20", "beginner", "technical", 7, 5, "How many bolts are there on this cover?", "Có bao nhiêu bu-lông trên nắp đậy này?",
  ["There are four bolts.", "There are six bolts.", "There are eight bolts on it."],
  ["there", "are", "bolts", "four", "six", "eight"], "There are + Number", "Đếm số lượng số đếm chính xác.");

addDrill("qr-21", "beginner", "general", 8, 5, "Can you speak more slowly, please?", "Bạn có thể nói chậm hơn một chút được không?",
  ["Yes, of course. I will speak slowly.", "Sure, no problem at all.", "Certainly. Let me slow down."],
  ["yes", "sure", "slowly", "speak", "course"], "Polite agreement", "Đồng ý điều chỉnh tốc độ nói.");

addDrill("qr-22", "beginner", "technical", 8, 5, "Is the power switch on or off?", "Công tắc nguồn đang bật hay tắt?",
  ["The power switch is OFF.", "It is currently ON.", "It is switched OFF for safety."],
  ["switch", "on", "off", "power", "is"], "State: on / off", "Khẳng định rõ ràng ON hoặc OFF.");

addDrill("qr-23", "beginner", "workplace", 8, 5, "Where can I wash my hands?", "Tôi có thể rửa tay ở đâu?",
  ["The washroom is down the hall on the left.", "The sink is right behind the workshop.", "Over there, next to the breakroom."],
  ["washroom", "sink", "left", "behind", "there"], "Directions: left / right / behind", "Chỉ vị trí bồn rửa tay.");

addDrill("qr-24", "beginner", "general", 8, 5, "Have a great shift!", "Chúc một ca làm việc tuyệt vời nhé!",
  ["Thank you! You too.", "Thanks, have a safe shift as well!", "Thank you very much."],
  ["thank", "you", "too", "safe", "thanks"], "Social closing", "Cảm ơn và chúc lại.");

addDrill("qr-25", "beginner", "workplace", 8, 5, "Is anyone working inside Tank 3?", "Có ai đang làm việc bên trong Bồn số 3 không?",
  ["No, nobody is inside.", "Yes, two technicians are working under permit.", "No, it is locked out."],
  ["no", "yes", "inside", "nobody", "working", "technician"], "Confirmation of confined space", "Xác nhận ngay có người hay không.");

// ----------------- ELEMENTARY (qr-26 to qr-50) -----------------
addDrill("qr-26", "elementary", "workplace", 9, 8, "What do you do first when you arrive at the plant?", "Bạn làm gì đầu tiên khi đến nhà máy?",
  ["First, I clock in and put on all required PPE.", "I attend the five-minute safety briefing first.", "I inspect my personal locker and get my tools."],
  ["first", "clock", "ppe", "briefing", "safety", "put"], "First, I [action]...", "Dùng từ nối thời gian 'First'.");

addDrill("qr-27", "elementary", "technical", 9, 8, "Where is the 19-millimeter socket wrench?", "Cái cờ lê đầu tuýp 19 mm ở đâu?",
  ["It is inside the top drawer of the red toolbox.", "Minh is using it at Line 2 right now.", "It is hanging on the tool board on shelf B."],
  ["in", "toolbox", "drawer", "board", "shelf", "using"], "Tool location", "Nêu cụ thể ngăn tủ hoặc người đang dùng.");

addDrill("qr-28", "elementary", "she", 10, 8, "Can I enter this chemical room without a respirator?", "Tôi có thể vào phòng hóa chất này mà không đeo mặt nạ phòng độc không?",
  ["No, absolutely not. A respirator is mandatory here.", "Negative! You must wear a certified respirator before entering.", "No, toxic vapors are present inside."],
  ["no", "respirator", "mandatory", "must", "wear", "danger"], "Prohibition: No, you must not...", "Từ chối dứt khoát vì lý do an toàn.");

addDrill("qr-29", "elementary", "technical", 10, 8, "What does this blinking amber light mean?", "Đèn màu vàng nhấp nháy này có nghĩa là gì?",
  ["It indicates a warning that the filter is clogged.", "The blinking amber light means low oil level.", "It means the machine is in standby mode."],
  ["means", "indicates", "warning", "amber", "filter", "level"], "Meaning: It means / indicates...", "Giải thích ý nghĩa cảnh báo.");

addDrill("qr-30", "elementary", "workplace", 11, 8, "Could you help me lift this motor onto the bench?", "Bạn có thể giúp tôi nhấc động cơ này lên bàn làm việc được không?",
  ["Sure, let's lift together on the count of three.", "Certainly, let me put on my gloves first.", "Yes, be careful with your back."],
  ["sure", "lift", "together", "help", "careful"], "Teamwork response", "Đồng ý hỗ trợ và nhắc nhở an toàn.");

addDrill("qr-31", "elementary", "technical", 11, 8, "Did you check the oil level before starting the compressor?", "Bạn đã kiểm tra mức dầu trước khi khởi động máy nén khí chưa?",
  ["Yes, the oil level is right at the center mark.", "Yes, I verified the sight glass ten minutes ago.", "Not yet, let me check it immediately."],
  ["yes", "oil", "level", "checked", "sight", "glass"], "Past verification: Yes, I checked...", "Xác nhận đã kiểm tra mắt thăm dầu.");

addDrill("qr-32", "elementary", "she", 12, 8, "Why do we need to wear steel-toe boots in the workshop?", "Tại sao chúng ta phải đi giày mũi thép trong phân xưởng?",
  ["To protect our feet from falling heavy objects.", "Because heavy tools and steel parts can drop.", "It is a mandatory company safety rule."],
  ["protect", "feet", "falling", "objects", "heavy", "because"], "Purpose: To protect...", "Dùng 'To protect...' để nêu mục đích.");

addDrill("qr-33", "elementary", "workplace", 12, 8, "Can you hand me the digital caliper from the shelf?", "Bạn có thể đưa cho tôi thước cặp điện tử trên kệ được không?",
  ["Here you go. It is zeroed and ready.", "Sure, here is the caliper.", "Certainly, catch it carefully."],
  ["here", "you", "go", "caliper", "sure"], "Giving something: Here you go.", "Đáp lại tự nhiên khi đưa đồ vật.");

addDrill("qr-34", "elementary", "technical", 13, 8, "How often should we grease this bearing?", "Bao lâu thì chúng ta nên tra mỡ vào ổ bi này một lần?",
  ["We grease it once every two weeks.", "According to the manual, grease it every 500 operating hours.", "It should be greased once a month."],
  ["every", "once", "weeks", "month", "hours", "grease"], "Frequency: once every...", "Nêu tần suất định kỳ.");

addDrill("qr-35", "elementary", "she", 13, 8, "Caution! There is an oil puddle near the conveyor. What should we do?", "Cẩn thận! Có vũng dầu gần băng chuyền. Chúng ta nên làm gì?",
  ["Put up caution cones immediately and get the spill kit.", "Stop work and clean the oil before someone slips.", "Notify the lead and absorb the spill right away."],
  ["cones", "spill", "clean", "oil", "stop", "hazard"], "Action plan for slip hazard", "Cô lập nguy cơ trượt ngã và xử lý.");

addDrill("qr-36", "elementary", "workplace", 14, 8, "Are you finished with the torque wrench?", "Bạn đã dùng xong cờ lê cân lực chưa?",
  ["Yes, I just finished. You can take it now.", "Almost done, give me two more minutes.", "Yes, I zeroed the setting and cleaned it."],
  ["finished", "done", "take", "yes", "minutes"], "Status confirmation", "Xác nhận trạng thái xong hay chưa.");

addDrill("qr-37", "elementary", "technical", 14, 8, "Is this bolt metric or imperial size?", "Chiếc bu-lông này cỡ hệ mét hay hệ inch?",
  ["It is an M12 metric bolt with standard pitch.", "It is metric size.", "It is imperial, half-inch diameter."],
  ["metric", "m12", "imperial", "size", "bolt"], "Specification clarification", "Nêu rõ hệ đo lường.");

addDrill("qr-38", "elementary", "general", 15, 8, "Excuse me, where is the plant cafeteria?", "Xin lỗi, căng tin nhà máy ở đâu?",
  ["It is on the second floor of Building B.", "Walk straight past the warehouse and turn left.", "It is next to the main administration office."],
  ["floor", "building", "straight", "left", "cafeteria"], "Giving plant directions", "Chỉ đường cụ thể trong khuôn viên.");

addDrill("qr-39", "elementary", "she", 15, 8, "Why is this red tag attached to the circuit breaker?", "Tại sao lại có thẻ màu đỏ gắn vào áptômát này?",
  ["It is a LOTO tag; maintenance work is in progress.", "It means do not operate; someone is servicing the line.", "It indicates the breaker is locked out for safety."],
  ["loto", "tag", "locked", "maintenance", "operate", "safety"], "Safety tag explanation", "Giải thích ý nghĩa thẻ LOTO đỏ.");

addDrill("qr-40", "elementary", "technical", 16, 8, "What is the operating temperature of Pump 1 right now?", "Nhiệt độ vận hành của Máy bơm 1 lúc này là bao nhiêu?",
  ["It is sixty-five degrees Celsius, which is normal.", "The bearing temperature is 78 degrees Celsius.", "It is running at 50 degrees."],
  ["degrees", "celsius", "temperature", "normal", "sixty"], "Degrees Celsius reading", "Đọc số đo nhiệt độ kèm đơn vị Celsius.");

addDrill("qr-41", "elementary", "workplace", 16, 8, "Did the shift handover report get signed?", "Biên bản bàn giao ca đã được ký chưa?",
  ["Yes, both shift supervisors signed it ten minutes ago.", "Yes, it is signed and filed in the logbook.", "Not yet, Mr. Tuan is signing it now."],
  ["signed", "yes", "supervisors", "logbook", "report"], "Verification: Yes, it is signed.", "Xác nhận tình trạng chữ ký biên bản.");

addDrill("qr-42", "elementary", "technical", 17, 8, "Which cable connects to the positive terminal?", "Dây cáp nào nối vào cực dương?",
  ["The red cable connects to the positive terminal.", "Always connect the red wire to positive and black to negative.", "The red one."],
  ["red", "positive", "cable", "terminal", "wire"], "Electrical polarity convention", "Khẳng định dây đỏ là cực dương.");

addDrill("qr-43", "elementary", "she", 17, 8, "What should you do if an alarm sounds in the battery room?", "Bạn nên làm gì nếu có chuông báo động vang lên trong phòng ắc quy?",
  ["Evacuate immediately and report hydrogen gas alarm to control.", "Exit the room and notify the safety officer right away.", "Do not create sparks and evacuate outside."],
  ["evacuate", "alarm", "notify", "exit", "outside", "safety"], "Emergency response: Evacuate immediately", "Hành động sơ tán ngay lập tức.");

addDrill("qr-44", "elementary", "workplace", 18, 8, "Can we borrow your hydraulic jack for an hour?", "Chúng tôi có thể mượn kích thủy lực của bạn một tiếng được không?",
  ["Yes, sure. Please return it to Bay 4 when you are done.", "Yes, but make sure to clean it after use.", "Certainly, here is the operating lever too."],
  ["yes", "sure", "return", "done", "borrow"], "Lending equipment", "Cho mượn và nhắc hoàn trả đúng vị trí.");

addDrill("qr-45", "elementary", "technical", 18, 8, "Why did the air pressure drop below 4 bar?", "Tại sao áp suất khí nén lại tụt xuống dưới 4 bar?",
  ["There is an air leak in the distribution hose.", "The main compressor intake filter is dirty.", "Someone left the drain valve open."],
  ["leak", "air", "filter", "compressor", "valve", "drop"], "Cause: There is a leak...", "Nêu nguyên nhân gây tụt áp.");

addDrill("qr-46", "elementary", "she", 19, 8, "Is it permissible to wear loose jewelry around spinning shafts?", "Có được phép đeo trang sức lỏng lẻo gần các trục quay không?",
  ["No, never. Loose items can be caught in moving parts.", "Negative, entanglement hazard is extremely dangerous.", "No, all jewelry must be removed before work."],
  ["no", "never", "caught", "entanglement", "hazard", "jewelry"], "Entanglement safety rule", "Khẳng định tuyệt đối cấm.");

addDrill("qr-47", "elementary", "workplace", 19, 8, "Who has the key to the hazardous chemical cabinet?", "Ai giữ chìa khóa tủ hóa chất nguy hại?",
  ["The safety supervisor, Mr. Hai, holds the key.", "It is kept in the main safety office.", "Mr. Nam has the key on his master ring."],
  ["key", "safety", "supervisor", "cabinet", "holds", "office"], "Key custody", "Chỉ rõ người chịu trách nhiệm giữ chìa.");

addDrill("qr-48", "elementary", "technical", 20, 8, "How many liters of hydraulic oil does this reservoir take?", "Bình chứa dầu thủy lực này chứa được bao nhiêu lít?",
  ["It takes approximately fifty liters of ISO VG 46 oil.", "The full capacity is 75 liters.", "About 40 liters to reach the top level."],
  ["liters", "capacity", "fifty", "oil", "reservoir"], "Fluid volume specification", "Nêu dung tích kèm loại dầu.");

addDrill("qr-49", "elementary", "general", 20, 8, "Could you tell me what time the lunch break ends?", "Bạn có thể cho tôi biết giờ nghỉ trưa kết thúc lúc mấy giờ không?",
  ["Lunch break ends at twelve forty-five PM.", "It ends at 1:00 PM sharp.", "We resume work at 12:45."],
  ["ends", "lunch", "at", "twelve", "one", "resume"], "Schedule clarification", "Nêu giờ giấc chính xác.");

addDrill("qr-50", "elementary", "workplace", 20, 8, "What should we write in the remarks column of the logbook?", "Chúng ta nên ghi gì vào cột ghi chú của sổ nhật ký?",
  ["Note down any replaced parts and the vibration reading.", "Write the root cause of the downtime.", "Log the pending tasks for the next shift."],
  ["write", "log", "replaced", "vibration", "pending", "downtime"], "Logbook entry instructions", "Ghi chú các thông số bất thường hoặc bàn giao.");

// ----------------- PRE-INTERMEDIATE (qr-51 to qr-75) -----------------
addDrill("qr-51", "pre-intermediate", "technical", 21, 10, "Why did Motor 2 suddenly trip?", "Tại sao Động cơ số 2 lại bị nhảy ngắt đột ngột?",
  ["It tripped because the thermal overload relay was activated due to excessive current.", "The motor overheated because of a locked mechanical impeller.", "A temporary short circuit caused the main breaker to trip."],
  ["tripped", "overload", "thermal", "relay", "overheated", "because", "current"], "Explaining technical causes with 'because'", "Nêu rõ nguyên nhân kỹ thuật và rơ le bảo vệ.");

addDrill("qr-52", "pre-intermediate", "technical", 22, 10, "What happened to the machine?", "Chuyện gì đã xảy ra với cỗ máy vậy?",
  ["The conveyor belt snapped while running under full load.", "A bearing seized up on the drive roller, producing heavy smoke.", "The safety interlock triggered when an operator opened the guard."],
  ["happened", "belt", "snapped", "bearing", "seized", "interlock", "smoke"], "Describing past technical incidents", "Mô tả sự việc đã xảy ra bằng thì quá khứ.");

addDrill("qr-53", "pre-intermediate", "she", 23, 10, "What should we do first when an oil leak is detected on Line 4?", "Chúng ta nên làm gì đầu tiên khi phát hiện rò rỉ dầu trên Dây chuyền 4?",
  ["First, shut down the pump, isolate the feed valve, and place drip pans.", "We should isolate the energy source and deploy absorbent pads immediately.", "Alert the supervisor and mark the area with caution tape."],
  ["first", "shut", "isolate", "valve", "absorbent", "pads", "pans"], "Prioritizing immediate containment actions", "Ưu tiên cô lập nguồn rò và ngăn chặn loang dầu.");

addDrill("qr-54", "pre-intermediate", "technical", 24, 10, "Can you explain the problem with the cooling fan?", "Bạn có thể giải thích vấn đề của quạt làm mát được không?",
  ["The fan blades are vibrating excessively because one blade is chipped.", "The electric motor is drawing 15 amps instead of its 10-amp rating.", "The mounting bolts became loose, causing severe misalignment."],
  ["vibrating", "blades", "chipped", "drawing", "loose", "misalignment"], "Problem diagnosis with specific symptoms", "Chỉ rõ triệu chứng hư hỏng cụ thể.");

addDrill("qr-55", "pre-intermediate", "workplace", 25, 10, "What maintenance work was completed this morning?", "Công việc bảo trì nào đã được hoàn thành sáng nay?",
  ["We replaced the mechanical seal on Pump 101 and aligned the coupling.", "The team completed the 500-hour preventive maintenance on Compressor 2.", "We inspected all safety interlocks and calibrated three pressure sensors."],
  ["replaced", "seal", "aligned", "completed", "calibrated", "maintenance"], "Summarizing completed maintenance tasks", "Tóm tắt các đầu việc đã hoàn thành.");

addDrill("qr-56", "pre-intermediate", "workplace", 26, 10, "What needs to be checked next before restarting the line?", "Cần kiểm tra điều gì tiếp theo trước khi khởi động lại dây chuyền?",
  ["We must verify that all machine guards are reinstalled and all tools are removed.", "Next, check that oil pressure is stable and no alarms remain active.", "Confirm with the operator that all personnel are outside the perimeter."],
  ["must", "guards", "reinstalled", "tools", "pressure", "personnel", "check"], "Pre-restart verification protocol", "Nhấn mạnh kiểm tra che chắn và công cụ.");

addDrill("qr-57", "pre-intermediate", "technical", 27, 10, "How can we reduce the high vibration level on this pump?", "Làm thế nào để chúng ta giảm mức rung cao trên máy bơm này?",
  ["We should precision-align the motor and pump shafts using laser tools.", "Rebalance the impeller and replace the worn ball bearings.", "Check the base bolts for soft foot and torque them to spec."],
  ["align", "laser", "rebalance", "bearings", "bolts", "vibration", "reduce"], "Technical corrective proposals", "Đề xuất giải pháp kỹ thuật cụ thể.");

addDrill("qr-58", "pre-intermediate", "she", 28, 10, "Why is an observer required during hot work in the tank farm?", "Tại sao lại cần người cảnh giới trong suốt quá trình làm việc sinh nhiệt tại khu bồn chứa?",
  ["To continuously monitor for flammable gases and respond instantly with a fire extinguisher.", "Because flying sparks can ignite volatile vapors in adjacent tanks.", "Company safety regulations mandate a dedicated fire watch for all hot work."],
  ["monitor", "gases", "fire", "extinguisher", "sparks", "watch", "safety"], "Hot work safety justifications", "Nêu rõ vai trò của người cảnh giới PCCC.");

addDrill("qr-59", "pre-intermediate", "technical", 29, 10, "What is the difference between preventive and corrective maintenance?", "Sự khác biệt giữa bảo trì phòng ngừa và bảo trì khắc phục là gì?",
  ["Preventive is scheduled before failure, while corrective repairs equipment after breakdown.", "Preventive prevents downtime, whereas corrective responds to unexpected failures.", "Preventive relies on time or condition; corrective deals with broken parts."],
  ["preventive", "corrective", "scheduled", "failure", "breakdown", "downtime"], "Technical concept comparison", "Phân biệt rõ trước và sau sự cố.");

addDrill("qr-60", "pre-intermediate", "workplace", 30, 10, "How should we handle an urgent part shortage for Line 1?", "Chúng ta nên xử lý tình huống thiếu phụ tùng khẩn cấp cho Dây chuyền 1 như thế nào?",
  ["Check the central warehouse database or arrange an emergency courier delivery.", "Consult the maintenance engineer to see if an approved substitute part can be used.", "Borrow the spare unit from Line 3 if it is currently offline."],
  ["warehouse", "emergency", "delivery", "substitute", "spare", "borrow"], "Problem-solving under production pressure", "Đề xuất các phương án ứng phó khả thi.");

addDrill("qr-61", "pre-intermediate", "she", 31, 10, "What is a Near Miss incident?", "Sự cố Suýt Nguy (Near Miss) là gì?",
  ["It is an unplanned event that did not cause injury or damage, but had the potential to do so.", "A close call where an accident almost happened, like a wrench falling near a worker.", "An event with zero injury that must still be reported to prevent future harm."],
  ["unplanned", "injury", "potential", "accident", "damage", "reported", "prevent"], "Safety definition: Near Miss", "Định nghĩa chính xác bản chất suýt nguy.");

addDrill("qr-62", "pre-intermediate", "technical", 32, 10, "What does cavitation sound like in a centrifugal pump?", "Hiện tượng xâm thực khí phát ra âm thanh như thế nào trong bơm ly tâm?",
  ["It sounds like marbles or gravel rattling inside the pump casing.", "A loud popping and crackling noise accompanied by fluctuating pressure.", "It creates a distinctive grinding sound like stones being shaken."],
  ["marbles", "gravel", "popping", "noise", "pressure", "cavitation"], "Acoustic diagnostic vocabulary", "Miêu tả âm thanh sỏi đá lạo xạo.");

addDrill("qr-63", "pre-intermediate", "workplace", 33, 10, "How do you prioritize multiple work orders during a breakdown?", "Bạn ưu tiên giải quyết nhiều phiếu công việc như thế nào khi có sự cố?",
  ["I prioritize based on safety hazards first, then production bottleneck lines.", "Safety risks come first, followed by environmental impacts and high-value machines.", "I consult the shift manager to identify the critical path equipment."],
  ["prioritize", "safety", "hazards", "production", "bottleneck", "critical"], "Prioritization criteria: Safety -> Production", "Ưu tiên An toàn trước, Năng suất theo sau.");

addDrill("qr-64", "pre-intermediate", "technical", 34, 10, "Why must we verify zero energy state after locking out a breaker?", "Tại sao chúng ta phải xác nhận trạng thái năng lượng bằng không sau khi khóa áptômát?",
  ["Because residual electrical charge or stored mechanical pressure can still kill you.", "To prove that the breaker contacts actually opened and no voltage remains.", "Locking out is not enough; test before touch is the golden rule."],
  ["residual", "voltage", "energy", "kill", "test", "touch", "zero"], "Safety rule: Test before touch", "Khẳng định nguy cơ điện tích dư.");

addDrill("qr-65", "pre-intermediate", "she", 35, 10, "What should an employee do if they observe an unsafe act on site?", "Nhân viên nên làm gì nếu họ quan sát thấy một hành vi không an toàn tại hiện trường?",
  ["Exercise Stop Work Authority politely and explain the hazard to the colleague.", "Stop the work immediately and notify the safety supervisor.", "Intervene kindly: safety is everyone's responsibility."],
  ["stop", "authority", "hazard", "intervene", "responsibility", "colleague"], "Empowerment: Stop Work Authority", "Sử dụng quyền dừng công việc để bảo vệ bạn bè.");

addDrill("qr-66", "pre-intermediate", "technical", 36, 10, "Why should you never use compressed air to blow dust off your clothes?", "Tại sao bạn không bao giờ được dùng khí nén để thổi bụi trên quần áo?",
  ["Because high-pressure air can penetrate the skin and introduce fatal air embolisms.", "Particles can fly into your eyes, and compressed air can enter your bloodstream.", "It is strictly prohibited due to severe skin and eye puncture hazards."],
  ["penetrate", "skin", "embolism", "eyes", "bloodstream", "prohibited", "hazard"], "Compressed air safety hazards", "Cảnh báo nguy cơ tắc mạch khí vào máu.");

addDrill("qr-67", "pre-intermediate", "workplace", 37, 10, "What should you do if you cannot understand an instruction over the radio?", "Bạn nên làm gì nếu bạn không nghe hiểu chỉ dẫn qua bộ đàm?",
  ["Say 'Say again, transmission unreadable' and ask for clarification.", "Do not guess. Request: 'Radio check, please repeat message slowly.'", "Acknowledge that signal is poor and ask them to spell out key numbers."],
  ["repeat", "say", "again", "unreadable", "radio", "clarification", "guess"], "Radio protocol: Do not guess", "Quy tắc bộ đàm: 'Say again' chứ không đoán.");

addDrill("qr-68", "pre-intermediate", "technical", 38, 10, "What is the function of a thermal overload relay?", "Chức năng của rơ le nhiệt quá tải là gì?",
  ["It disconnects power when motor current stays too high for too long.", "To protect the electric motor from burning out due to prolonged overcurrent.", "It senses excessive heat and opens the control circuit."],
  ["disconnects", "current", "motor", "burning", "overcurrent", "protect"], "Electrical protection explanation", "Giải thích chức năng bảo vệ quá dòng.");

addDrill("qr-69", "pre-intermediate", "workplace", 39, 10, "How do you confirm that a task was completed properly?", "Làm thế nào để bạn xác nhận một công việc đã hoàn thành chuẩn xác?",
  ["I conduct a test run, verify operating parameters, and clean the work area.", "We check all bolts, test the equipment under load, and get supervisor sign-off.", "Compare results against the standard operating procedure checklist."],
  ["test", "run", "verify", "parameters", "clean", "checklist", "sign-off"], "Work verification protocol", "Chạy thử, kiểm tra thông số và dọn dẹp.");

addDrill("qr-70", "pre-intermediate", "technical", 40, 10, "Why is laser alignment better than straightedge alignment?", "Tại sao cân tâm bằng laser lại tốt hơn cân tâm bằng thước thẳng?",
  ["Laser alignment provides micron-level accuracy and eliminates human parallax error.", "It is much faster, more precise, and handles angular and parallel misalignment simultaneously.", "It directly calculates shim corrections for all four motor feet."],
  ["laser", "accuracy", "micron", "precision", "misalignment", "shim"], "Precision maintenance concepts", "Nêu độ chính xác tới mi-crô-mét.");

addDrill("qr-71", "pre-intermediate", "she", 41, 10, "What are the three essential elements of the Fire Triangle?", "Ba yếu tố cốt lõi của Tam giác Cháy là gì?",
  ["Oxygen, Heat, and Fuel.", "The three elements are fuel, oxygen, and ignition heat.", "Fuel, heat, and air."],
  ["oxygen", "heat", "fuel", "fire", "triangle"], "Core safety concept: Fire Triangle", "Nêu đủ: Nhiệt, Nhiên liệu và Oxy.");

addDrill("qr-72", "pre-intermediate", "technical", 42, 10, "What causes a hydraulic cylinder to creep or drift under load?", "Điều gì khiến xi lanh thủy lực bị tụt hoặc trôi khi chịu tải?",
  ["Internal leakage past the piston seal or a leaking counterbalance valve.", "Worn piston cups allowing oil to bypass between cylinder chambers.", "A damaged check valve or contamination in the directional control valve."],
  ["leakage", "piston", "seal", "cylinder", "valve", "bypass", "creep"], "Hydraulic troubleshooting vocabulary", "Chẩn đoán rò rỉ trong qua phớt pít-tông.");

addDrill("qr-73", "pre-intermediate", "workplace", 43, 10, "How should you report a minor hand cut sustained while handling sheet metal?", "Bạn nên báo cáo vết đứt tay nhẹ gặp phải khi cầm tấm kim loại như thế nào?",
  ["Report it to the first-aider immediately, clean the wound, and log a first-aid incident.", "Always report every injury, no matter how small, to the safety officer within the hour.", "Get first aid right away and document it on the daily safety log."],
  ["report", "first-aid", "injury", "wound", "safety", "log"], "First-aid reporting protocol", "Báo cáo ngay để tránh nhiễm trùng và hoàn thiện hồ sơ.");

addDrill("qr-74", "pre-intermediate", "technical", 44, 10, "What does an IP65 rating on an electrical enclosure mean?", "Cấp bảo vệ IP65 trên vỏ tủ điện có nghĩa là gì?",
  ["Dust-tight protection and resistance to water jets from any direction.", "Complete protection against dust and protection against low-pressure water streams.", "It is ingress protection level 6 for dust and level 5 for water."],
  ["dust", "water", "protection", "ingress", "jets", "enclosure"], "Ingress protection standards", "Chống bụi hoàn toàn và chống tia nước.");

addDrill("qr-75", "pre-intermediate", "general", 45, 10, "Could you explain why you arrived late for the morning meeting?", "Bạn có thể giải thích lý do bạn đến muộn cuộc họp sáng không?",
  ["I apologize. My plant shuttle bus broke down on Highway 1.", "I am sorry for being late. There was a power outage at the workshop entrance.", "My apologies. I had to respond to an urgent steam leak at Boiler 2."],
  ["apologize", "sorry", "late", "broke", "traffic", "shuttle", "leak"], "Polite professional apology", "Xin lỗi chân thành và nêu lý do bất khả kháng.");

// ----------------- WORKPLACE & INDUSTRIAL (qr-76 to qr-105) -----------------
addDrill("qr-76", "workplace", "she", 46, 12, "What is the recommended bolt torque for this M16 flange?", "Lực siết bu-lông khuyến nghị cho mặt bích M16 này là bao nhiêu?",
  ["According to the pipe manual, it is 120 Newton-meters in cross pattern.", "The torque specification is 125 Nm using a calibrated torque wrench.", "Set the torque wrench to 120 Nm and tighten in 3 stages."],
  ["torque", "newton", "meters", "flange", "pattern", "calibrated"], "Bolting technical specs", "Nêu rõ giá trị Nm và phương pháp siết chéo.");

addDrill("qr-77", "workplace", "she", 47, 12, "Why must we test the atmosphere before entering a confined space?", "Tại sao chúng ta phải đo khí môi trường trước khi vào không gian hạn chế?",
  ["To verify oxygen is between 19.5% and 23.5% and ensure toxic or flammable gases are zero.", "Because toxic gases like H2S or CO can be odorless and lethal within seconds.", "Atmospheric testing is required by law to prevent asphyxiation."],
  ["oxygen", "toxic", "flammable", "testing", "atmosphere", "confined", "lethal"], "Confined space entry safety", "Đo nồng độ oxy và khí độc H2S, CO.");

addDrill("qr-78", "workplace", "workplace", 47, 12, "What should you do if an operator refuses to wear safety goggles?", "Bạn nên làm gì nếu một người vận hành từ chối đeo kính bảo hộ?",
  ["Remind them calmly that goggles are mandatory PPE and stop the work if they persist.", "Explain the eye injury hazard, offer a clean pair, and notify the area supervisor if needed.", "Remind them of plant safety policy: no goggles, no work."],
  ["mandatory", "goggles", "ppe", "supervisor", "hazard", "stop", "remind"], "Conflict resolution on safety compliance", "Nhắc nhở bình tĩnh, kiên quyết tuân thủ quy định.");

addDrill("qr-79", "workplace", "technical", 48, 12, "How do you detect a vacuum leak on a condenser?", "Làm thế nào để bạn phát hiện điểm rò rỉ chân không trên bình ngưng?",
  ["Using an ultrasonic leak detector or helium leak testing technique.", "Apply shaving foam or soapy water around suspected joints while monitoring vacuum.", "Use an acoustic camera to pinpoint air rushing into the vacuum system."],
  ["ultrasonic", "detector", "helium", "vacuum", "leak", "acoustic"], "Advanced leak detection techniques", "Dùng máy siêu âm hoặc khí heli.");

addDrill("qr-80", "workplace", "workplace", 48, 12, "What key points should be communicated during a shift handover?", "Những điểm mấu chốt nào cần được truyền đạt khi bàn giao ca?",
  ["Machine status, ongoing maintenance, safety hazards, and pending tasks.", "Output numbers, breakdown logs, active LOTO tags, and parts on order.", "Any abnormal vibration readings and critical orders from management."],
  ["status", "hazards", "pending", "loto", "handover", "abnormal"], "Comprehensive shift handover items", "Bàn giao thiết bị, mối nguy, LOTO và việc còn tồn.");

addDrill("qr-81", "workplace", "she", 49, 12, "Where is the Material Safety Data Sheet (MSDS) located?", "Bảng Dữ liệu An toàn Hóa chất (MSDS) được đặt ở đâu?",
  ["In the yellow binder mounted next to the chemical storage entrance.", "Online on the company safety portal and printed in the foreman's office.", "Inside the emergency chemical response cabinet."],
  ["msds", "binder", "yellow", "chemical", "storage", "portal"], "Chemical hazard communication", "Chỉ rõ vị trí sổ vàng hoặc hệ thống dữ liệu.");

addDrill("qr-82", "workplace", "technical", 49, 12, "Why does a centrifugal pump lose suction prime?", "Tại sao máy bơm ly tâm lại bị mất mồi hút?",
  ["Air leakage into the suction piping or a clogged foot valve.", "The suction lift is too high, or the mechanical seal is drawing air.", "The liquid level dropped below the suction pipe inlet."],
  ["suction", "air", "prime", "clogged", "valve", "leakage"], "Pump troubleshooting principles", "Khí lọt vào đường hút hoặc kẹt van chân.");

addDrill("qr-83", "workplace", "she", 50, 12, "What is the procedure for an eyewash station inspection?", "Quy trình kiểm tra trạm rửa mắt khẩn cấp là gì?",
  ["Activate weekly, flush for 3 minutes, check water clarity, and sign the inspection tag.", "Verify water pressure is gentle, nozzles are clean, and pathway is unobstructed.", "Inspect nozzles, measure water temperature, and record in the safety checklist."],
  ["flush", "weekly", "nozzles", "water", "tag", "checklist", "unobstructed"], "Safety fixture maintenance", "Xả rửa hàng tuần, kiểm tra độ sạch và ký thẻ.");

addDrill("qr-84", "workplace", "technical", 50, 12, "What does a high differential pressure across a filter indicate?", "Độ chênh áp cao qua bộ lọc biểu thị điều gì?",
  ["It indicates the filter element is saturated with contaminants and needs replacement.", "The filter media is clogged and restricting flow rate.", "A clogged cartridge causing high resistance across the housing."],
  ["differential", "clogged", "saturated", "filter", "replacement", "contaminants"], "Differential pressure diagnostics", "Báo hiệu lõi lọc đã nghẹt cặn bẩn và cần thay.");

addDrill("qr-85", "workplace", "workplace", 51, 12, "How do you respond to a radio call: 'Maintenance Lead, report to Line 1'?", "Bạn trả lời thế nào với cuộc gọi bộ đàm: 'Trưởng nhóm Bảo trì, đến Dây chuyền 1'?",
  ["'Maintenance Lead copying. On my way to Line 1 now, ETA 2 minutes.'", "'This is Maintenance Lead, received. Proceeding to Line 1 immediately.'", "'Maintenance Lead here, copy that. Heading to Line 1.'"],
  ["copying", "received", "proceeding", "way", "eta", "minutes"], "Professional radio acknowledgement", "Xác nhận đã nhận lệnh và báo thời gian dự kiến (ETA).");

addDrill("qr-86", "workplace", "she", 51, 12, "What precautions are required when working at heights above 2 meters?", "Những biện pháp phòng ngừa nào bắt buộc khi làm việc trên cao quá 2 mét?",
  ["Wear a full-body harness tied off 100% to a certified anchor point, and secure tools with lanyards.", "Use an inspected mobile scaffold or scissor lift with toe boards and guardrails.", "A valid Working at Heights permit and mandatory fall-arrest system."],
  ["harness", "anchor", "lanyard", "heights", "fall", "scaffold", "permit"], "Fall protection safety standards", "Đeo dây nịt toàn thân và buộc dây chống rơi dụng cụ.");

addDrill("qr-87", "workplace", "technical", 52, 12, "What causes electrical motor winding burnout?", "Điều gì gây cháy cuộn dây động cơ điện?",
  ["Single phasing, persistent overload, or insulation breakdown due to moisture and heat.", "Operating on two phases when one fuse blows, leading to rapid overheating.", "Contamination inside the winding deteriorating dielectric insulation."],
  ["winding", "burnout", "overload", "insulation", "single", "phasing", "heat"], "Electrical failure mechanisms", "Nêu mất pha (single phasing) hoặc quá nhiệt kéo dài.");

addDrill("qr-88", "workplace", "workplace", 52, 12, "How do you request a replacement part from purchasing?", "Làm thế nào để bạn yêu cầu phòng mua hàng cấp phụ tùng thay thế?",
  ["Submit a purchase requisition with manufacturer part number, quantity, and equipment tag.", "Include full technical specifications, preferred brand, and required delivery date.", "Create a PR in the SAP system referencing the maintenance work order."],
  ["purchase", "requisition", "part", "number", "quantity", "sap", "specifications"], "Procurement workflow communication", "Nêu rõ mã phụ tùng, số lượng và tag máy.");

addDrill("qr-89", "workplace", "she", 52, 12, "What should be done with oily rags after equipment maintenance?", "Nên làm gì với giẻ lau dính dầu sau khi bảo trì thiết bị?",
  ["Dispose of them in designated self-closing metal hazardous waste bins to prevent spontaneous combustion.", "Place them inside the red metal oily rag container, never in regular trash.", "Put them in approved hazardous waste cans with tight-fitting lids."],
  ["oily", "rags", "metal", "hazardous", "combustion", "bins", "container"], "Flammable waste handling", "Vứt vào thùng kim loại chống tự cháy.");

addDrill("qr-90", "workplace", "technical", 52, 12, "How do you test if a thermocouple is functioning correctly?", "Làm thế nào để kiểm tra một can nhiệt (thermocouple) có hoạt động đúng không?",
  ["Measure millivolt output with a calibrated multimeter and compare against the temperature conversion table.", "Check loop resistance and simulate temperature input using a calibrator.", "Verify that millivoltage changes predictably when heat is applied."],
  ["millivolt", "multimeter", "thermocouple", "calibrator", "resistance", "table"], "Instrumentation calibration technique", "Đo điện áp mV và đối chiếu bảng quy đổi.");

addDrill("qr-91", "workplace", "workplace", 52, 12, "What is the procedure when an urgent delivery arrives with damaged packaging?", "Quy trình xử lý khi chuyến hàng khẩn cấp đến nơi nhưng bao bì bị rách hỏng là gì?",
  ["Photograph the damage, note it on the delivery receipt, and inspect internal components with the carrier present.", "Do not sign acceptance until opening the box and verifying goods are intact.", "Document serial numbers and notify procurement immediately of shipping damage."],
  ["photograph", "damage", "receipt", "inspect", "carrier", "procurement"], "Receiving logistics protocol", "Chụp ảnh hư hại, ghi chú lên biên bản và kiểm tra chi tiết.");

addDrill("qr-92", "workplace", "she", 52, 12, "What is the primary danger of nitrogen gas leaks in enclosed spaces?", "Mối nguy hiểm hàng đầu của rò rỉ khí nitơ trong không gian kín là gì?",
  ["Nitrogen is colorless and odorless, and displaces oxygen, leading to rapid unconsciousness and death.", "Asphyxiation without any prior warning symptoms because nitrogen has no smell.", "Sudden oxygen deficiency causing collapse within two breaths."],
  ["nitrogen", "displaces", "oxygen", "odorless", "asphyxiation", "unconsciousness"], "Asphyxiant gas dangers", "Khí không mùi làm suy giảm oxy gây bất tỉnh đột ngột.");

addDrill("qr-93", "workplace", "technical", 52, 12, "Why must we let hot machinery cool down before checking fluid levels?", "Tại sao chúng ta phải để máy móc nguội bớt trước khi kiểm tra mức chất lỏng?",
  ["To avoid violent pressurized steam or boiling oil spray when the cap is removed.", "Thermal expansion distorts reading, and opening hot systems causes severe burn risks.", "High pressure can erupt hot coolant onto your face and hands."],
  ["burn", "pressurized", "steam", "cool", "coolant", "erupt", "spray"], "Burn and scald prevention", "Ngăn hơi nóng và dầu sôi bắn tung tóe.");

addDrill("qr-94", "workplace", "workplace", 52, 12, "How do you explain a 30-minute delay in returning a borrowed specialized tool?", "Bạn giải thích thế nào về việc trễ 30 phút khi trả dụng cụ chuyên dụng đã mượn?",
  ["'My apologies Mr. Ba. Torquing the final flange took longer than anticipated. The tool is cleaned and zeroed.'", "'Sorry for the delay. An extra inspection was requested. Here is the wrench in perfect condition.'", "'Apologies for running late. We finished the task safely and returned the tool immediately.'"],
  ["apologies", "delay", "torquing", "cleaned", "zeroed", "tool"], "Courteous explanation for delay", "Xin lỗi nhã nhặn, giải thích rõ lý do và hoàn trả sạch sẽ.");

addDrill("qr-95", "workplace", "technical", 52, 12, "What does excessive backlash in a gearbox signify?", "Độ rơ ăn khớp quá mức trong hộp số biểu thị điều gì?",
  ["Worn gear teeth or degraded shaft bearings causing improper gear mesh.", "Severe tooth flank wear that will lead to catastrophic gear failure if unaddressed.", "Excessive play between mating teeth requiring gearset replacement."],
  ["backlash", "gear", "teeth", "wear", "bearings", "mesh"], "Gearbox mechanical wear diagnostics", "Mòn bề mặt răng hoặc mòn vòng bi đỡ trục.");

addDrill("qr-96", "workplace", "she", 52, 12, "What does the abbreviation SDS stand for, and what is its purpose?", "Chữ viết tắt SDS là viết tắt của từ gì, và mục đích của nó là gì?",
  ["Safety Data Sheet; it provides comprehensive hazard, handling, and first-aid info for chemicals.", "Safety Data Sheet, used to understand toxicological risks and PPE requirements.", "It is the standardized document for chemical safety management."],
  ["safety", "data", "sheet", "hazard", "chemical", "handling", "first-aid"], "Chemical safety acronyms", "Bảng dữ liệu an toàn hóa chất.");

addDrill("qr-97", "workplace", "technical", 52, 12, "Why is soft foot a serious issue in rotating machinery?", "Tại sao lỗi chân kênh (soft foot) lại là vấn đề nghiêm trọng ở máy quay?",
  ["Soft foot distorts the motor frame, pinches bearings, and creates extreme vibration when bolted down.", "It causes high mechanical stress and premature bearing failure due to uneven base contact.", "Frame distortion throws internal air gap off-center."],
  ["soft", "foot", "distorts", "frame", "bearings", "vibration", "stress"], "Machinery installation issues", "Gây vặn xoắn thân máy và phá hủy ổ bi nhanh chóng.");

addDrill("qr-98", "workplace", "workplace", 52, 12, "How do you coordinate with the production supervisor before starting preventive maintenance?", "Bạn phối hợp với giám sát sản xuất thế nào trước khi bắt đầu bảo trì phòng ngừa?",
  ["Inform them of scheduled duration, ensure machines are empty of product, and verify LOTO sign-off.", "Confirm the line handover time and agree on re-commissioning targets.", "Explain the scope of work and confirm buffer stock is prepared."],
  ["inform", "duration", "product", "handover", "loto", "scope"], "Maintenance-production coordination", "Thống nhất thời gian dừng, xả sạch liệu và ký LOTO.");

addDrill("qr-99", "workplace", "she", 52, 12, "What is the first step in responding to an electrical fire?", "Bước đầu tiên trong ứng phó với đám cháy điện là gì?",
  ["Cut off the electrical power supply immediately if safe to do so.", "Isolate the main power switch before deploying a CO2 or dry powder extinguisher.", "De-energize the circuit to eliminate the ignition source."],
  ["cut", "power", "electrical", "isolate", "de-energize", "extinguisher", "co2"], "Electrical fire first action: De-energize", "Cắt nguồn điện ngay lập tức trước khi dập.");

addDrill("qr-100", "workplace", "technical", 52, 12, "How do you check for phase imbalance on a three-phase motor?", "Làm thế nào để kiểm tra mất cân bằng pha trên động cơ 3 pha?",
  ["Measure current on each of the three phases with a clamp meter and calculate percentage deviation.", "Measure line-to-line voltages and phase currents; imbalance must not exceed 1% voltage or 10% current.", "Clamp each lead: L1, L2, L3 under steady load to compare current draws."],
  ["clamp", "meter", "current", "phase", "imbalance", "voltage", "deviation"], "Electrical motor testing method", "Đo ampe kẹp trên cả 3 pha và tính độ lệch.");

addDrill("qr-101", "workplace", "workplace", 52, 12, "What do you do if a machine alarm keeps sounding intermittently?", "Bạn làm gì nếu còi báo động máy liên tục kêu ngắt quãng?",
  ["Investigate the root cause, check sensor wiring and thresholds, and never silence without investigating.", "Check the alarm log on the HMI to see the exact fault code.", "Inspect for loose connections or intermittent sensor signals."],
  ["root", "cause", "alarm", "sensor", "hmi", "fault", "investigate"], "Alarm management attitude", "Tìm nguyên nhân gốc rễ, tuyệt đối không tắt còi rồi bỏ qua.");

addDrill("qr-102", "workplace", "she", 52, 12, "Why are synthetic ropes not allowed for lifting sharp steel beams?", "Tại sao không được dùng dây cáp vải để cẩu các dầm thép sắc cạnh?",
  ["Sharp edges can slice through synthetic webbing under tension, dropping the suspended load.", "Severe abrasion will cut synthetic fibers instantly unless certified corner protectors are used.", "Edge cutting hazard can lead to catastrophic rigging failure."],
  ["sharp", "slice", "synthetic", "load", "rigging", "cut", "edges"], "Rigging and lifting safety", "Cạnh sắc dễ cứa đứt cáp vải gây rơi tải trọng.");

addDrill("qr-103", "workplace", "technical", 52, 12, "What is the purpose of an accumulator in a hydraulic circuit?", "Mục đích của bình tích áp trong mạch thủy lực là gì?",
  ["To store pressurized fluid, absorb pressure spikes, and supply emergency power.", "It dampens hydraulic shocks and maintains pressure during rapid actuator cycles.", "To act as an energy reservoir and smooth out pump pulsations."],
  ["accumulator", "hydraulic", "pressurized", "shocks", "spikes", "energy", "store"], "Hydraulic accumulator functions", "Tích trữ áp suất và dập xung kích thủy lực.");

addDrill("qr-104", "workplace", "workplace", 52, 12, "How do you explain an equipment modification in the engineering change record?", "Bạn giải thích việc cải tiến thiết bị thế nào trong sổ ghi thay đổi kỹ thuật?",
  ["Detail the modification reason, attached drawings, part numbers, and safety risk assessment.", "Document what was changed, who approved it, and date of post-modification testing.", "Provide before-and-after schematics and verify compliance with standards."],
  ["modification", "drawings", "approved", "assessment", "record", "schematics"], "Management of change (MOC) documentation", "Nêu lý do, bản vẽ đính kèm và đánh giá an toàn.");

addDrill("qr-105", "workplace", "technical", 52, 12, "What criteria determine whether a conveyor belt needs vulcanized splicing?", "Tiêu chí nào xác định băng chuyền cần dán lưu hóa thay vì nối ghim cơ khí?",
  ["High-tension applications, continuous heavy loads, and food or dust-free requirements.", "When operational speed and tensile strength demand a smooth, permanent endless joint.", "Mechanical clips leak dust and wear quickly; heavy belts require hot vulcanizing."],
  ["vulcanized", "splicing", "tension", "conveyor", "belt", "joint", "strength"], "Conveyor splicing engineering choices", "Tải trọng lớn, lực căng cao và yêu cầu chống bụi.");

console.log(`Successfully prepared ${quickDrills.length} Quick Response Drills!`);

// 2. Build 30 Multi-turn Role-play Scenarios across the 10 Groups
// We will write a dedicated scenario builder module to ensure clean and maintainable code.
const buildRoleplays = require('./build_roleplay_scenarios.js');
const roleplays = buildRoleplays();
console.log(`Successfully prepared ${roleplays.length} Role-play Scenarios!`);

// 3. Shadowing drills
const shadowingDrills = [
  {
    id: "sh-01",
    title: "Workplace Greeting & Morning Briefing",
    category: "general",
    week: 1,
    sentence_en: "Good morning team. Shift 1 is ready to begin. Please verify your personal protective equipment.",
    sentence_vi: "Chào buổi sáng cả đội. Ca 1 đã sẵn sàng bắt đầu. Xin vui lòng kiểm tra trang bị bảo hộ cá nhân của bạn.",
    ipa: "/ɡʊd ˈmɔː.nɪŋ tiːm. ʃɪft wʌn ɪz ˈred.i tuː bɪˈɡɪn. pliːz ˈver.ɪ.faɪ jɔːr ˈpɜː.sən.əl prəˈtek.tɪv ɪˈkwɪp.mənt/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/ʃ/ in shift", "/v/ in verify", "/t/ in equipment"]
  },
  {
    id: "sh-02",
    title: "Safety Rule: Stop Work Authority",
    category: "she",
    week: 5,
    sentence_en: "If you observe any unsafe condition or hazard, immediately exercise your Stop Work Authority.",
    sentence_vi: "Nếu bạn quan sát thấy bất kỳ điều kiện hoặc mối nguy không an toàn nào, hãy thực hiện ngay quyền Dừng Công việc của mình.",
    ipa: "/ɪf juː əbˈzɜːv ˈen.i ʌnˈseɪf kənˈdɪʃ.ən ɔːr ˈhæz.əd, ɪˈmiː.di.ət.li ˈek.sə.saɪz jɔːr stɒp wɜːk ɔːˈθɒr.ə.ti/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/z/ in hazard", "/θ/ in authority", "/v/ in observe"]
  },
  {
    id: "sh-03",
    title: "Technical Diagnostic: Bearing Vibration",
    category: "technical",
    week: 12,
    sentence_en: "The overall vibration level on the drive-end bearing reached seven point eight millimeters per second.",
    sentence_vi: "Mức rung tổng thể trên gối đỡ đầu truyền động đã đạt bảy phẩy tám mi-li-mét trên giây.",
    ipa: "/ðiː ˈəʊ.vər.ɔːl vaɪˈbreɪ.ʃən ˈlev.əl ɒn ðə draɪv end ˈbeə.rɪŋ riːtʃt ˈsev.ən pɔɪnt eɪt ˈmɪl.ɪˌmiː.təz pɜː ˈsek.ənd/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/v/ in vibration", "/tʃt/ in reached", "/z/ in millimeters"]
  },
  {
    id: "sh-04",
    title: "Lockout/Tagout Golden Rule",
    category: "she",
    week: 16,
    sentence_en: "Always isolate all electrical breakers and verify zero energy state before servicing machinery.",
    sentence_vi: "Luôn luôn cô lập toàn bộ áptômát điện và xác nhận trạng thái năng lượng bằng không trước khi sửa chữa máy móc.",
    ipa: "/ˈɔːl.weɪz ˈaɪ.sə.leɪt ɔːl ɪˈlek.trɪ.kəl ˈbreɪ.kəz ænd ˈver.ɪ.faɪ ˈzɪə.rəʊ ˈen.ə.dʒi steɪt bɪˈfɔː ˈsɜː.vɪ.sɪŋ məˈʃiː.nər.i/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/z/ in always & breakers", "/z/ in zero", "/ʃ/ in machinery"]
  },
  {
    id: "sh-05",
    title: "Precision Bolting Torque Specification",
    category: "technical",
    week: 22,
    sentence_en: "Tighten all sixteen flange bolts in a cross pattern to exactly one hundred and twenty Newton meters.",
    sentence_vi: "Siết toàn bộ 16 bu-lông mặt bích theo hình chéo đối xứng đúng chính xác 120 Newton-mét.",
    ipa: "/ˈtaɪ.tən ɔːl sɪkˈstiːn flændʒ bəʊlts ɪn ə krɒs ˈpæt.ən tuː ɪɡˈzækt.li wʌn ˈhʌn.drəd ænd ˈtwen.ti ˈnjuː.tən ˈmiː.təz/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/t/ in tighten", "/fl/ in flange", "/ks/ in cross"]
  },
  {
    id: "sh-06",
    title: "Shift Handover Logbook Entry",
    category: "workplace",
    week: 28,
    sentence_en: "All work orders for Shift 1 are completed and signed off in the central logbook.",
    sentence_vi: "Toàn bộ phiếu công việc của Ca 1 đã được hoàn thành và ký nhận trong sổ nhật ký trung tâm.",
    ipa: "/ɔːl wɜːk ˈɔː.dəz fɔːr ʃɪft wʌn ɑːr kəmˈpliː.tɪd ænd saɪnd ɒf ɪn ðə ˈsen.trəl ˈlɒɡ.bʊk/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/d/ in completed & signed", "/ɡb/ in logbook"]
  },
  {
    id: "sh-07",
    title: "Emergency Radio Communication",
    category: "she",
    week: 36,
    sentence_en: "Emergency, Emergency! Chemical leak detected at Tank 4. Evacuate upwind immediately.",
    sentence_vi: "Khẩn cấp, Khẩn cấp! Phát hiện rò rỉ hóa chất tại Bồn 4. Sơ tán ngược hướng gió ngay lập tức.",
    ipa: "/ɪˈmɜː.dʒən.si, ɪˈmɜː.dʒən.si! ˈkem.ɪ.kəl liːk dɪˈtek.tɪd æt tæŋk fɔːr. ɪˈvæk.ju.eɪt ʌpˈwɪnd ɪˈmiː.di.ət.li/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/dʒ/ in emergency", "/kt/ in detected", "/pw/ in upwind"]
  },
  {
    id: "sh-08",
    title: "Confined Space Atmospheric Testing",
    category: "she",
    week: 42,
    sentence_en: "Atmospheric test confirms twenty point nine percent oxygen and zero toxic gas inside the vessel.",
    sentence_vi: "Đo khí môi trường xác nhận 20.9% oxy và không có khí độc bên trong bồn chứa.",
    ipa: "/ˌæt.məsˈfer.ɪk test kənˈfɜːmz ˈtwen.ti pɔɪnt naɪn pəˈsent ˈɒk.sɪ.dʒən ænd ˈzɪə.rəʊ ˈtɒk.sɪk ɡæs ɪnˈsaɪd ðə ˈves.əl/",
    speed_options: [0.8, 1.0, 1.2],
    key_sounds: ["/θ/ in atmospheric", "/ks/ in toxic", "/v/ in vessel"]
  }
];

// Final export
const reflexOutput = {
  version: "2.1.0",
  quick_drills: quickDrills,
  branching_scenarios: roleplays,
  shadowing_drills: shadowingDrills
};

const outputFile = path.join(__dirname, '../data/reflex-scenarios.js');
const outputJs = `// English Hub V1 - Reflex & Conversation Arena Scenarios
// Version: 2.1.0
// Comprehensive data: 105 Quick Response Drills, 30 Role-play Scenarios, 8 Shadowing Drills
(function(root) {
  const REFLEX_DATA = ${JSON.stringify(reflexOutput, null, 2)};

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = REFLEX_DATA;
  }
  if (typeof window !== 'undefined') {
    window.REFLEX_DATA = REFLEX_DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
`;

fs.writeFileSync(outputFile, outputJs, 'utf8');
console.log(`Successfully generated and wrote ${outputFile}!`);
