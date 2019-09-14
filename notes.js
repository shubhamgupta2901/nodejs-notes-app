const fs = require('fs');
const chalk = require('chalk');
const notesFile = 'data.json';


/**
 * Will read the data file and append the new note in it.
 * This is defensive code, which means if the file did not exist, it will recieve an empty array from the helper function,
 * push the new content, and ask another helper function to write the contents in the file.
 * To prevent duplicate notes being added we will check if the note with title already exists, if it does, simply replace its body.
 * @param {*} title title of the note
 * @param {*} body body of the note
 */
const addNote = (title, body)=> {
    const notes = loadNotes();
    const indexOfNoteWithSameTitle = notes.findIndex(note => note.title === title);
    //If the note with same title exists, do not write the new note.
    if(indexOfNoteWithSameTitle !== -1)
        console.log(chalk.red.inverse('Note with same title exists!'))
    else 
        notes.push({title,body});
    saveNotes(notes);
}


/**
 * Read the file and return the JSON inside it as a JS object.
 * If the file does not exist yet return empty array.
 */
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync(notesFile);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        console.log(error+'. Returning empty Array.');
        return [];
    }
}

/**
 * Takes a js array to be written in the file, 
 * converts it to JSON and writes it in the file.
 * @param {} notes the js object to be written in the file. 
 * NOTE: this function does not append the data in file, it replaces the existing content.
 */
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    try {
        fs.writeFileSync(notesFile, dataJSON);
        console.log(chalk.blue.inverse('Note successfully saved!'));
    } catch (error) {
        console.log(chalk.red.inverse('Could not write note.'+ error));
    }  
}

module.exports = {addNote};