import { React } from "react";
import { Link, BrowserRouter as Router ,useHistory ,useParams} from 'react-router-dom';

import {
    Calendar,
    Clock,
    HouseAddFill,
    Facebook,
    Instagram,
    Google,
    Github
} from "react-bootstrap-icons";

const Snote = {
    textDecoration: 'none',
    textAlign: 'center'
}

const Sabs = {
    textDecoration: 'none',
    textAlign: 'center'
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
    transition: 'all 0.3s ease-in-out'

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

const title = {
    margin: '40px 0 0 60px'
}
const icoTitle = {
    height: '70px',
    color: 'black'
}

const ico = {
    height: "10vh"
}

const icon = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: 'black'
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
//****************************************************************************************************************** */
const BoardEng = () => {

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };

    const { id } = useParams();
//************************************************************************************************************************* */
    return (
        <>
            <h1 style={title}> <HouseAddFill style={icoTitle}></HouseAddFill>Tableau de bord de l'enseignant</h1>
            <div className="content row" style={Scontent}>
                <div className="board col-md-7" style={Sboard}>

                    <div className="abs-note row" style={Sabsnote}>
                        <div className="hover col-md-5" style={abs}>
                            <Router>
                                <Link style={Sabs} to='/login' onClick={() => handleLinkClick('/login')}>
                                    <div className="row" style={icon}>
                                        <div className="row"><Clock style={ico}></Clock></div>
                                        <div className="row">Abscences</div>
                                    </div>
                                </Link>
                            </Router>
                        </div>
                        <div className="hover col-md-5" style={note}>
                            <Router>
                                <Link style={Snote} to='/login' onClick={() => handleLinkClick(`/planning-eng/${id}`)}>
                                    <div className="row" style={icon}>
                                        <div className="row"><Calendar style={ico}></Calendar></div>
                                        <div className="row">planning</div>
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

export default BoardEng
