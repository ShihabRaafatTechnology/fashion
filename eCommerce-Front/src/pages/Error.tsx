import { Link } from "react-router-dom";
import useError from "@hooks/useError";

const Error = () => {
  const { errorCode, errorMessage } = useError();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        {errorCode}
      </h1>
      <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
        {errorMessage}
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-primary group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <Link to="/" replace={true}>
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </Link>
        </a>
      </button>
    </main>
  );
};

export default Error;
