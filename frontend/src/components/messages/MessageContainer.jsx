import { useEffect } from "react";
// import { TiMessages } from "react-icons/ti";

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
    <div className="bg-[#0a0a0a] hidden md:flex flex-col flex-1">
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

import { TiMessages } from "react-icons/ti";
import { FaLock } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="px-4  sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 text-left">
        <div className="text-left">
          <p className="text-gray-400">
            Welcome 👋{" "}
            <span className="text-white">{authUser?.fullName} ❄</span>
          </p>
          <p className="text-gray-400">Select a chat to start messaging</p>
        </div>
        <TiMessages className="text-2xl md:text-5xl mb-4" />
        <div className="text-left">
          <div className="flex items-center text-gray-400 gap-2">
            <FaLock className="text-xl" />
            <span>Your Chats are Secure</span>
          </div>
          <div className="flex items-center text-gray-400 gap-2">
            <RiSecurePaymentLine className="text-xl" />
            <span>Safe and Reliable Messaging</span>
          </div>
        </div>
      </div>
    </div>
  );
};
