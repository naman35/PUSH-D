import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/dashboard";
import Info from "./Components/Info";
import DoctorDashboard from "./Components/doctorDashboard";
import PatientTrack from "./Components/patientTrack";
import Analytics from "./Components/analytics";
import Quiz from "./Components/quiz/quiz";
import Mainchat from "./Components/Chats/mainchat";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/editProfile' element={<Info/>} />
            <Route path='/doctorDashboard' element={<DoctorDashboard/>} />
            <Route path='/patientTracker' element={<PatientTrack/>} />
            <Route path='/analytics' element={<Analytics/>} />
            <Route path='/quiz' element={<Quiz/>} />
            <Route path='/mainchat' element={<Mainchat/>} />

            <Route path='*' element={<p>ERROR</p>} />

        </Routes>
        </BrowserRouter>
       


    </div>
  );
}

export default App;
