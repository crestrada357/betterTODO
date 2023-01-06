import React from "react";

const TodoItems=[
    {text:"Cut onions", completed:true},
    {text:"Grate cheesse", completed:false},
    {text:"Make dessert", completed:false}
];

function TodoList(){
    const listItems = TodoItems.map((item) =>
    <li>{item.text}  <button>x</button></li>
    );
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export {TodoList};