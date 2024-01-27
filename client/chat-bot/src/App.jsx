import React from "react";
import ChatHistory from "./components/ChatHistory";
import ChatInterface from "./components/ChatInterface";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import './App.css'
function App() {
  return (
    <>
      <div className="flex relative">
        {/* Sidebar with margin right */}
        <Sidebar style={{ marginRight: '16px', zIndex: 10 }} />

        <div className="flex flex-col w-full">
          {/* Navbar */}
          <Navbar />

          {/* Main Body */}
          <div className="flex-grow flex p-1 relative">
            {/* Chat History */}
            <div className="flex-grow">
              <ChatHistory />
            </div>

            {/* Chat Interface */}
            <div className="flex-grow w-3/4 ml-1"> {/* Adjusted margin */}
              <ChatInterface />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
