import Topbar from "../Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../Feed/feed";

export default function Home(){
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                
                <Leftbar/>
                
                <Feed/>

            </div>
        </>
    );
}
