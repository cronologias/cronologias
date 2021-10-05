import { extendTheme } from "@chakra-ui/react"
import { breakpoints } from "./foundations/Breakpoints"
import { colors } from "./foundations/Colors"
import { font } from "./foundations/Fonts"

export const theme = extendTheme({
    breakpoints,
    //se implementa de esta manera: w={{ base: "24px", md: "40px", lg: "56px" }}
    colors,
    //se implementa de esta manera: bg="brand.primaryOrange"
    font,
    //se implementa de esta manera: fontFamily="body"  

    /*
    los demas estilos ya vienen por default en chakra y no es
    necesario definirlos de nuevo como fontSizes, fontWeights, 
    lineHeights, letterSpacings y space (space son espaciados y
    se pueden usar en padding, margin, top, right y bottom; 
    aparte ya vienen los multiplos de 8 y son responsive con una 
    tabla explicativa de tamaños) para mas informacion consultar: 
    https://chakra-ui.com/docs/theming/theme 
    */

    /* 
    los tamaños de los iconos (https://chakra-ui.com/docs/media-and-icons/icon)
    se hacen basados en los tamaños de la tabla de los space 
    (https://chakra-ui.com/docs/theming/theme)
    icons:
        sm: "2.4rem", //mobile se implementa de esta manera: w={10}
        md: "3.5rem", //tablet se implementa de esta manera: w={14}
        lg: "4rem", //desktop se implementa de esta manera: w={16}
    logos:
        sm: "4rem", //mobile se implementa de esta manera: w={16}
        md: "20rem", //tablet se implementa de esta manera: w={20}
        lg: "7rem", //desktop se implementa de esta manera: w={28}
    */
    
    /*
    aqui se pueden poner componentes y sus variantes en la carpeta 
    "src/resources/components" se crea un archivo js por cada componente 
    por ejemplo: Button.js y se exporta aqui por ejemplo:
    import { Button } from "./components/Button"
    Para mas informacion consultar: 
    (https://chakra-ui.com/docs/theming/component-style) 
    o ver el video:
    (https://www.youtube.com/watch?v=Tx54S3UtRjI)
    */
})
