import React,{useContext, useState} from 'react'
import NoteContext from '../context/noteContext';

function Addnote() {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",description:"",tag:""});

    const addNewNote = (e)=>{
        e.preventDefault();
        addNote(note);
    }

    const getNewValue = (e) =>{
       
        setNote({...note,[e.target.name ]: e.target.value})
    }

  return (
    <div>
      <h3 >Write a note</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" onChange={getNewValue}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" onChange={getNewValue}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={addNewNote}>Submit</button>
        </form>
    </div>
  )
}

export default Addnote
