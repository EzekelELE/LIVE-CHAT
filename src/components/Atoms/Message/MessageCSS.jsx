const messagesStyles = () => ({
  backgroundColor: '#ceadf3',
  width: '100%',
  height: '90%',
  flexDirection: 'column',
  display: 'flex',
  gap: '5px',
  padding: '20px',
  overflow: 'auto',
});

const message = (sender) => ({
  backgroundColor: `${sender ? '#4f1a8b' : '#77559d'}`,
  maxWidth: '60%',
  color: 'white',
  borderRadius: '15px',
  fontSize: '0.8rem',
  padding: '5px 12px',
  alignSelf: `${sender ? 'flex-end' : 'flex-start'}`,
  position: 'relative',
  paddingRight: '40px',
});

const timeStyles = () => ({
  position: 'absolute',
  bottom: '2px',
  right: '8px',
  fontSize: '0.7rem',
});

export { messagesStyles, message, timeStyles };
