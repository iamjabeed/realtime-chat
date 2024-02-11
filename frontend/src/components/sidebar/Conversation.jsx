import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import "../../index.css";
const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const activeConversation = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-3 items-center hover:bg-[#212020] rounded p-2  py-2 cursor-pointer ${
          activeConversation ? "bg-pink" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offlineStatus"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 capitalize">
              {conversation?.fullName}
            </p>

            <span> {conversation?.gender === "male" ? "M🙋🏻‍♂️" : "F💃🏻"}</span>
          </div>
        </div>
      </div>

      {/* {!lastIndex && <div className="divider my-0 py-0 h-1" />} */}
    </>
  );
};
export default Conversation;
