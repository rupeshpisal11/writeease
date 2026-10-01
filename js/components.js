/**
 * WriteEase AI — Shared Components
 * Renders navbar, footer, and app layout into pages
 */

const BASE = '/writeease';

function getNavbar(activePage) {
  const user = Auth.isLoggedIn();
  return `
<nav class="navbar" aria-label="Main navigation">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-brand" aria-label="WriteEase AI Home">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#3157D5"/><path d="M8 10h16M8 16h10M8 22h13" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="23" cy="22" r="3" fill="white"/></svg>
      WriteEase AI
    </a>
    <div class="navbar-links">
      <a href="tools.html" ${activePage==='tools'?'class="active"':''}>Tools</a>
      <a href="pricing.html" ${activePage==='pricing'?'class="active"':''}>Pricing</a>
      <a href="faq.html" ${activePage==='faq'?'class="active"':''}>FAQ</a>
    </div>
    <div class="navbar-actions">
      ${user
        ? `<a href="dashboard.html" class="btn btn-ghost btn-sm">Dashboard</a>
           <a href="dashboard.html" class="btn btn-primary btn-sm">Open App</a>`
        : `<a href="login.html" class="btn btn-ghost btn-sm">Log in</a>
           <a href="register.html" class="btn btn-primary btn-sm">Start Free</a>`
      }
      <button class="navbar-toggle" id="navbar-toggle" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-nav" id="mobile-nav" role="dialog" aria-label="Mobile menu">
  <div class="mobile-nav-panel">
    <div class="mobile-nav-header">
      <span style="color:var(--primary);font-weight:700;font-size:17px">WriteEase AI</span>
      <button id="mobile-nav-close" aria-label="Close menu" style="padding:6px;border-radius:8px;background:var(--bg-secondary)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <a href="tools.html">Tools</a>
    <a href="pricing.html">Pricing</a>
    <a href="faq.html">FAQ</a>
    <div class="mobile-nav-divider"></div>
    ${user
      ? `<a href="dashboard.html" style="color:var(--primary);font-weight:700">Open Dashboard →</a>
         <a href="#" data-action="logout">Log out</a>`
      : `<a href="login.html">Log in</a>
         <a href="register.html" style="color:var(--primary);font-weight:700">Start Free →</a>`
    }
  </div>
</div>`;
}

function getFooter() {
  return `
<footer class="footer" aria-label="Site footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-name">
          <svg viewBox="0 0 32 32" fill="none" width="22" height="22"><rect width="32" height="32" rx="8" fill="white" fill-opacity="0.15"/><path d="M8 10h16M8 16h10M8 22h13" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="23" cy="22" r="3" fill="white"/></svg>
          WriteEase AI
        </div>
        <p>Write smarter. Express better.<br>AI-powered writing tools for everyone.</p>
      </div>
      <div class="footer-col">
        <h4>Tools</h4>
        <a href="paraphraser.html">Paraphraser</a>
        <a href="humanizer.html">AI Humanizer</a>
        <a href="grammar.html">Grammar Fixer</a>
        <a href="email.html">Email Writer</a>
        <a href="templates.html">Templates</a>
        <a href="plagiarism.html">Plagiarism Checker</a>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <a href="tools.html">All Tools</a>
        <a href="pricing.html">Pricing</a>
        <a href="faq.html">FAQ</a>
        <a href="login.html">Log in</a>
        <a href="register.html">Sign up</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="refund.html">Refund Policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 WriteEase AI. All rights reserved.</span>
      <div style="display:flex;gap:16px">
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
      </div>
    </div>
  </div>
</footer>`;
}

