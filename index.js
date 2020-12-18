// const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const chalk = require('chalk');
const argv = yargs.argv;

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];

if(command === "add") {
    console.log(chalk.bgGreen("Adding the Note"));
    notes.addingNote(title,body);
}
else if (command === "remove") {
    console.log(chalk.bgRed("Removing Note"));
    note.removeNote(title);
}
else if (command === "read") {
    console.log(chalk.bgBlue("Reading Note"));
    notes.readNote(title);
}
else if (command === "list") {
    console.log(chalk.bgYellow("Listing all the Notes"));
    notes.listAll();
}
else {
    console.log("Invaild Command!!!!!!");
}