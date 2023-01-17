import React, { useState, useEffect, useRef } from 'react'
import Notes from './components/Notes.jsx'
import NoteForm from './components/NoteForm.jsx'
import Home from './components/Home.jsx'
import comm from './services/notes.js'
import request from './services/login.js'
import Notification from './components/Notification.jsx'
import LoginForm from './components/LoginForm.jsx'
import Togglable from './components/Togglable.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

const App = () => {
  const [newNote, setNewNote] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      comm.setToken(user.token)
    }
  }, [])

  const addNote = async (newNote) => {
    try {
      // adding new note
      const response = await comm.create(newNote)
      setNewNote(response)
      // setNotes(notes.concat(response))  // updating the notes that render on the frontend
      setNotification('note added successfully...')
      setTimeout(() => {
        setNotification(null)
      }, 2000)
    } catch (exception) {
      console.log(exception.response.data.error)
      setNotification(`${exception.response.data.error}`)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }

    noteFormRef.current.toggleVisibility()
  }

  const getUsername = (e) => {
    setUsername(e.target.value)
  }

  const getPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(`logging in with username:${username} and pw:${password}`)

    // credentials object
    const credentials = {
      username,
      password,
    }

    try {
      const user = await request.login(credentials)
      setUser(user)
      // receiving the user token
      comm.setToken(user.token)
      setPassword('')
      setUsername('')
      setNotification(`Logged in successfully. Welcome ${user.name}!`)
      setTimeout(() => {
        setNotification(null)
      }, 4000)

      window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    } catch (exception) {
      console.log(exception) // to get error message
      setNotification(`${exception.response.data.error}`)
      setTimeout(() => {
        setNotification(null)
      }, 4000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser')

    setNotification('Logging out...')
    setTimeout(() => {
      setNotification(null)
      setUser(null)
    }, 1000)
  }

  const noteFormRef = useRef()

  return (
    <div id="appContainer">
      <div>
        <NavBar user={user} handleLogout={handleLogout} />
        <Notification message={notification} />
      </div>

      <Routes>
        <Route
          path="/notes"
          element={
            <>
              <Notes newNote={newNote} />
              <Togglable buttonLabel="Add Note" ref={noteFormRef} user={user}>
                <NoteForm createNote={addNote} />
              </Togglable>
            </>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <LoginForm
                handleLogin={handleLogin}
                username={username}
                getUsername={getUsername}
                password={password}
                getPassword={getPassword}
              />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
