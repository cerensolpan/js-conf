import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Card({ time, title, img }) {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../../assets/salon-${id}/${img}.png`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [id, img]);
  
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-4">
      <div className="h-48 w-full border border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-100 shadow-lg bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <p className="text-sm text-gray-600 flex items-center">{time}</p>
          <div className="text-gray-900 font-semibold text-lg mb-2">{title}</div>
        </div>
        <div className="flex items-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={`Avatar of ${title}`}
              className="w-10 h-10 rounded-full mr-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
