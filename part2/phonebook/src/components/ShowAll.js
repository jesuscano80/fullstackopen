import React from "react";

const ShowAll = (props)=>{
    console.log(props.show);
    return (
        <div> {props.show.map(person=><p key={person.name}> {person.name} {person.number}</p>)}</div>
    )
}

export default ShowAll;