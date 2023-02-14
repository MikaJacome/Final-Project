import "./profile.css"
import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import TravelFeed from "../../components/TravelFeed/TravelFeed";

export default function Profile(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <Topbar/>

            <div className="profile">
                <Leftbar/>
                <div className="main">
                    
                    <div className="pTop">
                        <div className="user">
                            <img src= {`${PF}media/boy-1.png`} alt="" className="pPPhoto"/>
                        </div>
                        <div className="pName">
                            <p className="pUName">Jude Fletch</p>
                        </div>
                    </div>
                    <div className="pBody">
                        <Feed/>
                        <TravelFeed/>
                    </div>
                </div>
            </div>    
        </>
    );
}