import "./topbar.css";
import {Chat, Search, Person, Notifications} from "@mui/icons-material";

export default  function Topbar() {
    return(
        <div className="topbarContainer">

            <div className="topbarLeft">

                <span className="logo"><img src="assets\media\main-logo.png" alt="" height="70px" /></span>

            </div>

            <div className="topbarCenter">

                <div className="searchBar">

                    <Search className="searchIcon"/>
                    <input placeholder="Find your traveler!" className="searchInput" />

                </div>

            </div>

            <div className="topbarRight">

                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Inspiration</span>
                </div>

                <div className="topbarIcons">

                    <div className="topbarIconItem">
                        <Person/>
                    </div>

                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">5</span>
                    </div>
                    
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>

                </div>

                <img src="/assets/media/boy-1.png" alt="" className="topbarImg" />

            </div>            
            
        </div>
    );
}