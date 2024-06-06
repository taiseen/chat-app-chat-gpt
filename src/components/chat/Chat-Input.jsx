import { useChatContext } from '../../context/ChatContext';


const url = 'http://localhost:8000/dummyData'; // api


const ChatInput = () => {

    const { userInput, setUserInput, setServerResponse, setIsLoading } = useChatContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = userInput.trim();
        if (message === '') return false;

        const postOptions = {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" }
        }

        setIsLoading(true);

        try {
            const res = await fetch(url, postOptions);
            const data = await res.json();

            setServerResponse(data); // result store as an {object}

            setIsLoading(false);
        } catch (error) {
            console.log(error);
            alert('Please check the server connection...');
        }
    }

    return (
        <div >
            <form
                onSubmit={handleSubmit}
                className="px-4 pt-2 flex items-center justify-center gap-2"
            >
                <input
                    required
                    autoFocus
                    type="text"
                    value={userInput}
                    placeholder="Start chatting..."
                    onChange={(e) => setUserInput(e.target.value)}
                    className="px-3 py-2 w-[75%] bg-transparent rounded outline-none duration-300 border-2 border-gray-800 text-gray-200 text-lg shadow-xl focus:border-gray-500"
                />

                <button
                    type='submit'
                    className='px-4 py-2.5 rounded text-lg outline-none bg-slate-500 text-black duration-300 hover:bg-slate-600 hover:text-white'
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatInput;