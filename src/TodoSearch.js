import React from "react";

function TodoSearch(){
    return(
        <div>
            <input className="search-box" type="text" placeholder="Add new task here..."/>
            <button className="add-button">+</button>
        </div>
    );
}

export {TodoSearch};