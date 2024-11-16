const fs = require('fs')
const path = require('path')

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err
//     console.log('folder created')
// })

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'suck my balls', err => {
//     if (err) throw err
//     console.log('folder created')
    
    // file append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' blow me', err => {
//         if (err) throw err
//         console.log('folder created')
//     })
// })




// using writeFile again will start replacing old file at beginning, leave what's left over
// ***SO***: use appendFile to add to the file rather than overwrite


// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' blow me', err => {
//     if (err) throw err
//     console.log('folder created')
// })


// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_world.txt'), err => {
    if (err) throw err
    console.log('file renamed')
})