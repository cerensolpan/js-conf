import { useParams,useLocation } from "react-router-dom";
import { useEffect } from "react";
const jsonData = require("../server/data");
import Card from "./components/Card";

export default function SpeakerListContent() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const speakers = jsonData.data[`salon-${id}`] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <div className="text-sm w-full text-right text-red-500">speakerList project</div>
    <div className="grid grid-cols-2 border border-red-500">
      {speakers.map((speaker, index) => (
        <div key={index}>
          <Card title={speaker.title} time={speaker.time} img={speaker.img}/>
        </div>
      ))}
    </div>
    </>
  );
}
