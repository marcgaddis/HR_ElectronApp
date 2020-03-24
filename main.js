const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainwindow;

// Listen for app to be ready
app.on("ready", function() {
  //create new window
  mainwindow = new BrowserWindow({});
  // load html int window
  mainwindow.loadURL("https://quiet-plateau-63281.herokuapp.com/");

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Inster menu
  Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
  {
    label: ""
  }
];
