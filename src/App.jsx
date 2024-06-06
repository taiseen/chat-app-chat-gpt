import ChatContext from "./context/ChatContext";
import ChatContainer from "./components/chat";
import Sidebar from "./components/sidebar";


const App = () => {

  return (
    <ChatContext>
      <div className="h-screen flex">

        <Sidebar />

        <ChatContainer />

      </div>
    </ChatContext>
  )
}

export default App;