const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

// The replacement code for lines 1676 to 1886:
const reflexAndReadingCode = `  // ==========================================
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
    const activeBtn = document.querySelector(\`.reflex-tab-btn[data-tab="\${activeTab}"]\`);
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
      counterDisplay.textContent = \`Câu \${App.qrDrillIndex + 1} / \${list.length} (\${drill.category.toUpperCase()})\`;
    }

    container.innerHTML = \`
      <div class="drill-card" style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm);">
        <div class="drill-top" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
          <div style="display:flex;gap:6px;align-items:center;">
            <span class="badge \${drill.category}">\${drill.category.toUpperCase()}</span>
            <span class="chip blue">Tuần \${drill.week || 1}</span>
            <span class="chip">\${drill.focus_grammar || 'Giao tiếp'}</span>
          </div>
          <span class="timer-badge" id="drillTimerBadge" style="font-size:13px;font-weight:750;background:#fef3c7;color:#92400e;padding:4px 10px;border-radius:99px;">
            ⏱️ \${drill.time_limit_seconds}s
          </span>
        </div>

        <h3 class="drill-prompt" style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:6px;">"\${escapeHtml(drill.prompt_en)}"</h3>
        <p class="drill-vi" style="font-size:14px;color:var(--muted);margin-bottom:12px;">\${escapeHtml(drill.prompt_vi)}</p>

        <!-- Focus Keywords -->
        \${drill.key_words && drill.key_words.length > 0 ? \`
          <div style="margin-bottom:14px;font-size:12px;">
            <span style="font-weight:700;color:var(--navy);">Từ khóa gợi ý:</span>
            <div style="display:inline-flex;flex-wrap:wrap;gap:6px;margin-left:6px;">
              \${drill.key_words.map(kw => \`<span class="tag-pill" style="background:#f1f5f9;padding:2px 8px;border-radius:6px;font-weight:600;">\${escapeHtml(kw)}</span>\`).join('')}
            </div>
          </div>
        \` : ''}

        <div class="drill-tip" id="drillTipBox" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:10px 14px;font-size:13px;color:#166534;margin-bottom:16px;">
          💡 <b>Mẹo phản xạ:</b> \${escapeHtml(drill.tip)}
        </div>

        <!-- Action Controls -->
        <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:16px;">
          <button class="btn primary" id="startDrillTimerBtn">▶ Nghe & Bấm giờ \${drill.time_limit_seconds}s</button>
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
            \${drill.model_answers.map(ans => \`
              <li style="margin:6px 0;font-size:14px;">
                <b>"\${escapeHtml(ans)}"</b>
                <button class="mini-speak-btn" data-speak="\${escapeHtml(ans)}" title="Nghe câu này">🔊</button>
              </li>
            \`).join('')}
          </ul>
        </div>

        <!-- Navigation Bar -->
        <div class="drill-nav" style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);">
          <button class="btn btn-sm outline" id="prevDrillBtn" \${App.qrDrillIndex === 0 ? 'disabled' : ''}>← Câu trước</button>
          <span class="text-muted" style="font-size:13px;">\${App.qrDrillIndex + 1} / \${list.length}</span>
          <button class="btn btn-sm outline" id="nextDrillBtn" \${App.qrDrillIndex === list.length - 1 ? 'disabled' : ''}>Câu tiếp theo →</button>
        </div>
      </div>
    \`;

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
          if (badge) badge.textContent = \`⏱️ \${sec}s\`;
          if (sec <= 0) {
            clearInterval(App.drillTimerInterval);
            if (badge) badge.textContent = \`⏰ HẾT GIỜ!\`;
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
          fbBox.innerHTML = \`
            <div style="background:#dcfce7;border:1px solid #86efac;color:#166534;padding:10px 14px;border-radius:8px;">
              <b>✓ Phản xạ rất tốt!</b> Câu của bạn: "\${escapeHtml(userText)}"<br>
              \${matchedKeywords.length > 0 ? \`<small>Khớp từ khóa trọng tâm: \${matchedKeywords.join(', ')}</small>\` : ''}
            </div>
          \`;
        } else {
          fbBox.innerHTML = \`
            <div style="background:#fffbeb;border:1px solid #fde68a;color:#92400e;padding:10px 14px;border-radius:8px;">
              <b>Gợi ý cải thiện:</b> Câu của bạn: "\${escapeHtml(userText)}"<br>
              <small>Hãy đối chiếu với các mẫu câu chuẩn bên dưới và bấm nút 🔊 để nghe phát âm lại.</small>
            </div>
          \`;
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

    container.innerHTML = \`
      <div class="drill-card" style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px;box-shadow:var(--shadow-sm);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div style="display:flex;gap:6px;align-items:center;">
            <span class="badge \${drill.category}">\${drill.category.toUpperCase()}</span>
            <span class="chip gold">Tuần \${drill.week || 1}</span>
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
          <div style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:4px;">"\${escapeHtml(drill.prompt_en)}"</div>
          <div style="font-size:14px;color:var(--muted);">\${escapeHtml(drill.prompt_vi)}</div>
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
            \${drill.model_answers.map(ans => \`
              <li style="margin:6px 0;font-size:14px;">
                <b>"\${escapeHtml(ans)}"</b>
                <button class="mini-speak-btn" data-speak="\${escapeHtml(ans)}">🔊</button>
              </li>
            \`).join('')}
          </ul>
        </div>

        <!-- Nav -->
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);">
          <button class="btn btn-sm outline" id="lrPrevBtn" \${App.lrIndex === 0 ? 'disabled' : ''}>← Câu trước</button>
          <span class="text-muted" style="font-size:13px;">\${App.lrIndex + 1} / \${list.length}</span>
          <button class="btn btn-sm outline" id="lrNextBtn" \${App.lrIndex === list.length - 1 ? 'disabled' : ''}>Câu tiếp →</button>
        </div>
      </div>
    \`;

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

        fbBox.innerHTML = \`
          <div style="background:#dcfce7;border:1px solid #86efac;color:#166534;padding:10px 14px;border-radius:8px;">
            <b>✓ Đã ghi nhận phản xạ!</b> Hãy so sánh câu của bạn với transcript gốc và mẫu câu chuẩn.
          </div>
        \`;
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
      return \`
        <div class="scenario-card" style="background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-sm);">
          <div>
            <div class="sc-head" style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;gap:8px;">
              <span class="badge \${sc.category ? 'workplace' : 'primary'}" style="font-size:11px;">\${escapeHtml(sc.category || 'GIAO TIẾP')}</span>
              <span class="chip gold">Tuần \${sc.week || 1}</span>
            </div>
            <h4 style="font-size:16px;font-weight:750;color:var(--navy);margin-bottom:6px;">\${escapeHtml(sc.title)}</h4>
            <p class="sc-desc" style="font-size:13px;color:var(--muted);line-height:1.4;margin-bottom:12px;">\${escapeHtml(sc.description)}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);margin-top:auto;">
            <small style="color:var(--muted);font-weight:600;">\${isDone ? '<span style="color:#10b981;">✓ Đã hoàn thành</span>' : '4–8 lượt thoại'}</small>
            <button class="btn primary btn-sm start-scenario-btn" data-scid="\${sc.id}">
              ▶ \${isDone ? 'Luyện lại' : 'Bắt đầu tình huống'}
            </button>
          </div>
        </div>
      \`;
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

    let html = \`
      <div class="scenario-dialogue-node">
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:#1e40af;">
          <b>Bối cảnh tình huống:</b> \${escapeHtml(sc.context_vi || sc.description)}
        </div>
        <div class="speaker-label" style="font-weight:800;color:var(--navy);margin-bottom:6px;">🗣️ \${escapeHtml(node.speaker)}</div>
        <div class="speech-bubble" style="background:#f8fafc;border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:16px;">
          <div class="bubble-en" style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px;">"\${escapeHtml(node.text)}"</div>
          <div class="bubble-vi" style="font-size:13px;color:var(--muted);margin-bottom:8px;">\${escapeHtml(node.text_vi)}</div>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-xs light" data-speak="\${escapeHtml(node.text)}">🔊 Nghe đối thoại</button>
            <button class="btn btn-xs light" data-speak-slow="\${escapeHtml(node.text)}">🐢 Nghe chậm</button>
          </div>
        </div>
    \`;

    if (node.is_terminal) {
      // Record completed scenario
      if (App.srs && typeof App.srs.recordScenarioAttempt === 'function') {
        App.srs.recordScenarioAttempt(sc.id, true, 4);
      }

      html += \`
        <div class="scenario-terminal-success" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:18px;margin-top:16px;">
          <h4 style="color:#166534;margin-bottom:8px;">🎉 Tình huống kết thúc an toàn & thành công!</h4>
          <p style="font-size:13px;color:#15803d;margin-bottom:12px;">\${escapeHtml(node.result || 'Bạn đã thể hiện phản xạ kỹ thuật và ý thức giao tiếp chuẩn mực.')}</p>

          \${node.common_mistakes ? \`
            <div style="background:#fff;border-left:3px solid #f59e0b;padding:8px 12px;margin-bottom:10px;font-size:13px;">
              <b>Lỗi phổ biến cần tránh:</b> \${escapeHtml(node.common_mistakes)}
            </div>
          \` : ''}

          \${node.natural_phrasing ? \`
            <div style="background:#fff;border-left:3px solid #10b981;padding:8px 12px;margin-bottom:14px;font-size:13px;">
              <b>Cách diễn đạt tự nhiên hơn:</b> \${escapeHtml(node.natural_phrasing)}
            </div>
          \` : ''}

          <button class="btn primary" id="closeScenarioBtn">Hoàn tất & Lưu tiến độ tình huống</button>
        </div>
      \`;
    } else if (node.options && node.options.length > 0) {
      html += \`
        <div class="scenario-choices">
          <p style="font-weight:750;color:var(--navy);margin-bottom:10px;">Lựa chọn phản ứng của bạn:</p>
          \${node.options.map((opt, oIdx) => \`
            <button class="scenario-opt-btn \${opt.is_safe ? '' : 'opt-unsafe'}" data-optindex="\${oIdx}" style="display:block;width:100%;text-align:left;padding:12px 16px;margin:8px 0;border-radius:10px;border:1px solid var(--line);background:#fff;cursor:pointer;">
              <div class="opt-text" style="font-weight:700;font-size:14px;">\${escapeHtml(opt.text)}</div>
              \${opt.feedback ? \`<small class="opt-hint text-muted" style="display:block;margin-top:4px;">💡 \${escapeHtml(opt.feedback)}</small>\` : ''}
            </button>
          \`).join('')}
        </div>
      \`;
    }

    html += \`</div>\`;
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
    container.innerHTML = list.map(sh => \`
      <div class="shadowing-card" style="background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px;margin-bottom:14px;box-shadow:var(--shadow-sm);">
        <div class="sh-head" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span class="badge \${sh.category}">\${sh.category.toUpperCase()}</span>
          <span class="chip gold">Tuần \${sh.week || 1}</span>
        </div>
        <h4 style="font-size:16px;font-weight:800;color:var(--navy);margin-bottom:6px;">\${escapeHtml(sh.title)}</h4>
        <div class="sh-sentence" style="font-size:16px;font-weight:750;color:#0284c7;margin-bottom:4px;">"\${escapeHtml(sh.sentence_en)}"</div>
        <div class="sh-ipa" style="font-family:ui-monospace, monospace;color:var(--muted);font-size:13px;margin-bottom:4px;">\${escapeHtml(sh.ipa)}</div>
        <div class="sh-vi" style="font-size:13px;color:var(--ink);margin-bottom:8px;">\${escapeHtml(sh.sentence_vi)}</div>
        <div class="sh-sounds text-muted" style="font-size:12px;margin-bottom:12px;">Âm trọng tâm: \${sh.key_sounds.join(' · ')}</div>
        <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn light btn-sm shadow-play-btn" data-text="\${escapeHtml(sh.sentence_en)}" data-rate="0.8">🐢 0.8x (Chậm)</button>
          <button class="btn primary btn-sm shadow-play-btn" data-text="\${escapeHtml(sh.sentence_en)}" data-rate="1.0">▶ 1.0x (Chuẩn)</button>
          <button class="btn outline btn-sm shadow-play-btn" data-text="\${escapeHtml(sh.sentence_en)}" data-rate="1.2">⚡ 1.2x (Nhanh)</button>
        </div>
      </div>
    \`).join('');

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

    container.innerHTML = \`
      <div style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px;box-shadow:var(--shadow-sm);">
        <h3 style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:16px;">📊 Báo Cáo Phản Xạ & Lịch Sử Luyện Tập</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:24px;">
          <div style="background:#eff6ff;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#1e40af;">\${stats.total_attempted}</div>
            <small style="color:#1e40af;font-weight:600;">Số câu đã phản xạ</small>
          </div>
          <div style="background:#f0fdf4;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#166534;">\${stats.correct_count}</div>
            <small style="color:#166534;font-weight:600;">Phản xạ đạt chuẩn</small>
          </div>
          <div style="background:#fef3c7;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#92400e;">\${stats.completion_rate}%</div>
            <small style="color:#92400e;font-weight:600;">Tỷ lệ phản xạ tốt</small>
          </div>
          <div style="background:#faf5ff;padding:16px;border-radius:12px;text-align:center;">
            <div style="font-size:24px;font-weight:800;color:#6b21a8;">\${stats.avg_response_time}s</div>
            <small style="color:#6b21a8;font-weight:600;">Thời gian TB</small>
          </div>
        </div>

        <h4 style="font-size:15px;font-weight:750;color:var(--navy);margin-bottom:10px;">Lịch sử phản xạ gần nhất:</h4>
        \${stats.history.length === 0 ? \`
          <p class="text-muted" style="font-size:13px;">Chưa có lịch sử làm bài. Hãy chọn tab "Phản xạ nhanh" hoặc "Nghe & Phản xạ" để bắt đầu luyện tập!</p>
        \` : \`
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
                \${stats.history.slice(0, 10).map(h => \`
                  <tr style="border-bottom:1px solid var(--line);">
                    <td style="padding:8px;">\${new Date(h.date).toLocaleDateString('vi-VN')}</td>
                    <td style="padding:8px;"><b>\${escapeHtml(h.drill_id)}</b></td>
                    <td style="padding:8px;">\${h.is_correct ? '<span style="color:#10b981;font-weight:700;">✓ Đạt</span>' : '<span style="color:#ef4444;font-weight:700;">✗ Cần ôn</span>'}</td>
                    <td style="padding:8px;">\${h.response_time}s</td>
                  </tr>
                \`).join('')}
              </tbody>
            </table>
          </div>
        \`}
      </div>
    \`;
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
      headerChip.textContent = \`Đã hoàn thành: \${stats.completed_count} / \${passages.length} bài (\${stats.pct}%)\`;
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
      return \`
        <div class="reading-card" style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-sm);">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <span class="badge" style="background:#e0f2fe;color:#0369a1;font-weight:800;">\${p.level}</span>
              <span class="chip gold">Tuần \${p.week}</span>
              <span class="chip">\${p.word_count} từ</span>
            </div>
            <h3 style="font-size:17px;font-weight:800;color:var(--navy);margin-bottom:4px;">\${escapeHtml(p.title_en)}</h3>
            <h4 style="font-size:13px;font-weight:600;color:#047857;margin-bottom:8px;">\${escapeHtml(p.title_vi)}</h4>
            <p style="font-size:12px;color:var(--muted);line-height:1.4;margin-bottom:14px;">\${escapeHtml(p.objective)}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--line);margin-top:auto;">
            <small style="font-weight:700;\${isDone ? 'color:#10b981;' : 'color:var(--muted);'}">
              \${isDone ? '✓ Đã hoàn thành' : \`⏱️ \${p.estimated_minutes} phút\`}
            </small>
            <button class="btn primary btn-sm open-reading-btn" data-pid="\${p.id}">
              \${isDone ? 'Đọc lại →' : 'Vào luyện đọc →'}
            </button>
          </div>
        </div>
      \`;
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
      return \`<span class="reading-sentence" data-sent-idx="\${idx}" style="cursor:pointer;padding:2px 4px;border-radius:4px;transition:background .15s ease;" title="Bấm để nghe đọc câu này">\${escapeHtml(s)} </span>\`;
    }).join('');

    // Highlight vocab words into clickable chips
    let renderedText = sentencesHtml;

    readerContainer.innerHTML = \`
      <div class="reading-reader-view" style="background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:var(--shadow-sm);">
        <button class="btn btn-sm outline" id="backToReadingListBtn" style="margin-bottom:16px;">← Quay lại danh sách 15 bài đọc</button>
        
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
          <div>
            <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
              <span class="badge" style="background:#e0f2fe;color:#0369a1;font-weight:800;">\${p.level}</span>
              <span class="chip gold">Tuần \${p.week}</span>
              <span class="chip">\${p.word_count} từ</span>
              <span class="chip blue">Chế độ: \${mode === 'supported' ? '📗 Đọc có hỗ trợ' : (mode === 'independent' ? '📘 Đọc độc lập' : '⏱️ Đọc bấm giờ')}</span>
            </div>
            <h1 style="font-size:24px;font-weight:800;color:var(--navy);margin:4px 0;">\${escapeHtml(p.title_en)}</h1>
            <h2 style="font-size:16px;font-weight:600;color:#047857;margin:0;">\${escapeHtml(p.title_vi)}</h2>
          </div>

          \${mode === 'timed' ? \`
            <div id="readingTimerPill" style="font-size:16px;font-weight:800;background:#fef3c7;color:#92400e;padding:6px 16px;border-radius:99px;">
              ⏱️ 05:00
            </div>
          \` : ''}
        </div>

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 16px;font-size:13px;color:#166534;margin-bottom:18px;">
          🎯 <b>Mục tiêu đọc hiểu:</b> \${escapeHtml(p.objective)}
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
            \${(p.target_vocabulary || []).map(v => \`
              <button class="btn btn-xs outline vocab-chip-interactive" data-word="\${escapeHtml(v.word)}" data-ipa="\${escapeHtml(v.ipa || '')}" data-vi="\${escapeHtml(v.vi)}" data-context="\${escapeHtml(v.context || '')}">
                <b>\${escapeHtml(v.word)}</b> <small style="color:var(--muted);">(\${escapeHtml(v.vi)})</small>
              </button>
            \`).join('')}
          </div>
        </div>

        <!-- English Passage Text -->
        <div class="reading-passage-text" style="font-size:16px;line-height:1.8;color:#1e293b;padding:20px;background:#fbfcfe;border:1px solid #e2e8f0;border-radius:14px;margin-bottom:18px;">
          \${renderedText}
        </div>

        <!-- Vietnamese Full Translation (Collapsible) -->
        <div id="readingTransBox" class="\${mode === 'independent' ? 'hidden' : 'hidden'}" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:16px;margin-bottom:24px;">
          <h4 style="color:#1e40af;margin-bottom:8px;font-size:14px;">BẢN DỊCH TIẾNG VIỆT TOÀN BÀI:</h4>
          <p style="font-size:14px;line-height:1.7;color:#1e3a8a;margin:0;white-space:pre-wrap;">\${escapeHtml(p.passage_vi)}</p>
        </div>

        <!-- Reading Comprehension Quiz (5-8 Questions) -->
        <div class="reading-quiz-section" style="margin-top:28px;padding-top:20px;border-top:2px solid var(--line);">
          <h3 style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:6px;">📝 Câu hỏi kiểm tra đọc hiểu (\${p.questions.length} câu)</h3>
          <p style="font-size:13px;color:var(--muted);margin-bottom:16px;">Đọc kỹ đoạn văn và chọn đáp án chính xác nhất:</p>

          <div id="readingQuizContainer">
            \${p.questions.map((q, qIdx) => \`
              <div class="quiz-item-card" data-qidx="\${qIdx}" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:14px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                  <b style="font-size:14px;color:var(--navy);">Câu \${qIdx + 1}: \${escapeHtml(q.question)}</b>
                  <span class="badge" style="font-size:10px;background:#f1f5f9;color:var(--navy);">\${escapeHtml(q.type.toUpperCase())}</span>
                </div>
                <div class="quiz-options-group" style="display:flex;flex-direction:column;gap:6px;">
                  \${q.options.map((opt, oIdx) => \`
                    <label class="quiz-option-label" style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fff;border:1px solid var(--line);border-radius:8px;cursor:pointer;">
                      <input type="radio" name="readQuiz_\${qIdx}" value="\${oIdx}">
                      <span style="font-size:13px;">\${escapeHtml(opt)}</span>
                    </label>
                  \`).join('')}
                </div>
                <div id="readQuizFeedback_\${qIdx}" class="q-feedback" style="margin-top:8px;font-size:13px;"></div>
              </div>
            \`).join('')}
          </div>

          <button class="btn primary btn-lg" id="submitReadingQuizBtn" style="margin-top:14px;">Nộp bài kiểm tra đọc hiểu</button>
          <div id="readingQuizSummaryBox" style="margin-top:16px;"></div>
        </div>
      </div>
    \`;

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
        if (pill) pill.textContent = \`⏱️ \${minStr}:\${secStr}\`;
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
          const selected = document.querySelector(\`input[name="readQuiz_\${idx}"]:checked\`);
          const fb = $(\`readQuizFeedback_\${idx}\`);
          if (selected) {
            answeredCount++;
            const choice = parseInt(selected.value, 10);
            userAnswers.push(choice);
            const isCorrect = choice === q.answer;
            if (isCorrect) correctCount++;
            if (fb) {
              fb.innerHTML = isCorrect
                ? \`<span class="text-success" style="font-weight:700;">✓ Chính xác! \${escapeHtml(q.explanation)}</span>\`
                : \`<span class="text-danger" style="font-weight:700;">✗ Chưa đúng. Đáp án: "\${escapeHtml(q.options[q.answer])}". \${escapeHtml(q.explanation)}</span>\`;
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
          summaryBox.innerHTML = \`
            <div style="background:\${isPass ? '#dcfce7' : '#fff1f2'};border:1px solid \${isPass ? '#86efac' : '#fecdd3'};border-radius:12px;padding:18px;">
              <h3 style="color:\${isPass ? '#166534' : '#9f1239'};margin-bottom:6px;">
                \${isPass ? '🎉 Chúc mừng! Bạn đã hoàn thành bài đọc hiểu.' : 'Cần ôn lại thêm.'}
              </h3>
              <p style="font-size:14px;color:\${isPass ? '#15803d' : '#be123c'};margin-bottom:10px;">
                Điểm số: <b>\${correctCount} / \${total} câu đúng (\${pct}%)</b>. Tiêu chí đạt: tối thiểu 70%.
              </p>
              \${isPass ? \`
                <div style="display:flex;gap:10px;margin-top:12px;">
                  <button class="btn primary btn-sm" id="readingNextBtn">Bài đọc tiếp theo →</button>
                  <button class="btn outline btn-sm" id="readingCurriculumBtn">Quay lại Lộ trình tuần \${p.week}</button>
                </div>
              \` : ''}
            </div>
          \`;

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
            return \`<option value="\${escapeHtml(v.name)}" \${isSel ? 'selected' : ''}>\${isRec ? '⭐ ' : ''}\${escapeHtml(v.name)} (\${v.lang})</option>\`;
          }).join('');
        }
      }

      if (viSelect) {
        if (viVoices.length === 0) {
          viSelect.innerHTML = '<option value="">(Giọng tiếng Việt mặc định của thiết bị)</option>';
        } else {
          viSelect.innerHTML = viVoices.map(v => {
            const isSel = window.speechEngine.selectedViVoice && window.speechEngine.selectedViVoice.name === v.name;
            return \`<option value="\${escapeHtml(v.name)}" \${isSel ? 'selected' : ''}>\${escapeHtml(v.name)} (\${v.lang})</option>\`;
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
          window.speechEngine.speak('Hello! Welcome to English Hub 52 Weeks. Good luck with your study.', { rate, lang: 'en-US' });
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
        if (contextEl) contextEl.innerHTML = context ? \`<b>Ngữ cảnh trong bài:</b> "\${escapeHtml(context)}"\` : '';

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
              showToast(\`Đã đưa từ "\${word}" vào hàng đợi Ôn tập thông minh.\`);
            }
          };
        }

        modal.classList.remove('hidden');
      }
    });
  }
`;

// Replace lines 1676 to 1886
const startMarker = "  // ==========================================\n  // 6. REFLEX & CONVERSATION ARENA\n  // ==========================================";
const endMarker = "  // ==========================================\n  // 7. BACKUP, EXPORT & SETTINGS\n  // ==========================================";

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found! startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

content = content.slice(0, startIdx) + reflexAndReadingCode + '\n  ' + content.slice(endIdx);

// Also add initVoiceSettings() and initVocabDefModal() into initApp()
const initAppMarker = "    // Initial render\n    renderDashboard();";
if (!content.includes('initVoiceSettings();')) {
  content = content.replace(initAppMarker, "    // Initialize Voice and Vocab Modals\n    initVoiceSettings();\n    initVocabDefModal();\n\n    // Initial render\n    renderDashboard();");
}

fs.writeFileSync(appJsPath, content, 'utf8');
console.log('Successfully patched js/app.js with upgraded Reflex, Reading, and Voice controllers!');
