import React,{useContext,useEffect,useRef,useState} from 'react'
import NoteContext from '../context/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Note = (props)=> {
    const context = useContext(NoteContext);
    const {notes,getAllNotes,editNote} = context;
    useEffect(()=>{
      getAllNotes();
      // eslint-disable-next-line
    },[]);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note,setNote] = useState({title:"",description:"",tag:"info"});

    const openNote = (currentNote)=>{
      ref.current.click();
      setNote({_id:currentNote._id,title:currentNote.title,description:currentNote.description});
    }

    const getNewValue = (e) =>{    
        setNote({...note,[e.target.name ]: e.target.value}) //(...)spread operator used to continue with previous values in note with add/override provided note next to it
    }

    const updateNote = ()=>{
      editNote(note);
      refClose.current.click();
    }

    const setTag = (e)=>{
      e.preventDefault(); //to avoid page to reload
      setNote({...note,tag:e.target.name});
    }
    

  return (
    <>
        <Addnote />

        <button type="button" className="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit a Note</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={getNewValue}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea rows={5} cols={5} type="text" className="form-control" id="description" name="description" value={note.description} onChange={getNewValue}/>
                </div>
                <div className="btn-group d-flex flex-wrap ">
                    <button className="btn btn-sm rounded-pill btn-outline-primary" name="General" onClick={setTag}>General</button>  &nbsp;&nbsp;
                    <button className="btn btn-sm rounded-pill btn-outline-secondary" name="Business" onClick={setTag}>Business</button> &nbsp;&nbsp;
                    <button className="btn btn-sm rounded-pill btn-outline-success" name="Entertainment" onClick={setTag}>Entertainment</button>  &nbsp;&nbsp;
                    <button className="btn btn-sm rounded-pill btn-outline-danger" name="International" onClick={setTag}>International</button> &nbsp;&nbsp;
                    <button className="btn btn-sm rounded-pill btn-outline-warning" name="Sport" onClick={setTag}>Sport</button> &nbsp;&nbsp;
                    <button className="btn btn-sm rounded-pill btn-outline-info flex-grow-0 mt-2" name="Information" onClick={setTag}>Information</button> &nbsp;&nbsp;
                    <button className="btn btn-sm rounded-pill btn-outline-dark flex-grow-0 mt-2" name="Politics" onClick={setTag}>Politics</button>
                </div>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateNote}>Update</button>
              </div>
            </div>
          </div>
        </div>

        <div className='my-4'>
            <h3>Your Notes :</h3>
            <div className='row'>
            {notes.map((note)=>{
                return <Noteitem key={note._id} openNote={openNote} note={note}/>
            })}
            </div>
        </div>
    </>
  )
}

export default Note
