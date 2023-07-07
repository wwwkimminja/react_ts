import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './screens/Router';


//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
     <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);


