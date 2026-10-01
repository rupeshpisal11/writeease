/**
 * WriteEase AI — Core JavaScript
 * Shared utilities, auth, history, toast, and demo engine
 */

// ─── Base Path ───────────────────────────────────────────────────────────────
const BASE_PATH = '/writeease';

// ─── Storage Keys ────────────────────────────────────────────────────────────
const KEYS = {
  user: 'we_user',
  history: 'we_history',
  credits: 'we_credits',
  settings: 'we_settings',
};

// ─── Auth ─────────────────────────────────────────────────────────────────────
const Auth = {
  get() {
    try { return JSON.parse(localStorage.getItem(KEYS.user) || 'null'); }
    catch { return null; }
  },
  set(user) { localStorage.setItem(KEYS.user, JSON.stringify(user)); },
  remove() { localStorage.removeItem(KEYS.user); },
  isLoggedIn() { return !!this.get(); },
  logout() {
    this.remove();
    window.location.href = BASE_PATH + '/index.html';
  },
};

// ─── Credits ──────────────────────────────────────────────────────────────────
const Credits = {
  MAX: 10,
  get() {
    const val = localStorage.getItem(KEYS.credits);
    if (val === null) { this.set(this.MAX); return this.MAX; }
    return parseInt(val, 10);
  },
  set(n) { localStorage.setItem(KEYS.credits, String(n)); },
  use() {
    const c = this.get();
    if (c <= 0) return false;
    this.set(c - 1);
    return true;
  },
  refill() { this.set(this.MAX); },
};

// ─── History ──────────────────────────────────────────────────────────────────
const History = {
  get() {
    try { return JSON.parse(localStorage.getItem(KEYS.history) || '[]'); }
    catch { return []; }
  },
  add(entry) {
    const items = this.get();
    items.unshift({ id: Date.now(), date: new Date().toISOString(), ...entry });
    if (items.length > 100) items.length = 100;
    localStorage.setItem(KEYS.history, JSON.stringify(items));
  },
  delete(id) {
    const items = this.get().filter(i => i.id !== id);
    localStorage.setItem(KEYS.history, JSON.stringify(items));
  },
  clear() { localStorage.removeItem(KEYS.history); },
};

// ─── Settings ─────────────────────────────────────────────────────────────────
const Settings = {
  defaults: { darkMode: false, emailNotifications: true, autoSave: true, language: 'en' },
  get() {
    try {
      return { ...this.defaults, ...JSON.parse(localStorage.getItem(KEYS.settings) || '{}') };
    } catch { return { ...this.defaults }; }
  },
  set(key, value) {
    const s = this.get();
    s[key] = value;
    localStorage.setItem(KEYS.settings, JSON.stringify(s));
  },
};

