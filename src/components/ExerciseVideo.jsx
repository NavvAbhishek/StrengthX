const ExerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <div className="mt-10 w-screen sm:w-[90%] mx-auto">
      <h1 className="text-3xl  capitalize text-dark-green">
        Watch <span className="font-semibold">{name}</span> videos
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {Array.isArray(exerciseVideos) &&
          exerciseVideos.slice(0, 5).map((item, index) => (
            <a
              key={index}
              className="mt-8"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="w-96 rounded-lg"
              />
              <div className="flex flex-col mt-4 text-brown">
                <span className="font-semibold"> {item.video.title}</span>
                <span>{item.video.channelName}</span>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default ExerciseVideo;
