import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

import { useDispatch, useSelector } from 'react-redux'
import { getCities, getFullData, getHotels } from '../redux/actions/hotelAction'

import '../style/dashboard.css'


const Dashboard = () => {
    const dispatch = useDispatch()
    const fullData = useSelector(state => state.hotel)

    const [show, setShow] = useState({
        address: false,
        proximity: false,
        cp: false,
        cr: false,
        eci: false,
        er: false,
        es: false,
        embc: false,
        js: false,
        pr: false,
        sar: false,
        sr: false,
        suite: false
    })

    const [proximity, setProximity] = useState([])
    const [carRentals, setCarRentals] = useState([])
    const [deluxRooms, setDeluxRooms] = useState([])
    const [eci, setEci] = useState([])
    const [executiveRoom, setExecutiveRoom] = useState([])
    const [executiveSuite, setExecutiveSuite] = useState([])
    const [extraMeal, setExtraMeal] = useState([])
    const [jrSuite, setJrSuite] = useState([])
    const [premierRoom, setPremierRoom] = useState([])
    const [spAR, setSPAR] = useState([])
    const [standardRoom, setStandardRoom] = useState([])
    const [suite, setSuite] = useState([])

    let select1 = useRef()
    let select2 = useRef()

    useEffect(() => {
      dispatch(getCities())
    }, [])

    useEffect(() => {
        console.log(fullData.fullData)
        if(fullData.fullData){
            let arr = []
            setProximity(fullData.fullData[0]?.Proximity.split(';'))
            setCarRentals(fullData.fullData[0]?.Car_Rentals.split(';'))
            setDeluxRooms(fullData.fullData[0]?.Deluxe_Room.split('•'))
            // setEci(fullData.fullData[0]?.ECI_LCO.split(';'))
            setExecutiveRoom(fullData.fullData[0]?.Executive_Room.split('•'))
            setExecutiveSuite(fullData.fullData[0]?.Executive_Suite.split('•'))
            setExtraMeal(fullData.fullData[0]?.Extra_Meal_Bed_Charges.split(';'))
            setJrSuite(fullData.fullData[0]?.Jr_Suite.split(';'))
            setPremierRoom(fullData.fullData[0]?.Premier_Room.split(';'))
            setSPAR(fullData.fullData[0]?.Specially_Abled_Room.split(';'))
            setStandardRoom(fullData.fullData[0]?.Standard_Room.split('•'))
            setSuite(fullData.fullData[0]?.Suite.split('•'))

            let ec = fullData.fullData[0]?.ECI_LCO.split(';')

            for(let i=0; i<ec.length; i++){
                arr = [...arr, ...ec[i].split('+')]
            }
            setEci(arr)
        }
    },[fullData])

    const handleChange = (e) => {
        let objectBod = {}

        objectBod[`${e.target.name}`] = e.target.value

        select2.current.value = ''

        dispatch(getHotels(objectBod))
    }
    
    const handleHotelChange = (e) => {
        let objectBod = {}

        objectBod[`${e.target.name}`] = e.target.value

        dispatch(getFullData(objectBod))
    }

    const handleShowHide = (e) => {
        const val = e.target.getAttribute('name')

        let obj = {...show, [val] : !show[`${val}`]}

        setShow(obj)
    }

    let val2 = []
    
  return (
    <div>
      <Navbar /> 
      <div className='dashboardContainer'>
        <div className='filterContainer'>
            <div className='dropdownContainer'>
                City
                <select ref={select1} name="city" id="City" onChange={(e) => handleChange(e)}>
                    <option value=''>-</option> 
                    {fullData.cities?.map(val => (
                        <option value={val}>{val}</option>  
                    ))}   
                </select>   
            </div>  
            <div className='dropdownContainer'>
                Hotel
                <select ref={select2} name="hotel" id="Hotel" onChange={(e) => handleHotelChange(e)}>
                    <option value=''>-</option> 
                    {fullData.hotels?.map(val => (
                        <option value={val}>{val}</option>
                    ))}     
                </select>   
            </div>
        </div> 

        {!fullData.fullData || fullData.fullData.length === 0 ? 
            (<div className='welcome'>
                <p>Welcome</p>
            </div>) :
            (
                <>
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Address</div>
                            {show.address ? 
                                <div className='symbol' name='address' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='address' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.address ? 'bannerContent open' :'bannerContent'}>
                            <p>{fullData.fullData[0].Address}</p>
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Proximity</div>
                            {show.proximity ? 
                                <div className='symbol' name='proximity' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='proximity' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.proximity ? 'bannerContent open' :'bannerContent'}>
                            {proximity.map(val => (
                                <p>{val}</p>
                            ))}
                        </div>
                    </div>

                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Early CheckIn / Late CheckOut</div>
                            {show.eci ? 
                                <div className='symbol' name='eci' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='eci' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.eci ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].ECI_LCO === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (   <>                                    
                                        {
                                        eci.map(val => {
                                            return(<p>{val}</p>)
                                        })}
                                    </>
                                    
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Cancelation Policy</div>
                            {show.cp ? 
                                <div className='symbol' name='cp' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='cp' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.cp ? 'bannerContent open' :'bannerContent'}>
                            <p>{fullData.fullData[0].Cancellation_Policy}</p>
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Car Rentals</div>
                            {show.cr ? 
                                <div className='symbol' name='cr' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='cr' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.cr ? 'bannerContent open' :'bannerContent'}>
                            {carRentals.map(val => (
                                <p>{val}</p>
                            ))}
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Extra Meal Bed Charges</div>
                            {show.embc ? 
                                <div className='symbol' name='embc' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='embc' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.embc ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Extra_Meal_Bed_Charges === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {extraMeal.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Delux Room</div>
                            {show.dr ? 
                                <div className='symbol' name='dr' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='dr' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.dr ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Deluxe_Rooms === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {deluxRooms.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Executive Room</div>
                            {show.er ? 
                                <div className='symbol' name='er' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='er' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.er ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Executive_Room === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {executiveRoom.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Executive Suite</div>
                            {show.es ? 
                                <div className='symbol' name='es' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='es' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.es ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Executive_Suite === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {executiveSuite.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Jr Suite</div>
                            {show.js ? 
                                <div className='symbol' name='js' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='js' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.js ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Jr_Suite === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {jrSuite.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premier Room</div>
                            {show.pr ? 
                                <div className='symbol' name='pr' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='pr' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.pr ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Premier_Room === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {premierRoom.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Specially Abled Room</div>
                            {show.sar ? 
                                <div className='symbol' name='sar' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='sar' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.sar ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Specially_Abled_Room === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {spAR.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Standard Room</div>
                            {show.sr ? 
                                <div className='symbol' name='sr' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='sr' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.sr ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Standard_Room === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {standardRoom.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Suite</div>
                            {show.suite ? 
                                <div className='symbol' name='suite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='suite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.suite ? 'bannerContent open' :'bannerContent'}>
                            {fullData.fullData[0].Suite === 'NA' ?
                                (<p>Not Available</p>)
                                :
                                (
                                    <div>
                                        {suite.map(val => (
                                            <p>{val}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </>
            )
        } 
      </div>   
    </div>
  )
}

export default Dashboard