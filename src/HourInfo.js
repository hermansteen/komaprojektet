import React from 'react'
import { findImageFile } from './lib/api.js'
function HourInfo (props) {
  const timeSeries = {}
  console.log(props.data)
  for (let i = 0; i < props.data[1].parameters.length; i++) {
    const param = props.data[1].parameters[i]
    switch (param.name) {
      case 't' :
        timeSeries.temperature = Math.round(param.values[0])
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
  const time = props.data[1].validTime.substr(11, 5)
  // console.log(timeSeries)
  return (
    <div className='HourInfo'>
      <p>{time}</p>
      <img src={findImageFile(timeSeries.cat)} />
      <p>{timeSeries.temperature + '\u00b0'}</p>
    </div>
  )
}
export default HourInfo
