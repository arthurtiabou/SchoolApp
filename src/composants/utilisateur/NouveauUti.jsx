import { React,useState } from "react";
import { Link, BrowserRouter as Router,useHistory } from 'react-router-dom';

import {
    //Calendar,
    InfoCircleFill,
    StopCircle,
    SaveFill

} from "react-bootstrap-icons";
import { createAdmin } from "../../services/admin.services";
//*********************************************************************** */

const formu ={
    marginTop:'20vh'
}


//************************************************************************ */

const NouveauUti = () => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };


    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [prenom,setPrenom] = useState('');

    const handleCreateAdmin = async () => {

        if (nom == "") {
            alert("Veuillez entrer un nom")
        }
        if (email == "") {
            alert("Veuillez entrer un email")
        }
        if (prenom == "") {
            alert("Veuillez entrer votre prenom")
        }

        if (nom !== "" && prenom!== "" && email !== "" ) {
        const admin = {
            nom:nom,
            prenom:prenom,
            email:email,
            passe:nom+prenom
        };

        createAdmin(admin);
        handleLinkClick('/admin/liste-uti');
      };}
//***************************************************************************************************************************** */
    return (
        <div>
            <div className="col">
                <div className="col-md-12 mb-2">

                </div>
                <div className="col-md-12">
                    <div className="col-md-12 m-2">
                        <h2><InfoCircleFill></InfoCircleFill> &nbsp;
                            Information de l'utilisateur </h2>
                    </div>
                    <div className="col-md-12" style={formu}>

                    <form >
                            <div className="row m-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input type="mail" className="form-control" placeholder="mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-end p-3 ">

                    <Router replace={true}>
                        <Link className="btn btn-danger ml-2"to="/admin/liste-uti" onClick={() => handleLinkClick('/admin/liste-uti')} >
                            <StopCircle></StopCircle>  Annuler
                        </Link>&nbsp;
                    </Router>

                    <Router>
                        <Link className="btn btn-primary" to="/admin/liste-uti" onClick={() => handleCreateAdmin()}>
                            <SaveFill></SaveFill>  Enregistrer
                        </Link>
                    </Router>

                </div>
            </div>


        </div>
    )
}

export default NouveauUti