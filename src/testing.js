const fs = require('fs');

const committees = [
  "Academic Committee",
  "AI Club",
  "Annual Festival Committee",
  "Cafeteria Management Committee",
  "Cultural Committee",
  "Hostel Management Committee",
  "ICT Committee",
  "Sports Committee",
  "Student Placement Cell",
  "TechSupport Committee",
  "Press Club",
  "Debate Club",
  "Dance Club",
  "DCEI",
  "Music Club",
  "DA-IICT Theatre",
  "Research Club",
  "Chess Club",
  "Sambhav",
  "Programming Club",
  "Film Club",
  "Developer Student Club",
  "Electronics Hobby Club",
  "Microsoft Student Club"
];

const folderPath = 'src/committees/';

// Create the 'committees/' folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Function to replace spaces with underscores
function replaceSpacesWithUnderscores(str) {
  return str.replace(/ /g, '_');
}

// Loop through the committees array and create .js files
committees.forEach(committeeName => {
  const fileName = `${replaceSpacesWithUnderscores(committeeName)}.js`;
  const filePath = folderPath + fileName;

  // Create an empty .js file
  fs.writeFileSync(filePath, '', 'utf-8');

  console.log(`Created ${fileName}`);
});

console.log('All files created successfully.');
