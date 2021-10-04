import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
})
export const theme = extendTheme({
    colors: {
        brand: {
            primaryOrange: '#EB5529',
            primaryBlack: '#231F20',
            primaryGray: '#434143',
            secondaryOrange: '#F47843',
            secondaryBlack: '#262626',
            secondaryGray: '#C6C6C5',
            baseColor: '#FFFFFF',
        },
    },
    textStyles: {
        body: {
            fontFamily: 'Kulim Park, sans-serif',
        },
        subtitle: {
            fontFamily: 'Cousine, monospace',
        },
    },
    fontSizes: {
        small: {
            sm: "1.8rem", //equivalente a un h4
            md: "2.0rem", //equivalente a un h3
            lg: "2.4rem", //equivalente a un h2
            xl: "3.2rem"  //equivalente a un h1
        },
        medium: {
            sm: "1.2rem", //equivalente a un h4
            md: "1.4rem", //equivalente a un h3
            lg: "1.6rem", //equivalente a un h2
            xl: "3.2rem"  //equivalente a un h1
        },
        large: {
            sm: "2rem", //equivalente a un h4
            md: "2.4rem", //equivalente a un h3
            lg: "2.6rem", //equivalente a un h2
            xl: "4.2rem"  //equivalente a un h1
        },
        paragraph: {
            sm: "1.6rem",
            md: "1.8rem",
            xl: "5rem",
        },
        links: {
            sm: "1.4rem",
            md: "1.6rem",
        }
    },
    fontWeightTypes: {
        fontWeight: {
            bold: "bold",
            regular: "regular",
            light: "light",
        },
    },
    iconSizes: {
        icons: {
            sm: "2.4rem", //mobile
            md: "3.5rem", //tablet
            lg: "4.5rem", //desktop
        },
    },
    logoSizes: {
        logos: {
            sm: "4.2rem", //mobile
            md: "4.8rem", //tablet
            lg: "7.2rem", //desktop
        },
    },
    letterSpacing: {
        letterSpacing: {
            sm: "0.07rem",
            md: "2.4rem",
        }
    },
    lineHeight: {
        lineHeight: {
            sm: "1.2rem",
            md: "1.4rem",
            lg: "1.8rem",
        }
    },
    breakPoints: {
        container: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    breakpoints,
})
