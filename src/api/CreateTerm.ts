import axios from 'axios'; 

export async function CreateTerm(objTerm: any) {
  const response = await axios.post(`https://localhost:3000/term`, objTerm, { responseType: 'arraybuffer' })

  return response;
}