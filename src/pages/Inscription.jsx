import { React } from "react";
import {Link, BrowserRouter as Router,useHistory} from 'react-router-dom';


//************************************************************************************************* */
const styleForm={
    marginTop: '25px',maxWidth: '50%'
}

const  Sbody={
    minHeight:'100vh',
    margin:0,
    padding:0,
    //backgroundColor:'red',
    backgroundImage:'url(./asset/font.jpeg)'
    
}

const footer = {
    backgroundColor: 'rgba(228, 207, 153,0.7)',
    height: '12vh',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right:'0',
    textAlign: 'center', 
    
}
//*********************************************************************************************** */
const Inscription = ()=>{

    const history = useHistory();

    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };

    return (
            <div style={Sbody}>
                <div className="container my-container" style={styleForm}>
                    <div className="card justify-content-md-center">
                        <div className="card-header text-center">
                            <h3>Inscription</h3>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Nom" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Prenom" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <button type="button"  className="btn btn-outline-primary">
                                    Suivant
                                </button>
                                <button type="button"  className="btn btn-link">
                                    <Router>
                                        <Link className="nav-link" to='/login' onClick={() => handleLinkClick('/login')}>Connexion</Link>
                                    </Router>  
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <footer style={footer}></footer>
            </div >
    );
}

export default Inscription