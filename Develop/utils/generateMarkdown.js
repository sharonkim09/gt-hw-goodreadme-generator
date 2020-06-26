// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description 
${data.description}

## Table of Contents
  * [Installation](#installation})
  * [Test](#test)
  * [Usage](#usage)
  * [Contribution](#contribution)
  
## Installation 
${data.installation}

## Test 
${data.test}

## Usage 
* [Link to Github Repo](https://github.com/${data.username})

${data.usage}

## Contribution 
${data.contribution}
`;
}

module.exports = generateMarkdown;
