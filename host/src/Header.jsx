import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to={`/`}>
      <div
        style={{ backgroundColor: "#FFBC00" }}
        className="w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Home
      </div>
    </Link>
  );
}
