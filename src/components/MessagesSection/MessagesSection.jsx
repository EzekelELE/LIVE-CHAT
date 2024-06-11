import './MessagesSection.css';
import ContactHeader from '../Atoms/ContactHeader/ContactHeader';
import MessengerIcon from '../../img/baaj.jpg';
import Message from '../Atoms/Message/Message';
import SendMessageInput from '../Atoms/SendMessageInput/SendMessageInput';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getCurrentDateTime } from '../../utils/getDate';
const SOCKET_SERVER_URL = 'http://localhost:8080';

function MessagesSection({ getUsersHandler, contact, setSocketIdHandler }) {
  const [socket, setSocket] = useState(null);
  const [SendMessageInputValue, setSendMessageInputValue] = useState('');
  const [connectionList, setConnectionList] = useState([]);
  const [messages, setMessages] = useState([]);

  const SendMessageInputValueFunction = (e) => {
    setSendMessageInputValue(e.target.value);
  };

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      setSocketIdHandler(newSocket.id);

      newSocket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      newSocket.on('connectedClients', (connectedClients) => {
        getUsersHandler(connectedClients);
        setConnectionList(connectedClients);
      });
    });
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const socketId = socket.id;
    socket.emit('message', {
      sender: socketId,
      reciver: contact,
      messageContent: SendMessageInputValue,
      time: getCurrentDateTime(),
    });
    setSendMessageInputValue('');
  };

  return (
    <div className='messages-section'>
      {contact && (
        <>
          <ContactHeader
            contactProfilePic={MessengerIcon}
            contactName={contact}
            status={Object.values(connectionList).includes(socket?.id)}
          />
          <Message
            messagesInfo={messages}
            socketId={socket?.id}
            contact={contact}
          />
        </>
      )}
      <SendMessageInput
        SendMessageInputValueFunction={SendMessageInputValueFunction}
        SendMessageInputValue={SendMessageInputValue}
        handleSubmit={handleSubmit}
        messages={messages}
      />
    </div>
  );
}

export default MessagesSection;
