import React from 'react'
import { findImageFile } from './lib/api.js'
function SplashScreen (props) {
  const timeSeries = {}
  for (let i = 0; i < props.data.length; i++) {
    timeSeries[i] = []
    for (let j = 0; j < props.data[i].parameters.length; j++) {
      const param = props.data[i].parameters[j]
      //   console.log(param)
      switch (param.name) {
        case 't' :
          timeSeries[i].temperature = Math.round(param.values[0])
          //   console.log('temperature found')
          //   console.log(timeSeries[i])
          break
        case 'Wsymb2':
          timeSeries[i].cat = param.values[0]
          //   console.log(timeSeries[i])
          break
        case 'pmean':
          timeSeries[i].precip = param.values[0]
          break
        default:
          break
      }
    }
  }
  let tempMin = 1000000
  let tempMax = -999999
  let chanceOfRain = 0
  for (let i = 0; i < props.data.length; i++) {
    if (timeSeries[i].temperature > tempMax) {
      tempMax = timeSeries[i].temperature
    }
    if (timeSeries[i].temperature < tempMin) {
      tempMin = timeSeries[i].temperature
    }
    timeSeries[i].imageFile = findImageFile(timeSeries[i].cat)
    if (timeSeries[i].precip > 0) {
      chanceOfRain = 1
    }
  }
  //   console.log(timeSeries)
  //   console.log(tempMax)
  //   console.log(tempMin)
  return (
    <div className='SplashScreen'>
      <p className='description'>
        {chanceOfRain
          ? 'Regnskurar kan förekomma under dagen'
          : 'Inget regn idag'}
      </p>
      <img id='currentIcon' src={timeSeries[0].imageFile} alt='current weather icon' />
      <h2 className='current'>{timeSeries[0].temperature + '\u00b0'}</h2>
      <div className='minMax'>
        <h3>min/max</h3>
        {/* eslint-disable-next-line */}
        <h3>{tempMin + '\u00b0' + '/' + tempMax + '\u00b0'}</h3>
      </div>
    </div>
  )
}
export default SplashScreen
