import { extendTheme } from '@chakra-ui/react'
import { breakpoints } from './foundations/Breakpoints'
import { colors } from './foundations/Colors'
import { fonts } from './foundations/Fonts'

export const theme = extendTheme({
    breakpoints,
    colors,
    fonts,
})