// Función para convertir HEX a RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}
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
            changeRgb.appendChild(inputRgb);
            const colorPicker = document.getElementById("colorPicker");

            colorPicker.addEventListener("input", (e) => {
                const rgb = hexToRgb(e.target.value);
                document.documentElement.style.setProperty("--acent-color", rgb);
            });
            colorPicker.click();
        }
    });
    // Despliega el selector de color
}
