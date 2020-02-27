const electron      = require('electron');
const url           = require('url');
const path          = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for the application to be ready
app.on('ready', function(){
  // Create a new window
  mainWindow = new BrowserWindow({});
  // Load our HTML into the mainWindow
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes : true
  }));
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert the Menu
  Menu.setApplicationMenu(mainMenu);
});

// Create a menu template
const mainMenuTemplate = [
  {
    label:'Asfalto Ascari'
  }
];

// NPM is required, run npm start to run the program
