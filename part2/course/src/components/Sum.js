import React from "react";

const Sum = ({course}) =>{
  let total=0;
  course.parts.forEach(element => {
        total+=element.exercises;      
  });
console.log(total);
    return (
        <b><div>Total of {total} exercises</div></b>)
}

export default Sum;