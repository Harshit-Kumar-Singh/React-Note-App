import React from "react";

export const TodoItem = ({ todoitem ,onDelete}) => {
    
  return (
    <div className="todo_item">
      <h2 className="Note_heading">Note {todoitem.sno}</h2>
      <div className="Note_section">
        <div className="title">
          <h3 className="font_style">Title</h3>
          <p>{todoitem.title}</p>
        </div>
        <div className="title">
          <h3 className="font_style">Description</h3>
          <p>{todoitem.description}</p>
        </div>
      </div>

      <div className="button">
        <button className="DeleteButton" onClick={()=>onDelete(todoitem)}>
          Delete Node
        </button>
      </div>
    </div>
  );
};
