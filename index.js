// // TODO: import fs, path and inquirer modules

// // TODO: import api and generateMarkdown modules from ./utils/

// // TODO: Add inquirer question objects to questions array. This should
// // include all the necessary questions for the user.
// // Example question:
// // {
// //   type: "input",
// //   name: "github",
// //   message: "What is your GitHub username?"
// // }
// const questions = [];

// // TODO: Write function to synchronously write data in the
// // current working directory to file named for the fileName parameter.
// // The data parameter is the text to write to the file.
// function writeToFile(fileName, data) {
// }

// // TODO: Use inquirer to prompt the user for each question in the
// // questions array. Then call api.getUser to fetch the user profile
// // data from GitHub. Finally generate the markdown and use writeToFile
// // to create the README.md file.
// function init() {

// }
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const writeFile = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js")
// // ask user for github username
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project"
    }
    // {
    //     type: "checkbox", /*???????*/
    //     name: "license",
    //     message: "What licenses does your project have?"
    // },
    // {
    //     type: "input",
    //     name: "dependencies",
    //     message: "What command should be run to install dependencies?"
    // },
    // {
    //     type: "input",
    //     name: "tests",
    //     message: "What command does the user need to run to run tests?"
    // },
        // {
    //     type: "input"
    //     name: "repoinfo",
    //     message: "What should a user know about using this repo?"
    // },
    // {
    //     type: "input"
    //     name: "contributing",
    //     message: "What should the user need to know about contributing to this repo?"
    // }
  ])
  .then(answers => {
      console.log(answers.username);
      //console.log(answers.projectname)
    const url = `https://api.github.com/users/${answers.username}`;
    // use axios to fetch GitHub user data
     return axios.get(url);
   })
   .then(response => {
     //get the avatur url
    const { avatar_url, login } = response.data;
    const {} = response.data;
    // render markdown with an image
    const imageMarkdown = `# Profile!
![${login} avatar](${avatar_url})
`
    // save markdown to file
    return writeFile("output/readme.md", imageMarkdown);
  })
//   .then (answers =>{
//       console.log(answers.projectname);
//       const project = `Title: 
// ${answers.projectname}`
//       return writeFile("output/readme.md", project);

//   })
.then(answers => {
    console.log(answers.title)
  // const userInputs = generateMarkdown(answers);
    //return writeFile("output/readme.md", userInputs);
})
  .then(() => {
    console.log("created readme")
  })
  .catch(error => {
    console.log("Could not create file.")
    process.exit(1);
  });

 
