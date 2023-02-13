import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import TravelFeed from "../../components/TravelFeed/TravelFeed";
import "./inspiration.css"


export default function Inspiration(){
    return(
        <>
            <Topbar/>
            <div className="inspirationContainer">
                <Leftbar/>
                <Feed/>
                <TravelFeed/>
            </div>
        </>
    );
}
