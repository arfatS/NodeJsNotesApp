const notes = require('./notes.js')
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
  handler(argv) {
    notes.addNotes(argv.title, argv.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe : 'Removes a note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption : true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe : 'Lists notes',
  handler() {
    notes.listNotes()
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe : 'Reads a note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption : true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// console.log(yargs.argv)
yargs.parse()
