import heroImg from "../assets/hero_img.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-cream p-8 md:p-16 gap-5">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green mb-4 animate-fade-in-down">
          Transform Your Body at StrengthX
        </h1>
        <p className="text-lg md:text-xl text-brown mb-6 animate-fade-in-up">
          Welcome to StrengthX, where transformation happens! Our gym offers
          cutting-edge equipment, personalized training programs, and a
          motivating environment to push you beyond your limits.
        </p>
        <button
          type="button"
          className="gradient-button"
        >
          Explore
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={heroImg} alt="hero_image" className="w-full h-auto rounded-lg shadow-lg animate-fade-in" />
      </div>
    </div>
  );
};

export default Hero;
