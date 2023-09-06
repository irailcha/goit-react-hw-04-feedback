import React from 'react';
import PropTypes from 'prop-types';
import './Notification.styled';

import {MessageStyle} from './Notification.styled';


const Notification = ({message}) => {
    return (
    <MessageStyle className="notification-message">{message}
    </MessageStyle>
    )}


Notification.propTypes ={
    message:PropTypes.string.isRequired,
}


    export default Notification;