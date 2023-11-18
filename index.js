

// ./index.js

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

    const questions = [
        { name: 'fullName', type: 'input', message: 'Please input your Full Name: ' },
        { name: 'title', type: 'input', message: 'What is the title of your project?' },
        { name: 'deployed link', type: 'input', message: 'Enter the deployed link.' },
        { name: 'technologies', type: 'input', message: 'Please enter technologies used in your project:' },
        { name: 'description', type: 'input', message: 'Please enter a description of your project:' },
        { name: 'license', type: 'list', message: 'Please enter license used:', choices: ["Apache License 2.0", "MIT License", "BSD License", "GNU GPLv3 License"] },
        { name: 'credits', type: 'input', message: 'Please enter credits used:' },
        { name: 'summary', type: 'input', message: 'Please enter a summary of your challenge:' },
    ];


const outputDir = path.join(__dirname, 'output');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

function writeToFile(fileName, data) {
    const filePath = path.join(outputDir, fileName);
    console.log('Writing file with data:', data);
    console.log('File path:', filePath);
    
    fs.writeFile(filePath, data, err => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully:', filePath);
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then(data => {
            const readmeData = generateMarkdown(data);
            writeToFile('README.md', readmeData);
        })
        .catch(error => {
            console.error('Error during user input:', error);
        });
}

init();

