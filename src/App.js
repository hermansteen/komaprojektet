import React, { useEffect, useState } from 'react'
import { fetchFromApi } from './lib/api'

function App () {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetch = async () => {
      const temp = await fetchFromApi()
      setData(temp)
    }
    fetch()
  })
  return (
    <p>
      {console.log(data.timeSeries)}
    </p>
  )
}

export default App
