import React from 'react'
function Menu (props) {
  return (
    <div className='header'>
      <h1>
        {props.city}
      </h1>
      <img src='/src/resources/img/amburgur.png' />
    </div>
  )
}
export default Menu
