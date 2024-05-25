/* eslint-disable react/prop-types */

import img from "../assets/chest.jpeg";

const BodyPartItem = ({ item }) => {
  return (
    //<div className="relative flex items-center overflow-hidden w-full bg-gray-100 p-5">
    <div className="flex flex-col items-center justify-center gap-5 cursor-pointer w-[350px] h-[350px]">
      <div className="text-lg capitalize font-semibold text-dark-green">{item}</div>
      <img src={img} alt="image" className="w-[300px]" />
    </div>
  );
};

export default BodyPartItem;
