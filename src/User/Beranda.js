import React from 'react'
import "../style/beranda.css";
import {Navbar, Footer} from '../Component';


const Beranda = () => {
    return (
        <div className='mainmenu-home'>
            <div> <Navbar /> </div>
            <div className='content'>
                    <div className='beranda-h3'> 
                    Wujudkan Indonesia sehat, aman, dan produktif
                    </div>
                    <div className='beranda-h1'> 
                    <p>Indonesia Tanggap Covid-19 </p>
                    </div>
                    <a href='/daftarvaksin'>
                        <div className='submit-button'> Daftar Vaksin </div>
                    </a>
            <div> <Footer /> </div>
            </div>
        </div>
    )
}

export default Beranda