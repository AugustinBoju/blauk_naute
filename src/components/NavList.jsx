import React, { useState, useEffect } from "react";

const NavList = ({ triggerShowStorage }) => {
  const [note, setNote] = useState({});
  let notes = [];
  for (let i = 0; i < localStorage.length; i++) {
    notes.push(localStorage.key(i));
  }

  useEffect(() => {
    triggerShowStorage(note);
  }, [note]);

  const getStorageItem = (n) => {
    setNote({ title: n, note: JSON.parse(localStorage.getItem(n)) });
  };

  const navListRes = notes.map((n, id) => (
    <li key={id} className="list-group-item">
      <a href="#" onClick={() => getStorageItem(n)}>
      Notes {id} -
         {n} - {JSON.parse(localStorage.getItem(n)).slice(0, 15)}
      }
      </a>
    </li>
  ));

  return (
  navListRes
  );
};

export default NavList;
