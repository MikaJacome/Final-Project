import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Journey from "../../components/Journey/Journey";
import "./home.css"
import createTravel from "../../components/Travel/createTravel";

export default function Home(){
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                
                <Leftbar/>
                
                <Feed/>
                <div>
                <Journey/>

                <createTravel/>


                </div>

                

            </div>
        </>
    );
}
