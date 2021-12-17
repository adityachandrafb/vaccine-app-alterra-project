import React from 'react'
import "../style/usernotfound.css";
import { Navbar,Footer } from '../Component';

const UserNotFound = () => {
    return (
        <div className='mainmenu-syarat'>
            <div> <Navbar /> </div>
            <div classsname='content'> 
                <div className='h2-usernotfound'> 
                Oops, anda harus masuk atau membuat akun terlebih dahulu agar bisa mendaftar vaksinasi</div>
                </div>
                <a href="/login"> 
                    <button className='masuk-button'> Masuk </button> 
                </a>
                <a href="/register"> 
                    <button className='daftar2-button'> Daftar </button> 
                </a>
                <div> <Footer /> </div>
        </div>
        
    )
}

export default UserNotFound
