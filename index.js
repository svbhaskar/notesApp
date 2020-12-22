
const yargs = require('yargs'); // Importing yargs from NPM
const notes = require('./notes.js');
const chalk = require('chalk'); // Importing chalk from NPM
const argv = yargs.argv;

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];
// ? Adding a Note
if(command === "add") {
    console.log(chalk.bgGreen("Adding the Note"));
    notes.addingNote(title,body);
}
//? Removing a Note
else if (command === "remove") {
    console.log(chalk.bgRed("Removing Note"));
    notes.removeNote(title);
}
//? Reading a Note
else if (command === "read") {
    console.log(chalk.bgBlue("Reading Note"));
    notes.readNote(title);
}
//? Fetching all the Notes
else if (command === "list") {
    console.log(chalk.bgYellow("Listing all the Notes"));
    notes.listAll();
}
else {
    console.log("Invaild Command!!!!!!");
}