const fs = require('fs')

const dataBuffer = fs.readFileSync('play.json')
let dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name = 'Arfat'
data.planet = 'Mercury'
data.age = 21
 
dataJSON = JSON.stringify(data)

fs.writeFileSync('play.json',dataJSON)
console.log(dataJSON)