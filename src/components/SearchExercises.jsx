import { useState } from "react";
import {  FaSearch } from "react-icons/fa";

const ExerciseSearch = () => {
  const [search, setSearch] = useState()


  const handleSearch = async () => {
  }

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
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            className="border border-tan p-2 rounded-l-lg w-72"
          />
          <button 
          onClick={handleSearch}
          className="bg-red-500 text-white py-2 px-5 rounded-r-lg">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSearch;
