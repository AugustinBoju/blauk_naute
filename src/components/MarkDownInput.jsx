import React, { useState, useEffect } from "react";
import NavList from "./NavList";

const MarkDownInput = ({ triggerSetNote, note }) => {
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    setInput({...input, [e.currentTarget.name]: e.currentTarget.value,});
  };
  const handleSubmit = (e) => {
    localStorage.setItem(input.title, JSON.stringify(input.note));
  };
  useEffect(() => {
    triggerSetNote(input);
  }, [input]);
  return (
    <>
      <NavList triggerShowStorage={(input) => setInput(input)} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title :</label>
            <input type="text" name="title" onChange={handleChange} className="form-control" value={note.title}/>
          </div>
          <div className="form-group">
            <label>Note :</label>
            <textarea name="note" onChange={handleChange} className="form-control" value={note.note} style={{ minHeight: "30vh" }}/>
          </div>
          <input type="submit" value="Save" className="btn-lg btn-danger"/>
        </form>
      </>
  );
};

export default MarkDownInput;
