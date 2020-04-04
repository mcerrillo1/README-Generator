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

// - [ ] Prompt the user
// - [ ] Fetch GitHub Data
// - [ ] Print GitHub Data
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const writeFile = util.promisify(fs.writeFile);
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
        name: "projectname",
        message: "What is your project's name?"
    }
    // {
    //     type: "input",
    //     name: "project-name",
    //     message: "What is your project's name?"
    // },
    // {
    //     type: "input",
    //     name: "project-name",
    //     message: "What is your project's name?"
    // },
    // {
    //     type: "input",
    //     name: "project-name",
    //     message: "What is your project's name?"
    // },
    // {
    //     type: "input",
    //     name: "project-name",
    //     message: "What is your project's name?"
    // },
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
  .then (answers =>{
      console.log(answers.projectname);
//       const project = `Title: 
// ${answers.projectname}`
//       return writeFile("output/readme.md", project);

  })
  .then(() => {
    console.log("created readme")
  })
  .catch(error => {
    console.log("Could not create file.")
    process.exit(1);
  });

 //init();
