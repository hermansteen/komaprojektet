import React, {useEffect} from 'react';
import { fetchFromApi } from './lib/api';

function App() {
  useEffect(()=> {
    const fetch = async () => {
      const data = await fetchFromApi()
      console.log(data)
    }
    fetch()
  })
  return (
    <p>hello world</p>
  )
}

export default App;