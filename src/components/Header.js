import React from 'react'

function Header({toggleMode, darkmode}) {
    
  return (
    <div className='header'>
        <h1> Notes </h1>
        <button className={`${darkmode ? 'dark-btn' : 'light-btn' }`} onClick={() => toggleMode((prev) => !prev) }> Dark Mode </button>
    </div>
  )
}

export default Header