// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const inquirer = require("inquirer");
// Title Question
let renderTitle = (question) => {
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: question
    }]).then(answers => {
        console.log(answers.title);
    })
}

let renderDescription = (question) => {
    inquirer.prompt([{
        type: 'input',
        name: 'description',
        message: question
    }]).then(answers => {
        console.log(answers.title + " " +
            answers.description);
    })
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    `;


}

module.exports = { generateMarkdown, renderTitle, renderDescription };