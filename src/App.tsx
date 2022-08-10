import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

import { useAppSelector } from './hooks/hooks';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const App: FC = () => {
  const success = useAppSelector(state => state.login.success)

  return (
    <>
      <Header />
      {!success ? <LoginPage />:
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route  path='/' element={<LoginPage />} />
      </Routes>

  }
    </>
  );
}

export default App;
