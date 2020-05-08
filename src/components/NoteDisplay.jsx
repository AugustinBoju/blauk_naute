import React, { useState, useEffect } from "react";
import Showdown from "showdown";

const NoteDisplay = ({ note, title }) => {
  const converter = new Showdown.Converter();
  function createMarkup(note) {
    return { __html: converter.makeHtml(note) };
  }
  return (
    <>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={createMarkup(note)}/>
</>
  );
};
export default NoteDisplay;
