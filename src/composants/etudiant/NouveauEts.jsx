import { React,useState ,useEffect} from "react";
import { Link, BrowserRouter as Router,useHistory ,useParams} from 'react-router-dom';

import {
    //Calendar,
    InfoCircleFill,
    StopCircle,
    SaveFill

} from "react-bootstrap-icons";
import { createEtudiant } from "../../services/etudiant.services";

//*********************************************************************** */

const formu ={
    marginTop:'20vh'
}


//************************************************************************ */

const NouveauEts = () => {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [groupe,setGroupe] = useState('');
    const [prenom,setPrenom] = useState('');


    const handleCreateEtudiant = async () => {

        if (nom == "") {
            alert("Veuillez entrer un nom")
        }
        if (email == "") {
            alert("Veuillez entrer un email")
        }
        if (groupe == "") {
            alert("Veuillez entrer une matière")
        }
        if (prenom == "") {
            alert("Veuillez entrer un prenom")
        }
        if (nom !== "" && prenom!== "" && email !== "" && groupe !== "") {
        const etudiant = {
            nom:nom,
            prenom:prenom,
            email:email,
            groupe:groupe,
            passe:nom+prenom
        };

        createEtudiant(etudiant);
        handleLinkClick('/admin/etudiant');
      };}

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };
//********************************************************************************************************************* */
    return (
        <div>
            <div className="col">
                <div className="col-12 mb-2">

                </div>
                <div className="col-12">
                    <div className="col-12 m-2">
                        <h2><InfoCircleFill></InfoCircleFill> &nbsp;
                            Information de l'apprenant </h2>
                    </div>
                    <div className="col-12" style={formu}>

                        <form >
                            <div className="row m-2">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <input type="text" className="form-control" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <input type="mail" className="form-control" placeholder="mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <input type="text" className="form-control" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                <select className="form-control" value={groupe} onChange={(e) => setGroupe(e.target.value)}>
                                        <option>Selectionner un groupe</option>
                                        <option>Groupe 1</option>
                                        <option>Groupe 2  </option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-end p-3 ">

                    <Router replace={true}>
                        <Link className="btn btn-danger ml-2"to="/admin/etudiant" onClick={() => handleLinkClick('/admin/etudiant')} >
                            <StopCircle></StopCircle>  Annuler
                        </Link>&nbsp;
                    </Router>

                    <Router>
                        <Link className="btn btn-primary" to="/admin/etudiant" onClick={() =>{handleCreateEtudiant()}}>
                            <SaveFill></SaveFill>  Enregistrer
                        </Link>
                    </Router>

                </div>
            </div>


        </div>
    )
}

export default NouveauEts