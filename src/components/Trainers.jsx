
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import trainer1 from "../assets/trainers/trainer1.jpg";
import trainer2 from "../assets/trainers/trainer2.jpg";
import trainer3 from "../assets/trainers/trainer3.jpg";
import trainer4 from "../assets/trainers/trainer4.jpg";

const trainersData = [
  {
    name: "Alex Carter",
    img: trainer1,
    qualifications: [
      "Certified Personal Trainer (ACE)",
      "Bachelor’s Degree in Sports Science",
      "CPR and AED Certified",
    ],
    specialties: [
      "HIIT (High-Intensity Interval Training)",
      "Functional Training",
      "Athletic Performance",
    ],
    bio: "Alex has 8 years of experience and excels in high-intensity interval and functional training. His energetic coaching style motivates clients to achieve rapid and sustainable fitness results.",
  },
  {
    name: "Sarah Mitchell",
    img: trainer2,
    qualifications: [
      "Certified Yoga Instructor (RYT 500)",
      "Certified Pilates Instructor",
      "Certified Group Fitness Instructor (AFAA)",
    ],
    specialties: [
      "Yoga and Pilates",
      "Core Strengthening",
      "Flexibility and Mobility",
    ],
    bio: "Sarah focuses on core strength and flexibility through yoga and pilates. Her calming approach makes her classes accessible to all fitness levels, promoting physical and mental well-being",
  },
  {
    name: "Michael Ramirez",
    img: trainer3,
    qualifications: [
      "Conditioning Specialist (NSCA)",
      "Master’s Degree in Exercise Physiology",
      "Certified Nutrition Coach (NASM)",
    ],
    specialties: ["Strength Training", "Muscle Building", "Nutrition Planning"],
    bio: "Michael combines strength training with personalized nutrition plans. With a master's in exercise physiology, he helps clients build muscle and achieve their physique goals through scientifically-backed methods.",
  },
  {
    name: "Jessica Lee",
    img: trainer4,
    qualifications: [
      "Certified Personal Trainer (NASM)",
      "Bachelor’s Degree in Exercise Science",
      "CPR and First Aid Certified",
    ],
    specialties: [
      "Weight Loss",
      "Strength Training",
      "Functional Fitness",
    ],
    bio: "Jessica has over 10 years of experience. She excels in creating personalized workout plans focused on weight loss, strength training, and functional fitness. Her motivating style helps clients achieve their fitness goals effectively.",
  }
];

const Trainers = () => {
  return (
    <div className="bg-cream">
        <h1 className="text-center py-8 text-4xl font-bold text-dark-green">Our Trainers</h1>
        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-10 lg:gap-20 ">
      {trainersData.map((trainer, index) => (
        <div
          key={index}
          className="max-w-64 bg-light-green border border-tan rounded-lg shadow"
        >
          <a href="#">
            <img
              className=" w-64 h-64 object-cover rounded-t-lg"
              src={trainer.img}
              alt={trainer.name}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {trainer.name}
              </h5>
            </a>
            {/* <p className="mb-3 text-sm text-white">{trainer.bio}</p> */}
            <div className="mb-3">
              <h6 className="text-md font-semibold text-white">
                Qualifications:
              </h6>
              <ul className="list-disc list-inside text-white text-sm">
                {trainer.qualifications.map((qualification, idx) => (
                  <li key={idx}>{qualification}</li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <h6 className="text-md font-semibold text-white">Specialties:</h6>
              <ul className="list-disc list-inside text-white text-sm">
                {trainer.specialties.map((specialty, idx) => (
                  <li key={idx}>{specialty}</li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-brown rounded-lg hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-light-green"
            >
              Read more
              <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Trainers;
