import React from 'react'
import Common from '../OurservicesComponents/common/Common'
import { servicesArr } from '../MainFolder/information'

const Services = () => {

  // console.log(servicesArr);

  return (
      <div>
      <Common key={1} array={servicesArr[0]} />
    </div>
  )
}

export default Services