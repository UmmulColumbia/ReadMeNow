// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown'); 
// an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a short description explaining the what, why, and how of your project.',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Provide instructions and examples for use. Include screenshots as needed.',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'If you would like other developers to contribute, describe how they can do so.',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Provide examples on how to run tests for your application.',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub username:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your email address:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            //added license options
            choices: [
              'MIT',
              'GNU General Public License v3.0',
              'Apache License 2.0',
              'BSD 2-Clause "Simplified" License',
              'BSD 3-Clause "New" or "Revised" License',
              'Eclipse Public License 2.0',
              'No License'
            ]
          }
      

 
];

// a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile('README.md', generateMarkdown(answers));
      console.log('Successfully created README.md');
    }).catch(error => console.error('An error occurred:', error));
  }

// Function call to initialize app
init();








