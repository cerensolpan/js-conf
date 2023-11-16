import { Link } from "react-router-dom";

function Card({ title, bgColor, id }) {
  const cardStyle = {
    backgroundColor: bgColor || "#FFFFFF",
  };
  return (
    <div
      className="max-w-xl w-full rounded overflow-hidden shadow-lg h-32"
      style={cardStyle}
    >
      <Link to={`/speakers/${id}`}>
        <div class="px-6 py-4 flex justify-center items-center h-full text-white">
          {title}
        </div>
      </Link>
    </div>
  );
}

export default Card;
