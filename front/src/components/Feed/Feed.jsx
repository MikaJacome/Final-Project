import Journey from "../Journey/Journey"
import CreateTravel from "../Travel/CreateTravel"
import "./feed.css"

export default function Feed(){
    return(
        <div className="feed">

            <div className="feedWrap">
                <Journey/>
                <CreateTravel/>
            </div>

        </div>
    )
}
