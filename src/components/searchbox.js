import React from "react";






function SearchBox(props){

    return (
        <div class="input-group flex-nowrap w-25 mx-auto mt-0">
            
            <input type="text" value={props.fullName} name="fullName" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={props.handleChange} />
        </div>
    )
};


export default SearchBox;
