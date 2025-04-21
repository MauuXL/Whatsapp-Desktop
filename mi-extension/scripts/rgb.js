// Función para convertir HEX a RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}
// Despliega el selector de color
toggleButton.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Evitar que se muestre el menú contextual del navegador
  let inputRgb = document.createElement("div");
  inputRgb.innerHTML = `<input type="color" id="colorPicker" style="display: none;">`;
  toggleButton.appendChild(inputRgb);
  const colorPicker = document.getElementById("colorPicker");

  colorPicker.addEventListener("input", (e) => {
    const rgb = hexToRgb(e.target.value);
    document.documentElement.style.setProperty("--acent-color", rgb);
    console.log("Color seleccionado:", rgb);
  });
  colorPicker.addEventListener("blur", () => {
    colorPicker.remove();
  });

  colorPicker.focus();
  colorPicker.click();
});
function addChangeTheme() {
  let changeTheme = document.getElementById("changeTheme");
  let changeRgb = document.getElementById("changeRgb");
  // Agregar evento cambiar entre los 4 temas
  changeTheme.addEventListener("click", (e) => {
    if (e.button === 0) {
      lightThemeOn = (lightThemeOn % 4) + 1;
      statusDarkThemeOn();
      localStorage.setItem("whatsapp-dark-theme-light", lightThemeOn);
    }
  });
  // Despliega el selector de color
  changeRgb.addEventListener("click", (e) => {
    if (e.button === 0) {
      let inputRgb = document.createElement("div");
      inputRgb.innerHTML = `<input type="color" id="colorPicker" style="display: none;">`;
      toggleButton.appendChild(inputRgb);
      const colorPicker = document.getElementById("colorPicker");

      colorPicker.addEventListener("input", (e) => {
        const rgb = hexToRgb(e.target.value);
        document.documentElement.style.setProperty("--acent-color", rgb);
      });
      colorPicker.click();
    }
  });
}
