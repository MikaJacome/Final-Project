import "./travelFeed.css";
import TravelDetail from "../travelDetail/TravelDetail";
import CreateTravel from "../Travel/CreateTravel";
import {TravelDetails} from "../../testData";

export default function TravelFeed(){
    return(
        <div className="tFeed">

            <div className="tFeedWrap">

                <CreateTravel/>
                {TravelDetails.map(td => (
                    <TravelDetail key={td.id} travelDetail = {td}/>
                ))}
                
            
            
            
            </div>

        </div>
    )
}
