export function fetchFromApi () {
  let testString
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      const longitude = position.coords.longitude.toPrecision(8)
      const latitude = position.coords.latitude.toPrecision(8)
      console.log(longitude, latitude)
      testString = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/' + longitude + '/lat/' + latitude + '/data.json'
      console.log(testString)
      // eslint-disable-next-line
      fetch(testString)
        .then(res => res.json())
        .then(json => {
          // console.log(json)
          resolve(json)
        })
    })
  })
}

export function fetchFromApiFixed () {
  let testString
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      const latitude = 59.858198399999.toPrecision(8)
      const longitude = 17.646541800000.toPrecision(8)
      console.log(longitude, latitude)
      testString = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/' + longitude + '/lat/' + latitude + '/data.json'
      console.log(testString)
      // eslint-disable-next-line
      fetch(testString)
        .then(res => res.json())
        .then(json => {
          // console.log(json)
          resolve(json)
        })
    })
  })
}

export function fetchFromApiLocationiq () {
  let cityLink
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition((position) => {
      cityLink = 'https://us1.locationiq.com/v1/reverse.php?key=pk.3c7d149b10792893ae85cb1c22148eca&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&format=json'
      // eslint-disable-next-line
      fetch(cityLink)
        .then(res => res.json())
        .then(json => {
          resolve(json)
        })
    })
  })
}

export function fetchFromApiLocationiqFixed () {
  let cityLink
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition((position) => {
      cityLink = 'https://us1.locationiq.com/v1/reverse.php?key=pk.3c7d149b10792893ae85cb1c22148eca&lat=' + 59.858198399999.toPrecision(8) + '&lon=' + 17.646541800000.toPrecision(8) + '&format=json'
      // eslint-disable-next-line
      fetch(cityLink)
        .then(res => res.json())
        .then(json => {
          resolve(json)
        })
    })
  })
}

export function findImageFile (param) {
  let result
  const prefix = './img/'
  switch (param) {
    case 1:
      result = prefix + 'clear.svg'
      break
    case 2:
    case 3:
    case 4:
      result = prefix + 'halfclear.svg'
      break
    case 5:
      result = prefix + 'cloudy.svg'
      break
    case 6:
      result = prefix + 'overcast.svg'
      break
    case 7:
      result = prefix + 'fog.svg'
      break
    case 8:
    case 9:
    case 10:
    case 18:
    case 19:
    case 20:
      result = prefix + 'rain.svg'
      break
    case 11:
      result = prefix + 'thunderstorm.svg'
      break
    case 12:
    case 13:
    case 14:
    case 22:
    case 23:
    case 24:
      result = prefix + 'sleet.svg'
      break
    case 21 :
      result = prefix + 'thunder.svg'
      break
    case 25:
    case 26:
    case 27:
    case 15:
    case 16:
    case 17:
      result = prefix + 'snow.svg'
      break
    default:
      result = 'default'
      break
  }
  return result
}
