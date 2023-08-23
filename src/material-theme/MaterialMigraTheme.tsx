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
            background: string
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
            background: string
            hover?: string
            text?: string
            dark?: string
        }
    }   
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        mSecondary: true,
    }
}
const alternativeColors = {
    text: '#303030',
    inaktivText: '#b3b3b3',
    lank: '#0066cc',
    besoktLank: '#663366',
    bakgrundGra: '#f2f2f2',
    hoverBla: '#143c50',
    hoverGra: '#e6e6e6',
    hoverRod: '#641018'
}

const migraRod = {
    20: '#f1d4d1',
    60: '#d37a7a',
    100: '#b90835',
    130: '#8b1327'
}

const migraBla = {
    20: '#d5e5ed',
    60: '#83afc9',
    100: '#2e7ca5',
    130: '#25607f',
    hoverBla: alternativeColors.hoverBla
}

const signalRod = {
    10: '#ffdfdf',
    100: '#e62323',
    130: '#b01919'
}

const signalBla = {
    10: '#ffdfdf',
    100: '#e62323',
    130: '#b01919'
}
const signalGron = {
    10: '#ffdfdf',
    100: '#e62323',
    130: '#b01919'
}



const themePalette = createTheme({
    palette: {
        primary: {
            main: migraBla[130],
            dark: migraBla.hoverBla,
        },
        secondary: {
            main: migraRod[100],
            dark: migraRod[130]
        }, 
        success: {
            main: '#008d3c',
            
           
        },
        mSecondary: {
            background: '#f2f2f2',
            main: '#f2f2f2',
            hover: '#e6e6e6',
        },
        migraWarning: {
            main: '#fb923c',
            light: '#fef3c7',
        },
    },
})

const MaterialMigraTheme = createTheme({
    shape: {
        borderRadius: 2,
    },

    typography: {
        fontFamily: 'Open Sans',
    },

    palette: {...themePalette.palette},

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },

            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    boxShadow: '3px 3px 5px rgba(0,0,0, 0.16)',
                    '&.Mui-focusVisible': {
                        outline: '2px solid #707070',
                        outlineOffset: '2px' 
                    },
                },
                contained: {
                    boxShadow: '3px 3px 10px rgba(0,0,0, 0.16)'
                },
                text: {
                    boxShadow: 'none'
                }         
            },
            variants: [
                {
                    props: {variant: 'mSecondary'},
                    style: {
                        backgroundColor: `${themePalette.palette.mSecondary.main}`,
                        color: '#303030',
                        border: '#707070 1px solid',
                        
                        '&:hover, &:focus':{
                            borderColor: '#707070',
                            backgroundColor: '#d9d9d9'
                        }
                    }
                },
                {
                    props: {variant: 'mSecondary', size: 'small'},
                    style: {
                        fontSize: '13px',
                        padding: '3px 9px'
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
                        outline: '2px solid #707070',
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
        },
    }
    
})

export { MaterialMigraTheme }; 