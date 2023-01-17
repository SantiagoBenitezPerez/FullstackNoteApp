import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'


const LoginForm = ({
  handleLogin,
  username,
  getUsername,
  password,
  getPassword
}) => {
  return (

    <Form className='loginFormContainer'>
      {/* <div> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control className='loginInput' value={username} type="username" placeholder="Enter email" onChange={getUsername} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='loginInput' value={password} type="password" placeholder="Password" onChange={getPassword} />
      </Form.Group>

      <Button onClick={handleLogin} id = 'loginBtn' type="submit">log in</Button>

      {/* </div> */}


      {/* <div>
         username:
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={getUsername}
        />
      </div>

      <div>
         password:
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={getPassword}
        />
      </div> */}

    </Form>

  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  getUsername: PropTypes.func.isRequired,
  getPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}


export default LoginForm