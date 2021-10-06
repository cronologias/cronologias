import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './resources/theme/index.js'
import { SerchBar } from './components/serchBar';


ReactDOM.render(
  <ChakraProvider theme={theme}>
      <SerchBar />
    </ChakraProvider>,
document.getElementById('root')
);


