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
import './i18n';
import NavBar from './Navbar';
function App() {
  return (
    // <React.Fragment>
    //   <Container>
    //     <Box pt={2}>
    //       <Pets />
    //     
    //   </Container>
    //   <Header />
    //   {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //   <Routes >
    //     <Route path="/" element={<App />} />
    //   </Routes >
    // </React.Fragment>
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
            <Route path="/" element={<Empty />} />
            <Route path="/passwordreset/:resetToken" element={<Empty />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
