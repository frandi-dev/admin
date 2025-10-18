const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  closeWindow: () => ipcRenderer.invoke("close"),
});
