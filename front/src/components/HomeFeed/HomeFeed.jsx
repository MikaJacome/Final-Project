import "./homeFeed.css";
import TravelDetail from "../travelDetail/TravelDetail";
import { TravelDetails } from "../../testData";

export default function HomeFeed() {
  return (
    <div className="grid-container">
      {TravelDetails.map((td) => (
        <div className="grid-item">
          <TravelDetail key={td.id} travelDetail={td} />
        </div>
      ))}
    </div>
  );
}