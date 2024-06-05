import { Triangle } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex justify-center items-center w-full h-full">
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
