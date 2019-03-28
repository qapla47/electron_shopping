const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', () => {
  // create new window
  mainWindow = new BrowserWindow({}); // no config needed
  // load html into window
  mainWindow.loadURL(url.format({
    // file://dirname/mainWindow.html
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
});