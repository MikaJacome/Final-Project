import "./login.css"

export default function Login(){
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
                        <input type="email" placeholder="Your email" className="loginInput"/>
                        <input type="password"placeholder="Password" className="loginInput" />
                        <button className="loginBttn">Sign In</button>
                        <span className="forgot">Forgot Password</span>
                        <button className="signUpBttn">Sign Up!</button>
                    </div>

                </div>

            </div>

        </div>
    );
}