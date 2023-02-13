import "./signUp.css";

export default function SignUp(){
    return(
        <div className="login">
            
            <div className="loginWrap">
                
                <div className="loginleft">

                    <div className="loginLogo">
                        <img src="../../../public/assets/media/main-logo.png" alt="logo" />
                    </div>
                    <span className="loginDesc">
                    The world in just one click!
                    </span>
                </div>

                <div className="loginRight">
                    
                    <div className="loginContainer">
                        <input type="text" placeholder="User name" className="loginInput" />
                        <input type="email" placeholder="Your email" className="loginInput"/>
                        <input type="password"placeholder="Password" className="loginInput" />
                        <input type="password"placeholder="Repeat your Password" className="loginInput" />
                        <button className="loginBttn">Sign Up!</button>
                        <button className="signInBttn">Sign In!</button>
                    </div>

                </div>

            </div>

        </div>
    );
}