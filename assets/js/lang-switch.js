// assets/js/lang-switch.js
(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var input = document.getElementById('lang-toggle-input');
    if (!input) return;

    // خواندن دیتا از HTML
    var base    = input.getAttribute('data-base') || '';
    var pageUrl = input.getAttribute('data-page-url') || window.location.pathname;
    var current = input.getAttribute('data-current-lang') || (document.documentElement.lang || 'en');
    var trans   = input.getAttribute('data-translation-url') || '';

    // نرمال‌سازی base و مسیر
    // مثال: base="/mysite" یا ""  — همیشه بدون اسلش انتهایی
    if (base !== '' && base.charAt(base.length - 1) === '/') base = base.slice(0, -1);

    // pageUrl در جکیل معمولاً بدون base است و با "/" شروع می‌شود
    if (pageUrl === '') pageUrl = '/';

    // اگر ترجمه‌ی صریح داری، همان را برو
    function go(u) {
      // اگر trans با http شروع شود، مستقیم می‌رویم؛ وگرنه base را اضافه می‌کنیم
      if (/^https?:\/\//i.test(u)) {
        window.location.href = u;
      } else {
        // اطمینان از اسلش ابتدایی
        if (u.charAt(0) !== '/') u = '/' + u;
        var finalUrl = (base || '') + u;
        // جلوگیری از دابل اسلش (به‌جز بعد از http(s):// که نداریم)
        finalUrl = finalUrl.replace(/\/{2,}/g, '/');
        // اگر base خالی بود و نتیجه شد "/" + "/"، باز هم یک بار پاکسازی کافیست
        window.location.href = finalUrl;
      }
    }

    // تشخیص زبان مقصد
    function oppositeLang(lang) { return (lang === 'fa') ? 'en' : 'fa'; }

    input.addEventListener('change', function () {
      // اولویت با translation صریح
      if (trans && trans.length > 0) {
        go(trans);
        return;
      }

      // ساخت مسیر بر اساس پیشوند
      // نمونه ورودی‌های محتمل: "/en/foo/", "/fa/foo/", "/foo/"
      var path = pageUrl;

      // اگر با "/en/" یا "/fa/" شروع می‌شود، جایگزین کن
      if (path.indexOf('/fa/') === 0) {
        path = '/en/' + path.slice(4); // حذف "/fa/" → افزودن "/en/"
      } else if (path === '/fa') {
        path = '/en';
      } else if (path.indexOf('/en/') === 0) {
        path = '/fa/' + path.slice(4);
      } else if (path === '/en') {
        path = '/fa';
      } else {
        // اگر هیچ پیشوندی ندارد، فقط جلویش زبان مقابل را بگذار
        path = '/' + oppositeLang(current) + (path.charAt(0) === '/' ? path : '/' + path);
      }

      go(path);
    });
  });
})();
