import {useEffect, useState} from 'react';
import {auth} from './firebase.js';

function Header(props){

  useEffect(() =>{

  }, [])

  function criarConta(e){

    let email = document.getElementById('emailCadastro').value;
    let username = document.getElementById('usernameCadastro').value;
    let senha = document.getElementById('senhaCadastro').value;

    e.preventDefault();

    //criar conta firebase
    auth.createUserWithEmailAndPassword(email,senha)
    .then((authUser)=>{
      authUser.user.updateProfile({
        displayName:username
      })
      alert('Conta Criada com sucesso!');
      let modal = document.querySelector('.modalCriarConta');

      modal.style.display = 'none';
    }).catch((error)=>{
      alert(error.message);
    })
    ;
  }

  function abrirModalCriarConta(e){
    e.preventDefault();
    
    let modal = document.querySelector('.modalCriarConta');

    modal.style.display = 'block';
  }

  function fecharModal(){
    let modal = document.querySelector('.modalCriarConta');

    modal.style.display = 'none';
  }

   

    return(

<div className='header'>

  <div className='modalCriarConta'>

    <div className='formCriarConta'>
    <div onClick={(e)=>fecharModal(e)} className='closeModal'>X</div>

      <h2>Criar Conta</h2>
      <form onSubmit={()=>criarConta()}>
        <input id='usernameCadastro' type='text' placeholder='Seu username...' />
        <input id='emailCadastro' type='text' placeholder='E-Mail...' />
        <input id='senhaCadastro' type='password' placeholder='Sua senha...' />
        <input type='submit' value='Criar Conta!' />
      </form>
    </div>
  </div>
    <div className='center'>
        <div className='header_logo'>
        <a href=''><img src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png" /></a>
        </div>
        {
        (props.user)?
        <div className='header_logado'>
            <span>Olá <b>{props.user}</b></span>
            <a href='#'>Criar</a>
        </div>
        :
        <div className='header_loginForm'>
        <form>
          <input type='text' placeholder='Login...' />
          <input type='password' placeholder='Senha...' />
          <input type='submit' name='acao' value='Entrar' />
        </form>
        <div className='btn_criarConta'>
          <a onClick={(e)=>abrirModalCriarConta(e)} href='#'>Cadastre-se</a>
        </div>
        </div>
      }      
    </div>
</div>
    )
}

export default Header;