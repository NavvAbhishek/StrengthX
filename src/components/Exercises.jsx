/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ExerciseCard } from './Index';

const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  // Get current exercises
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <div>
      <div id="exercises" className="flex flex-wrap justify-around items-center">
        {currentExercises.map((exercise, index) => (
          <div key={index}>
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? 'bg-dark-green text-white' : 'bg-white text-black'} rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
