// TODO: Return markdown string for README file given a data object.
function generateMarkdown(answers) {
    return `## Title:
   ${answers.title}

## Description:
  ${answers.description}

  `;
// ## Licenses:
//     ${answers.license}

// ## Dependencies:
//     ${answers.dependencies}

// ## Tests:
//     ${answers.tests}

// ## Repository Info:
//     ${answers.repoinfo}

// ##Contributing:
//     ${answers.contributing}
  
  }
  
  module.exports = generateMarkdown;
  