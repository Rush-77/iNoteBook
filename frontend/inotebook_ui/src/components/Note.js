import React,{useContext} from 'react'
import NoteContext from '../context/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Note = ()=> {
    const context = useContext(NoteContext);
    const {notes} = context;
  return (
    <>
        <Addnote/>
        <div className='my-4'>
            <h3>Your Notes :</h3>
            <div className='row'>
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>
            })}
            </div>
        </div>
    </>
  )
}

export default Note
