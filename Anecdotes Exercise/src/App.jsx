import { useState } from 'react'

const Content = (props) =>{

  if(props.anecdote === undefined || props.anecdote === null){
    
    return(
      <div>There is no anecdote yet! Please click the button.</div>
    )

  }else{
    return(
      <div>
        <p>{props.anecdote}</p>
        <p>This anecdote has: {props.vote} votes so far!</p>
        <Button onClick={props.onClick} text={"Vote"}/>
      </div>
    )
  }
  
    
  }

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const Header = (props) =>{

  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )

}

function App() {

  const [randomValue, setRandomValue] = useState(0);

  const [anecdotes, setAnecdotes]= useState([
    {
      anecdote:'If it hurts, do it more often.',
      vote: 0,
    },
    {
      anecdote:'Adding manpower to a late software project makes it later!',
      vote:0,
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote: 0,
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote:0,
    },
    {
      anecdote:'Premature optimization is the root of all evil.',
      vote: 0,
    },
    {
      anecdote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote:0,
    },
    {
      anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      vote:0,
    },
    {
      anecdote:'The only way to go fast, is to go well.',
      vote: 0,
    }
  ])

  const generateRandomNumber = () =>{
    return Math.floor(Math.random()*8);
  }

  const randomAnecdote = () => {
    const randomValue = generateRandomNumber();
    setRandomValue(randomValue);
    const { getAnecdote, getVotes } = searchAnecdote();
    //FIX
  }

  const searchAnecdote = () =>{
    const getAnecdote = anecdotes[randomValue].anecdote;
    console.log("This is the getAnecdote:", getAnecdote)
    const getVotes = anecdotes[randomValue].vote;
    console.log("This is the getVotes:", getVotes)
    
    return{
      getAnecdote,
      getVotes
    }
      
    

  }

  const voteAnecdote = () =>{
    const updatedAnecdotes = [...anecdotes];

    updatedAnecdotes[randomValue].vote += 1;

    setAnecdotes(updatedAnecdotes);

  }
  
  return (
    <>
      <Header name={"Random Anecdotes App"} />
      <Button onClick={randomAnecdote} text={"Random anecdote"}/>
      <Header name={"Anecdote: "} />
      <Content anecdote={anecdote} vote={vote} onClick={voteAnecdote}/>
    </>
  )
}

export default App
