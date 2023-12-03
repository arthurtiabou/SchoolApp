import { React, useEffect, useState } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetchEtudiants ,deleteEtudiant } from "../../services/etudiant.services";
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

const Etudiant = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getEtudiants = async () => {
            const users = await fetchEtudiants();
            setStudents(users);
        };

        getEtudiants();
    }, []);

    const history = useHistory();
    const handleLinkClick = (newRoute) => {
        history.push(newRoute);
        window.location.reload();
    };


    const [show, setShow] = useState(false);

    const [id,setId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (id) => {setShow(true);setId(id)};

    const handleDeleteEtudiant = async (id) => {
        await deleteEtudiant(id);
        setStudents(students.filter((student) => student._id !== id));
        window.location.reload();
      };
//*************************************************************************************************************************** */
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
                            <Link className="btn btn-primary" to="/admin/nouveau-ets" onClick={() => handleLinkClick(`/admin/nouveau-ets/0`)}>
                                &nbsp;Nouveau
                            </Link>
                        </Router>

                    </div>
                </div>
            </div>

            <h2><MortarboardFill></MortarboardFill>&nbsp; Listes des etudiants</h2>

            <div className="row" style={etudiants}>

                {students.map((student) => {

                    return (
                        <div className="row" key={student._id}>
                            <div className="col-md-3  col-sm-12 col-xs-12" style={etudiant}>
                                <EnvelopeAtFill></EnvelopeAtFill>&nbsp;
                                {student.email}
                            </div>
                            <div className="col-md-2 col-sm-12 col-xs-12" style={etudiant}> <InfoCircleFill></InfoCircleFill>&nbsp;
                                {student.nom}
                            </div>
                            <div className="col-md-2 col-sm-12 col-xs-12" style={etudiant}>
                                <InfoCircleFill></InfoCircleFill>&nbsp;
                                {student.prenom}
                            </div>
                            <div className="col-md-2 col-sm-12 col-xs-12" style={etudiant}>
                                <PeopleFill></PeopleFill>&nbsp;
                                {student.groupe}
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12" style={etudiant}>
                                <div className="" style={action}>

                                    <Router>
                                        <Link className="btn btn-link" to="/inscription" style={link} onClick={()=>handleLinkClick(`/admin/erreur/${student._id}`)}>
                                            <PencilFill></PencilFill>Modifier
                                        </Link>
                                    </Router>


                                    <Link className="btn btn-link" style={danger} to="/admin/etudiant/" onClick={()=>handleShow(student._id)} >
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
                        <Button variant="danger" onClick={()=>handleDeleteEtudiant(id)}>
                            <Trash2Fill></Trash2Fill> Confimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div >
    )
}

export default Etudiant