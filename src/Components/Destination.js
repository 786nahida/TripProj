
import Mountain1 from "../Assets/5.jpg";
import Mountain2 from "../Assets/6.jpg";
import Mountain3 from "../Assets/10.jpg";
import Mountain4 from "../Assets/11.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
        
      <h1>popular destination</h1>
      <p><h3>Tripping and traveling gives us enjoyment and My Destinaation is to Travel around the World</h3></p>
      
       <destinationData
        className="first-des"
       
       heading="TRAVEL"
      text="Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. "
      img1={Mountain1}
      img2={Mountain2}/>
      <DestinationData
      className="first-des-reverse"
       heading="TRAVEL"
      text="Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. "
      
      img1={Mountain3}
      img2={Mountain4}
      />
       </div>
       
       
  );
};

export default Destination;