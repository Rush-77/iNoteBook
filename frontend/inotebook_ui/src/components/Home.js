import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/noteContext';


const Home = ()=> {
    const n = useContext(NoteContext);
    useEffect(()=>{
        n.updateNote();
        // eslint-disable-next-line 
    },[])

    
  return (
    <div className='container my-5'>
      <h1>This is Home. {n.note.title}</h1>
    </div>
  )
}

export default Home