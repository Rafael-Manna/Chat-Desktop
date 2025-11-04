import {app, BrowserWindow} from 'electron'
const criarJanelap1 = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        maximizable: false,
        minimizable: false,
        title: "Exemplo - Aplicação Desktop",
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })
    janela.loadFile('../app/p1/index.html');
    janela.webContents.openDevTools();
    janela.setMenu(null);
}
const criarJanelap2 = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        maximizable: false,
        minimizable: false,
        title: "Exemplo - Aplicação Desktop",
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })
    janela.loadFile('../app/p2/index2.html');
    janela.webContents.openDevTools();
    janela.setMenu(null);
}
app.whenReady().
    then(() => {
    criarJanelap1()
     criarJanelap2()
         console.log(`Electron Pronto`);
    })
    .catch((erro) => {
    console.error(erro)
    }
    )