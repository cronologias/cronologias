import "./App.css"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./resources/theme/index.js"
import ModalDialog from "./components/modal"
import Slider from "./components/slider"
import Slides from "./slides"
import MobileSlider from "./components/mobileSlider"
import MobileSlides from "./mobileSlides"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ModalDialog>
        <Slider slides={Slides}/>
      </ModalDialog>
      <MobileSlider mobleSlides={MobileSlides}/>
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