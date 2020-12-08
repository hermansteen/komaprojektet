import React from 'react'
function HourInfo (props) {
  const timeSeries = {}
  console.log(props.data)
  for (let i = 0; i < props.data.parameters.length; i++) {
    const param = props.data.parameters[i]
    switch (param.name) {
      case 't' :
        timeSeries.temperature = param.values[0]
        break
      case 'Wsymb2':
        timeSeries.cat = param.values[0]
        break
      case 'pmean':
        timeSeries.precip = param.values[0]
        break
      default:
        break
    }
  }
  // console.log(timeSeries)
  return (
    <div className='HourInfo'>
      <h1>{timeSeries.temperature}</h1>
    </div>
  )
}
export default HourInfo
