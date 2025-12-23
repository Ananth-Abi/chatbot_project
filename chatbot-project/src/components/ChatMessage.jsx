import robotImage from "../assets/robot.png"
import userImage from "../assets/user.png"
import loadingImage from "../assets/loading-spinner.gif";
import "./ChatMessage.css";

export function ChatMessage({message, sender, loading}) {
return (
    <div className= {sender === "user" ? "chat-message-user" : "chat-message-robot"}>
        {sender === "robot" && <img src={robotImage} className="chat-message-profile"/>}
        <div className="chat-message-text">
        {loading ? (
            <img src={loadingImage} className="loading-img"/>
        ) : message}
        </div>
        {sender === "user" && <img src={userImage} className="chat-message-profile"/>}
    </div>
    )
}

export default ChatMessage;