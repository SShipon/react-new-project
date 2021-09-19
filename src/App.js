import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
 <LoadComments></LoadComments>
 <Comment></Comment>
      
</div>
  );
}

function LoadComments(){
  const [comments, setComments]= useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setComments(data))

  },[])

  return(
    <div>
      <h3>LoadComment</h3>
     {
        comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
     }
    </div>
  );
}
function Comment(props){
  return(
    <div className="name">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}

function Counter(){
  const[count,setCount]=useState(0);
  const handelIncrease =() =>setCount(count +1);
  const handelDecrease =() =>setCount(count -1);

  return(
    <div >
      <h1>Count:{count}</h1>
      <button className="name" onClick={handelIncrease}>Increase</button>
      <button className="name" onClick={handelDecrease}>Decrease</button>
    </div>
  )
} 

export default App;
