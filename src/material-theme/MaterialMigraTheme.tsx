import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        migraWarning: {
            main: string,
            light: string
        }
        mPrimary: {
            main: string
            hover: string
            text: string
        }
        mSecondary: {
            main: string
            hover: string
            text: string
            dark: string
        }
    }

    interface PaletteOptions {
        migraWarning?: {
            main: string,
            light: string
        }
        mPrimary?: {
            main: string
            hover: string
            text: string
        }
        mSecondary?: {
            main: string
            hover?: string
            text?: string
            dark: string
        }
    }   
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        mSecondary: true,
    }
}

const MaterialMigraTheme = createTheme({
    shape: {
        borderRadius: 2,
        
    },
    
    palette: {
        /* primary: {
            main: '#0d9488',
            dark: '#115e59',
            light: '#2dd4bf'
        }, */
        primary: {
            main: '#25607f',
            dark: '#143c50',
            light: '#fff'
            
        },
        secondary: {
            main: '#b90835',
            dark: '#8b1327'
        }, 
        mSecondary: {
            main: '#f2f2f2',
            dark: '#143c50',
        },
        migraWarning: {
            main: '#fb923c',
            light: '#fef3c7',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    '&.Mui-focusVisible': {
                        outline: '1px solid #707070',
                        outlineOffset: '2px' 
                    },
                    '&.MuiButton-outlinedSecondary': {
                        
                    }
                },                
            },
            variants: [
                {
                    props: {variant: 'mSecondary'},
                    style: {
                        backgroundColor: '#f2f2f2',
                        color: '#303030',
                        border: '#707070 1px solid',
                        '&:hover, &:focus':{
                            borderColor: '#707070',
                            backgroundColor: '#d9d9d9'
                        }
                    }
                },
                
            ] 
                    
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: '#303030',
                    boxShadow: '3px 3px 10px rgba(0,0,0,0.16)',
                    '&.Mui-focused': {
                        outline: '1px solid #707070',
                        outlineOffset: '2px' 
                    },
                    '& legend':{
                        width: '0'
                    }
                },                
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    transform: 'scale(0.85)',
                }
            }
        }

    }
    
})

export { MaterialMigraTheme }; 