import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import fonts from './assets/font/font';
import { Global } from "@emotion/react";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider,extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
   fonts: {
     heading: "Poppins",
     body: "Poppins",
   },
})

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <ChakraProvider theme={theme}>
         <App />
         <Global styles={fonts} />
      </ChakraProvider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
