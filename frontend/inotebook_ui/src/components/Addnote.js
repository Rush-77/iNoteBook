import React,{useContext, useState} from 'react'
import NoteContext from '../context/noteContext';

function Addnote(props) {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",description:"",tag:""});

    const addNewNote = (e)=>{
        // e.preventDefault(); //to avoid page to reload
        addNote(note);
    }

    const setTag = (e)=>{
      e.preventDefault(); //to avoid page to reload
      setNote({...note,tag:e.target.name});
    }

    const getNewValue = (e) =>{  
        setNote({...note,[e.target.name ]: e.target.value}) //(...)spread operator used to continue with previous values in note with add/override provided note next to it
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
            <div className="btn-group" >
                <button className="btn btn-sm rounded-pill btn-outline-primary" name="General" onClick={setTag}>General</button>  &nbsp;&nbsp;
                <button className="btn btn-sm rounded-pill btn-outline-secondary" name="Business" onClick={setTag}>Business</button> &nbsp;&nbsp;
                <button className="btn btn-sm rounded-pill btn-outline-success" name="Entertainment" onClick={setTag}>Entertainment</button>  &nbsp;&nbsp;
                <button className="btn btn-sm rounded-pill btn-outline-danger" name="International" onClick={setTag}>International</button>  &nbsp;&nbsp;
                <button className="btn btn-sm rounded-pill btn-outline-warning" name="Sport" onClick={setTag}>Sport</button> &nbsp;&nbsp;
                <button className="btn btn-sm rounded-pill btn-outline-info" name="Information" onClick={setTag}>Information</button> &nbsp;&nbsp;
                <button className="btn btn-sm rounded-pill btn-outline-dark" name="Politics" onClick={setTag}>Politics</button>
            </div>
            <br></br>
            <br></br>
            <button type="submit" className="btn btn-primary" onClick={addNewNote}>Submit</button>
            
            
        </form>
    </div>
  )
}

export default Addnote
