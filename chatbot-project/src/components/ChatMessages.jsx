import {useRef, useEffect} from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

export function ChatMessages({chatMessages}) {
    function useAutoScroll(chatMessages) {
        const chatMessageRef = useRef(null);

        useEffect(() => {
        const containerElem = chatMessageRef.current;

        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
        }, [chatMessages]);

        return chatMessageRef;
    }

    const chatMessageRef = useAutoScroll(chatMessages);
    return (
        <div className="chatMessages-container" ref={chatMessageRef}>
        { chatMessages.map((chatMessage) => {
            return (
            <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} loading={chatMessage.loading}/>
            );
        })}
        </div>
    )
}