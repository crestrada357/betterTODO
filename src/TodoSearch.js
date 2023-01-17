import React from "react";

function TodoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <div>
            <input 
                className="search-box" 
                type="text" 
                placeholder="Add new task here..."
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <button className="add-button">+</button>
        </div>
    );
}

export {TodoSearch};