import React, { useState } from 'react';
import './App.css';

function App() {

//state hook - 'useState'
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([])


//helper functions
 function addItem() {
  if(!newItem) {
    alert("Enter a task!")
    return
  }
   const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
   };

   setItems(oldList => [...oldList, item]);

   setNewItem("");
   console.log(items);
 }

 function deleteItem(id) {
  const newArray = items.filter((item) => item.id !== id);
  setItems(newArray);
}



  return (
    <div className="App">
      {/* 1. header */}
      <h1>Todo List App</h1>

      {/* 2. Input (input and button) */}
     <input type="text"
     placeholder='Enter a task...'
     value={newItem}
     onChange={e => setNewItem(e.target.value)}
     />

     <button onClick={() => addItem()} className="add-button">Add</button>

      {/* 3. List of items(unordered list of items) */}
      <ul>
      {items.map(item => {
        return (
          <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)} className="delete-button">❌</button></li>
        )
      })}
     </ul>
    
    
    </div>
  );
}

export default App;
