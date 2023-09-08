import React, {useState} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import GlobalStyle from './GlobalStyle';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

const handleClick= (type)=>{
switch(type){
case "good":
  setGood(prevGood => prevGood + 1);
break;

case "neutral":
  setNeutral(prevNeutral =>prevNeutral +1);
break;

case "bad":
  setBad(prevBad =>prevBad +1);
break;

default:

}}

const countTotalFeedback=()=>{

  return good+neutral+bad;
}
const countPositiveFeedbackPercentage = () => {
  
  if (countTotalFeedback() === 0) {
    return 0;
  }
  return Math.round((good/countTotalFeedback())*100);
  
  }




 return  ( <div className="app">
  <Section 
  title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={handleClick}/>


{countTotalFeedback()>0 ? (<Statistics 
             good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}/>) : (<Notification message="There is no feedback"/>)}

   </Section>
   <GlobalStyle/>
      </div>
    )
  }




export default App;