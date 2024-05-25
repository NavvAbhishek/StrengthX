import { useState } from "react";
import { Hero, SearchExercises, Exercises, Trainers } from "./Index";
useState;
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <Hero />
      <Trainers />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
};

export default Home;