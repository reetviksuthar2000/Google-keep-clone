import React, { useEffect, useState } from 'react'
import editcss from './Popup.module.css'


function Popup({selectedNote, handleDelete, handleEdit}) {
    const[noteTitle, setNoteTitle] = useState("");
    const[noteContent, setNoteContent] = useState("");
    const[color, setColor] = useState("");

    useEffect(()=>{
        if(selectedNote){
            setNoteTitle(selectedNote.title || "");
            setNoteContent(selectedNote.note || "");
            setColor(selectedNote.color || "");
        }
    },[selectedNote])

    const editNoteButton = () => {
        const editedNote = {
            ...selectedNote,
            title: noteTitle,
            note: noteContent,
            color: color
        }
        handleEdit(editedNote);
    }

    const deleteNote = () => {
        handleDelete(selectedNote.id);
    }

  return (
    <div className={editcss.popup_container} >
      <div className={editcss.whole_popup} >
        <div className={editcss.edit_note}  >
          <input
            type="text"
            placeholder="Title"
            value={noteTitle}
            style={{backgroundColor: color}}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            value={noteContent}
            placeholder="Take a note..."
            onChange={(e) => setNoteContent(e.target.value)}
            style={{backgroundColor: color}}
          ></textarea>
        </div>
        <div className={editcss.bottom_note} >
          <div className={editcss.group_logo}>
            <button
              className={editcss.color_piker}
              style={{ backgroundColor: "#faafa8" }}
              onClick={()=>setColor('#faafa8')}
            ></button>
            <button
              className={editcss.color_piker}
              style={{ backgroundColor: "#f39f76" }}
              onClick={()=>setColor('#f39f76')}
            ></button>
            <button
              className={editcss.color_piker}
              style={{ backgroundColor: "#fff8b8" }}
              onClick={()=>setColor('#fff8b8')}
            ></button>
            <button
              className={editcss.color_piker}
              style={{ backgroundColor: "#b4ddd3" }}
              onClick={()=>setColor('#b4ddd3')}
            ></button>
            <button
              className={editcss.color_piker}
              style={{ backgroundColor: "#d3bfdb" }}
              onClick={()=>setColor('#d3bfdb')}
            ></button>
          </div>
          <button className={editcss.delete_btn} onClick={deleteNote}>Delete</button>
          <button className={editcss.cancel_btn} onClick={editNoteButton}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Popup