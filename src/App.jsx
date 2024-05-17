import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExerciseDetails from "./components/ExerciseDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from './components/About'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
