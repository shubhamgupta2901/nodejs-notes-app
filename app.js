const chalk = require('chalk');
const yargs = require('yargs');
console.log(chalk.blue.inverse('Success!'));

//customize yargs
yargs.version('1.0.1');

const addNewNote = () => {
    console.log('Adding a new note');
}

const removeNote = () => {
    console.log('Remove a note.')
}

const listNotes = () => {
    console.log('List notes');
}

const readNote = () => {
    console.log('Read a note');
}

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: addNewNote,
});

// Create Remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    handler: removeNote,
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: listNotes,
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: readNote,
})

console.log(yargs.argv);



