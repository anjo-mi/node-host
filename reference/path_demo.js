const path = require('path');

// base file name (gives just the name of the file, add second argument to exclude extension)
console.log(path.basename(__filename, '.js'));

// directory name (gives the name of the directory)
console.log(path.dirname(__filename));

// file extension (gives the extension [html, css, js, etc.] of the file)
console.log(path.extname(__filename));

// create path object (gives an object with all the properties of the path)
console.log(path.parse(__filename));

// concatenate paths (combines paths, second argument is folder, third is file if given extension or another folder if not)
console.log(path.join(__dirname, 'test', 'hello.html'));