function getAppSidebar(activePage) {
  const links = [
    { id: 'dashboard', href: 'dashboard.html', icon: svgHome, label: 'Dashboard' },
    { id: 'paraphraser', href: 'paraphraser.html', icon: '⟳', label: 'Paraphraser', emoji: true },
    { id: 'humanizer', href: 'humanizer.html', icon: '☺', label: 'AI Humanizer', emoji: true },
    { id: 'grammar', href: 'grammar.html', icon: '✓', label: 'Grammar Fixer', emoji: true },
    { id: 'email', href: 'email.html', icon: '✉', label: 'Email Writer', emoji: true },
    { id: 'templates', href: 'templates.html', icon: '⊟', label: 'Templates', emoji: true },
    { id: 'plagiarism', href: 'plagiarism.html', icon: '⊗', label: 'Plagiarism Checker', emoji: true },
    { id: 'history', href: 'history.html', icon: svgHistory, label: 'History' },
    { id: 'profile', href: 'profile.html', icon: svgUser, label: 'Profile' },
    { id: 'settings', href: 'settings.html', icon: svgSettings, label: 'Settings' },
  ];
  return `
<div class="app-sidebar" id="app-sidebar" aria-label="App navigation">
  <div class="app-sidebar-logo">
    <svg viewBox="0 0 32 32" fill="none" width="22" height="22"><rect width="32" height="32" rx="8" fill="#3157D5"/><path d="M8 10h16M8 16h10M8 22h13" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="23" cy="22" r="3" fill="white"/></svg>
    WriteEase AI
  </div>
  <nav class="sidebar-nav">
    <div class="sidebar-section-label">Overview</div>
    <a href="dashboard.html" class="sidebar-link ${activePage==='dashboard'?'active':''}">
      ${svgHome} Dashboard
    </a>
    <div class="sidebar-section-label" style="margin-top:12px">AI Tools</div>
    <a href="paraphraser.html" class="sidebar-link ${activePage==='paraphraser'?'active':''}"><span style="font-size:16px;width:18px;text-align:center">⟳</span> Paraphraser</a>
    <a href="humanizer.html" class="sidebar-link ${activePage==='humanizer'?'active':''}"><span style="font-size:16px;width:18px;text-align:center">☺</span> AI Humanizer</a>
    <a href="grammar.html" class="sidebar-link ${activePage==='grammar'?'active':''}"><span style="font-size:16px;width:18px;text-align:center">✓</span> Grammar Fixer</a>
    <a href="email.html" class="sidebar-link ${activePage==='email'?'active':''}"><span style="font-size:16px;width:18px;text-align:center">✉</span> Email Writer</a>
    <a href="templates.html" class="sidebar-link ${activePage==='templates'?'active':''}"><span style="font-size:16px;width:18px;text-align:center">⊟</span> Templates</a>
    <a href="plagiarism.html" class="sidebar-link ${activePage==='plagiarism'?'active':''}"><span style="font-size:16px;width:18px;text-align:center">⊗</span> Plagiarism</a>
    <div class="sidebar-section-label" style="margin-top:12px">Account</div>
    <a href="history.html" class="sidebar-link ${activePage==='history'?'active':''}">${svgHistory} History</a>
    <a href="profile.html" class="sidebar-link ${activePage==='profile'?'active':''}">${svgUser} Profile</a>
    <a href="settings.html" class="sidebar-link ${activePage==='settings'?'active':''}">${svgSettings} Settings</a>
  </nav>
  <div class="sidebar-footer">
    <a href="#" data-action="logout" class="sidebar-link" style="color:var(--error)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      Log out
    </a>
  </div>
</div>
<div class="sidebar-backdrop" id="sidebar-backdrop"></div>`;
}

function getAppMobileNav(activePage) {
  return `
<nav class="app-mobile-nav" aria-label="Mobile app navigation">
  <div class="app-mobile-nav-inner">
    <a href="dashboard.html" class="app-mobile-nav-item ${activePage==='dashboard'?'active':''}">
      ${svgHome} <span>Home</span>
    </a>
    <a href="tools.html" class="app-mobile-nav-item ${activePage==='tools'?'active':''}">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      <span>Tools</span>
    </a>
    <a href="history.html" class="app-mobile-nav-item ${activePage==='history'?'active':''}">
      ${svgHistory} <span>History</span>
    </a>
    <a href="profile.html" class="app-mobile-nav-item ${activePage==='profile'?'active':''}">
      ${svgUser} <span>Profile</span>
    </a>
  </div>
</nav>`;
}

// SVG icons
const svgHome = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const svgHistory = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/><circle cx="12" cy="12" r="3"/></svg>`;
const svgUser = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const svgSettings = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`;
