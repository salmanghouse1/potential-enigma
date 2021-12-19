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

        console.log(answers);
        writeToFile(fileName, answers);


    });





}




init();

//    writeToFile(fileName, initAnswers)
// return initAnswers

// }).then(collabData => {
//     console.log('data1' + collabData)


//     // writeToFile(fileName, collabData)

//     return handlecollabQuesitons(promptCollabQuestion)
//         // use collab data
// }).then((promptCollabData) => {

//     // writeToFile(fileName, promptCollabData)
//     console.log('data2' + promptCollabData)
//     return promptEnterCollabName(promptCollabData);

// }).then((userData) => {
//     console.log('userData in prompt Collab', userData)
//     writeToFile(fileName, userData)
// })

// async function promptEnterCollabName(initanswers) {

//     let answers = {};
//     for (let i = 0; i < parseInt(initanswers.numberOfCollaborators); i++) {
//         answers = await inquirer.prompt([{
//             type: "input",
//             name: `collabUser${[i]}`,
//             message: `Enter User ${i + 1} Name`
//         }]);
//         collaboratorAnswers.push(answers);
//     }
//     return collaboratorAnswers;
// }

// // function promptAndAddIfNeccessary() {
// //     inquirer.prompt([{
// //         type: 'confirm',
// //         name: 'collabStatus',
// //         message: 'Would you like to enter some collabs?',
// //         when: () => {
//             if (collabStatust) {
//                 inquirer.prompt([{}])
//             } else {
//                 return 'No Collaborators';
//             }
//         }
//     }, ])
// }




// async function addCollab(colabstatusVar) {
//     let collaboratorsArray = [];
//     let answers = {};
//     console.log(colabstatusVar)
//     if (colabstatusVar === 'Yes') {

//         answers = await inquirer.prompt([{

//             // prompting user for description
//             type: 'input',
//             name: `
// Collab `,
//             message: 'Enter Collab Name',
//             validate: Collab => {
//                 if (Collab) {
//                     console.log("value accepted")

//                     return true
//                 } else {
//                     console.log("Enter some value")

//                     return false;
//                 }
//             }
//         }]);
//     }
//     collaboratorsArray.push(answers);


//     return answers;
// }

// add a collab


// function promptCollab() {
//     // prompting user for installlation instructions
//     const promptAnswerCollab = inquirer.prompt([{
//         type: 'list',
//         name: 'collabStatus',
//         choices: ['Yes', 'No'],
//         message: 'Enter collabs?'
//     }])

// }

// init().then((initAnswers) => {
//     // add a collab
//     console.log('line 103' +
//         initAnswers.collabStatus)
//     promptAndAddIfNeccessary()
// }).then((answers) => {})abStatus)
//     promptAndAddIfNeccessary()
// }).then((answers) => {})