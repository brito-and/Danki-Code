import {useEffect, useState} from 'react';

function Header(props){

   

    return(

<div className='header'>
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
          <a href='#'>Cadastre-se</a>
        </div>
        </div>
      }      
    </div>
</div>
    )
}

export default Header;