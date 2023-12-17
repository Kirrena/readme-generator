// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  My project is covered under ${data.license} license.
  ## Tests:
  ${data.tests}
  ## Questions:
  Please, don't hesitate to visit me on
  [My github](https://github.com/${data.github})
  Or to contact me with any questions : ${data.email}
  `;
}

module.exports = generateMarkdown;
