import * as React from 'react';
import Grid  from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { CreateTerm } from '../../../api/CreateTerm';
import { GetZipCode } from '../../../api/GetZipCode';
import { TermForm } from './TermForm';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { translateDataTerm } from '../../../utils/translate/translateDataTerm';

interface ObjDataType {
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
export default function Relatorio() {
  const objDataInit = {
    name: "",
    address: "",
    state: "",
    phoneNumber: "",
    city: "",
    cpf: "",
    neighborhood: "",
    zipCode: "",
    rg: "",
    nationality: "",
    termName: "TERMO_PRENCHIMENTO_FACIAL"
  }
  const [objData, setObjData] = React.useState<any>(objDataInit);
  const [state, setState] = React.useState({open: false, name: ''});
  function setData (name: string, value: string | number): void {
    setObjData({
      ...objData,
      [name]: value
    });
  }

  async function searchZipCode (): Promise<void> {
    const data = await GetZipCode(objData.zipCode);
    setObjData({
      ...objData,
      city: data.localidade,
      neighborhood: data.bairro,
      address: data.logradouro,
      state: data.uf
    });
  }

  async function baixarPDF(): Promise<any> {

    for(let name in objData)  {
      if(!objData[name]) {
        setState({
          open: true,
          name: translateDataTerm[name]
        });
        return;
      }
    }
    const response = await CreateTerm(objData);
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${objData.termName}.docx`;
    link.click();
    setObjData(objDataInit);
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <Typography variant="h4" align='center' paragraph>
              Termo de Preenchimento Facial
            </Typography>
          </Grid>
          <TermForm objData={objData} setData={setData} searchZipCode={searchZipCode} />
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'flex-end', margin: '10px'}} >
              <Button variant="contained" onClick={() => baixarPDF()}>Gerar</Button>
            </Grid> 
          </Grid>
          <Snackbar
            open={state.open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={1000}
            message={`O campo ${state.name} é obrigatório`}
            onClose={() => setState({ ...state, open: false })}
          />
    </Box>
  );
}