import { React } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import {
    //Calendar,
    Facebook,
    Instagram,
    Google,
    Github,
    PersonCircle,
    BagCheckFill,
    Calendar2Fill,
    GearFill,
    MortarboardFill,
    ClockFill,
    Search


} from "react-bootstrap-icons";

//******************************************************************************* */


//******************************************************************************* */
const footer = {
    backgroundColor: 'rgba(228, 207, 153,0.7)',
    height: '12vh',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    textAlign: 'center',
    zIndex: '1000',
    marginTop: '20px'

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

const board = {
    height: '85vh',
    border: '3px solid rgba(221, 231, 232, 0.914)',
    borderRadius: '5px',
    zIndex: '1',
}

const content = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const affichage = {
    height: '85vh',
    border: '3px solid rgba(221, 231, 232, 0.914)',
    borderRadius: '5px',
    zIndex: '1',
}

const header = {
    borderRadius: '8px',
    padding: '10px 10px 0 10px',
    border: '3px solid rgba(221, 231, 232, 0.914)',
    margin: '10px'
}

const uti = {
    display: 'flex',
    justifyContent: 'center',

}

const hr = {
    border: '2px solid rgba(217, 222, 223, 0.7)',
}


const element = {
    color: 'black',
    textDecoration: 'none',
    display: 'block',
    lineHeight: '1',
}

const child = {
    margin: '20px 0 0 0',
    height: '70vh',
    overflowY: 'scroll',
    scrollbarWidth: 'thin'
}

//********************************************************************************* */

const Admin = ({ children }) => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };
//*************************************************************************************************************************** */
    return (
        <div>
            <div className="row" style={content}>
                <div className="col-2" style={board}>

                    <hr style={hr} />
                    <ul>
                        <li style={element}>
                            <Router replace={true}>
                                <Link style={element} to="/admin/etudiant" onClick={() => handleLinkClick('/admin/etudiant')}><MortarboardFill style={icoFooter}></MortarboardFill>&nbsp;Etudiants</Link>
                            </Router>
                        </li>


                        <li style={element}>
                            <Router>
                                <Link style={element} to="/admin/liste-abs" onClick={() => handleLinkClick('/admin/liste-abs')}><ClockFill style={icoFooter}></ClockFill>&nbsp;Abscences</Link>
                            </Router>
                        </li>

                    </ul>

                    <hr style={hr} />

                    <ul>

                        <li style={element}>
                            <Router replace={true}>
                                <Link style={element} to="/admin/enseignant" onClick={() => handleLinkClick('/admin/enseignant')}><BagCheckFill style={icoFooter}></BagCheckFill>&nbsp;Enseignants</Link>
                            </Router>
                        </li>

                        <li style={element}>
                            <Router>
                                <Link style={element} to="/admin/liste-emp" onClick={() => handleLinkClick('/admin/liste-emp')} ><Calendar2Fill style={icoFooter}></Calendar2Fill>&nbsp;Emploi temps</Link>
                            </Router>
                        </li>
                    </ul>

                    <hr style={hr} />

                    <ul>
                        <li style={element}>
                            <Router>
                                <Link style={element} to="/admin/liste-uti" onClick={() => handleLinkClick('/admin/liste-uti')}><PersonCircle style={icoFooter} ></PersonCircle>&nbsp;Utilisateurs</Link>
                            </Router>
                        </li>

                        <li style={element}>
                            <Router>
                                <Link style={element} to="/admin/parametre" onClick={() => handleLinkClick('/admin/parametre')} ><GearFill style={icoFooter} ></GearFill>&nbsp;Paramètres</Link>
                            </Router>
                        </li>
                    </ul>

                    <hr style={hr} />


                </div>
                <div className="col-10" style={affichage}>

                    <div className="row" style={header}>
                        <div className="col-md-8">
                            <div className="input-group flex-nowrap">
                                <input type="search" class="form-control" placeholder="faites une recherche" />
                                <span className="input-group-text" id="addon-wrapping"><Search></Search></span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row" style={uti}>
                                <div className="col-md-10">
                                    <span>Bonjour Arthur</span>
                                </div>
                                <div className="col-md-2">
                                    <Router>
                                        <Link to="/admin/utilisateur"
                                         onClick={() => handleLinkClick('/admin/utilisateur')}><PersonCircle style={icoFooter}>
                                            </PersonCircle></Link>
                                    </Router>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container" style={child}>
                        {children}
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

        </div >
    )
}

export default Admin