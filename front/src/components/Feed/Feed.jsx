import Journey from "../Journey/Journey"
import JourneyDetail from "../journeyDetail/JournyeDetail"
import "./feed.css"

export default function Feed(){
    return(
        <div className="feed">

            <div className="feedHead">

                <div>
                    <Journey/>
                </div>
                
                
                
            </div>

            <div className="feedBody">
                
                <div className="feedJourney">
                    <JourneyDetail/>
                </div>

            </div>

        </div>
    )
}
