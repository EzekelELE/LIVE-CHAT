import './sideBar.css';
import MeniuButton from '../Atoms/MeniuButton/MeniuButton';
import MessengerIcon from '../../img/messenger.png';
import LogOutIcon from '../../img/logout.png';
import AvatarImg from '../../img/baaj.jpg';
import SearchBar from '../Atoms/SearchBar/SearchBar';
import ContactCard from '../Atoms/Usercard/Usercard';
import { useState } from 'react';

function App({ getUsersList, handleContactClick }) {
  const [searchInputValue, setSearchInputValue] = useState('');

  const search = (e) => {
    setSearchInputValue(e.target.value);
  };
  const clearSearch = () => {
    setSearchInputValue('');
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-meniu'>
        <MeniuButton avatarImg={AvatarImg} rounded />
        <MeniuButton avatarImg={MessengerIcon} active />
        <MeniuButton avatarImg={LogOutIcon} />
      </div>
      <div className='right-section-sidebar'>
        <SearchBar
          searchFunction={search}
          searchingValue={searchInputValue}
          clearSearch={clearSearch}
        />
        {getUsersList.map((user) => (
          <ContactCard
            contactProfilePic={MessengerIcon}
            contactName={user}
            contactLastMsg={'contactLadwadwadwadwadwadwadwdwadwastMsg'}
            onClick={handleContactClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
