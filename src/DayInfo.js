import React from 'react'
function HourInfo (props) {
  const timeSeries = {}
  for (let i = 0; i < props.data.timeSeries.length; i++) {
    timeSeries[i] = []
    for (let j = 0; j < props.data.timeSeries[i].parameters.length; j++) {
      const param = props.data.timeSeries[i].parameters[j]
      switch (param.name) {
        case 't' :
          console.log('temp')
          timeSeries[i].temperature = param.values[0]
          break
        case 'Wsymb2':
          timeSeries[i].cat = param.values[0]
          break
        case 'pmean':
          timeSeries[i].precip = param.values[0]
          break
        default
      }
    }
  }
  console.log(timeSeries)
  return (
    <div className='HourInfo'>
      <h1>{timeSeries[0].temperature}</h1>
    </div>
  )
}
export default HourInfo
