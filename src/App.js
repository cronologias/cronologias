import './App.css'
import { ChakraProvider,  } from '@chakra-ui/react'
import { theme } from './resources/theme/index.js'
import ModalDialog from './components/modal'
import Component from './components/slider'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ModalDialog>
        <Component />
      </ModalDialog>
      </ChakraProvider>
  )
}
export default App;