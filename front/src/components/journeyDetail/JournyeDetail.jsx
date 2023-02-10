import { MoreVertTwoTone, SentimentVerySatisfied} from "@mui/icons-material";
import "./journeyDetail.css";

export default function JourneyDetail(){
    return(
        <div className="journeyDetail">

            <div className="jdetailWrap">

                <div className="jdetailTop">

                    <div className="jdetailData">
                        <img src="/assets/media/boy-1.png" alt="" className="jdetailPP" />
                        <span className="profileName">Jude Fletch</span>
                    </div>
                    
                    <div className="jdetailMore">
                        <MoreVertTwoTone/>
                    </div>
                </div>

                <div className="jdetailiBody">

                    <span className="jdetailText">Amazing places in Athens</span>
                    <img src="/assets/media/monistraki-Athens.jpg" alt="" className="jdetailImg"/>

                </div>

                <div className="jdetailButtons">

                    <div className="jdetailLikes">
                        <SentimentVerySatisfied className="like"/>
                        <span className="likesCount">90 People Liked It!</span>
                    </div>

                    <div className="jdetailComments">
                        <span className="commentsCount">20 Comments</span>
                    </div>

                </div>                

            </div>

        </div>
    )
}