// Llamando las funciones
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        addToggleButton();
        addEyeButton();
        addPopTooltip();
    });
} else {
    addToggleButton();
    addEyeButton();
    addPopTooltip();
}
