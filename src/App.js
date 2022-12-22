/* import './App.css'; */
import Navbar from './components/Navbar';
import AddComment from './components/AddComment';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import AddMessage from './components/AddMessage';
import React from "react";
import UserCommetModal from './components/UserCommentModal';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <AddComment /> */}
      <Home />
      <Footer  />
      {/* <UserCommetModal /> */}
    </div>
   );
}

export default App;
