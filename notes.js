const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
  try{
    const notesBuffer = fs.readFileSync('notes.json')
    const notes = notesBuffer.toString()
    return JSON.parse(notes)
  }
  catch(error){
    return []
  }
}

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',notesJSON)
}

const addNotes = (title, body) => {
  const notes = loadNotes()
  // const duplicates = notes.filter(note => note.title === title)
  const duplicate = notes.find(note => note.title === title)

  if(!duplicate){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green('New note added...'))
    listNotes()
  }
  else{
    console.log(chalk.blue('Title already exists...'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const noteRemove = notes.find(notes => notes.title === title)

  if(noteRemove){
    const notesSave = notes.filter(notes => notes.title !== title)
    console.log(chalk.green('Note removed...'))
    saveNotes(notesSave)
    listNotes()
  }
  else{
    console.log(chalk.blue('Note does not exists...'))
  } 
}

const listNotes = () => {
  const notes = loadNotes()
  if(notes.length !== 0){
    console.log(chalk.magenta('Your notes :'))
      notes.forEach((note,index) => {
      console.log(chalk.magenta.bold(`${index+1}. ${note.title}`))
    })
  }
  else{
    console.log(chalk.blue('No notes found...'))
  } 
}

const readNote = (title) => {
  const notes = loadNotes()
  const noteRead = notes.find(note => note.title === title)

  if(noteRead){
    console.log(chalk.magenta.bold(noteRead.title))
    console.log(noteRead.body)
  }
  else{
    console.log(chalk.blue('Note does not exists...'))
  }
}

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}