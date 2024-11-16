const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => { 
    
    // inefficient way to add files that arent html, need to handle a lot of variants for file types
    // if (req.url === '/api/users') {
    //     const users = [  {name: 'jackass', age: 25},
    //                      {name: 'pissant', age: 16},
    //                      {name: 'who cares, you suck', age: 34},
    //     ]

    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    // build file path
    let filePath = path.join(
        __dirname,
         'public',
          req.url === '/' ? 'index.html' : !req.url.includes('.') ? req.url + '.html' : req.url
        )

    // get file extension
    let extname = path.extname(filePath)

    // initial content type
    let contentType = 'text/html'

    // check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8')                    
                })
            }else{
                // some server error
                res.writeHead(500)
                res.end(`server error: ${err.code}`)
            }
        }else{
            // success
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))