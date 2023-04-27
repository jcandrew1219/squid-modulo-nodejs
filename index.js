// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//console.log(generateMarkdown());

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation information: '
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter usage information: "
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Enter contribution guidelines: "
    },
    {
        type: 'input',
        name: 'test',
        message: "Enter test instructions: "
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license: ',
        choices: ['MIT', 'Apache 2.0', 'GPL']
    },
    {
        type: 'input',
        name: 'user',
        message: "Enter github username: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email: "
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')); 
}


// TODO: Create a function to initialize app
function init() {
    fs.appendFile('README.md', ' ', (err) => 
    err ? console.error(err) : console.log ('ReadMe created!')); 
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile('./README.md', data);
        })
}

// Function call to initialize app
init();