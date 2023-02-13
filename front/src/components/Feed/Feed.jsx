import Journey from "../Journey/Journey"
import JourneyDetail from "../journeyDetail/JournyeDetail"
import "./feed.css"
import {JourneyDetails} from "../../testData"

export default function Feed(){
    return(
        <div className="feed">
            
            <div className="feedWrap">
                <Journey/>
                {JourneyDetails.map(dt=>(
                    <JourneyDetail key={dt.id} journeyDetail = {dt} />
                ))}
                
            </div>

        </div>
    )
}
