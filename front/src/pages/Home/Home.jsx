import Topbar from "../../components/Topbar/Topbar";
import HomeFeed from "../../components/HomeFeed/HomeFeed";
import "./home.css"

export default function Home (){
    return(
        <>
        
        <Topbar/>
        <div>
            <HomeFeed/>
        </div>

        </>
    )
}