document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('lang-toggle');
  if (!btn) return;

  var currentLang = btn.getAttribute('data-current-lang') || 'en';

  btn.addEventListener('click', function () {
    var pageUrl = btn.getAttribute('data-page-url') || window.location.pathname;
    var translationUrl = btn.getAttribute('data-translation-url') || '';
    var reLang = /^\/(fa|en)(\/|$)/;
    var newUrl = '';

    if (translationUrl) {
      newUrl = translationUrl;
    } else if (reLang.test(pageUrl)) {
      newUrl = pageUrl.replace(reLang, function (_, lang, sep) {
        return '/' + (lang === 'fa' ? 'en' : 'fa') + sep;
      });
    } else {
      var opposite = (currentLang === 'fa') ? 'en' : 'fa';
      newUrl = '/' + opposite + pageUrl;
    }

    // پاک‌سازی // اضافی
    window.location.href = newUrl.replace(/\/{2,}/g, '/');
  });
});
