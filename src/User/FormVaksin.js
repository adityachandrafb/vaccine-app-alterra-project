import React from 'react'
import "../style/formvaksin.css";
import {Navbar, Footer} from '../Component';
import Select from "react-select";

const lokasivaksin = [
    { value: "RS USU", label: "RS USU" },
    { value: "RS Bhayangkara", label: "RS Bhayangkara" },
    { value: "RS Permata", label: "RS Permata" },
  ];
  
  const jenisvaksin = [
    { value: "Astra zaneca", label: "Astra zaneca" },
    { value: "Sinovac", label: "Sinovac" },
    { value: "Moderna", label: "Moderna" },
    { value: "Pfizer", label: "Pfizer" },
  ];
  
  const sesivaksin = [
    { value: "Sesi 1. 07:00 - 12:00", label: "Sesi 1. 07:00 - 12:00" },
    { value: "Sesi 2. 13:00 - 16.00", label: "Sesi 2. 13:00 - 16.00" },
  ];

const FormVaksin = () => {
    return (
        <div className='mainmenu-form'>
            <div> <Navbar /> 
            <p className='h3'>Daftar Vaksinasi</p> 
            </div>
            <div className="content">
                 <div className="container-dual">
                    <div className="profile">
                        <form>
                            <div className="login-form">
                                <div className="inputbox">
                                    <input type="text" required />
                                    <label>NIK</label>
                                </div>
                                <div className="inputbox">
                                    <input type="text" required />
                                    <label>Nama</label>
                                </div>
                                <div className="inputbox">
                                    <input type="text" required />
                                    <label>Nomor Telepon</label>
                                </div>
                                <div className="inputbox">
                                    <input type="number" required />
                                    <label>Umur</label>
                                </div>
                                <div className="inputbox">
                                    <input type="text" required />
                                    <label>Alamat</label>
                                </div>
                            </div>
                            <p>Lokasi Vaksin</p>
                            <div className="dropdown">
                                <Select options={lokasivaksin} />
                            </div>
                            <p>Sesi Vaksin</p>
                            <div className="dropdown">
                                <Select options={sesivaksin} />
                            </div>

                            <div className="kirikanan">
                                <div className="kiri">
                                    <p>Jenis Vaksin</p>
                                        <div className="dropdown">
                                            <Select options={jenisvaksin} />
                                        </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <a href='/beranda'> 
                                <button className='back-button'> Kembali </button> 
                            </a>
                        </div>
                        <div>
                            <a href="/informasi"> 
                                <button className='daftar1-button'> Daftar </button> 
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div> <Footer /> </div>
        </div>
    )
}

export default FormVaksin


