import React, {useState, useEffect} from 'react'
import {Button, Table} from 'react-bootstrap'
import comm from '../services/notes.js'



const Note = ({ note, toggleImportance, deleteEntry }) => {

  const label = note.important ? 'make not important' : 'make important'

  const style = {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return(
    <>
      <div style={style}  className='note'>
        <h4>{note.content}</h4>

        <div>
        <Button 
        variant = {label === 'make not important' ? 'secondary':'primary'} 
        className='impBtn' 
        onClick = {toggleImportance}>
          {label}
        </Button>
        <Button 
        style={{marginLeft:'3px'}} 
        variant='danger' 
        onClick = {deleteEntry}>
          Delete
        </Button>
        </div>
      </div>
    </>
  )
}



// notes component
const Notes = ({newNote}) => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    let response = comm.getAll()
    response.then(data => setNotes(data))

  }, [])

  useEffect(() => {
    if(newNote) {
      setNotes([...notes, newNote])
    }
  }, [newNote])
  


  const toggleImportance = (id) => {
    const note = notes.find(note => note.id === id)
    const changedNote = { ...note, important: !note.important }

    comm
      .update(id, changedNote)
      .then(response => {
        let newNotes = [...notes]

        newNotes.splice(newNotes.indexOf(note), 1, response.data)    // array that containes the removed elements
        setNotes(newNotes)
      })
  }

  const deleteEntry = id => {
    comm
      .deleteEntry(id)
      .then(response => {
        if(response.status === 204) {

          const newNotes = notes.filter(note => note.id !== id)
          setNotes(newNotes)
        }
      })
  }


  return (
    <Table striped bordered hover className='noteTable'>
        <tbody>
        {
          notes.map(note => 
            <tr key = {note.id}>
              <td>
              <Note 
              note = {note} 
              toggleImportance = {() => toggleImportance(note.id)}
              deleteEntry = {() => deleteEntry(note.id)}/>
              </td> 
            </tr>
          )}
        </tbody>
      </Table>
  )
}

export default Notes