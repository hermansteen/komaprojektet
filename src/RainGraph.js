import React from 'react'
function RainGraph (props) {
  const rain = {}
  for (let i = 0; i < props.data.length; i++) {
    rain[i] = []
    for (let j = 0; j < props.data[i].parameters.length; j++) {
      const param = props.data[i].parameters[j]
      if (param.name === 'pmean') {
        rain[i].precip = param.values[0]
      }
      rain[i].time = props.data[i].validTime.substr(11, 5)
    }
  }
  let pMax = -1
  for (let i = 0; i < props.data.length; i++) {
    if (rain[i].precip > pMax) { pMax = rain[i].precip }
  }
  console.log(pMax)
  const onePrecent = pMax / 100
  console.log(rain)
  for (let i = 0; i < props.data.length; i++) {
    if (onePrecent !== 0) {
      rain[i].barHeight = ((rain[i].precip / onePrecent)) + 'px'
      console.log(rain[i].barHeight)
    } else {
      rain[i].barHeight = 1 + 'px'
    }
    if (rain[i].barHeight === '0px') {
      rain[i].barHeight = '1px'
    }
  }
  return (
    <div className='RainGraph'>
      {Object.keys(rain).map((hours) => (
        <div key={hours} className='graphContainer'>
          <div className='bar' style={{ height: rain[hours].barHeight }} />
          <div className='graphLabel' key={hours}>{rain[hours].time}</div>
        </div>
      ))}
    </div>
  )
}

export default RainGraph
