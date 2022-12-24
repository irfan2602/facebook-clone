/* import './App.css'; */
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import React from "react";
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Home />
      <Footer  />
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
   );
}

export default App;
