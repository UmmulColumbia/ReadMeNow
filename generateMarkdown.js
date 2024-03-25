// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'GNU General Public License v3.0':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'Apache License 2.0':
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'BSD 2-Clause "Simplified" License':
        return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
      default:
        return '';
    }
  }
  
  // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return '(https://opensource.org/licenses/MIT)';
      case 'GNU General Public License v3.0':
        return '(https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache License 2.0':
        return '(https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 2-Clause "Simplified" License':
        return '(https://opensource.org/licenses/BSD-2-Clause)';
      default:
        return '';
    }
  }
  
  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === '') {
      return '';
    } else {
      return `## License
    
  This project is licensed under the ${license}. For more information, see the link below: 
  ${renderLicenseLink(license)}
      `;
    }
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseBadge(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
  ${renderLicenseSection(data.license)}
  `;
  }
  
  module.exports = generateMarkdown;
  