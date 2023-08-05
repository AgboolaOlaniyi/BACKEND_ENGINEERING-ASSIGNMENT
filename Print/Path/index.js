const path = require('path');


// Get current working directory/folder
 const cwd = path.resolve();
 console.log({cwd});

 // // Get path seperator
const seperator = path.sep;
console.log({seperator});


// Get the extension name
const extName = path.extname('C:\Users\InniveTech\Desktop\BACKEND_ENGINEERING ASSIGNMENT\PATH\package.json');
console.log({extName});
