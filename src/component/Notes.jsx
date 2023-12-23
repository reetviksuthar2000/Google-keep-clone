import React from "react";
import notecss from "./Notes.module.css";

function Notes({ setTitle, colorPicker , title , typeNote , setTypeNot , setNotes , setColorPicker , setView , handleCancel, notes, }) {
  return (
    <div className={notecss.note_container} >
      <div className={notecss.whole_notes} style={{backgroundColor: colorPicker}}>
        <div className={notecss.take_note}  >
          <input
            type="text"
            placeholder="Title"
            value={title}
            style={{backgroundColor: colorPicker}}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            value={typeNote}
            placeholder="Take a note..."
            onChange={(e) => setTypeNot(e.target.value)}
            style={{backgroundColor: colorPicker}}
          ></textarea>
        </div>
        <div className={notecss.bottom_note} >
          <div className={notecss.group_logo}>
            <button
              className={notecss.color_piker}
              style={{ backgroundColor: "#faafa8" }}
              onClick={()=>setColorPicker('#faafa8')}
            ></button>
            <button
              className={notecss.color_piker}
              style={{ backgroundColor: "#f39f76" }}
              onClick={()=>setColorPicker('#f39f76')}
            ></button>
            <button
              className={notecss.color_piker}
              style={{ backgroundColor: "#fff8b8" }}
              onClick={()=>setColorPicker('#fff8b8')}
            ></button>
            <button
              className={notecss.color_piker}
              style={{ backgroundColor: "#b4ddd3" }}
              onClick={()=>setColorPicker('#b4ddd3')}
            ></button>
            <button
              className={notecss.color_piker}
              style={{ backgroundColor: "#d3bfdb" }}
              onClick={()=>setColorPicker('#d3bfdb')}
            ></button>
          </div>
          <button className={notecss.cancel_btn} onClick={handleCancel}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
