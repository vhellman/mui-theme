import { DisplayWrapper } from "./components/DisplayWrapper"

import Button from '@mui/material/Button';
import { HeadlessButton } from "./components/HeadlessButton";
import { ThemeProvider } from "@mui/material/styles";
import { MaterialMigraTheme } from "./material-theme/MaterialMigraTheme";
import { Checkbox, Select, TextField } from "@mui/material";

function App() {

  return (
    <>
    <main style={{display: "grid", gridTemplateColumns: "2fr 2fr", gap: "2rem", placeItems: "center", width: "100%", maxWidth: "1500px", minHeight: '100vh', padding: "3rem 4rem" }}>
      <div>
      <ThemeProvider theme={MaterialMigraTheme}>  
        <DisplayWrapper developTime='' component={ <Button variant="contained">Material UI</Button> } /> 
        <DisplayWrapper developTime='' component={ <Button variant="outlined">Material UI</Button> } /> 
        <DisplayWrapper developTime='' component={ <Button variant="text">Material UI</Button> } /> 
        <DisplayWrapper developTime='' component={ <TextField label="Outlined" /> } /> 
        <DisplayWrapper developTime='' component={ <TextField variant="filled"/> } /> 
        <DisplayWrapper developTime='' component={ <TextField variant="standard"/> } /> 
        <DisplayWrapper developTime='' component={ <Checkbox  /> } /> 
        <DisplayWrapper developTime='' component={ <Select  /> } /> 
      </ThemeProvider>
77777bbbccccyyyy
      </div>

      <DisplayWrapper developTime='5min' component={ <HeadlessButton /> } /> 
    </main>
    </>
  )
}

export default App

