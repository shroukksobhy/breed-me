import React from "react";
import './App.css';
import Header from "./Header";
import Footer from './Footer';
import { Container } from "@mui/material";
import Pets from "./Pages/Pets";
import Pet from "./Pages/Pet";
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Empty from "./Pages/Empty";
import Articles from "./Pages/Articles";
import LandinPage from "./Pages/LandinPage";
import './i18n';
import NavBar from './Navbar';
function App() {
  return (
    <div className="app">
      <Header />
      {/* <NavBar /> */}
      <Container>
        <Box pt={2}>
          <Routes>
            {/* <HomeLayoutRoute path="/" element={<Home />} />
        <PrivateRoute path="/" element={<PrivateScreen />} /> */}
            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/:id" element={<Pet />} />
            <Route path="/" element={<LandinPage />} />
            {/* <Route path="/" element={<Empty />} /> */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/passwordreset/:resetToken" element={<Empty />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
