import React from 'react'
function DayInfo (props) {
  return (
    <div className='DayInfo'>
      <h1>{props.data.timeSeries[0].parameters[11].values}</h1>
      {console.log('DayInfo kallas')}
    </div>
  )
}
export default DayInfo
