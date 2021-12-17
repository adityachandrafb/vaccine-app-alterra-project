import React from 'react'
import "../style/syaratvaksin.css";
import {Navbar, Footer} from '../Component';

const SyaratVaksin = () => {
    return (
        <div className='mainmenu-syarat'>
            <div> <Navbar /> </div>
            <div className='content'>
                <p className='h3'> Persyaratan Vaksinasi </p>
                <p className='h4'> 1. Berusia 12 tahun ke atas </p>
                <p className='h4'> 2. Sehat </p>
                <p className='h4'> 3. Memiliki KTP/Kartu Keluarga </p>
                <p className='h4'> 4. Tidak sedang positif Covid-19 </p>
                <a href="/daftarvaksin/form">
                    <button type="submit" className="next-button"> Ya, Lanjutkan </button>
                </a>
            </div>
            <div> <Footer /> </div>
        </div>
    )
}

export default SyaratVaksin

