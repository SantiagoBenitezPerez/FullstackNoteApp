import React from 'react'

const Home = () => {
  return (
    <div className="homeContainer">
      <h2 id="welcomeHeader">Welcome to the Note Application</h2>

      <div className="content">
        <h3>Purpose</h3>
        <p>
          On this note application we can create notes which will have a 'non-important' default. As a user you can
          change the importance of notes by clicking on the 'make important' button. This web application runs on the
          MERN stack (MongoDB, Express.js, React.js, Node.js)
        </p>
      </div>

      <div className="content">
        <h3>More About</h3>
        <p>
          To learn more about this project, you can visit{' '}
          <a href="https://github.com/SantiagoBenitezPerez">my github account</a>. In case of any bug that you come
          across fell free to make a pull request to the the repository of this project.
        </p>
      </div>
    </div>
  )
}

export default Home
