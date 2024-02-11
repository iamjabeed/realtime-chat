import { useEffect } from "react";
import { TiMessages } from "react-icons/ti";

import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from ".././../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);
  return (
    <div className="bg-[#0a0a0a] hidden sm:flex flex-col flex-1">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-black px-4 py-2 mb-2  h-14 flex items-center gap-2">
            <div className="w-10 rounded-full">
              <img src={selectedConversation?.profilePic} alt="user avatar" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">
                {selectedConversation?.fullName}
              </span>
              {isOnline ? (
                <span className="text-gray-300 italic">online</span>
              ) : (
                <span className="text-gray-300 italic">offline</span>
              )}
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
