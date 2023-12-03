import { React, useState, useEffect } from "react";
import { Link, BrowserRouter as Router,useParams } from 'react-router-dom';
import {
    Calendar2Fill,
    Facebook,
    Clock,
    ClockFill,
    Instagram,
    Google,
    Github,
    PeopleFill,
    InfoCircleFill
} from "react-bootstrap-icons";
import { fetchEtudiant } from "../../services/etudiant.services";
import { fetchAbscence } from "../../services/abscence.services";

//******************************************************************************************* */

const title = {
    margin: '30px 0 0 30px'
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

const icoFooter = {
    height: '50px',
    color: 'black'
}

const social = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}

const ico = {
    height: '12vh',
    color: 'black'
}

const abscence = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const colone = {
    border: '2px solid rgba(240, 244, 247, 0.9)'
}

const total = {
    backgroundColor: 'rgba(228, 207, 153,0.7)'
}
//****************************************************************************************** */
const AbscencesEts = () => {


    const [student, setStudent] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Récupère l'id de l'utilisateur

        const getEtudiant = async (id) => {
            const users = await fetchEtudiant(id);
            setStudent(users);
        };

        getEtudiant(id);
    }, [id]);


    const [abscences, setAbscences] = useState([]);

    useEffect(() => {
        const getAbscences = async () => {
            const users = await fetchAbscence();
            setAbscences(users);
        };

        getAbscences();
    }, []);

    const predicat = (abscence) => abscence.groupe === student.groupe ;
    const e = abscences.filter(predicat)

    const t = e.length*1.5
//******************************************************************************************************** */
    return (
        <div className="row">
            <h2 style={title}><Clock style={ico}></Clock>  Abscences de l'Etudiant</h2>
            <div className="row" style={abscence}>

            <div className="col-10">
                    <div className="row" style={abscence}>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                               <InfoCircleFill></InfoCircleFill> &nbsp;Nom
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                <Calendar2Fill></Calendar2Fill> &nbsp; Date
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                <ClockFill></ClockFill> &nbsp; Heures
                            </div>
                        </div>
                        <div className="col-4" style={colone}>
                            <div className="col" style={abscence}>
                            <PeopleFill></PeopleFill>&nbsp;Groupe
                            </div>
                        </div>
                    </div>
                </div>

                {e.map((abs) => {
                    return (
                        <>
                            <div className="col-10" key={abs._id}>
                                <div className="row" style={abscence}>
                                    <div className="col-2" style={colone}>
                                        <div className="col" style={abscence}>
                                           {abs.nom}
                                        </div>
                                    </div>
                                    <div className="col-2" style={colone}>
                                        <div className="col" style={abscence}>
                                            {abs.date}
                                        </div>
                                    </div>
                                    <div className="col-2" style={colone}>
                                        <div className="col" style={abscence}>
                                             {abs.periode}
                                        </div>
                                    </div>
                                    <div className="col-4" style={colone}>
                                        <div className="col" style={abscence}>
                                            {abs.groupe}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}


                <div className="col-10">
                    <div className="row" style={abscence}>
                        <div className="col-10" style={total}>
                            Total heures : {t} heures
                        </div>
                    </div>
                </div>
            </div>
            <footer style={footer}>
                <div className="col-2" style={social}>
                    <Router>
                        <Link to='/facebook'><Facebook style={icoFooter}></Facebook></Link>
                        <Link to='/instagram'><Instagram style={icoFooter}></Instagram></Link>
                        <Link to='/google'><Google style={icoFooter}></Google></Link>
                        <Link to='/github'><Github style={icoFooter}></Github></Link>
                    </Router>
                </div>
            </footer>
        </div>
    )
}

export default AbscencesEts