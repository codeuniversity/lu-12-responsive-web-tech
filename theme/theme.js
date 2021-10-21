window.addEventListener('load', function () {
  const form = document.getElementById("theme-selector");

  form.addEventListener("change", function() {
    let theme = form.querySelector("input[name=theme]:checked").value;
    document.cookie = "theme=" + theme + "; SameSite=None; Secure;";
    document.documentElement.classList.remove('theme--light', 'theme--dark', 'theme--funky');
    document.documentElement.classList.add(theme);
  });
});
