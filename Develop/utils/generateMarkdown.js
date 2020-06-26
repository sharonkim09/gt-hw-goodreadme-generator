// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}
![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description 
${data.description}

## Table of Contents
  * [Installation](#installation})
  * [Test](#test)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Questions](#questions)
  
## Installation 
${data.installation}

## Test 
${data.test}

## Usage 
${data.usage}

## Contribution 
${data.contribution}

## License
${data.license}

## Questions 
* [Link to Github Repo](https://github.com/${data.username})
* For additional questions, contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
