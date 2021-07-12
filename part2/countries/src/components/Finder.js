import React from "react";

const Finder= (props)=>{
    
    return (
        <>
            <p>{props.text}</p><input onChange={props.onChange}></input>
        </>
    )
}

export default Finder;