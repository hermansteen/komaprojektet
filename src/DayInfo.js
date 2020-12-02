import React from 'react'
function DayInfo (props) {
  return (
    <div className='DayInfo'>
      <h1>{props.data.parameters[11].values[0]}</h1>
      {console.log('DayInfo kallas')}
    </div>
  )
}
export default DayInfo