// ─── Toast Notifications ──────────────────────────────────────────────────────
function showToast(message, type = 'default', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✓', error: '✕', warning: '⚠', default: 'ℹ' };
  toast.innerHTML = `<span style="font-size:16px">${icons[type] || icons.default}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ─── Copy to clipboard ────────────────────────────────────────────────────────
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const orig = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '✓ Copied!';
      setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = orig; }, 2000);
    }
    showToast('Copied to clipboard!', 'success');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied!', 'success');
  });
}

// ─── Mobile Navigation ────────────────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('navbar-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');
  if (!toggle || !mobileNav) return;
  toggle.addEventListener('click', () => mobileNav.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) mobileNav.classList.remove('open');
  });
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        answer?.classList.add('open');
      }
    });
  });
}

// ─── Sidebar toggle (app pages) ──────────────────────────────────────────────
function initAppSidebar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!menuBtn || !sidebar) return;
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
    backdrop?.classList.toggle('visible');
  });
  backdrop?.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    backdrop.classList.remove('visible');
  });
}

// ─── Redirect if not logged in ────────────────────────────────────────────────
function requireAuth() {
  if (!Auth.isLoggedIn()) {
    window.location.href = BASE_PATH + '/login.html';
  }
}

// ─── Redirect if already logged in ───────────────────────────────────────────
function redirectIfLoggedIn() {
  if (Auth.isLoggedIn()) {
    window.location.href = BASE_PATH + '/dashboard.html';
  }
}

// ─── Render user info in topbar ───────────────────────────────────────────────
function renderUserTopbar() {
  const user = Auth.get();
  if (!user) return;
  const nameEl = document.getElementById('topbar-name');
  const avatarEl = document.getElementById('topbar-avatar');
  if (nameEl) nameEl.textContent = user.name || user.email;
  if (avatarEl) avatarEl.textContent = (user.name || user.email || 'U')[0].toUpperCase();
  // Credits
  const credEl = document.getElementById('credit-count');
  if (credEl) credEl.textContent = Credits.get();
}

// ─── Character counter ────────────────────────────────────────────────────────
function initCharCount(textareaId, counterId) {
  const ta = document.getElementById(textareaId);
  const counter = document.getElementById(counterId);
  if (!ta || !counter) return;
  const update = () => counter.textContent = `${ta.value.length} characters`;
  ta.addEventListener('input', update);
  update();
}

// ─── Loading state for buttons ────────────────────────────────────────────────
function setLoading(btn, loading) {
  if (loading) {
    btn.dataset.originalText = btn.innerHTML;
    btn.classList.add('btn-loading');
    btn.disabled = true;
    btn.innerHTML = '&nbsp;';
  } else {
    btn.classList.remove('btn-loading');
    btn.disabled = false;
    btn.innerHTML = btn.dataset.originalText || btn.innerHTML;
  }
}

// ─── AI Demo Engine ───────────────────────────────────────────────────────────
const AIDemo = {
  // Simulate AI processing delay
  delay(ms) { return new Promise(r => setTimeout(r, ms)); },

  // Paraphraser
  paraphrase(text, tone = 'standard') {
    const transforms = {
      standard: [
        (t) => t.replace(/I am/g, 'I\'m').replace(/I will/g, 'I\'ll').replace(/do not/g, 'don\'t'),
        (t) => t.replace(/Additionally,/g, 'Furthermore,').replace(/However,/g, 'Nevertheless,'),
        (t) => t.replace(/very /g, 'quite ').replace(/a lot of/g, 'numerous'),
      ],
      formal: [
        (t) => t.replace(/I'm/g, 'I am').replace(/can't/g, 'cannot').replace(/don't/g, 'do not'),
        (t) => t.replace(/get/g, 'obtain').replace(/use/g, 'utilize').replace(/show/g, 'demonstrate'),
        (t) => 'With regard to the matter at hand, ' + t.charAt(0).toLowerCase() + t.slice(1),
      ],
      casual: [
        (t) => t.replace(/I am/g, 'I\'m').replace(/cannot/g, 'can\'t').replace(/will not/g, 'won\'t'),
        (t) => t.replace(/utilize/g, 'use').replace(/obtain/g, 'get').replace(/demonstrate/g, 'show'),
        (t) => t.replace(/Furthermore/g, 'Also').replace(/Nevertheless/g, 'Still'),
      ],
      creative: [
        (t) => 'Picture this: ' + t,
        (t) => t.replace(/good/g, 'remarkable').replace(/great/g, 'extraordinary'),
        (t) => t + ' — a journey worth taking.',
      ],
      academic: [
        (t) => t.replace(/show/g, 'demonstrate').replace(/use/g, 'employ').replace(/find/g, 'ascertain'),
        (t) => 'As evidenced by the literature, ' + t.charAt(0).toLowerCase() + t.slice(1),
        (t) => t.replace(/very/g, 'considerably').replace(/a lot/g, 'substantially'),
      ],
      concise: [
        (t) => t.split('. ').slice(0, Math.ceil(t.split('. ').length * 0.7)).join('. ') + (t.endsWith('.') ? '' : '.'),
        (t) => t.replace(/ that /g, ' ').replace(/ which /g, ' ').replace(/in order to/g, 'to'),
        (t) => t.replace(/at this point in time/g, 'now').replace(/due to the fact that/g, 'because'),
      ],
    };
    const fns = transforms[tone] || transforms.standard;
    let result = text;
    fns.forEach(fn => { result = fn(result); });
    // If no real change, do a structural rewrite
    if (result === text) {
      const sentences = text.split(/(?<=[.!?])\s+/);
      result = sentences.map(s => s.trim()).filter(Boolean).join(' ');
    }
    return result;
  },

  // Humanizer
  humanize(text) {
    const contractions = [
      [/\bI am\b/g, "I'm"], [/\bI will\b/g, "I'll"], [/\bI have\b/g, "I've"],
      [/\bcannot\b/g, "can't"], [/\bdo not\b/g, "don't"], [/\bit is\b/g, "it's"],
      [/\bthey are\b/g, "they're"], [/\bwe are\b/g, "we're"], [/\bthat is\b/g, "that's"],
    ];
    let result = text;
    contractions.forEach(([pat, rep]) => { result = result.replace(pat, rep); });
    // Add human-like openers
    const starters = ["Honestly, ", "Interestingly enough, ", "You know, ", "Let me tell you — "];
    const sentences = result.split(/(?<=[.!?])\s+/);
    if (sentences.length > 2) {
      sentences[1] = starters[Math.floor(Math.random() * starters.length)] + sentences[1].charAt(0).toLowerCase() + sentences[1].slice(1);
    }
    return sentences.join(' ');
  },

  // Grammar Fixer
  fixGrammar(text) {
    const issues = [];
    let fixed = text;
    // Common grammar fixes
    const rules = [
      { pattern: /\bi seen\b/gi, fix: 'I saw', type: 'Tense Error', msg: '"seen" needs a helping verb or use "saw"' },
      { pattern: /\btheir is\b/gi, fix: 'there is', type: 'Homophone Error', msg: '"their" (possessive) should be "there" (location)' },
      { pattern: /\byour welcome\b/gi, fix: "you're welcome", type: 'Contraction Error', msg: '"your" (possessive) should be "you\'re" (you are)' },
      { pattern: /\bits a\b/gi, fix: "it's a", type: 'Apostrophe Error', msg: '"its" (possessive) should be "it\'s" (it is)' },
      { pattern: /\balot\b/gi, fix: 'a lot', type: 'Spelling Error', msg: '"alot" is not a word; use "a lot"' },
      { pattern: /\bshould of\b/gi, fix: 'should have', type: 'Modal Error', msg: '"should of" is incorrect; use "should have"' },
      { pattern: /\bcould of\b/gi, fix: 'could have', type: 'Modal Error', msg: '"could of" is incorrect; use "could have"' },
      { pattern: /\bless people\b/gi, fix: 'fewer people', type: 'Countable Noun Error', msg: 'Use "fewer" with countable nouns like "people"' },
      { pattern: /\bme and ([A-Z]\w+)\b/g, fix: '$1 and I', type: 'Pronoun Error', msg: 'Use subject pronoun "I" when it\'s the subject of a verb' },
      { pattern: /\s{2,}/g, fix: ' ', type: 'Whitespace Error', msg: 'Extra spaces found' },
    ];
    rules.forEach(rule => {
      if (rule.pattern.test(text)) {
        issues.push({ type: rule.type, original: text.match(rule.pattern)?.[0], suggestion: rule.fix, message: rule.msg });
        rule.pattern.lastIndex = 0;
        fixed = fixed.replace(rule.pattern, rule.fix);
      }
    });
    // Ensure proper capitalization after periods
    fixed = fixed.replace(/([.!?]\s+)([a-z])/g, (m, punct, char) => punct + char.toUpperCase());
    // Fix double spaces
    fixed = fixed.replace(/\s{2,}/g, ' ').trim();
    if (issues.length === 0) {
      issues.push({ type: 'Style Suggestion', original: null, suggestion: null, message: 'Your text looks grammatically correct. Consider varying sentence length for better flow.' });
    }
    return { fixed, issues };
  },

  // Email Writer
  writeEmail({ purpose, context, tone, length }) {
    const greetings = { formal: 'Dear Sir/Madam,', professional: 'Hello,', friendly: 'Hi there,', apologetic: 'Dear [Name],' };
    const closes = { formal: 'Yours faithfully,', professional: 'Best regards,', friendly: 'Cheers,', apologetic: 'Sincerely,' };
    const greeting = greetings[tone] || greetings.professional;
    const close = closes[tone] || closes.professional;
    const bodies = {
      inquiry: `I hope this message finds you well. I am writing to inquire about ${context || 'the matter discussed previously'}.\n\nCould you please provide me with more information regarding this? I would greatly appreciate your prompt response.\n\nIf you require any further details from my end, please do not hesitate to reach out.`,
      followup: `I hope you are doing well. I wanted to follow up on my previous message regarding ${context || 'our ongoing discussion'}.\n\nI understand you may be busy, and I appreciate your time. Could you please update me on the current status?\n\nThank you for your continued support and look forward to hearing from you soon.`,
      complaint: `I am writing to bring a matter to your attention. Unfortunately, I have encountered an issue with ${context || 'your service/product'}.\n\nI would appreciate your prompt attention to this matter and a resolution at your earliest convenience. I trust this will be handled professionally.\n\nPlease feel free to contact me if you need further information.`,
      apology: `I am writing to sincerely apologize for ${context || 'the inconvenience caused'}.\n\nI take full responsibility for this oversight and assure you that steps are being taken to prevent recurrence. Your satisfaction is of utmost importance to us.\n\nThank you for your understanding and patience.`,
      introduction: `I hope this email finds you well. I am writing to introduce myself — ${context || 'I am reaching out to connect with you'}.\n\nI believe there is a great opportunity for us to collaborate and create mutual value. I would love the opportunity to connect and discuss this further.\n\nWould you be available for a brief call this week?`,
      application: `I am writing to express my keen interest in ${context || 'the opportunity at your organization'}.\n\nWith my background and skills, I am confident I can contribute meaningfully to your team. I have attached my resume for your review and would welcome the opportunity to discuss how I can add value.\n\nThank you for considering my application. I look forward to hearing from you.`,
    };
    const body = bodies[purpose] || bodies.inquiry;
    const shortBody = body.split('\n\n').slice(0, 2).join('\n\n');
    const emailBody = length === 'short' ? shortBody : body;
    return `${greeting}\n\n${emailBody}\n\n${close}\n[Your Name]`;
  },

  // Plagiarism check (demo only)
  checkPlagiarism(text) {
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const uniquePercent = Math.floor(82 + Math.random() * 15); // 82-97% unique
    const matchedPercent = 100 - uniquePercent;
    return {
      uniquePercent,
      matchedPercent,
      wordCount,
      sources: matchedPercent > 5 ? [
        { url: 'en.wikipedia.org', similarity: Math.floor(matchedPercent * 0.6), title: 'Wikipedia — Related Article' },
        { url: 'scholar.google.com', similarity: Math.floor(matchedPercent * 0.4), title: 'Academic Publication (2022)' },
      ] : [],
      isDemo: true,
    };
  },
};

// ─── Utility: format date ─────────────────────────────────────────────────────
function formatDate(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// ─── Utility: word count ──────────────────────────────────────────────────────
function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

// ─── Tool color/icon map ──────────────────────────────────────────────────────
const TOOL_META = {
  Paraphraser:        { icon: '⟳', class: 'tool-icon-blue', badge: 'badge-primary' },
  'AI Humanizer':     { icon: '☺', class: 'tool-icon-purple', badge: 'badge-purple' },
  'Grammar Fixer':    { icon: '✓', class: 'tool-icon-green', badge: 'badge-success' },
  'Email Writer':     { icon: '✉', class: 'tool-icon-amber', badge: 'badge-warning' },
  'Plagiarism Checker':{ icon: '⊗', class: 'tool-icon-pink', badge: 'badge-pink' },
  Templates:          { icon: '⊟', class: 'tool-icon-cyan', badge: 'badge-cyan' },
};

// ─── Init on DOM ready ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFAQ();
  initAppSidebar();
  renderUserTopbar();

  // Highlight active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-links a, .mobile-nav-panel a').forEach(a => {
    if (a.getAttribute('href') && currentPath.endsWith(a.getAttribute('href').split('/').pop())) {
      a.classList.add('active');
    }
  });

  // Logout buttons
  document.querySelectorAll('[data-action="logout"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      Auth.logout();
    });
  });

  // Copy buttons with data-copy attribute
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.copy);
      if (target) copyText(target.textContent || target.value, btn);
    });
  });
});
