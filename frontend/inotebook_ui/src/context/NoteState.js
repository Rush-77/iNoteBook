import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const initnotes= []

      const [notes,setNotes] = useState(initnotes);      
      

      // Get All notes of logged in users
      const getAllNotes = async() =>{
        props.setProgress(20);
        const response = await fetch(`${host}/api/note/getnotes`, {
          method: "GET", 
          headers: {
            "auth-token": localStorage.getItem('token')
          }
        });
        props.setProgress(70);
        const json = await response.json();
        console.log(json);
        setNotes(json)
        props.setProgress(100);
        if(notes.length > 0){
          props.showAlert('Notes Found.','info');
        }
        
      }

      // Add new note
      const addNote = async(uNote) =>{
        props.setProgress(20);
        console.log(uNote);
        const title = uNote.title;
        const description =uNote.description;
        const tag = uNote.tag;
        const response = await fetch(`${host}/api/note/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}),
        });
        props.setProgress(70);
        const json = await response.json();
        console.log(json);
        setNotes(notes.concat(json));
        props.setProgress(100);
        props.showAlert('Note Added Successfully.','success');
      }

      // Delete a note
      const deleteNote = async(id)=>{
        props.setProgress(20);
        const response = await fetch(`${host}/api/note/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        });
        // const json = await response.json();
        props.setProgress(70);
        console.log(response);
        const newNote = notes.filter((note)=>{return note._id !== id});
        setNotes(newNote);
        props.setProgress(100);
        props.showAlert('Note Deleted Successfully.','success');
      }

      // Edit a note
      const editNote = async(uNote)=>{
        props.setProgress(20);
        const id = uNote._id;
        const title = uNote.title;
        const description =uNote.description;
        const tag = uNote.tag;
        const response = await fetch(`${host}/api/note/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}),
        });
        props.setProgress(50);
        const json = await response.json();
        console.log(json);
        props.setProgress(70);
        const newNote = notes.filter((note)=>{
          if(note._id === json._id){
            note.title = json.title;
            note.description = json.description;
            note.tag = json.tag;
            console.log('copied json' + json._id);
            console.log('note : ' + note.description);
          }
          return note;
        });
        setNotes(newNote);
        props.setProgress(100);
        props.showAlert('Note Updated Successfully.','success');
      }
   
   
    return (
        <NoteContext.Provider value={{notes,getAllNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState