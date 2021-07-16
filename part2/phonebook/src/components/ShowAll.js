import React, {useEffect} from "react";
import server from "./backend";

const ShowAll = (props)=>{
    
    useEffect(()=>console.log("persons!"), [])

    const handleDelete = (id)=>{
       
        if(window.confirm("are you sure to delete?")){
            console.log(id);
        server.deleteOne(id);
        props.setPersons(props.show);
        }
    }
    return (
        <div> {props.show.map(person=><p key={person.name}> {person.name} {person.number} <button onClick={()=>handleDelete(person.id)}>Delete it</button></p>)}</div>
    )
}

export default ShowAll;