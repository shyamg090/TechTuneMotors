import React from 'react'
import Common from '../../OurservicesComponents/common/Common'
import { servicesArr } from '../information'

const Others = () => {
  return (
    <div>
      <Common key={4} array={servicesArr[3]} />
    </div>
  )
}

export default Others;