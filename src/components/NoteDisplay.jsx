import React, { useState, useEffect } from "react";
import Showdown from "showdown";

const NoteDisplay = ({ note, title }) => {
  const converter = new Showdown.Converter();
  function createMarkup(note) {
    return { __html: converter.makeHtml(note) };
  }
  return (
    <div className="row">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={createMarkup(note)}/>
    </div>
  );
};
export default NoteDisplay;
