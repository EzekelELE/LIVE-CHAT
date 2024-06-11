import { messagesStyles, message, timeStyles } from './MessageCSS';
import { getHourFromDateTime } from '../../../utils/getHour';
function Message({ messagesInfo, socketId, contact }) {
  return (
    <div style={messagesStyles()}>
      {messagesInfo.map(
        ({ userId, sender, receiver, messageContent, time }) => (
          <div style={message(socketId === sender)} key={userId}>
            {messageContent}
            <div style={timeStyles()}>{getHourFromDateTime(time)}</div>
          </div>
        )
      )}
    </div>
  );
}

export default Message;
