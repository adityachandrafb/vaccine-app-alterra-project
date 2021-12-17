import React from 'react'
import "../style/navbar.css";

const Navbar = () => {
    return (
        <div className='header'> 
            <div className='navbar'>
                <a href='/beranda'> Beranda </a>
                <a href='/daftarvaksin'> Daftar Vaksin </a>
                <a href='/informasi'> Informasi </a>
                <a href='/tentang'> Tentang </a>
            </div>
            <div className="profile">
                <a href='./login'>Masuk</a>
            </div>
        </div>
    )
}

export default Navbar

//rafce
