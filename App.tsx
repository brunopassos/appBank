import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';


import { Container } from './src/styles';
import { Routes } from './src/routes';

export default function App() {
  

  return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light"/>
        <Routes/>
      </ThemeProvider>
  );
}

