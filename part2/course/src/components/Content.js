import React from "react";
import Part from "./Part";
import Sum from "./Sum";

const Content = ({course})=> {
return (
    <div>
        {course.parts.map(elem=><Part key={elem.id} elem={elem}/>)}
        <Sum course={course}></Sum>
    </div>
)
}

export default Content;