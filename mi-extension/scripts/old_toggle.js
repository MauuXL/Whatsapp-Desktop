let toggleButton = document.createElement("div");
toggleButton.id = "toggleButton";
toggleButton.classList.add(
    "_ajv7",
    "x1n2onr6",
    "x1okw0bk",
    "x5yr21d",
    "x14yjl9h",
    "xudhj91",
    "x18nykt9",
    "xww2gxu",
    "xlkovuz",
    "x16j0l1c",
    "x1786zcw",
    "xyklrzc",
    "x1mh8g0r",
    "x1anpbxc",
    "x18wx58x",
    "xo92w5m"
);

let toggleButtonOn = `<button
  class='x78zum5 x6s0dn4 x1afcbsf x1heor9g x1y1aw1k x1sxyh0 xwib8y2 xurb0ha'
  type='button'
  aria-label='Toggle theme'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" class="theme-toggle-icon x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4 xvy4d1p xxk0z11" height="1em" width="1em" fill="currentColor">
        <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
     </svg>
</button>`;

toggleButton.style.background = "rgba(0,0,0,0)";
toggleButton.innerHTML = toggleButtonOn;

// Agregar evento de clic izquierdo al toggleButton
toggleButton.addEventListener("click", (e) => {
    if (e.button === 0) {
        // Solo clic izquierdo
        lightThemeOn = (lightThemeOn % 4) + 1;
        statusDarkThemeOn();
        toggleButton.style.background = "var(--menu-bar-item-background-active)";
        setTimeout(() => {
            toggleButton.style.background = "rgba(0,0,0,0)";
        }, 200);
        localStorage.setItem("whatsapp-dark-theme-light", lightThemeOn);
    }
});

// Agregando toggle
function addToggleButton() {
    let targetElement = document.querySelector(".xyorhqc");
    if (targetElement) {
        targetElement.insertBefore(toggleButton, targetElement.firstChild);
    } else {
        setTimeout(addToggleButton, 1000);
    }
}
