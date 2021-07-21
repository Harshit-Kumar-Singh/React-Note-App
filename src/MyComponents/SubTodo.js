import React from "react";
import { TodoItem } from "./TodoItem.js";

export const SubTodo = ({todos,onDelete}) => {
  return (
    <div>
     {todos.map((x)=>{
         return(
            <TodoItem todoitem = {x}  onDelete = {onDelete}/>
         )
     })}
    </div>
  );
};
