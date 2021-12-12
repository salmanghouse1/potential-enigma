// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const inquirer = require("inquirer");
// Title Question
let renderReadme = () => {


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
    console.log("GENERATE MARKDOWN" + data.title)
    return `# ${data.title}</br>
    ------------------------
    ## Description</br>
    ${data.description}</br>
    -------------------------
    ## Installation Guide
    ${data.installed}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.userInfo}
    `


}

module.exports = {
    generateMarkdown
};