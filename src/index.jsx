import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import MarkDownInput from "./components/MarkDownInput";
import NoteDisplay from "./components/NoteDisplay";

const App = () => {
  const [note, setNote] = useState("");

  useEffect(() => {}, [note]);

  return (
    <>
    <h1 className="text-center">Blauk Nautes</h1>
    <div className="form-control">
    <NoteDisplay note={note.note} title={note.title} />
    <MarkDownInput triggerSetNote={(input) => setNote(input)} note={note} />
    </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
