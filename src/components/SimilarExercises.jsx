import PropTypes from 'prop-types';
import BodyParts from './BodyParts';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="w-screen sm:w-[90%] mx-auto mt-10">
      <div>
        <p className="text-3xl capitalize font-semibold mb-4">
          Similar <span className="text-light-green">Target Muscle</span> exercises
        </p>
        <div>
          {targetMuscleExercises.length !== 0 ? (
            <BodyParts data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </div>
        <div className="text-3xl capitalize font-semibold mt-8 mb-4">
          Similar <span className="text-light-green">Equipment</span> exercises
        </div>
        <div>
          {equipmentExercises.length !== 0 ? (
            <BodyParts data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  equipmentExercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SimilarExercises;

