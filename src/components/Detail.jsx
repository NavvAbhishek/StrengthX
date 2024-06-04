import icon1 from "../assets/strongman.png";
import icon2 from "../assets/treadmill.png";
import icon3 from "../assets/weightlifting.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: icon1,
      name: bodyPart,
    },
    {
      icon: icon2,
      name: target,
    },
    {
      icon: icon3,
      name:  equipment,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-start mt-20 gap-20">
        <img src={gifUrl} alt={name} loading="lazy" />
        <div className="description text-center">
          <div className="text-5xl font-bold capitalize">{name}</div>
          <div className="mt-10">
            Exercises keep you strong. {name} bup is one of the best <br />{" "}
            exercises to target your {target}. It will help you improve your{" "}
            <br /> mood and gain energy.
          </div>
          <div className="mt-10 flex justify-center gap-10">
            {extraDetail.map((detail, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-brown w-20 flex justify-center p-4 rounded-[50%]">
                <img src={detail.icon} alt={detail.name} className="w-16" />
                </div>
                <div className="my-5 font-semibold">{detail.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
