/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="">
      <Link to={`/exercise/${exercise.id}`} className="mx-5 mt-8 flex flex-col justify-center items-center pb-6 ">
        <h3 className="text-dark-green text-lg font-semibold capitalize">{exercise.name}</h3>
        <img
          className="py-8 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />
        <div className="flex gap-5 ">
            <button className="text-white px-3 py-2  capitalize font-semibold bg-brown rounded-lg hover:scale-110 duration-300 ease-in-out">
                {exercise.bodyPart}
            </button>
            <button className="text-white px-3 py-2 capitalize font-semibold bg-light-green rounded-lg hover:scale-110 duration-300 ease-in-out">
                {exercise.target}
            </button>
        </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;
