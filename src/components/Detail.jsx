import img from "../assets/cardio.jpeg";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: img,
      name: bodyPart,
    },
    {
      icon: img,
      name: target,
    },
    {
      icon: img,
      name:  equipment,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-start mt-20 gap-20">
        <img src={gifUrl} alt={name} loading="lazy" />
        <div className="description">
          <div className="text-5xl font-bold capitalize">{name}</div>
          <div className="mt-10">
            Exercises keep you strong. {name} bup is one of the best <br />{" "}
            exercises to target your {target}. It will help you improve your{" "}
            <br /> mood and gain energy.
          </div>
          <div className="mt-10">
            {extraDetail.map((detail, index) => (
              <div key={index}>
                <img src={detail.icon} alt={detail.name} className="w-20" />
                <div className="mb-5">{detail.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
