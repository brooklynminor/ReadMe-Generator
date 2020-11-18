// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##Objective
   ${data.objective}  
  
  ## Installation
  ${data.installation}  

  ## License
  [License](https://choosealicense.com/licenses/${data.license})

  ## Information
 
 - [GitHub Profile](https://github/${data.github})  
 - [LinkedIn Profile](${data.linkedin})  

`;
}

module.exports = generateMarkdown;
