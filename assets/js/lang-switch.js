document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('lang-toggle-input');
  if (!input) return;

  var currentLang = input.getAttribute('data-current-lang') || 'en';

  input.addEventListener('change', function () {
    var pageUrl = input.getAttribute('data-page-url') || window.location.pathname;
    var translationUrl = input.getAttribute('data-translation-url') || '';
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

    window.location.href = newUrl.replace(/\/{2,}/g, '/');
  });
});
