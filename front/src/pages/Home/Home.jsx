import Topbar from "../topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../feed/feed";

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
