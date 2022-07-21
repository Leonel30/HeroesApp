import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../auth/pages/Login';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
    <Routes>

        <Route path="login" element={ 
          <PublicRoute>
            <Login/>
          </PublicRoute>}>
          </Route>
        <Route path='/*' element = {
          <PrivateRoutes>
            <HeroesRoutes/>
          </PrivateRoutes>
        }>
        </Route>
    </Routes>

    </>
  )
}
