import { Link, To, useLocation } from "react-router-dom";

interface ButtonProps {
  name: String;
  link: To;
  path: String;
}

const Button = ({ name, link, path }: ButtonProps) => {
  const location = useLocation();

  return (
    <div className="w-full h-16 flex justify-center items-center py-2">
      <Link to={link} className="w-48 h-12">
        <button
          className={`w-48 h-full outline outline-emerald-600 hover:outline-emerald-500 hover:bg-emerald-500 hover:text-zinc-200 duration-300 rounded-md ${
            location.pathname === `${path}`
              ? "bg-emerald-600 text-zinc-200"
              : "bg-none text-emerald-600"
          } `}
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
