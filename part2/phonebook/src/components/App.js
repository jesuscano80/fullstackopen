
import React, { useState, useEffect } from 'react'
import Filter from "./Filter";
import Input from "./Input";
import ShowAll from "./ShowAll";
import server from "./backend";




const App = (props) => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: "004495" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState("")
  const [ filter, setNewFilter ] = useState("")
  const [ found, setNewFound ] = useState({})
  const initialLoad = ()=>{
    
    server.getAll()
    .then(response=> 
      setPersons(response.data)
    )
  }
  useEffect(initialLoad, [persons]);
  
  
  useEffect(() => { 
    const check=persons.map(person=> person.name.trim().toLowerCase()).indexOf(filter)
    
    
    if(check>=0){
        console.log("si está");
        setNewFound(persons[check])
    }
  }, [filter,persons])

  const addPerson = (event)=>{
      event.preventDefault();
      const arrayPosition=persons.map(person=> person.name).indexOf(newName);
      if(arrayPosition===-1){   
        let newAdd= {name:newName, number: newPhone};
        
        server.postOne(newAdd)
        .then(data=> console.log(data))
        .catch(err=> console.log(err))
        setPersons(persons.concat(newAdd));
      }
      else{
          let newAdd= {name:newName, number: newPhone};
          console.log(newAdd);
          if(window.confirm(`${newName} is already in Phonebook, do you want to replace phone number?`)){
          server.update(persons[arrayPosition].id,newAdd);
          
          }
      }
      
      
  }
  const handleName = (event)=>{
      setNewName(event.target.value);
  }
  const handlePhone = (event)=>{
      setNewPhone(event.target.value);
  }

  const filterit = (event)=>{
    
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
  
      <ShowAll show={persons} setPersons={setPersons}></ShowAll>
    </div>
  )
}

export default App