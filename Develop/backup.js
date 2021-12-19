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


const promptCollabQuestion = [{
    type: 'input',
    name: 'numberOfCollaborators',
    message: 'Enter Number of Collabs',
    validate: numberOfCollaborators => {
        if (numberOfCollaborators) {


            return true


        } else {
            console.log("enter a number greater than 0")
            return false;
        }
    }
}];



// TODO: Create an array of questions for user input
const questions = [{
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
        message: "Enter your Description"

    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Enter Contribution Guidelines'


    },

    {
        // prompting user for description
        type: 'input',
        name: 'userInfo',
        message: "Enter User Info",

    },
    {
        // prompting user for installlation instructions
        type: 'input',
        name: 'installed',
        message: "Enter Installation Instructions",

    }, {
        // prompting user for installlation instructions
        type: 'input',
        name: 'instructions',
        message: 'Enter Test Instructions',


    },
    {
        // prompting user for installlation instructions
        type: 'input',
        name: 'infoUrl',
        message: 'What is your user info url?',



    },


];



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), JSON.stringify(data))


    // fs.writeFile(fileName, data, (err) => {
    //     if (err) throw err
    //         //  })
    // })
}



// TODO: Create a function to initialize app

function init(questions) {
    // prompting user
    const initAnswers = inquirer.prompt(questions);
    return initAnswers;

}



async function handlecollabQuesitons(promptCollabQuestion) {
    const collabStatusAnswers = await inquirer.prompt(promptCollabQuestion);
    return collabStatusAnswers;
}

init(questions).then(initAnswers => {


    //    writeToFile(fileName, initAnswers)
    return initAnswers

}).then(collabData => {
    console.log('data1' + collabData)


    // writeToFile(fileName, collabData)

    return handlecollabQuesitons(promptCollabQuestion)
        // use collab data
}).then((promptCollabData) => {

    // writeToFile(fileName, promptCollabData)
    console.log('data2' + promptCollabData)
    return promptEnterCollabName(promptCollabData);

}).then((userData) => {
    console.log('userData in prompt Collab', userData)
    writeToFile(fileName, userData)
})

async function promptEnterCollabName(initanswers) {

    let answers = {};
    for (let i = 0; i < parseInt(initanswers.numberOfCollaborators); i++) {
        answers = await inquirer.prompt([{
            type: "input",
            name: `collabUser${[i]}`,
            message: `Enter User ${i + 1} Name`
        }]);
        collaboratorAnswers.push(answers);
    }
    return collaboratorAnswers;
}

// function promptAndAddIfNeccessary() {
//     inquirer.prompt([{
//         type: 'confirm',
//         name: 'collabStatus',
//         message: 'Would you like to enter some collabs?',
//         when: () => {
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