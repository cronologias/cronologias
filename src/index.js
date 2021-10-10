import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './resources/theme/index.js'
import { SearchBarContainer } from './components/searchBarContainer';


ReactDOM.render(
  <ChakraProvider theme={theme}>
      <SearchBarContainer />
    </ChakraProvider>,
document.getElementById('root')
);


