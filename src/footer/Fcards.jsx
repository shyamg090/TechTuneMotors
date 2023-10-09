import React from 'react'

const Fcards = ({arr}) => {
  return (
      <div className='f-cards'>
              <h3>{arr?.title}</h3>
              <div className="f-cards-content">
                  <div className="point">
                      <h4>{arr?.point1}</h4>
                  </div>
                  <div className="point">
                      <h4>{arr?.point2}</h4>
                  </div>
                  <div className="point">
                       <h4>{arr?.point3}</h4>
                  </div>
              </div>
      </div>
  )
}

export default Fcards