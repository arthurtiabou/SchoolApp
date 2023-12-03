import axios from 'axios';

export const fetchEtudiants = async () => {
  
  const response = await axios.get('http://localhost:3001/etudiant/');
  const etudiants = await response.data;

  return etudiants;
};

export const fetchEtudiant = async (id) => {
  const response = await axios.get(`http://localhost:3001/etudiant/etudiant/${id}`);
  const etudiant = await response.data;

  return etudiant;
};


export const deleteEtudiant = async (id) => {
  return await axios.delete(`http://localhost:3001/etudiant/${id}`);
};

export const createEtudiant = async (etudiant) => {
  return await axios.post('http://localhost:3001/etudiant/post', etudiant);
};