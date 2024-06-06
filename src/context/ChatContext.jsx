import { createContext, useContext, useEffect, useState } from 'react';
import { chatLocalDB } from '../helper';

const Chat = createContext();

// 📢 use for provider 📢
const ChatContext = ({ children }) => {

    const chatDB = chatLocalDB('get');

    const [serverResponse, setServerResponse] = useState({}); // server reply store here...
    const [userInput, setUserInput] = useState(''); // user typing inputs for chatting...

    const [chatStartingTitle, setChatStartingTitle] = useState(''); // responsible for also new chat creation...
    const [chatHistory, setChatHistory] = useState(chatDB || []);

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        chatLocalDB('set', chatHistory);
    }, [chatHistory, chatHistory.length]);


    useEffect(() => {

        if (userInput && serverResponse && !chatStartingTitle) {
            setChatStartingTitle(userInput);
        }

        if (userInput && serverResponse && chatStartingTitle) {

            // 💖💖💖 hart of the project... 💖💖💖
            setChatHistory(pre => ([
                ...pre,
                {
                    chatStartTitle: chatStartingTitle,
                    content: userInput,
                    role: 'user',
                },
                {
                    chatStartTitle: chatStartingTitle,
                    content: serverResponse.content,
                    role: serverResponse.role,
                },
            ]))

            // clear input after getting results...
            setUserInput('');
        }

    }, [serverResponse, chatStartingTitle]);


    const handleClearAllChats = () => {
        if (confirm('Are you shure to delete all chats...')) {
            chatLocalDB('clear'); // clear form local storage...
            setChatHistory([]); // clear from history also, to prevent being error in ui...
        }
    };

    const handleNewChatClick = () => {
        setServerResponse({}); // clear previous --> response from server...
        setChatStartingTitle(''); // clear previous --> status for creating new chat...
        setUserInput(''); // clear previous --> inputs from user...
    }


    const handlePreviousChatClick = (title) => {
        setChatStartingTitle(title); // by click to load previous chats...
        setServerResponse({}); // clear previous --> response from server...
        setUserInput(''); // clear previous --> inputs from user...
    }


    const handleChatDelete = (e, title) => {
        e.stopPropagation();
        
        setChatStartingTitle(''); // clear selected chat title also...
        setChatHistory(pre => pre.filter(obj => obj.chatStartTitle !== title)); // delete form history...
    }


    const shareInsideDomTree = {
        isLoading, setIsLoading,
        userInput, setUserInput,
        setServerResponse,
        chatStartingTitle,
        chatHistory,

        handlePreviousChatClick,
        handleClearAllChats,
        handleNewChatClick,
        handleChatDelete,
    };


    return (
        <Chat.Provider value={shareInsideDomTree}>
            {children}
        </Chat.Provider>
    );
};


export default ChatContext;


// 🎧 use for consumer's 🎧
export const useChatContext = () => useContext(Chat);
