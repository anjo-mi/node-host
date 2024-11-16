// get url info

const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// serialize url
console.log(myUrl.href)
console.log(myUrl.toString())

// host vs name (root domain)
console.log(myUrl.host) // will include port if present
console.log(myUrl.hostname) // excludes port

// pathname
console.log(myUrl.pathname)

// search params/ serialized query
console.log(myUrl.searchParams) // creates object from query string
console.log(myUrl.search)
// add parameters to search
myUrl.searchParams.append('abc', '123')
console.log(myUrl.search)


// loop thru params ****BE CAREFUL: value comes before name for arguments
myUrl.searchParams.forEach((val, name) => console.log(`${name}: ${val}`))