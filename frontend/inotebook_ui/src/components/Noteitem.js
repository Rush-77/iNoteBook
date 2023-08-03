import React,{useContext} from 'react'
import NoteContext from '../context/noteContext';

const Noteitem = (props) => {
    let myStyle = {
        fontSize:'20px'
    }
    const {note,openNote} = props;

    const context = useContext(NoteContext);
    const {deleteNote} = context;

    const deleteClick = () =>{
        deleteNote(note._id);
    }

  return (
    <div className='col-md-4 my-4'>
        <div className="card" >
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h6 className="card-title fw-bold">{note.title}</h6>
                    <div className="btn btn-sm bg-dark text-white rounded-pill" >{note.tag} </div>
                </div>
                <p className="card-text text-muted my-2">{note.description}</p>
                <i className="bi bi-trash mx-2" style={myStyle} onClick={deleteClick}></i>
                <i className="bi bi-pencil-square" style={myStyle} onClick={()=>{openNote(note)}}></i>
            </div>
        </div>
    </div>
  )
}

export default Noteitem
