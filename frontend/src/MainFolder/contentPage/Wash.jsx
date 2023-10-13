import React from 'react'
import Common from '../../OurservicesComponents/common/Common'
import { servicesArr } from '../information'

const Wash = () => {

  return (
    <div>
      <Common key={2} array={servicesArr[1]} />
    </div>
  )
}

export default Wash