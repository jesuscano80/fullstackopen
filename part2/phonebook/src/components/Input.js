import React from "react"

const Input= (props)=>{
    console.log(props);
    return (<>
    {props.text}<input onChange={props.onChange} value={props.value}></input>
    </>
    )
}

export default Input;