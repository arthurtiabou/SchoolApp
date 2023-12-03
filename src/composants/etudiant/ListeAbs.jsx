import { React, useState, useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    InfoCircleFill,
    PeopleFill,
    PencilFill,
    Trash2Fill,
    GripVertical,
    Calendar2Fill,
    Clock,
    ClockFill,
    StopCircle


} from "react-bootstrap-icons";
import { deleteAbscence, fetchAbscence } from "../../services/abscence.services";

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

const ListeAbs = () => {

    const [abscences, setAbscences] = useState([]);

    useEffect(() => {
        const getAbscences = async () => {
            const users = await fetchAbscence();
            setAbscences(users);
        };

        getAbscences();
    }, []);

    const history = useHistory();
    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };


    const [show, setShow] = useState(false);

    const [id, setId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (id) => { setShow(true); setId(id) };

    const handleDeleteAbscence = async (id) => {
        await deleteAbscence(id);
        setAbscences(abscences.filter((abscence) => abscence._id !== id));
        window.location.reload();
    };
//******************************************************************************************************************* */
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
                        <Router replace={true}>
                            <Link className="btn btn-primary" to="/admin/nouvelle-abs" onClick={() => handleLinkClick("/admin/nouvelle-abs")} >
                                &nbsp;Nouveau
                            </Link>
                        </Router>

                    </div>
                </div>
            </div>

            <h2><Clock></Clock>&nbsp; Listes des abscences etudiants</h2>

            <div className="row" style={etudiants}>


                {
                    abscences.map((abscence) => {
                        return (
                            <div className="row" key={abscence._id}>

                                <div className="col-3" style={etudiant}>
                                    <Calendar2Fill></Calendar2Fill>&nbsp;
                                    {abscence.date}
                                </div>
                                <div className="col-2" style={etudiant}> <InfoCircleFill></InfoCircleFill>&nbsp;
                                    {abscence.nom}
                                </div>
                                <div className="col-2" style={etudiant}>
                                    <ClockFill></ClockFill>&nbsp;
                                    {abscence.periode}
                                </div>
                                <div className="col-2" style={etudiant}>
                                    <PeopleFill></PeopleFill>&nbsp;
                                    {abscence.groupe}
                                </div>
                                <div className="col-3" style={etudiant}>
                                    <div className="" style={action}>

                                        <Router>
                                            <Link className="btn btn-link" to="/inscription" style={link} onClick={()=>handleLinkClick(`/admin/erreur`)}>
                                                <PencilFill></PencilFill>Modifier
                                            </Link>
                                        </Router>

                                        <Router>
                                            <Link className="btn btn-link" to="/admin/liste-abs" style={danger} onClick={()=>handleShow(abscence._id)}>
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
                        <Button variant="danger" onClick={() => handleDeleteAbscence(id)}>
                            <Trash2Fill></Trash2Fill> Confimer
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>

        </div >
    )
}

export default ListeAbs