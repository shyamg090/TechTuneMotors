import './pcards.css';

const Pcards = ({ arr }) => {

    return (
            <div className='pri-cards'>

                <div className="pri-card-img">
                    <img src={arr?.imageLink} alt="simpleimg" />
                </div>

                <div className="pri-cards-content">
                    <div className="pri-point">
                        <h3>{arr?.serviceName}</h3>
                    </div>
                    <div className="pri-point">
                        <h3>{arr?.description}</h3>
                    </div>
                    <div className="pri-point2">
                        <h3>{arr?.price}</h3>
                    </div>
                    {/* <div className="pri-point2">
                  <button><Link to={'/mainform'}>Check Out</Link></button>
              </div> */}
                </div>
            </div>
    )
}

export default Pcards;