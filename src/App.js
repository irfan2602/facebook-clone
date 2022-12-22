/* import './App.css'; */
import Navbar from './components/Navbar';
import AddComment from './components/AddComment';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import AddMessage from './components/AddMessage';
import Login from './components/Login';
import React from "react";
import UserCommetModal from './components/UserCommentModal';

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <AddComment /> */}
      <UserCommetModal />
    </div>
   );
}

export default App;
