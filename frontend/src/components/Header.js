import React from 'react'

function Header() {
  return (
    <div>
    <img className="Header-logo" src={logo} alt="Logo" />
      <Button
        pill
        className="Header-signin"
        onClick={() => setToggleLogin(true)}
      >
        Sign In
      </Button>
      
    </div>
  )
}

export default Header
