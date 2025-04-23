const { app, BrowserWindow, session } = require("electron");
const path = require("path");

const EXTENSION_PATH = path.join(__dirname, "mi-extension");
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    const userAgent =
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
    win.loadURL("https://web.whatsapp.com", { userAgent });
}

app.whenReady().then(async () => {
    await session.defaultSession.loadExtension(EXTENSION_PATH, { allowFileAccess: true });

    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
