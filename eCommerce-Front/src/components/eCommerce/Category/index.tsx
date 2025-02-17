import { TCategory } from "@types";
import { Link } from "react-router-dom";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className="max-w-sm bg-slate-700 drop-shadow-xl rounded-lg text-center">
      <img className="rounded-t-lg w-full" src={img} alt="category" />
      <div className="p-5">
        <h5 className="mb-2 text-md capitalize merriweather-light poppins-bold tracking-tight text-gray-400">
          {title}
        </h5>
        <p className="font-normal uppercase text-md merriweather-black tracking-wider mb-7">
          {prefix}
        </p>
        <Link to={`products/${prefix}`} className="inline-flex items-center">
          <p className="bg-secondary text-white merriweather-bold text-md w-[150px] py-2 rounded-full tracking-widest transition-all duration-300 before:ease relative overflow-hidden border border-secondary shadow-2xl before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-primary before:duration-300 hover:text-white hover:shadow-primary hover:before:h-64 hover:before:-translate-y-32">
            <span className="relative z-10">Show Products</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
