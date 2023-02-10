import axios from 'axios'; 

export async function CreateTerm(objTerm: any) {
  const response = await axios.post(`https://backend-george-dyta.vercel.app/term`, objTerm, { responseType: 'arraybuffer' })

  return response;
}