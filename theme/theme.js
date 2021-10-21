// function to set a cookie (you'll find loads of versions online)
function setCookie(name, value, daysToLive) {
  var cookie = name + "=" + encodeURIComponent(value);
  if(typeof daysToLive === "number") {
    cookie += "; max-age=" + (daysToLive*24*60*60);
  }
  document.cookie = cookie;
}

// function to get a cookie value from it's name
function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if(name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

// setting the theme as a class in the html element
function setTheme(theme) {
  // document.documentElement is the html element in JS
  document.documentElement.classList.remove('theme--light', 'theme--dark', 'theme--funky');
  document.documentElement.classList.add(theme);
}

// listening to load events, when the page finishes loading
window.addEventListener('load', function () {

  // reading the reference to the theme selector form
  const form = document.getElementById("theme-selector");

  // reading the current theme
  let currentTheme = getCookie('theme');

  // it may be not set, yet, so fallback to default
  currentTheme = currentTheme == null ? 'theme--light' : currentTheme;

  // set the theme
  setTheme(currentTheme);

  // select the appropriate radio button
  form.querySelector("input[value="+currentTheme+"]").setAttribute('checked', 'true');

  // listen to the form changes
  form.addEventListener("change", function() {
    // get the radio buttons value, which is the theme class name (arbitrarily)
    let theme = form.querySelector("input[name=theme]:checked").value;

    // set the cookie
    setCookie('theme', theme);

    // set the theme
    setTheme(theme);
  });
});
