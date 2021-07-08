import React from "react";
import Header from "./Header"
import Content from "./Content"

const Course = ({course}) =>{
    return(
     <>   
    <Header course={course.name}></Header>
    <Content course={course}></Content>
    </>
    )
}

export default Course;