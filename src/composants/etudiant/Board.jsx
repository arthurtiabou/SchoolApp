import { React, useState,useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory ,useParams} from 'react-router-dom';
import {
    Folder,
    Calendar,
    Clock,
    HouseAddFill,
    Facebook,
    Instagram,
    Google,
    Github
} from "react-bootstrap-icons";
import { fetchEtudiant } from "../../services/etudiant.services";

const Snote = {
    textDecoration: 'none',
    textAlign: 'center'
}

const Sabs = {
    textDecoration: 'none',
    textAlign: 'center'
}

const navLink = {
    textDecoration: 'none',
}

const Sboard = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
}

const Scontent = {
    display: 'flex',
    height: '80vh',
    with: '80vh',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
}

const Sabsnote = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '15px'
}

const cplg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0'
}
const planning = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '25vh',
    with:'100%',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: '1px solid #e3e3e3',
    transition: 'all 0.3s ease-in-out'
}

const note = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '25vh',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: '1px solid #e3e3e3',
    transition: 'all 0.3s ease-in-out'
}

const abs = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '25vh',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: '1px solid #e3e3e3',
    transition: 'all 0.3s ease-in-out',


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

const ico = {
    height: "10vh"
}

const icon = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: 'black'
}
const title = {
    margin: '40px 0 0 60px'
}
const icoTitle = {
    height: '11vh',
    color: 'black'
}

const icoFooter = {
    height: '7vh',
    color: 'black'
}

const social = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}
//****************************************************************************************************************** */
const Board = () => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };


    const [student,setStudent] =useState()
    const { id } = useParams();

    useEffect(() => {
        // Récupère l'id de l'utilisateur
        
        const getEtudiant = async (id) => {
            const users = await fetchEtudiant(id);
            setStudent(users);
        };

        getEtudiant(id);
    }, [id]);
//*************************************************************************************************************************** */
    return (
        <>
            <h1 style={title}><HouseAddFill style={icoTitle}></HouseAddFill> Tableau de bord de l'étudiant</h1>
            <div className="content row" style={Scontent}>
                <div className="board col-6" style={Sboard}>
                    <div className="col-12" style={cplg}>
                        <div className="hover col-11" style={planning}>
                            <Router>
                                <Link style={navLink} to='/planning-ets' onClick={() => handleLinkClick(`/planning-ets/${id}`)}>
                                    <div className="row" style={icon}>
                                        <div className="row"><Calendar style={ico}></Calendar></div>
                                        <div className="row">planning</div>
                                    </div>

                                </Link>
                            </Router>
                        </div>
                    </div>

                    <div className="abs-note row" style={Sabsnote}>
                        <div className="hover col-5" style={abs}>
                            <Router>
                                <Link style={Sabs} to='/abscence-ets' onClick={() => handleLinkClick(`/abscence-ets/${id}`)}>
                                    <div className="row" style={icon}>
                                        <div className="row"><Clock style={ico}></Clock></div>
                                        <div className="row">Abscences</div>
                                    </div>
                                </Link>
                            </Router>
                        </div>
                        <div className="hover col-5" style={note}>
                            <Router>
                                <Link style={Snote} to='/abscence-ets'>
                                    <div className="row" style={icon}>
                                        <div className="row"><Folder style={ico}></Folder></div>
                                        <div className="row">Notes</div>
                                    </div>
                                </Link>
                            </Router>
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
        </>
    );
}

export default Board
