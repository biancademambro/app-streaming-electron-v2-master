const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")
const database = require("./db")

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: __dirname + "/preload.js"
        },
        icon: path.join(__dirname, "logo", "logo.png")
    })

    janela.loadFile("public/login.html")

    janela.webContents.openDevTools()
}

    

if (process.platform === "win32") {
    app.setAppUserModelId("com.streaming.app")
}

app.whenReady().then(criarJanela)

ipcMain.handle("login", async function(event, email, password) {
    console.log('4. CHEGUEI NO IPC MAIN')
    console.log('EMAIL:', email, 'SENHA:', password)

    const [ rows ] = await database.query("SELECT * FROM users WHERE email = ? AND password = ? AND is_active = 1", [email, password])

    console.log('USUARIO', rows[0])
    
})

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