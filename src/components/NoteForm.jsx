import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const getNote = (e) => setNewNote(e.target.value)

  const addNote = (e) => {
    e.preventDefault()
    let noteToAdd = {
      content: newNote,
      important: false,
    }
    createNote(noteToAdd)
  }

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>Add a new note</h2>

        <Form>
          <Form.Group className="formGroup">
            <Form.Label>Note: </Form.Label>
            <Form.Control id="noteInput" value={newNote} onChange={getNote} />
            <Button onClick={addNote} variant="primary" id="addNoteBtn">
              Add Note
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default NoteForm
