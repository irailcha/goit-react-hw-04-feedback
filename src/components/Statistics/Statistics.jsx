import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.styled';
import {StatContainerStyle, CounterListStyle, CounterStyle, StatTitleStyle} from './Statistics.styled'


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    
  <StatContainerStyle className='statistic-container'>
 
<StatTitleStyle className="statistic-title">Statistic</StatTitleStyle>
<CounterListStyle>
  Good : <CounterStyle className='counter-good'>{good}</CounterStyle></CounterListStyle>
<CounterListStyle>
   Neutral : <CounterStyle className='counter-neutral'>{neutral}</CounterStyle></CounterListStyle>
<CounterListStyle>
   Bad : <CounterStyle className='counter-bad'>{bad}</CounterStyle></CounterListStyle>
<CounterListStyle>
  Total : <CounterStyle className='counter-total'>{total}</CounterStyle>
</CounterListStyle>
<CounterListStyle>
  Positive feedback : <CounterStyle className='counter-feedback-percentage'>{positivePercentage}%</CounterStyle>
</CounterListStyle>
</StatContainerStyle>

);


Statistics.propTypes = {
  
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
 };
  

export default Statistics;



