// CSSs
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Components
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectListContainer from './components/Projects/ProjectListContainer/ProjectListContainer';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProjectListContainer greeting={"Welcome!"} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
