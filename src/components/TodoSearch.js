import React from "react";

function TodoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
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