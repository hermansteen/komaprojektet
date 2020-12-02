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
