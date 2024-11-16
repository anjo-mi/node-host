const http = require('http')



// create a server object (takes function calling parameters request and response)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('dont worry, ya still suck')
        res.end()
    }
})
.listen(5000, () => console.log('server running on port 5000'))