// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ![license](https://img.shields.io/badge/license-${data.license}-green.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#install)
  * [Description](#description)
  * [Usage](#useinfo)
  * [Contribution](#contribution)
  * [Test Info](#test)
  * [License](#license)
  
  ## Installation
  ${data.install}
  ## Usage
  ${data.useinfo}
  ## Contribution
  ${data.contribution} 
  ## Test Info
  ${data.test}
  ## License
  ${data.license}

  ## Questions
  Got Questions? Reach out via email or GitHub! 
  * GitHub: [${data.git}](https://github.com/${data.git})
  * Email: ${data.email}
  
`;
};

module.exports = generateMarkdown;


