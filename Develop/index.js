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
        "MIT",
        "Apache",
        "GPL",
        "BSD",
        "None"
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
function writeToFile(fileName, data) {
  // use fs package
  fs.writeFile("sample.md", data, function (err) {
    if (err) {
      throw err;
    }
    console.log("Successfully wrote into file!");
  });
}

// function to initialize program
function init() {
  // use inquirer package
  inquirer.prompt(questions).then(function (data) {
    writeToFile("sample.md",generateMarkdown(data))
  });
}

// function call to initialize program
init();
