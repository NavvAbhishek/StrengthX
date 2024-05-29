import { Routes, Route } from "react-router-dom";
import {Home,Footer,ExerciseDetails, Navbar} from "./components/Index";
import About from "./pages/About";
import BrowseExercises from './pages/BrowseExercises'

const App = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/browse" element={<BrowseExercises />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
