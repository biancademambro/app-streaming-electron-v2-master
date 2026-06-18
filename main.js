const { app, BrowserWindow } = require("electron")

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800
    })

    janela.loadFile("public/login.html")
}

app.whenReady().then(criarJanela)