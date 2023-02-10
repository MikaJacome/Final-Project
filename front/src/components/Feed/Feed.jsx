import Journey from "../Journey/Journey"
import JourneyDetail from "../journeyDetail/JournyeDetail"
import CreateTravel from "../Travel/CreateTravel"
import TravelDetail from "../travelDetail/TravelDetail"
import "./feed.css"

export default function Feed(){
    return(
        <div className="feed">

            <div className="feedHead">

                <div>
                    <Journey/>
                </div>
                
                <div>
                <CreateTravel/>
                </div>
                
            </div>

            <div className="feedBody">

                <div>
                    <TravelDetail/>
                </div>
                
                <div>
                    <JourneyDetail/>
                </div>

            </div>

        </div>
    )
}
