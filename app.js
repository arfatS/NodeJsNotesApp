const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//Updating app version
yargs.version('1.1.0')

//Create add command
yargs.command({
  command: 'add',
  describe : 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption : true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption : true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title : ' + argv.title)
    console.log('Body : ' + argv.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe : 'Removes a note',
  handler: function () {
    console.log('Removing a note!')
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe : 'Lists notes',
  handler: function () {
    console.log('Listing notes!')
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe : 'Reads a note',
  handler: function () {
    console.log('Reading a note!')
  }
})

// console.log(yargs.argv)
yargs.parse()