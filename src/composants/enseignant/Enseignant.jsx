import { React, useState,useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    //Calendar,
    EnvelopeAtFill,
    InfoCircleFill,
    PeopleFill,
    PencilFill,
    Trash2Fill,
    GripVertical,
    MortarboardFill,
    StopCircle


} from "react-bootstrap-icons";
import { deleteEnseignant, fetchEnseignants } from "../../services/enseignant.services";

//***********************************************************************************/

const button = {
    display: 'flex',
    justifyContent: 'end'
}

const etudiant = {
    border: '2px solid rgba(221, 231, 232, 0.914)'
}

const etudiants = {
    margin: '30px 0 0 0'
}

const action = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

const link = {
    textDecoration: 'none',
}

const danger = {
    textDecoration: 'none',
    color:'red'
}
//******************************************************************************** */

const Enseignant = () => {

    const history = useHistory();
    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };


    const [enseignants, setEnseignant] = useState([]);

    useEffect(() => {
        const getEnseignants = async () => {
            const users = await fetchEnseignants();
            setEnseignant(users);
        };

        getEnseignants();
    }, []);

    const [show, setShow] = useState(false);

    const [id, setId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (id) => { setShow(true); setId(id) };

    const handleDeleteEnseignant = async (id) => {
        await deleteEnseignant(id);
        setEnseignant(enseignants.filter((enseignant) => enseignant._id !== id));
        setShow(false);
    };
//*************************************************************************************************************************************** */
    return (
        <div className="row">

            <div className="" style={button}>
                <div class="d-flex mt-2">
                    <div className="p-2 flex-fill">
                        <button className="btn btn-warning" onClick={()=>handleLinkClick(`/admin/erreur`)}>

                            &nbsp;Importer</button>
                    </div>
                    <div className="p-2 flex-fill">
                        <button className="btn btn-success"  onClick={()=>handleLinkClick(`/admin/erreur`)}>

                            &nbsp;Exporter</button>
                    </div>
                    <div className="p-2 flex-fill">
                        <Router>
                            <Link className="btn btn-primary" to='/admin/nouveau-eng' onClick={() => handleLinkClick('/admin/nouveau-eng')}>
                                &nbsp;Nouveau
                            </Link>
                        </Router>

                    </div>
                </div>
            </div>

            <h2><MortarboardFill></MortarboardFill>&nbsp; Listes des enseignants</h2>

            <div className="row" style={etudiants}>

                {
                    enseignants.map((eng) => {
                        return (

                            <div className="row" key={eng._id}>

                                <div className="col-md-3" style={etudiant}>
                                    <EnvelopeAtFill></EnvelopeAtFill>&nbsp;
                                   {eng.email}
                                </div>
                                <div className="col-md-2" style={etudiant}> <InfoCircleFill></InfoCircleFill>&nbsp;
                                    {eng.nom}
                                </div>
                                <div className="col-md-2" style={etudiant}>
                                    <InfoCircleFill></InfoCircleFill>&nbsp;
                                    {eng.prenom}
                                </div>
                                <div className="col-md-2" style={etudiant}>
                                    <PeopleFill></PeopleFill>&nbsp;
                                    {eng.matiere}
                                </div>
                                <div className="col-md-3" style={etudiant}>
                                    <div className="" style={action}>

                                        <Router>
                                            <Link className="btn btn-link" to="/inscription" style={link} onClick={()=>handleLinkClick(`/admin/erreur`)}>
                                                <PencilFill></PencilFill>Modifier
                                            </Link>
                                        </Router>

                                            <Link className="btn btn-link" to="/admin/enseignant" style={danger} onClick={()=>handleShow(eng._id)}>
                                                <Trash2Fill></Trash2Fill>Supprimer
                                            </Link>
                                        

                                        <Router>
                                            <Link className="btn btn-link" to="/inscription" style={link} onClick={()=>handleLinkClick(`/admin/erreur`)}>
                                                <GripVertical></GripVertical>Details
                                            </Link>
                                        </Router>

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }







            </div>

            <>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation Suppression</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Voulez-vous vraiment supprimer cette élément !</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            <StopCircle></StopCircle>  Close
                        </Button>
                        <Button variant="danger" onClick={() => handleDeleteEnseignant(id)}>
                            <Trash2Fill></Trash2Fill> Confimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div >
    )
}

export default Enseignant