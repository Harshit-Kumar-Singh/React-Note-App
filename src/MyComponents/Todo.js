import React from "react";
import { SubTodo } from "./SubTodo";
import { useState } from "react";
import { AddTodo } from "./AddTodo";
export default function Todo() {
  
  const onDelete = (todo)=>{
      console.log("In Delete");
      settodos(todos.filter((e)=>{
        return e!=todo;
      }))
  }
  let initialTodo = [];
  const [todos, settodos] = useState(initialTodo);
  const addTodo = (title,desc) =>{
    let sno;
    if(todos.length==0)
    {
      sno=1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      description:desc,
    }
    settodos([...todos,myTodo]);
  }
  
  return (
    <div className="parent_todo">
      <div className="todos">
        <AddTodo addTodo = {addTodo}/>
        <SubTodo todos = {todos}  onDelete = {onDelete}/>
      </div>
    </div>
  );
}
