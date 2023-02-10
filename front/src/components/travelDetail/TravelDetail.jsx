import "./travelDetail.css"
import { MoreVertTwoTone,PanTool, QuestionAnswer } from "@mui/icons-material";

export default function TravelDetail () {
    return (
        <div className="travelDetail">

            <div className="travelWrap">

                <div className="tdetailTop">

                    <div className="tdetailData">
                        <img src="/assets/media/boy-1.png" alt="" className="travelPP" />
                        <span className="profileName">Jude Fletch</span>
                    </div>
                    
                    <div className="tdetailMore">
                        <MoreVertTwoTone/>
                    </div>

                </div>

                <div className="tdetailBody">

                    <div className="tdetailDeparture">
                        <span className="departureField">
                        <label>Departure: </label>
                        <span>Madrid</span>
                        </span>

                    </div>

                    <div className="tdetailArrival">

                        <span className="arrivalField">
                        <label>Arrival: </label>
                        <span>Athens</span>
                        </span>

                    </div>

                    <div className="return">

                        <span className="returnField">
                        <label>Return: 23/02/2023</label>
                        <span></span>
                        </span>

                    </div>

                    <div>
                            
                        <label>Notes:</label>
                        <span>Only small things please!</span>

                    </div>


                    <div >
                        <span className="priceField">
                        <label>Price: </label>
                        <span>5 €</span>
                        </span>
                    </div>

                </div>


                <div className="buttons">

                    <div className="option">
                        <PanTool className="hey"/>
                        <span className="heysCount">5 People said Hey!</span>
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