import React, { useEffect, useState } from 'react'
import { fetchFromApi, fetchFromApiLocationiq } from './lib/api'
import DayInfo from './DayInfo.js'
import './resources/css/app.css'

function App () {
  const [data, setData] = useState()
  const [city, setCity] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi()
      const city = await fetchFromApiLocationiq()
      console.log(data)
      console.log(city)
      setData(data)
      setCity(city)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      {data && city
        ? <div>
          <DayInfo data={data} />
          <p>{city.address.town}</p>
          </div>
        : null}
    </div>
  )
}

export default App
