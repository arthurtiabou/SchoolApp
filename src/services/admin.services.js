import axios from 'axios';

export const fetchAdmins = async () => {

  try {
    const response = await axios.get('http://localhost:3001/admin/');
    const admins = await response.data;

    return admins;
  } catch (e) {
    console(e + "les administrateurs n'ont pas été trouvés !")
  }

};

export const fetchAdmin = async (id) => {

  try {
    const response = await axios.get(`http://localhost:3001/admin/${id}`);
    const admin = await response.data;
    return admin;
  } catch (e) {
    console.log(e + " l'admin n'a pas été trouvé !")
  }

};

export const deleteAdmin = async (id) => {
  try {
    return await axios.delete(`http://localhost:3001/admin/${id}`);
  }
  catch (e) {
    console.log(e + " la suppresion à échoué !")
  }
};

export const createAdmin = async (admin) => {
  try {
    return await axios.post('http://localhost:3001/admin/post', admin);
  } catch (e) {
    console.log(e + "l'admin n'a pas été autorisé ! ")
  }

};