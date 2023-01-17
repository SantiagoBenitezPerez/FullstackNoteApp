import React from 'react'
import {Alert} from 'react-bootstrap'

const Notification = ({message}) => {
  return (
    <>
    {message ? (<Alert>{message}</Alert>):null}
    </>
  )
}

export default Notification