// ./utils/generateMarkdown.js

// Function to generate Markdown content based on user input
function generateMarkdown(data) {
    return `
# ${data.title}

## Project Information
- **Full Name:** ${data.fullName}
- **Deployed Link:** ${data['deployed link']}
- **Technologies Used:** ${data.technologies}
- **License:** ${data.license}

## Description
${data.description}

## Credits
${data.credits}

## Summary
${data.summary}
`;
}

module.exports = generateMarkdown;



