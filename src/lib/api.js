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
