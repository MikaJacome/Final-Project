import { MoreVertTwoTone, SentimentVerySatisfied} from "@mui/icons-material";
import "./journeyDetail.css";
import { Users } from "../../testData";

export default function JourneyDetail({journeyDetail}){

    return(
        <div className="journeyDetail">

            <div className="jdetailWrap">

                <div className="jdetailTop">

                    <div className="jdetailData">
                        <img className="jdetailPP" 
                            src={Users.filter((u) => u.id === journeyDetail?.userId)[0].profilePicture}
                            alt=""    
                        />
                        <span className="profileName">
                            {Users.filter((u) => u.id === journeyDetail?.userId)[0].username}
                        </span>
                    </div>
                    
                    <div className="jdetailMore">
                        <MoreVertTwoTone/>
                    </div>
                </div>

                <div className="jdetailiBody">

                    <span className="jdetailText">{journeyDetail?.desc}</span>
                    <img src={journeyDetail.photo} alt="" className="jdetailImg"/>

                </div>

                <div className="jdetailButtons">

                    <div className="jdetailLikes">
                        <SentimentVerySatisfied className="like"/>
                        <span className="likesCount">{journeyDetail.likes} People Liked It!</span>
                    </div>

                    <div className="jdetailComments">
                        <span className="commentsCount">{journeyDetail.comments} Comments</span>
                    </div>

                </div>                

            </div>

        </div>
    )
}