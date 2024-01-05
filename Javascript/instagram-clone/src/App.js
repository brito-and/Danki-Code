import logo from './logo.svg';
import './App.css';
import {db} from './firebase.js';
import {useEffect, useState} from 'react';

function App() {

  const [user, setUser] = useState(null);

useEffect(()=>{
  
},[])


  return (
    <div className="App">
        <div className='header'>
        <div className='center'>
          <div className='header_logo'>
            <a href=''><img src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png" /></a>
          </div>
          {
            (user)?
            <div>Olá And</div>
            :
            <div className='header_loginForm'>
            <form>

            </form>
              <input type='text' placeholder='Login...' />
              <input type='password' placeholder='Senha...' />
              <input type='submit' name='acao' value='Entrar' />
          </div>
          }      
        </div>
        </div>
    </div>
  );
}

export default App;
