// TODO: Include packages needed for this application
// Inluded rquire and inquirer packeages
const fs = require('fs');
const inquirer = require('inquirer');
const lib = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ['What is your title of readme?', "Enter your Description"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    // prompting user
    inquirer.prompt([{
            // prompting user for title
            type: 'input',
            name: 'title',
            message: questions[0]
        }, {
            // prompting user for description
            type: 'input',
            name: 'description',
            message: questions[1]
        }])
        .then((answers) => {
            console.log(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

// Function call to initialize app
init(questions);