import axios from 'axios';

export const fetchEnseignants = async () => {

  try{
    const response = await axios.get('http://localhost:3001/enseignant/');
    const enseignants = await response.data;
  
    return enseignants;
  }catch(e){
    console.log(e +" les enseignants n'ont pas été trouvés !")
  }
  };


  export const fetchEnseignant = async (_id) => {
    try{
      const response = await axios.get(`http://localhost:3001/enseignant/enseignant/${_id}`);
      const enseignant = await response.data;
    
      return enseignant;
    }catch(e){
      console.log(e+" l'enseignant n'a pas été trouvé")
    }
   
  };

  
  export const deleteEnseignant = async (id) => {
    try{
      return await axios.delete(`http://localhost:3001/enseignant/${id}`);
    }catch(e){
      console.log(e +" echec de la supréssion !")
    }
   
  };
  
  export const createEnseignant = async (enseignant) => {
    try{
      return await axios.post('http://localhost:3001/enseignant/post', enseignant);
    }catch(e){
      console.log(e +" echec de la creation !")
    }
    
  };