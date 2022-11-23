// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const readmeContent = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project:',
        validate: (value)=>{ if(value){return true} else {return 'Give the project a title to continue'}}
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
        name: 'contribution',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type:',
        choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
]).then(({
    title,
    description,
    install,
    useinfo,
    contribution,
    test,
    license,
    git,
    email,
})=>{
const template = `# ${title}

* [Installation](#install)
* [Usage](#useinfo)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
# Installation
${install}
## Usage
${useinfo}
## Contribution
${contribution}
## Test Info
${test}
## License
${license}

# Contact
* GitHub :${git}
* Email :${email}`;

writeToFile(title, template);
}
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./${fileName.toLowerCase().split(' ').join('')}.md`, data)
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
