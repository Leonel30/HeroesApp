import React from 'react'
import { AuthProvider } from './context/AuthProvider';
import { AppRouter } from './router/AppRouter';

import test from './test'

export const App = () => {
  return (
    <>
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
   
    </>
  )
}
