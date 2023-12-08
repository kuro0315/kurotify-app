import React from 'react';
import { Counter } from './components/counter/Counter';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {ThemeProvider } from '@mui/material/styles';


import theme from './Theme';
import KAppBar from './components/KAppBar/KAppBar';
import CurrentPlaying from './components/CurrentPlaying/CurrentPlaying';
import NextPlayings from './components/NextPlayings/NextPlayings';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <KAppBar />

      <Container 
        maxWidth="sm" 
        style={
          { 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      >
          <Box mb={2} marginTop={2}>
            <CurrentPlaying/>
          </Box>

          <Box mt={2}>
            <NextPlayings/>
          </Box>

      </Container>
    </ThemeProvider>
  );
}

export default App;
