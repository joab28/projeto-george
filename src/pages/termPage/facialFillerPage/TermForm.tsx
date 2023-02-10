import * as React from 'react';
import Grid  from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { cpfMask } from '../../../utils/mask/cpfMask';
import { phoneMask } from '../../../utils/mask/phoneMask';
interface objDataType {
  name: string;
  address: string;
  state: string;
  phoneNumber: string;
  city: string;
  cpf: string;
  neighborhood: string;
  zipCode: string;
  rg: string;
  nationality: string;
  termName: string;
}
interface TermProp {
  objData: objDataType;
  setData: any;
  searchZipCode: any;
}
export function TermForm(props: TermProp) {
  console.log(props)
  const { objData, setData, searchZipCode } = props;

  return (
          <Grid item xs={12} >
            <Paper style= {{background: '#F1F3F4', margin: '10px', padding: '20px' }} >
              <Grid container spacing={1} >
                <Grid item xs={5} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Nome"
                      name='name'
                      value={objData.name || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 
                <Grid item xs={2} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Nacionalidade"
                      name='nationality'
                      value={objData.nationality || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 
                <Grid item xs={2} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="CPF"
                      name='cpf'
                      value={objData.cpf || ''}
                      onChange={e => setData(e.target.name, cpfMask(e.target.value))}
                    />
                  </FormControl>
                </Grid> 

                <Grid item xs={3} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="RG"
                      name='rg'
                      value={objData.rg || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 

                <Grid item xs={3} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Telefone"
                      name='phoneNumber'
                      value={objData.phoneNumber || ''}
                      onChange={e => setData(e.target.name, phoneMask(e.target.value))}
                    />
                  </FormControl>
                </Grid> 
                <Grid item xs={3} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="CEP"
                      name='zipCode'
                      value={objData.zipCode || ''}
                      onBlur={objData.zipCode ? searchZipCode : ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 
                <Grid item xs={4} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Rua"
                      name='address'
                      value={objData.address || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 

                <Grid item xs={2} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Estado"
                      name='state'
                      value={objData.state || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 
                <Grid item xs={2} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Cidade"
                      name='city'
                      value={objData.city || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 

                <Grid item xs={4} >
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField
                      required
                      id="outlined-required"
                      label="Bairro"
                      name='neighborhood'
                      value={objData.neighborhood || ''}
                      onChange={e => setData(e.target.name, e.target.value)}
                    />
                  </FormControl>
                </Grid> 
              </Grid>
            </ Paper>
          </Grid>
  );
}