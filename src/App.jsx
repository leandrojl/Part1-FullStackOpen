import { useState, useEffect } from 'react'

const H1Header = (props) => <h1>{props.title}</h1>
const H2Header = (props) => <h2>{props.title}</h2>
const H3Header = (props) => <h3>{props.title}</h3>

const Header = (props) => {

  switch(props.headingLevel){
    case "h1":
      return <H1Header title={props.title}/>
    case "h2":
      return <H2Header title={props.title}/>  
    case "h3":
      return <H3Header title={props.title}/>
    default:
      return <div>Invalid heading level</div>
  }

}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const Statistics = (props) => {

  return(
    <div>
    <p>Good: {props.feedback.good}</p>
    <p>Neutral: {props.feedback.neutral}</p>
    <p>Bad: {props.feedback.bad}</p>
    <p>All Feedback: {props.feedback.allFeedback}</p>
    <p>Average: {props.feedback.average}</p>
    <p>Positive Feedback: {props.feedback.positiveFeedback}%</p>
  </div>
  )

  
}

const App = () => {

  const [feedback, setFeedback] = useState({
    good:0,
    neutral:0,
    bad: 0,
    allFeedback:0,
    average: 0,
    positiveFeedback: 0,
  })
  
  
  const goodButtonIncreaseByOne = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
      allFeedback: prevFeedback.allFeedback + 1,
    }));
    calculateAverage();
  }
 
  const badButtonIncreaseByOne = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
      allFeedback: prevFeedback.allFeedback + 1, 
    }));
    calculateAverage();
   
  }
  const neutralButtonIncreaseByOne = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
      allFeedback: prevFeedback.allFeedback + 1,
    }));
    calculateAverage();
    
  }

  const calculateAverage=()=>{
    setFeedback(prevFeedback =>({
      ...prevFeedback,
      average: (prevFeedback.good - prevFeedback.bad)/ prevFeedback.allFeedback || 0,
      positiveFeedback : ((prevFeedback.good / prevFeedback.allFeedback) * 100) || 0,
    }))
    
    ;
  
 }


 

  return (
    <>
      
      <Header title={"Give feedback"} headingLevel={"h1"}/>
      <Button onClick={goodButtonIncreaseByOne} text={"Good"}/>
      <Button onClick={neutralButtonIncreaseByOne} text={"Neutral"}/>
      <Button onClick={badButtonIncreaseByOne} text={"Bad"}/>
      <Header title={"Statistics"} headingLevel={"h2"}/>
      <Statistics feedback={feedback} />
      
      
      
    
    </>
  )
}

export default App