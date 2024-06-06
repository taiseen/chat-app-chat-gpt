import { useChatContext } from "../../context/ChatContext";
import ChatInput from "./Chat-Input";
import Chatting from "./Chatting";

const ChatContainer = () => {

    const { chatHistory, handleClearAllChats, chatStartingTitle } = useChatContext();

    const hasHistory = chatHistory.length > 0;

    return (
        <main className="relative w-full bg-slate-700 flex flex-col text-gray-300">

            <div className="p-6 text-xl border-b border-slate-800 flex items-center justify-between select-none">
                <p className="capitalize">chat-gpt</p>

                <p>{chatStartingTitle}</p>

                {
                    hasHistory &&
                    <p
                        onClick={handleClearAllChats}
                        className="cursor-pointer duration-300 text-gray-600 hover:text-gray-400 hover:underline"
                    >
                        Clear all chats
                    </p>
                }
            </div>

            <Chatting />

            <ChatInput />

            <p className="py-1 text-center text-gray-500 text-sm">
                Chat GPT build for learning purpose of React-Js data flow system...
            </p>
        </main>
    )
}

export default ChatContainer