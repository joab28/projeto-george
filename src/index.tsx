import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TermPage from './pages/termPage/facialFillerPage/TermPage';
import Home from './pages/homePage/Home';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Home />}/>
          <Route index path="/relatorio" element={<TermPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
