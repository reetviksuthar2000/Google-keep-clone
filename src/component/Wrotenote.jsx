import React from "react";
import getnotestyle from "./Wrotenote.module.css";


function Wrotenote({ note, setPopupView, showNote}) {


  return (
    <div className={getnotestyle.wrotenote_container}>
      <div className={getnotestyle.middle_part}>
        {note.map((item) => {
          return (
            <div className={getnotestyle.wrotenote_component} key={item.id} onClick={()=>showNote(item)} style={{backgroundColor: `${item.color}`}} >
              <p>{item.title}</p>
              <br />
              <p>{item.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wrotenote;
