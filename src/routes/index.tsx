import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/homePage/Home';

export const AppRoutes = () => {
  return(
    <Routes>
      <Route index path="/home" element={<Home />}/>
      <Route index path="*" element={<Navigate to="/home" />}/>
    </Routes>
  );
}