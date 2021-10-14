import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './resources/theme/index'
//import AccordionArtist from './components/accordion'
//import {CardContainer} from "./components/cardContainer"
import HeaderCronicas from "./components/Header"
import { SearchBarContainer } from './components/searchBarContainer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderCronicas>
      </HeaderCronicas>
      {/*<AccordionArtist></AccordionArtist>*/}
      <SearchBarContainer />
    </ChakraProvider>
  )
}

export default App;

/*
paginas de referencia:
- https://dev.to/carlosrafael22/what-i-ve-learned-with-chakra-ui-so-far-4f5e (empezar)
- https://www.pluralsight.com/guides/installing-and-using-chakra-ui-with-react (empezar)
- https://chakra-templates.dev/ (componentes)
- https://choc-ui.tech/ (componentes)
- https://kinsta.com/es/blog/diseno-de-paginas-web-sensibles/ (responsive)
*/