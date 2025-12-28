(function () {
  // Do nothing if user already chose a language
  if (localStorage.getItem("preferredLang")) return;

  const lang = navigator.language || navigator.userLanguage;

  let targetLang = "en";
  if (lang && lang.startsWith("es")) {
    targetLang = "es";
  }

  localStorage.setItem("preferredLang", targetLang);

  // Redirect only if not already on a language path
  if (!window.location.pathname.startsWith(`/${targetLang}`)) {
    window.location.pathname = `/${targetLang}/`;
  }
})();
