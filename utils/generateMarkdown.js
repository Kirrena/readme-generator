// function to generate markdown for README
function generateMarkdown(data) {
  //array to store badges
  const licenseBadges = new Map([['Apache license 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
      ['BSD 2-clause "Simplified" license	B', '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'],
      ['BSD 3-clause "New" or "Revised" license', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'],
      ['Boost Software License 1.0', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'],
      ['Creative Commons Zero v1.0 Universal', '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'],	
      ['Eclipse Public License 2.0', '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'],	
      ['GNU General Public License v3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],	
      ['ISC',	'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'],
      ['MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
      ['Mozilla Public License 2.0', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],	
      ['The Unlicense Unlicense', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
    ]);

    //giving default value to licence badge
    data.badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    //loop to find the link for license
    for (const [key, value] of licenseBadges) {
      //data license is coming back as an object so it nedds to be transform to string
      if (key=== String(data.license))
      {
        data.badge = value;
      }
    }
   //check the type of license: console.log('data.license:', data.license, typeof data.license);
 
  
  //returns the readme file including datas from terminal  
  return `# ${data.title} ${data.badge}
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  My project is covered under ${data.license} license.
  ## Contributing:
  ${data.contributing}
  ## Tests:
  ${data.tests}
  ## Questions:
  Please, don't hesitate to visit me on
  [My github page](https://github.com/${data.github})
  or to contact me with any questions : ${data.email}
  ## Table of Content:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  `;
}

module.exports = generateMarkdown;
