// CSSs
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Components
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ProjectListContainer from './components/Projects/ProjectListContainer/ProjectListContainer';
import Footer from './components/Footer/Footer';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import PageHeader from './components/PageHeader';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <PageHeader />
      <ProjectListContainer />
      <TechStack />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
