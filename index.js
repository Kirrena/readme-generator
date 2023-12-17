const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = ["What is the title of your project?", "What is the description?", 
"How to install?", "How to use?", "What license is the project covered under?", 
"What tests can be performed?", "What is you gitHub username?", "What is your e-mail address?"];

//destructuring array of questions
const [title, description, installation, usage, license, tests, github, email ] = questions;

  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: title,
    },
    {
      type: 'input',
      name: 'description',
      message: description,
    },
    {
      type: 'input',
      name: 'installation',
      message: installation,
    },
    {
      type: 'input',
      name: 'usage',
      message: usage,
    },
    {
      type: 'input',
      name: 'license',
      message: license,
    },
    {
      type: 'input',
      name: 'tests',
      message: tests,
    },
    {
      type: 'input',
      name: 'github',
      message: github,
    },
    {
      type: 'input',
      name: 'email',
      message: email,
    },
  ])
  .then((response) => {
    const fileName = 'readme.md';
    const data = generateMarkdown(response);
    writeToFile(fileName,data)
  });
  

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Readme is ready')
    )
}


// function to initialize program
function init() {
    
}

// function call to initialize program
init();
