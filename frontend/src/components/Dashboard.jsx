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
        suite: false,
        sRoom: false,
        dSuite: false,
        stdRoom: false,
        stdSuite: false,
        grdnRoom: false,
        grdntRoom: false,
        execLakeViewRoom: false,
        presSuite: false,
        terrStudio: false,
        grdnSuite: false,
        mandalaS: false,
        premmRoom: false,
        premSuite: false,
        holyRoom: false,
        deluxS: false,
        premCottage: false,
        stndSuite: false,
        execBal: false,
        accRoom: false,
        herRoom: false,
        herStudio: false,
        herSuite: false,
        bayR: false,
        sSuite: false,
        dass: false,
        premRoom: false,
        premStudio: false,
        famSS: false,
        deluxeV: false,
        prw: false,
        pvrw: false,
        aurikaS: false
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
    const [superiorRoom, setSuperiorRoom] = useState([])
    const [duplexSuite, setDuplexSuite] = useState([])
    const [studioRoom, setStudioRoom] = useState([])
    const [studioSuite, setStudioSuite] = useState([])
    const [gardenRoom, setGardenRoom] = useState([])
    const [gardenTwinRoom, setGardenTwinRoom] = useState([])
    const [executiveLakeViewRoom, setExecutiveLakeViewRoom] = useState([])
    const [presidentialSuite, setPresidentialSuite] = useState([])
    const [terraceStudio, setTerraceStudio] = useState([])
    const [gardenSuite, setGardenSuite] = useState([])
    const [mandalaSuites, setMandalaSuites] = useState([])
    const [premierSuite, setPremierSuite] = useState([])
    const [hollywoodRoom, setHollywoodRoom] = useState([])
    const [deluxSuite, setDeluxSuite] = useState([])
    const [premierCottages, setPremierCottages] = useState([])
    const [standardSuite, setStandardSuite] = useState([])
    const [executiveBalcony, setExecutiveBalcony] = useState([])
    const [accessibleRoom, setAccessibleRoom] = useState([])
    const [heritageRoom, setHeritageRoom] = useState([])
    const [heritageStudio, setHeritageStudio] = useState([])
    const [heritageSuite, setHeritageSuite] = useState([])
    const [bayRoom, setBayRoom] = useState([])
    const [singleSuite, setSingleSuite] = useState([])
    const [das, setDas] = useState([])
    const [premiumRoom, setPremiumRoom] = useState([])
    const [premiumStudio, setPremiumStudio] = useState([])
    const [familyStudioSuite, setFamilyStudioSuite] = useState([])
    const [deluxeVista, setDeluxeVista] = useState([])
    const [prwpt, setPrwpt] = useState([])
    const [pvrwpt, setPvrwpt] = useState([])
    const [aurikaSuite, setAurikaSuite] = useState([])     

    let select1 = useRef()
    let select2 = useRef()

    useEffect(() => {
      dispatch(getCities())
    }, [])

    useEffect(() => {
        // console.log(fullData.fullData)
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
            setPremierRoom(fullData.fullData[0]?.Premier_Room.split('•'))
            setSPAR(fullData.fullData[0]?.Specially_Abled_Room.split(';'))
            setStandardRoom(fullData.fullData[0]?.Standard_Room.split('•'))
            setSuite(fullData.fullData[0]?.Suite.split('•'))
            setSuperiorRoom(fullData.fullData[0]?.Superior_Room?.split('•'))
            setDuplexSuite(fullData.fullData[0]?.Duplex_Suite?.split('•'))
            setStudioRoom(fullData.fullData[0]?.Studio_Room?.split('•'))
            setStudioSuite(fullData.fullData[0]?.Studio_Suite?.split('•'))
            setGardenRoom(fullData.fullData[0]?.Garden_Room?.split('•'))
            setGardenTwinRoom(fullData.fullData[0]?.Garden_Twin_Room?.split('•'))
            setExecutiveLakeViewRoom(fullData.fullData[0]?.Executive_Lake_View_Room?.split('•'))
            setPresidentialSuite(fullData.fullData[0]?.Presidential_Suite?.split('•'))
            setTerraceStudio(fullData.fullData[0]?.Terrace_Studio?.split('•'))
            setGardenSuite(fullData.fullData[0]?.Garden_Suite?.split('•'))
            setMandalaSuites(fullData.fullData[0]?.Mandala_Suites?.split('•'))
            setPremierSuite(fullData.fullData[0]?.Premier_Suite?.split('•'))
            setHollywoodRoom(fullData.fullData[0]?.Hollywood_Room?.split('•'))
            setDeluxSuite(fullData.fullData[0]?.Deluxe_Suite?.split('•'))
            setPremierCottages(fullData.fullData[0]?.Premier_Cottages?.split('•'))
            setStandardSuite(fullData.fullData[0]?.Standard_Suite?.split('•'))
            setExecutiveBalcony(fullData.fullData[0]?.Executive_Balcony_Room?.split('•'))
            setAccessibleRoom(fullData.fullData[0]?.Accessible_Room?.split('•'))
            setHeritageRoom(fullData.fullData[0]?.Heritage_Room?.split('•'))
            setHeritageStudio(fullData.fullData[0]?.Heritage_Studio?.split('•'))
            setHeritageSuite(fullData.fullData[0]?.Heritage_Suite?.split('•'))
            setBayRoom(fullData.fullData[0]?.Bay_Room?.split('•'))
            setSingleSuite(fullData.fullData[0]?.Single_Suite?.split('•'))
            setDas(fullData.fullData[0]?.Differential_Abled_Suite?.split('•'))
            setPremiumRoom(fullData.fullData[0]?.Premium_Room?.split('•'))
            setPremiumStudio(fullData.fullData[0]?.Premium_Studio?.split('•'))
            setFamilyStudioSuite(fullData.fullData[0]?.Family_Studio_Suite?.split('•'))
            setDeluxeVista(fullData.fullData[0]?.Deluxe_Vista?.split('•'))
            setPrwpt(fullData.fullData[0]?.Premium_Rooms_with_Private_Terrace?.split('•'))
            setPvrwpt(fullData.fullData[0]?.Premium_Vista_Rooms_with_Private_Terrace?.split('•'))
            setAurikaSuite(fullData.fullData[0]?.Aurika_Suite?.split('•'))

            let ec = fullData.fullData[0]?.ECI_LCO.split(';')

            for(let i=0; i<ec.length; i++){
                arr = [...arr, ...ec[i].split('&')]
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
                            {proximity?.map(val => (
                                <p>{val}</p>
                            ))}
                        </div>
                    </div>

                    {fullData.fullData[0].ECI_LCO !== 'NA' &&  <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Early CheckIn / Late CheckOut</div>
                            {show.eci ? 
                                <div className='symbol' name='eci' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='eci' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                       <div className={show.eci ? 'bannerContent open' :'bannerContent'}> 

                           <div>
                                { eci?.map(val => {
                                    return(<p>{val}</p>)
                                })}
                           </div>
                                    
                        </div>
                    </div>}
                    
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
                           <div>
                            {carRentals?.map(val => (
                                    <p>{val}</p>
                                ))}
                           </div>
                        </div>
                    </div>
                    
                    {fullData.fullData[0].Extra_Meal_Bed_Charges  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Extra Meal Bed Charges</div>
                            {show.embc ? 
                                <div className='symbol' name='embc' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='embc' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.embc ? 'bannerContent open' :'bannerContent'}>
                                <div>
                                    {extraMeal?.map(val => (
                                        <p>{val}</p>
                                    ))}
                                </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Deluxe_Rooms  !== 'NA' && 
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
                            <div>
                                {deluxRooms?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Executive_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Executive Room</div>
                            {show.er ? 
                                <div className='symbol' name='er' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='er' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.er ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {executiveRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Executive_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Executive Suite</div>
                            {show.es ? 
                                <div className='symbol' name='es' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='es' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.es ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {executiveSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Jr_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Jr Suite</div>
                            {show.js ? 
                                <div className='symbol' name='js' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='js' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.js ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {jrSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Premier_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premier Room</div>
                            {show.pr ? 
                                <div className='symbol' name='pr' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='pr' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.pr ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {premierRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Specially_Abled_Room  !== 'NA' &&
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
                            <div>
                                {spAR?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Standard_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Standard Room</div>
                            {show.sr ? 
                                <div className='symbol' name='sr' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='sr' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.sr ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {standardRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Suite</div>
                            {show.suite ? 
                                <div className='symbol' name='suite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='suite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.suite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {suite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Superior_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Superior Room</div>
                            {show.sRoom ? 
                                <div className='symbol' name='sRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='sRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.sRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {superiorRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Duplex_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Duplex Suite</div>
                            {show.dSuite ? 
                                <div className='symbol' name='dSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='dSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.dSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {duplexSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Studio_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Studio Room</div>
                            {show.stdRoom ? 
                                <div className='symbol' name='stdRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='stdRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.stdRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {studioRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Studio_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Studio Suite</div>
                            {show.stdSuite ? 
                                <div className='symbol' name='stdSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='stdSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.stdSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {studioSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Garden_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Garden Room</div>
                            {show.grdnRoom ? 
                                <div className='symbol' name='grdnRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='grdnRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.grdnRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {gardenRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Garden_Twin_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Garden Twin Room</div>
                            {show.grdntRoom ? 
                                <div className='symbol' name='grdntRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='grdntRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.grdntRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {gardenTwinRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Executive_Lake_View_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Executive Lake View Room</div>
                            {show.execLakeViewRoom ? 
                                <div className='symbol' name='execLakeViewRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='execLakeViewRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.execLakeViewRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {executiveLakeViewRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Presidential_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Presidential Suite</div>
                            {show.presSuite ? 
                                <div className='symbol' name='presSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='presSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.presSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {presidentialSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Terrace_Studio  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Terrace Studio</div>
                            {show.terrStudio ? 
                                <div className='symbol' name='terrStudio' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='terrStudio' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.terrStudio ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {terraceStudio?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Garden_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Garden Suite</div>
                            {show.grdnSuite ? 
                                <div className='symbol' name='grdnSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='grdnSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.grdnSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {gardenSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Mandala_Suites  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Mandala Suites</div>
                            {show.mandalaS ? 
                                <div className='symbol' name='mandalaS' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='mandalaS' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.mandalaS ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {mandalaSuites?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Premier_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premier Suite</div>
                            {show.premSuite ? 
                                <div className='symbol' name='premSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='premSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.premSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {premierSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Hollywood_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Hollywood Room</div>
                            {show.holyRoom ? 
                                <div className='symbol' name='holyRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='holyRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.holyRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {hollywoodRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Deluxe_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Deluxe Suite</div>
                            {show.deluxS ? 
                                <div className='symbol' name='deluxS' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='deluxS' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.deluxS ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {deluxSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Premier_Cottages  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premier Cottages</div>
                            {show.premCottage ? 
                                <div className='symbol' name='premCottage' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='premCottage' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.premCottage ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {premierCottages?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Standard_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Standard Suite</div>
                            {show.stndSuite ? 
                                <div className='symbol' name='stndSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='stndSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.stndSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {standardSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Executive_Balcony_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Executive Balcony Room</div>
                            {show.execBal ? 
                                <div className='symbol' name='execBal' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='execBal' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.execBal ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {executiveBalcony?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Accessible_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Accessible Room</div>
                            {show.accRoom ? 
                                <div className='symbol' name='accRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='accRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.accRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {accessibleRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Heritage_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Heritage Room</div>
                            {show.herRoom ? 
                                <div className='symbol' name='herRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='herRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.herRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {heritageRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Heritage_Studio  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Heritage Studio</div>
                            {show.herStudio ? 
                                <div className='symbol' name='herStudio' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='herStudio' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.herStudio ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {heritageStudio?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Heritage_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Heritage Suite</div>
                            {show.herSuite ? 
                                <div className='symbol' name='herSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='herSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.herSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {heritageSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Bay_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Bay Room</div>
                            {show.bayR ? 
                                <div className='symbol' name='bayR' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='bayR' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.bayR ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {bayRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Single_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Single Suite</div>
                            {show.sSuite ? 
                                <div className='symbol' name='sSuite' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='sSuite' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.sSuite ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {singleSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Differential_Abled_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Differential Abled Suite</div>
                            {show.dass ? 
                                <div className='symbol' name='dass' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='dass' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.dass ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {das?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Premium_Room  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premium Room</div>
                            {show.premmRoom ? 
                                <div className='symbol' name='premmRoom' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='premmRoom' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.premmRoom ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {premiumRoom?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Premium_Studio  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premium Studio</div>
                            {show.premStudio ? 
                                <div className='symbol' name='premStudio' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='premStudio' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.premStudio ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {premiumStudio?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Family_Studio_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Family Studio Suite</div>
                            {show.famSS ? 
                                <div className='symbol' name='famSS' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='famSS' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.famSS ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {familyStudioSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Deluxe_Vista  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Deluxe Vista</div>
                            {show.deluxeV ? 
                                <div className='symbol' name='deluxeV' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='deluxeV' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.deluxeV ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {deluxeVista?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Premium_Rooms_with_Private_Terrace  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premium Rooms with Private Terrace</div>
                            {show.prw ? 
                                <div className='symbol' name='prw' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='prw' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.prw ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {prwpt?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {fullData.fullData[0].Premium_Vista_Rooms_with_Private_Terrace  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Premium Vista Rooms with Private Terrace</div>
                            {show.pvrw ? 
                                <div className='symbol' name='pvrw' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='pvrw' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.pvrw ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {pvrwpt?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                    
                    {fullData.fullData[0].Aurika_Suite  !== 'NA' && <div className='bannerContainer'>
                        <div className='banner'>
                            <div>Aurika Suite</div>
                            {show.pvrw ? 
                                <div className='symbol' name='aurikaS' onClick={(e) => handleShowHide(e)}>-</div>
                                :
                                <div className='symbol' name='aurikaS' onClick={(e) => handleShowHide(e)}>+</div>
                            }
                        </div>
                        <div className={show.aurikaS ? 'bannerContent open' :'bannerContent'}>
                            <div>
                                {aurikaSuite?.map(val => (
                                    <p>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>}
                </>
            )
        } 
      </div>   
    </div>
  )
}

export default Dashboard