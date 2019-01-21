// var person = '{"name":"sanchari","age":"23"}';
// var personobj = JSON.parse(person);
// console.log(personobj);
const fs = require('fs');
var Note  = {
  title:'Some Title',
  body:'something' 
};
var originalNote = JSON.stringify(Note);
fs.writeFileSync('notes.json',originalNote);
var fetchedNote = fs.readFileSync('notes.json');
var notestring = JSON.parse(fetchedNote);
console.log(notestring);
