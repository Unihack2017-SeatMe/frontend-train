import {green500, orange500, red500} from 'material-ui/styles/colors';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ImageCrop75 from 'material-ui/svg-icons/image/crop-7-5';
import React from 'react';

const iconStyles = {
  marginRight: 24,
};

class MinsFromNow extends React.Component {
  render() {
    var colour;
    if (this.props.timeRemaining < 5) {
      colour = green500;
    } else if (this.props.timeRemaining < 11 ) {
      colour = orange500;
    } else {
      colour = red500;
    }
    
    return (
      <CommunicationChatBubble style={iconStyles} color={colour} />
    );
  }
}

export default MinsFromNow;
