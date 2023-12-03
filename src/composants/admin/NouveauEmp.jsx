import { React, useState,useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';

import {
    //Calendar,
    InfoCircleFill,
    StopCircle,
    SaveFill

} from "react-bootstrap-icons";
import { createPlanning } from "../../services/planning.services";
import { fetchEnseignants } from "../../services/enseignant.services";
//*********************************************************************** */

const formu = {
    marginTop: '20vh'
}


//************************************************************************ */

const NouveauEmp = () => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };


    const [semaine, setSemaine] = useState('');
    const [jour, setJour] = useState('');
    const [matiere, setMatiere] = useState('');
    const [periode, setPeriode] = useState('');
    const [enseignant, setEnseignant] = useState('');
    const [salle, setSalle] = useState('');
    const [groupe, setGroupe] = useState('');

    const [enseignants, setEnseignants] = useState([]);

    useEffect(() => {
        const getEnseignants = async () => {
            const users = await fetchEnseignants();
            setEnseignants(users);
        };

        getEnseignants();
    }, []);



    const handleCreatePlanning = async () => {

        if (semaine == "") {
            alert("Veuillez entrer une date")
        }
        if (jour == "") {
            alert("Veuillez Selectionner un jour")
        }
        if (matiere == "") {
            alert("Veuillez Selectionner une matière")
        }
        if (periode == "") {
            alert("Veuillez selectionner une période")
        }
        if (enseignant == "") {
            alert("Veuillez selectionner un enseignant")
        }
        if (salle == "") {
            alert("Veuillez selectionner une salle")
        }
        if (groupe == "") {
            alert("Veuillez selectionner un groupe")
        }

        if (groupe !== "" && salle !== "" && enseignant !== "" && matiere !== "" && jour !== "" && semaine !== "" && periode !== "") {

            const enseignan = {
                semaine: semaine,
                jour: jour,
                debut: periode,
                enseignant: enseignant,
                matiere: matiere,
                groupe: groupe,
                salle: salle,
            };

            createPlanning(enseignan);
            handleLinkClick('/admin/liste-emp');
        }
    };
//***************************************************************************************************************************************** */
    return (
        <div>
            <div className="col">
                <div className="col-md-12 mb-2">

                </div>
                <div className="col-md-12">
                    <div className="col-md-12 m-2">
                        <h2><InfoCircleFill></InfoCircleFill> &nbsp;
                            Information sur l'emplois de temps </h2>
                    </div>
                    <div className="col-md-12" style={formu}>

                        <form >
                            <div className="row m-2">
                                <div className="col">
                                    <input type="date" className="form-control" placeholder="semaine" value={semaine} onChange={(e) => setSemaine(e.target.value)} />
                                </div>
                                <div className="col">
                                    <select className="form-control" value={jour} onChange={(e) => setJour(e.target.value)} >
                                        <option>Selectionner un jour de la semaine</option>
                                        <option>Lundi</option>
                                        <option>Mardi</option>
                                        <option>Mercredi</option>
                                        <option>Jeudi</option>
                                        <option>Vendredi</option>

                                    </select>

                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col">
                                    <select className="form-control" value={periode} onChange={(e) => setPeriode(e.target.value)} >
                                        <option> Selectionner une periode</option>
                                        <option>8H30</option>
                                        <option>10H30</option>
                                        <option>13H30</option>
                                        <option>15H00</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-control" value={salle} onChange={(e) => setSalle(e.target.value)} >
                                        <option>Selectionner une salle</option>
                                        <option>Salle 202</option>
                                        <option>Salle 107</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col">
                                    <select className="form-control" value={matiere} onChange={(e) => setMatiere(e.target.value)} >
                                        <option>Selectionner une matiere</option>
                                        <option>Anglais</option>
                                        <option>Reseau</option>
                                        <option>Cloud</option>
                                        <option>Securite</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-control" value={enseignant} onChange={(e) => setEnseignant(e.target.value)} >
                                        <option>Selectionner un enseignant</option>
                                        {enseignants.map((enseignant) =>{
                                            return(
                                                <>
                                                     <option key={enseignant._id}>{enseignant.nom}</option>
                                                </>
                                            )
                                        })}
                                       
                                       
                                    </select>
                                </div>
                            </div>


                            <div className="row m-2">

                                <div className="col">
                                    <select className="form-control" value={groupe} onChange={(e) => setGroupe(e.target.value)}>
                                        <option>Selectionner un groupe</option>
                                        <option>Groupe 1</option>
                                        <option>Groupe 2  </option>
                                    </select>
                                </div>

                                <div className="col">

                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-end p-3 ">

                    <Router>
                        <Link className="btn btn-danger ml-2" to="/admin/liste-emp" onClick={() => handleLinkClick('/admin/liste-emp')}>
                            <StopCircle></StopCircle>  Annuler
                        </Link>&nbsp;
                    </Router>

                    <Router>
                        <Link className="btn btn-primary" to="/admin/liste-emp" onClick={() => handleCreatePlanning()}>
                            <SaveFill></SaveFill>  Enregistrer
                        </Link>
                    </Router>

                </div>
            </div>


        </div>
    )
}

export default NouveauEmp