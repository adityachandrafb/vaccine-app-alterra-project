import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {UserLogin, UserRegister, Beranda, SyaratVaksin, Informasi, Tentang, UserNotFound, FormVaksin } from './User';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/daftarvaksin/error" element={<UserNotFound />} />
          <Route path="/informasi/error" element={<UserNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
