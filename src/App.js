import React, { useEffect } from 'react'
import { fetchFromApi, fetchFromApiLocationiq } from './lib/api'
import DayInfo from './DayInfo.js'
import './resources/css/app.css'

function App () {
  let data = {}
  data.timeSeries = {}
  let city = {}
  const fetchData = async () => {
    data = await fetchFromApi()
    city = await fetchFromApiLocationiq()
    console.log(data)
    console.log(city)
  }
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      {data.timeSeries
        ? <ul>
          <DayInfo data={data.timeSeries[56]} />
          </ul>
        : null}
    </div>
  )
}

export default App
