import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MarkDownInput from "./components/MarkDownInput";
import NoteDisplay from "./components/NoteDisplay";

const App = () => {
  const [note, setNote] = useState("");
  useEffect(() => {}, [note]);

  return (
    <>
    <h1>Blauk Nautes</h1>
    <NoteDisplay note={note.note} title={note.title} />
    <MarkDownInput triggerSetNote={(input) => setNote(input)} note={note} />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
