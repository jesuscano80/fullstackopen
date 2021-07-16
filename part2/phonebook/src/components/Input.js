import React from "react"

const Input= (props)=>{
 
    return (<>
    {props.text}<input onChange={props.onChange} value={props.value}></input>
    </>
    )
}

export default Input;