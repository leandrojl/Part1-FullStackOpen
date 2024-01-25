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
const Display = (props) =>{
  return(
    <div>{props.title}: {props.counter}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)
  const [average, setAverage] = useState(0)
  const [positiveFeedback, setPositiveFeedback] = useState(0)
  
  const goodButtonIncreaseByOne = () => {
    setGood(good + 1)
    setAllFeedback(allFeedback+1)
  }
 
  const badButtonIncreaseByOne = () => {
    setBad(bad + 1)
    setAllFeedback(allFeedback+1)
   
  }
  const neutralButtonIncreaseByOne = () => {
    setNeutral(neutral + 1)
    setAllFeedback(allFeedback+1)
    
  }

  const calculateAverage=()=>{
    
    setAverage((good - bad) / allFeedback || 0);
   
    setPositiveFeedback((good / allFeedback) * 100 || 0);
  
 }

 useEffect(() => {
  calculateAverage();
}, [good, bad, allFeedback, average]);
 

  return (
    <>
      
      <Header title={"Give feedback"} headingLevel={"h1"}/>
      <Button onClick={goodButtonIncreaseByOne} text={"Good"}/>
      <Button onClick={neutralButtonIncreaseByOne} text={"Neutral"}/>
      <Button onClick={badButtonIncreaseByOne} text={"Bad"}/>
      <Header title={"Statistics"} headingLevel={"h2"}/>
      <Display counter={good} title={"Good"} />
      <Display counter={neutral} title={"Neutral"}/>
      <Display counter={bad} title={"Bad"}/>
      <Display counter={allFeedback} title={"All"}/>
      <Display counter={average} title={"Average"}/>
      <Display counter={positiveFeedback} title={"Positive"}/>
      
      
    
    </>
  )
}

export default App