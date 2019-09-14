const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

console.log(chalk.blue.inverse('Successfully ran app.js!'));

//customize yargs
yargs.version('1.0.1');

const addNote = (argv) => {
    notes.addNote(argv.title,argv.body);
}

const removeNote = (argv) => {
    console.log('Remove a note with title: ' + argv.title);
    notes.removeNote(argv.title);
}

const listNotes = () => {
    console.log('List notes');
    notes.listNotes();
}

const readNote = () => {
    console.log('Read a note');
}

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        //creating new properties for the command
        title: {
            describe: 'Title of the note',
            demandOption: true, //compulsory 
            type: 'string', //of type string
        }, 
        body: {
            describe: 'Body of your note',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv)=> addNote(argv),
});

// Create Remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    builder: {
        //creating title property for remove command
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string',
        }
    },
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

//its important to first parse the arguments with yargs, otherwise yargs does not parse them implicitly.
yargs.parse()



