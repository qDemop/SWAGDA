import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const RutaPrivada = ({children}) => {
    const { session } = UserAuth();

    if (session === undefined) return <p>Validando</p>

  return <>{session ? <> { children } </> : <Navigate to="/signup"/>}</>;
  
};

export default RutaPrivada