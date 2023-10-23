import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import About from './components/About';
import TodoState from './context/todo/TodoState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlertComp from './components/AlertComp';

function App() {

  return (
    <>
      <TodoState>
        <Router>
          <Header />
          <AlertComp />
          <Routes>
            <Route exact path="/" element={<Todos />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </TodoState>
    </>
  );
}

export default App;
