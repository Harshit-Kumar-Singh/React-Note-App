import React from "react";
import { useState } from "react";
export const AddTodo = ({addTodo}) => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submit = (e) => {
      if(!title || !desc){
          alert("title or description can not be empty");
      }
      else {
         addTodo(title,desc);
         settitle("");
         setdesc("");
      }
  };
  return (
    <div className="parent_form">
      <div className="Add_Form">
        <h2 className="AddNoteTitle">Add a Note</h2>
        <div className="padding_css">
          <form onSubmit={submit} action="">
            <div>
              <label htmlFor="Title" className="font_style">
                Enter Title
              </label>
              <br />
              <input type="text" name="Title" className="form-title" value={title} onChange={(e)=>settitle(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="Description" className="font_style">
                Enter Description
              </label>
              <br />
              <input
                type="text" name="Description" className="form-description" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
            </div>
            <div className="button">
                <button type = "submit" className="SaveButton">Save</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};
