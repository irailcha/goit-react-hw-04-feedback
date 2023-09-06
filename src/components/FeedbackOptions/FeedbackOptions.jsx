import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.styled';

import {ButtonsStyle, BtnStyle} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonsStyle className='buttons'>
    {options.map(option => (
      <BtnStyle key={option} className={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </BtnStyle>
    ))}
  </ButtonsStyle>
);


FeedbackOptions.propTypes={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}



export default FeedbackOptions;
