import axios from 'axios';

export const fetchPlannings = async () => {
    const response = await axios.get('http://localhost:3001/planning/');
    const plannings = await response.data;
  
    return plannings ;
  };


  export const fetchPlanningByGroupe = async (groupe) => {
    const response = await axios.get('http://localhost:3001/planning/groupe/',groupe);
    const plannings = await response.data;
  
    return plannings ;
  };

  export const fetchPlanningEnseignant= async (enseignant) => {
    const response = await axios.get('http://localhost:3001/planning/enseignant/',enseignant);
    const plannings = await response.data;
  
    return plannings ;
  };


  
  export const deletePlanning = async (id) => {
    return await axios.delete(`http://localhost:3001/planning/${id}`);
  };
  
  export const createPlanning = async (planning) => {
    return await axios.post('http://localhost:3001/planning/post', planning);
  };