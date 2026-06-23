const { app, BrowserWindow } = require("electron")
const path = require("path")

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "logo", "logo.png")
    })

    janela.loadFile("public/login.html")
}

if (process.platform === "win32") {
    app.setAppUserModelId("com.streaming.app")
}

app.whenReady().then(criarJanela)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        criarJanela()
    }
})