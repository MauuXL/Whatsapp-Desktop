document.body.classList.toggle("pallete");
// Links CSS
let light = document.createElement("link");
light.rel = "stylesheet";
light.type = "text/css";
light.href = chrome.runtime.getURL("../css/light.css");
document.head.appendChild(light);

let dark = document.createElement("link");
dark.rel = "stylesheet";
dark.type = "text/css";
dark.href = chrome.runtime.getURL("../css/dark.css");
document.head.appendChild(dark);

// Verificar tema en localstorage
let lightThemeOn = parseInt(localStorage.getItem("whatsapp-dark-theme-light")) || 1;

function statusDarkThemeOn() {
  //let icon = document.querySelector(".theme-toggle-icon");

  document.body.classList.remove("light-theme", "dark-theme", "dark");

  switch (lightThemeOn) {
    case 1:
      //if (icon) icon.style.transform = "rotate(0deg)";
      break;
    case 2:
      document.body.classList.add("dark");
      //if (icon) icon.style.transform = "rotate(90deg)";
      break;
    case 3:
      document.body.classList.add("light-theme");
      //if (icon) icon.style.transform = "rotate(180deg)";
      break;
    case 4:
      document.body.classList.add("dark-theme", "dark");
      //if (icon) icon.style.transform = "rotate(270deg)";
      break;
    default:
      break;
  }
}
//Repite la función cada meido segundo
let duration = setInterval(statusDarkThemeOn, 500);

setTimeout(() => {
  clearInterval(duration);
}, 60000);
statusDarkThemeOn();
