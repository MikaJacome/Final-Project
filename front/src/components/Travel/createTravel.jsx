import "./travel.css";

export default function CreateTravel() {
    return(
        <div className="travel">

            <div className="travelWrap">

                <div className="travelTop">
                    <img src="/assets/media/boy-1.png" alt="" className="travelPP" />
                    <span className="profileName">Jude Fletch</span>
                </div>

                <br />

                <div className="travelData">

                    <div className="departure">

                        <span className="departureField">
                        <label>Departure:</label>
                        <input type="text" placeholder="Enter departure location" />
                        </span>

                    </div>

                    <div className="arrival">

                        <span className="arrivalField">
                        <label>Arrival:</label>
                        <input type="text" placeholder="Enter arrival location" />
                        </span>

                    </div>

                    <div className="return">
                        <span className="returnField">
                        <label>Return:</label>
                        <input type="text" placeholder="Enter return date" />
                        </span>

                    </div>

                    <div >
                        <span className="priceField">
                        <label>Price:</label>
                        <input  type="range" min={10} max={20} step={2}></input>
                        </span>
                    </div>

                </div>

                <div className="button">
                    <button className="postButton">Post</button>
                </div>
            </div>

        </div>
    );

}
