import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const initnotes= [
        {
          "_id": "64a3e3118982a199cd89ebef",
          "userid": "64a2a0f7ed43a9672442de56",
          "title": "C-DAC",
          "description": "The Centre for Development of Advanced Computing is an Indian autonomous scientific society, operating under the Ministry of Electronics and Information Technology.",
          "tag": "Info",
          "date": "2023-07-04T09:14:57.580Z",
          "__v": 0
        },
        {
          "_id": "64a3f7cd6233bd15394f6adf",
          "userid": "64a2a0f7ed43a9672442de56",
          "title": "Thunder client",
          "description": "Thunder Client is a lightweight Rest API Client Extension for Visual Studio Code for Testing APIs.",
          "tag": "Info",
          "date": "2023-07-04T10:43:25.532Z",
          "__v": 0
        },
        {
          "_id": "64a7adc3d67d4a7b49abb6a9",
          "userid": "64a2a0f7ed43a9672442de56",
          "title": "EPFO",
          "description": "The Employees' Provident Fund Organisation is one of the two main social security organization under the Government of India's Ministry of Labour and Employment and is responsible for regulation and management of provident funds in India, the other being Employees' State Insurance.",
          "tag": "Finance",
          "date": "2023-07-07T06:16:35.524Z",
          "__v": 0
        },
        {
          "_id": "64a7adedd67d4a7b49abb6ab",
          "userid": "64a2a0f7ed43a9672442de56",
          "title": "M.S.DHONI",
          "description": "Mahendra Singh Dhoni is an Indian professional cricketer. He was captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He plays as a right-handed wicket-keeper-batsman and is also the current captain of Chennai Super Kings in the Indian Premier League.",
          "tag": "Sport",
          "date": "2023-07-07T06:17:17.633Z",
          "__v": 0
        },
        {
          "_id": "64a7ae1fd67d4a7b49abb6ad",
          "userid": "64a2a0f7ed43a9672442de56",
          "title": "NIFTY 50",
          "description": "The NIFTY 50 is a benchmark Indian stock market index that represents the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange. Nifty 50 is owned and managed by NSE Indices, which is a wholly owned subsidiary of the NSE Strategic Investment Corporation Limited.",
          "tag": "Business",
          "date": "2023-07-07T06:18:07.934Z",
          "__v": 0
        }
      ]

        const [notes,setNotes] = useState(initnotes);      

      // Add new note
      const addNote = (uNote) =>{
        console.log(uNote);
        const note = {
            "_id": "64a7ae1fd67d4a7b49abb6ad1",
            "userid": "64a2a0f7ed43a9672442de56",
            "title": uNote.title,
            "description": uNote.description,
            "tag": uNote.tag,
            "date": "2023-07-07T06:18:07.934Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
      }

      // Delete a note
      const deleteNote = (id)=>{
        const newNote = notes.filter((note)=>{return note._id !== id});
        setNotes(newNote);
      }

      // Edit a note
    //   const editNote = (uNote)=>{
    //     const newNote = notes.filter((note)=>{return note._id = id});
    //     setNotes(newNote);
    //   }
   
   
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState