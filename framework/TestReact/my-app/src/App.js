import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

const AsyncCounter = () => {
  const [count, setCount] = useState({c:1});

 const openModal = () => {
    setTimeout(() => {
      alert('You clicked on: ' + count.c);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count.c} times</p>
      <button onClick={() => setCount({c:count.c + 1} )}>
        Click me
      </button>
      <button onClick={openModal}>
       Increment count
      </button>
    </div>
  );
}




function App() {
  return (
    <AsyncCounter ></AsyncCounter>
  );
}

export default App;
