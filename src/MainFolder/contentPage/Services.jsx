import React from 'react'
import Common from '../../OurservicesComponents/common/Common'
import { servicesArr } from '../information'
// import { MainContext } from '../MainFolder/Main'

const Services = () => {

  return (
    <div>
      <Common key={1} array={servicesArr[0]} />
    </div>
  )
}

export default Services