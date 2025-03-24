import './App.css';
import './typography.css';
import './theme.css';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useDispatch } from 'react-redux';
import * as api from './api';
import { initAuth } from './store/redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.init();
    dispatch(initAuth());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
