import axios from 'axios';

export const fetchAbscence = async () => {
    const response = await axios.get('http://localhost:3001/abscence/');
    const abscence = await response.data;
  
    return abscence;
  };

  export const fetchAbscenceByEtudiant = async (nom) => {
    const response = await axios.get('http://localhost:3001/abscence/etudiant/',nom);
    const abscence = await response.data;
  
    return abscence;
  };

  
  export const deleteAbscence = async (id) => {
    return await axios.delete(`http://localhost:3001/abscence/${id}`);
  };
  
  export const createAbscence = async (abscence) => {
    return await axios.post('http://localhost:3001/abscence/post', abscence);
  };