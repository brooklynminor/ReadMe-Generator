const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkDown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
   return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your application?"
    },
    {
      type: "input",
      name: "objective",
      message: "What concepts were used to generate a proper ReadMe.md?"
    },
    {
      type: "input",
      name: "installation",
      message: "What was the installation process to generating a ReadMe.md?"
    },
    {
      type: "input",
      name: "license",
      message: "Enter the name of the licensed used."
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username."
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}

async function init() {
  console.log("Generate a ReadMe")
  try {
    const answers = await promptUser();
    console.log( answers )
    const md = generateMarkDown(answers);

    await writeFileAsync("README.md", md);
    
    console.log("Successfully wrote ReadMe");
  } catch(err) {
    console.log(err);
  }
}

init();
