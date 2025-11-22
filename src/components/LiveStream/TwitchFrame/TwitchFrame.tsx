import { getTwitchParentUrl } from "../../../helpers/liveStream";
import './TwitchFrame.scss';

const TwitchFrame = () => {
    return (
    <div className="twitch-container">
        <iframe
            title="Live Music Stream"
            src={`https://player.twitch.tv/?channel=pghataorre&parent=${getTwitchParentUrl()}`}
            allowFullScreen
        >
        </iframe>
    </div>
  )};

  export default TwitchFrame;
