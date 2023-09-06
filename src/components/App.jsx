import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import GlobalStyle from './GlobalStyle';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

handleClick= (option )=>{
  this.setState((prevState) => {
    return {
      [option]: prevState[option] + 1,
    };
});
}

countTotalFeedback=()=>{
  const { good, neutral, bad } = this.state;
  return good+neutral+bad;
}
countPositiveFeedbackPercentage() {
const { good } = this.state;
if (this.countTotalFeedback() === 0) {
  return 0;
}
return Math.round((good/this.countTotalFeedback())*100);

}



  render() {

 const { good, neutral, bad } = this.state;
 return   <div className="app">
  <Section 
  title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}/>


{this.countTotalFeedback()>0 ? (<Statistics 
             good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>) : (<Notification message="There is no feedback"/>)}

   </Section>
   <GlobalStyle/>
      </div>
    
  }
}



export default App;