import './SendMessageInput.css';
import SendIcon from '../../../img/send.png';
function SendMessageInput({
  SendMessageInputValueFunction,
  SendMessageInputValue,
  handleSubmit,
  messages,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='inputWrapper'>
        <input
          type='text'
          onChange={(e) => SendMessageInputValueFunction(e)}
          value={SendMessageInputValue}
        />
        <img src={SendIcon} alt='' />
      </div>
    </form>
  );
}

export default SendMessageInput;
