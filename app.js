const chalk = require('chalk');
const yargs = require('yargs');
console.log(chalk.blue.inverse('Success!'));

//customize yargs
yargs.version('1.0.1');

const addNewNote = (argv) => {
   console.log(`Adding a new note with title: ${chalk.cyan.bold.underline(argv.title)} and body: ${chalk.cyan.underline.bold(argv.body)}`);
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
    handler: (argv)=>addNewNote(argv),
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

//its important to first parse the arguments with yargs, otherwise yargs does not parse them implicitly.
yargs.parse()



