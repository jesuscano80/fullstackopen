import React from "react"
import "./Found.css";
import Showall from "./ShowAll";


const Found = (props)=>{
  
    const showData=(elem)=>{
        props.set([elem]);
    }
    if (props.array.length>10){
        return (<p>Too many matches, specify another filter</p>)
    }

    else if (props.array.length>1 && props.array.length<10){
        return (                 
            <>
            {props.text}
            {props.array.map(elem=> <div key={elem.numericCode}><p>{elem.name} <button data={elem} onClick={()=> showData(elem)}>show</button></p></div>)}
            
            </>
        )

        }
    else if(props.array.length===1){
       
        return (
            <>
           
            <Showall array={props.array}></Showall>
           
            </>
        )
    }
    else{
        return (
            <>
            <p>Write something</p>
            </>
        )
    }
}

export default Found;