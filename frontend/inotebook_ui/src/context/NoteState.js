import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const n1= {
        "title":"my title"
    }

    const [note,setNote] = useState(n1);
    
    const updateNote = () =>{
        setTimeout(() => {
            setNote({"title":"second title"})
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{note,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState