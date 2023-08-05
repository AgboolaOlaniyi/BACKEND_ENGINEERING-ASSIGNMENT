const fs = require('fs')
const path = require('path')


fs.mkdir ("Students", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder created successfully')
})

// const StudentsPath = path.join (__dirname, 'Students', 'user.js')
// const content = "Agboola Olaniyi"
// fs.writeFile (StudentsPath, content, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File created successfully') 
// })

// const StudentsPath = path.join(__dirname, 'Students')
// fs.rename(StudentsPath, "./Names", (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File created successfully')
// })

//updating a file content.
// const update = [
//     {
//         "age": "41",
//         "sex": "male",
//         "nationality": "Nigerian",
//         "phoneNumber": "08181699389",
//         "track": "Backend development"
//     }
// ]

// const filePath = path.join(__dirname, 'Names', 'user.js')

// fs.appendFile(filePath, JSON.stringify(update), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File updated successfully')
// })


// const filePath = path.join (__dirname, 'Names', "user.js")
// fs.rename(filePath, "./Names/agboola_olaniyi.js", (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File created successfully')
// })

// const filePath = path.join (__dirname, 'Names', "agboola_olaniyi.js")
// fs.readFile (filePath, "utf8",  (err, content) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(content)
// })

// const filePath = path.join (__dirname, 'Names', "agboola_olaniyi.js")
// fs.unlink (filePath,  (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("File deleted successfully")
// })

// const filePath = path.join (__dirname, 'Names')
// fs.rmdir (filePath,  (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("Folder deleted successfully")
// })
