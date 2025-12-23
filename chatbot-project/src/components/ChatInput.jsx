import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({chatMessages, setChatMessages}) {
        const [inputText, setInputText] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {
          if (isLoading || inputText === "") {
            return;
          }

          setIsLoading(true);

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID()
            }
          ]
          setChatMessages(newChatMessages);
          setInputText("")

          setChatMessages([
            ...newChatMessages,
            {
              loading: true,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
        
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ]);

          setIsLoading(false);

        }

        function sendEnter(event) {
          if (event.key === "Enter") {
            sendMessage();
          }

          if (event.key === "Escape") {
            setInputText("");
          }
        }

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Type a name here"
              onChange={saveInputText}
              onKeyDown={sendEnter}
              value={inputText}
              className="chat-input"
            />
            <button
              disabled={isLoading}
              onClick={sendMessage}
            >Send</button>
          </div>
        )
      }