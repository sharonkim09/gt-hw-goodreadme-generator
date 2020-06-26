// require fs
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const inquirer = require("inquirer");
// require inquirer

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Write a short description of your project?",
    name: "description",
  },
  {
    //   have to let user select several options
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      {
        name: "MIT",
        badge:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
          name: "APACHE 2.0",
          badge:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      },
      {
          name: "GPL 3.0",
          badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      },
      {
          name: "BSD 3",
          badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      },
      {
          name: "None",
          badge: "No License"
      }
    ],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution",
  },
];

// function to write README file
// function writeToFile(fileName, data) {
  // use fs package
//   fs.writeFile("sample.md", "what we want to write", function (err) {
//     if (err) {
//       // console.log("You have an error")
//       throw err;
//     }
//     console.log("Successfully wrote into file!");
//   });
// }

// function to initialize program
function init() {
  // use inquirer package
  inquirer.prompt(questions).then(function (data) {
    // console.log(response);
    fs.writeFile("sample.md", generateMarkdown(data), function (err) {
      if (err) {
        throw err;}
        console.log("Successfully wrote into file!");
      })
          
  });
}
// console.log(response)
// function call to initialize program
// writeToFile();
init();
