// TODO: Include packages needed for this application
// Inluded rquire and inquirer packeages
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const stream = require('stream')


const collabNameVar = '';

collaboratorAnswers = [];

var AyyAnswers = [];

var CollabPrompt = [];

var CollabUsers = [];

const fileName = 'README.md';

// collabNameEnterQu1estion = [{
//     type: 'input',
//     name: 'collabName',
//     message: 'Enter Collab Name',
//     validate: collabName => {
//         if (collabName) {
//             console.log('value accepted' + CollabName)
//             return true
//         } else {
//             console.log("Enter A value")
//             return false;
//         }
//     }
// }]

// function promptEnterCollabName() {
//     const collabNameVar = inquirer.prompt(collabNameEnterQuestion)
//     return collabNameVar;
// }





// TODO: Create an array of questions for user input
const questionsArray = [{
        type: 'input',
        name: 'title',
        message: 'What is your title of readme?',
        validate: title => {
            if (title) {

                return true;
            } else {
                console.log("Please Enter Something For A Title")
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'description',
        message: "Enter your Description",
        validate: description => {
            if (description) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Enter Contribution Guidelines',
        validate: contribution => {
            if (contribution) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }

    },

    {
        // prompting user for description
        type: 'input',
        name: 'userInfo',
        message: "Enter User Info",
        validate: userInfo => {
            if (userInfo) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }
    },
    {
        // prompting user for installlation instructions
        type: 'input',
        name: 'installed',
        message: "Enter Installation Instructions",
        validate: installed => {
            if (installed) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }
    }, {
        // prompting user for installlation instructions
        type: 'input',
        name: 'instructions',
        message: 'Enter Test Instructions',
        validate: instructions => {
            if (instructions) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }

    },
    {
        // prompting user for installlation instructions
        type: 'input',
        name: 'infoUrl',
        message: 'What is your user info url?',
        validate: infoUrl => {
            if (infoUrl) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }


    },

    {
        // prompting user for installlation instructions
        type: 'list',
        choices: ['Apache 2.0', 'GNU', 'IBM', 'MIT', 'Creative Commons'],
        name: 'license',
        message: 'What is your license type?',
        validate: license => {
            if (license) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }
    },
    {
        // prompting user for installlation instructions
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?',
        validate: githubUsername => {
            if (githubUsername) {

                return true;
            } else {
                console.log("Please Enter Something")
                return false;
            }
        }



    }, {
        // prompting user for installlation instructions
        type: 'input',
        name: 'email',
        message: 'What is your contact email?',
        validate: function(email) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },




];



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), generateMarkdown(data))


    // fs.writeFile(fileName, data, (err) => {
    //     if (err) throw err
    //         //  })
    // })
}



// TODO: Create a function to initialize app

async function questions() {

    const answers = await inquirer.prompt(questionsArray);
    return answers;
}


async function init() {
    questions().then((answers) => {

        writeToFile(fileName, answers);
        console.log("Readme generated...Check README.md")

    });

}




init();