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
//add base path
const basePath = 'C:/Bootcamp/readme-generator';
const file = 'readme.md';
const fullPath = path.join(basePath, file);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Readme is ready: ' + fullPath)
    )
}


// function to initialize program
function init() {

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
      type: 'checkbox',
      name: 'license',
      message: license,
      choices: 
      ['Apache license 2.0',
      'BSD 2-clause "Simplified" license	B',
      'BSD 3-clause "New" or "Revised" license',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',	
      'Eclipse Public License 2.0',	
      'GNU General Public License v3.0',	
      'ISC',	
      'Microsoft Public License',	
      'MIT',
      'Mozilla Public License 2.0',	
      'The Unlicense Unlicense'
    ]
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

}

// function call to initialize program
init();
