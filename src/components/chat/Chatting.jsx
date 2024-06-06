import { useChatContext } from "../../context/ChatContext";
import { useEffect, useRef } from "react";

const Chatting = () => {

    const bottomScrollRef = useRef(null);

    const { chatHistory, chatStartingTitle } = useChatContext();

    const currentChat = chatHistory?.filter(obj => obj.chatStartTitle === chatStartingTitle) || [];


    useEffect(() => {
        bottomScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [currentChat.length]);


    return (
        <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto customScrollBar">

            {
                currentChat.map((obj, idx) => {
                    const commonContainer = 'flex gap-2 items-center';
                    const commonContent = 'max-w-[70%] bg-gray-600 rounded p-4 selection:text-black selection:bg-yellow-400';
                    const commonRole = 'w-12 h-12 grid place-items-center bg-gray-400 text-black rounded-full capitalize';

                    const { role, content } = obj;

                    if (role === 'user') {
                        return (
                            <div
                                key={idx}
                                className={`${commonContainer} justify-end self-end`}
                            >
                                <p className={`${commonContent}`}>{content}</p>
                                <p className={`${commonRole}`}>{role}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div
                                key={idx}
                                className={`${commonContainer} justify-start`}
                            >
                                <p className={`${commonContent} order-2`}>{content}</p>
                                <p className={`${commonRole} order-1`}>{role}</p>
                            </div>
                        )
                    }

                    // return role === 'user'
                    //     ? (
                    //         <div
                    //             key={idx}
                    //             className={`${commonContainer} justify-end self-end`}
                    //         >
                    //             <p className={`${commonContent}`}>{content}</p>
                    //             <p className={`${commonRole}`}>{role}</p>
                    //         </div>
                    //     )
                    //     : (
                    //         <div
                    //             key={idx}
                    //             className={`${commonContainer} justify-start`}
                    //         >
                    //             <p className={`${commonContent} order-2`}>{content}</p>
                    //             <p className={`${commonRole} order-1`}>{role}</p>
                    //         </div>
                    //     )
                })
            }

            {
                // isLoading &&
                // <div className="w-full bg-slate-500 p-3 rounded">Loading...</div>
            }

            <div ref={bottomScrollRef} />
        </div>
    )
}

export default Chatting