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
      task: "Learn React",
    },
    {
      id: 2,
      checked: false,
      task: "Do project",
    },
    {
      id: 3,
      checked: true,
      task: "Apply job",
    },
  ]);
  const [newtask, setNewtask] = useState("");
  const [editingId, setEditingId] = useState(null);

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
  const handleEdit =(id) =>{
    const listitems = item.find((item) => item.id === id);
    console.log(listitems.task);
    if (listitems) {
      setNewtask(listitems.task); // Populate the input with the task value
      setEditingId(id); // Set the current task's ID for editing
    }
    // if (listitems) {
    //   console.log(listitems.task); // Log the task property
    // } else {
    //   console.log("Item not found");
    // }
  };
  const handleUpdate = () => {
    if (editingId !== null) {
      const updatedItems = item.map((items) =>
        items.id === editingId ? { ...items, task: newtask } : items
      );
      setItem(updatedItems);
      setEditingId(null); // Clear editing state
      setNewtask(""); // Clear input field
    } else {
      handleInput(); // Add new item if not editing
    }
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
        placeholder="Add a new todo....."
        onChange={getValue}
        value={newtask}
        maxlength="20"
      ></input>
      <button className="but-additem" onClick={handleUpdate}>
      {editingId !== null ? "Update" : "Add"} </button>
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
            <button className="but-edit"  onClick={()=> handleEdit(items.id)}> 
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
