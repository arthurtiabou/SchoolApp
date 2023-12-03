import { React, useState } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';

import {
    //Calendar,
    InfoCircleFill,
    StopCircle,
    SaveFill

} from "react-bootstrap-icons";
import { createEnseignant } from "../../services/enseignant.services";
//*********************************************************************** */

const formu = {
    marginTop: '20vh'
}


//************************************************************************ */

const NouveauEng = () => {



    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [matiere, setMatiere] = useState('');
    const [prenom, setPrenom] = useState('');


    const handleCreateEnseignant = async () => {

        if (nom == "") {
            alert("Veuillez entrer un nom")
        }
        if (email == "") {
            alert("Veuillez entrer un email")
        }
        if (matiere == "") {
            alert("Veuillez entrer une matière")
        }
        if (prenom == "") {
            alert("Veuillez entrer un prenom")
        }
        if (nom !== "" && prenom!== "" && email !== "" && matiere !== "") {
        const enseignant = {
            nom: nom,
            prenom: prenom,
            email: email,
            matiere: matiere,
            passe: nom + prenom
        };

        createEnseignant(enseignant);
        handleLinkClick('/admin/enseignant');}
    };
//******************************************************************************************************************************* */
    return (
        <div>
            <div className="col">
                <div className="col-md-12 mb-2">

                </div>
                <div className="col-md-12">
                    <div className="col-md-12 m-2">
                        <h2><InfoCircleFill></InfoCircleFill> &nbsp;
                            Information de l'enseignant </h2>
                    </div>
                    <div className="col-md-12" style={formu}>

                        <form >
                            <div className="row m-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Nom" required value={nom} onChange={(e) => setNom(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input type="mail" className="form-control" placeholder="mail" required value={email} onChange={(e) => setEmail(e.target.value)} />

                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Prenom" required value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                                </div>
                                <div className="col">
                                    <select className="form-control" value={matiere} onChange={(e) => setMatiere(e.target.value)} >
                                        <option>Selectionner une matiere</option>
                                        <option>Anglais</option>
                                        <option>Reseau</option>
                                        <option>Cloud</option>
                                        <option>Securite</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-end p-3 ">

                    <Router replace={true}>
                        <Link className="btn btn-danger ml-2" to="/admin/enseignant" onClick={() => handleLinkClick('/admin/enseignant')}>
                            <StopCircle></StopCircle>  Annuler
                        </Link>&nbsp;
                    </Router>

                    <Router>
                        <Link className="btn btn-primary" to="/admin/enseignant" onClick={() => { handleCreateEnseignant() }}>
                            <SaveFill></SaveFill>  Enregistrer
                        </Link>
                    </Router>

                </div>
            </div>


        </div>
    )
}

export default NouveauEng