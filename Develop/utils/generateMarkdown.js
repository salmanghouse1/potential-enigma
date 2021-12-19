// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const inquirer = require("inquirer");
// Title Question



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`

    } else if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`



    } else if (license === 'IBM') {

        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`

    } else if (license === 'GNU') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`

    } else if (license === 'Creative Commons') {
        return `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)]`

    }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache 2.0') {
        return `(https://opensource.org/licenses/Apache-2.0)`

    } else if (license === 'MIT') {

        return `(https://opensource.org/licenses/${license})`


    } else if (license === 'Creative Commons') {
        return `(http://creativecommons.org/publicdomain/zero/1.0/)`

    } else if (license === 'IBM') {
        return `(https: //opensource.org/licenses/IPL-1.0)`

    } else if (license === 'GNU') {
        return `(https://www.gnu.org/licenses/gpl-3.0)`

    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseData) {

    const licenseBadge = renderLicenseBadge(licenseData);
    const licenseLink = renderLicenseLink(licenseData);
    const licenseBadgeWithLink = licenseBadge + licenseLink



    return licenseBadgeWithLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


    const string = `#${ data.title }

${ renderLicenseSection(data.license) }

## Table Of Contents
[Description](##description)

[Installataion Guide](##installation-guide)

[Usage](##usage)

[Credits](##credits)

[Instructions](##instructions)

[Contributions](##contributions)

[User Info](##user-info)

[License](##license)


[Github Username](##github-username)


[Questions](##questions)

## Description
${ data.description }

## Installation Guide
${ data.installed }

## Usage
${ data.usage }

## Credits
${ data.userInfo }

## Instructions
${ data.testInstructions }

## Contributions
${ data.contribution }

## User Info
${ data.userInfo }

## Info URL
    [Info URL](${ data.infoUrl })

## License

## This Product has the ${ data.license }
License.


${ renderLicenseSection(data.license) }

## Github Username

[${data.githubUsername}](https://github.com/${data.githubUsername})

## Questions

To reach me contact my email at ${data.email}

`

    return string

}



module.exports =
    generateMarkdown;
generateMarkdown;