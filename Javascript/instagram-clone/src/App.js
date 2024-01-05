import './App.css';
import {db} from './firebase.js';
import {useEffect, useState} from 'react';
import Header from './Header';

function App() {

  const [user, setUser] = useState('And');

useEffect(()=>{
  
},[])


  return (
    <div className="App">
        <Header user={user}></Header>
    </div>
  );
}

export default App;