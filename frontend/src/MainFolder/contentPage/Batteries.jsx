import React from 'react'
import Common from '../../OurservicesComponents/common/Common'
import { servicesArr } from '../information'

const Batteries = () => {
  return (
    <div>
      <Common key={3} array={servicesArr[2]} />
    </div>
  )
}

export default Batteries