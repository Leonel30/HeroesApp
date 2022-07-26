import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {

  const { login } = useContext(AuthContext);
  

  const navigate = useNavigate()
  
  const onLogin = () => {

    login('Leo Rojas');
    const lastView = localStorage.getItem('lastView') || '/'
    navigate(lastView, {replace:true})
  }

  return (
    <>
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button
      className="btn btn-primary"
      onClick={onLogin}
      >
      Login
      </button>
    </div>
    </>
  )
}
