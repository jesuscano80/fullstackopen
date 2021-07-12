import React from "react";

const Filter=(props)=>{

    return(<div>
      <p>Filter shown with:   <input onChange={props.onChange}></input></p>
    </div>)
}

export default Filter;