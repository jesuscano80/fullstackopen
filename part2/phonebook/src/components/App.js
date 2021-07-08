import React, { useState, useEffect } from 'react'

const App = () => {
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
     setNewFilter((event.target.value).toLowerCase());
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter shown with: <input onChange={filterit}></input></p>
      <p>Found: {found.name} {found.phone}</p>
      <h3>Add new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleName} value={newName}/>
          phone: <input onChange={handlePhone} value={newPhone}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    
      <div> {persons.map(person=><p key={person.name}> {person.name} {person.phone}</p>)}</div>
      
    </div>
  )
}

export default App