import { React, useState, useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import { fetchEtudiants } from "../services/etudiant.services";
import { fetchEnseignants } from "../services/enseignant.services";
import { fetchAdmins } from "../services/admin.services";
import Alert from 'react-bootstrap/Alert';



//********************* Style ********************************************* */
const styleForm = {
    marginTop: '25px', maxWidth: '50%',

}
const Sbody = {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    //backgroundColor:'red',
    backgroundImage: 'url(./asset/font.jpeg)'

}

const footer = {
    backgroundColor: 'rgba(228, 207, 153,0.7)',
    height: '12vh',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    textAlign: 'center',

}
//**************************************************************************** */
const Login = () => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };

    const [admins, setAdmins] = useState([]);
    const [etudiants, setEtudiants] = useState([]);
    const [enseignants, setEnseignants] = useState([]);

    const [email, setEmail] = useState();
    const [passe, setPasse] = useState();
    const [role, setRole] = useState();

    useEffect(() => {
        const getEtudiants = async () => {
            const users = await fetchEtudiants();
            setEtudiants(users);
        };

        getEtudiants();
    }, []);

    useEffect(() => {
        const getEnseignants = async () => {
            const users = await fetchEnseignants();
            setEnseignants(users);
        };

        getEnseignants();
    }, []);


    useEffect(() => {
        const getAdmins = async () => {
            const users = await fetchAdmins();
            setAdmins(users);
        };

        getAdmins();
    }, []);



    const handleConnexion = () => {

        if (email == "") {
            alert('Veuillez entrez email')
        }
        if (passe == "") {
            alert('Veuillez entrez un mot de passe valide')
        }

        if (role == "") {
            alert('Veuillez sélectionner un role')
        }

        if (role === 'etudiant') {

            if (email !== "" && passe !== "" && role !== "") {
                const predicat = etudiant => etudiant.email === email && etudiant.passe === passe;
                const e = etudiants.filter(predicat);
                if (e === undefined || e === null || Object.keys(e).length === 0) {
                    alert("L'étudiant n'existe pas");
                } else {
                    history.push(`/board/${e[0]._id}`);
                    window.location.reload();
                }
            }


        }
        else if (role === 'enseignant') {
            if (email !== "" && passe !== "" && role !== "") {
                const predicat = enseignant => enseignant.email === email && enseignant.passe === passe;
                const e = enseignants.filter(predicat);
                if (e === undefined || e === null || Object.keys(e).length === 0) {
                    alert("L'enseignant n'existe pas");
                } else {
                    history.push(`/board-eng/${e[0]._id}`);
                    window.location.reload();
                }
            }
        }
        else if (role === 'admin') {
            if (email !== "" && passe !== "" && role !== "") {
                const predicat = admin => admin.email === email && admin.passe === passe;
                const e = admins.filter(predicat);
                if (e === undefined || e === null || Object.keys(e).length === 0) {
                    alert("L'admisnistrateur n'existe pas");
                } else {
                    history.push(`/${e[0]._id}`);
                    window.location.reload();
                }
            }
        }
        
    }


    return (
        <div style={Sbody}>
            <div className="container my-container" style={styleForm}>
                <div className="card justify-content-md-center">
                    <div className="card-header text-center">
                        <h3>Se connecter</h3>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Mot de passe" value={passe} onChange={(e) => setPasse(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>

                                <option>Selectionner un role</option>
                                <option>etudiant</option>
                                <option>enseignant</option>
                                <option>admin</option>
                            </select>
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <button type="button" className="btn btn-outline-primary" onClick={() => handleConnexion()}>
                                &nbsp;Se connecter
                            </button>
                            <button type="button" className="btn btn-link">
                                <Router>
                                    <Link className="nav-link" to="/inscription" onClick={() => handleLinkClick('/inscription')}>S'incrire</Link>
                                </Router>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <footer style={footer}></footer>
        </div>
    );
}

export default Login