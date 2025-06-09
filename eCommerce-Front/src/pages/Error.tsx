import { LottieHandler } from "@components/feedback";
import useError from "@hooks/useError";
import { Link } from "react-router-dom";

const Error = () => {
  const {errorMessage} = useError();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <LottieHandler type="error" message={errorMessage}/>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-primary group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:bg-secondary group:translate-y-0 group:translate-x-0"></span>
          <Link to="/" replace={true}>
            <span className="relative block px-8 py-3 bg-black border border-white">
              Home Page
            </span>
          </Link>
        </a>
      </button>
    </main>
  );
};

export default Error;
