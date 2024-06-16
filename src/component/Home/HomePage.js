import VideoHomePage from "../../assets/video_homepage.mp4"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated )
    const navigate = useNavigate();

    return(
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                    src={VideoHomePage} 
                    type="video/mp4"/>    
            </video>

            <div className="homepage-content">
                <div className="title1">
                    Embeds smoothly. 
                    Reveals more.
                </div>
                <div className="title2">
                    Collect more and better data. Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to reveal deeper insights.
                </div>
                <div className="title3">
                    { isAuthenticated === false?
                        <button onClick={() => navigate('/login')}>Get's started. It's Free</button>
                        :
                        <button onClick={() => navigate('/users')}>Doing Quiz Now</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default HomePage;