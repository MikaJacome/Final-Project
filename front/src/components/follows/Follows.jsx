import "./follows.css"

export default function Follows ({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <li className="leftFavTravellers">
            <img src={PF+user.profilePicture} alt="" className="leftFavPhoto" />
            <span className="leftFav">{user.username}</span>
        </li>
    );
}