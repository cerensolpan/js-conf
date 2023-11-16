import Card from "./components/Card";
import jsConf from "../assets/jsconf.png"

const halls = [{id:1,name: "Salon 1",bgColor:"#FFBC00"}, {id:2,name:"Salon 2", bgColor:"#6BB2EB"}];

export default function HostContent() {
  return (
    <div className="mt-5 text-3xl mx-auto max-w-6xl flex flex-col">
      <img src={jsConf} alt="JSKonf" />
      <div className="flex space-x-2 my-2 cursor-pointer">
        {halls.map((hall) => (
          <Card title={hall.name} bgColor={hall.bgColor} id={hall.id} />
        ))}
      </div>
    </div>
  );
}
