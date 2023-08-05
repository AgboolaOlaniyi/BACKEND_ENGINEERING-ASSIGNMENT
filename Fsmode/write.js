const fs = require('fs')
const path = require('path')


// Writing a file asynchronously
const textFilePath = path.join(__dirname, 'Students', 'user.js')
const content = 'Olaniyi Agboola'


// File gets created in the file system because it does not exist yet
fs.writeFile(textFilePath, content, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully')
})


// Append to a file
fs.appendFile(textFilePath, '\n 33, Male, Nigerian, 2347068271605', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Addition to file success!')
})
