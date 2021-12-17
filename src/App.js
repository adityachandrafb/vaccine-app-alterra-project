import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserLogin, UserRegister, Beranda, SyaratVaksin, Informasi, Tentang, UserNotFound, FormVaksin } from './User';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/daftarvaksin" element={<SyaratVaksin />} />
          <Route path="/daftarvaksin/form" element={<FormVaksin />} />
          <Route path="/daftarvaksin/error" element={<UserNotFound />} />
          <Route path="/tentang" element={<Tentang/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
