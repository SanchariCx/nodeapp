var fs = require('fs');
console.log("inside note");
var getNote = (note)=>{
console.log("inside getNote",note);

};
var fetchnote =()=>{
    var notes;
    try
    {
        var noteString  = fs.readFileSync('note.json');
        notes = JSON.parse(noteString);
        return notes;
    }
    catch(e)
    {
        return notes;
    } 
};
var savenote = (notes)=>{
    fs.writeFileSync('note.json',JSON.stringify(notes));
};
var addNote = (title,body)=>{
var notes =  fetchnote();
var note  = {
    title,
    body 
  };
console.log(notes);
var duplicate = notes.filter((note)=>note.title === title);
if(duplicate.length === 0)
{
    notes.push(note);
    savenote(notes);
    return note;
}

};
var removeNote = (title)=>{
    var notes = fetchnote();
    var filterd = notes.filter(note=>note.title!==title);
    // console.log(filterd);
    savenote(filterd);
    return notes.length!==filterd.length;
    

};
var getNote = (title)=>{
    var notes = fetchnote();
    var filterednote  = notes.filter((note)=>note.title === title);
    return filterednote[0];
};
var PrintNote = (note)=>{
    // debugger;
    console.log('TITLE---->',note.title);
    console.log('BODY----->',note.body);
};
var GetAllNotes = ()=>{
var notes = fetchnote();
console.log(notes);    
};
module.exports = {
    getNote,
    addNote,
    removeNote,
    PrintNote,
    GetAllNotes
}