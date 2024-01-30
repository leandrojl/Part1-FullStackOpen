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
  if(props.feedback.allFeedback === 0){
    return (
      <div>
        No feedback given yet!
      </div>
    )
  }else{

    return(
      <div>
      <StatisticsLine text={"Good: "} value={props.feedback.good}/>
      <StatisticsLine text={"Neutral: "} value={props.feedback.neutral}/>
      <StatisticsLine text={"Bad: "} value={props.feedback.bad}/>
      <StatisticsLine text={"All feedback: "} value={props.feedback.allFeedback}/>
      <StatisticsLine text={"Average: "} value={props.feedback.average}/>
      <StatisticsLine text={"Positive Feedback: "} value={props.feedback.positiveFeedback} specialCharacter={"%"}/>
    </div>
    )

  }

  
}

const StatisticsLine = (props) =>{
  if(props.specialCharacter === undefined || props.specialCharacter === null){
    
    return(
      <div>{props.text}{props.value}{""}</div>
    )

  }else{
    return(
      <div>{props.text}{props.value}{props.specialCharacter}</div>
    )
  }
  
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
    }));
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