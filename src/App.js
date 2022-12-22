/* import './App.css'; */
import Navbar from './components/Navbar';
import AddComment from './components/AddComment';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import AddMessage from './components/AddMessage';
import React from "react";
import UserCommetModal from './components/UserCommentModal';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <AddComment /> */}
      <Home />
      {/* <UserCommetModal /> */}
    </div>
   );
}

export default App;
