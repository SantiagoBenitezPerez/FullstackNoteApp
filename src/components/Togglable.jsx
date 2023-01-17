import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Togglable = forwardRef((props, refs) => {
  const [loginVisible, setLoginVisible] = useState(false)

  const toggleVisibility = () => {
    if (props.user) setLoginVisible(!loginVisible)
    else alert('you need to log in to add a note')
  }

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    }
  })

  const style = {
    display: loginVisible ? '' : 'none',
    width: '60%',
    margin: 'auto',
    padding: '10',
  }

  return (
    <>
      <div style={{ marginBottom: '15px' }} className={loginVisible ? 'noteFormContainer1' : 'noteFormContainer2'}>
        <div style={!loginVisible ? { display: '' } : { display: 'none' }}>
          <Button variant="success" onClick={toggleVisibility}>
            {props.buttonLabel}
          </Button>
        </div>

        <div style={style} className="togglableContent">
          {props.children}
          <div style={{ margin: 'auto', width: '85px' }}>
            <Button variant="danger" onClick={toggleVisibility}>
              CANCEL
            </Button>
          </div>
        </div>
      </div>
    </>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}

export default Togglable
