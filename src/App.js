import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserLogin, UserRegister, Beranda, SyaratVaksin, Informasi, Tentang, UserNotFound, FormVaksin } from './User';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<UserRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
