import './App.css';
import SideBar from "./components/sideBar/sideBar"
import MessagesSection from "./components/MessagesSection/MessagesSection"
import { useState } from 'react';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [socketId, setSocketId] = useState('')

  const handleContactClick = (contactName) => {
    setSelectedContact(contactName);
  };

  const setSocketIdHandler = (socketId) => {
    setSocketId(socketId)
  }

  const getUsersHandler = (userList) => {
    setUsersList(userList)
  }


  return (
    <>
      <div className='background'>
        <div className='app-wrapper'>
          <SideBar getUsersList={usersList.filter(user => socketId !== user)} handleContactClick={handleContactClick} />
          <MessagesSection getUsersHandler={getUsersHandler} contact={selectedContact} setSocketIdHandler={setSocketIdHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
