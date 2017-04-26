let REGEX = /(.*[^\s*<])?\s*<(.*)>/

// node or browser? http://stackoverflow.com/a/35813135/2675670
if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
  fs = require('fs')
  fs.readFile('mailtos.json', 'utf8', (err, mailtoText) => {
    if (err) {
      return console.log(err)
    }

    mailtos = JSON.parse(mailtoText)
    mailtos.forEach((mailto) => {  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=example
      let [_, name, email] = mailto.match(REGEX) || []  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      console.log(`Name: ${name}  Email: ${email}`)
    })
  })
} else { // in the browser
  // let url = "https://exloc.io/parse-mailto-with-regex/mailtos.json"
  let url = "https://github.com/exloc/parse-mailto-with-regex/mailtos.json"
  fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.body
    } else {
      return new Error(response)
    }
  })
  .then((body) => JSON.parse(body))
  .then((mailtos) => {
    mailtos.forEach((mailto) => {
      let [_, name, email] = mailto.match(REGEX) || []
      console.log(`Name: ${name}  Email: ${email}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
}
