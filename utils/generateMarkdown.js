// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} <br/>
  ## Description: <br/> 
  ${data.description} <br/>
  ## Installation: <br/> 
  ${data.installation} <br/>
  ## Usage: <br/> 
  ${data.usage} <br/>
  ## License: <br/> 
  My project is covered under ${data.licence} license. <br/>
  ## Tests: <br/> 
  ${data.tests} <br/>
  ## Questions: <br/> 
  Please, don't hesitate to visit me on
  ${data.github} <br/>
  ${data.email} <br/>
  `;
}

module.exports = generateMarkdown;
