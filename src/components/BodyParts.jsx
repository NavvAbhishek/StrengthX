/* eslint-disable react/prop-types */

import { BodyPartItem, ExerciseCard } from "./Index";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const BodyParts = ({ data, bodyPart, setBodyPart, isBodyPartItem }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <div onClick={() => scrollPrev()}>
        <FaArrowLeft className="w-6 h-6 text-dark-green cursor-pointer" />
      </div>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <div onClick={() => scrollNext()}>
        <FaArrowRight className="w-6 h-6 text-dark-green cursor-pointer" />
      </div>
    );
  };

  return (
    <div className="w-[90%] mx-auto ">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item, index) => (
          <div key={index} className="mx-10">
            {isBodyPartItem ? (
              <BodyPartItem
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default BodyParts;
