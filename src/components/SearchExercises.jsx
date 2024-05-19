import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import {BodyParts} from "./Index";

const ExerciseSearch = () => {
  const [search, setSearch] = useState();
  const [exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercise(searchedExercises);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 bg-cream">
      <div className="text-center">
        <h2 className="text-3xl text-dark-green font-bold mb-6">
          Must-Know Exercises for Fitness Enthusiasts
        </h2>
        <div className="flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            className="border border-tan p-2 rounded-l-lg w-72"
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white py-2 px-5 rounded-r-lg"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <BodyParts data={bodyParts}/>
    </div>
  );
};

export default ExerciseSearch;
