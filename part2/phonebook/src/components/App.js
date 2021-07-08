import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addPerson = (event)=>{
      event.preventDefault();
      const arrayPosition=persons.map(person=> person.name).indexOf(newName);
      if(arrayPosition===-1){   
        let newAdd= {name:newName};
        setPersons(persons.concat(newAdd));
      }
      else{
          alert(`${newName} is already in Phonebook`)
      }
      
      
  }
  const handleInput = (event)=>{
      setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleInput} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    
      <div> {persons.map(person=><p key={person.name}> {person.name}</p>)}</div>
      
    </div>
  )
}

export default App