import { React, useState, useEffect } from "react";
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
import { deleteAdmin, fetchAdmins } from "../../services/admin.services";

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
    color: 'red'
}

//******************************************************************************** */

const ListeUti = () => {

    const history = useHistory();
    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const getAdmins = async () => {
            const users = await fetchAdmins();
            setAdmins(users);
        };

        getAdmins();
    }, []);

    const [show, setShow] = useState(false);

    const [id, setId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (id) => { setShow(true); setId(id) };

    const handleDeleteAdmin = async (id) => {
        await deleteAdmin(id);
        setAdmins(admins.filter((admin) => admin._id !== id));
    };

//********************************************************************************************************************** */
    return (
        <div className="row">

            <div className="" style={button}>
                <div class="d-flex mt-2">
                    <div className="p-2 flex-fill">
                        <button className="btn btn-warning" onClick={()=>handleLinkClick(`/admin/erreur`)}>

                            &nbsp;Importer</button>
                    </div>
                    <div className="p-2 flex-fill">
                        <button className="btn btn-success" onClick={()=>handleLinkClick(`/admin/erreur`)}>

                            &nbsp;Exporter</button>
                    </div>
                    <div className="p-2 flex-fill">
                        <Router>
                            <Link className="btn btn-primary" to='/admin/nouveau-uti' onClick={() => handleLinkClick('/admin/nouveau-uti')}>
                                &nbsp;Nouveau
                            </Link>
                        </Router>

                    </div>
                </div>
            </div>

            <h2><MortarboardFill></MortarboardFill>&nbsp; Listes des utilisateurs</h2>

            <div className="row" style={etudiants}>




                {
                    admins.map((admin) => {
                        return (
                            <div className="row">
                                <div className="col-md-3" style={etudiant}>
                                    <EnvelopeAtFill></EnvelopeAtFill>&nbsp;
                                    {admin.email}
                                </div>
                                <div className="col-md-2" style={etudiant}> <InfoCircleFill></InfoCircleFill>&nbsp;
                                    {admin.nom}
                                </div>
                                <div className="col-md-2" style={etudiant}>
                                    <InfoCircleFill></InfoCircleFill>&nbsp;
                                    {admin.prenom}
                                </div>
                                <div className="col-md-2" style={etudiant}>
                                    <PeopleFill></PeopleFill>&nbsp;
                                   {admin.passe}
                                </div>
                                <div className="col-md-3" style={etudiant}>
                                    <div className="" style={action}>

                                        <Router>
                                            <Link className="btn btn-link" to="/inscription" style={link} onClick={()=>handleLinkClick(`/admin/erreur`)}>
                                                <PencilFill></PencilFill>Modifier
                                            </Link>
                                        </Router>

                                        <Router>
                                            <Link className="btn btn-link" to="/admin/nouveau-uti" style={danger} onClick={() => handleShow(admin._id)}>
                                                <Trash2Fill></Trash2Fill>Supprimer
                                            </Link>
                                        </Router>

                                        <Router>
                                            <Link className="btn btn-link" to="/inscription" style={link} onClick={()=>handleLinkClick(`/admin/erreur`)}>
                                                <GripVertical></GripVertical>Details
                                            </Link>
                                        </Router>

                                    </div>
                                </div>
                            </div>

                        )
                    })}


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
                        <Button variant="danger" onClick={() => handleDeleteAdmin(id)}>
                            <Trash2Fill></Trash2Fill> Confimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div >
    )
}

export default ListeUti