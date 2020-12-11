import React from 'react'
import HourInfo from './HourInfo'
function HourList (props) {
  console.log('props data')
  console.log(props)
  const delta = 2
  const filteredHours = {}
  let j = 0
  for (let i = 0; i < props.data.length; i = i + delta) {
    filteredHours[j] = props.data[i]
    j++
  }
  console.log('Hourlist: ')
  console.log(filteredHours)
  return (
    <div className='HourList'>
      {Object.entries(filteredHours).map((hour) => <HourInfo data={hour} key={hour.validTime} />)}
    </div>
  )
}

export default HourList
