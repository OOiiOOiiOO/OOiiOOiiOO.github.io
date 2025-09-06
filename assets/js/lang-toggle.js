document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("lang-switch");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const currentLang = document.documentElement.lang || "en";
    const pageUrl = window.location.pathname;

    // الگوی زبان موجود در URL (مثلاً /fa/... یا /en/...)
    const reLang = /^\/(fa|en)(\/|$)/;
    let newUrl = "";

    if (reLang.test(pageUrl)) {
      // اگر URL زبان داره → جایگزین کنیم
      newUrl = pageUrl.replace(reLang, function (_, lang, sep) {
        return "/" + (lang === "fa" ? "en" : "fa") + sep;
      });
    } else {
      // اگر URL زبان نداره → پیش‌فرض بزنیم
      const opposite = currentLang === "fa" ? "en" : "fa";
      newUrl = "/" + opposite + pageUrl;
    }

    window.location.href = newUrl.replace(/\/{2,}/g, "/");
  });

  // مقدار اولیه روی دکمه
  const currentLang = document.documentElement.lang || "en";
  btn.textContent = currentLang === "fa" ? "EN" : "FA";
});
