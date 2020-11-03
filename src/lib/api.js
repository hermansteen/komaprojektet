export function fetchFromApi() {
    let testString;
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            const longitude = Math.round(position.coords.longitude);
            const latitude = Math.round(position.coords.latitude);
            console.log(longitude, latitude)
            testString = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + longitude + "/lat/" + latitude + "/data.json";
            console.log(testString)
            fetch(testString)
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    resolve(json)
                })
        });
    })
}