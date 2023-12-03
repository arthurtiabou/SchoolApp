import { React, useState, useEffect, } from "react";
import { Link, BrowserRouter as Router,useParams } from 'react-router-dom';
import {
    Calendar,
    Facebook,
    Instagram,
    Google,
    Github
} from "react-bootstrap-icons";
import {   fetchPlannings } from "../../services/planning.services";

import { fetchEnseignant } from "../../services/enseignant.services";
//***************************************************************************************** */
const ico = {
    height: '80px',
    color: 'black'
}

const content = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
}

const planning = {
    borderRadius: '6px',
    backgroundColor: 'rgba(230, 237, 243,0.9)',
    padding: '15px'

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

const title = {
    margin: '30px 0 0 30px',
    display: 'inline',
}



const salle1 = {
    borderRadius: '1.5px',
    backgroundColor: 'rgba(185, 209, 231, 0.9)',
    height: '11.5vh',
    margin: '3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const salle2 = {
    borderRadius: '1.5px',
    backgroundColor: 'rgba(159, 173, 186, 0.9)',
    height: '11.5vh',
    margin: '3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

}


//********************************************************************************************** */
const PlanningEng = () => {

    const [date, setDate] = useState("")

    const [enseignant, setEnseignant] = useState({});
    const { id } = useParams();
    useEffect(() => {
        // Récupère l'id de l'utilisateur

        const getEnseignant = async (id) => {
            const user = await fetchEnseignant(id);
            setEnseignant(user);
        };

        getEnseignant(id);
    }, [id]);

    console.log(id)

    // Attend que la variable `student` soit définie


    const [plannings, setPlannings] = useState([]);

    useEffect(() => {
        const getPlannings = async () => {
            const users = await fetchPlannings();
            setPlannings(users);
            console.log(users)
        };

        getPlannings();
    }, [])
    console.log(enseignant.nom)

    const emp = plannings.filter((planning) => planning.enseignant === enseignant.nom);

    const e = emp.filter((planning) => planning.semaine === date);


    const lundis = (e.filter((planning) => planning.jour === "Lundi"));

    if (lundis[0] === undefined) {
        lundis[0] = { groupe: "", salle: "", debut: "" }
    }
    if (lundis[1] === undefined) {
        lundis[1] = { groupe: "", salle: "", debut: "" }
    }
    if (lundis[2] === undefined) {
        lundis[2] = { groupe: "", salle: "", debut: "" }
    }
    if (lundis[3] === undefined) {
        lundis[3] = { groupe: "", salle: "", debut: "" }
    }

    const mardis = (e.filter((planning) => planning.jour === "Mardi"));

    if (mardis[0] === undefined) {
        mardis[0] = { groupe: "", salle: "", debut: "" }
    }
    if (mardis[1] === undefined) {
        mardis[1] = { groupe: "", salle: "", debut: "" }
    }
    if (mardis[2] === undefined) {
        mardis[2] = { groupe: "", salle: "", debut: "" }
    }
    if (mardis[3] === undefined) {
        mardis[3] = { groupe: "", salle: "", debut: "" }
    }

    const mercredis = (e.filter((planning) => planning.jour === "Mercredi"));

    if (mercredis[0] === undefined) {
        mercredis[0] = { groupe: "", salle: "", debut: "" }
    }
    if (mercredis[1] === undefined) {
        mercredis[1] = { groupe: "", salle: "", debut: "" }
    }
    if (mercredis[2] === undefined) {
        mercredis[2] = { groupe: "", salle: "", debut: "" }
    }
    if (mercredis[3] === undefined) {
        mercredis[3] = { groupe: "", salle: "", debut: "" }
    }

    const jeudis = (e.filter((planning) => planning.jour === "Jeudi"));

    if (jeudis[0] === undefined) {
        jeudis[0] = { groupe: "", salle: "", debut: "" }
    }
    if (jeudis[1] === undefined) {
        jeudis[1] = { groupe: "", salle: "", debut: "" }
    }
    if (jeudis[2] === undefined) {
        jeudis[2] = { groupe: "", salle: "", debut: "" }
    }
    if (jeudis[3] === undefined) {
        jeudis[3] = { groupe: "", salle: "", debut: "" }
    }

    const vendredis = (e.filter((planning) => planning.jour === "Vendredi"));

    if (vendredis[0] === undefined) {
        vendredis[0] = { groupe: "", salle: "", debut: "" }
    }
    if (vendredis[1] === undefined) {
        vendredis[1] = { groupe: "", salle: "", debut: "" }
    }
    if (vendredis[2] === undefined) {
        vendredis[2] = { groupe: "", salle: "", debut: "" }
    }
    if (vendredis[3] === undefined) {
        vendredis[3] = { groupe: "", salle: "", debut: "" }
    }
//***************************************************************************************************************** */
    return (
        <div className="content row" style={content}>
            <div className="row">
                <div className="col-5"><h2 style={title}><Calendar style={ico}></Calendar>  Planning de l'Enseignant </h2></div>
                <div className="col-2"></div>
                <div className="col-4">
                    <input style={title} className="form-control" value={date} type="date" placeholder="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                
            </div>

            <div style={planning} className="col-11">
                <div className="row">
                    <h2>Semaine du {date}</h2>
                    <div className="col-md-1 col-sm-12 col-xs-12" >
                        <h5>Lundi</h5>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {lundis[0].groupe}</div>
                        <div>{lundis[0].debut}</div>
                        <div>{lundis[0].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {lundis[1].groupe}</div>
                        <div>{lundis[1].debut}</div>
                        <div>{lundis[1].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> Pause</div>
                        <div>12h00</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {lundis[2].groupe}</div>
                        <div>{lundis[2].debut}</div>
                        <div>{lundis[2].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {lundis[3].groupe}</div>
                        <div>{lundis[3].debut}</div>
                        <div>{lundis[3].salle}</div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-1 col-sm-12 col-xs-12" >
                        <h5>Mardi</h5>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {mardis[0].groupe}</div>
                        <div>{mardis[0].debut}</div>
                        <div>{mardis[0].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {mardis[1].groupe}</div>
                        <div>{mardis[1].debut}</div>
                        <div>{mardis[1].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> pause</div>
                        <div>12H00</div>

                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {mardis[2].groupe}</div>
                        <div>{mardis[2].debut}</div>
                        <div>{mardis[2].salle}</div>
                    </div>

                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {mardis[3].groupe}</div>
                        <div>{mardis[3].debut}</div>
                        <div>{mardis[3].salle}</div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-1 col-sm-12 col-xs-12" >
                        <h5>Mercredi</h5>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {mercredis[0].groupe}</div>
                        <div>{mercredis[0].debut}</div>
                        <div>{mercredis[0].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {mercredis[1].groupe}</div>
                        <div>{mercredis[1].debut}</div>
                        <div>{mercredis[1].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> pause</div>
                        <div>12H00</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {mercredis[2].groupe}</div>
                        <div>{mercredis[2].debut}</div>
                        <div>{mercredis[2].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {mercredis[3].groupe}</div>
                        <div>{mercredis[3].debut}</div>
                        <div>{mercredis[3].salle}</div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-1 col-sm-12 col-xs-12" >
                        <h5>Jeudi</h5>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {jeudis[0].groupe}</div>
                        <div>{jeudis[0].debut}</div>
                        <div>{jeudis[0].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {jeudis[1].groupe}</div>
                        <div>{jeudis[1].debut}</div>
                        <div>{jeudis[1].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> pause</div>
                        <div>12H00</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {jeudis[2].groupe}</div>
                        <div>{jeudis[2].debut}</div>
                        <div>{jeudis[2].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {jeudis[3].groupe}</div>
                        <div>{jeudis[3].debut}</div>
                        <div>{jeudis[3].salle}</div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-1 col-sm-12 col-xs-12" >
                        <h5>Vendredi</h5>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {vendredis[0].groupe}</div>
                        <div>{vendredis[0].debut}</div>
                        <div>{vendredis[0].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {vendredis[1].groupe}</div>
                        <div>{vendredis[1].debut}</div>
                        <div>{vendredis[1].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> pause</div>
                        <div>12H00</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle1}>
                        <div> {vendredis[2].groupe}</div>
                        <div>{vendredis[2].debut}</div>
                        <div>{vendredis[2].salle}</div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={salle2}>
                        <div> {vendredis[3].groupe}</div>
                        <div>{vendredis[3].debut}</div>
                        <div>{vendredis[3].salle}</div>
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

export default PlanningEng