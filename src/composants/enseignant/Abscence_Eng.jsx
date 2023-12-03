import { React } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import {
    Calendar2Fill,
    Facebook,
    Clock,
    ClockFill,
    Instagram,
    Google,
    Github,
    BookFill,
    Box2Fill
} from "react-bootstrap-icons";

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
    height: '80px',
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
const AbscencesEng = () => {
    return (
        <div className="row">
            <h2 style={title}><Clock style={ico}></Clock>  Abscences de l'Etudiant</h2>
            <div className="row" style={abscence}>
                <div className="col-8">
                    <div className="row" style={abscence}>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                <BookFill></BookFill> &nbsp;Matières
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                <Calendar2Fill></Calendar2Fill> &nbsp; Jours
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                <ClockFill></ClockFill> &nbsp; Heures
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                <Box2Fill></Box2Fill> &nbsp;Salles
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row" style={abscence}>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                Anglais
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                mardi
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                12h00
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                306
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row" style={abscence}>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                Anglais
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                mercredi
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                12h00
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                306
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row" style={abscence}>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                Anglais
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                lundi
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                12h00
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                306
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-8">
                    <div className="row" style={abscence}>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                Anglais
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                mardi
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                12h00
                            </div>
                        </div>
                        <div className="col-2" style={colone}>
                            <div className="col" style={abscence}>
                                306
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row" style={abscence}>
                        <div className="col-8" style={total}>
                            Total heures : 8 heures
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

export default AbscencesEng