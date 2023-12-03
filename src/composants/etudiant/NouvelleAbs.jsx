import { React, useState,useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';

import {
    //Calendar,
    InfoCircleFill,
    StopCircle,
    SaveFill

} from "react-bootstrap-icons";
import { createAbscence } from "../../services/abscence.services";
import { fetchEtudiants } from "../../services/etudiant.services";
//*********************************************************************** */

const formu = {
    marginTop: '20vh'
}


//************************************************************************ */

const NouvelleAbs = () => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };

    const [nom, setNom] = useState('');
    const [date, setDate] = useState('');
    const [groupe, setGroupe] = useState('');
    const [periode, setPeriode] = useState('');

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getEtudiants = async () => {
            const users = await fetchEtudiants();
            setStudents(users);
        };

        getEtudiants();
    }, []);

    const handleCreateAbscence = async () => {

        if (nom == "") {
            alert("Veuillez entrer un nom")
        }
        if (date == "") {
            alert("Veuillez entrer une date")
        }
        if (groupe == "") {
            alert("Veuillez entrer une matière")
        }
        if (periode == "") {
            alert("Veuillez selectionner une periode")
        }

        if (nom !== "" && periode !== "" && date !== "" && groupe !== "") {
            const admin = {
                nom: nom,
                date: date,
                periode: periode,
                groupe: groupe
            };

            createAbscence(admin);
            handleLinkClick('/admin/liste-abs');
        };
    }
//************************************************************************************************************* */
    return (
        <div>
            <div className="col">
                <div className="col-12 mb-2">

                </div>
                <div className="col-12">
                    <div className="col-12 m-2">
                        <h2><InfoCircleFill></InfoCircleFill> &nbsp;
                            Information sur l'abscence </h2>
                    </div>
                    <div className="col-12" style={formu}>

                        <form >
                            <div className="row m-2">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <select className="form-control" value={nom} onChange={(e) => setNom(e.target.value)}>
                                        <option>Selectionner un etudiant</option>
                                        {students.map((student) =>{
                                            return(
                                                <>
                                                    <option key={student._id}>{student.nom}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <input type="date" className="form-control" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <select className="form-control" value={periode} onChange={(e) => setPeriode(e.target.value)}>
                                        <option>Selectionner une periode</option>
                                        <option>8H30</option>
                                        <option>10H30</option>
                                        <option>12H00 </option>
                                        <option>13H30 </option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <select className="form-control " value={groupe} onChange={(e) => setGroupe(e.target.value)}>

                                        <option>Selectionner un groupe</option>
                                        <option>Groupe 1</option>
                                        <option>Groupe 2</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-end p-3 ">

                    <Router>
                        <Link className="btn btn-danger ml-2" to="/admin/liste-abs" onClick={() => handleLinkClick('/admin/liste-abs')}>
                            <StopCircle></StopCircle>  Annuler
                        </Link>&nbsp;
                    </Router>

                    <Router>
                        <Link className="btn btn-primary" to="/admin/liste-abs" onClick={() => handleCreateAbscence()}>
                            <SaveFill></SaveFill>  Enregistrer
                        </Link>
                    </Router>

                </div>
            </div>


        </div>
    )
}

export default NouvelleAbs