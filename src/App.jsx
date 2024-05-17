import { Routes, Route } from "react-router-dom";
import {Home,Footer,About,ExerciseDetails, Navbar} from "./components/Index";

const App = () => {
  return (
    <>
     <Navbar/>
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
