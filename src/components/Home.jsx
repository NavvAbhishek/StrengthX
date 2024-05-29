import { useState } from "react";
import { Hero, SearchExercises, Exercises, Trainers } from "./Index";
useState;
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart)
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
       exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;