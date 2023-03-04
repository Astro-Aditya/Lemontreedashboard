import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import lemontree from '../Images/lemontreefinal.png'
import auquall from '../Images/Auquall.png'

import '../style/navbar.css'


const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`${e.target.getAttribute('name')}`, { replace: true });
    }

    const Logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')

    }
    
    // useEffect(() => {
    //   if(!localStorage.getItem('token')){
    //   }
    // }, [localStorage.getItem('token')])
    

    return(
    <div className='navbar'>
        <div className='auqualllogo'>
            <img src={auquall} width={200} height={50}/>
        </div>
        <div className='lemontreelogo'>
            <img src={lemontree} width={150} height={100}/>
        </div>
        {/* <div className='navbar__item' name='/' onClick={handleClick}>Tables</div>
        <div className='navbar__item' name='/charts' onClick={handleClick}>Charts and Graphs</div>      */}
    </div>
    )
};

export default Navbar