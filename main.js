const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

//function to create the broser window
const createWindow = () => {
    mainWindow = new BrowserWindow({width: 800, height: 600, resizable: true});
    mainWindow.loadURL('http://localhost:8080');

    //open the dev tools if neccessary
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
      mainWindow = null
    });

    // mainWindow.setMenu(null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
