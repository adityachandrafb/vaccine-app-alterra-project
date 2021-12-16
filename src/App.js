import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserLogin, UserRegister, Beranda, SyaratVaksin, Informasi, Tentang, UserNotFound } from './User';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/daftarvaksin" element={<SyaratVaksin />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/tentang" element={<Tentang/>}/>
          <Route path="/usernotfound" element={<UserNotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
