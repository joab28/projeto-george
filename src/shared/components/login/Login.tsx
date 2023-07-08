import React, { useState } from "react";
import { Box, Button, CardMedia, TextField, Typography, useMediaQuery, useTheme, CircularProgress } from "@mui/material";
import LoginImage from '../../../assets/login.png';
import { useAuthContext } from "../../contexts";
import * as yup from 'yup';

interface ILoginProps {
  children: React.ReactNode
}

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
})

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = () => {
    setIsLoading(true);
    loginSchema
    .validate({ email, password }, { abortEarly: false })
    .then(dadosValidados => {
      login(dadosValidados.email, dadosValidados.password)
        .then(()=> {
          setIsLoading(false);

        })
    })
    .catch((error: yup.ValidationError) => {
      setIsLoading(false);
      error.inner.forEach(error => {
        if(error.path === 'password') {
          setPasswordError(error.message);
        }else if (error.path === 'email') {
          setEmailError(error.message);
        }
      })
    })
  }

  if(isAuthenticated) return (
    <>{children}</>
  );
  return (
    <Box  width="100vw" height="100vh" display={smDown ? "": "flex"} alignItems="center" justifyContent="center">
      <Box width={smDown ? '100vw' : '50vw'} display='flex' alignItems="center" justifyContent="center">
        <Box  width={'90%'}  display='flex' alignItems="center" justifyContent="center">
          <CardMedia
            component="img"
            alt="Login"
            image={LoginImage}
            title="Imagem de login"
          />
        </Box>
      </Box>
      <Box width={smDown ? '100vw' : '50vw'} display="flex" alignItems="center" justifyContent="center">
        <Box display='flex' flexDirection='column' gap={1}>
          <Typography variant="h5" align="center">Bem vindo!</Typography>
          <TextField 
            variant="outlined"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={() => setEmailError('')}
            error={!!emailError}
            helperText={emailError}
            disabled={isLoading}
          />
          <TextField 
            variant="outlined"
            label="Senha"
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={() => setPasswordError('')}
            error={!!passwordError}
            helperText={passwordError}
            disabled={isLoading}
          />
          <Box display='flex' justifyContent='center'>
            <Button 
              variant="contained" 
              disabled={isLoading} 
              onClick={() => handleSubmit()}
              endIcon = {isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}