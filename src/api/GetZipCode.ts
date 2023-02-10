import axios from 'axios'; 
/**
 * Função cujo objetivo é buscar o endereço pelo cep.
 * @param {number} cep -> cep a ser buscado
 * @returns {Object}  -> Um objeto com o endereço relacionado ao cep
 */
export async function GetZipCode(cep: string) {
  const rest = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  return rest.data;
}