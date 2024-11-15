import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./content.css";
import { MdEditSquare } from "react-icons/md";

function Content() {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: true,
      task: "Read React",
    },
    {
      id: 2,
      checked: false,
      task: "Do painting",
    },
    {
      id: 3,
      checked: true,
      task: "Do TTEc Job",
    },
  ]);
  const [newtask, setNewtask] = useState("");

  const handlecheck = (id) => {
    console.log(`id :, ${id}`);
    const listitems = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listitems);
  };
  const handledel = (id) => {
    const listitems = item.filter((item) => item.id !== id);
    setItem(listitems);
  };

  const getValue = (event) => {
    setNewtask(event.target.value);
  };
  const handleInput = () => {
    if (newtask !== "") {
      const newId = item.length > 0 ? item[item.length - 1].id + 1 : 1;
      const newItem = {
        id: newId,
        task: newtask,
        checked: false,
      };
      setItem((prevItems) => [...prevItems, newItem]);
      setNewtask("");
    }
  };
  return (
    <div className="main-container">
      <div className="additem">
      <input
        type="text"
        name="add item"
        placeholder="Enter text"
        onChange={getValue}
        value={newtask}
        maxlength="20"
      ></input>
      <button className="but-additem" onClick={handleInput}>Add item</button>
      </div>
      <ul>
        {item.map((items) => (
          <li className="task-list" key={items.id}>
            <input className="check-box"
              onChange={() => handlecheck(items.id)}
              type="checkbox"
              name="check"
              checked={items.checked}
            />
            <label 
            style={(items.checked? {textDecoration:'line-through'}: null )}
            onDoubleClick={() => handlecheck(items.id)}
            className="lab-item">{items.task}</label>
            <div>
            <button className="but-delete" onClick={() => handledel(items.id)}>
             
              <FaTrashAlt />
            </button>
            <button className="but-edit"> 
              <MdEditSquare />
            </button>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
