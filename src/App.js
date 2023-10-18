import './App.css';
// import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router,Routes,
  Route } from 'react-router-dom';
import Menus from './components/Menus';
import Header from './components/Header';

function App() {
 const btnHandle = () =>{
  toast.success("Done",{position:"top-center"})
 };

  return (
    <div className="App">
      <Router>
      <ToastContainer/>
      
      <Container>
      <Header/>
        <Row>
          <Col md={4}> 
                   <Menus/>
          </Col>
          <Col md={8}>
             <Routes>
             <Route path="/" Component={Home} exact/>
              <Route path="/add-course" Component={AddCourse} exact/>
              <Route path="/view-course" Component={AllCourse} exact/>
             </Routes>
          </Col>
        </Row>
      </Container>

      </Router>
    </div>
  );
}

export default App;
