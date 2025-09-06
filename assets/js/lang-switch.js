document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('lang-switch');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();

    var currentPath = window.location.pathname;
    var reLang = /^\/(fa|en)(\/|$)/;
    var newUrl = '';

    if (reLang.test(currentPath)) {
      // اگر fa بود بکنش en و برعکس
      newUrl = currentPath.replace(reLang, function (_, lang, sep) {
        return '/' + (lang === 'fa' ? 'en' : 'fa') + sep;
      });
    } else {
      // اگر هیچ پیشوندی نبود، پیش‌فرض ببر fa
      newUrl = '/fa' + currentPath;
    }

    // پاک‌سازی // اضافی
    window.location.href = newUrl.replace(/\/{2,}/g, '/');
  });
});
