import React from "react";
import Part from "./Part"

const Content = ({course})=> {
return (
    <div>
        {course.parts.map(elem=><Part key={elem.id} elem={elem}/>)}
    </div>
)
}

export default Content;