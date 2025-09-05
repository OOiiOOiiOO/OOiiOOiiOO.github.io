// assets/js/lang-switch.js
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('lang-switch');
  if (!btn) return;

  var pageUrl = btn.getAttribute('data-page-url') || window.location.pathname;
  var currentLang = btn.getAttribute('data-current-lang') || document.documentElement.lang || 'en';
  var defaultLang = btn.getAttribute('data-default-lang') || 'en';
  var translationUrl = btn.getAttribute('data-translation-url') || '';

  // Helper to ensure leading slash
  function ensureLeadingSlash(u){
    if (!u) return u;
    return u.charAt(0) === '/' ? u : '/' + u;
  }

  pageUrl = ensureLeadingSlash(pageUrl);
  translationUrl = translationUrl ? ensureLeadingSlash(translationUrl) : '';

  // Decide target URL
  var targetUrl = '';

  if (translationUrl) {
    targetUrl = translationUrl;
  } else {
    // Simple prefix swap: if /fa/... => /en/...  or /en/... => /fa/...
    var faPrefix = '^/fa(/|$)';
    var enPrefix = '^/en(/|$)';
    var reFa = new RegExp(faPrefix);
    var reEn = new RegExp(enPrefix);

    if (reFa.test(pageUrl)) {
      targetUrl = pageUrl.replace(reFa, '/en$1');
    } else if (reEn.test(pageUrl)) {
      targetUrl = pageUrl.replace(reEn, '/fa$1');
    } else {
      // Page has no lang-specific prefix: send to root of opposite language
      var opposite = (currentLang === 'fa') ? 'en' : 'fa';
      targetUrl = '/' + opposite + pageUrl;
    }
  }

  // Clean double slashes (except protocol)
  targetUrl = targetUrl.replace(/\/{2,}/g, '/');

  // Set href and click handler
  btn.setAttribute('href', targetUrl);

  btn.addEventListener('click', function (e) {
    // Default is navigation; you could do something else here if needed
    // For SPA-like behavior you'd intercept and load content via AJAX
  });

  // Update visible label (in case page.lang changed after render)
  var label = document.getElementById('lang-switch-text');
  if (label) {
    label.textContent = (currentLang === 'fa') ? 'English' : 'فارسی';
  }
});
