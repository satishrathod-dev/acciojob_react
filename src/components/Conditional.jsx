import React from 'react'
import Home from './Home';
import Login from './Login';

function Conditional() {
    const isUserLoggedin = true;
  return (
    <div>
        {isUserLoggedin ? <Home/> : <Login/>}
    </div>
  )
}

export default Conditional