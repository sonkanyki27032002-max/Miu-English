// English Hub V1 - Main Application Controller
// Version: 2.0.0

(function() {
  'use strict';

  // Global DOM helper
  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  // App State
  const App = {
    currentView: 'home',
    srs: window.srsEngine || new (window.SRSEngine || Object)(),
    curriculum: window.CURRICULUM_DATA || { months: [], weeks: [], days: [], stats: {} },
    vocabBank: [],
    reflexData: window.REFLEX_DATA || { quick_drills: [], branching_scenarios: [], shadowing_drills: [] },
    readingData: window.READING_DATA || [],
    speechEngine: window.speechEngine || null,
    
    // Active selections
    selectedMonth: 1,
    selectedWeek: 1,
    selectedDay: 1,
    
    // Vocab view state
    vocabSearch: '',
    vocabCategory: 'all',
    vocabLevel: 'all',
    vocabStatus: 'all',
    vocabMode: 'table', // 'table', 'flashcard'
    flashcardIndex: 0,
    flashcardFlipped: false,
    flashcardDirection: 'en-vi', // 'en-vi' or 'vi-en'
    
    // My Cards State
    mycardsSelectedDeckId: 'deck-daily',
    mycardsViewTab: 'practice', // 'practice' or 'list'
    mycardsPracticeMode: 'cloze', // 'cloze', 'vi_en', 'en_vi', 'mixed'
    mycardsQueue: [],
    mycardsQueueDeckId: null,
    mycardsCurrentIdx: 0,
    mycardsCardRevealed: false,
    mycardsShuffle: true,
    mycardsAutoSpeak: true,
    mycardsSearchQuery: '',
    mycardsMixedModeMap: {},

    // Anki SRS Study State
    ankiDeck: 'due', // 'due', 'custom', 'difficult', 'learning', 'all'
    ankiQueue: [],
    ankiCurrentIndex: 0,
    ankiSessionActive: false,
    ankiAutoSpeak: false,
    ankiReviewedCount: 0,
    ankiAgainCount: 0,
    
    // Quick Quiz State
    activeQuickQuiz: null,
    quizCurrentQ: 0,
    quizScore: 0,
    quizTimerInterval: null,
    quizSecondsRemaining: 0,
    
    // Reflex State
    activeReflexTab: 'quick',
    qrLevelFilter: 'all',
    qrDrillIndex: 0,
    lrIndex: 0,
    lrTimerInterval: null,
    lrSecondsRemaining: 15,
    roleplayGroupFilter: 'all',
    activeDrillIndex: 0,
    drillTimerInterval: null,
    drillSecondsRemaining: 0,
    activeScenario: null,
    activeScenarioNode: null,
    
    // Reading State
    activeReadingId: null,
    readingLevelFilter: 'all',
    readingMode: 'supported',
    readingTimerInterval: null,
    readingSecondsRemaining: 300,

    // Speech Recognition
    recognition: null,
    isRecording: false
  };

  // Safe HTML Escaper
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // Toast Notification
  function showToast(msg, duration = 3000) {
    const t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => t.classList.add('hidden'), duration);
  }

  // Text-To-Speech (SpeechEngine + Browser SpeechSynthesis)
  function playTTS(text, rate = null, lang = 'en-US') {
    if (!text) return;
    if (window.speechEngine && typeof window.speechEngine.speak === 'function') {
      window.speechEngine.speak(text, { rate, lang });
      return;
    }
    if (!('speechSynthesis' in window)) {
      showToast('Trình duyệt của bạn không hỗ trợ tính năng phát âm SpeechSynthesis.');
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = String(text).replace(/[\/\\]/g, ' ').trim();
    if (!cleanText) return;
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang || 'en-US';
    utterance.rate = rate != null ? rate : 0.85;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  function stopAudio() {
    if (window.speechEngine && typeof window.speechEngine.stop === 'function') {
      window.speechEngine.stop();
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // Navigation Router
  function navigateTo(viewName) {
    const validViews = ['home', 'curriculum', 'dayLesson', 'vocabulary', 'mycards', 'srs', 'reflex', 'reading', 'backup'];
    if (!validViews.includes(viewName)) viewName = 'home';
    
    stopAudio();
    App.currentView = viewName;
    
    // Toggle view elements
    $$('.view-container').forEach(el => {
      el.classList.add('hidden');
    });
    const target = $(viewName + 'View');
    if (target) target.classList.remove('hidden');

    // Update active nav buttons (Desktop Sidebar & Mobile Bottom Nav)
    $$('.navbtn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    $$('.mobile-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh specific view data
    if (viewName === 'home') renderDashboard();
    if (viewName === 'curriculum') renderCurriculumList();
    if (viewName === 'vocabulary') renderVocabBank();
    if (viewName === 'mycards') renderMyCardsView();
    if (viewName === 'srs') renderSRSView();
    if (viewName === 'reflex') renderReflexArena();
    if (viewName === 'reading') renderReadingView();
    if (viewName === 'backup') renderBackupView();
  }

  // ==========================================
  // 1. DASHBOARD CONTROLLER
  // ==========================================
  function renderDashboard() {
    const stats = App.srs.getStats();
    
    // User progress numbers
    const currentDay = stats.current_day || 1;
    const streak = stats.streak_days || 1;
    const completedCount = stats.completed_lessons || 0;
    const pct = Math.min(100, Math.round((completedCount / 365) * 100));
    
    if ($('dashCurrentDay')) $('dashCurrentDay').textContent = `Ngày ${currentDay} / 365`;
    if ($('dashStreak')) $('dashStreak').textContent = `${streak} ngày liên tiếp 🔥`;
    if ($('topStreakText')) $('topStreakText').textContent = `${streak} ngày`;
    if ($('dashCompletedCount')) $('dashCompletedCount').textContent = `${completedCount} / 365 bài (${pct}%)`;
    if ($('dashProgressBar')) $('dashProgressBar').style.width = `${pct}%`;
    
    if ($('dashVocabTracked')) {
      const customTxt = stats.custom_vocab_count > 0 ? ` (${stats.custom_vocab_count} tự thêm)` : '';
      $('dashVocabTracked').textContent = `${stats.total_vocab_tracked} từ${customTxt}`;
    }
    if ($('dashDueToday')) $('dashDueToday').textContent = `${stats.due_today} từ cần ôn`;
    if ($('dashMastered')) $('dashMastered').textContent = `${stats.mastered} từ đã thuộc`;
    
    // Quick resume button
    const resumeBtn = $('dashResumeBtn');
    if (resumeBtn) {
      resumeBtn.textContent = `▶ Học tiếp Ngày ${currentDay}`;
      resumeBtn.onclick = () => openDayLesson(currentDay);
    }

    // Today's preview card
    const todayLesson = App.curriculum.days.find(d => d.day === currentDay) || App.curriculum.days[0];
    if (todayLesson && $('dashTodayTitle')) {
      $('dashTodayTitle').textContent = `Ngày ${todayLesson.day}: ${todayLesson.title}`;
      $('dashTodayTopic').textContent = `Chủ đề: ${todayLesson.topic_en} · Trình độ: ${todayLesson.level}`;
      $('dashTodayFocus').textContent = todayLesson.objectives ? todayLesson.objectives[0] : (todayLesson.grammar_focus || '');
    }

    // Difficult words alert
    const diffSection = $('dashDifficultSection');
    const diffList = $('dashDifficultList');
    if (diffSection && diffList) {
      const diffIds = Object.keys(App.srs.state.vocab_srs).filter(id => App.srs.state.vocab_srs[id].is_difficult);
      if (diffIds.length > 0) {
        diffSection.classList.remove('hidden');
        const diffWords = App.vocabBank.filter(v => diffIds.includes(v.id)).slice(0, 5);
        diffList.innerHTML = diffWords.map(w => `
          <div class="tag-pill" style="display:inline-flex;align-items:center;gap:6px;padding:6px 10px;background:#fff1f0;color:#c0392b;border-radius:8px;font-size:12px;margin:3px;">
            <b>${escapeHtml(w.en)}</b> <span>${escapeHtml(w.vi)}</span>
            <button class="mini-speak-btn" data-speak="${escapeHtml(w.en)}" style="border:0;background:none;cursor:pointer;">🔊</button>
          </div>
        `).join('');
      } else {
        diffSection.classList.add('hidden');
      }
    }
  }

  // ==========================================
  // 2. CURRICULUM 365 DAYS CONTROLLER
  // ==========================================
  function renderCurriculumList() {
    const monthTabsContainer = $('curriculumMonthTabs');
    const daysContainer = $('curriculumDaysGrid');
    if (!monthTabsContainer || !daysContainer) return;

    // Render 12 Month Tabs
    monthTabsContainer.innerHTML = App.curriculum.months.map(m => {
      const isSelected = m.month === App.selectedMonth;
      return `
        <button class="month-tab-btn ${isSelected ? 'active' : ''}" data-month="${m.month}">
          <span class="m-icon">${m.icon}</span>
          <div class="m-info">
            <strong>Tháng ${m.month}</strong>
            <small>${escapeHtml(m.level)} · ${m.day_start}-${m.day_end}</small>
          </div>
        </button>
      `;
    }).join('');

    // Active Month Header
    const activeMonth = App.curriculum.months.find(m => m.month === App.selectedMonth) || App.curriculum.months[0];
    if ($('curriculumActiveMonthTitle')) {
      $('curriculumActiveMonthTitle').textContent = activeMonth.title_vi;
      $('curriculumActiveMonthDesc').textContent = activeMonth.summary;
    }

    // Filter days for active month
    const monthDays = App.curriculum.days.filter(d => d.month === App.selectedMonth);

    // Group days by week
    const weekGroups = {};
    monthDays.forEach(d => {
      if (!weekGroups[d.week]) weekGroups[d.week] = [];
      weekGroups[d.week].push(d);
    });

    daysContainer.innerHTML = Object.entries(weekGroups).map(([wNum, days]) => {
      const daysHtml = days.map(d => {
        const isDone = App.srs.isLessonCompleted(d.day);
        const isCurrent = d.day === (App.srs.state.user_profile.current_day || 1);
        let badgeHtml = '';
        if (d.is_milestone) {
          badgeHtml = `<span class="badge milestone">⭐ Cột mốc</span>`;
        } else if (d.is_review_day) {
          badgeHtml = `<span class="badge review">🔄 Ôn tập</span>`;
        } else if (d.has_detailed_lesson) {
          badgeHtml = `<span class="badge detailed">📘 Bài đầy đủ</span>`;
        } else {
          badgeHtml = `<span class="badge syllabus">📋 Giáo trình</span>`;
        }

        return `
          <div class="day-card ${isDone ? 'completed' : ''} ${isCurrent ? 'current' : ''}" data-day="${d.day}">
            <div class="day-card-header">
              <span class="day-num">Ngày ${d.day}</span>
              ${badgeHtml}
              ${isDone ? '<span class="status-done">✓ Đã xong</span>' : ''}
            </div>
            <h4 class="day-card-title">${escapeHtml(d.title)}</h4>
            <p class="day-card-sub">${escapeHtml(d.topic_en)}</p>
            <div class="day-card-footer">
              <small class="text-muted">⏱️ ${d.estimated_minutes} phút · ${d.level}</small>
              <button class="btn btn-sm ${isDone ? 'outline' : 'primary'} open-lesson-btn" data-day="${d.day}">
                ${isDone ? 'Ôn lại' : 'Vào học →'}
              </button>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="week-group">
          <div class="week-group-header">
            <h3>Tuần ${wNum}</h3>
            <span class="text-muted">${days[0].day} – ${days[days.length - 1].day}</span>
          </div>
          <div class="days-subgrid">
            ${daysHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // ==========================================
  // 3. DAY LESSON VIEWER (11 COMPONENTS)
  // ==========================================
  function openDayLesson(dayNum) {
    const d = parseInt(dayNum, 10);
    const lesson = App.curriculum.days.find(x => x.day === d);
    if (!lesson) {
      showToast(`Không tìm thấy bài học Ngày ${d}.`);
      return;
    }

    App.selectedDay = d;
    App.selectedMonth = lesson.month;
    App.selectedWeek = lesson.week;

    const container = $('dayLessonContent');
    if (!container) return;

    // Check if this day has a detailed authored lesson or a syllabus lesson
    const isAuthored = !!lesson.has_detailed_lesson;
    const isDone = App.srs.isLessonCompleted(d);

    let html = `
      <div class="lesson-header-bar">
        <div>
          <button class="btn outline btn-sm" id="backToCurriculumBtn">← Trở về Lộ trình 365</button>
          <div class="lesson-meta-chips" style="margin-top:10px;">
            <span class="chip">Tháng ${lesson.month}</span>
            <span class="chip">Tuần ${lesson.week}</span>
            <span class="chip">Ngày ${lesson.day}</span>
            <span class="chip level">${lesson.level}</span>
            <span class="chip">⏱️ ${lesson.estimated_minutes} phút</span>
            ${lesson.is_milestone ? '<span class="chip gold">⭐ CỘT MỐC CHUYÊN SÂU</span>' : ''}
            ${lesson.is_review_day ? '<span class="chip blue">🔄 BÀI TỔNG ÔN TUẦN</span>' : ''}
          </div>
          <h1 class="lesson-main-title">${escapeHtml(lesson.title)}</h1>
          <p class="lesson-subtitle">${escapeHtml(lesson.topic_en)}</p>
        </div>
        <div class="lesson-completion-indicator">
          <span class="completion-pill ${isDone ? 'done' : 'pending'}">
            ${isDone ? '✓ ĐÃ HOÀN THÀNH' : '○ CHƯA HOÀN THÀNH'}
          </span>
        </div>
      </div>
    `;

    // Transparency banner
    html += `
      <div class="notice-banner ${isAuthored ? 'info' : 'warning'}">
        <span class="icon">${isAuthored ? '📘' : '📋'}</span>
        <div>
          <strong>${isAuthored ? 'Bài học chuyên sâu đầy đủ 11 hợp phần' : 'Giáo trình chuẩn hóa theo ngày (Syllabus Mapped)'}</strong>
          <p>${isAuthored 
            ? 'Bài học có đủ mục tiêu, từ mới có IPA, giải thích ngữ pháp tiếng Việt, audio nghe, luyện nói, bài đọc hiểu, bài tập viết và bài kiểm tra đáp án.' 
            : 'Ngày học được phân bổ chủ đề, mục tiêu, cấu trúc ngữ pháp, từ vựng trọng tâm từ Kho từ vựng và câu hỏi đánh giá. Hãy kết hợp Kho từ vựng để ôn tập sâu.'}
          </p>
        </div>
      </div>
    `;

    // 1. Objectives
    html += `
      <div class="lesson-block">
        <h3 class="block-title">🎯 1. Mục tiêu bài học (Learning Objectives)</h3>
        <ul class="objectives-list">
          ${(lesson.objectives || []).map(obj => `<li>${escapeHtml(obj)}</li>`).join('')}
        </ul>
      </div>
    `;

    // 2. New Vocab (if authored) or Target Vocab
    if (lesson.new_vocab && lesson.new_vocab.length > 0) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">🗂️ 2. Từ mới & Cụm từ trọng tâm (New Vocabulary)</h3>
          <div class="vocab-cards-grid">
            ${lesson.new_vocab.map(v => `
              <div class="vocab-item-card">
                <div class="vocab-card-top">
                  <strong>${escapeHtml(v.en)}</strong>
                  <button class="audio-btn" data-speak="${escapeHtml(v.en)}" title="Nghe phát âm">🔊</button>
                </div>
                <div class="vocab-ipa">${escapeHtml(v.ipa || '')}</div>
                <div class="vocab-vi">${escapeHtml(v.vi)}</div>
                ${v.collocation ? `<div class="vocab-colloc">Collocation: <i>${escapeHtml(v.collocation)}</i></div>` : ''}
                ${v.example ? `<div class="vocab-example">"${escapeHtml(v.example)}"</div>` : ''}
                <button class="btn btn-xs outline srs-add-btn" data-word="${escapeHtml(v.en)}" data-vi="${escapeHtml(v.vi)}" style="margin-top:8px;">+ Thêm vào SRS ôn tập</button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (lesson.target_vocab && lesson.target_vocab.length > 0) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">🗂️ 2. Từ vựng trọng tâm ngày học (Target Vocabulary)</h3>
          <p class="text-muted">Các từ vựng cốt lõi cần tra cứu và thực hành trong Kho từ vựng:</p>
          <div class="tags-cluster">
            ${lesson.target_vocab.map(w => `
              <span class="vocab-tag-pill">
                <b>${escapeHtml(w)}</b>
                <button class="audio-btn" data-speak="${escapeHtml(w)}" title="Nghe phát âm">🔊</button>
              </span>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 3. Review Vocab
    if (lesson.review_vocab && lesson.review_vocab.length > 0) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">🔄 3. Kiến thức & Từ cũ cần ôn lại (Review Vocabulary)</h3>
          <div class="review-pills-row">
            ${lesson.review_vocab.map(w => `<span class="review-pill">${escapeHtml(w)}</span>`).join('')}
          </div>
        </div>
      `;
    }

    // 4. Grammar Explanation
    const grammarContent = lesson.grammar_vi || lesson.grammar_focus || '';
    if (grammarContent) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">📖 4. Giải thích Ngữ pháp & Cấu trúc câu (Vietnamese Grammar Guide)</h3>
          <div class="grammar-content-box">
            ${grammarContent.replace(/### (.*?)\n/g, '<h4>$1</h4>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n\n/g, '<br><br>')}
          </div>
        </div>
      `;
    }

    // 5. Listening (if detailed)
    if (lesson.listening) {
      let dialogueItems = [];
      if (Array.isArray(lesson.listening.dialogue) && lesson.listening.dialogue.length > 0) {
        dialogueItems = lesson.listening.dialogue;
      } else if (lesson.listening.transcript || lesson.listening.audio_text) {
        const raw = lesson.listening.transcript || lesson.listening.audio_text || '';
        const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        dialogueItems = lines.map((line, idx) => {
          const m = line.match(/^([A-Za-z0-9\s_-]+):\s*(.*)$/);
          if (m) {
            return { speaker: m[1], text: m[2], vi: '' };
          }
          return { speaker: `Câu ${idx + 1}`, text: line, vi: '' };
        });
      }

      const fullTranscript = lesson.listening.transcript || lesson.listening.audio_text || dialogueItems.map(d => `${d.speaker ? d.speaker + ': ' : ''}${d.text}`).join('\n');
      const fullTranslation = lesson.listening.translation_vi || dialogueItems.map(d => d.vi).filter(Boolean).join('\n') || '';

      html += `
        <div class="lesson-block" id="listeningLabBlock">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
            <h3 class="block-title" style="margin:0;">🎧 5. Bài luyện nghe (Listening Lab): ${escapeHtml(lesson.title)}</h3>
            <div class="audio-status-pill" id="lessonAudioStatusPill" style="display:inline-flex;align-items:center;gap:8px;background:#f1f5f9;border:1px solid #cbd5e1;padding:4px 12px;border-radius:99px;">
              <span class="audio-dot" id="lessonAudioDot"></span>
              <span id="lessonAudioStatusText" style="font-size:12px;font-weight:700;color:var(--navy);">Sẵn sàng phát âm</span>
            </div>
          </div>
          <p class="prompt-text" style="color:#475569;margin-bottom:14px;font-size:14px;">${escapeHtml(lesson.listening.audio_prompt || 'Lắng nghe kỹ đoạn hội thoại/đoạn văn dưới đây và chú ý ngữ điệu, phát âm của các từ mới:')}</p>
          
          <!-- Audio Control Toolbar -->
          <div class="audio-controls-row" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:18px;">
            <button class="btn primary" id="playLessonAudio">▶ Nghe toàn bài</button>
            <button class="btn light" id="playLessonSlow">🐢 Nghe chậm (0.70x)</button>
            <button class="btn light" id="replayLessonAudio">🔄 Nghe lại</button>
            <button class="btn outline" id="stopLessonAudio" style="color:#dc2626;border-color:#fca5a5;">⏹ Dừng</button>
            <button class="btn outline" id="toggleDialogueViBtn">👁️ Ẩn/Hiện bản dịch</button>
            <button class="btn outline" id="toggleTranscriptBtn">📜 Xem Transcript</button>
            <button class="btn btn-sm light" id="openVoiceModalFromLessonBtn" style="margin-left:auto;">⚙️ Đổi giọng đọc</button>
          </div>

          <!-- Dialogue / Sentence Cards Grid -->
          <div id="lessonDialogueList" class="dialogue-lines-list" style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
            ${dialogueItems.map((item, idx) => `
              <div class="dialogue-line-card" id="dialogueTurn_${idx}" data-idx="${idx}">
                <div class="speaker-chip">${escapeHtml(item.speaker || `Câu ${idx + 1}`)}</div>
                <div class="dialogue-body">
                  <div class="dialogue-en">${escapeHtml(item.text)}</div>
                  ${item.vi ? `<div class="dialogue-vi">${escapeHtml(item.vi)}</div>` : ''}
                </div>
                <div class="dialogue-actions">
                  <button class="mini-speak-btn play-turn-btn" data-turn="${idx}" title="Nghe câu này">🔊</button>
                  <button class="mini-speak-btn play-turn-slow-btn" data-turn="${idx}" title="Nghe chậm câu này">🐢</button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Collapsible Full Transcript -->
          <div id="lessonTranscript" class="transcript-box hidden" style="margin-bottom:14px;">
            <div style="font-weight:700;font-size:12px;color:var(--navy);margin-bottom:6px;">TRANSCRIPT TIẾNG ANH:</div>
            <pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;line-height:1.6;margin:0;">${escapeHtml(fullTranscript)}</pre>
            ${fullTranslation ? `
              <div style="font-weight:700;font-size:12px;color:#1e40af;margin:12px 0 6px;">BẢN DỊCH TIẾNG VIỆT ĐẦY ĐỦ:</div>
              <p style="white-space:pre-wrap;font-size:13px;line-height:1.6;color:#334155;margin:0;">${escapeHtml(fullTranslation)}</p>
            ` : ''}
          </div>

          <!-- Disclaimer -->
          <div class="disclaimer-text" style="font-size:12px;color:var(--muted);background:#f8fafc;padding:8px 12px;border-radius:8px;border:1px dashed #cbd5e1;">
            ℹ️ <i>Hệ thống phát âm qua Web Speech API (SpeechSynthesis) với giọng chuẩn được tối ưu tự động từ thiết bị của bạn. Không cần kết nối AI API vẫn học tập trơn tru.</i>
          </div>

          <!-- Listening Questions (if any) -->
          ${lesson.listening.questions && lesson.listening.questions.length > 0 ? `
            <div class="listening-questions" style="margin-top:18px;">
              <h4 style="color:var(--navy);margin-bottom:10px;">Câu hỏi nghe hiểu:</h4>
              ${lesson.listening.questions.map((q, qIdx) => `
                <div class="quiz-item" style="margin:10px 0;padding:12px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;">
                  <b>${qIdx + 1}. ${escapeHtml(q.question)}</b>
                  ${q.options.map((opt, oIdx) => `
                    <label class="option-row" style="display:flex;align-items:center;gap:8px;margin:6px 0;cursor:pointer;">
                      <input type="radio" name="listenQ_${qIdx}" value="${oIdx}">
                      <span>${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                  <div id="listenQFeedback_${qIdx}" class="q-feedback" style="margin-top:6px;font-size:13px;"></div>
                </div>
              `).join('')}
              <button class="btn light btn-sm" id="checkListeningQuizBtn">Kiểm tra câu hỏi nghe</button>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 6. Speaking (if detailed)
    if (lesson.speaking) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">🎙️ 6. Bài luyện nói & Phản xạ (Speaking Lab)</h3>
          <p>${escapeHtml(lesson.speaking.prompt)}</p>
          <div class="target-sentence-card">
            <small>CÂU MỤC TIÊU CẦN NÓI:</small>
            <div class="target-speech-text">"${escapeHtml(lesson.speaking.target_sentence)}"</div>
            <button class="btn light btn-sm" data-speak="${escapeHtml(lesson.speaking.target_sentence)}">🔊 Nghe câu mẫu</button>
          </div>
          ${lesson.speaking.substitution_drill ? `
            <div class="drill-box" style="margin-top:12px;">
              <strong>Bài tập thay thế từ (Substitution Drill):</strong>
              <ul>
                ${lesson.speaking.substitution_drill.map(s => `
                  <li>[${escapeHtml(s.cue)}]: <b>${escapeHtml(s.sentence)}</b></li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
          <div class="speech-recording-area" style="margin-top:14px;">
            <div class="row" style="gap:10px;">
              <button class="btn primary" id="micRecordBtn">🎙️ Bấm để nói vào micro</button>
              <button class="btn outline" id="micStopBtn" disabled>■ Dừng micro</button>
            </div>
            <p id="micStatusText" class="text-muted" style="font-size:12px;margin:6px 0;">Micro đang ở chế độ chờ...</p>
            <textarea id="micRecognizedText" class="field" placeholder="Văn bản bạn nói sẽ hiển thị tại đây hoặc bạn có thể tự nhập..."></textarea>
            <button class="btn light btn-sm" id="evaluateSpeakingBtn" style="margin-top:8px;">So sánh với câu mục tiêu</button>
            <div id="speakingResultBox"></div>
          </div>
          <div class="disclaimer-text">
            ⚠️ <i>Lưu ý: Nhận diện giọng nói hoạt động qua API webkitSpeechRecognition của trình duyệt, dùng để nhận diện chữ bạn đã nói, không chấm âm vị chính xác tuyệt đối như giáo viên bản ngữ.</i>
          </div>
        </div>
      `;
    }

    // 7. Reading (if detailed)
    if (lesson.reading) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">📖 7. Bài đọc hiểu thực tế (Reading Lab)</h3>
          <div class="reading-article-box">
            ${escapeHtml(lesson.reading.text).replace(/\n/g, '<br>')}
          </div>
          <div class="row" style="margin:12px 0;">
            <button class="btn light btn-sm" id="readAloudBtn">🔊 Đọc to đoạn văn</button>
            <button class="btn outline btn-sm" id="toggleReadingTransBtn">Hiện bản dịch tiếng Việt</button>
          </div>
          <div id="readingTransBox" class="translation-box hidden">
            ${escapeHtml(lesson.reading.translation || '').replace(/\n/g, '<br>')}
          </div>
          ${lesson.reading.questions ? `
            <div class="reading-questions-box" style="margin-top:14px;">
              <h4>Câu hỏi đọc hiểu:</h4>
              ${lesson.reading.questions.map((rq, rIdx) => `
                <div class="quiz-item" style="margin:10px 0;padding:12px;background:#f8fafc;border-radius:10px;">
                  <b>${rIdx + 1}. ${escapeHtml(rq.question)}</b>
                  ${rq.options.map((opt, oIdx) => `
                    <label class="option-row">
                      <input type="radio" name="readQ_${rIdx}" value="${oIdx}">
                      <span>${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                  <div id="readQFeedback_${rIdx}" class="q-feedback"></div>
                </div>
              `).join('')}
              <button class="btn light btn-sm" id="checkReadingQuizBtn">Kiểm tra câu hỏi đọc hiểu</button>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 8. Writing (if detailed)
    if (lesson.writing) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">✍️ 8. Bài tập Viết & Sắp xếp câu (Writing Lab)</h3>
          ${lesson.writing.unscramble ? `
            <div class="unscramble-section" style="margin-bottom:16px;">
              <h4>Bài tập 1: Sắp xếp các từ thành câu hoàn chỉnh</h4>
              ${lesson.writing.unscramble.map((u, uIdx) => `
                <div class="unscramble-item" style="margin:8px 0;padding:10px;background:#fbfcfe;border:1px solid #e2e8f0;border-radius:8px;">
                  <p>Từ gợi ý: <code>${u.words.join(' / ')}</code></p>
                  <input type="text" class="field unscramble-input" id="unscrambleInput_${uIdx}" placeholder="Nhập câu hoàn chỉnh...">
                  <button class="btn btn-xs light check-unscramble-btn" data-idx="${uIdx}" data-sol="${escapeHtml(u.solution)}">Kiểm tra</button>
                  <span id="unscrambleFeedback_${uIdx}" class="feedback-inline"></span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${lesson.writing.fill_blank ? `
            <div class="fill-blank-section" style="margin-bottom:16px;">
              <h4>Bài tập 2: Điền từ vào chỗ trống</h4>
              ${lesson.writing.fill_blank.map((fb, fbIdx) => `
                <div class="fb-item" style="margin:8px 0;padding:10px;background:#fbfcfe;border:1px solid #e2e8f0;border-radius:8px;">
                  <p>${escapeHtml(fb.sentence_with_blank)}</p>
                  <input type="text" class="field fb-input" id="fbInput_${fbIdx}" placeholder="Từ cần điền...">
                  <button class="btn btn-xs light check-fb-btn" data-idx="${fbIdx}" data-ans="${escapeHtml(fb.answer)}">Kiểm tra</button>
                  <span id="fbFeedback_${fbIdx}" class="feedback-inline"></span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${lesson.writing.translation ? `
            <div class="translation-section">
              <h4>Bài tập 3: Dịch câu Việt → Anh</h4>
              ${lesson.writing.translation.map((tr, trIdx) => `
                <div class="tr-item" style="margin:8px 0;padding:10px;background:#fbfcfe;border:1px solid #e2e8f0;border-radius:8px;">
                  <p><b>Câu tiếng Việt:</b> ${escapeHtml(tr.vietnamese)}</p>
                  <textarea class="field" id="trInput_${trIdx}" placeholder="Viết câu dịch tiếng Anh của bạn..."></textarea>
                  <div class="row" style="gap:8px;margin-top:6px;">
                    <button class="btn btn-xs light toggle-model-ans-btn" data-target="modelAns_${trIdx}">Xem đáp án mẫu</button>
                    <button class="btn btn-xs outline ai-check-writing-btn" data-input="trInput_${trIdx}" data-model="${escapeHtml(tr.model_answer)}">✨ AI chấm bài (Tùy chọn)</button>
                  </div>
                  <div id="modelAns_${trIdx}" class="model-answer-box hidden" style="margin-top:6px;padding:8px;background:#edf8f3;border-radius:6px;font-size:13px;">
                    <b>Đáp án chuẩn:</b> "${escapeHtml(tr.model_answer)}"<br>
                    <small>${escapeHtml(tr.explanation)}</small>
                  </div>
                  <div id="aiWritingFeedback_trInput_${trIdx}"></div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    // 9. Comprehensive Daily Quiz
    if (lesson.quiz && lesson.quiz.length > 0) {
      html += `
        <div class="lesson-block">
          <h3 class="block-title">✅ 9. Bài kiểm tra trắc nghiệm ngày học (Quiz Assessment)</h3>
          <p class="text-muted">Hoàn thành bài kiểm tra với độ chính xác tối thiểu 80% để ghi nhận tiến độ.</p>
          <div id="lessonQuizQuestions">
            ${lesson.quiz.map((q, qIdx) => `
              <div class="quiz-item-card" data-qindex="${qIdx}">
                <p class="quiz-question-text"><b>Câu ${qIdx + 1}:</b> ${escapeHtml(q.question)}</p>
                <div class="quiz-options-group">
                  ${q.options.map((opt, oIdx) => `
                    <label class="quiz-option-label">
                      <input type="radio" name="mainLessonQuiz_${qIdx}" value="${oIdx}">
                      <span>${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                </div>
                <div id="mainQuizFeedback_${qIdx}" class="q-feedback"></div>
              </div>
            `).join('')}
          </div>
          <button class="btn primary" id="submitLessonQuizBtn" style="margin-top:14px;">Nộp bài kiểm tra Ngày ${lesson.day}</button>
          <div id="lessonQuizSummaryBox" style="margin-top:12px;"></div>
        </div>
      `;
    }

    // 10. Completion Actions
    html += `
      <div class="lesson-block completion-block">
        <div class="completion-card">
          <div class="c-left">
            <h3>Hoàn thành bài học Ngày ${lesson.day}</h3>
            <p>Sau khi hoàn thành các hợp phần và đạt điểm kiểm tra, hãy bấm nút dưới đây để ghi nhận vào lịch sử học tập và chuyển tiếp sang ngày tiếp theo.</p>
          </div>
          <div class="c-right">
            <button class="btn ${isDone ? 'outline' : 'primary'} btn-lg" id="markLessonDoneBtn">
              ${isDone ? '✓ Đã hoàn thành (Bấm để học lại)' : 'Hoàn thành Ngày ' + lesson.day + ' & Tiếp tục →'}
            </button>
          </div>
        </div>
      </div>

      <!-- 11. Post-Lesson Recommendations (Week Linked) -->
      <div class="lesson-block post-lesson-rec-block" style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:16px;">
        <h3 class="block-title" style="color:#0369a1;margin-bottom:6px;">🎯 11. Luyện tập mở rộng liên kết Tuần ${lesson.week}</h3>
        <p style="font-size:13px;color:#0284c7;margin-bottom:16px;">Củng cố kỹ năng sau bài học ngày hôm nay với hệ thống bài luyện tập phản xạ và đọc hiểu được tuyển chọn:</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:12px;">
          <div class="rec-card" style="background:#fff;border:1px solid #e0f2fe;border-radius:12px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="badge" style="background:#e0f2fe;color:#0369a1;font-size:11px;">⚡ PHẢN XẠ NHANH</span>
              <h4 style="margin:8px 0 4px;font-size:14px;font-weight:750;color:var(--navy);">Luyện phản xạ Tuần ${lesson.week}</h4>
              <p style="font-size:12px;color:var(--muted);margin:0;">Luyện trả lời trực tiếp không xem trước đáp án, bấm giờ phản xạ và nhận diện từ khóa.</p>
            </div>
            <button class="btn btn-xs primary" id="recGoReflexBtn" style="margin-top:12px;">Luyện phản xạ ngay →</button>
          </div>

          <div class="rec-card" style="background:#fff;border:1px solid #e0f2fe;border-radius:12px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="badge" style="background:#fef3c7;color:#92400e;font-size:11px;">🎭 HỘI THOẠI TÌNH HUỐNG</span>
              <h4 style="margin:8px 0 4px;font-size:14px;font-weight:750;color:var(--navy);">Xử lý tình huống đa lượt</h4>
              <p style="font-size:12px;color:var(--muted);margin:0;">Thực hành phân vai, giải quyết tình huống nhà xưởng, báo cáo sự cố và bàn giao ca.</p>
            </div>
            <button class="btn btn-xs outline" id="recGoRoleplayBtn" style="margin-top:12px;">Vào hội thoại tình huống →</button>
          </div>

          <div class="rec-card" style="background:#fff;border:1px solid #e0f2fe;border-radius:12px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="badge" style="background:#dcfce7;color:#15803d;font-size:11px;">📖 ĐỌC HIỂU TIẾNG ANH</span>
              <h4 style="margin:8px 0 4px;font-size:14px;font-weight:750;color:var(--navy);">Đọc hiểu chuyên sâu (15 bài)</h4>
              <p style="font-size:12px;color:var(--muted);margin:0;">Luyện đọc có hỗ trợ âm thanh từng câu, tra từ vựng tương tác và làm bài trắc nghiệm.</p>
            </div>
            <button class="btn btn-xs outline" id="recGoReadingBtn" style="margin-top:12px;">Mở khu vực Đọc hiểu →</button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    navigateTo('dayLesson');

    // Attach event listeners for Day Lesson interactive elements
    attachDayLessonEvents(lesson);
  }

  function attachDayLessonEvents(lesson) {
    // Back button
    const backBtn = $('backToCurriculumBtn');
    if (backBtn) backBtn.onclick = () => navigateTo('curriculum');

    // Audio speak buttons
    containerSpeakButtons($('dayLessonContent'));

    // Listening controls & Interactive Dialogue
    const playAudio = $('playLessonAudio');
    const playSlow = $('playLessonSlow');
    const replayAudio = $('replayLessonAudio');
    const stopAudioBtn = $('stopLessonAudio');
    const toggleTranscript = $('toggleTranscriptBtn');
    const toggleViBtn = $('toggleDialogueViBtn');
    const voiceSettingsBtn = $('openVoiceModalFromLessonBtn');

    // Extract dialogue items
    let dialogueItems = [];
    if (lesson.listening) {
      if (Array.isArray(lesson.listening.dialogue) && lesson.listening.dialogue.length > 0) {
        dialogueItems = lesson.listening.dialogue;
      } else if (lesson.listening.transcript || lesson.listening.audio_text) {
        const raw = lesson.listening.transcript || lesson.listening.audio_text || '';
        const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        dialogueItems = lines.map((line, idx) => {
          const m = line.match(/^([A-Za-z0-9\s_-]+):\s*(.*)$/);
          if (m) return { speaker: m[1], text: m[2], vi: '' };
          return { speaker: `Câu ${idx + 1}`, text: line, vi: '' };
        });
      }
    }

    const dot = $('lessonAudioDot');
    const statusTxt = $('lessonAudioStatusText');
    function setAudioStatus(text, isPlaying = false, isError = false) {
      if (statusTxt) statusTxt.textContent = text;
      if (dot) {
        dot.className = 'audio-dot' + (isPlaying ? ' playing' : '') + (isError ? ' error' : '');
      }
    }

    function highlightTurn(idx) {
      $$('.dialogue-line-card').forEach((card, i) => {
        card.classList.toggle('playing', i === idx);
      });
    }

    if (playAudio && dialogueItems.length > 0) {
      playAudio.onclick = () => {
        setAudioStatus('Đang phát toàn bài...', true);
        if (window.speechEngine) {
          window.speechEngine.playDialogue(dialogueItems, {
            rate: window.speechEngine.voiceRate,
            onTurnChange: (turnIdx) => {
              highlightTurn(turnIdx);
              setAudioStatus(`Đang đọc câu ${turnIdx + 1} / ${dialogueItems.length}...`, true);
            },
            onComplete: () => {
              highlightTurn(-1);
              setAudioStatus('Đã phát xong toàn bài.');
            }
          });
        } else {
          const fullText = dialogueItems.map(d => d.text).join('. ');
          playTTS(fullText, 0.85);
        }
      };
    }

    if (playSlow && dialogueItems.length > 0) {
      playSlow.onclick = () => {
        setAudioStatus('Đang phát chậm (0.70x)...', true);
        if (window.speechEngine) {
          window.speechEngine.playDialogue(dialogueItems, {
            rate: 0.70,
            onTurnChange: (turnIdx) => {
              highlightTurn(turnIdx);
              setAudioStatus(`Đang đọc chậm câu ${turnIdx + 1} / ${dialogueItems.length}...`, true);
            },
            onComplete: () => {
              highlightTurn(-1);
              setAudioStatus('Đã phát xong.');
            }
          });
        } else {
          const fullText = dialogueItems.map(d => d.text).join('. ');
          playTTS(fullText, 0.70);
        }
      };
    }

    if (replayAudio && playAudio) {
      replayAudio.onclick = () => playAudio.click();
    }

    if (stopAudioBtn) {
      stopAudioBtn.onclick = () => {
        stopAudio();
        highlightTurn(-1);
        setAudioStatus('Đã dừng phát âm.');
      };
    }

    if (toggleTranscript) {
      toggleTranscript.onclick = () => {
        const b = $('lessonTranscript');
        if (b) b.classList.toggle('hidden');
      };
    }

    if (toggleViBtn) {
      toggleViBtn.onclick = () => {
        $$('.dialogue-vi').forEach(el => el.classList.toggle('hidden'));
      };
    }

    if (voiceSettingsBtn) {
      voiceSettingsBtn.onclick = () => {
        const modal = $('voiceSettingsModal');
        if (modal) modal.classList.remove('hidden');
      };
    }

    // Individual line play buttons
    $$('.play-turn-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.turn, 10);
        const item = dialogueItems[idx];
        if (!item) return;
        highlightTurn(idx);
        setAudioStatus(`Đang đọc câu ${idx + 1}...`, true);
        if (window.speechEngine) {
          window.speechEngine.speak(item.text, {
            onEnd: () => {
              highlightTurn(-1);
              setAudioStatus('Sẵn sàng');
            }
          });
        } else {
          playTTS(item.text);
        }
      };
    });

    $$('.play-turn-slow-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.turn, 10);
        const item = dialogueItems[idx];
        if (!item) return;
        highlightTurn(idx);
        setAudioStatus(`Đang đọc chậm câu ${idx + 1}...`, true);
        if (window.speechEngine) {
          window.speechEngine.speak(item.text, {
            rate: 0.70,
            onEnd: () => {
              highlightTurn(-1);
              setAudioStatus('Sẵn sàng');
            }
          });
        } else {
          playTTS(item.text, 0.70);
        }
      };
    });

    // Check listening quiz
    const checkListeningBtn = $('checkListeningQuizBtn');
    if (checkListeningBtn && lesson.listening && lesson.listening.questions) {
      checkListeningBtn.onclick = () => {
        lesson.listening.questions.forEach((q, idx) => {
          const selected = document.querySelector(`input[name="listenQ_${idx}"]:checked`);
          const fb = $(`listenQFeedback_${idx}`);
          if (!selected) {
            if (fb) fb.innerHTML = '<span class="text-danger">Hãy chọn một đáp án.</span>';
            return;
          }
          const isCorrect = parseInt(selected.value, 10) === q.answer;
          if (fb) {
            fb.innerHTML = isCorrect 
              ? `<span class="text-success">✓ Đúng! ${escapeHtml(q.explanation || '')}</span>`
              : `<span class="text-danger">✗ Chưa đúng. ${escapeHtml(q.explanation || '')}</span>`;
          }
        });
      };
    }

    // Speaking area
    initSpeakingRecorder(lesson);

    // Reading controls
    const readAloud = $('readAloudBtn');
    const toggleReadingTrans = $('toggleReadingTransBtn');
    if (readAloud && lesson.reading) readAloud.onclick = () => playTTS(lesson.reading.text, 0.82);
    if (toggleReadingTrans) toggleReadingTrans.onclick = () => {
      const b = $('readingTransBox');
      if (b) b.classList.toggle('hidden');
    };

    // Check reading quiz
    const checkReadingBtn = $('checkReadingQuizBtn');
    if (checkReadingBtn && lesson.reading && lesson.reading.questions) {
      checkReadingBtn.onclick = () => {
        lesson.reading.questions.forEach((q, idx) => {
          const selected = document.querySelector(`input[name="readQ_${idx}"]:checked`);
          const fb = $(`readQFeedback_${idx}`);
          if (!selected) {
            if (fb) fb.innerHTML = '<span class="text-danger">Hãy chọn một đáp án.</span>';
            return;
          }
          const isCorrect = parseInt(selected.value, 10) === q.answer;
          if (fb) {
            fb.innerHTML = isCorrect 
              ? `<span class="text-success">✓ Đúng! ${escapeHtml(q.explanation || '')}</span>`
              : `<span class="text-danger">✗ Chưa đúng. ${escapeHtml(q.explanation || '')}</span>`;
          }
        });
      };
    }

    // Writing unscramble checks
    $$('.check-unscramble-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = btn.dataset.idx;
        const sol = btn.dataset.sol.toLowerCase().replace(/[.,!?]/g, '').trim();
        const input = $(`unscrambleInput_${idx}`);
        const fb = $(`unscrambleFeedback_${idx}`);
        if (!input || !fb) return;
        const val = input.value.toLowerCase().replace(/[.,!?]/g, '').trim();
        if (val === sol) {
          fb.innerHTML = `<span class="text-success">✓ Chính xác!</span>`;
        } else {
          fb.innerHTML = `<span class="text-danger">✗ Chưa khớp. Đáp án mẫu: "${escapeHtml(btn.dataset.sol)}"</span>`;
        }
      };
    });

    // Writing fill blank checks
    $$('.check-fb-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = btn.dataset.idx;
        const ans = btn.dataset.ans.toLowerCase().trim();
        const input = $(`fbInput_${idx}`);
        const fb = $(`fbFeedback_${idx}`);
        if (!input || !fb) return;
        const val = input.value.toLowerCase().trim();
        if (val === ans) {
          fb.innerHTML = `<span class="text-success">✓ Đúng!</span>`;
        } else {
          fb.innerHTML = `<span class="text-danger">✗ Chưa đúng. Đáp án: "${escapeHtml(btn.dataset.ans)}"</span>`;
        }
      };
    });

    // Toggle model answers
    $$('.toggle-model-ans-btn').forEach(btn => {
      btn.onclick = () => {
        const targetId = btn.dataset.target;
        const el = $(targetId);
        if (el) el.classList.toggle('hidden');
      };
    });

    // Optional AI Writing Check via proxy
    $$('.ai-check-writing-btn').forEach(btn => {
      btn.onclick = async () => {
        const inputId = btn.dataset.input;
        const modelAns = btn.dataset.model;
        const inputEl = $(inputId);
        const fbEl = $(`aiWritingFeedback_${inputId}`);
        if (!inputEl || !fbEl) return;
        const text = inputEl.value.trim();
        if (!text) {
          fbEl.innerHTML = `<div class="feedback bad">Vui lòng viết câu của bạn trước khi nhờ AI sửa.</div>`;
          return;
        }
        fbEl.innerHTML = `<div class="feedback">Đang gửi bài viết đến AI cục bộ...</div>`;
        try {
          const res = await fetch("/api/ai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              task: "correct",
              text: `Học viên viết: "${text}". Câu mục tiêu: "${modelAns}". Hãy nhận xét ngữ pháp, dùng từ và cách diễn đạt tự nhiên.`
            })
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Không kết nối được server AI.");
          fbEl.innerHTML = `<div class="feedback">${escapeHtml(data.answer).replace(/\n/g, '<br>')}</div>`;
        } catch (err) {
          fbEl.innerHTML = `<div class="feedback bad"><b>Chưa bật AI:</b> ${escapeHtml(err.message)}<br><small>Hệ thống hoạt động offline hoàn chỉnh với đáp án mẫu. Để dùng AI, hãy cấu hình OPENAI_API_KEY trong file .env theo hướng dẫn.</small></div>`;
        }
      };
    });

    // Main Lesson Quiz Submission
    const submitQuizBtn = $('submitLessonQuizBtn');
    if (submitQuizBtn && lesson.quiz) {
      submitQuizBtn.onclick = () => {
        let correctCount = 0;
        let answeredCount = 0;
        lesson.quiz.forEach((q, idx) => {
          const selected = document.querySelector(`input[name="mainLessonQuiz_${idx}"]:checked`);
          const fb = $(`mainQuizFeedback_${idx}`);
          if (selected) {
            answeredCount++;
            const isCorrect = parseInt(selected.value, 10) === q.answer;
            if (isCorrect) correctCount++;
            if (fb) {
              fb.innerHTML = isCorrect 
                ? `<span class="text-success">✓ Đúng! ${escapeHtml(q.explanation || '')}</span>`
                : `<span class="text-danger">✗ Chưa đúng. Đáp án đúng: "${escapeHtml(q.options[q.answer])}". ${escapeHtml(q.explanation || '')}</span>`;
            }
          } else {
            if (fb) fb.innerHTML = `<span class="text-danger">Chưa chọn đáp án.</span>`;
          }
        });

        const totalQ = lesson.quiz.length;
        const pct = Math.round((correctCount / totalQ) * 100);
        const summaryBox = $('lessonQuizSummaryBox');
        if (summaryBox) {
          summaryBox.innerHTML = `
            <div class="feedback ${pct >= 80 ? '' : 'bad'}">
              <strong>Kết quả kiểm tra: ${correctCount} / ${totalQ} câu đúng (${pct}%)</strong><br>
              ${pct >= 80 
                ? '🎉 Xuất sắc! Bạn đã vượt qua bài kiểm tra ngày hôm nay.' 
                : 'Cần đạt tối thiểu 80% để ghi nhận hoàn thành. Hãy xem lại giải thích và thử lại.'}
            </div>
          `;
        }

        if (pct >= 80) {
          App.srs.completeLesson(lesson.day, pct);
          showToast(`Chúc mừng! Đã ghi nhận hoàn thành Ngày ${lesson.day}.`);
          const markBtn = $('markLessonDoneBtn');
          if (markBtn) markBtn.textContent = `✓ Đã hoàn thành (Điểm: ${pct}%)`;
        }
      };
    }

    // Mark Lesson Done Button
    const markDoneBtn = $('markLessonDoneBtn');
    if (markDoneBtn) {
      markDoneBtn.onclick = () => {
        App.srs.completeLesson(lesson.day, 100);
        showToast(`Đã ghi nhận hoàn thành Ngày ${lesson.day}!`);
        // Navigate to next day if available
        if (lesson.day < 365) {
          openDayLesson(lesson.day + 1);
        } else {
          showToast(`Chúc mừng bạn đã hoàn thành trọn vẹn Lộ trình 365 Ngày!`);
          navigateTo('curriculum');
        }
      };
    }

    // Add to SRS buttons
    $$('.srs-add-btn').forEach(btn => {
      btn.onclick = () => {
        const word = btn.dataset.word;
        // Find in vocab bank
        const match = App.vocabBank.find(v => v.en.toLowerCase() === word.toLowerCase());
        const id = match ? match.id : `voc-custom-${word.toLowerCase()}`;
        App.srs.reviewWord(id, 2);
        btn.textContent = '✓ Đã vào SRS';
        btn.disabled = true;
        showToast(`Đã đưa từ "${word}" vào hàng đợi Ôn tập thông minh.`);
      };
    });

    // Post-Lesson Recommendations navigation
    const recReflex = $('recGoReflexBtn');
    if (recReflex) {
      recReflex.onclick = () => {
        navigateTo('reflex');
        const tab = document.querySelector('.reflex-tab-btn[data-tab="quick"]');
        if (tab) tab.click();
      };
    }
    const recRoleplay = $('recGoRoleplayBtn');
    if (recRoleplay) {
      recRoleplay.onclick = () => {
        navigateTo('reflex');
        const tab = document.querySelector('.reflex-tab-btn[data-tab="roleplay"]');
        if (tab) tab.click();
      };
    }
    const recReading = $('recGoReadingBtn');
    if (recReading) {
      recReading.onclick = () => {
        navigateTo('reading');
        const matching = App.readingData.find(r => r.week === lesson.week) || App.readingData[0];
        if (matching) openReadingPassage(matching.id);
      };
    }
  }

  // Voice recording helper for Speaking
  function initSpeakingRecorder(lesson) {
    const recordBtn = $('micRecordBtn');
    const stopBtn = $('micStopBtn');
    const statusText = $('micStatusText');
    const textArea = $('micRecognizedText');
    const evalBtn = $('evaluateSpeakingBtn');
    const resultBox = $('speakingResultBox');

    if (!recordBtn || !textArea) return;

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      if (statusText) statusText.textContent = 'Trình duyệt này không hỗ trợ SpeechRecognition. Bạn có thể tự gõ văn bản vào ô dưới.';
      recordBtn.disabled = true;
      return;
    }

    let rec = null;
    try {
      rec = new SR();
      rec.lang = 'en-US';
      rec.interimResults = true;
      rec.continuous = false;

      rec.onresult = e => {
        let text = '';
        for (let i = 0; i < e.results.length; i++) {
          text += e.results[i][0].transcript + ' ';
        }
        textArea.value = text.trim();
      };

      rec.onerror = e => {
        if (statusText) statusText.textContent = `Lỗi micro: ${e.error}. Kiểm tra quyền micro hoặc gõ thủ công.`;
        recordBtn.disabled = false;
        stopBtn.disabled = true;
      };

      rec.onend = () => {
        if (statusText) statusText.textContent = 'Đã dừng nghe. Bấm nút so sánh bên dưới để xem kết quả.';
        recordBtn.disabled = false;
        stopBtn.disabled = true;
      };

      recordBtn.onclick = () => {
        try {
          rec.start();
          recordBtn.disabled = true;
          stopBtn.disabled = false;
          if (statusText) statusText.textContent = 'Đang nghe... Hãy nói câu mục tiêu to, rõ ràng.';
        } catch (err) {
          showToast('Micro đang bận hoặc không thể khởi động.');
        }
      };

      stopBtn.onclick = () => {
        if (rec) rec.stop();
      };
    } catch (e) {
      console.warn('SpeechRecognition init error:', e);
    }

    if (evalBtn && lesson.speaking) {
      evalBtn.onclick = () => {
        const said = textArea.value.toLowerCase().replace(/[.,!?]/g, '').trim();
        const target = (lesson.speaking.target_sentence || '').toLowerCase().replace(/[.,!?]/g, '').trim();
        if (!said) {
          if (resultBox) resultBox.innerHTML = `<div class="feedback bad">Vui lòng nói hoặc gõ câu của bạn trước.</div>`;
          return;
        }

        const targetWords = target.split(/\s+/);
        const matches = targetWords.filter(w => said.includes(w));
        const score = Math.round((matches.length / targetWords.length) * 100);

        if (resultBox) {
          resultBox.innerHTML = `
            <div class="feedback ${score >= 70 ? '' : 'bad'}" style="margin-top:10px;">
              <b>Độ khớp từ vựng: ${score}%</b> (${matches.length}/${targetWords.length} từ khóa)<br>
              ${score >= 70 
                ? '👍 Tốt lắm! Câu nói mạch lạc và chứa các từ vựng cốt lõi.' 
                : 'Hãy nghe lại câu mẫu, chú ý ngắt nghỉ từng cụm và phát âm lại rõ hơn.'}<br>
              <small><i>Lưu ý: Điểm số dựa trên so sánh văn bản nhận diện, không thay thế giáo viên phát âm trực tiếp.</i></small>
            </div>
          `;
        }
      };
    }
  }

  // ==========================================
  // 4. VOCABULARY BANK & ANKI FLASHCARDS CONTROLLER
  // ==========================================
  function syncVocabBank() {
    const defaultBank = window.VOCAB_BANK || [];
    const customBank = (App.srs && typeof App.srs.getCustomVocab === 'function')
      ? App.srs.getCustomVocab()
      : [];
    // Custom words at the top so learner sees them right away
    App.vocabBank = [...customBank, ...defaultBank];
    const totalCount = App.vocabBank.length;
    const customCount = customBank.length;
    const titleEl = $('vocabBankMainTitle');
    if (titleEl) {
      titleEl.textContent = `Kho Từ Vựng Toàn Diện (${totalCount.toLocaleString()} Mục từ${customCount > 0 ? ` · ${customCount} từ tự thêm` : ''})`;
    }
    return App.vocabBank;
  }

  function renderVocabBank() {
    syncVocabBank();
    const searchInput = $('vocabSearchInput');
    const categoryFilter = $('vocabCategoryFilter');
    const levelFilter = $('vocabLevelFilter');
    const statusFilter = $('vocabStatusFilter');
    const countDisplay = $('vocabCountDisplay');
    const container = $('vocabBankContent');

    if (!container) return;

    // Filter Vocab
    const query = (App.vocabSearch || '').toLowerCase().trim();
    const cat = App.vocabCategory || 'all';
    const lvl = App.vocabLevel || 'all';
    const stat = App.vocabStatus || 'all';
    const srsData = App.srs.state.vocab_srs;

    const filtered = App.vocabBank.filter(item => {
      // Search
      if (query) {
        const matchEn = (item.en || '').toLowerCase().includes(query);
        const matchVi = (item.vi || '').toLowerCase().includes(query);
        const matchColloc = (item.collocation || '').toLowerCase().includes(query);
        const matchNotes = (item.notes || '').toLowerCase().includes(query);
        if (!matchEn && !matchVi && !matchColloc && !matchNotes) return false;
      }
      // Category
      if (cat === 'custom') {
        if (!item.is_custom) return false;
      } else if (cat !== 'all' && item.category !== cat) {
        return false;
      }
      // Level
      if (lvl !== 'all' && item.level !== lvl) return false;
      // Status
      if (stat === 'custom') {
        if (!item.is_custom) return false;
      } else if (stat !== 'all') {
        const itemState = srsData[item.id] ? srsData[item.id].state : 'new';
        const isDiff = srsData[item.id] ? srsData[item.id].is_difficult : false;
        if (stat === 'difficult' && !isDiff) return false;
        if (stat !== 'difficult' && itemState !== stat) return false;
      }
      return true;
    });

    if (countDisplay) {
      const customTotal = App.srs.getCustomVocab().length;
      countDisplay.innerHTML = `Hiển thị <b>${filtered.length}</b> / <b>${App.vocabBank.length}</b> từ vựng ${customTotal > 0 ? `(Đã có <b style="color:#059669;">${customTotal}</b> từ tự thêm ✍️)` : ''}`;
    }

    // Render Mode: Table or Anki Flashcard
    if (App.vocabMode === 'flashcard') {
      renderAnkiFlashcardMode(filtered, container);
    } else {
      renderTableMode(filtered, container);
    }
  }

  function renderTableMode(list, container) {
    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="padding:36px;text-align:center;">
          <p style="font-size:15px;color:var(--muted);margin-bottom:12px;">Không tìm thấy từ vựng phù hợp với bộ lọc hiện tại.</p>
          <button class="btn primary btn-sm" onclick="$('openAddCustomWordBtn')?.click()">➕ Thêm từ vựng mới ngay</button>
        </div>
      `;
      return;
    }

    const srsData = App.srs.state.vocab_srs;

    container.innerHTML = `
      <div class="vocab-table-responsive">
        <table class="vocab-data-table">
          <thead>
            <tr>
              <th>Từ / Cụm từ</th>
              <th>Loại từ & IPA</th>
              <th>Nghĩa tiếng Việt</th>
              <th>Collocation / Cụm đi cùng</th>
              <th>Ví dụ ngữ cảnh</th>
              <th>Chủ đề & Cấp độ</th>
              <th>Trạng thái SRS</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(v => {
              const itemSrs = srsData[v.id] || { state: 'new', is_difficult: false };
              return `
                <tr class="vocab-row ${itemSrs.is_difficult ? 'row-difficult' : ''} ${v.is_custom ? 'row-custom' : ''}">
                  <td class="col-en">
                    <div style="display:flex;align-items:center;gap:6px;">
                      <strong>${escapeHtml(v.en)}</strong>
                      ${v.is_custom ? '<span class="custom-tag">✍️ Tự thêm</span>' : ''}
                    </div>
                    <button class="audio-btn" data-speak="${escapeHtml(v.en)}" title="Nghe phát âm">🔊</button>
                  </td>
                  <td class="col-ipa">
                    <span class="pos-badge">${escapeHtml(v.pos || '')}</span><br>
                    <small class="ipa-text">${escapeHtml(v.ipa || '')}</small>
                  </td>
                  <td class="col-vi">
                    ${escapeHtml(v.vi)}
                    ${v.notes ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;">💡 ${escapeHtml(v.notes)}</div>` : ''}
                  </td>
                  <td class="col-colloc"><i>${escapeHtml(v.collocation || '—')}</i></td>
                  <td class="col-example">
                    <div class="ex-en">"${escapeHtml(v.example || '')}"</div>
                    <small class="ex-vi">${escapeHtml(v.example_vi || '')}</small>
                  </td>
                  <td class="col-meta">
                    <span class="chip-tag">${escapeHtml(v.category)}</span><br>
                    <small>${escapeHtml(v.topic || '')} · ${v.level || ''}</small>
                  </td>
                  <td class="col-srs">
                    <span class="srs-status-tag ${itemSrs.state}">
                      ${itemSrs.state === 'mastered' ? '✓ Đã thuộc' : itemSrs.state === 'review' ? '🔄 Cần ôn' : itemSrs.state === 'learning' ? '📖 Đang học' : '🌱 Từ mới'}
                    </span>
                    ${itemSrs.is_difficult ? '<span class="diff-tag">★ Khó</span>' : ''}
                  </td>
                  <td class="col-actions">
                    <div style="display:flex;gap:4px;flex-wrap:wrap;">
                      <button class="btn btn-xs ${itemSrs.is_difficult ? 'primary' : 'outline'} toggle-diff-btn" data-id="${v.id}" title="Đánh dấu từ khó">
                        ${itemSrs.is_difficult ? '★ Bỏ khó' : '☆ Khó'}
                      </button>
                      ${v.is_custom ? `
                        <button class="btn btn-xs outline edit-custom-btn" data-id="${v.id}" title="Chỉnh sửa từ vựng này">✏️ Sửa</button>
                        <button class="btn btn-xs outline delete-custom-btn" data-id="${v.id}" style="color:#dc2626;border-color:#fca5a5;" title="Xóa từ vựng này">🗑️</button>
                      ` : ''}
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    containerSpeakButtons(container);

    // Toggle difficult buttons
    container.querySelectorAll('.toggle-diff-btn').forEach(b => {
      b.onclick = () => {
        const id = b.dataset.id;
        const isDiff = App.srs.toggleDifficult(id);
        showToast(isDiff ? 'Đã đánh dấu từ khó nhớ ★' : 'Đã bỏ đánh dấu khó');
        renderVocabBank();
      };
    });

    // Edit custom word
    container.querySelectorAll('.edit-custom-btn').forEach(b => {
      b.onclick = () => {
        openEditCustomWordModal(b.dataset.id);
      };
    });

    // Delete custom word
    container.querySelectorAll('.delete-custom-btn').forEach(b => {
      b.onclick = () => {
        const wordId = b.dataset.id;
        const word = App.vocabBank.find(w => w.id === wordId);
        const name = word ? word.en : 'từ này';
        if (confirm(`Bạn có chắc chắn muốn xóa từ "${name}" khỏi kho từ vựng cá nhân?`)) {
          App.srs.deleteCustomWord(wordId);
          showToast(`Đã xóa từ "${name}".`);
          syncVocabBank();
          renderVocabBank();
          renderDashboard();
        }
      };
    });
  }

  // Anki Flashcard Experience
  function renderAnkiFlashcardMode(list, container) {
    const srsData = App.srs.state.vocab_srs;
    const dueIds = App.srs.getDueVocabIds();
    const customList = App.srs.getCustomVocab();
    const diffList = App.vocabBank.filter(v => srsData[v.id]?.is_difficult);
    const learningList = App.vocabBank.filter(v => srsData[v.id]?.state === 'learning');

    // Build the Deck Queue if not active or deck changed
    if (!App.ankiSessionActive || App.ankiQueue.length === 0) {
      initAnkiQueue(App.ankiDeck, list);
    }

    const deckCounts = {
      due: dueIds.length,
      custom: customList.length,
      difficult: diffList.length,
      learning: learningList.length,
      all: list.length
    };

    // If active session is completed
    if (App.ankiCurrentIndex >= App.ankiQueue.length) {
      container.innerHTML = `
        <div class="flashcard-workspace" style="max-width:560px;">
          <!-- Deck Selector -->
          ${renderAnkiDeckSelector(deckCounts)}

          <div style="background:#fff;border:2px solid #bbf7d0;border-radius:20px;padding:36px 24px;text-align:center;box-shadow:var(--shadow);">
            <div style="font-size:48px;margin-bottom:12px;">🎉</div>
            <h3 style="font-size:22px;font-weight:800;color:var(--navy);margin-bottom:8px;">Hoàn Thành Buổi Ôn Tập Anki!</h3>
            <p style="font-size:14px;color:var(--muted);margin-bottom:20px;line-height:1.5;">
              Bạn đã ôn hết các thẻ trong bộ đã chọn hôm nay. Sự kiên trì mỗi ngày là chìa khóa để ghi nhớ dài hạn!
            </p>

            <div style="display:flex;justify-content:center;gap:16px;margin-bottom:24px;">
              <div style="background:#eff6ff;padding:12px 18px;border-radius:12px;">
                <strong style="font-size:20px;color:#1d4ed8;display:block;">${App.ankiReviewedCount}</strong>
                <small style="color:#60a5fa;font-size:12px;">Lượt thẻ ghi nhớ</small>
              </div>
              <div style="background:#fef2f2;padding:12px 18px;border-radius:12px;">
                <strong style="font-size:20px;color:#dc2626;display:block;">${App.ankiAgainCount}</strong>
                <small style="color:#f87171;font-size:12px;">Lượt ôn lại (Again)</small>
              </div>
            </div>

            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
              <button class="btn primary" id="ankiRestartDeckBtn">🔄 Ôn lại bộ thẻ này</button>
              <button class="btn outline" id="ankiSwitchToDueBtn">⚡ Ôn từ đến hạn (${deckCounts.due})</button>
              <button class="btn light" id="ankiBackToTableBtn">📋 Xem danh sách</button>
            </div>
          </div>
        </div>
      `;

      bindDeckSelectorEvents(container, list);

      $('ankiRestartDeckBtn')?.addEventListener('click', () => {
        initAnkiQueue(App.ankiDeck, list, true);
        renderAnkiFlashcardMode(list, container);
      });
      $('ankiSwitchToDueBtn')?.addEventListener('click', () => {
        App.ankiDeck = 'due';
        initAnkiQueue('due', list, true);
        renderAnkiFlashcardMode(list, container);
      });
      $('ankiBackToTableBtn')?.addEventListener('click', () => {
        App.vocabMode = 'table';
        $('vocabModeTableBtn')?.classList.add('active');
        $('vocabModeFlashcardBtn')?.classList.remove('active');
        renderVocabBank();
      });
      return;
    }

    const card = App.ankiQueue[App.ankiCurrentIndex];
    if (!card) return;

    const isEnFront = App.flashcardDirection === 'en-vi';
    const intervals = App.srs.getEstimatedIntervals(card.id);
    const cardSrs = srsData[card.id] || { state: 'new', reps: 0 };
    const remainingCount = App.ankiQueue.length - App.ankiCurrentIndex;

    container.innerHTML = `
      <div class="flashcard-workspace">
        <!-- Deck Selector Tabs -->
        ${renderAnkiDeckSelector(deckCounts)}

        <!-- Anki Session Status Bar -->
        <div class="anki-status-bar">
          <div class="anki-counts-group">
            <span class="anki-count-tag new" title="Số thẻ còn lại trong lượt học này">
              🔵 Còn lại: <b>${remainingCount}</b>
            </span>
            <span class="anki-count-tag learning" title="Số lần cần lặp lại (Again)">
              🔴 Cần lặp lại: <b>${App.ankiAgainCount}</b>
            </span>
            <span class="anki-count-tag review" title="Số thẻ đã đánh giá tốt/dễ">
              🟢 Đã thuộc: <b>${App.ankiReviewedCount}</b>
            </span>
          </div>

          <div style="display:flex;align-items:center;gap:12px;">
            <label style="font-size:12px;color:var(--muted);display:flex;align-items:center;gap:4px;cursor:pointer;">
              <input type="checkbox" id="ankiAutoSpeakToggle" ${App.ankiAutoSpeak ? 'checked' : ''}>
              🔊 Tự phát âm
            </label>
            <button class="btn btn-xs outline" id="toggleFlashcardDirBtn" title="Đảo chiều thẻ">
              ⇄ ${isEnFront ? 'Anh → Việt' : 'Việt → Anh'}
            </button>
          </div>
        </div>

        <!-- Flashcard Box -->
        <div class="flashcard-box ${App.flashcardFlipped ? 'flipped' : ''}" id="flashcardElement">
          <div class="card-front">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:12px;">
              <span class="card-label">${isEnFront ? 'TIẾNG ANH' : 'TIẾNG VIỆT'}</span>
              <div style="display:flex;gap:4px;">
                ${card.is_custom ? '<span class="custom-tag">✍️ Tự thêm</span>' : ''}
                <span class="pos-badge">${escapeHtml(card.pos || '')}</span>
              </div>
            </div>

            <div class="card-word">${escapeHtml(isEnFront ? card.en : card.vi)}</div>
            ${isEnFront && card.ipa ? `<div class="card-ipa">${escapeHtml(card.ipa)}</div>` : ''}

            <div class="card-hint text-muted" style="margin-top:20px;">
              👉 Bấm vào thẻ hoặc nhấn phím <span class="anki-key">Space</span> để xem đáp án
            </div>

            ${isEnFront ? `
              <div style="margin-top:16px;">
                <button class="btn btn-sm light card-audio-btn" data-speak="${escapeHtml(card.en)}">🔊 Nghe phát âm</button>
              </div>
            ` : ''}
          </div>

          <div class="card-back">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:8px;">
              <span class="card-label">${isEnFront ? 'NGHĨA TIẾNG VIỆT' : 'TIẾNG ANH'}</span>
              <div style="display:flex;gap:4px;">
                ${card.is_custom ? '<span class="custom-tag">✍️ Tự thêm</span>' : ''}
                <span class="chip-tag">${escapeHtml(card.category || '')}</span>
              </div>
            </div>

            <div class="card-word" style="color:#047857;">${escapeHtml(isEnFront ? card.vi : card.en)}</div>
            ${card.ipa ? `<div class="card-ipa">${escapeHtml(card.ipa)}</div>` : ''}
            
            ${card.collocation ? `
              <div class="card-colloc" style="font-size:13px;color:#1e40af;background:#eff6ff;padding:6px 12px;border-radius:8px;margin:8px auto;max-width:440px;">
                <b>Collocation:</b> <i>${escapeHtml(card.collocation)}</i>
              </div>
            ` : ''}

            ${card.example ? `
              <div class="card-example">
                "${escapeHtml(card.example)}"<br>
                <small>${escapeHtml(card.example_vi || '')}</small>
              </div>
            ` : ''}

            ${card.notes ? `
              <div style="font-size:12px;color:var(--muted);margin-top:6px;">💡 <i>Ghi chú: ${escapeHtml(card.notes)}</i></div>
            ` : ''}

            <div style="margin-top:14px;">
              <button class="btn btn-sm light card-audio-btn" data-speak="${escapeHtml(card.en)}">🔊 Phát âm lại [R]</button>
            </div>
          </div>
        </div>

        <!-- Anki 4 Rating Buttons -->
        <div class="flashcard-srs-actions">
          <button class="btn rating-btn again" data-rating="1" title="Phím tắt: 1">
            <b><span class="anki-key">1</span> Lặp lại</b>
            <small>${intervals[1].text}</small>
          </button>
          <button class="btn rating-btn hard" data-rating="2" title="Phím tắt: 2">
            <b><span class="anki-key">2</span> Khó</b>
            <small>${intervals[2].text}</small>
          </button>
          <button class="btn rating-btn good" data-rating="3" title="Phím tắt: 3 hoặc Space">
            <b><span class="anki-key">3</span> Nhớ tốt</b>
            <small>${intervals[3].text}</small>
          </button>
          <button class="btn rating-btn easy" data-rating="4" title="Phím tắt: 4">
            <b><span class="anki-key">4</span> Quá dễ</b>
            <small>${intervals[4].text}</small>
          </button>
        </div>

        <!-- Shortcuts Hint -->
        <div class="anki-shortcuts-hint">
          ⌨️ <b>Phím tắt Anki:</b>
          <span><span class="anki-key">Space</span> Lật thẻ / Tốt</span>
          <span><span class="anki-key">1</span> Lặp lại</span>
          <span><span class="anki-key">2</span> Khó</span>
          <span><span class="anki-key">3</span> Tốt</span>
          <span><span class="anki-key">4</span> Dễ</span>
          <span><span class="anki-key">R</span> Nghe</span>
        </div>
      </div>
    `;

    bindDeckSelectorEvents(container, list);

    // Auto speak toggle
    const autoSpeakCb = $('ankiAutoSpeakToggle');
    if (autoSpeakCb) {
      autoSpeakCb.onchange = (e) => {
        App.ankiAutoSpeak = e.target.checked;
      };
    }

    // Flip card click
    const fc = $('flashcardElement');
    if (fc) {
      fc.onclick = (e) => {
        if (e.target.closest('button')) return;
        App.flashcardFlipped = !App.flashcardFlipped;
        fc.classList.toggle('flipped', App.flashcardFlipped);
        if (App.flashcardFlipped && App.ankiAutoSpeak) {
          playTTS(card.en, 0.85);
        }
      };
    }

    // Toggle direction
    const dirBtn = $('toggleFlashcardDirBtn');
    if (dirBtn) {
      dirBtn.onclick = () => {
        App.flashcardDirection = App.flashcardDirection === 'en-vi' ? 'vi-en' : 'en-vi';
        App.flashcardFlipped = false;
        renderAnkiFlashcardMode(list, container);
      };
    }

    // Anki Rating clicks
    container.querySelectorAll('.rating-btn').forEach(btn => {
      btn.onclick = () => {
        const rating = parseInt(btn.dataset.rating, 10);
        App.srs.reviewWord(card.id, rating);

        if (rating === 1) {
          // In Anki: Again inserts the card back into the active queue
          App.ankiQueue.push(card);
          App.ankiAgainCount++;
          showToast('🔴 Đã xếp từ vào cuối lượt ôn để học lại!');
        } else {
          App.ankiReviewedCount++;
          showToast(`Đã ghi nhận: ${rating === 2 ? 'Khó (2)' : rating === 3 ? 'Tốt (3)' : 'Quá dễ (4)'}`);
        }

        App.ankiCurrentIndex++;
        App.flashcardFlipped = false;
        renderAnkiFlashcardMode(list, container);
      };
    });

    containerSpeakButtons(container);
  }

  // ==========================================
  // MY CARDS (BỘ THẺ TỰ HỌC CÁ NHÂN) CONTROLLER
  // ==========================================

  // Generate First-Letter Cloze Hint (e.g. "Good morning!" -> "G___ m______!")
  function generateClozeHint(text) {
    if (!text) return '';
    return text.replace(/\b([a-zA-Z0-9])([a-zA-Z0-9]*)\b/g, (match, firstLetter, rest) => {
      return firstLetter + '_'.repeat(rest.length);
    });
  }

  // Generate word-by-word diff comparison for typing errors
  function generateDiffHtml(userInput, correctText) {
    const userWords = (userInput || '').trim().split(/\s+/);
    const correctWords = (correctText || '').trim().split(/\s+/);

    const diffSpans = correctWords.map((cw, idx) => {
      const uw = userWords[idx] || '';
      const cleanCw = cw.toLowerCase().replace(/[^\w]/g, '');
      const cleanUw = uw.toLowerCase().replace(/[^\w]/g, '');
      if (cleanCw === cleanUw) {
        return `<span style="color:#059669;font-weight:700;">${escapeHtml(cw)}</span>`;
      } else {
        return `<span style="color:#dc2626;text-decoration:underline;font-weight:700;background:#fee2e2;padding:2px 4px;border-radius:4px;" title="Đáp án đúng: ${escapeHtml(cw)}">${escapeHtml(cw)}</span>`;
      }
    });

    return diffSpans.join(' ');
  }

  // Clean text for comparing
  function normalizeTextForComparison(text) {
    return (text || '')
      .toLowerCase()
      .trim()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?'"“”]/g, '')
      .replace(/\s+/g, ' ');
  }

  // Get Level Badge HTML
  function getMyCardLevelBadgeHtml(level) {
    switch (level) {
      case 'again':
        return '<span class="card-level-badge again">🔁 Học lại</span>';
      case 'day1':
        return '<span class="card-level-badge day1">🔵 Nhớ 1 ngày</span>';
      case 'day3':
        return '<span class="card-level-badge day3">🟢 Đã nhớ 3 ngày</span>';
      case 'day6':
        return '<span class="card-level-badge day6">🟣 Rất nhớ 6 ngày</span>';
      default:
        return '<span class="card-level-badge new">🌱 Mới</span>';
    }
  }

  // Render 4 Memory Rating Buttons
  function render4RatingButtonsHtml() {
    return `
      <div style="margin-top:20px;">
        <div style="font-size:12px;font-weight:750;color:var(--muted);margin-bottom:10px;text-align:center;">
          ĐÁNH GIÁ MỨC ĐỘ GHI NHỚ (Hệ thống sẽ tự động lên lịch nhắc lại):
        </div>
        <div class="mycard-memory-ratings">
          <button class="mem-btn again" data-rating="1" title="Phím tắt: 1">
            <strong>🔁 Học lại</strong>
            <small>Lặp lại trong phiên</small>
          </button>
          <button class="mem-btn day1" data-rating="2" title="Phím tắt: 2">
            <strong>🔵 Nhớ 1 ngày</strong>
            <small>Ôn lại sau 1 ngày</small>
          </button>
          <button class="mem-btn day3" data-rating="3" title="Phím tắt: 3">
            <strong>🟢 Đã nhớ 3 ngày</strong>
            <small>Ôn lại sau 3 ngày</small>
          </button>
          <button class="mem-btn day6" data-rating="4" title="Phím tắt: 4">
            <strong>🟣 Rất nhớ 6 ngày</strong>
            <small>Ôn lại sau 6 ngày</small>
          </button>
        </div>
      </div>
    `;
  }

  // Main My Cards View Controller
  function renderMyCardsView() {
    const decks = App.srs.getMyDecks();
    if (!Array.isArray(decks) || decks.length === 0) {
      App.srs.addDeck('Tiếng Anh hằng ngày', 'Các mẫu câu và cụm từ giao tiếp hằng ngày thông dụng');
    }

    const currentDecks = App.srs.getMyDecks();
    const hasCurrentDeck = currentDecks.some(d => d.id === App.mycardsSelectedDeckId);
    if (!hasCurrentDeck && currentDecks.length > 0) {
      App.mycardsSelectedDeckId = currentDecks[0].id;
    }

    // Render deck navigation
    renderMyDecksNav();

    // Toggle sub-views (Practice vs List)
    const practiceHub = $('mycardsPracticeHub');
    const listHub = $('mycardsListHub');
    const practiceTabBtn = $('tabMyCardsPracticeBtn');
    const listTabBtn = $('tabMyCardsListBtn');

    if (practiceTabBtn) practiceTabBtn.classList.toggle('active', App.mycardsViewTab === 'practice');
    if (listTabBtn) listTabBtn.classList.toggle('active', App.mycardsViewTab === 'list');

    if (App.mycardsViewTab === 'practice') {
      if (practiceHub) practiceHub.classList.remove('hidden');
      if (listHub) listHub.classList.add('hidden');

      if (!App.mycardsQueue || App.mycardsQueue.length === 0 || App.mycardsQueueDeckId !== App.mycardsSelectedDeckId) {
        initMyCardsPracticeQueue(true);
      }
      renderMyCardsPractice();
    } else {
      if (practiceHub) practiceHub.classList.add('hidden');
      if (listHub) listHub.classList.remove('hidden');
      renderMyCardsList();
    }
  }

  // Render Horizontal Decks Nav
  function renderMyDecksNav() {
    const nav = $('myDecksNavContainer');
    if (!nav) return;
    const decks = App.srs.getMyDecks();
    nav.innerHTML = '';

    decks.forEach(deck => {
      const stats = App.srs.getMyCardsStats(deck.id);
      const btn = document.createElement('button');
      btn.className = `mycards-deck-btn ${deck.id === App.mycardsSelectedDeckId ? 'active' : ''}`;
      btn.innerHTML = `
        <span>📁 ${escapeHtml(deck.name)}</span>
        <span class="deck-count-pill">${stats.total} thẻ</span>
      `;
      btn.onclick = () => {
        if (App.mycardsSelectedDeckId !== deck.id) {
          App.mycardsSelectedDeckId = deck.id;
          initMyCardsPracticeQueue(true);
          renderMyCardsView();
        }
      };
      nav.appendChild(btn);
    });

    // Update Right Deck Info
    const activeDeck = decks.find(d => d.id === App.mycardsSelectedDeckId);
    const infoEl = $('myDeckInfoRight');
    if (infoEl && activeDeck) {
      const stats = App.srs.getMyCardsStats(activeDeck.id);
      infoEl.innerHTML = `Chủ đề: <strong style="color:var(--navy);">${escapeHtml(activeDeck.name)}</strong> (${stats.total} thẻ • ${stats.due} cần ôn)`;
    }
  }

  // Initialize Practice Queue for active deck
  function initMyCardsPracticeQueue(resetIndex = false) {
    const cards = App.srs.getMyCards(App.mycardsSelectedDeckId);
    let queue = [...cards];

    if (App.mycardsShuffle) {
      for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
    }

    App.mycardsQueue = queue;
    App.mycardsQueueDeckId = App.mycardsSelectedDeckId;
    if (resetIndex) {
      App.mycardsCurrentIdx = 0;
    }
    App.mycardsCardRevealed = false;
    App.mycardsMixedModeMap = {};
  }

  // Render Practice Hub (4 Modes)
  function renderMyCardsPractice() {
    const container = $('mycardsPracticeCardContainer');
    if (!container) return;

    const stats = App.srs.getMyCardsStats(App.mycardsSelectedDeckId);
    if ($('myPracticeAgainBadge')) $('myPracticeAgainBadge').textContent = `🔁 Cần ôn: ${stats.due}`;
    if ($('myPracticeDoneBadge')) $('myPracticeDoneBadge').textContent = `🟢 Đã nhớ: ${stats.day1 + stats.day3 + stats.day6}`;

    // Mode chips active states
    $$('.mycard-mode-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.mode === App.mycardsPracticeMode);
    });

    // Shuffle button label
    const shuffleBtn = $('toggleMyCardShuffleBtn');
    if (shuffleBtn) {
      shuffleBtn.innerHTML = App.mycardsShuffle ? '🔀 Đang bật trộn thứ tự' : '➡️ Thứ tự tuần tự';
      shuffleBtn.classList.toggle('primary', App.mycardsShuffle);
    }

    // Auto-speak toggle state
    const autoSpeakCheck = $('myCardAutoSpeakToggle');
    if (autoSpeakCheck) {
      autoSpeakCheck.checked = App.mycardsAutoSpeak;
    }

    // Case 1: Empty Deck
    if (!App.mycardsQueue || App.mycardsQueue.length === 0) {
      if ($('myPracticeCounterBadge')) $('myPracticeCounterBadge').textContent = 'Thẻ 0 / 0';
      container.innerHTML = `
        <div class="mycard-practice-card" style="padding:48px 24px;">
          <div style="font-size:48px;margin-bottom:12px;">📚</div>
          <h3 style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:8px;">Chủ đề này chưa có thẻ từ vựng nào!</h3>
          <p style="font-size:13px;color:var(--muted);max-width:440px;margin:0 auto 20px;">
            Hãy thêm các từ vựng hoặc câu bạn muốn luyện tập mỗi ngày để hệ thống lên lịch ôn tập thông minh cho bạn.
          </p>
          <button class="btn primary" id="emptyAddCardBtn">➕ Thêm thẻ đầu tiên vào chủ đề này</button>
        </div>
      `;
      const btn = $('emptyAddCardBtn');
      if (btn) btn.onclick = () => openAddMyCardModal();
      return;
    }

    // Case 2: Session Finished
    if (App.mycardsCurrentIdx >= App.mycardsQueue.length) {
      if ($('myPracticeCounterBadge')) $('myPracticeCounterBadge').textContent = `Hoàn thành (${App.mycardsQueue.length}/${App.mycardsQueue.length})`;
      container.innerHTML = `
        <div class="mycard-practice-card" style="padding:40px 24px;">
          <div style="font-size:52px;margin-bottom:12px;">🎉</div>
          <h3 style="font-size:22px;font-weight:800;color:var(--navy);margin-bottom:8px;">Xuất sắc! Đã hoàn thành lượt ôn tập!</h3>
          <p style="font-size:14px;color:var(--muted);max-width:480px;margin:0 auto 24px;">
            Bạn đã luyện tập qua toàn bộ các thẻ trong chủ đề này. Hãy duy trì chuỗi học mỗi ngày để kiến thức thấm sâu vào phản xạ nhé!
          </p>

          <div style="display:flex;justify-content:center;gap:12px;margin-bottom:24px;flex-wrap:wrap;">
            <div style="background:#f1f5f9;padding:12px 20px;border-radius:12px;text-align:center;">
              <div style="font-size:20px;font-weight:800;color:var(--navy);">${App.mycardsQueue.length}</div>
              <div style="font-size:12px;color:var(--muted);">Tổng thẻ đã ôn</div>
            </div>
            <div style="background:#ecfdf5;padding:12px 20px;border-radius:12px;text-align:center;">
              <div style="font-size:20px;font-weight:800;color:#065f46;">${stats.day1 + stats.day3 + stats.day6}</div>
              <div style="font-size:12px;color:#047857;">Thẻ đã ghi nhớ</div>
            </div>
          </div>

          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
            <button class="btn primary" id="restartPracticeBtn">🔁 Ôn tập lại từ đầu</button>
            <button class="btn outline" id="viewListAfterPracticeBtn">📋 Quản lý danh sách thẻ</button>
            <button class="btn light" id="addMoreCardsAfterBtn">➕ Thêm thẻ mới</button>
          </div>
        </div>
      `;

      const restartBtn = $('restartPracticeBtn');
      if (restartBtn) {
        restartBtn.onclick = () => {
          initMyCardsPracticeQueue(true);
          renderMyCardsPractice();
        };
      }
      const viewListBtn = $('viewListAfterPracticeBtn');
      if (viewListBtn) {
        viewListBtn.onclick = () => {
          App.mycardsViewTab = 'list';
          renderMyCardsView();
        };
      }
      const addMoreBtn = $('addMoreCardsAfterBtn');
      if (addMoreBtn) {
        addMoreBtn.onclick = () => openAddMyCardModal();
      }
      return;
    }

    // Case 3: Active Card
    const card = App.mycardsQueue[App.mycardsCurrentIdx];
    if ($('myPracticeCounterBadge')) {
      $('myPracticeCounterBadge').textContent = `Thẻ ${App.mycardsCurrentIdx + 1} / ${App.mycardsQueue.length}`;
    }

    // Determine mode for this card
    let effectiveMode = App.mycardsPracticeMode;
    if (effectiveMode === 'mixed') {
      if (!App.mycardsMixedModeMap[card.id]) {
        const candidateModes = ['cloze', 'vi_en', 'en_vi'];
        App.mycardsMixedModeMap[card.id] = candidateModes[Math.floor(Math.random() * candidateModes.length)];
      }
      effectiveMode = App.mycardsMixedModeMap[card.id];
    }

    const levelBadgeHtml = getMyCardLevelBadgeHtml(card.level);

    // MODE 1: CLOZE / TYPING PRACTICE
    if (effectiveMode === 'cloze') {
      const clozeHint = generateClozeHint(card.en);
      container.innerHTML = `
        <div class="mycard-practice-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:12px;font-weight:750;color:#0369a1;background:#e0f2fe;padding:4px 12px;border-radius:99px;">
              ✍️ Dạng 1: Điền hết lại cụm từ
            </span>
            ${levelBadgeHtml}
          </div>

          <div style="font-size:13px;color:var(--muted);margin-bottom:4px;font-weight:600;">Nghĩa tiếng Việt:</div>
          <div style="font-size:22px;font-weight:800;color:var(--navy);margin-bottom:14px;line-height:1.4;">
            ${escapeHtml(card.vi)}
          </div>

          ${card.notes ? `<div style="font-size:12px;color:#64748b;margin-bottom:14px;">💡 Gợi ý: ${escapeHtml(card.notes)}</div>` : ''}

          <div class="mycard-cloze-box">
            <div style="font-size:11px;font-weight:750;color:#64748b;text-transform:uppercase;margin-bottom:6px;">Gợi ý chữ cái đầu:</div>
            <div class="mycard-cloze-hint">${escapeHtml(clozeHint)}</div>
            <input type="text" id="myCardClozeInput" class="mycard-cloze-input" placeholder="Gõ lại đầy đủ câu tiếng Anh rồi bấm Enter..." autocomplete="off">
          </div>

          <div id="myCardClozeFeedback" style="margin-top:14px;"></div>

          <div id="myCardClozeActions" style="display:flex;justify-content:center;gap:10px;margin-top:16px;flex-wrap:wrap;">
            <button class="btn primary" id="checkClozeAnswerBtn">Kiểm tra đáp án (Enter)</button>
            <button class="btn outline" id="revealClozeAnswerBtn">👁️ Xem đáp án</button>
            <button class="btn light" id="speakClozeHintBtn">🔊 Nghe</button>
          </div>

          <div id="myCardRatingArea" class="hidden">
            ${render4RatingButtonsHtml()}
          </div>
        </div>
      `;

      const input = $('myCardClozeInput');
      const feedback = $('myCardClozeFeedback');
      const actions = $('myCardClozeActions');
      const ratingArea = $('myCardRatingArea');
      const checkBtn = $('checkClozeAnswerBtn');
      const revealBtn = $('revealClozeAnswerBtn');
      const speakBtn = $('speakClozeHintBtn');

      if (input) {
        setTimeout(() => input.focus(), 80);
      }

      if (speakBtn) {
        speakBtn.onclick = () => playTTS(card.en, 0.85);
      }

      function handleClozeCheck(isForcedReveal = false) {
        const userVal = input ? input.value : '';
        const normUser = normalizeTextForComparison(userVal);
        const normCorrect = normalizeTextForComparison(card.en);
        const isCorrect = !isForcedReveal && (normUser === normCorrect);

        if (input) {
          input.disabled = true;
          input.classList.add(isCorrect ? 'correct' : 'wrong');
        }

        if (actions) actions.classList.add('hidden');
        if (ratingArea) ratingArea.classList.remove('hidden');

        let feedbackHtml = '';
        if (isCorrect) {
          feedbackHtml = `
            <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:12px;padding:14px;color:#065f46;font-size:14px;text-align:left;">
              <div style="font-weight:800;margin-bottom:6px;display:flex;align-items:center;gap:8px;">
                <span>🎉 Chính xác tuyệt đối!</span>
                <button class="btn light btn-xs" id="speakCorrectAnswerBtn" style="padding:2px 8px;">🔊</button>
              </div>
              <div style="font-size:16px;font-weight:750;color:var(--navy);">${escapeHtml(card.en)}</div>
              ${card.ipa ? `<div style="font-family:ui-monospace, monospace;color:#0284c7;font-size:13px;margin-top:4px;">${escapeHtml(card.ipa)}</div>` : ''}
              ${card.example ? `
                <div style="margin-top:10px;padding-top:10px;border-top:1px dashed #a7f3d0;font-size:13px;">
                  <div style="font-weight:700;color:var(--navy);">“${escapeHtml(card.example)}”</div>
                  ${card.example_vi ? `<div style="color:#047857;">${escapeHtml(card.example_vi)}</div>` : ''}
                </div>
              ` : ''}
            </div>
          `;
        } else {
          feedbackHtml = `
            <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:14px;color:#991b1b;font-size:14px;text-align:left;">
              <div style="font-weight:800;margin-bottom:6px;display:flex;align-items:center;gap:8px;">
                <span>${isForcedReveal ? '📖 Đáp án chuẩn:' : '⚠️ So sánh kết quả:'}</span>
                <button class="btn light btn-xs" id="speakCorrectAnswerBtn" style="padding:2px 8px;">🔊</button>
              </div>
              ${!isForcedReveal && userVal ? `
                <div style="font-size:13px;color:#64748b;margin-bottom:6px;">
                  Câu bạn gõ: <span style="font-weight:700;color:#334155;">${escapeHtml(userVal)}</span>
                </div>
              ` : ''}
              <div style="font-size:16px;font-weight:750;color:var(--navy);margin-bottom:4px;">
                ${generateDiffHtml(userVal, card.en)}
              </div>
              ${card.ipa ? `<div style="font-family:ui-monospace, monospace;color:#0284c7;font-size:13px;margin-top:4px;">${escapeHtml(card.ipa)}</div>` : ''}
              ${card.example ? `
                <div style="margin-top:10px;padding-top:10px;border-top:1px dashed #fecaca;font-size:13px;">
                  <div style="font-weight:700;color:var(--navy);">“${escapeHtml(card.example)}”</div>
                  ${card.example_vi ? `<div style="color:#64748b;">${escapeHtml(card.example_vi)}</div>` : ''}
                </div>
              ` : ''}
            </div>
          `;
        }

        if (feedback) feedback.innerHTML = feedbackHtml;
        const correctAudioBtn = $('speakCorrectAnswerBtn');
        if (correctAudioBtn) correctAudioBtn.onclick = () => playTTS(card.en, 0.85);

        if (App.mycardsAutoSpeak) {
          playTTS(card.en, 0.85);
        }

        bindRatingButtons(card);
      }

      if (checkBtn) checkBtn.onclick = () => handleClozeCheck(false);
      if (revealBtn) revealBtn.onclick = () => handleClozeCheck(true);
      if (input) {
        input.onkeydown = (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleClozeCheck(false);
          }
        };
      }
    }

    // MODE 2: VI -> EN (Nhìn tiếng Việt đoán tiếng Anh)
    else if (effectiveMode === 'vi_en') {
      container.innerHTML = `
        <div class="mycard-practice-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:12px;font-weight:750;color:#047857;background:#d1fae5;padding:4px 12px;border-radius:99px;">
              🇻🇳 Dạng 2: Việt ➔ Anh
            </span>
            ${levelBadgeHtml}
          </div>

          <div style="font-size:13px;color:var(--muted);margin-bottom:6px;font-weight:600;">
            Nghĩa tiếng Việt (Hãy nhẩm và phát âm to câu tiếng Anh tương ứng):
          </div>
          <div style="font-size:24px;font-weight:800;color:var(--navy);margin-bottom:16px;line-height:1.4;">
            ${escapeHtml(card.vi)}
          </div>

          ${card.notes ? `<div style="font-size:12px;color:#64748b;margin-bottom:16px;">💡 Gợi ý: ${escapeHtml(card.notes)}</div>` : ''}

          ${!App.mycardsCardRevealed ? `
            <div style="margin:28px 0;">
              <button class="btn primary btn-lg" id="flipMyCardBtn" style="padding:12px 28px;font-size:15px;font-weight:750;">
                🔍 Lật thẻ xem câu tiếng Anh (Phím Space)
              </button>
            </div>
          ` : `
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:20px;margin-top:20px;text-align:center;">
              <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:8px;">
                <span style="font-size:24px;font-weight:800;color:var(--navy);">${escapeHtml(card.en)}</span>
                <button class="btn light btn-sm" id="speakRevealedCardBtn" style="padding:4px 8px;">🔊</button>
              </div>
              ${card.ipa ? `<div style="font-family:ui-monospace, monospace;color:#0284c7;font-size:14px;margin-bottom:10px;">${escapeHtml(card.ipa)}</div>` : ''}
              ${card.example ? `
                <div style="background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;text-align:left;margin-top:12px;font-size:13px;">
                  <div style="font-weight:700;color:var(--navy);margin-bottom:4px;">“${escapeHtml(card.example)}”</div>
                  ${card.example_vi ? `<div style="color:var(--muted);">${escapeHtml(card.example_vi)}</div>` : ''}
                </div>
              ` : ''}
            </div>
            ${render4RatingButtonsHtml()}
          `}
        </div>
      `;

      const flipBtn = $('flipMyCardBtn');
      if (flipBtn) {
        flipBtn.onclick = () => {
          App.mycardsCardRevealed = true;
          renderMyCardsPractice();
          if (App.mycardsAutoSpeak) playTTS(card.en, 0.85);
        };
      }

      const speakBtn = $('speakRevealedCardBtn');
      if (speakBtn) {
        speakBtn.onclick = () => playTTS(card.en, 0.85);
      }

      if (App.mycardsCardRevealed) {
        bindRatingButtons(card);
      }
    }

    // MODE 3: EN -> VI (Nhìn tiếng Anh đoán tiếng Việt)
    else if (effectiveMode === 'en_vi') {
      container.innerHTML = `
        <div class="mycard-practice-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:12px;font-weight:750;color:#1e40af;background:#dbeafe;padding:4px 12px;border-radius:99px;">
              🇺🇸 Dạng 3: Anh ➔ Việt
            </span>
            ${levelBadgeHtml}
          </div>

          <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin:16px 0 6px;">
            <span style="font-size:26px;font-weight:800;color:var(--navy);">${escapeHtml(card.en)}</span>
            <button class="btn light btn-sm" id="speakFrontEnBtn" style="padding:4px 8px;">🔊</button>
          </div>
          ${card.ipa ? `<div style="font-family:ui-monospace, monospace;color:#0284c7;font-size:14px;margin-bottom:20px;">${escapeHtml(card.ipa)}</div>` : ''}

          ${!App.mycardsCardRevealed ? `
            <div style="margin:28px 0;">
              <button class="btn primary btn-lg" id="flipMyCardBtn" style="padding:12px 28px;font-size:15px;font-weight:750;">
                🔍 Lật thẻ xem nghĩa tiếng Việt (Phím Space)
              </button>
            </div>
          ` : `
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:20px;margin-top:20px;text-align:center;">
              <div style="font-size:12px;font-weight:700;color:#166534;margin-bottom:6px;text-transform:uppercase;">Nghĩa tiếng Việt:</div>
              <div style="font-size:22px;font-weight:800;color:#15803d;margin-bottom:10px;">
                ${escapeHtml(card.vi)}
              </div>
              ${card.example ? `
                <div style="background:#fff;border:1px solid #bbf7d0;border-radius:10px;padding:12px;text-align:left;margin-top:12px;font-size:13px;">
                  <div style="font-weight:700;color:var(--navy);margin-bottom:4px;">“${escapeHtml(card.example)}”</div>
                  ${card.example_vi ? `<div style="color:var(--muted);">${escapeHtml(card.example_vi)}</div>` : ''}
                </div>
              ` : ''}
            </div>
            ${render4RatingButtonsHtml()}
          `}
        </div>
      `;

      const speakBtn = $('speakFrontEnBtn');
      if (speakBtn) {
        speakBtn.onclick = () => playTTS(card.en, 0.85);
      }

      const flipBtn = $('flipMyCardBtn');
      if (flipBtn) {
        flipBtn.onclick = () => {
          App.mycardsCardRevealed = true;
          renderMyCardsPractice();
        };
      }

      if (App.mycardsCardRevealed) {
        bindRatingButtons(card);
      }
    }
  }

  // Bind the 4 rating buttons to card evaluation
  function bindRatingButtons(card) {
    const container = $('mycardsPracticeCardContainer');
    if (!container) return;

    container.querySelectorAll('.mem-btn').forEach(btn => {
      btn.onclick = () => {
        const rating = parseInt(btn.dataset.rating, 10);
        App.srs.reviewMyCard(card.id, rating);

        if (rating === 1) {
          // Push back into current session queue
          App.mycardsQueue.push(card);
          showToast('🔁 Đã thêm thẻ vào cuối phiên để luyện tập lại!');
        } else {
          const labels = {
            2: '🔵 Nhớ 1 ngày — Ngày mai ôn lại!',
            3: '🟢 Đã nhớ 3 ngày — 3 ngày sau ôn lại!',
            4: '🟣 Rất nhớ 6 ngày — 6 ngày sau ôn lại!'
          };
          showToast(labels[rating] || 'Đã lưu đánh giá ghi nhớ!');
        }

        App.mycardsCurrentIdx++;
        App.mycardsCardRevealed = false;
        renderMyCardsPractice();
      };
    });
  }

  // Render Card List & Manager
  function renderMyCardsList() {
    const container = $('mycardsListContainer');
    if (!container) return;

    const cards = App.srs.getMyCards(App.mycardsSelectedDeckId);
    const searchVal = (App.mycardsSearchQuery || '').toLowerCase().trim();

    const filtered = cards.filter(c => {
      if (!searchVal) return true;
      return (
        (c.en && c.en.toLowerCase().includes(searchVal)) ||
        (c.vi && c.vi.toLowerCase().includes(searchVal)) ||
        (c.notes && c.notes.toLowerCase().includes(searchVal)) ||
        (c.example && c.example.toLowerCase().includes(searchVal))
      );
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:36px 16px;background:#f8fafc;border:1px dashed var(--line);border-radius:12px;">
          <div style="font-size:36px;margin-bottom:8px;">🔍</div>
          <p style="color:var(--muted);font-size:14px;margin:0 0 14px;">
            ${cards.length === 0 ? 'Chủ đề này chưa có thẻ từ vựng nào.' : 'Không tìm thấy thẻ nào phù hợp với từ khóa.'}
          </p>
          <button class="btn primary btn-sm" id="emptyListAddCardBtn">➕ Thêm thẻ vào chủ đề</button>
        </div>
      `;
      const btn = $('emptyListAddCardBtn');
      if (btn) btn.onclick = () => openAddMyCardModal();
      return;
    }

    let rowsHtml = filtered.map(c => {
      const levelBadge = getMyCardLevelBadgeHtml(c.level);
      return `
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:12px 14px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <strong style="color:var(--navy);font-size:14px;">${escapeHtml(c.en)}</strong>
              <button class="btn light btn-xs" data-speak="${escapeHtml(c.en)}" style="padding:2px 6px;">🔊</button>
            </div>
            ${c.ipa ? `<div style="font-family:ui-monospace, monospace;color:var(--muted);font-size:12px;margin-top:2px;">${escapeHtml(c.ipa)}</div>` : ''}
          </td>
          <td style="padding:12px 14px;color:#047857;font-weight:700;font-size:13px;">
            ${escapeHtml(c.vi)}
          </td>
          <td style="padding:12px 14px;font-size:12px;color:#475569;max-width:260px;">
            ${c.example ? `<div style="font-style:italic;margin-bottom:2px;">“${escapeHtml(c.example)}”</div>` : ''}
            ${c.notes ? `<div style="color:var(--muted);">💡 ${escapeHtml(c.notes)}</div>` : ''}
          </td>
          <td style="padding:12px 14px;text-align:center;">
            ${levelBadge}
          </td>
          <td style="padding:12px 14px;text-align:right;white-space:nowrap;">
            <button class="btn btn-xs light edit-mycard-btn" data-id="${c.id}" title="Chỉnh sửa">✏️</button>
            <button class="btn btn-xs light delete-mycard-btn" data-id="${c.id}" style="color:#dc2626;" title="Xóa thẻ">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');

    container.innerHTML = `
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:#f8fafc;border-bottom:2px solid var(--line);text-align:left;color:var(--navy);font-size:12px;">
              <th style="padding:10px 14px;">TỪ / CÂU TIẾNG ANH</th>
              <th style="padding:10px 14px;">NGHĨA TIẾNG VIỆT</th>
              <th style="padding:10px 14px;">VÍ DỤ & GHI CHÚ</th>
              <th style="padding:10px 14px;text-align:center;">CẤP ĐỘ NHỚ</th>
              <th style="padding:10px 14px;text-align:right;">THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;

    // Bind edit/delete handlers
    container.querySelectorAll('.edit-mycard-btn').forEach(b => {
      b.onclick = () => openAddMyCardModal(b.dataset.id);
    });
    container.querySelectorAll('.delete-mycard-btn').forEach(b => {
      b.onclick = () => {
        if (confirm('Bạn có chắc chắn muốn xóa thẻ học này?')) {
          App.srs.deleteMyCard(b.dataset.id);
          showToast('Đã xóa thẻ thành công!');
          initMyCardsPracticeQueue(true);
          renderMyCardsView();
        }
      };
    });

    containerSpeakButtons(container);
  }

  // ==========================================
  // MY CARDS & DECKS MODALS CONTROLLER
  // ==========================================
  function initMyCardsModals() {
    // 1. Add / Edit Deck Modal
    const deckModal = $('addDeckModal');
    const openDeckBtn = $('openAddDeckModalBtn');
    const closeDeckBtn = $('closeAddDeckModalBtn');
    const cancelDeckBtn = $('cancelDeckBtn');
    const saveDeckBtn = $('saveDeckBtn');
    const editCurrentDeckBtn = $('editCurrentDeckBtn');
    const deleteCurrentDeckBtn = $('deleteCurrentDeckBtn');

    if (openDeckBtn) openDeckBtn.onclick = () => openAddDeckModal();
    if (closeDeckBtn) closeDeckBtn.onclick = () => deckModal?.classList.add('hidden');
    if (cancelDeckBtn) cancelDeckBtn.onclick = () => deckModal?.classList.add('hidden');

    if (editCurrentDeckBtn) {
      editCurrentDeckBtn.onclick = () => {
        const deck = App.srs.getMyDecks().find(d => d.id === App.mycardsSelectedDeckId);
        if (deck) openAddDeckModal(deck.id);
      };
    }

    if (deleteCurrentDeckBtn) {
      deleteCurrentDeckBtn.onclick = () => {
        const decks = App.srs.getMyDecks();
        if (decks.length <= 1) {
          showToast('Không thể xóa chủ đề duy nhất còn lại.');
          return;
        }
        const activeDeck = decks.find(d => d.id === App.mycardsSelectedDeckId);
        if (!activeDeck) return;

        if (confirm(`Bạn có chắc chắn muốn xóa toàn bộ chủ đề "${activeDeck.name}" cùng tất cả các thẻ trong đó?`)) {
          App.srs.deleteDeck(activeDeck.id);
          showToast(`Đã xóa chủ đề "${activeDeck.name}"!`);
          const remaining = App.srs.getMyDecks();
          App.mycardsSelectedDeckId = remaining[0]?.id || 'deck-daily';
          initMyCardsPracticeQueue(true);
          renderMyCardsView();
        }
      };
    }

    if (saveDeckBtn) {
      saveDeckBtn.onclick = () => {
        const nameInput = $('deckNameInput');
        const descInput = $('deckDescInput');
        const editId = $('deckEditId')?.value.trim();

        const name = (nameInput?.value || '').trim();
        const desc = (descInput?.value || '').trim();

        if (!name) {
          showToast('Vui lòng nhập tên chủ đề.');
          nameInput?.focus();
          return;
        }

        if (editId) {
          App.srs.updateDeck(editId, name, desc);
          showToast(`Đã cập nhật chủ đề "${name}"!`);
        } else {
          const newDeck = App.srs.addDeck(name, desc);
          App.mycardsSelectedDeckId = newDeck.id;
          showToast(`Đã tạo chủ đề mới: "${name}"!`);
        }

        deckModal?.classList.add('hidden');
        initMyCardsPracticeQueue(true);
        renderMyCardsView();
      };
    }

    // 2. Add / Edit My Card Modal
    const cardModal = $('addMyCardModal');
    const openCardBtn = $('openAddMyCardModalBtn');
    const closeCardBtn = $('closeAddMyCardModalBtn');
    const cancelCardBtn = $('cancelMyCardBtn');
    const saveCardBtn = $('saveMyCardBtn');
    const previewSpeakBtn = $('speakMyCardPreviewBtn');

    if (openCardBtn) openCardBtn.onclick = () => openAddMyCardModal();
    if (closeCardBtn) closeCardBtn.onclick = () => cardModal?.classList.add('hidden');
    if (cancelCardBtn) cancelCardBtn.onclick = () => cardModal?.classList.add('hidden');

    if (previewSpeakBtn) {
      previewSpeakBtn.onclick = () => {
        const enVal = $('myCardEnInput')?.value.trim();
        if (enVal) playTTS(enVal, 0.85);
        else showToast('Hãy nhập từ hoặc câu tiếng Anh trước khi nghe.');
      };
    }

    if (saveCardBtn) {
      saveCardBtn.onclick = () => {
        const enInput = $('myCardEnInput');
        const viInput = $('myCardViInput');
        const deckSelect = $('myCardDeckSelect');
        const editId = $('myCardEditId')?.value.trim();

        const en = (enInput?.value || '').trim();
        const vi = (viInput?.value || '').trim();
        const deckId = deckSelect?.value || App.mycardsSelectedDeckId;

        if (!en) {
          showToast('Vui lòng nhập từ hoặc câu tiếng Anh.');
          enInput?.focus();
          return;
        }
        if (!vi) {
          showToast('Vui lòng nhập nghĩa tiếng Việt.');
          viInput?.focus();
          return;
        }

        const cardData = {
          en,
          vi,
          ipa: $('myCardIpaInput')?.value.trim() || '',
          example: $('myCardExampleInput')?.value.trim() || '',
          example_vi: $('myCardExampleViInput')?.value.trim() || '',
          notes: $('myCardNotesInput')?.value.trim() || ''
        };

        if (editId) {
          App.srs.updateMyCard(editId, cardData);
          showToast(`Đã cập nhật thẻ "${en}"!`);
        } else {
          App.srs.addMyCard(deckId, cardData);
          showToast(`Đã thêm thẻ mới vào chủ đề!`);
        }

        cardModal?.classList.add('hidden');
        if (App.mycardsSelectedDeckId !== deckId) {
          App.mycardsSelectedDeckId = deckId;
        }
        initMyCardsPracticeQueue(true);
        renderMyCardsView();
      };
    }

    // 3. Sub-view Tabs (Practice vs List)
    const practiceTabBtn = $('tabMyCardsPracticeBtn');
    const listTabBtn = $('tabMyCardsListBtn');

    if (practiceTabBtn) {
      practiceTabBtn.onclick = () => {
        App.mycardsViewTab = 'practice';
        renderMyCardsView();
      };
    }
    if (listTabBtn) {
      listTabBtn.onclick = () => {
        App.mycardsViewTab = 'list';
        renderMyCardsView();
      };
    }

    // 4. Mode Chips
    $$('.mycard-mode-chip').forEach(chip => {
      chip.onclick = () => {
        App.mycardsPracticeMode = chip.dataset.mode;
        App.mycardsCardRevealed = false;
        renderMyCardsPractice();
      };
    });

    // 5. Shuffle Toggle
    const shuffleBtn = $('toggleMyCardShuffleBtn');
    if (shuffleBtn) {
      shuffleBtn.onclick = () => {
        App.mycardsShuffle = !App.mycardsShuffle;
        initMyCardsPracticeQueue(true);
        renderMyCardsPractice();
        showToast(App.mycardsShuffle ? '🔀 Đã bật trộn ngẫu nhiên thứ tự!' : '➡️ Đã chuyển sang thứ tự ban đầu');
      };
    }

    // 6. Auto-speak toggle
    const autoSpeakCheck = $('myCardAutoSpeakToggle');
    if (autoSpeakCheck) {
      autoSpeakCheck.onchange = (e) => {
        App.mycardsAutoSpeak = e.target.checked;
      };
    }

    // 7. Search input in list view
    const searchInput = $('myCardsSearchInput');
    if (searchInput) {
      searchInput.oninput = (e) => {
        App.mycardsSearchQuery = e.target.value;
        renderMyCardsList();
      };
    }
  }

  function openAddDeckModal(editDeckId = null) {
    const modal = $('addDeckModal');
    if (!modal) return;
    const title = $('deckModalTitle');
    const idInput = $('deckEditId');
    const nameInput = $('deckNameInput');
    const descInput = $('deckDescInput');

    if (editDeckId) {
      const deck = App.srs.getMyDecks().find(d => d.id === editDeckId);
      if (title) title.textContent = '✏️ Đổi Tên / Chỉnh Sửa Chủ Đề';
      if (idInput) idInput.value = editDeckId;
      if (nameInput) nameInput.value = deck ? deck.name : '';
      if (descInput) descInput.value = deck ? (deck.description || '') : '';
    } else {
      if (title) title.textContent = '➕ Tạo Chủ Đề Học Tập Mới';
      if (idInput) idInput.value = '';
      if (nameInput) nameInput.value = '';
      if (descInput) descInput.value = '';
    }

    modal.classList.remove('hidden');
    nameInput?.focus();
  }

  function openAddMyCardModal(editCardId = null) {
    const modal = $('addMyCardModal');
    if (!modal) return;
    const title = $('myCardModalTitle');
    const idInput = $('myCardEditId');
    const deckSelect = $('myCardDeckSelect');
    const enInput = $('myCardEnInput');
    const viInput = $('myCardViInput');
    const ipaInput = $('myCardIpaInput');
    const exampleInput = $('myCardExampleInput');
    const exampleViInput = $('myCardExampleViInput');
    const notesInput = $('myCardNotesInput');

    // Populate decks select
    if (deckSelect) {
      const decks = App.srs.getMyDecks();
      deckSelect.innerHTML = decks.map(d => `
        <option value="${d.id}" ${d.id === App.mycardsSelectedDeckId ? 'selected' : ''}>${escapeHtml(d.name)}</option>
      `).join('');
    }

    if (editCardId) {
      const allCards = App.srs.getMyCards();
      const card = allCards.find(c => c.id === editCardId);
      if (title) title.textContent = '✏️ Chỉnh Sửa Thẻ Học';
      if (idInput) idInput.value = editCardId;
      if (deckSelect && card) deckSelect.value = card.deck_id;
      if (enInput && card) enInput.value = card.en;
      if (viInput && card) viInput.value = card.vi;
      if (ipaInput && card) ipaInput.value = card.ipa || '';
      if (exampleInput && card) exampleInput.value = card.example || '';
      if (exampleViInput && card) exampleViInput.value = card.example_vi || '';
      if (notesInput && card) notesInput.value = card.notes || '';
    } else {
      if (title) title.textContent = '➕ Thêm Thẻ Vào Chủ Đề';
      if (idInput) idInput.value = '';
      if (enInput) enInput.value = '';
      if (viInput) viInput.value = '';
      if (ipaInput) ipaInput.value = '';
      if (exampleInput) exampleInput.value = '';
      if (exampleViInput) exampleViInput.value = '';
      if (notesInput) notesInput.value = '';
    }

    modal.classList.remove('hidden');
    enInput?.focus();
  }

  // ==========================================
  // 5. SMART SRS & QUICK TEST CONTROLLER
  // ==========================================
  function renderSRSView() {
    const stats = App.srs.getStats();
    if ($('srsDueCountDisplay')) $('srsDueCountDisplay').textContent = `${stats.due_today} từ`;
    if ($('srsLearningDisplay')) $('srsLearningDisplay').textContent = `${stats.learning} từ`;
    if ($('srsReviewDisplay')) $('srsReviewDisplay').textContent = `${stats.review} từ`;
    if ($('srsMasteredDisplay')) $('srsMasteredDisplay').textContent = `${stats.mastered} từ`;
    if ($('srsDifficultDisplay')) $('srsDifficultDisplay').textContent = `${stats.difficult} từ`;

    // Render Due Words List
    const dueContainer = $('srsDueListContainer');
    if (dueContainer) {
      const dueIds = App.srs.getDueVocabIds();
      if (dueIds.length === 0) {
        dueContainer.innerHTML = `
          <div class="feedback" style="text-align:center;padding:24px;">
            🎉 <b>Tuyệt vời! Bạn không còn từ nào đến hạn cần ôn hôm nay.</b><br>
            <small>Hãy làm bài kiểm tra nhanh 5 hoặc 10 phút để củng cố phản xạ, hoặc học thêm bài mới trong lộ trình.</small>
          </div>
        `;
      } else {
        const dueItems = App.vocabBank.filter(v => dueIds.includes(v.id)).slice(0, 15);
        dueContainer.innerHTML = `
          <div class="due-words-grid">
            ${dueItems.map(item => `
              <div class="due-item-card">
                <div class="due-item-top">
                  <strong>${escapeHtml(item.en)}</strong>
                  <button class="audio-btn" data-speak="${escapeHtml(item.en)}">🔊</button>
                </div>
                <div class="due-vi">${escapeHtml(item.vi)}</div>
                <small class="text-muted">${escapeHtml(item.topic)} · ${item.level}</small>
                <div class="due-card-actions">
                  <button class="btn btn-xs outline srs-quick-btn" data-id="${item.id}" data-rating="1">Lặp lại</button>
                  <button class="btn btn-xs light srs-quick-btn" data-id="${item.id}" data-rating="3">Nhớ tốt</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        containerSpeakButtons(dueContainer);

        dueContainer.querySelectorAll('.srs-quick-btn').forEach(btn => {
          btn.onclick = () => {
            const id = btn.dataset.id;
            const rating = parseInt(btn.dataset.rating, 10);
            App.srs.reviewWord(id, rating);
            renderSRSView();
          };
        });
      }
    }
  }

  // Quick Quiz Generator (5, 10, 20 mins)
  function startQuickQuiz(durationMinutes) {
    const quizData = App.srs.generateQuickQuiz(App.vocabBank, durationMinutes);
    if (!quizData || quizData.questions.length === 0) {
      showToast('Không có đủ dữ liệu từ vựng để tạo bài kiểm tra.');
      return;
    }

    App.activeQuickQuiz = quizData;
    App.quizCurrentQ = 0;
    App.quizScore = 0;
    App.quizSecondsRemaining = durationMinutes * 60;

    const modal = $('quickQuizModal');
    if (modal) modal.classList.remove('hidden');

    clearInterval(App.quizTimerInterval);
    App.quizTimerInterval = setInterval(() => {
      App.quizSecondsRemaining--;
      updateQuizTimerDisplay();
      if (App.quizSecondsRemaining <= 0) {
        clearInterval(App.quizTimerInterval);
        finishQuickQuiz();
      }
    }, 1000);

    renderCurrentQuizQuestion();
  }

  function updateQuizTimerDisplay() {
    const timerEl = $('quizTimerDisplay');
    if (!timerEl) return;
    const mins = Math.floor(App.quizSecondsRemaining / 60);
    const secs = App.quizSecondsRemaining % 60;
    timerEl.textContent = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function renderCurrentQuizQuestion() {
    const qBox = $('quizQuestionBox');
    if (!qBox || !App.activeQuickQuiz) return;

    const q = App.activeQuickQuiz.questions[App.quizCurrentQ];
    const total = App.activeQuickQuiz.questions.length;

    qBox.innerHTML = `
      <div class="quiz-modal-inner">
        <div class="q-progress-bar">
          <div class="q-progress-fill" style="width:${Math.round(((App.quizCurrentQ + 1) / total) * 100)}%;"></div>
        </div>
        <div class="q-header-meta">
          <span>Câu ${App.quizCurrentQ + 1} / ${total}</span>
          <span id="quizTimerDisplay"></span>
        </div>
        <h3 class="q-question-title">${escapeHtml(q.question)}</h3>
        <div class="q-options-container">
          ${q.options.map((opt, oIdx) => `
            <button class="quiz-choice-btn" data-oindex="${oIdx}">
              <span class="choice-letter">${String.fromCharCode(65 + oIdx)}.</span>
              <span class="choice-text">${escapeHtml(opt)}</span>
            </button>
          `).join('')}
        </div>
        <div id="qLiveFeedback" class="q-live-feedback"></div>
      </div>
    `;

    updateQuizTimerDisplay();

    // Option click
    qBox.querySelectorAll('.quiz-choice-btn').forEach(btn => {
      btn.onclick = () => {
        const selected = parseInt(btn.dataset.oindex, 10);
        const isCorrect = selected === q.answer;
        const fb = $('qLiveFeedback');

        // Disable all buttons
        qBox.querySelectorAll('.quiz-choice-btn').forEach((b, bIdx) => {
          b.disabled = true;
          if (bIdx === q.answer) b.classList.add('correct');
          if (bIdx === selected && !isCorrect) b.classList.add('wrong');
        });

        if (isCorrect) {
          App.quizScore++;
          App.srs.reviewWord(q.vocab_id, 3); // Good
          if (fb) fb.innerHTML = `<div class="feedback">✓ Chính xác! ${escapeHtml(q.explanation)}</div>`;
        } else {
          App.srs.reviewWord(q.vocab_id, 1); // Again
          if (fb) fb.innerHTML = `<div class="feedback bad">✗ Sai rồi! ${escapeHtml(q.explanation)}</div>`;
        }

        // Auto advance after 1.5s
        setTimeout(() => {
          if (App.quizCurrentQ < total - 1) {
            App.quizCurrentQ++;
            renderCurrentQuizQuestion();
          } else {
            finishQuickQuiz();
          }
        }, 1600);
      };
    });
  }

  function finishQuickQuiz() {
    clearInterval(App.quizTimerInterval);
    const qBox = $('quizQuestionBox');
    if (!qBox || !App.activeQuickQuiz) return;

    const total = App.activeQuickQuiz.questions.length;
    const pct = Math.round((App.quizScore / total) * 100);

    qBox.innerHTML = `
      <div class="quiz-finish-card">
        <h2>🎉 Kết quả bài kiểm tra nhanh</h2>
        <div class="finish-score-circle ${pct >= 80 ? 'green' : 'orange'}">
          ${pct}%
        </div>
        <p>Bạn đã trả lời đúng <b>${App.quizScore} / ${total}</b> câu hỏi.</p>
        <p class="text-muted">Các từ đã được tự động cập nhật vào lịch ôn tập ngắt quãng (SRS).</p>
        <div class="row" style="justify-content:center;gap:12px;margin-top:16px;">
          <button class="btn primary" id="closeQuizModalBtn">Đóng bài kiểm tra</button>
        </div>
      </div>
    `;

    const closeBtn = $('closeQuizModalBtn');
    if (closeBtn) closeBtn.onclick = () => {
      const modal = $('quickQuizModal');
      if (modal) modal.classList.add('hidden');
      renderSRSView();
    };
  }

  // ==========================================
  // 6. REFLEX & CONVERSATION ARENA (UPGRADED)
  // ==========================================
  function renderReflexArena() {
    // 1. Tab Bar switching
    $$('.reflex-tab-btn').forEach(btn => {
      btn.onclick = () => {
        const tab = btn.dataset.tab;
        App.activeReflexTab = tab;
        $$('.reflex-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
        ['quick', 'listen_respond', 'roleplay', 'shadowing', 'stats'].forEach(t => {
          const el = $('reflexTab_' + t);
          if (el) el.classList.toggle('hidden', t !== tab);
        });

        if (tab === 'quick') renderQuickDrills();
        if (tab === 'listen_respond') renderListenRespond();
        if (tab === 'roleplay') renderRoleplayScenarios();
        if (tab === 'shadowing') renderShadowingDrills();
        if (tab === 'stats') renderReflexStats();
      };
    });

    // Initial render of active tab
    const activeTab = App.activeReflexTab || 'quick';
    const activeBtn = document.querySelector(`.reflex-tab-btn[data-tab="${activeTab}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    ['quick', 'listen_respond', 'roleplay', 'shadowing', 'stats'].forEach(t => {
      const el = $('reflexTab_' + t);
      if (el) el.classList.toggle('hidden', t !== activeTab);
    });

    if (activeTab === 'quick') renderQuickDrills();
    if (activeTab === 'listen_respond') renderListenRespond();
    if (activeTab === 'roleplay') renderRoleplayScenarios();
    if (activeTab === 'shadowing') renderShadowingDrills();
    if (activeTab === 'stats') renderReflexStats();
  }

  // TAB 1: QUICK RESPONSE (105 QUESTIONS)
  function renderQuickDrills() {
    const container = $('quickDrillContainer');
    const counterDisplay = $('qrCounterDisplay');
    if (!container) return;

    // Filter by level
    $$('.qr-level-btn').forEach(btn => {
      btn.onclick = () => {
        $$('.qr-level-btn').forEach(b => {
          b.classList.remove('primary');
          b.classList.add('outline');
        });
        btn.classList.add('primary');
        btn.classList.remove('outline');
        App.qrLevelFilter = btn.dataset.level;
        App.qrDrillIndex = 0;
        renderQuickDrills();
      };
    });

    let list = App.reflexData.quick_drills || [];
    if (App.qrLevelFilter && App.qrLevelFilter !== 'all') {
      list = list.filter(d => (d.category || '').toLowerCase() === App.qrLevelFilter.toLowerCase());
    }
    if (list.length === 0) list = App.reflexData.quick_drills || [];

    if (App.qrDrillIndex >= list.length) App.qrDrillIndex = 0;
    const drill = list[App.qrDrillIndex] || list[0];

    if (counterDisplay) {
      counterDisplay.textContent = `Câu ${App.qrDrillIndex + 1} / ${list.length} (${drill.category.toUpperCase()})`;
    }

    container.innerHTML = `
      <div class="drill-card" style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm);">
        <div class="drill-top" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
          <div style="display:flex;gap:6px;align-items:center;">
            <span class="badge ${drill.category}">${drill.category.toUpperCase()}</span>
            <span class="chip blue">Tuần ${drill.week || 1}</span>
            <span class="chip">${drill.focus_grammar || 'Giao tiếp'}</span>
          </div>
          <span class="timer-badge" id="drillTimerBadge" style="font-size:13px;font-weight:750;background:#fef3c7;color:#92400e;padding:4px 10px;border-radius:99px;">
            ⏱️ ${drill.time_limit_seconds}s
          </span>
        </div>

        <h3 class="drill-prompt" style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:6px;">"${escapeHtml(drill.prompt_en)}"</h3>
        <p class="drill-vi" style="font-size:14px;color:var(--muted);margin-bottom:12px;">${escapeHtml(drill.prompt_vi)}</p>

        <!-- Focus Keywords -->
        ${drill.key_words && drill.key_words.length > 0 ? `
          <div style="margin-bottom:14px;font-size:12px;">
            <span style="font-weight:700;color:var(--navy);">Từ khóa gợi ý:</span>
            <div style="display:inline-flex;flex-wrap:wrap;gap:6px;margin-left:6px;">
              ${drill.key_words.map(kw => `<span class="tag-pill" style="background:#f1f5f9;padding:2px 8px;border-radius:6px;font-weight:600;">${escapeHtml(kw)}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <div class="drill-tip" id="drillTipBox" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:10px 14px;font-size:13px;color:#166534;margin-bottom:16px;">
          💡 <b>Mẹo phản xạ:</b> ${escapeHtml(drill.tip)}
        </div>

        <!-- Action Controls -->
        <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:16px;">
          <button class="btn primary" id="startDrillTimerBtn">▶ Nghe & Bấm giờ ${drill.time_limit_seconds}s</button>
          <button class="btn light" id="speakDrillPromptBtn">🔊 Nghe câu hỏi</button>
          <button class="btn light" id="speakDrillSlowBtn">🐢 Chậm (0.70x)</button>
          <button class="btn outline" id="toggleDrillAnswersBtn">👁️ Hiện câu mẫu</button>
        </div>

        <!-- User Input & Speech Recognition Area -->
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:16px;">
          <label style="display:block;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:6px;">Câu trả lời của bạn (gõ hoặc bấm micro để nói):</label>
          <div style="display:flex;gap:8px;">
            <input type="text" class="field" id="qrUserInput" placeholder="Nhập câu trả lời tiếng Anh của bạn tại đây..." style="flex:1;">
            <button class="btn light" id="qrMicBtn" title="Bật/Tắt Micro">🎙️</button>
            <button class="btn primary" id="submitQrAnswerBtn">Kiểm tra phản xạ</button>
          </div>
          <div id="qrFeedbackBox" style="margin-top:10px;font-size:13px;"></div>
        </div>

        <!-- Model Answers Box -->
        <div id="drillAnswersBox" class="model-answers-box hidden" style="background:#f1f5f9;border-radius:12px;padding:14px;margin-bottom:16px;">
          <strong style="color:var(--navy);display:block;margin-bottom:8px;">Mẫu câu trả lời gợi ý & nghe phát âm:</strong>
          <ul style="margin:0;padding-left:18px;">
            ${drill.model_answers.map(ans => `
              <li style="margin:6px 0;font-size:14px;">
                <b>"${escapeHtml(ans)}"</b>
                <button class="mini-speak-btn" data-speak="${escapeHtml(ans)}" title="Nghe câu này">🔊</button>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Navigation Bar -->
        <div class="drill-nav" style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);">
          <button class="btn btn-sm outline" id="prevDrillBtn" ${App.qrDrillIndex === 0 ? 'disabled' : ''}>← Câu trước</button>
          <span class="text-muted" style="font-size:13px;">${App.qrDrillIndex + 1} / ${list.length}</span>
          <button class="btn btn-sm outline" id="nextDrillBtn" ${App.qrDrillIndex === list.length - 1 ? 'disabled' : ''}>Câu tiếp theo →</button>
        </div>
      </div>
    `;

    containerSpeakButtons(container);

    // Audio handlers
    const speakBtn = $('speakDrillPromptBtn');
    if (speakBtn) speakBtn.onclick = () => playTTS(drill.prompt_en, 0.85);
    const slowBtn = $('speakDrillSlowBtn');
    if (slowBtn) slowBtn.onclick = () => playTTS(drill.prompt_en, 0.70);

    // Timer countdown
    const startTimerBtn = $('startDrillTimerBtn');
    if (startTimerBtn) {
      startTimerBtn.onclick = () => {
        playTTS(drill.prompt_en, 0.85);
        let sec = drill.time_limit_seconds;
        const badge = $('drillTimerBadge');
        startTimerBtn.disabled = true;
        clearInterval(App.drillTimerInterval);
        App.drillTimerInterval = setInterval(() => {
          sec--;
          if (badge) badge.textContent = `⏱️ ${sec}s`;
          if (sec <= 0) {
            clearInterval(App.drillTimerInterval);
            if (badge) badge.textContent = `⏰ HẾT GIỜ!`;
            startTimerBtn.disabled = false;
            const ansBox = $('drillAnswersBox');
            if (ansBox) ansBox.classList.remove('hidden');
          }
        }, 1000);
      };
    }

    // Toggle answers
    const toggleAnsBtn = $('toggleDrillAnswersBtn');
    if (toggleAnsBtn) {
      toggleAnsBtn.onclick = () => {
        const b = $('drillAnswersBox');
        if (b) b.classList.toggle('hidden');
      };
    }

    // Navigation
    const prevBtn = $('prevDrillBtn');
    const nextBtn = $('nextDrillBtn');
    if (prevBtn) {
      prevBtn.onclick = () => {
        clearInterval(App.drillTimerInterval);
        App.qrDrillIndex = Math.max(0, App.qrDrillIndex - 1);
        renderQuickDrills();
      };
    }
    if (nextBtn) {
      nextBtn.onclick = () => {
        clearInterval(App.drillTimerInterval);
        App.qrDrillIndex = Math.min(list.length - 1, App.qrDrillIndex + 1);
        renderQuickDrills();
      };
    }

    // Speech Recognition
    const micBtn = $('qrMicBtn');
    const inputEl = $('qrUserInput');
    if (micBtn && inputEl) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SR) {
        let rec = new SR();
        rec.lang = 'en-US';
        rec.continuous = false;
        rec.interimResults = false;
        rec.onstart = () => { micBtn.textContent = '🔴'; showToast('Đang nghe... hãy nói tiếng Anh!'); };
        rec.onresult = (e) => {
          const transcript = e.results[0][0].transcript;
          inputEl.value = transcript;
          micBtn.textContent = '🎙️';
        };
        rec.onerror = () => { micBtn.textContent = '🎙️'; };
        rec.onend = () => { micBtn.textContent = '🎙️'; };
        micBtn.onclick = () => { rec.start(); };
      } else {
        micBtn.onclick = () => showToast('Trình duyệt của bạn chưa hỗ trợ Web SpeechRecognition. Bạn hãy gõ câu trả lời.');
      }
    }

    // Submit Answer
    const submitBtn = $('submitQrAnswerBtn');
    const fbBox = $('qrFeedbackBox');
    if (submitBtn && inputEl && fbBox) {
      submitBtn.onclick = () => {
        const userText = inputEl.value.trim();
        if (!userText) {
          fbBox.innerHTML = '<span class="text-danger">Vui lòng nhập hoặc nói câu trả lời của bạn trước.</span>';
          return;
        }

        // Evaluate answer
        const lower = userText.toLowerCase();
        let matchedKeywords = (drill.key_words || []).filter(kw => lower.includes(kw.toLowerCase()));
        let isPass = userText.length >= 3 && (matchedKeywords.length > 0 || drill.model_answers.some(ans => lower.includes(ans.toLowerCase().slice(0, 5))));

        // Record in SRS
        if (App.srs && typeof App.srs.recordReflexAttempt === 'function') {
          App.srs.recordReflexAttempt(drill.id, isPass, drill.time_limit_seconds);
        }

        // Show feedback
        const ansBox = $('drillAnswersBox');
        if (ansBox) ansBox.classList.remove('hidden');

        if (isPass) {
          fbBox.innerHTML = `
            <div style="background:#dcfce7;border:1px solid #86efac;color:#166534;padding:10px 14px;border-radius:8px;">
              <b>✓ Phản xạ rất tốt!</b> Câu của bạn: "${escapeHtml(userText)}"<br>
              ${matchedKeywords.length > 0 ? `<small>Khớp từ khóa trọng tâm: ${matchedKeywords.join(', ')}</small>` : ''}
            </div>
          `;
        } else {
          fbBox.innerHTML = `
            <div style="background:#fffbeb;border:1px solid #fde68a;color:#92400e;padding:10px 14px;border-radius:8px;">
              <b>Gợi ý cải thiện:</b> Câu của bạn: "${escapeHtml(userText)}"<br>
              <small>Hãy đối chiếu với các mẫu câu chuẩn bên dưới và bấm nút 🔊 để nghe phát âm lại.</small>
            </div>
          `;
        }
      };
    }
  }

  // TAB 2: LISTEN AND RESPOND (BLIND AUDIO)
  function renderListenRespond() {
    const container = $('listenRespondContainer');
    if (!container) return;

    const list = App.reflexData.quick_drills || [];
    if (list.length === 0) return;
    if (App.lrIndex >= list.length) App.lrIndex = 0;
    const drill = list[App.lrIndex];

    container.innerHTML = `
      <div class="drill-card" style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px;box-shadow:var(--shadow-sm);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div style="display:flex;gap:6px;align-items:center;">
            <span class="badge ${drill.category}">${drill.category.toUpperCase()}</span>
            <span class="chip gold">Tuần ${drill.week || 1}</span>
            <span class="chip blue">🎧 Chế độ nghe trước</span>
          </div>
          <span class="timer-badge" id="lrTimerBadge" style="font-size:13px;font-weight:750;background:#eff6ff;color:#1e40af;padding:4px 10px;border-radius:99px;">
            ⏱️ 15s phản xạ
          </span>
        </div>

        <!-- Prominent Blind Audio Player -->
        <div style="background:#f8fafc;border:2px dashed #cbd5e1;border-radius:14px;padding:20px;text-align:center;margin-bottom:20px;">
          <div style="font-size:14px;color:var(--muted);margin-bottom:12px;">Bấm nút bên dưới để nghe câu hỏi (Văn bản tiếng Anh và bản dịch đang được ẩn để bạn luyện tai):</div>
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
            <button class="btn primary btn-lg" id="lrPlayAudioBtn">🎧 BẤM ĐỂ NGHE CÂU HỎI</button>
            <button class="btn light btn-lg" id="lrPlaySlowBtn">🐢 Nghe chậm</button>
            <button class="btn outline btn-sm" id="lrToggleTranscriptBtn" style="align-self:center;">👁️ Mở gợi ý transcript</button>
          </div>
        </div>

        <!-- Hidden Prompt (Revealed on request or after answer) -->
        <div id="lrHiddenPromptBox" class="hidden" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:14px;margin-bottom:16px;">
          <div style="font-size:12px;font-weight:700;color:#1e40af;margin-bottom:4px;">CÂU HỎI TIẾNG ANH:</div>
          <div style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:4px;">"${escapeHtml(drill.prompt_en)}"</div>
          <div style="font-size:14px;color:var(--muted);">${escapeHtml(drill.prompt_vi)}</div>
        </div>

        <!-- Response Area -->
        <div style="background:#fafbfc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:16px;">
          <label style="display:block;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:6px;">Phản xạ câu trả lời của bạn:</label>
          <div style="display:flex;gap:8px;">
            <input type="text" class="field" id="lrUserInput" placeholder="Nhập câu trả lời của bạn..." style="flex:1;">
            <button class="btn light" id="lrMicBtn">🎙️</button>
            <button class="btn primary" id="submitLrBtn">Nộp câu trả lời</button>
          </div>
          <div id="lrFeedbackBox" style="margin-top:10px;font-size:13px;"></div>
        </div>

        <!-- Revealed Model Answers -->
        <div id="lrAnswersBox" class="hidden" style="background:#f1f5f9;border-radius:12px;padding:14px;margin-bottom:16px;">
          <strong style="color:var(--navy);display:block;margin-bottom:6px;">Mẫu câu trả lời tham khảo:</strong>
          <ul style="margin:0;padding-left:18px;">
            ${drill.model_answers.map(ans => `
              <li style="margin:6px 0;font-size:14px;">
                <b>"${escapeHtml(ans)}"</b>
                <button class="mini-speak-btn" data-speak="${escapeHtml(ans)}">🔊</button>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Nav -->
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);">
          <button class="btn btn-sm outline" id="lrPrevBtn" ${App.lrIndex === 0 ? 'disabled' : ''}>← Câu trước</button>
          <span class="text-muted" style="font-size:13px;">${App.lrIndex + 1} / ${list.length}</span>
          <button class="btn btn-sm outline" id="lrNextBtn" ${App.lrIndex === list.length - 1 ? 'disabled' : ''}>Câu tiếp →</button>
        </div>
      </div>
    `;

    containerSpeakButtons(container);

    const playBtn = $('lrPlayAudioBtn');
    const playSlowBtn = $('lrPlaySlowBtn');
    if (playBtn) playBtn.onclick = () => playTTS(drill.prompt_en, 0.85);
    if (playSlowBtn) playSlowBtn.onclick = () => playTTS(drill.prompt_en, 0.70);

    const toggleTrans = $('lrToggleTranscriptBtn');
    if (toggleTrans) {
      toggleTrans.onclick = () => {
        const b = $('lrHiddenPromptBox');
        if (b) b.classList.toggle('hidden');
      };
    }

    // Submit
    const submitBtn = $('submitLrBtn');
    const inputEl = $('lrUserInput');
    const fbBox = $('lrFeedbackBox');
    if (submitBtn && inputEl && fbBox) {
      submitBtn.onclick = () => {
        const val = inputEl.value.trim();
        if (!val) {
          fbBox.innerHTML = '<span class="text-danger">Vui lòng nhập câu trả lời.</span>';
          return;
        }

        // Reveal both prompt and answers
        const promptBox = $('lrHiddenPromptBox');
        const ansBox = $('lrAnswersBox');
        if (promptBox) promptBox.classList.remove('hidden');
        if (ansBox) ansBox.classList.remove('hidden');

        const isGood = val.length >= 3;
        if (App.srs && typeof App.srs.recordReflexAttempt === 'function') {
          App.srs.recordReflexAttempt(drill.id, isGood, 15);
        }

        fbBox.innerHTML = `
          <div style="background:#dcfce7;border:1px solid #86efac;color:#166534;padding:10px 14px;border-radius:8px;">
            <b>✓ Đã ghi nhận phản xạ!</b> Hãy so sánh câu của bạn với transcript gốc và mẫu câu chuẩn.
          </div>
        `;
      };
    }

    // Nav
    const prevBtn = $('lrPrevBtn');
    const nextBtn = $('lrNextBtn');
    if (prevBtn) {
      prevBtn.onclick = () => { App.lrIndex = Math.max(0, App.lrIndex - 1); renderListenRespond(); };
    }
    if (nextBtn) {
      nextBtn.onclick = () => { App.lrIndex = Math.min(list.length - 1, App.lrIndex + 1); renderListenRespond(); };
    }
  }

  // TAB 3: ROLE-PLAY SCENARIOS (30 SCENARIOS, 10 GROUPS)
  function renderRoleplayScenarios() {
    const container = $('branchingScenariosContainer');
    const filterSelect = $('roleplayGroupFilter');
    if (!container) return;

    if (filterSelect) {
      filterSelect.onchange = (e) => {
        App.roleplayGroupFilter = e.target.value;
        renderRoleplayScenarios();
      };
    }

    let list = App.reflexData.branching_scenarios || [];
    if (App.roleplayGroupFilter && App.roleplayGroupFilter !== 'all') {
      list = list.filter(sc => (sc.category || '').toLowerCase() === App.roleplayGroupFilter.toLowerCase() || (sc.group || '').toLowerCase() === App.roleplayGroupFilter.toLowerCase());
    }

    container.innerHTML = list.map(sc => {
      const isDone = App.srs && App.srs.state.scenario_history && App.srs.state.scenario_history[sc.id];
      return `
        <div class="scenario-card" style="background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-sm);">
          <div>
            <div class="sc-head" style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;gap:8px;">
              <span class="badge ${sc.category ? 'workplace' : 'primary'}" style="font-size:11px;">${escapeHtml(sc.category || 'GIAO TIẾP')}</span>
              <span class="chip gold">Tuần ${sc.week || 1}</span>
            </div>
            <h4 style="font-size:16px;font-weight:750;color:var(--navy);margin-bottom:6px;">${escapeHtml(sc.title)}</h4>
            <p class="sc-desc" style="font-size:13px;color:var(--muted);line-height:1.4;margin-bottom:12px;">${escapeHtml(sc.description)}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);margin-top:auto;">
            <small style="color:var(--muted);font-weight:600;">${isDone ? '<span style="color:#10b981;">✓ Đã hoàn thành</span>' : '4–8 lượt thoại'}</small>
            <button class="btn primary btn-sm start-scenario-btn" data-scid="${sc.id}">
              ▶ ${isDone ? 'Luyện lại' : 'Bắt đầu tình huống'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.start-scenario-btn').forEach(btn => {
      btn.onclick = () => {
        const scId = btn.dataset.scid;
        startBranchingScenario(scId);
      };
    });
  }

  function startBranchingScenario(scId) {
    const sc = App.reflexData.branching_scenarios.find(s => s.id === scId);
    if (!sc) return;

    App.activeScenario = sc;
    App.activeScenarioNode = sc.initial_node;

    const modal = $('scenarioModal');
    if (modal) modal.classList.remove('hidden');
    renderBranchingNode();
  }

  function renderBranchingNode() {
    const sc = App.activeScenario;
    const node = sc.nodes[App.activeScenarioNode];
    const container = $('scenarioContentBox');
    if (!container || !node) return;

    let html = `
      <div class="scenario-dialogue-node">
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:#1e40af;">
          <b>Bối cảnh tình huống:</b> ${escapeHtml(sc.context_vi || sc.description)}
        </div>
        <div class="speaker-label" style="font-weight:800;color:var(--navy);margin-bottom:6px;">🗣️ ${escapeHtml(node.speaker)}</div>
        <div class="speech-bubble" style="background:#f8fafc;border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:16px;">
          <div class="bubble-en" style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px;">"${escapeHtml(node.text)}"</div>
          <div class="bubble-vi" style="font-size:13px;color:var(--muted);margin-bottom:8px;">${escapeHtml(node.text_vi)}</div>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-xs light" data-speak="${escapeHtml(node.text)}">🔊 Nghe đối thoại</button>
            <button class="btn btn-xs light" data-speak-slow="${escapeHtml(node.text)}">🐢 Nghe chậm</button>
          </div>
        </div>
    `;

    if (node.is_terminal) {
      // Record completed scenario
      if (App.srs && typeof App.srs.recordScenarioAttempt === 'function') {
        App.srs.recordScenarioAttempt(sc.id, true, 4);
      }

      html += `
        <div class="scenario-terminal-success" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:18px;margin-top:16px;">
          <h4 style="color:#166534;margin-bottom:8px;">🎉 Tình huống kết thúc an toàn & thành công!</h4>
          <p style="font-size:13px;color:#15803d;margin-bottom:12px;">${escapeHtml(node.result || 'Bạn đã thể hiện phản xạ kỹ thuật và ý thức giao tiếp chuẩn mực.')}</p>

          ${node.common_mistakes ? `
            <div style="background:#fff;border-left:3px solid #f59e0b;padding:8px 12px;margin-bottom:10px;font-size:13px;">
              <b>Lỗi phổ biến cần tránh:</b> ${escapeHtml(node.common_mistakes)}
            </div>
          ` : ''}

          ${node.natural_phrasing ? `
            <div style="background:#fff;border-left:3px solid #10b981;padding:8px 12px;margin-bottom:14px;font-size:13px;">
              <b>Cách diễn đạt tự nhiên hơn:</b> ${escapeHtml(node.natural_phrasing)}
            </div>
          ` : ''}

          <button class="btn primary" id="closeScenarioBtn">Hoàn tất & Lưu tiến độ tình huống</button>
        </div>
      `;
    } else if (node.options && node.options.length > 0) {
      html += `
        <div class="scenario-choices">
          <p style="font-weight:750;color:var(--navy);margin-bottom:10px;">Lựa chọn phản ứng của bạn:</p>
          ${node.options.map((opt, oIdx) => `
            <button class="scenario-opt-btn ${opt.is_safe ? '' : 'opt-unsafe'}" data-optindex="${oIdx}" style="display:block;width:100%;text-align:left;padding:12px 16px;margin:8px 0;border-radius:10px;border:1px solid var(--line);background:#fff;cursor:pointer;">
              <div class="opt-text" style="font-weight:700;font-size:14px;">${escapeHtml(opt.text)}</div>
              ${opt.feedback ? `<small class="opt-hint text-muted" style="display:block;margin-top:4px;">💡 ${escapeHtml(opt.feedback)}</small>` : ''}
            </button>
          `).join('')}
        </div>
      `;
    }

    html += `</div>`;
    container.innerHTML = html;

    // Speak handlers
    container.querySelectorAll('[data-speak]').forEach(b => {
      b.onclick = () => playTTS(b.dataset.speak, 0.85);
    });
    container.querySelectorAll('[data-speak-slow]').forEach(b => {
      b.onclick = () => playTTS(b.dataset.speakSlow, 0.70);
    });

    const closeBtn = $('closeScenarioBtn');
    if (closeBtn) closeBtn.onclick = () => {
      const modal = $('scenarioModal');
      if (modal) modal.classList.add('hidden');
      renderRoleplayScenarios();
    };

    container.querySelectorAll('.scenario-opt-btn').forEach(btn => {
      btn.onclick = () => {
        const oIdx = parseInt(btn.dataset.optindex, 10);
        const choice = node.options[oIdx];
        if (choice && choice.next_node) {
          App.activeScenarioNode = choice.next_node;
          renderBranchingNode();
        }
      };
    });
  }

  // TAB 4: SHADOWING
  function renderShadowingDrills() {
    const container = $('shadowingDrillsContainer');
    if (!container) return;

    const list = App.reflexData.shadowing_drills || [];
    container.innerHTML = list.map(sh => `
      <div class="shadowing-card" style="background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px;margin-bottom:14px;box-shadow:var(--shadow-sm);">
        <div class="sh-head" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span class="badge ${sh.category}">${sh.category.toUpperCase()}</span>
          <span class="chip gold">Tuần ${sh.week || 1}</span>
        </div>
        <h4 style="font-size:16px;font-weight:800;color:var(--navy);margin-bottom:6px;">${escapeHtml(sh.title)}</h4>
        <div class="sh-sentence" style="font-size:16px;font-weight:750;color:#0284c7;margin-bottom:4px;">"${escapeHtml(sh.sentence_en)}"</div>
        <div class="sh-ipa" style="font-family:ui-monospace, monospace;color:var(--muted);font-size:13px;margin-bottom:4px;">${escapeHtml(sh.ipa)}</div>
        <div class="sh-vi" style="font-size:13px;color:var(--ink);margin-bottom:8px;">${escapeHtml(sh.sentence_vi)}</div>
        <div class="sh-sounds text-muted" style="font-size:12px;margin-bottom:12px;">Âm trọng tâm: ${sh.key_sounds.join(' · ')}</div>
        <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn light btn-sm shadow-play-btn" data-text="${escapeHtml(sh.sentence_en)}" data-rate="0.8">🐢 0.8x (Chậm)</button>
          <button class="btn primary btn-sm shadow-play-btn" data-text="${escapeHtml(sh.sentence_en)}" data-rate="1.0">▶ 1.0x (Chuẩn)</button>
          <button class="btn outline btn-sm shadow-play-btn" data-text="${escapeHtml(sh.sentence_en)}" data-rate="1.2">⚡ 1.2x (Nhanh)</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.shadow-play-btn').forEach(b => {
      b.onclick = () => {
        const text = b.dataset.text;
        const rate = parseFloat(b.dataset.rate || 1.0);
        playTTS(text, rate);
      };
    });
  }

  // TAB 5: REFLEX STATS & HISTORY
  function renderReflexStats() {
    const container = $('reflexStatsContainer');
    if (!container) return;

    const stats = (App.srs && typeof App.srs.getReflexStats === 'function') 
      ? App.srs.getReflexStats() 
      : { total_attempted: 0, completed_count: 0, completion_rate: 0, avg_response_time: 0, correct_count: 0, needs_review: [], history: [] };

    container.innerHTML = `
      <div style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px;box-shadow:var(--shadow-sm);">
        <h3 style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:16px;">📊 Báo Cáo Phản Xạ & Lịch Sử Luyện Tập</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:24px;">
          <div style="background:#eff6ff;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#1e40af;">${stats.total_attempted}</div>
            <small style="color:#1e40af;font-weight:600;">Số câu đã phản xạ</small>
          </div>
          <div style="background:#f0fdf4;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#166534;">${stats.correct_count}</div>
            <small style="color:#166534;font-weight:600;">Phản xạ đạt chuẩn</small>
          </div>
          <div style="background:#fef3c7;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#92400e;">${stats.completion_rate}%</div>
            <small style="color:#92400e;font-weight:600;">Tỷ lệ phản xạ tốt</small>
          </div>
          <div style="background:#faf5ff;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#6b21a8;">${stats.avg_response_time}s</div>
            <small style="color:#6b21a8;font-weight:600;">Thời gian TB</small>
          </div>
        </div>

        <h4 style="font-size:15px;font-weight:750;color:var(--navy);margin-bottom:10px;">Lịch sử phản xạ gần nhất:</h4>
        ${stats.history.length === 0 ? `
          <p class="text-muted" style="font-size:13px;">Chưa có lịch sử làm bài. Hãy chọn tab "Phản xạ nhanh" hoặc "Nghe & Phản xạ" để bắt đầu luyện tập!</p>
        ` : `
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:13px;">
              <thead>
                <tr style="border-bottom:2px solid var(--line);text-align:left;">
                  <th style="padding:8px;">Thời gian</th>
                  <th style="padding:8px;">Mã câu</th>
                  <th style="padding:8px;">Kết quả</th>
                  <th style="padding:8px;">Thời gian phản hồi</th>
                </tr>
              </thead>
              <tbody>
                ${stats.history.slice(0, 10).map(h => `
                  <tr style="border-bottom:1px solid var(--line);">
                    <td style="padding:8px;">${new Date(h.date).toLocaleDateString('vi-VN')}</td>
                    <td style="padding:8px;"><b>${escapeHtml(h.drill_id)}</b></td>
                    <td style="padding:8px;">${h.is_correct ? '<span style="color:#10b981;font-weight:700;">✓ Đạt</span>' : '<span style="color:#ef4444;font-weight:700;">✗ Cần ôn</span>'}</td>
                    <td style="padding:8px;">${h.response_time}s</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;
  }

  // ==========================================
  // 6B. READING COMPREHENSION CONTROLLER (15 PASSAGES)
  // ==========================================
  function renderReadingView() {
    const listContainer = $('readingPassagesList');
    const readerContainer = $('readingReaderContainer');
    const headerChip = $('readingHeaderStatsChip');
    if (!listContainer || !readerContainer) return;

    // Show list, hide reader
    listContainer.classList.remove('hidden');
    readerContainer.classList.add('hidden');

    const passages = App.readingData || [];
    const stats = (App.srs && typeof App.srs.getReadingStats === 'function')
      ? App.srs.getReadingStats()
      : { completed_count: 0, total_passages: 15, pct: 0 };

    if (headerChip) {
      headerChip.textContent = `Đã hoàn thành: ${stats.completed_count} / ${passages.length} bài (${stats.pct}%)`;
    }

    // Filter handlers
    $$('.read-level-btn').forEach(btn => {
      btn.onclick = () => {
        $$('.read-level-btn').forEach(b => {
          b.classList.remove('primary');
          b.classList.add('outline');
        });
        btn.classList.add('primary');
        btn.classList.remove('outline');
        App.readingLevelFilter = btn.dataset.level;
        renderReadingView();
      };
    });

    const modeSelect = $('readingModeSelect');
    if (modeSelect) {
      modeSelect.onchange = (e) => {
        App.readingMode = e.target.value;
      };
    }

    let filtered = passages;
    if (App.readingLevelFilter && App.readingLevelFilter !== 'all') {
      filtered = filtered.filter(p => p.level === App.readingLevelFilter);
    }

    listContainer.innerHTML = filtered.map(p => {
      const isDone = App.srs && typeof App.srs.isReadingCompleted === 'function' && App.srs.isReadingCompleted(p.id);
      return `
        <div class="reading-card" style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-sm);">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <span class="badge" style="background:#e0f2fe;color:#0369a1;font-weight:800;">${p.level}</span>
              <span class="chip gold">Tuần ${p.week}</span>
              <span class="chip">${p.word_count} từ</span>
            </div>
            <h3 style="font-size:17px;font-weight:800;color:var(--navy);margin-bottom:4px;">${escapeHtml(p.title_en)}</h3>
            <h4 style="font-size:13px;font-weight:600;color:#047857;margin-bottom:8px;">${escapeHtml(p.title_vi)}</h4>
            <p style="font-size:12px;color:var(--muted);line-height:1.4;margin-bottom:14px;">${escapeHtml(p.objective)}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);margin-top:auto;">
            <small style="font-weight:700;${isDone ? 'color:#10b981;' : 'color:var(--muted);'}">
              ${isDone ? '✓ Đã hoàn thành' : `⏱️ ${p.estimated_minutes} phút`}
            </small>
            <button class="btn primary btn-sm open-reading-btn" data-pid="${p.id}">
              ${isDone ? 'Đọc lại →' : 'Vào luyện đọc →'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    listContainer.querySelectorAll('.open-reading-btn').forEach(btn => {
      btn.onclick = () => {
        openReadingPassage(btn.dataset.pid);
      };
    });
  }

  function openReadingPassage(passageId) {
    const listContainer = $('readingPassagesList');
    const readerContainer = $('readingReaderContainer');
    if (!listContainer || !readerContainer) return;

    const p = (App.readingData || []).find(x => x.id === passageId);
    if (!p) {
      showToast('Không tìm thấy bài đọc.');
      return;
    }

    App.activeReadingId = passageId;
    listContainer.classList.add('hidden');
    readerContainer.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mode = App.readingMode || 'supported';
    const isDone = App.srs && typeof App.srs.isReadingCompleted === 'function' && App.srs.isReadingCompleted(p.id);

    // Build sentence HTML
    const sentencesHtml = (p.sentences || []).map((s, idx) => {
      return `<span class="reading-sentence" data-sent-idx="${idx}" style="cursor:pointer;padding:2px 4px;border-radius:4px;transition:background .15s ease;" title="Bấm để nghe đọc câu này">${escapeHtml(s)} </span>`;
    }).join('');

    // Highlight vocab words into clickable chips
    let renderedText = sentencesHtml;

    readerContainer.innerHTML = `
      <div class="reading-reader-view" style="background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:var(--shadow-sm);">
        <button class="btn btn-sm outline" id="backToReadingListBtn" style="margin-bottom:16px;">← Quay lại danh sách 15 bài đọc</button>
        
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
          <div>
            <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
              <span class="badge" style="background:#e0f2fe;color:#0369a1;font-weight:800;">${p.level}</span>
              <span class="chip gold">Tuần ${p.week}</span>
              <span class="chip">${p.word_count} từ</span>
              <span class="chip blue">Chế độ: ${mode === 'supported' ? '📗 Đọc có hỗ trợ' : (mode === 'independent' ? '📘 Đọc độc lập' : '⏱️ Đọc bấm giờ')}</span>
            </div>
            <h1 style="font-size:24px;font-weight:800;color:var(--navy);margin:4px 0;">${escapeHtml(p.title_en)}</h1>
            <h2 style="font-size:16px;font-weight:600;color:#047857;margin:0;">${escapeHtml(p.title_vi)}</h2>
          </div>

          ${mode === 'timed' ? `
            <div id="readingTimerPill" style="font-size:16px;font-weight:800;background:#fef3c7;color:#92400e;padding:6px 16px;border-radius:99px;">
              ⏱️ 05:00
            </div>
          ` : ''}
        </div>

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 16px;font-size:13px;color:#166534;margin-bottom:18px;">
          🎯 <b>Mục tiêu đọc hiểu:</b> ${escapeHtml(p.objective)}
        </div>

        <!-- Audio Toolbar -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:12px 16px;background:#f8fafc;border:1px solid var(--line);border-radius:12px;margin-bottom:20px;">
          <button class="btn primary btn-sm" id="readPassageAloudBtn">▶ Nghe toàn bài</button>
          <button class="btn light btn-sm" id="readPassageSlowBtn">🐢 Đọc chậm (0.75x)</button>
          <button class="btn outline btn-sm" id="stopPassageAudioBtn" style="color:#dc2626;border-color:#fca5a5;">⏹ Dừng</button>
          <button class="btn outline btn-sm" id="toggleReadingTransBtn">👁️ Ẩn/Hiện bản dịch</button>
          <div style="margin-left:auto;font-size:12px;color:var(--muted);font-weight:600;" id="readingAudioStatus">
            💡 Mẹo: Bấm vào bất kỳ câu nào để nghe phát âm riêng câu đó
          </div>
        </div>

        <!-- Target Vocabulary Interactive Strip -->
        <div style="margin-bottom:18px;">
          <span style="font-size:12px;font-weight:750;color:var(--navy);display:block;margin-bottom:6px;">Từ vựng trọng tâm bài đọc (Bấm từ để tra nghĩa & thêm SRS):</span>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${(p.target_vocabulary || []).map(v => `
              <button class="btn btn-xs outline vocab-chip-interactive" data-word="${escapeHtml(v.word)}" data-ipa="${escapeHtml(v.ipa || '')}" data-vi="${escapeHtml(v.vi)}" data-context="${escapeHtml(v.context || '')}">
                <b>${escapeHtml(v.word)}</b> <small style="color:var(--muted);">(${escapeHtml(v.vi)})</small>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- English Passage Text -->
        <div class="reading-passage-text" style="font-size:16px;line-height:1.8;color:#1e293b;padding:20px;background:#fbfcfe;border:1px solid #e2e8f0;border-radius:14px;margin-bottom:18px;">
          ${renderedText}
        </div>

        <!-- Vietnamese Full Translation (Collapsible) -->
        <div id="readingTransBox" class="${mode === 'independent' ? 'hidden' : 'hidden'}" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:16px;margin-bottom:24px;">
          <h4 style="color:#1e40af;margin-bottom:8px;font-size:14px;">BẢN DỊCH TIẾNG VIỆT TOÀN BÀI:</h4>
          <p style="font-size:14px;line-height:1.7;color:#1e3a8a;margin:0;white-space:pre-wrap;">${escapeHtml(p.passage_vi)}</p>
        </div>

        <!-- Reading Comprehension Quiz (5-8 Questions) -->
        <div class="reading-quiz-section" style="margin-top:28px;padding-top:20px;border-top:2px solid var(--line);">
          <h3 style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:6px;">📝 Câu hỏi kiểm tra đọc hiểu (${p.questions.length} câu)</h3>
          <p style="font-size:13px;color:var(--muted);margin-bottom:16px;">Đọc kỹ đoạn văn và chọn đáp án chính xác nhất:</p>

          <div id="readingQuizContainer">
            ${p.questions.map((q, qIdx) => `
              <div class="quiz-item-card" data-qidx="${qIdx}" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:14px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                  <b style="font-size:14px;color:var(--navy);">Câu ${qIdx + 1}: ${escapeHtml(q.question)}</b>
                  <span class="badge" style="font-size:10px;background:#f1f5f9;color:var(--navy);">${escapeHtml(q.type.toUpperCase())}</span>
                </div>
                <div class="quiz-options-group" style="display:flex;flex-direction:column;gap:6px;">
                  ${q.options.map((opt, oIdx) => `
                    <label class="quiz-option-label" style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fff;border:1px solid var(--line);border-radius:8px;cursor:pointer;">
                      <input type="radio" name="readQuiz_${qIdx}" value="${oIdx}">
                      <span style="font-size:13px;">${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                </div>
                <div id="readQuizFeedback_${qIdx}" class="q-feedback" style="margin-top:8px;font-size:13px;"></div>
              </div>
            `).join('')}
          </div>

          <button class="btn primary btn-lg" id="submitReadingQuizBtn" style="margin-top:14px;">Nộp bài kiểm tra đọc hiểu</button>
          <div id="readingQuizSummaryBox" style="margin-top:16px;"></div>
        </div>
      </div>
    `;

    // Event listeners
    const backBtn = $('backToReadingListBtn');
    if (backBtn) {
      backBtn.onclick = () => {
        stopAudio();
        clearInterval(App.readingTimerInterval);
        renderReadingView();
      };
    }

    const readAloudBtn = $('readPassageAloudBtn');
    const readSlowBtn = $('readPassageSlowBtn');
    const stopAudioBtn = $('stopPassageAudioBtn');
    const toggleTransBtn = $('toggleReadingTransBtn');
    const audioStatus = $('readingAudioStatus');

    if (readAloudBtn) {
      readAloudBtn.onclick = () => {
        if (audioStatus) audioStatus.textContent = '🔊 Đang đọc toàn bài...';
        playTTS(p.passage_en, 0.85);
      };
    }
    if (readSlowBtn) {
      readSlowBtn.onclick = () => {
        if (audioStatus) audioStatus.textContent = '🐢 Đang đọc chậm (0.75x)...';
        playTTS(p.passage_en, 0.75);
      };
    }
    if (stopAudioBtn) {
      stopAudioBtn.onclick = () => {
        stopAudio();
        if (audioStatus) audioStatus.textContent = 'Đã dừng phát âm';
      };
    }
    if (toggleTransBtn) {
      toggleTransBtn.onclick = () => {
        const b = $('readingTransBox');
        if (b) b.classList.toggle('hidden');
      };
    }

    // Individual sentence speech
    readerContainer.querySelectorAll('.reading-sentence').forEach(sentEl => {
      sentEl.onclick = () => {
        const text = sentEl.textContent.trim();
        readerContainer.querySelectorAll('.reading-sentence').forEach(s => s.style.background = 'transparent');
        sentEl.style.background = '#fef08a';
        if (audioStatus) audioStatus.textContent = 'Đang phát âm câu được chọn...';
        playTTS(text, 0.85);
      };
    });

    // Timed mode countdown
    if (mode === 'timed') {
      let sec = 300; // 5 mins
      clearInterval(App.readingTimerInterval);
      App.readingTimerInterval = setInterval(() => {
        sec--;
        const minStr = String(Math.floor(sec / 60)).padStart(2, '0');
        const secStr = String(sec % 60).padStart(2, '0');
        const pill = $('readingTimerPill');
        if (pill) pill.textContent = `⏱️ ${minStr}:${secStr}`;
        if (sec <= 0) {
          clearInterval(App.readingTimerInterval);
          if (pill) pill.textContent = '⏰ HẾT GIỜ!';
          showToast('Đã hết thời gian đọc bài 5 phút. Vui lòng nộp bài kiểm tra!');
        }
      }, 1000);
    }

    // Submit Reading Quiz
    const submitQuizBtn = $('submitReadingQuizBtn');
    if (submitQuizBtn) {
      submitQuizBtn.onclick = () => {
        let correctCount = 0;
        let answeredCount = 0;
        const total = p.questions.length;
        const userAnswers = [];

        p.questions.forEach((q, idx) => {
          const selected = document.querySelector(`input[name="readQuiz_${idx}"]:checked`);
          const fb = $(`readQuizFeedback_${idx}`);
          if (selected) {
            answeredCount++;
            const choice = parseInt(selected.value, 10);
            userAnswers.push(choice);
            const isCorrect = choice === q.answer;
            if (isCorrect) correctCount++;
            if (fb) {
              fb.innerHTML = isCorrect
                ? `<span class="text-success" style="font-weight:700;">✓ Chính xác! ${escapeHtml(q.explanation)}</span>`
                : `<span class="text-danger" style="font-weight:700;">✗ Chưa đúng. Đáp án: "${escapeHtml(q.options[q.answer])}". ${escapeHtml(q.explanation)}</span>`;
            }
          } else {
            userAnswers.push(null);
            if (fb) fb.innerHTML = '<span class="text-danger">Chưa chọn đáp án cho câu này.</span>';
          }
        });

        const pct = Math.round((correctCount / total) * 100);
        const isPass = pct >= 70;

        // Save progress to SRS
        if (App.srs && typeof App.srs.completeReading === 'function') {
          App.srs.completeReading(p.id, pct, userAnswers);
        }

        const summaryBox = $('readingQuizSummaryBox');
        if (summaryBox) {
          summaryBox.innerHTML = `
            <div style="background:${isPass ? '#dcfce7' : '#fff1f2'};border:1px solid ${isPass ? '#86efac' : '#fecdd3'};border-radius:12px;padding:18px;">
              <h3 style="color:${isPass ? '#166534' : '#9f1239'};margin-bottom:6px;">
                ${isPass ? '🎉 Chúc mừng! Bạn đã hoàn thành bài đọc hiểu.' : 'Cần ôn lại thêm.'}
              </h3>
              <p style="font-size:14px;color:${isPass ? '#15803d' : '#be123c'};margin-bottom:10px;">
                Điểm số: <b>${correctCount} / ${total} câu đúng (${pct}%)</b>. Tiêu chí đạt: tối thiểu 70%.
              </p>
              ${isPass ? `
                <div style="display:flex;gap:10px;margin-top:12px;">
                  <button class="btn primary btn-sm" id="readingNextBtn">Bài đọc tiếp theo →</button>
                  <button class="btn outline btn-sm" id="readingCurriculumBtn">Quay lại Lộ trình tuần ${p.week}</button>
                </div>
              ` : ''}
            </div>
          `;

          const nextBtn = $('readingNextBtn');
          if (nextBtn) {
            nextBtn.onclick = () => {
              const currentIdx = App.readingData.findIndex(x => x.id === p.id);
              if (currentIdx < App.readingData.length - 1) {
                openReadingPassage(App.readingData[currentIdx + 1].id);
              } else {
                showToast('Bạn đã hoàn thành bài đọc cuối cùng trong danh mục!');
                renderReadingView();
              }
            };
          }

          const curBtn = $('readingCurriculumBtn');
          if (curBtn) {
            curBtn.onclick = () => {
              navigateTo('curriculum');
            };
          }
        }
      };
    }
  }

  // ==========================================
  // 6C. VOICE SETTINGS CONTROLLER (PHẦN 2)
  // ==========================================
  function initVoiceSettings() {
    const modal = $('voiceSettingsModal');
    const openBtn = $('openVoiceSettingsBtn');
    const closeBtn = $('closeVoiceSettingsBtn');
    const saveBtn = $('saveVoiceSettingsBtn');
    const enSelect = $('settingEnVoiceSelect');
    const viSelect = $('settingViVoiceSelect');
    const testEnBtn = $('testEnVoiceBtn');
    const testViBtn = $('testViVoiceBtn');

    if (!modal) return;

    function populateVoices() {
      if (!window.speechEngine) return;
      const enVoices = window.speechEngine.enVoices || [];
      const viVoices = window.speechEngine.viVoices || [];

      if (enSelect) {
        if (enVoices.length === 0) {
          enSelect.innerHTML = '<option value="">(Giọng tiếng Anh mặc định của thiết bị)</option>';
        } else {
          enSelect.innerHTML = enVoices.map(v => {
            const isSel = window.speechEngine.selectedEnVoice && window.speechEngine.selectedEnVoice.name === v.name;
            const isRec = window.speechEngine.isHighQualityVoice(v);
            return `<option value="${escapeHtml(v.name)}" ${isSel ? 'selected' : ''}>${isRec ? '⭐ ' : ''}${escapeHtml(v.name)} (${v.lang})</option>`;
          }).join('');
        }
      }

      if (viSelect) {
        if (viVoices.length === 0) {
          viSelect.innerHTML = '<option value="">(Giọng tiếng Việt mặc định của thiết bị)</option>';
        } else {
          viSelect.innerHTML = viVoices.map(v => {
            const isSel = window.speechEngine.selectedViVoice && window.speechEngine.selectedViVoice.name === v.name;
            return `<option value="${escapeHtml(v.name)}" ${isSel ? 'selected' : ''}>${escapeHtml(v.name)} (${v.lang})</option>`;
          }).join('');
        }
      }

      // Sync active rate button
      const currentRate = window.speechEngine.voiceRate || 0.85;
      $$('.speed-preset-btn').forEach(btn => {
        const r = parseFloat(btn.dataset.rate || btn.dataset.speed || 0.85);
        btn.classList.toggle('active', Math.abs(r - currentRate) < 0.04);
        btn.classList.toggle('primary', Math.abs(r - currentRate) < 0.04);
        btn.classList.toggle('outline', Math.abs(r - currentRate) >= 0.04);
      });
    }

    if (window.speechEngine) {
      window.speechEngine.subscribe(populateVoices);
      populateVoices();
    }

    if (openBtn) openBtn.onclick = () => { populateVoices(); modal.classList.remove('hidden'); };
    if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };

    // Speed presets
    $$('.speed-preset-btn').forEach(btn => {
      btn.onclick = () => {
        $$('.speed-preset-btn').forEach(b => {
          b.classList.remove('active');
          b.classList.remove('primary');
          b.classList.add('outline');
        });
        btn.classList.add('active');
        btn.classList.add('primary');
        btn.classList.remove('outline');
      };
    });

    if (testEnBtn) {
      testEnBtn.onclick = () => {
        const voiceName = enSelect ? enSelect.value : null;
        const activeBtn = document.querySelector('.speed-preset-btn.active');
        const rate = activeBtn ? parseFloat(activeBtn.dataset.rate || activeBtn.dataset.speed) : 0.85;
        if (window.speechEngine) {
          if (voiceName) window.speechEngine.setVoice('en-US', voiceName);
          window.speechEngine.speak('Hello! Welcome to Miu Student English. Good luck with your study.', { rate, lang: 'en-US' });
        }
      };
    }

    if (testViBtn) {
      testViBtn.onclick = () => {
        const voiceName = viSelect ? viSelect.value : null;
        const activeBtn = document.querySelector('.speed-preset-btn.active');
        const rate = activeBtn ? parseFloat(activeBtn.dataset.rate || activeBtn.dataset.speed) : 0.85;
        if (window.speechEngine) {
          if (voiceName) window.speechEngine.setVoice('vi-VN', voiceName);
          window.speechEngine.speak('Xin chào! Chúc bạn học tiếng Anh hiệu quả mỗi ngày.', { rate, lang: 'vi-VN' });
        }
      };
    }

    if (saveBtn) {
      saveBtn.onclick = () => {
        const enVal = enSelect ? enSelect.value : null;
        const viVal = viSelect ? viSelect.value : null;
        const activeBtn = document.querySelector('.speed-preset-btn.active');
        const rate = activeBtn ? parseFloat(activeBtn.dataset.rate || activeBtn.dataset.speed) : 0.85;

        if (window.speechEngine) {
          if (enVal) window.speechEngine.setVoice('en-US', enVal);
          if (viVal) window.speechEngine.setVoice('vi-VN', viVal);
          window.speechEngine.setRate(rate);
        }
        showToast('Đã lưu cấu hình giọng đọc thành công!');
        modal.classList.add('hidden');
      };
    }
  }

  // ==========================================
  // 6D. VOCAB DEFINITION MODAL CONTROLLER
  // ==========================================
  function initVocabDefModal() {
    const modal = $('vocabDefModal');
    const closeBtn = $('closeVocabDefBtn');
    const wordEl = $('vocabDefWord');
    const ipaEl = $('vocabDefIpa');
    const viEl = $('vocabDefVi');
    const contextEl = $('vocabDefContext');
    const speakBtn = $('speakVocabDefBtn');
    const addSrsBtn = $('addVocabDefSrsBtn');

    if (!modal) return;

    if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };

    // Delegated click for vocab chips
    document.addEventListener('click', e => {
      const chip = e.target.closest('.vocab-chip-interactive');
      if (chip) {
        const word = chip.dataset.word || '';
        const ipa = chip.dataset.ipa || '';
        const vi = chip.dataset.vi || '';
        const context = chip.dataset.context || '';

        if (wordEl) wordEl.textContent = word;
        if (ipaEl) ipaEl.textContent = ipa;
        if (viEl) viEl.textContent = vi;
        if (contextEl) contextEl.innerHTML = context ? `<b>Ngữ cảnh trong bài:</b> "${escapeHtml(context)}"` : '';

        if (speakBtn) {
          speakBtn.onclick = () => playTTS(word, 0.85);
        }
        if (addSrsBtn) {
          addSrsBtn.textContent = '+ Thêm vào SRS ôn tập';
          addSrsBtn.disabled = false;
          addSrsBtn.onclick = () => {
            if (App.srs) {
              const id = 'voc-custom-' + word.toLowerCase().replace(/[^a-z0-9]/g, '-');
              App.srs.reviewWord(id, 2);
              addSrsBtn.textContent = '✓ Đã vào SRS';
              addSrsBtn.disabled = true;
              showToast(`Đã đưa từ "${word}" vào hàng đợi Ôn tập thông minh.`);
            }
          };
        }

        modal.classList.remove('hidden');
      }
    });
  }

    // ==========================================
  // 7. BACKUP, EXPORT & SETTINGS
  // ==========================================
  // ==========================================
  // 7. BACKUP, GOOGLE DRIVE & CLOUD SETTINGS
  // ==========================================
  const GoogleDriveSync = {
    tokenClient: null,
    accessToken: null,

    async quickSaveToDrive() {
      const jsonStr = App.srs.exportBackupJSON();
      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = `english-hub-backup-${dateStr}.json`;
      const file = new File([jsonStr], fileName, { type: 'application/json' });

      // Native Web Share API with File (Mobile Chrome / Safari on iOS & Android)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: 'Sao lưu Miu Student English',
            text: 'Tệp sao lưu tiến độ và từ vựng Miu Student English cá nhân',
            files: [file]
          });
          showToast('Đã mở menu Chia sẻ. Hãy chọn Google Drive để lưu nhé!');
          return;
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn('Native share error, falling back:', err);
          } else {
            return;
          }
        }
      }

      // Desktop or browser fallback: Download JSON file and open Google Drive Web
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);

      window.open('https://drive.google.com/drive/my-drive', '_blank');
      showToast('Đã tải tệp sao lưu & mở Google Drive. Bạn hãy kéo tệp vừa tải vào Drive nhé!');
    },

    initGisClient(clientId) {
      if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
        showToast('Thư viện Google API chưa sẵn sàng. Bạn có thể dùng Cách 1 (Lưu nhanh lên Drive) rất tiện lợi.');
        return false;
      }
      try {
        this.tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'https://www.googleapis.com/auth/drive.file',
          callback: (tokenResponse) => {
            if (tokenResponse && tokenResponse.access_token) {
              this.accessToken = tokenResponse.access_token;
              showToast('Đăng nhập Google Drive thành công!');
              this.updateStatusBadge('Đã kết nối');
            }
          }
        });
        return true;
      } catch (e) {
        console.error('GIS init error:', e);
        return false;
      }
    },

    async uploadToDriveAPI() {
      const cfg = App.srs.state.google_drive_config || {};
      const clientId = cfg.client_id;
      if (!clientId) {
        showToast('Vui lòng nhập Google Client ID trong phần Cài đặt API trước.');
        $('gdriveConfigPanel')?.classList.remove('hidden');
        return;
      }

      if (!this.accessToken) {
        this.initGisClient(clientId);
        if (this.tokenClient) {
          this.tokenClient.requestAccessToken({ prompt: 'consent' });
          showToast('Vui lòng chọn tài khoản Google để cấp quyền lưu file sao lưu.');
          return;
        }
      }

      showToast('Đang tải dữ liệu lên Google Drive...');
      try {
        const jsonContent = App.srs.exportBackupJSON();
        const metadata = {
          name: 'miu_english_backup.json',
          mimeType: 'application/json'
        };

        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', new Blob([jsonContent], { type: 'application/json' }));

        let uploadUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
        let method = 'POST';
        if (cfg.file_id) {
          uploadUrl = `https://www.googleapis.com/upload/drive/v3/files/${cfg.file_id}?uploadType=multipart`;
          method = 'PATCH';
        }

        let res = await fetch(uploadUrl, {
          method,
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          },
          body: form
        });

        if (!res.ok && res.status === 404 && cfg.file_id) {
          // Fallback create new file if previous file was deleted
          res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${this.accessToken}`
            },
            body: form
          });
        }

        if (!res.ok) {
          if (res.status === 401) {
            this.accessToken = null;
            throw new Error('Phiên đăng nhập hết hạn. Vui lòng bấm lại để đăng nhập.');
          }
          throw new Error(`Google API lỗi (${res.status})`);
        }

        const data = await res.json();
        cfg.last_synced = new Date().toISOString();
        cfg.file_id = data.id;
        App.srs.saveState();
        showToast('🎉 Đã đồng bộ lên Google Drive thành công!');
        this.updateStatusBadge('Đồng bộ lúc ' + new Date().toLocaleTimeString('vi-VN'));
        renderBackupView();
      } catch (err) {
        showToast('Lỗi tải lên Drive: ' + err.message);
      }
    },

    async downloadFromDriveAPI() {
      const cfg = App.srs.state.google_drive_config || {};
      const clientId = cfg.client_id;
      if (!clientId) {
        showToast('Vui lòng nhập Google Client ID trước.');
        $('gdriveConfigPanel')?.classList.remove('hidden');
        return;
      }

      if (!this.accessToken) {
        this.initGisClient(clientId);
        if (this.tokenClient) {
          this.tokenClient.requestAccessToken({ prompt: 'consent' });
          showToast('Vui lòng chọn tài khoản Google để tải file.');
          return;
        }
      }

      showToast('Đang tìm bản sao lưu trên Google Drive...');
      try {
        const q = encodeURIComponent("(name = 'miu_english_backup.json' or name = 'english_hub_backup.json') and trashed = false");
        const listRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&orderBy=modifiedTime desc`, {
          headers: { Authorization: `Bearer ${this.accessToken}` }
        });
        const listData = await listRes.json();
        if (!listData.files || listData.files.length === 0) {
          throw new Error('Không tìm thấy tệp sao lưu (miu_english_backup.json) trên Google Drive của bạn.');
        }

        const fileId = listData.files[0].id;
        const fileRes = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
          headers: { Authorization: `Bearer ${this.accessToken}` }
        });
        const jsonStr = await fileRes.text();
        const importResult = App.srs.importBackupJSON(jsonStr);

        if (importResult.success) {
          cfg.last_synced = new Date().toISOString();
          cfg.file_id = fileId;
          App.srs.saveState();
          showToast('🎉 Đồng bộ thành công từ Google Drive!');
          syncVocabBank();
          renderBackupView();
          renderDashboard();
        } else {
          throw new Error(importResult.message);
        }
      } catch (err) {
        showToast('Lỗi tải từ Drive: ' + err.message);
      }
    },

    updateStatusBadge(text) {
      const badge = $('gdriveStatusText');
      if (badge) badge.textContent = text;
    }
  };

  function renderBackupView() {
    const stats = App.srs.getStats();
    const cfg = App.srs.state.google_drive_config || {};

    if ($('backupStatsDisplay')) {
      $('backupStatsDisplay').innerHTML = `
        <ul style="line-height:1.8;">
          <li>Ngày hiện tại trong giáo trình: <b>Ngày ${stats.current_day} / 365</b></li>
          <li>Số bài học đã hoàn thành: <b>${stats.completed_lessons} bài</b></li>
          <li>Chuỗi học liên tiếp (Streak): <b>${stats.streak_days} ngày 🔥</b></li>
          <li>Từ vựng đang theo dõi SRS: <b>${stats.total_vocab_tracked} từ</b></li>
          <li>Từ vựng tự thêm cá nhân: <b>${stats.custom_vocab_count || 0} từ ✍️</b></li>
          <li>Lần đồng bộ Google Drive gần nhất: <b>${cfg.last_synced ? new Date(cfg.last_synced).toLocaleString('vi-VN') : 'Chưa đồng bộ'}</b></li>
          <li>Hỗ trợ ngoại tuyến & PWA: <b>Đã kích hoạt (Chạy mượt trên GitHub Pages)</b></li>
        </ul>
      `;
    }

    if (cfg.client_id && $('gdriveClientIdInput')) {
      $('gdriveClientIdInput').value = cfg.client_id;
    }
    if (cfg.last_synced && $('gdriveStatusText')) {
      $('gdriveStatusText').textContent = 'Đồng bộ lúc ' + new Date(cfg.last_synced).toLocaleTimeString('vi-VN');
    }

    // Google Drive Sync button bindings
    const quickGDriveBtn = $('quickSaveGDriveBtn');
    if (quickGDriveBtn) {
      quickGDriveBtn.onclick = () => GoogleDriveSync.quickSaveToDrive();
    }

    const toggleConfigBtn = $('toggleGDriveConfigBtn');
    if (toggleConfigBtn) {
      toggleConfigBtn.onclick = () => {
        $('gdriveConfigPanel')?.classList.toggle('hidden');
      };
    }

    const saveClientIdBtn = $('saveGDriveClientIdBtn');
    if (saveClientIdBtn) {
      saveClientIdBtn.onclick = () => {
        const val = $('gdriveClientIdInput')?.value.trim();
        if (!App.srs.state.google_drive_config) {
          App.srs.state.google_drive_config = {};
        }
        App.srs.state.google_drive_config.client_id = val;
        App.srs.saveState();
        showToast(val ? 'Đã lưu Google Client ID thành công!' : 'Đã xóa Google Client ID.');
      };
    }

    const uploadApiBtn = $('gdriveUploadApiBtn');
    if (uploadApiBtn) {
      uploadApiBtn.onclick = () => GoogleDriveSync.uploadToDriveAPI();
    }

    const downloadApiBtn = $('gdriveDownloadApiBtn');
    if (downloadApiBtn) {
      downloadApiBtn.onclick = () => GoogleDriveSync.downloadFromDriveAPI();
    }

    // GitHub Pages Guide button
    const ghGuideBtn = $('openGitHubPagesGuideBtn');
    if (ghGuideBtn) {
      ghGuideBtn.onclick = () => {
        $('githubPagesModal')?.classList.remove('hidden');
      };
    }
    const closeGhBtn = $('closeGitHubPagesModalBtn');
    if (closeGhBtn) {
      closeGhBtn.onclick = () => {
        $('githubPagesModal')?.classList.add('hidden');
      };
    }

    // Export local JSON
    const exportBtn = $('exportBackupBtn');
    if (exportBtn) {
      exportBtn.onclick = () => {
        const jsonStr = App.srs.exportBackupJSON();
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const dateStr = new Date().toISOString().split('T')[0];
        a.href = url;
        a.download = `english-hub-backup-${dateStr}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã tải xuống tệp sao lưu JSON thành công!');
      };
    }

    // Import local JSON
    const importInput = $('importBackupInput');
    if (importInput) {
      importInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const content = ev.target.result;
          const res = App.srs.importBackupJSON(content);
          if (res.success) {
            showToast(res.message);
            syncVocabBank();
            renderBackupView();
            renderDashboard();
          } else {
            showToast(`Lỗi nhập dữ liệu: ${res.message}`);
          }
        };
        reader.readAsText(file);
      };
    }

    // Reset Progress
    const resetBtn = $('resetProgressBtn');
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm('CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ tiến độ học và lịch sử ôn tập SRS về ban đầu. Bạn có chắc chắn không?')) {
          App.srs.resetProgress();
          showToast('Đã đặt lại tiến độ.');
          syncVocabBank();
          renderBackupView();
          renderDashboard();
        }
      };
    }
  }

  // ==========================================
  // CUSTOM VOCABULARY MODAL CONTROLLER
  // ==========================================
  function initCustomWordModal() {
    const modal = $('customWordModal');
    const openBtn = $('openAddCustomWordBtn');
    const closeBtn = $('closeCustomWordModalBtn');
    const cancelBtn = $('cancelCustomWordBtn');
    const saveBtn = $('saveCustomWordBtn');
    const speakPreviewBtn = $('speakPreviewCustomWordBtn');

    if (openBtn) {
      openBtn.onclick = () => openAddCustomWordModal();
    }
    if (closeBtn) closeBtn.onclick = () => modal?.classList.add('hidden');
    if (cancelBtn) cancelBtn.onclick = () => modal?.classList.add('hidden');

    if (speakPreviewBtn) {
      speakPreviewBtn.onclick = () => {
        const text = $('customWordEn')?.value.trim();
        if (text) playTTS(text, 0.85);
        else showToast('Hãy nhập từ tiếng Anh trước khi nghe phát âm.');
      };
    }

    if (saveBtn) {
      saveBtn.onclick = () => {
        const en = $('customWordEn')?.value.trim();
        const vi = $('customWordVi')?.value.trim();
        if (!en) {
          showToast('Vui lòng nhập từ hoặc cụm từ tiếng Anh.');
          $('customWordEn')?.focus();
          return;
        }
        if (!vi) {
          showToast('Vui lòng nhập nghĩa tiếng Việt.');
          $('customWordVi')?.focus();
          return;
        }

        const editId = $('customWordEditId')?.value.trim();
        const wordData = {
          en,
          vi,
          pos: $('customWordPos')?.value || 'phrase',
          ipa: $('customWordIpa')?.value.trim() || '',
          collocation: $('customWordColloc')?.value.trim() || '',
          example: $('customWordExample')?.value.trim() || '',
          example_vi: $('customWordExampleVi')?.value.trim() || '',
          category: $('customWordCategory')?.value || 'general',
          level: $('customWordLevel')?.value || 'A1',
          notes: $('customWordNotes')?.value.trim() || ''
        };

        try {
          if (editId) {
            App.srs.updateCustomWord(editId, wordData);
            showToast(`Đã cập nhật từ "${en}" thành công!`);
          } else {
            App.srs.addCustomWord(wordData);
            showToast(`Đã thêm từ "${en}" vào kho từ vựng cá nhân!`);
          }
          modal?.classList.add('hidden');
          syncVocabBank();
          renderVocabBank();
          renderDashboard();
        } catch (err) {
          showToast('Lỗi lưu từ vựng: ' + err.message);
        }
      };
    }
  }

  function openAddCustomWordModal() {
    const modal = $('customWordModal');
    if (!modal) return;
    $('customWordModalTitle').textContent = '➕ Thêm Từ Vựng Mới';
    $('customWordEditId').value = '';
    $('customWordEn').value = '';
    $('customWordVi').value = '';
    $('customWordPos').value = 'phrase';
    $('customWordIpa').value = '';
    $('customWordColloc').value = '';
    $('customWordExample').value = '';
    $('customWordExampleVi').value = '';
    $('customWordCategory').value = 'general';
    $('customWordLevel').value = 'A1';
    $('customWordNotes').value = '';
    modal.classList.remove('hidden');
    $('customWordEn')?.focus();
  }

  function openEditCustomWordModal(wordId) {
    const modal = $('customWordModal');
    const word = App.vocabBank.find(w => w.id === wordId);
    if (!modal || !word) return;

    $('customWordModalTitle').textContent = '✏️ Chỉnh Sửa Từ Vựng';
    $('customWordEditId').value = word.id;
    $('customWordEn').value = word.en || '';
    $('customWordVi').value = word.vi || '';
    $('customWordPos').value = word.pos || 'phrase';
    $('customWordIpa').value = word.ipa || '';
    $('customWordColloc').value = word.collocation || '';
    $('customWordExample').value = word.example || '';
    $('customWordExampleVi').value = word.example_vi || '';
    $('customWordCategory').value = word.category || 'general';
    $('customWordLevel').value = word.level || 'A1';
    $('customWordNotes').value = word.notes || '';
    modal.classList.remove('hidden');
    $('customWordEn')?.focus();
  }

  // Audio button delegate helper
  function containerSpeakButtons(container) {
    if (!container) return;
    container.querySelectorAll('[data-speak]').forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        playTTS(b.dataset.speak, 0.82);
      };
    });
  }

  // ==========================================
  // INITIALIZATION & GLOBAL EVENT LISTENERS
  // ==========================================
  function initApp() {
    // Sync Vocab Bank with Custom Vocab
    syncVocabBank();

    // Nav buttons
    $$('.navbtn').forEach(btn => {
      btn.onclick = () => navigateTo(btn.dataset.view);
    });

    // Delegated data-go links
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-go]');
      if (b) {
        navigateTo(b.dataset.go);
      }
    });

    // Month tab clicks
    const mContainer = $('curriculumMonthTabs');
    if (mContainer) {
      mContainer.addEventListener('click', e => {
        const tab = e.target.closest('.month-tab-btn');
        if (tab) {
          App.selectedMonth = parseInt(tab.dataset.month, 10);
          renderCurriculumList();
        }
      });
    }

    // Days grid open lesson
    const daysContainer = $('curriculumDaysGrid');
    if (daysContainer) {
      daysContainer.addEventListener('click', e => {
        const b = e.target.closest('.open-lesson-btn') || e.target.closest('.day-card');
        if (b && b.dataset.day) {
          openDayLesson(b.dataset.day);
        }
      });
    }

    // Vocab Filters
    const vSearch = $('vocabSearchInput');
    const vCat = $('vocabCategoryFilter');
    const vLvl = $('vocabLevelFilter');
    const vStat = $('vocabStatusFilter');
    if (vSearch) vSearch.oninput = (e) => { App.vocabSearch = e.target.value; renderVocabBank(); };
    if (vCat) vCat.onchange = (e) => { App.vocabCategory = e.target.value; renderVocabBank(); };
    if (vLvl) vLvl.onchange = (e) => { App.vocabLevel = e.target.value; renderVocabBank(); };
    if (vStat) vStat.onchange = (e) => { App.vocabStatus = e.target.value; renderVocabBank(); };

    // Vocab view mode switch
    const modeTableBtn = $('vocabModeTableBtn');
    const modeCardBtn = $('vocabModeFlashcardBtn');
    if (modeTableBtn) modeTableBtn.onclick = () => {
      App.vocabMode = 'table';
      modeTableBtn.classList.add('active');
      if (modeCardBtn) modeCardBtn.classList.remove('active');
      renderVocabBank();
    };
    if (modeCardBtn) modeCardBtn.onclick = () => {
      App.vocabMode = 'flashcard';
      modeCardBtn.classList.add('active');
      if (modeTableBtn) modeTableBtn.classList.remove('active');
      renderVocabBank();
    };

    // Quick Test launcher buttons
    const q5Btn = $('startQuiz5Btn');
    const q10Btn = $('startQuiz10Btn');
    const q20Btn = $('startQuiz20Btn');
    if (q5Btn) q5Btn.onclick = () => startQuickQuiz(5);
    if (q10Btn) q10Btn.onclick = () => startQuickQuiz(10);
    if (q20Btn) q20Btn.onclick = () => startQuickQuiz(20);

    // Mobile Guide Modal Events
    const mobileBtn = $('showMobileGuideBtn');
    const mobileModal = $('mobileGuideModal');
    const closeMobileBtn = $('closeMobileGuideBtn');
    const copyUrlBtn = $('copyLanUrlBtn');
    const lanUrlText = $('mobileLanUrlText');

    if (mobileBtn && mobileModal) {
      mobileBtn.onclick = async () => {
        mobileModal.classList.remove('hidden');
        try {
          const res = await fetch('/api/info');
          if (res.ok) {
            const data = await res.json();
            if (data.lan_ips && data.lan_ips.length > 0) {
              const url = `http://${data.lan_ips[0]}:${data.port || 3030}`;
              if (lanUrlText) lanUrlText.textContent = url;
            }
          }
        } catch (e) {
          // ignore offline fallback
        }
      };
    }
    if (closeMobileBtn && mobileModal) {
      closeMobileBtn.onclick = () => mobileModal.classList.add('hidden');
    }
    if (copyUrlBtn && lanUrlText) {
      copyUrlBtn.onclick = () => {
        navigator.clipboard.writeText(lanUrlText.textContent.trim());
        showToast('Đã sao chép link truy cập trên điện thoại!');
      };
    }

    // Initialize Voice, Vocab Quick Def, Custom Vocab, and My Cards Modals
    initVoiceSettings();
    initVocabDefModal();
    initCustomWordModal();
    initMyCardsModals();

    // Mobile Bottom Navigation & More Sheet Listeners
    $$('.mobile-nav-btn[data-view]').forEach(btn => {
      btn.onclick = () => navigateTo(btn.dataset.view);
    });

    const openMoreSheetBtn = $('openMobileMoreSheetBtn');
    const moreSheet = $('mobileMoreSheet');
    const closeMoreSheetBtn = $('closeMobileMoreSheetBtn');
    const closeMoreBackdrop = $('closeMobileMoreBackdrop');

    if (openMoreSheetBtn && moreSheet) {
      openMoreSheetBtn.onclick = () => moreSheet.classList.remove('hidden');
    }
    if (closeMoreSheetBtn && moreSheet) {
      closeMoreSheetBtn.onclick = () => moreSheet.classList.add('hidden');
    }
    if (closeMoreBackdrop && moreSheet) {
      closeMoreBackdrop.onclick = () => moreSheet.classList.add('hidden');
    }

    // Sheet Item clicks
    $$('.mobile-sheet-item[data-go]').forEach(item => {
      item.onclick = () => {
        if (moreSheet) moreSheet.classList.add('hidden');
        navigateTo(item.dataset.go);
      };
    });

    const sheetVoiceBtn = $('sheetVoiceBtn');
    if (sheetVoiceBtn) {
      sheetVoiceBtn.onclick = () => {
        if (moreSheet) moreSheet.classList.add('hidden');
        const vModal = $('voiceSettingsModal');
        if (vModal) vModal.classList.remove('hidden');
      };
    }

    const sheetGuideBtn = $('sheetGuideBtn');
    if (sheetGuideBtn) {
      sheetGuideBtn.onclick = () => {
        if (moreSheet) moreSheet.classList.add('hidden');
        const gBtn = $('showMobileGuideBtn');
        if (gBtn) gBtn.click();
      };
    }

    // Keyboard Shortcuts Handler (Anki & My Cards)
    window.addEventListener('keydown', (e) => {
      // 1. My Cards Practice Shortcuts
      if (App.currentView === 'mycards' && App.mycardsViewTab === 'practice') {
        const tag = (document.activeElement && document.activeElement.tagName) || '';

        // If inside Cloze typing input
        if (tag === 'INPUT' && document.activeElement.id === 'myCardClozeInput') {
          if (e.key === 'Enter') {
            e.preventDefault();
            const checkBtn = $('checkClozeAnswerBtn');
            if (checkBtn) checkBtn.click();
          }
          return;
        }

        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

        if (e.code === 'Space' || e.key === ' ') {
          e.preventDefault();
          const flipBtn = $('flipMyCardBtn');
          if (flipBtn) {
            flipBtn.click();
          } else {
            const revealBtn = $('revealClozeAnswerBtn');
            if (revealBtn && !revealBtn.classList.contains('hidden')) {
              revealBtn.click();
            }
          }
        } else if (e.key === '1') {
          const btn = document.querySelector('.mycard-memory-ratings .mem-btn[data-rating="1"]');
          if (btn) btn.click();
        } else if (e.key === '2') {
          const btn = document.querySelector('.mycard-memory-ratings .mem-btn[data-rating="2"]');
          if (btn) btn.click();
        } else if (e.key === '3') {
          const btn = document.querySelector('.mycard-memory-ratings .mem-btn[data-rating="3"]');
          if (btn) btn.click();
        } else if (e.key === '4') {
          const btn = document.querySelector('.mycard-memory-ratings .mem-btn[data-rating="4"]');
          if (btn) btn.click();
        } else if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 's') {
          const curCard = App.mycardsQueue[App.mycardsCurrentIdx];
          if (curCard) playTTS(curCard.en, 0.85);
        }
        return;
      }

      // 2. Anki Flashcard Shortcuts
      if (App.currentView !== 'vocabulary' || App.vocabMode !== 'flashcard') return;
      const tag = (document.activeElement && document.activeElement.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        const fc = $('flashcardElement');
        if (!fc) return;
        if (!App.flashcardFlipped) {
          App.flashcardFlipped = true;
          fc.classList.add('flipped');
          if (App.ankiAutoSpeak) {
            const curCard = App.ankiQueue[App.ankiCurrentIndex];
            if (curCard) playTTS(curCard.en, 0.85);
          }
        } else {
          // If already flipped, Space triggers "Good (3)"
          const goodBtn = document.querySelector('.rating-btn[data-rating="3"]');
          if (goodBtn) goodBtn.click();
        }
      } else if (e.key === '1') {
        const btn = document.querySelector('.rating-btn[data-rating="1"]');
        if (btn) btn.click();
      } else if (e.key === '2') {
        const btn = document.querySelector('.rating-btn[data-rating="2"]');
        if (btn) btn.click();
      } else if (e.key === '3') {
        const btn = document.querySelector('.rating-btn[data-rating="3"]');
        if (btn) btn.click();
      } else if (e.key === '4') {
        const btn = document.querySelector('.rating-btn[data-rating="4"]');
        if (btn) btn.click();
      } else if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 's') {
        const curCard = App.ankiQueue[App.ankiCurrentIndex];
        if (curCard) playTTS(curCard.en, 0.85);
      }
    });

    // Initial render
    renderDashboard();
    console.info('Miu Student English application initialized successfully.');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  // Export to window
  window.EnglishHubApp = App;
})();
