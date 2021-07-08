import React from "react";

const Sum = ({course}) =>{

let total2=course.parts.reduce((a,b)=>{
    return ({exercises:a.exercises+b.exercises});
})
  return (
        <b><div>Total of {total2.exercises} exercises</div></b>)
}

export default Sum;