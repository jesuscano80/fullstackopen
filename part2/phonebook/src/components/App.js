import React, { useState, useEffect } from 'react'
import Filter from "./Filter";
import Input from "./Input";
import ShowAll from "./ShowAll";

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: "004495" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState("")
  const [ filter, setNewFilter ] = useState("")
  const [ found, setNewFound ] = useState({})
  useEffect(() => { 
    const check=persons.map(person=> person.name.trim().toLowerCase()).indexOf(filter)
    console.log(filter);
    console.log(persons.map(person=> person.name.trim().toLowerCase()));
    console.log(check);
    if(check>=0){
        console.log("si está");
        setNewFound(persons[check])
    }
  }, [filter,persons])

  const addPerson = (event)=>{
      event.preventDefault();
      const arrayPosition=persons.map(person=> person.name).indexOf(newName);
      if(arrayPosition===-1){   
        let newAdd= {name:newName, phone: newPhone};
        setPersons(persons.concat(newAdd));
      }
      else{
          alert(`${newName} is already in Phonebook`)
      }
      
      
  }
  const handleName = (event)=>{
      setNewName(event.target.value);
  }
  const handlePhone = (event)=>{
      setNewPhone(event.target.value);
  }

  const filterit = (event)=>{
    console.log(event);
     setNewFilter((event.target.value).toLowerCase());
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterit}></Filter>
      <p>Found: {found.name} {found.phone}</p>
      <h3>Add new</h3>
      <form onSubmit={addPerson}>
        <div>
          
          <Input text="name:" onChange={handleName} value={newName}></Input>
          <Input text="phone:" onChange={handlePhone} value={newPhone}></Input>
        
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
  
      <ShowAll show={persons}></ShowAll>
    </div>
  )
}

export default App