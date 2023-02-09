import "./journey.css";
import {CameraRollRounded, AddLocationAlt}from "@mui/icons-material";

export default function Journey(){
    return(
        <div className="journey">

            <div className="journeyWrap">

                <div className="journeyTop">
                    <img src="/assets/media/boy-1.png" alt="" className="journeyPP" />
                    <span className="profileName">Jude Fletch</span>
                </div>
                
                <br />

                <div>
                    
                    <input 
                        placeholder="whats new?"
                        className="journeyDesc"
                    />
                
                </div>

                <br />

                <div className="journeybuttons">

                    <div className="options">

                        <div className="option">
                            <CameraRollRounded className="journeyIcon"/>
                            <span className="optiondesc">Media</span>
                        </div>

                        <div className="option">
                            <AddLocationAlt className="journeyIcon"/>
                            <span className="optiondesc">Location</span>
                        </div>

                    </div>
                    <button className="postButton">Post</button>
                </div>

            </div>


        </div>
    );
}



















