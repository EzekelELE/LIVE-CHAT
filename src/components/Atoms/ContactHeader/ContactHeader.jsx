import './ContactHeader.css';
function Usercard({ contactProfilePic, contactName, status, roomId }) {
  return (
    <div className='contactHeader'>
      <div className='contactProfilePic-wrapper'>
        <img src={contactProfilePic} alt={''} />
      </div>
      <div>
        <div className='contact-name'>{contactName}</div>
        <div className='contact-status'>{status ? 'online' : 'offline'}</div>
      </div>
      <div>{roomId}</div>
    </div>
  );
}

export default Usercard;
