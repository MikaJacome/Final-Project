import "./leftbar.css"
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublicIcon from '@mui/icons-material/Public';
import {Users} from "../../testData"
import Follows from "../follows/Follows";

export default function Leftbar(){
    return(
        <div className="leftbar">

            <div className="leftWrap">

                <ul className="leftList">

                    <li className="leftItem">

                        <TipsAndUpdatesIcon className="leftIcon"/>
                        <span className="leftIconText">How It Works</span>
                    </li>
                    
                    <li className="leftItem">
                        <HandshakeIcon className="leftIcon"/>
                        <span className="leftIconText">People Helping People</span>
                    </li>
                    
                    <li className="leftItem">

                        <PublicIcon className="leftIcon"/>
                        <span className="leftIconText">Our Goal</span>
                    </li>

                </ul>

            </div>
            <div>
                <ul className="follows">
                    {Users.map((u) => (
                        <Follows key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}