import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global styles if you have them
import App from './App'; // Import the root component
import { ChakraProvider, ColorModeScript ,theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript/>
    <App />
    </ChakraProvider>
  </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
