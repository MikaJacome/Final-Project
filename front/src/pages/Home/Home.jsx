import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import TravelFeed from "../../components/TravelFeed/TravelFeed";
import "./home.css"


export default function Home(){
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                <Leftbar/>
                <Feed/>
                <TravelFeed/>
            </div>
        </>
    );
}
