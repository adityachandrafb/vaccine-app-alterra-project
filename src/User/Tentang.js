import React from 'react';
import "../style/tentang.css";
import {Navbar, Footer} from '../Component';

const Tentang = () => {
    return (
        <div className='mainmenu-tentang'>
            <div> <Navbar /> </div>
            <div className='content-tentang'>
                <div className='h5-tentang'> Vaksin COVID-19 merupakan vaksin yang nantinya akan digunakan untuk menangani penyakit koronavirus 2019 (COVID-19). 
                    Pada 20 Januari 2020, data sequence genetik SARS-CoV-2, virus penyebab COVID-19, dibagikan melalui GISAID, dan pada 19 Januari 2020, industri farmasi global mengumumkan komitmen untuk mengatasi COVID-19. 
                    Hingga Maret 2020, terdapat beberapa penelitian yang mengembangkan vaksin COVID-19.
                </div>
                <div className='h5-tentang'> Pada akhir Februari 2020, Organisasi Kesehatan Dunia (WHO) mengatakan bahwa vaksin untuk menangani virus penyebab COVID-19, SARS-CoV-2 tidak akan tersedia dalam waktu kurang dari 18 bulan.
                 Hingga September 2020, terdapat 321 vaksin uji coba yang sedang dalam pengembangan.
                </div>
            </div>
            <div> <Footer /> </div>
        </div>
    )
}

export default Tentang
