import React, { useState, useEffect } from "react";
import maincss from "./Main.module.css";
import logo from "../assets/images/keepLogo.png";
import Notes from "../component/Notes";
import Popup from "../component/Popup";
import Wrotenote from "../component/Wrotenote";

function Main() {
  const [view, setView] = useState(false);
  const [colorPicker, setColorPicker] = useState("white");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [typeNote, setTypeNot] = useState("");
  const [popupView, setPopupView] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const storeNotes = localStorage.getItem("Note");

    if (storeNotes) {
      setNotes(JSON.parse(storeNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Note", JSON.stringify(notes));
  }, [notes]);

  const handleCancel = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now().toString(),
      title: title,
      note: typeNote,
      color: colorPicker,
    };

    setNotes([newNote, ...notes]);
    setView(false);
    setColorPicker("");
    setTitle("");
    setTypeNot("");
  };

  const handleDelete = (deletedFields) => {
    const wantDelete =  window.confirm('Are you sure you want to delete this note?');
    
    if(wantDelete){
      const updatedNotes = notes.filter((note) => note.id !== deletedFields);
      setNotes(updatedNotes);
      setPopupView(false)
    }
    
  };

  const handleEdit = (updatedFields) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedFields.id ? updatedFields : note
    );
    setNotes(updatedNotes);
    setPopupView(false);
  };

  const showNote = (note) =>{
    console.log(note);
    setSelectedNote(note)
    setPopupView(true);
    
  }


  return (
    <div className={maincss.main_container}>
      <div className={maincss.navbar}>
        <div className={maincss.logo}>
          <img src={logo} alt="" />
          <p>Keep</p>
        </div>
        <div className={maincss.search_bar}>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {view && (
        <Notes
          setTitle={setTitle}
          colorPicker={colorPicker}
          title={title}
          typeNote={typeNote}
          setTypeNot={setTypeNot}
          setNotes={setNotes}
          setColorPicker={setColorPicker}
          setView={setView}
          handleCancel={handleCancel}
          notes={notes}
          showNote={showNote}
          
        />
      )}
      <Wrotenote
        note={notes}
        colorPicker={colorPicker}
        setPopupView={setPopupView}
        showNote={showNote}
        
        
      />
      {popupView && (
        <Popup
          setTitle={setTitle}
          colorPicker={colorPicker}
          title={title}
          typeNote={typeNote}
          setTypeNot={setTypeNot}
          setNotes={setNotes}
          setColorPicker={setColorPicker}
          setView={setView}
          handleCancel={handleCancel}
          notes={notes}
          handleDelete={handleDelete}
          handleEdit = {handleEdit}
          selectedNote={selectedNote}
          
        />
      )}

      <button className={maincss.create_note_btn} onClick={() => setView(true)}>
        +
      </button>
    </div>
  );
}

export default Main;
