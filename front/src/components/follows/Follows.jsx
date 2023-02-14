import "./follows.css"

export default function Follows ({user}) {
    return(
        <li className="leftFavTravellers">
            <img src={user.profilePicture} alt="" className="leftFavPhoto" />
            <span className="leftFav">{user.username}</span>
        </li>
    );
}