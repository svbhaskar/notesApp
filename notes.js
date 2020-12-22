const chalk = require('chalk');
const fs = require('fs');

let fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'));
    }   catch(err) {
        return [];
    }
} 


let addingNote = (title, body) => {
    let notes = fetchNotes();

    let note = {
        title,
        body
    };

    let double = notes.filter((note) => note.title === title);

    //! checking if the Note Title is EMPTY
    if(double.length === 0) {
        notes.push(note);

        fs.writeFileSync("notes.txt", JSON.stringify(notes));

        logNote(note);
    }
    else {
        console.log(chalk.bgRed("Tile already exists.!!!"));
    }
}

let removeNote = (title) => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter((note) => note.title !== title);

    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

    let readNote = (title) => {
        let notes = fetchNotes();
        let filteredNotes = notes.filter((note) => note.title === title);
        logNote(filteredNotes[0]);
    }

    let listAll = () => {
        let notes = fetchNotes();

        notes.forEach((note) => logNote(note));
    }

    let logNote = (note) => {
        console.log("---------------------------------");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }

    let save_note = (note) => {
        let dataJSON = JSON.stringify(note);
        fs.writeFileSync('notes.json',dataJSON);
    }

    module.exports = {
        addingNote,
        removeNote,
        readNote,
        listAll
    }