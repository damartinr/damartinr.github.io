document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("lang-toggle");
  const dropdown = document.querySelector("#lang-dropdown .dropdown-menu");
  const dropdownItems = document.querySelectorAll("#lang-dropdown .dropdown-item");

  if (!toggle || !dropdown) return;

  const path = window.location.pathname;
  let currentLang = path.startsWith("/es") ? "es" : "en";

  // Show globe symbol
  toggle.textContent = "🌐";

  // Hover shows dropdown
  toggle.addEventListener("mouseenter", () => {
    dropdown.classList.add("show");
  });
  toggle.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });
  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("show");
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });

  // Click on a language to switch
  dropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetLang = item.getAttribute("data-lang");
      if (targetLang === currentLang) return;

      localStorage.setItem("preferredLang", targetLang);

      let newPath;
      if (path.startsWith("/en") || path.startsWith("/es")) {
        newPath = path.replace(/^\/(en|es)/, `/${targetLang}`);
      } else {
        newPath = `/${targetLang}${path}`;
      }

      window.location.href = newPath;
    });
  });

  // Click toggle on small screens
  toggle.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
