import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <Router>
      <DataProvider>
            <AuthProvider>
               <App />
            </AuthProvider>
      </DataProvider>
         </Router>
   </React.StrictMode>
);
