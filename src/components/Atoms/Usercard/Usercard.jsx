import './usercard.css';

function Usercard({ contactProfilePic, contactName, contactLastMsg, onClick }) {
  return (
    <div onClick={() => onClick(contactName)} className='card-wrapper'>
      <div className='contactProfilePic-wrapper'>
        <img src={contactProfilePic} />
      </div>
      <div className='name-and-lastMessage-wrapper'>
        <div className='contact-name'>{contactName}</div>
        <div className='contact-last-message'>{contactLastMsg}</div>
      </div>
      <div className='unread-messages-counter-wrapper'>
        <div className='unread-messages-counter'>5</div>
        <div className='last-message-sent'>7 min</div>
      </div>
    </div>
  );
}

export default Usercard;
