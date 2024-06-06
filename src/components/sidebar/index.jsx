import { useChatContext } from "../../context/ChatContext";
import ChatTitle from "./Chat-Title";


const Sidebar = () => {

    const { chatHistory, handleNewChatClick } = useChatContext();

    // only get unique chat titles... || remove duplicate chat tiles...
    const uniqueTitles = Array.from(new Set(chatHistory?.map(obj => obj.chatStartTitle)));
    const hasHistory = uniqueTitles?.length > 0;

    return (
        <aside className="w-[300px] flex flex-col justify-between bg-slate-800 select-none">

            <div className="p-4 border-b border-slate-700">
                <button
                    className="py-2 w-full rounded outline-none text-lg text-slate-800 bg-slate-500 duration-300 hover:text-slate-300 hover:bg-slate-600"
                    onClick={handleNewChatClick}
                >
                    New Chat
                </button>
            </div>

            <div className="flex-1 pl-4 pt-4 text-slate-400 flex flex-col overflow-y-auto">
                <p className="mb-4 text-lg">{hasHistory ? 'Chat' : 'No'} History...</p>

                <div className="overflow-y-auto customScrollBar flex flex-col gap-2">
                    {
                        hasHistory && uniqueTitles.map((title, idx) =>
                            <ChatTitle key={idx} title={title} />
                        )
                    }
                </div>
            </div>


            <p className="p-4 text-lg text-center text-slate-400 border-t border-slate-700">
                Made By Taiseen
            </p>
        </aside >
    )
}

export default Sidebar