// English Hub V1 - Advanced Speech Synthesis & Voice Controller
// Version: 2.0.0
// Manages device voices (en-US, en-GB, vi-VN), natural voice prioritization,
// independent language routing, speed presets, sequential dialogue playback, and persistence.

(function(root) {
  'use strict';

  const STORAGE_KEY_EN = 'ENGLISH_HUB_VOICE_EN';
  const STORAGE_KEY_VI = 'ENGLISH_HUB_VOICE_VI';
  const STORAGE_KEY_RATE = 'ENGLISH_HUB_VOICE_RATE';

  class SpeechEngine {
    constructor() {
      this.isSupported = 'speechSynthesis' in window;
      this.voices = [];
      this.enVoices = [];
      this.viVoices = [];
      this.selectedEnVoiceURI = null;
      this.selectedViVoiceURI = null;
      this.currentRate = 0.85; // Default "Dễ nghe"
      this.activeUtterance = null;
      this.isPlaying = false;
      this.dialogueQueue = [];
      this.currentDialogueIndex = -1;
      this.dialogueTimer = null;
      this.listeners = [];

      if (this.isSupported) {
        this.loadSavedPreferences();
        this.initVoices();
      }
    }

    loadSavedPreferences() {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const savedRate = window.localStorage.getItem(STORAGE_KEY_RATE);
          if (savedRate) {
            const r = parseFloat(savedRate);
            if (!isNaN(r) && r >= 0.5 && r <= 1.5) this.currentRate = r;
          }
          this.selectedEnVoiceURI = window.localStorage.getItem(STORAGE_KEY_EN) || null;
          this.selectedViVoiceURI = window.localStorage.getItem(STORAGE_KEY_VI) || null;
        }
      } catch (e) {
        console.warn('Could not read voice preferences from localStorage:', e);
      }
    }

    initVoices() {
      const update = () => {
        const list = window.speechSynthesis.getVoices() || [];
        if (list.length > 0) {
          this.voices = list;
          this.categorizeVoices();
          this.notifyListeners({ type: 'voices_loaded', voices: this.voices });
        }
      };

      update();
      if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = update;
      }
    }

    categorizeVoices() {
      // English voices
      const allEn = this.voices.filter(v => (v.lang || '').toLowerCase().startsWith('en'));
      
      // Rank voices: prioritize Natural / Neural / Google / Apple Premium
      this.enVoices = allEn.sort((a, b) => {
        const aScore = this.getVoiceScore(a);
        const bScore = this.getVoiceScore(b);
        return bScore - aScore;
      });

      // Vietnamese voices
      this.viVoices = this.voices.filter(v => (v.lang || '').toLowerCase().startsWith('vi'));

      // Validate selected voices or assign best defaults
      if (!this.selectedEnVoiceURI || !this.enVoices.find(v => v.voiceURI === this.selectedEnVoiceURI)) {
        if (this.enVoices.length > 0) {
          this.selectedEnVoiceURI = this.enVoices[0].voiceURI;
        }
      }

      if (!this.selectedViVoiceURI || !this.viVoices.find(v => v.voiceURI === this.selectedViVoiceURI)) {
        if (this.viVoices.length > 0) {
          this.selectedViVoiceURI = this.viVoices[0].voiceURI;
        }
      }
    }

    getVoiceScore(voice) {
      let score = 0;
      const name = (voice.name || '').toLowerCase();
      const lang = (voice.lang || '').toLowerCase();

      // en-US and en-GB priority
      if (lang === 'en-us') score += 20;
      else if (lang === 'en-gb') score += 18;
      else if (lang.startsWith('en')) score += 10;

      // Natural, Neural, Online, Google, Apple keywords
      if (name.includes('natural') || name.includes('online')) score += 50;
      if (name.includes('neural')) score += 40;
      if (name.includes('google')) score += 30;
      if (name.includes('samantha') || name.includes('daniel') || name.includes('jenny') || name.includes('guy') || name.includes('aria')) score += 25;
      if (name.includes('premium') || name.includes('enhanced')) score += 20;
      if (voice.default) score += 5;

      return score;
    }

    getVoiceGender(voice) {
      const name = (voice.name || '').toLowerCase();
      const femaleKeywords = ['female', 'woman', 'girl', 'jenny', 'aria', 'samantha', 'susan', 'victoria', 'zira', 'karen', 'catherine', 'hazel', 'linda', 'heather', 'hoaimy'];
      const maleKeywords = ['male', 'man', 'boy', 'guy', 'david', 'alex', 'george', 'daniel', 'oliver', 'mark', 'richard', 'james', 'namminh'];

      for (const kw of femaleKeywords) {
        if (name.includes(kw)) return 'female';
      }
      for (const kw of maleKeywords) {
        if (name.includes(kw)) return 'male';
      }
      return 'neutral';
    }

    getEnglishVoices() {
      return this.enVoices.map(v => ({
        voiceURI: v.voiceURI,
        name: v.name,
        lang: v.lang,
        gender: this.getVoiceGender(v),
        isNatural: (v.name || '').toLowerCase().includes('natural') || (v.name || '').toLowerCase().includes('online') || (v.name || '').toLowerCase().includes('google')
      }));
    }

    getVietnameseVoices() {
      return this.viVoices.map(v => ({
        voiceURI: v.voiceURI,
        name: v.name,
        lang: v.lang,
        gender: this.getVoiceGender(v)
      }));
    }

    get voiceRate() {
      return this.currentRate || 0.85;
    }

    get selectedEnVoice() {
      return this.enVoices.find(v => v.voiceURI === this.selectedEnVoiceURI || v.name === this.selectedEnVoiceURI) || this.enVoices[0] || null;
    }

    get selectedViVoice() {
      return this.viVoices.find(v => v.voiceURI === this.selectedViVoiceURI || v.name === this.selectedViVoiceURI) || this.viVoices[0] || null;
    }

    isHighQualityVoice(v) {
      return this.getVoiceScore(v) >= 30;
    }

    getVoices() {
      return this.voices;
    }

    setVoice(lang, nameOrURI) {
      if ((lang || '').startsWith('vi')) {
        this.setViVoice(nameOrURI);
      } else {
        this.setEnVoice(nameOrURI);
      }
    }

    setEnVoice(voiceURI) {
      this.selectedEnVoiceURI = voiceURI;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(STORAGE_KEY_EN, voiceURI);
        }
      } catch (e) {}
      this.notifyListeners({ type: 'voice_changed', lang: 'en', voiceURI });
    }

    setViVoice(voiceURI) {
      this.selectedViVoiceURI = voiceURI;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(STORAGE_KEY_VI, voiceURI);
        }
      } catch (e) {}
      this.notifyListeners({ type: 'voice_changed', lang: 'vi', voiceURI });
    }

    setRate(rate) {
      const r = parseFloat(rate);
      if (!isNaN(r) && r >= 0.5 && r <= 1.5) {
        this.currentRate = r;
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem(STORAGE_KEY_RATE, String(r));
          }
        } catch (e) {}
        this.notifyListeners({ type: 'rate_changed', rate: r });
      }
    }

    getRate() {
      return this.currentRate;
    }

    // Stop all speech immediately
    stop(clearQueue = true) {
      if (!this.isSupported) return;
      if (clearQueue) {
        this.clearDialogueQueue();
      }
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
      this.isPlaying = false;
      this.activeUtterance = null;
      this.notifyListeners({ type: 'status_changed', status: 'idle' });
    }

    clearDialogueQueue() {
      if (this.dialogueTimer) {
        clearTimeout(this.dialogueTimer);
        this.dialogueTimer = null;
      }
      this.dialogueQueue = [];
      this.currentDialogueIndex = -1;
    }

    // Core safe speech synthesis
    speak(text, options = {}) {
      if (!this.isSupported) {
        if (options.onError) options.onError(new Error('SpeechSynthesis not supported'));
        return;
      }

      // Safe clean text
      const clean = String(text || '').replace(/[\/\\]/g, ' ').trim();
      if (!clean) {
        if (options.onEnd) options.onEnd();
        return;
      }

      // Stop previous utterance without clearing dialogue queue if keepQueue is true
      if (options.keepQueue) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      } else {
        this.stop(true);
      }

      const lang = options.lang || 'en-US';
      const rate = options.rate || this.currentRate || 0.85;
      const pitch = options.pitch || 1.0;

      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Assign matching voice
      if (lang.startsWith('vi')) {
        const viVoice = this.viVoices.find(v => v.voiceURI === this.selectedViVoiceURI || v.name === this.selectedViVoiceURI) || this.viVoices[0];
        if (viVoice) utterance.voice = viVoice;
      } else {
        const enVoice = this.enVoices.find(v => v.voiceURI === this.selectedEnVoiceURI || v.name === this.selectedEnVoiceURI) || this.enVoices[0];
        if (enVoice) utterance.voice = enVoice;
      }

      // Prevent Chrome garbage collection bug by pinning activeUtterance
      this.activeUtterance = utterance;
      this.isPlaying = true;
      this.notifyListeners({ type: 'status_changed', status: 'playing', text: clean, lang });

      // Chrome/Edge watchdog to resume if stalled
      if (this.watchdogTimer) clearInterval(this.watchdogTimer);
      this.watchdogTimer = setInterval(() => {
        if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }, 3000);

      utterance.onstart = () => {
        if (options.onStart) options.onStart();
        this.notifyListeners({ type: 'status_changed', status: 'playing', text: clean, lang });
      };

      utterance.onend = () => {
        if (this.watchdogTimer) { clearInterval(this.watchdogTimer); this.watchdogTimer = null; }
        this.isPlaying = false;
        this.activeUtterance = null;
        this.notifyListeners({ type: 'status_changed', status: 'idle' });
        if (options.onEnd) options.onEnd();
      };

      utterance.onerror = (err) => {
        if (this.watchdogTimer) { clearInterval(this.watchdogTimer); this.watchdogTimer = null; }
        this.isPlaying = false;
        this.activeUtterance = null;
        this.notifyListeners({ type: 'status_changed', status: 'error', error: err });
        if (options.onError) options.onError(err);
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error('SpeechSynthesis.speak failed:', err);
        if (this.watchdogTimer) { clearInterval(this.watchdogTimer); this.watchdogTimer = null; }
        this.isPlaying = false;
        this.activeUtterance = null;
        this.notifyListeners({ type: 'status_changed', status: 'error', error: err });
      }
    }

    // Play entire dialogue sequentially with pause and highlighting
    playDialogue(dialogueItems, options = {}) {
      if (!Array.isArray(dialogueItems) || dialogueItems.length === 0) return;
      this.stop(true);

      this.dialogueQueue = dialogueItems;
      this.currentDialogueIndex = 0;
      const rate = options.rate || this.currentRate || 0.85;

      const playNext = () => {
        if (this.currentDialogueIndex >= this.dialogueQueue.length) {
          this.clearDialogueQueue();
          if (options.onComplete) options.onComplete();
          return;
        }

        const item = this.dialogueQueue[this.currentDialogueIndex];
        const turnText = item.text || item.en || item;
        const speaker = (item.speaker || '').toLowerCase();
        const isSpeakerB = speaker.includes('b') || speaker.includes('2') || speaker.includes('female');

        if (options.onTurnChange) {
          options.onTurnChange(this.currentDialogueIndex, item);
        }

        this.speak(turnText, {
          lang: 'en-US',
          rate: rate,
          pitch: isSpeakerB ? 1.08 : 1.0,
          keepQueue: true,
          onEnd: () => {
            this.currentDialogueIndex++;
            this.dialogueTimer = setTimeout(playNext, 600); // 600ms natural conversational pause
          },
          onError: (err) => {
            console.warn('Dialogue utterance error, continuing to next line:', err);
            this.currentDialogueIndex++;
            this.dialogueTimer = setTimeout(playNext, 400);
          }
        });
      };

      playNext();
    }

    testVoice(voiceURI, sampleText, lang = 'en-US') {
      const voice = this.voices.find(v => v.voiceURI === voiceURI);
      const text = sampleText || (lang.startsWith('vi') 
        ? "Xin chào! Đây là giọng đọc tiếng Việt được cấu hình cho ứng dụng Miu Student English."
        : "Hello! This is your selected English voice for daily listening and speaking practice.");
      
      this.speak(text, { lang, rate: this.currentRate });
    }

    subscribe(listener) {
      if (typeof listener === 'function') {
        this.listeners.push(listener);
      }
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
      };
    }

    notifyListeners(event) {
      this.listeners.forEach(fn => {
        try { fn(event); } catch (e) { console.error('Voice listener error:', e); }
      });
    }
  }

  // Export singleton
  const engine = new SpeechEngine();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = engine;
  }
  if (typeof window !== 'undefined') {
    window.speechEngine = engine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
