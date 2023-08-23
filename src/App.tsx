import { DisplayWrapper } from "./components/DisplayWrapper"

import Button from '@mui/material/Button';
import { HeadlessButton } from "./components/HeadlessButton";
import { ThemeProvider } from "@mui/material/styles";
import { MaterialMigraTheme } from "./material-theme/MaterialMigraTheme";
import { Checkbox, InputLabel, Select, TextField, MenuItem, FormControl, Slider, CircularProgress, Chip, IconButton, Tabs, Tab, Alert, AlertTitle, Box, LinearProgress, Typography, LinearProgressProps, CircularProgressProps, Radio, FormControlLabel } from "@mui/material";
import { Alarm } from "@mui/icons-material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import React, {useState} from 'react'


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}



function App() {

  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {setValue(newValue)}

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
    <main style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",  width: "100%", maxWidth: "1500px", minHeight: '100vh', padding: "1rem 2rem" }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem'}}>
      <ThemeProvider theme={MaterialMigraTheme}>  

      <Tabs value={value} indicatorColor="secondary" textColor="inherit" onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Topp 1" />
    <Tab label="Topp 2" /* {...a11yProps(1)} */ />
    <Tab label="Topp 3" /* {...a11yProps(2)} */ />
  </Tabs>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Topp 1" />
    <Tab label="Topp 2" /* {...a11yProps(1)} */ />
    <Tab label="Topp 3" /* {...a11yProps(2)} */ />
  </Tabs>
      <Tabs value={value}  textColor="inherit" onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Topp 1" />
    <Tab label="Topp 2" /* {...a11yProps(1)} */ />
    <Tab label="Topp 3" /* {...a11yProps(2)} */ />
  </Tabs>

  <DisplayWrapper component={ <Alert color="info" >Här finns info</Alert> } /> 
        <DisplayWrapper component={ <Alert color="success"  >Det här gick bra </Alert> } /> 
        <DisplayWrapper component={ <Alert color="warning"  > Det här är en varning </Alert> } /> 
        <DisplayWrapper component={ <Alert color="error"  > Ops, nåt gick fel</Alert> } /> 
        
        <DisplayWrapper component={ <Alert color="success"  >
          <AlertTitle>Korrekt / Klart</AlertTitle>
          Vad det än var du gjorde så gick det bra
           </Alert> } /> 
           <DisplayWrapper component={ <Alert color="info"  >
          <AlertTitle>Information</AlertTitle>
          Det här är ett informationsmeddelande, men det är inte superviktigt
           </Alert> } /> 
        <DisplayWrapper component={ <Alert color="warning"  >
          <AlertTitle>Viktig information</AlertTitle>
          Det här är ett informationsmeddelande som bör noteras. 
           </Alert> } /> 
        <DisplayWrapper component={ <Alert color="error"  >
          <AlertTitle>Information</AlertTitle>
          Det här är en varningsmeddelande som kräver åtgärd. 
           </Alert> } /> 
        <DisplayWrapper  >
          <Button variant="contained">Primär</Button>  
          <Button variant="mSecondary">mSekundär</Button>
          <Button variant="mSecondary" startIcon={<SettingsOutlinedIcon />}>startikon</Button>
        </DisplayWrapper> 
        <DisplayWrapper >
          <Button variant="contained" color='secondary'>Alternativ</Button>  
          <Button variant="outlined">Alternativ</Button>
          <Button variant="contained" endIcon={<SaveOutlinedIcon />}>slutikon</Button>
        </DisplayWrapper> 
        <DisplayWrapper >
          <Button variant="text">Textknapp</Button> 
          <Button variant="text" color="secondary">Textknapp</Button> 
        </DisplayWrapper> 
        <DisplayWrapper > 
          <Button size="small" variant="outlined" >Liten knapp</Button>
          <Button size="small" variant="mSecondary" >Liten Migra</Button> </DisplayWrapper> 
        
        <DisplayWrapper >
          <IconButton color="primary" aria-label="Settings button"> <SettingsOutlinedIcon /></IconButton> 
          <IconButton color="secondary" aria-label="Save button"> <SaveOutlinedIcon /></IconButton> 
        </DisplayWrapper> 
        <DisplayWrapper component={ <Texter /> }/> 
        <DisplayWrapper component={ 
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
        <DisplayWrapper  > 
        <FormControlLabel  control={<Checkbox />} label="Checkbox" />
        <FormControlLabel  control={<Checkbox color="success" />} label="Klart!" />
          <FormControlLabel value="1"  control={<Radio color="secondary"/>} label="Radio" />
          <FormControlLabel value="2" control={<Radio />} label="Radio" />
        </DisplayWrapper> 
        <DisplayWrapper component={ <Slider aria-label="Dra för att fixa" color="primary" /> } /> 
        <DisplayWrapper component={ <Slider aria-label="Dra för att antifixa" color="secondary" /> } /> 
        <DisplayWrapper   >
          <CircularProgress aria-label="Loading"/> 
          <CircularProgress aria-label="Loading more" color="secondary" variant="determinate" value={progress} /> 
          <CircularProgressWithLabel aria-label="Laddar" color="primary" variant="determinate" value={progress} /> 
          
        </DisplayWrapper> 
        <Box sx={{width: '100%'}} > <LinearProgressWithLabel aria-label="Progress finished" value={progress} /></Box>
        <DisplayWrapper  > 
          <Chip color={"primary"} label={'Chips'} /> 
          <Chip color={"secondary"} label={'& Dip'} />
        </DisplayWrapper> 
      </ThemeProvider>
      </div>

      {/* <DisplayWrapper developTime='5min' component={ <HeadlessButton /> } />  */}
    </main>
    </>
  )
}

const Texter = () => (
    <FormControl fullWidth>
        <TextField aria-label="Skriv för att fixa" label="Skriv ngt" InputLabelProps={{ shrink: true }} title="Inputfält" /> 
        </FormControl>
)

export default App

