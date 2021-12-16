import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserLogin, UserRegister, Beranda, SyaratVaksin, Informasi, Tentang, UserNotFound } from './User';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
      </Router>
    </>
  );
}

export default App;
