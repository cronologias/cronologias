import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './resources/theme/index.js'
import BasicUsage from './components/modal/modal'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BasicUsage />,
      </ChakraProvider>
  )
}
export default App;