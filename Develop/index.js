// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project:'
    },
    {   type: 'input',
        name: 'install',
        message: 'Add installation instructions:',

    },
    {
        type: 'input',
        name: 'useinfo',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contguide',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
