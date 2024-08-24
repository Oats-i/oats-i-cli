#!/usr/bin/env node
require('colors')
const readLineSync = require("readline-sync")
const path = require('path')
const fse = require('fs-extra')

const NO_CHOICE_MADE = -1
const CURR_DIR = process.cwd();
const templatesDir =  path.join(__dirname,'../templates')
const templates = fse.readdirSync(templatesDir)

if (!templates.length) {
   console.log('no template to choose from , templates folder is empty');
   process.exit(0)
}

const confirmCreateDirectory = readLineSync.keyInYN(`This CLI will set up an Oats~i app for you in the current directory '${CURR_DIR}'\nConfirm to proceed`);

if (confirmCreateDirectory) {
    //taking the first index
   const template = templates[0];
   const source = path.join(templatesDir, template);
   //not using project name
   const destination = path.join(CURR_DIR, "");
   fse.copy(source, destination)
     .then(() => {

        console.log(`Files transferred to ${destination}.\nInstalling dependencies`.blue)
        //Now, do npm install (other example)
        const shell = require("shelljs");
        //navigate to dir
        shell.cd(destination);
        //install Oats~i so always at latest
        shell.exec("npm i oats-i");
        //install other dependencies
        shell.exec("npm i");
        console.log(`Successfully set up Oats~i app at ${destination}`.green)
     })
     .catch(err => console.error(err));
 } else {
   console.log('Process aborted. Exiting');
 }