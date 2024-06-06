import { useChatContext } from "../../context/ChatContext";
import { useState } from "react";


const ChatTitle = ({ title }) => {

    const { chatStartingTitle, handlePreviousChatClick, handleChatDelete } = useChatContext();

    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const isSelectedTitle = chatStartingTitle === title;


    return (
        <div
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
            onClick={() => handlePreviousChatClick(title)}
            className={`truncate py-1 px-2 rounded mr-4 duration-300 cursor-pointer hover:bg-slate-500 flex items-center justify-between ${isSelectedTitle ? 'bg-slate-500/80' : 'bg-slate-700'}`}
        >
            <p>{title}</p>

            {
                isMouseEnter &&
                <span
                    title='Delete this chat'
                    onClick={(e) => handleChatDelete(e, title)}
                >
                    ❌
                </span>
            }
        </div>
    )
}

export default ChatTitle