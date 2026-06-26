const {contextBridge, ipcRenderer} = require('electron')

console.log('CARREGOU O PRELOAD')

contextBridge.exposeInMainWorld('api',{
    login: function(email, password){
    console.log('3. CHEGUEI NO PRELOAD')

    return ipcRenderer.invoke('login', email, password)

}

})

