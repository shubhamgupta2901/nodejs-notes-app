const chalk = require('chalk');
console.log(chalk.blue.inverse('Success!'));

const command = process.argv[2];

switch(command){
    case 'add': 
        console.log('Add note');
        break;
    case 'remove':
        console.log('Remove note');
        break;
    default:
        console.log(chalk.red('Unknown command!'));
        break;
}