// TODO: Include packages needed for this application
// Inluded rquire and inquirer packeages
const fs = require('fs');
const inquirer = require('inquirer');
const lib = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ['What is your title of readme?', "Enter your Description", "Enter Installation Instructions", "Enter User Info", 'Enter Contribution Guidelines', 'Enter Test Instructions', 'What is your user info url?', 'number of collaborators'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
            //  })
    })
}

// TODO: Create a function to initialize app
function init(questions) {
    // prompting user
    inquirer.prompt([{
            // prompting user for title
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: title => {
                if (title) {

                    return true;
                } else {
                    console.log("Please Enter Something For A Title")
                    return false;
                }
            }
        }, {
            // prompting user for description
            type: 'input',
            name: 'description',
            message: questions[1]
        }, {
            // prompting user for installlation instructions
            type: 'input',
            name: 'installation',
            message: questions[2]
        }, {
            // prompting user for number of collabs
            type: 'input',
            name: 'numberOfCollaborators',
            message: 'Enter Number of Collabs',
            validate: numberOfCollaborators => {
                    if (numberOfCollaborators > 0 && !numberOfCollaborators == "") {
                        return true
                    } else {
                        console.log('Enter a number greater than 0 or dont enter a string')
                        return false;
                    }
                }
                // {
                //     // prompting user for contribution guidelines
                //     type: 'input',
                //     name: 'contribution',
                //     message: questions[4]
                // }, {
                //     // prompting user for test info
                //     type: 'input',
                //     name: 'test',
                //     message: questions[5]
                // }])\
                // writeToFile('README.md', lib.generateMarkdown(answers))

        }]).then((answers) => {
            console.log(answers.title)
            for (var i = 0; i < answers.numberOfCollaborators; i++) {
                inquirer.prompt([{
                    type: input,
                    name: `collabUser${[i]}`,
                    message: 'User' + toString(i)
                }]).then(

                    (answers2) => {
                        console.log(answers2.collabUser);
                        return true
                    })

            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }


        })
}
// Function call to initialize app
init(questions);