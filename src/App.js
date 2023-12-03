import './App.css';
import Login from './pages/Login';
import Board from './composants/etudiant/Board';
import BoardEng from './composants/enseignant/Board-Eng';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inscription from './pages/Inscription';
import PlanningEts from './composants/etudiant/planning-ets';
import AbscencesEts from './composants/etudiant/AbscencesEts';
import Admin from './composants/admin/Board-admin';
import Etudiant from './composants/etudiant/Etudiant';
import NouveauEts from './composants/etudiant/NouveauEts';
import AbscencesEng from './composants/enseignant/Abscence_Eng';
import Enseignant from './composants/enseignant/Enseignant';
import NouveauEng from './composants/enseignant/NouveauEng';
import NouvelleAbs from './composants/etudiant/NouvelleAbs';
import ListeAbs from './composants/etudiant/ListeAbs';
import NouveauEmp from './composants/admin/NouveauEmp';
import ListeEmp from './composants/admin/ListeEmp';
import NouveauUti from './composants/utilisateur/NouveauUti';
import ListeUti from './composants/utilisateur/ListeUti';
import PlanningEng from './composants/enseignant/planning-Eng';
import Erreur from './pages/Erreur';

function App() {

  return (
    <>
      <Router replace={true}>
        {/* ... Autres composants */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/board/:id" component={Board} />
          <Route path="/board-eng/:id" component={BoardEng} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/planning-ets/:id" component={PlanningEts} />
          <Route path="/planning-eng/:id" component={PlanningEng} />
          <Route path="/abscence-ets/:id" component={AbscencesEts} />
          <Route path="/abscence-eng" component={AbscencesEng} />
          <Route path="/:id" >
            <Admin>
              <Route path="/admin/etudiant" component={Etudiant} />
              <Route path="/admin/nouveau-ets/:id" component={NouveauEts} />
              <Route path="/admin/enseignant" component={Enseignant} />
              <Route path="/admin/nouveau-eng" component={NouveauEng} />
              <Route path="/admin/nouvelle-abs" component={NouvelleAbs} />
              <Route path="/admin/liste-abs" component={ListeAbs} />
              <Route path="/admin/nouveau-emp" component={NouveauEmp} />
              <Route path="/admin/liste-emp" component={ListeEmp} />
              <Route path="/admin/nouveau-uti" component={NouveauUti} />
              <Route path="/admin/liste-uti" component={ListeUti} />
              <Route path="/admin/erreur" component={Erreur} />
            </Admin>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
