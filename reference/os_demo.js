// get info about operating system

const os = require('os')

// platform (windows, mac, linux, etc.)
console.log(os.platform())

// cpu architecture
console.log(os.arch())

// cpu core info
console.log(os.cpus())

// free memory
console.log(os.freemem())

// total memory
console.log(os.totalmem())

// home directory
console.log(os.homedir())

// uptime
console.log(os.uptime().toFixed(0))