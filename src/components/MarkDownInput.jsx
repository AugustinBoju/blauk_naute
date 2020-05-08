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
            <label>Title :</label>
            <input type="text" name="title" onChange={handleChange} value={note.title}/>

            <label>Note :</label>
            <textarea name="note" onChange={handleChange} value={note.note}/>
          <input type="submit" value="Save"/>
        </form>
      </>
  );
};

export default MarkDownInput;
