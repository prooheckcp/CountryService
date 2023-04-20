/*
  Built with: https://docusaurus.io/

  This is the config file for this project. You should follow the instructions at: https://github.com/Gamefam/Docusaurus-MoonWave-Template
  
  You should set up the variables under this comment in order for your project to properly get build
*/

//Project related
const PROJECT_NAME = "Inventory System" //The name you want to be displayed
const PROJECT_ROOT = "InventorySystem" //This is basically the repository name
const TAG_LINE = "Cool tagline!" //The Tag Line of the website
const AUTHORS_NAMES = ["First", "Second", "Third", "Fourth"] //Add the authors of the library here

//Page related
const BUTTON_TEXT = "Start Learning! ✨"
const DEVELOPERS_ICON = "https://cdn.discordapp.com/attachments/670023265455964198/983201962826793030/prooheckcpChubby.png"
const LIBRARY_LOGO = "img/GameFam_Studios_Logo.webp" //If you want to add your own library logo you should add it under /static/img and then write the path here

module.exports = {
    projectName: PROJECT_NAME,
    projectRoot: PROJECT_ROOT,
    tagLine: TAG_LINE,
    authors: AUTHORS_NAMES,
    buttonText: BUTTON_TEXT,
    developersIcon: DEVELOPERS_ICON,
    libraryLogo: LIBRARY_LOGO
}