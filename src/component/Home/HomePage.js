import VideoHomePage from "../../assets/video_homepage.mp4"


const HomePage = (props) => {
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
                    <button>Get's stated. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;