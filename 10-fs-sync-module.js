const {readFileSync, writeFileSync, read} = require('fs')


// In readFileSync you have to pass two parameters first one is the file path and second one the encoding type fo rthe text

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


// In writeFileSync it will compulsory take two parameters that are the file path and what you want to write in that file.
// But if you want to append data and not to overwrite then you have to use third parameter "flag and set its value to a"
// If the file is available it will make changes in the file and if file is not present it will create a new filw in that path and perform its actions

writeFileSync('./content/result.txt', `Here is the result : ${first} and ${second}`, {flag:'a'})
