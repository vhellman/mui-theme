import { DisplayWrapper } from "./components/DisplayWrapper"

import Button from '@mui/material/Button';
import { HeadlessButton } from "./components/HeadlessButton";
import { ThemeProvider } from "@mui/material/styles";
import { MaterialMigraTheme } from "./material-theme/MaterialMigraTheme";
import { Checkbox, InputLabel, Select, TextField, MenuItem, FormControl, Slider, CircularProgress, Chip, IconButton } from "@mui/material";
import { Alarm } from "@mui/icons-material";
function App() {

  return (
    <>
    <main style={{display: "grid", gridTemplateColumns: "2fr 2fr", gap: "2rem", placeItems: "center", width: "100%", maxWidth: "1500px", minHeight: '100vh', padding: "3rem 4rem" }}>
      <div>
      <ThemeProvider theme={MaterialMigraTheme}>  
        <DisplayWrapper developTime='' component={ <Button variant="contained">Primär</Button> } /> 
        <DisplayWrapper developTime='' component={ <Button variant="contained" color='secondary'>Sekundär</Button> } /> 
        <DisplayWrapper developTime='' component={ <Button variant="outlined">Outlined</Button> } /> 
        <DisplayWrapper developTime='' component={ <Button variant="mSecondary">MigraSek</Button> } /> 
        <DisplayWrapper developTime='' component={ <Button variant="text">TextKnapp</Button> } /> 
        <DisplayWrapper developTime='' component={ <Texter /> }/> 
        <DisplayWrapper developTime='' component={ 
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="bootstrap-input">
          Select
        </InputLabel>
            <Select fullWidth label="Välj en sak">
              <MenuItem value={"value1"} >Valett</MenuItem>
              <MenuItem value={"value2"} >Valtvå</MenuItem>
              <MenuItem value={"value3"} >Valtre</MenuItem>
            </Select> 
          </FormControl>
          
        } /> 
        <DisplayWrapper developTime='' component={ <Checkbox /> } /> 
        <DisplayWrapper developTime='' component={ <Slider color="primary" /> } /> 
        <DisplayWrapper developTime='' component={ <Slider color="secondary" /> } /> 
        <DisplayWrapper developTime='' component={ <CircularProgress /> } /> 
        <DisplayWrapper developTime='' component={ <IconButton > <Alarm /></IconButton> } /> 
        <DisplayWrapper developTime='' component={ <Chip color={"primary"} label={'Chips'} /> } /> 
      </ThemeProvider>
      </div>

      <DisplayWrapper developTime='5min' component={ <HeadlessButton /> } /> 
    </main>
    </>
  )
}

const Texter = () => (
    <FormControl >
        <InputLabel shrink htmlFor="bootstrap-input">
          Inputfält
        </InputLabel>
        <TextField InputLabelProps={{ shrink: true }} title="Outlined" /> 
        </FormControl>
)

export default App

