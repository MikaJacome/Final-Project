import "./travelFeed.css";
import TravelDetail from "../travelDetail/TravelDetail";
import CreateTravel from "../Travel/CreateTravel";
import {TravelDetails} from "../../testData";

export default function TravelFeed(){
    return(
        <div className="tFeed">

        <div className="tFeedHead">

            <div>
                <CreateTravel/>
            </div>
            
            
            
        </div>

        <div className="tFeedBody">
            
            <div className="tDeatail">
                <TravelDetail/>
            </div>

        </div>

    </div>
    )
}
