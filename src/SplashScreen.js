import React from 'react'
function SplashScreen (props) {
  const timeSeries = {}
  for (let i = 0; i < props.data.length; i++) {
    timeSeries[i] = []
    for (let j = 0; j < props.data[i].parameters.length; j++) {
      const param = props.data[i].parameters[j]
      //   console.log(param)
      switch (param.name) {
        case 't' :
          timeSeries[i].temperature = param.values[0]
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
    const prefix = './resources/img/'
    switch (timeSeries[i].cat) {
      case 1:
        timeSeries[i].imageFile = prefix + 'clear.svg'
        break
      case 2:
      case 3:
      case 4:
        timeSeries[i].imageFile = prefix + 'halfclear.svg'
        break
      case 5:
        timeSeries[i].imageFile = prefix + 'cloudy.svg'
        break
      case 6:
        timeSeries[i].imageFile = prefix + 'overcast.svg'
        break
      case 7:
        timeSeries[i].imageFile = prefix + 'fog.svg'
        break
      case 8:
      case 9:
      case 10:
      case 18:
      case 19:
      case 20:
        timeSeries[i].imageFile = prefix + 'rain.svg'
        break
      case 11:
        timeSeries[i].imageFile = prefix + 'thunderstorm.svg'
        break
      case 12:
      case 13:
      case 14:
      case 22:
      case 23:
      case 24:
        timeSeries[i].imageFile = prefix + 'sleet.svg'
        break
      case 21 :
        timeSeries[i].imageFile = prefix + 'thunder.svg'
        break
      case 25:
      case 26:
      case 27:
      case 15:
      case 16:
      case 17:
        timeSeries[i].imageFile = prefix + 'snow.svg'
        break
      default:
        timeSeries[i].imageFile = 'default'
        break
    }
    if (timeSeries[i].precip > 0) {
      chanceOfRain = 1
    }
  }
  //   console.log(timeSeries)
  //   console.log(tempMax)
  //   console.log(tempMin)
  return (
    <div>
      <p className='description'>
        {chanceOfRain
          ? 'Regnskurar kan förekomma under dagen'
          : 'Inget regn idag'}
      </p>
      <img src={timeSeries[0].imageFile} />
      <h3 className='current'>{timeSeries[0].temperature}</h3>
      <div className='minMax'>
        <h3>min/max</h3>
        <h3>{tempMin + '/' + tempMax}</h3>
      </div>
    </div>
  )
}
export default SplashScreen
