import "./travelDetail.css"
import { MoreVertTwoTone,PanTool, QuestionAnswer } from "@mui/icons-material";
import {Users} from "../../testData";
import { useState } from "react";

export default function TravelDetail ({travelDetail}) {

    const [hey, setHey] = useState(travelDetail.heys);
  const [isHeyed, setIsHeyed] = useState(false);

  const heysHandler = () => {
    setHey(isHeyed ? hey - 1 : hey + 1);
    setIsHeyed(!isHeyed);
  };

    return (
        <div className="travelDetail">

            <div className="travelWrap">

                <div className="tdetailTop">

                    <div className="tdetailData">
                        <img 
                            src={Users.filter((u) => u.id === travelDetail?.userId)[0].profilePicture}  
                            alt="" className="travelPP" 
                        />
                        <span className="profileName">
                            {Users.filter((u) => u.id === travelDetail?.userId)[0].username}
                        </span>
                    </div>
                    
                    <div className="tdetailMore">
                        <MoreVertTwoTone/>
                    </div>

                </div>

                <div className="tdetailBody">

                    <div className="tdetailDeparture">
                        <span className="departureField">
                        <label>Departure: </label>
                        <span>{travelDetail.from}</span>
                        </span>

                    </div>

                    <div className="tdetailArrival">

                        <span className="arrivalField">
                        <label>Arrival: </label>
                        <span>{travelDetail.dest}</span>
                        </span>

                    </div>

                    <div className="return">

                        <span className="returnField">
                        <label>Return: </label>
                        <span>{travelDetail.return}</span>
                        </span>

                    </div>

                    <div>
                            
                        <label>Note:</label>
                        <span>{travelDetail.desc}</span>

                    </div>


                    <div >
                        <span className="priceField">
                        <label>Price: </label>
                        <span>{travelDetail.price} €</span>
                        </span>
                    </div>

                </div>


                <div className="buttons">

                    <div className="option">
                        <PanTool className="hey" onClick={heysHandler} />
                        <span className="heysCount">{hey} People said Hey!</span>
                    </div>

                    <div className="option">
                        <QuestionAnswer/>
                        <span className="chat"> Chat</span>
                    </div>

                </div>
                
            </div>
        </div>
    );
}