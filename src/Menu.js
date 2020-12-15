import React from 'react'
function Menu (props) {
  return (
    <div className='Menu'>
      <div id='leftSideMenu'>
        <a href='https://hermansteen.github.io/komaprojektet/'><img src='./img/needle.svg' /></a>
        <h1>
          {props.city}
        </h1>
      </div>
      <img src='./img/amburgur.png' />
    </div>
  )
}
export default Menu
