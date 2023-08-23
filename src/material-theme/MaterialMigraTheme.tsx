import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        migraWarning: {
            main: string,
            light: string
        }
    }

    interface PaletteOptions {
        migraWarning?: {
            main: string,
            light: string
        }
    }   
}

const MaterialMigraTheme = createTheme({
    shape: {
        borderRadius: 2,
        
    },
    
    palette: {
        primary: {
            main: '#0d9488',
            dark: '#115e59',
            light: '#2dd4bf'
        },
        migraWarning: {
            main: '#fb923c',
            light: '#fef3c7',
        }
    },
    VafanHander?!16
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    '&.Mui-focusVisible': {
                        outline: '1px solid #707070',
                        outlineOffset: '4px' 
                    }
                },                
            }
        },
        MuiInputBase: {
            
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        outline: '1px solid #707070',
                        outlineOffset: '4px' 
                    }
                },                
            }
        },
        
        

    }
})

export { MaterialMigraTheme }; 