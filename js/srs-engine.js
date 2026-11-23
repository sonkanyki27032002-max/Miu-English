// English Hub V1 - Spaced Repetition System (SRS) & Progress Engine
// Version: 2.0.0
// Transparent SM-2 / Leitner Algorithm with local persistence, Quick Quizzes, and JSON Backup

(function(root) {
  const STORAGE_KEY = 'ENGLISH_HUB_PROGRESS_V2';
  const LEGACY_STORAGE_KEY = 'ENGLISH_HUB_V1_PROGRESS';
  const SCHEMA_VERSION = '2.0';

  class SRSEngine {
    constructor() {
      this.state = this.loadState();
    }

    // Default state structure
    getDefaultState() {
      return {
        schema_version: SCHEMA_VERSION,
        created_at: new Date().toISOString(),
        last_updated: new Date().toISOString(),
        user_profile: {
          name: "Học viên Miu Student English",
          target_minutes_daily: 45,
          current_day: 1,
          streak_days: 1,
          last_active_date: new Date().toISOString().split('T')[0]
        },
        lesson_progress: {
          // day: { completed: true, score: 90, completed_at: '...' }
        },
        vocab_srs: {
          // vocab_id: { state: 'learning', interval: 1, ease_factor: 2.5, reps: 1, lapses: 0, due_date: '...', is_difficult: false }
        },
        quiz_history: [],
        reflex_history: [],
        scenario_history: [],
        reading_progress: {
          // passageId: { completed: true, score: 100, completed_at: '...' }
        },
        skill_stats: {
          listening_minutes: 0,
          speaking_minutes: 0,
          reading_minutes: 0,
          writing_minutes: 0
        },
        custom_vocab: [],
        my_decks: [
          {
            id: 'deck-daily',
            name: 'Tiếng Anh hằng ngày',
            description: 'Các mẫu câu và cụm từ giao tiếp hằng ngày thông dụng',
            created_at: new Date().toISOString()
          }
        ],
        my_cards: [
          {
            id: 'card-daily-1',
            deck_id: 'deck-daily',
            en: 'Good morning! How are you doing today?',
            vi: 'Chào buổi sáng! Hôm nay bạn thế nào?',
            ipa: '/ɡʊd ˈmɔːnɪŋ haʊ ɑː juː ˈduːɪŋ/',
            example: 'Good morning! How are you doing today? - I am doing very well, thank you.',
            example_vi: 'Chào buổi sáng! Hôm nay bạn thế nào? - Tôi rất khỏe, cảm ơn bạn.',
            notes: 'Mẫu câu chào hỏi tự nhiên mỗi ngày',
            interval: 0,
            reps: 0,
            due_date: new Date().toISOString(),
            level: 'new', // 'new', 'again', 'day1', 'day3', 'day6'
            created_at: new Date().toISOString()
          },
          {
            id: 'card-daily-2',
            deck_id: 'deck-daily',
            en: 'Could you please help me with this?',
            vi: 'Bạn có thể giúp tôi việc này được không?',
            ipa: '/kʊd juː pliːz help miː wɪð ðɪs/',
            example: 'Could you please help me with this report?',
            example_vi: 'Bạn có thể giúp tôi làm báo cáo này được không?',
            notes: 'Cách nhờ giúp đỡ lịch sự',
            interval: 0,
            reps: 0,
            due_date: new Date().toISOString(),
            level: 'new',
            created_at: new Date().toISOString()
          },
          {
            id: 'card-daily-3',
            deck_id: 'deck-daily',
            en: 'I understand what you mean.',
            vi: 'Tôi hiểu ý bạn muốn nói rồi.',
            ipa: '/aɪ ˌʌndəˈstænd wɒt juː miːn/',
            example: 'Yes, I understand what you mean now.',
            example_vi: 'Vâng, bây giờ tôi hiểu ý bạn rồi.',
            notes: 'Xác nhận thông tin trong cuộc trò chuyện',
            interval: 0,
            reps: 0,
            due_date: new Date().toISOString(),
            level: 'new',
            created_at: new Date().toISOString()
          },
          {
            id: 'card-daily-4',
            deck_id: 'deck-daily',
            en: 'Have a wonderful day!',
            vi: 'Chúc bạn một ngày tuyệt vời nhé!',
            ipa: '/hæv ə ˈwʌndəfʊl deɪ/',
            example: 'Thank you for your help. Have a wonderful day!',
            example_vi: 'Cảm ơn sự giúp đỡ của bạn. Chúc bạn một ngày tuyệt vời!',
            notes: 'Lời chúc kết thúc cuộc trò chuyện',
            interval: 0,
            reps: 0,
            due_date: new Date().toISOString(),
            level: 'new',
            created_at: new Date().toISOString()
          }
        ],
        google_drive_config: {
          client_id: '',
          last_synced: null,
          file_id: null
        }
      };
    }

    // Load state with version check and legacy migration
    loadState() {
      if (typeof localStorage === 'undefined') {
        return this.getDefaultState();
      }
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.schema_version === SCHEMA_VERSION) {
            if (!Array.isArray(parsed.custom_vocab)) {
              parsed.custom_vocab = [];
            }
            if (!Array.isArray(parsed.my_decks) || parsed.my_decks.length === 0) {
              parsed.my_decks = [
                {
                  id: 'deck-daily',
                  name: 'Tiếng Anh hằng ngày',
                  description: 'Các mẫu câu và cụm từ giao tiếp hằng ngày thông dụng',
                  created_at: new Date().toISOString()
                }
              ];
            }
            if (!Array.isArray(parsed.my_cards)) {
              parsed.my_cards = [];
            }
            if (!parsed.google_drive_config) {
              parsed.google_drive_config = { client_id: '', last_synced: null, file_id: null };
            }
            this.checkAndUpdateStreak(parsed);
            return parsed;
          }
        }
      } catch (e) {
        console.warn('Failed to parse SRS state from localStorage:', e);
      }

      // Check legacy migration
      const legacyState = this.tryMigrateLegacy();
      if (legacyState) {
        this.saveState(legacyState);
        return legacyState;
      }

      const defaultState = this.getDefaultState();
      this.saveState(defaultState);
      return defaultState;
    }

    // Attempt migration from old v1 storage if present
    tryMigrateLegacy() {
      if (typeof localStorage === 'undefined') return null;
      try {
        const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY) || localStorage.getItem('english_hub_progress');
        if (legacyRaw) {
          const legacy = JSON.parse(legacyRaw);
          const newState = this.getDefaultState();
          
          if (legacy.completedDays && Array.isArray(legacy.completedDays)) {
            legacy.completedDays.forEach(d => {
              newState.lesson_progress[d] = {
                completed: true,
                score: 100,
                completed_at: new Date().toISOString()
              };
            });
            if (legacy.completedDays.length > 0) {
              newState.user_profile.current_day = Math.max(...legacy.completedDays) + 1;
            }
          }
          console.info('Migrated legacy progress to V2 schema successfully.');
          return newState;
        }
      } catch (err) {
        console.warn('Legacy migration skipped:', err);
      }
      return null;
    }

    // Save state to localStorage
    saveState(customState) {
      const stateToSave = customState || this.state;
      stateToSave.last_updated = new Date().toISOString();
      if (typeof localStorage === 'undefined') {
        return true;
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
        return true;
      } catch (e) {
        console.error('LocalStorage write failed:', e);
        return false;
      }
    }

    // Streak tracker based on date
    checkAndUpdateStreak(state) {
      const today = new Date().toISOString().split('T')[0];
      const last = state.user_profile.last_active_date;
      
      if (last === today) {
        // Same day, streak unchanged
        return;
      }

      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (last === yesterday) {
        // Consecutive day
        state.user_profile.streak_days = (state.user_profile.streak_days || 0) + 1;
      } else {
        // Missed one or more days, reset streak to 1
        state.user_profile.streak_days = 1;
      }
      state.user_profile.last_active_date = today;
    }

    // Record lesson completion
    completeLesson(dayNumber, score = 100, timeSpentMinutes = 45) {
      const day = parseInt(dayNumber, 10);
      if (!this.state.lesson_progress[day]) {
        this.state.lesson_progress[day] = {};
      }
      this.state.lesson_progress[day] = {
        completed: true,
        score: Math.max(score, this.state.lesson_progress[day].score || 0),
        completed_at: new Date().toISOString(),
        time_spent_minutes: timeSpentMinutes
      };

      if (day >= this.state.user_profile.current_day && day < 365) {
        this.state.user_profile.current_day = day + 1;
      }

      this.saveState();
      return this.state.lesson_progress[day];
    }

    // Is lesson completed?
    isLessonCompleted(dayNumber) {
      const d = parseInt(dayNumber, 10);
      return !!(this.state.lesson_progress[d] && this.state.lesson_progress[d].completed);
    }

    // SRS Spaced Repetition Evaluation
    // rating:
    // 1 = Again (Quên/Sai - ôn lại ngay trong 1 ngày)
    // 2 = Hard (Đúng nhưng còn ngập ngừng - ôn trong 2 ngày)
    // 3 = Good (Nhớ tốt - giãn cách bình thường)
    // 4 = Easy (Quá dễ - giãn cách dài hơn)
    reviewWord(vocabId, rating = 3) {
      if (!this.state.vocab_srs[vocabId]) {
        this.state.vocab_srs[vocabId] = {
          state: 'learning',
          interval: 0,
          ease_factor: 2.5,
          reps: 0,
          lapses: 0,
          due_date: new Date().toISOString(),
          is_difficult: false
        };
      }

      const item = this.state.vocab_srs[vocabId];
      const now = new Date();

      switch (rating) {
        case 1: // Again
          item.interval = 1;
          item.reps = 0;
          item.lapses += 1;
          item.state = 'learning';
          item.ease_factor = Math.max(1.3, item.ease_factor - 0.2);
          break;

        case 2: // Hard
          item.interval = Math.max(1, Math.round(item.interval * 1.2)) || 2;
          item.ease_factor = Math.max(1.3, item.ease_factor - 0.15);
          item.state = 'learning';
          break;

        case 3: // Good
          if (item.reps === 0) {
            item.interval = 1;
          } else if (item.reps === 1) {
            item.interval = 3;
          } else {
            item.interval = Math.round(item.interval * item.ease_factor);
          }
          item.reps += 1;
          item.state = item.reps >= 4 ? 'mastered' : 'review';
          break;

        case 4: // Easy
          if (item.reps === 0) {
            item.interval = 3;
          } else if (item.reps === 1) {
            item.interval = 6;
          } else {
            item.interval = Math.round(item.interval * item.ease_factor * 1.3);
          }
          item.reps += 1;
          item.ease_factor += 0.15;
          item.state = item.reps >= 3 ? 'mastered' : 'review';
          break;
      }

      // Calculate next due date
      const nextDue = new Date(now.getTime() + item.interval * 24 * 60 * 60 * 1000);
      item.due_date = nextDue.toISOString();
      item.last_reviewed_at = now.toISOString();

      this.saveState();
      return item;
    }

    // Calculate preview intervals for Anki-style rating buttons (1: Again, 2: Hard, 3: Good, 4: Easy)
    getEstimatedIntervals(vocabId) {
      const item = this.state.vocab_srs[vocabId] || {
        interval: 0,
        ease_factor: 2.5,
        reps: 0
      };
      
      const formatDays = (d) => {
        if (d < 1) return '< 10p';
        if (d === 1) return '1 ngày';
        return `${d} ngày`;
      };

      const againText = '< 10p';

      const hardVal = Math.max(1, Math.round((item.interval || 1) * 1.2)) || 2;
      const hardText = formatDays(hardVal);

      let goodVal = 1;
      if (item.reps === 0) goodVal = 1;
      else if (item.reps === 1) goodVal = 3;
      else goodVal = Math.max(1, Math.round((item.interval || 1) * (item.ease_factor || 2.5)));
      const goodText = formatDays(goodVal);

      let easyVal = 3;
      if (item.reps === 0) easyVal = 3;
      else if (item.reps === 1) easyVal = 6;
      else easyVal = Math.max(2, Math.round((item.interval || 1) * (item.ease_factor || 2.5) * 1.3));
      const easyText = formatDays(easyVal);

      return {
        1: { text: againText, days: 1 },
        2: { text: hardText, days: hardVal },
        3: { text: goodText, days: goodVal },
        4: { text: easyText, days: easyVal }
      };
    }

    // Custom Vocabulary Management
    getCustomVocab() {
      if (!Array.isArray(this.state.custom_vocab)) {
        this.state.custom_vocab = [];
      }
      return this.state.custom_vocab;
    }

    addCustomWord(wordData = {}) {
      const en = String(wordData.en || '').trim();
      const vi = String(wordData.vi || '').trim();
      if (!en || !vi) {
        throw new Error('Từ vựng tiếng Anh và nghĩa tiếng Việt không được để trống.');
      }
      if (!Array.isArray(this.state.custom_vocab)) {
        this.state.custom_vocab = [];
      }

      const id = 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
      const newWord = {
        id,
        en,
        vi,
        pos: wordData.pos ? String(wordData.pos).trim() : 'phrase',
        ipa: wordData.ipa ? String(wordData.ipa).trim() : '',
        example: wordData.example ? String(wordData.example).trim() : '',
        example_vi: wordData.example_vi ? String(wordData.example_vi).trim() : '',
        collocation: wordData.collocation ? String(wordData.collocation).trim() : '',
        topic: wordData.topic ? String(wordData.topic).trim() : 'Từ tự thêm',
        category: wordData.category || 'general',
        level: wordData.level || 'A1',
        first_lesson: 'Custom',
        notes: wordData.notes ? String(wordData.notes).trim() : '',
        is_custom: true,
        created_at: new Date().toISOString()
      };

      this.state.custom_vocab.unshift(newWord);

      // Initialize SRS state
      if (!this.state.vocab_srs[id]) {
        this.state.vocab_srs[id] = {
          state: 'new',
          interval: 0,
          ease_factor: 2.5,
          reps: 0,
          lapses: 0,
          due_date: new Date().toISOString(),
          is_difficult: false
        };
      }

      this.saveState();
      return newWord;
    }

    updateCustomWord(id, updatedFields = {}) {
      if (!Array.isArray(this.state.custom_vocab)) return null;
      const idx = this.state.custom_vocab.findIndex(w => w.id === id);
      if (idx === -1) return null;

      const current = this.state.custom_vocab[idx];
      this.state.custom_vocab[idx] = {
        ...current,
        ...updatedFields,
        id: current.id,
        is_custom: true,
        updated_at: new Date().toISOString()
      };

      this.saveState();
      return this.state.custom_vocab[idx];
    }

    deleteCustomWord(id) {
      if (!Array.isArray(this.state.custom_vocab)) return false;
      const initialLen = this.state.custom_vocab.length;
      this.state.custom_vocab = this.state.custom_vocab.filter(w => w.id !== id);
      if (this.state.vocab_srs && this.state.vocab_srs[id]) {
        delete this.state.vocab_srs[id];
      }
      this.saveState();
      return this.state.custom_vocab.length < initialLen;
    }

    // ==========================================
    // MY CARDS & CUSTOM DECKS MANAGEMENT
    // ==========================================
    getMyDecks() {
      if (!Array.isArray(this.state.my_decks)) {
        this.state.my_decks = [];
      }
      return this.state.my_decks;
    }

    addDeck(name, description = '') {
      const trimmed = String(name || '').trim();
      if (!trimmed) throw new Error('Tên chủ đề / trường không được để trống.');
      if (!Array.isArray(this.state.my_decks)) this.state.my_decks = [];

      const id = 'deck-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
      const newDeck = {
        id,
        name: trimmed,
        description: String(description || '').trim(),
        created_at: new Date().toISOString()
      };
      this.state.my_decks.push(newDeck);
      this.saveState();
      return newDeck;
    }

    updateDeck(deckId, updatedFields = {}) {
      if (!Array.isArray(this.state.my_decks)) return null;
      const idx = this.state.my_decks.findIndex(d => d.id === deckId);
      if (idx === -1) return null;
      this.state.my_decks[idx] = {
        ...this.state.my_decks[idx],
        ...updatedFields,
        id: deckId,
        updated_at: new Date().toISOString()
      };
      this.saveState();
      return this.state.my_decks[idx];
    }

    deleteDeck(deckId) {
      if (!Array.isArray(this.state.my_decks)) return false;
      this.state.my_decks = this.state.my_decks.filter(d => d.id !== deckId);
      if (Array.isArray(this.state.my_cards)) {
        this.state.my_cards = this.state.my_cards.filter(c => c.deck_id !== deckId);
      }
      this.saveState();
      return true;
    }

    getMyCards(deckId = null) {
      if (!Array.isArray(this.state.my_cards)) {
        this.state.my_cards = [];
      }
      if (deckId && deckId !== 'all') {
        return this.state.my_cards.filter(c => c.deck_id === deckId);
      }
      return this.state.my_cards;
    }

    addMyCard(deckIdOrData, maybeData = {}) {
      let cardData = {};
      let targetDeckId = null;

      if (typeof deckIdOrData === 'string') {
        targetDeckId = deckIdOrData;
        cardData = maybeData || {};
      } else if (typeof deckIdOrData === 'object' && deckIdOrData !== null) {
        cardData = deckIdOrData;
        targetDeckId = cardData.deck_id || null;
      }

      const en = String(cardData.en || '').trim();
      const vi = String(cardData.vi || '').trim();
      if (!en || !vi) throw new Error('Từ / cụm tiếng Anh và nghĩa tiếng Việt không được để trống.');
      if (!Array.isArray(this.state.my_cards)) this.state.my_cards = [];

      const deckId = targetDeckId || (this.state.my_decks[0] ? this.state.my_decks[0].id : 'deck-daily');
      const id = 'card-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);

      const newCard = {
        id,
        deck_id: deckId,
        en,
        vi,
        ipa: cardData.ipa ? String(cardData.ipa).trim() : '',
        example: cardData.example ? String(cardData.example).trim() : '',
        example_vi: cardData.example_vi ? String(cardData.example_vi).trim() : '',
        notes: cardData.notes ? String(cardData.notes).trim() : '',
        interval: 0,
        reps: 0,
        due_date: new Date().toISOString(),
        level: 'new', // 'new', 'again', 'day1', 'day3', 'day6'
        last_reviewed_at: null,
        created_at: new Date().toISOString()
      };

      this.state.my_cards.unshift(newCard);
      this.saveState();
      return newCard;
    }

    updateMyCard(cardId, cardData = {}) {
      if (!Array.isArray(this.state.my_cards)) return null;
      const idx = this.state.my_cards.findIndex(c => c.id === cardId);
      if (idx === -1) return null;

      const current = this.state.my_cards[idx];
      this.state.my_cards[idx] = {
        ...current,
        ...cardData,
        id: current.id,
        updated_at: new Date().toISOString()
      };

      this.saveState();
      return this.state.my_cards[idx];
    }

    deleteMyCard(cardId) {
      if (!Array.isArray(this.state.my_cards)) return false;
      const initial = this.state.my_cards.length;
      this.state.my_cards = this.state.my_cards.filter(c => c.id !== cardId);
      this.saveState();
      return this.state.my_cards.length < initial;
    }

    // 4 Memory Rating Buttons explicitly requested:
    // 1 = Học lại (again: ngay trong phiên / hôm nay)
    // 2 = Nhớ là 1 ngày sau học lại (day1: giãn cách 1 ngày)
    // 3 = Đã nhớ 3 ngày (day3: giãn cách 3 ngày)
    // 4 = Rất nhớ 6 ngày (day6: giãn cách 6 ngày)
    reviewMyCard(cardId, rating = 2) {
      if (!Array.isArray(this.state.my_cards)) return null;
      const card = this.state.my_cards.find(c => c.id === cardId);
      if (!card) return null;

      const now = new Date();
      card.reps = (card.reps || 0) + 1;
      card.last_reviewed_at = now.toISOString();

      switch (rating) {
        case 1: // Học lại
          card.interval = 0;
          card.level = 'again';
          card.due_date = now.toISOString();
          break;
        case 2: // Nhớ là 1 ngày sau học lại
          card.interval = 1;
          card.level = 'day1';
          card.due_date = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000).toISOString();
          break;
        case 3: // Đã nhớ 3 ngày
          card.interval = 3;
          card.level = 'day3';
          card.due_date = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString();
          break;
        case 4: // Rất nhớ 6 ngày
          card.interval = 6;
          card.level = 'day6';
          card.due_date = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000).toISOString();
          break;
      }

      this.saveState();
      return card;
    }

    getMyCardsDue(deckId = null) {
      const cards = this.getMyCards(deckId);
      const now = new Date();
      return cards.filter(c => !c.due_date || new Date(c.due_date) <= now || c.level === 'again');
    }

    getMyCardsStats(deckId = null) {
      const cards = this.getMyCards(deckId);
      const now = new Date();
      let due = 0, again = 0, day1 = 0, day3 = 0, day6 = 0, newCards = 0;

      cards.forEach(c => {
        if (!c.due_date || new Date(c.due_date) <= now || c.level === 'again') {
          due++;
        }
        if (c.level === 'again') again++;
        else if (c.level === 'day1') day1++;
        else if (c.level === 'day3') day3++;
        else if (c.level === 'day6') day6++;
        else newCards++;
      });

      return {
        total: cards.length,
        due,
        again,
        day1,
        day3,
        day6,
        newCards
      };
    }

    // Toggle difficult flag
    toggleDifficult(vocabId) {
      if (!this.state.vocab_srs[vocabId]) {
        this.reviewWord(vocabId, 1);
      }
      this.state.vocab_srs[vocabId].is_difficult = !this.state.vocab_srs[vocabId].is_difficult;
      this.saveState();
      return this.state.vocab_srs[vocabId].is_difficult;
    }

    // Get list of words due for review today
    getDueVocabIds() {
      const now = new Date();
      const due = [];
      for (const [id, data] of Object.entries(this.state.vocab_srs)) {
        if (!data.due_date || new Date(data.due_date) <= now || data.is_difficult) {
          due.push(id);
        }
      }
      return due;
    }

    // Get SRS stats summary
    getStats() {
      const totalWords = Object.keys(this.state.vocab_srs).length;
      let learning = 0;
      let review = 0;
      let mastered = 0;
      let difficult = 0;
      const now = new Date();
      let dueToday = 0;

      for (const [id, data] of Object.entries(this.state.vocab_srs)) {
        if (data.is_difficult) difficult++;
        if (data.state === 'mastered') mastered++;
        else if (data.state === 'review') review++;
        else learning++;

        if (!data.due_date || new Date(data.due_date) <= now) {
          dueToday++;
        }
      }

      const completedLessonsCount = Object.keys(this.state.lesson_progress).filter(
        d => this.state.lesson_progress[d].completed
      ).length;

      return {
        total_vocab_tracked: totalWords,
        custom_vocab_count: (this.state.custom_vocab || []).length,
        learning,
        review,
        mastered,
        difficult,
        due_today: dueToday,
        completed_lessons: completedLessonsCount,
        streak_days: this.state.user_profile.streak_days || 1,
        current_day: this.state.user_profile.current_day || 1
      };
    }

    // Shuffle helper (Fisher-Yates)
    shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    // Generate Quick Quiz based on duration: 5 min (10 Qs), 10 min (20 Qs), 20 min (35 Qs)
    generateQuickQuiz(allVocabBank = [], durationMinutes = 5) {
      let count = 10;
      if (durationMinutes === 10) count = 20;
      if (durationMinutes === 20) count = 35;

      const dueIds = new Set(this.getDueVocabIds());
      const duePool = [];
      const restPool = [];

      allVocabBank.forEach(item => {
        if (dueIds.has(item.id)) {
          duePool.push(item);
        } else {
          restPool.push(item);
        }
      });

      // Prioritize due and difficult words first
      const selected = [
        ...this.shuffleArray(duePool),
        ...this.shuffleArray(restPool)
      ].slice(0, count);

      // Create questions with shuffled options
      const questions = selected.map((item, qIdx) => {
        // Pick 3 random distractor definitions from vocab bank
        const otherItems = allVocabBank.filter(x => x.id !== item.id);
        const distractors = this.shuffleArray(otherItems).slice(0, 3).map(x => x.vi);
        const allOptions = this.shuffleArray([item.vi, ...distractors]);
        const correctIndex = allOptions.indexOf(item.vi);

        return {
          id: `quiz-q-${qIdx}`,
          vocab_id: item.id,
          en: item.en,
          pos: item.pos,
          ipa: item.ipa,
          example: item.example,
          question: `Nghĩa của từ / cụm từ "${item.en}" (${item.pos}) là gì?`,
          options: allOptions,
          answer: correctIndex,
          explanation: `"${item.en}" ${item.ipa ? item.ipa : ''} nghĩa là: ${item.vi}. Ví dụ: ${item.example}`
        };
      });

      return {
        duration_minutes: durationMinutes,
        question_count: questions.length,
        questions: this.shuffleArray(questions)
      };
    }

    // Record Reflex Drills attempt
    recordReflexAttempt(attempt = {}) {
      if (!Array.isArray(this.state.reflex_history)) {
        this.state.reflex_history = [];
      }
      const record = {
        id: attempt.id || 'qr-' + Date.now(),
        drill_id: attempt.drillId,
        prompt: attempt.prompt,
        user_answer: attempt.userAnswer,
        is_correct: !!attempt.isCorrect,
        response_time_seconds: attempt.responseTimeSeconds || 0,
        timestamp: new Date().toISOString()
      };
      this.state.reflex_history.unshift(record);
      if (this.state.reflex_history.length > 200) {
        this.state.reflex_history = this.state.reflex_history.slice(0, 200);
      }
      this.saveState();
      return record;
    }

    // Get Reflex Statistics
    getReflexStats() {
      const history = Array.isArray(this.state.reflex_history) ? this.state.reflex_history : [];
      const totalAnswered = history.length;
      const correctCount = history.filter(h => h.is_correct).length;
      const totalTime = history.reduce((acc, h) => acc + (h.response_time_seconds || 0), 0);
      const avgResponseTime = totalAnswered > 0 ? (totalTime / totalAnswered).toFixed(1) : 0;
      const completionRate = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

      return {
        total_answered: totalAnswered,
        correct_count: correctCount,
        completion_rate: completionRate,
        avg_response_time: avgResponseTime,
        history: history.slice(0, 15)
      };
    }

    // Record Role-play scenario completion
    recordScenarioAttempt(scenarioId, isSuccess, title) {
      if (!Array.isArray(this.state.scenario_history)) {
        this.state.scenario_history = [];
      }
      const record = {
        scenario_id: scenarioId,
        title: title || scenarioId,
        is_success: !!isSuccess,
        completed_at: new Date().toISOString()
      };
      this.state.scenario_history.unshift(record);
      this.saveState();
      return record;
    }

    // Record Reading Comprehension completion
    completeReading(passageId, score = 100, answers = {}) {
      if (!this.state.reading_progress) {
        this.state.reading_progress = {};
      }
      const existing = this.state.reading_progress[passageId] || {};
      this.state.reading_progress[passageId] = {
        completed: true,
        score: Math.max(score, existing.score || 0),
        completed_at: new Date().toISOString(),
        last_answers: answers
      };
      this.saveState();
      return this.state.reading_progress[passageId];
    }

    isReadingCompleted(passageId) {
      if (!this.state.reading_progress) return false;
      return !!(this.state.reading_progress[passageId] && this.state.reading_progress[passageId].completed);
    }

    getReadingStats(totalPassages = 15) {
      if (!this.state.reading_progress) this.state.reading_progress = {};
      const completedIds = Object.keys(this.state.reading_progress).filter(
        id => this.state.reading_progress[id].completed
      );
      const completedCount = completedIds.length;
      const totalScores = completedIds.reduce((sum, id) => sum + (this.state.reading_progress[id].score || 0), 0);
      const avgScore = completedCount > 0 ? Math.round(totalScores / completedCount) : 0;
      const pct = Math.min(100, Math.round((completedCount / totalPassages) * 100));

      return {
        completed_count: completedCount,
        total_passages: totalPassages,
        completion_pct: pct,
        avg_score: avgScore
      };
    }

    // Export progress as JSON string
    exportBackupJSON() {
      const backup = {
        app: "English Hub V1 - 52 Weeks",
        schema_version: SCHEMA_VERSION,
        exported_at: new Date().toISOString(),
        stats_snapshot: this.getStats(),
        state: this.state
      };
      return JSON.stringify(backup, null, 2);
    }

    // Import progress from JSON string
    importBackupJSON(jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        if (!parsed || !parsed.state || !parsed.schema_version) {
          throw new Error("Tệp sao lưu không đúng định dạng của English Hub.");
        }

        // Schema compatibility check
        if (parsed.schema_version !== SCHEMA_VERSION && parsed.schema_version !== '1.0') {
          throw new Error(`Phiên bản dữ liệu không tương thích (${parsed.schema_version}). Yêu cầu ${SCHEMA_VERSION}.`);
        }

        this.state = parsed.state;
        if (!Array.isArray(this.state.custom_vocab)) {
          this.state.custom_vocab = [];
        }
        if (!Array.isArray(this.state.my_decks) || this.state.my_decks.length === 0) {
          this.state.my_decks = [
            {
              id: 'deck-daily',
              name: 'Tiếng Anh hằng ngày',
              description: 'Các mẫu câu và cụm từ giao tiếp hằng ngày thông dụng',
              created_at: new Date().toISOString()
            }
          ];
        }
        if (!Array.isArray(this.state.my_cards)) {
          this.state.my_cards = [];
        }
        if (!this.state.google_drive_config) {
          this.state.google_drive_config = { client_id: '', last_synced: null, file_id: null };
        }
        this.state.schema_version = SCHEMA_VERSION;
        this.saveState();
        return { success: true, message: "Nhập dữ liệu tiến độ thành công!" };
      } catch (err) {
        console.error("Backup import failed:", err);
        return { success: false, message: err.message };
      }
    }

    // Reset progress with confirmation
    resetProgress() {
      this.state = this.getDefaultState();
      this.saveState();
      return true;
    }
  }

  // Export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SRSEngine;
  }
  if (typeof window !== 'undefined') {
    window.SRSEngine = SRSEngine;
    window.srsEngine = new SRSEngine();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
