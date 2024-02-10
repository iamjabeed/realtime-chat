import useGetMessages from "../../hooks/useGetMessages.js";
import Message from "./Message.jsx";
import MessageSkeleton from "../shimmerUi/MessageSkeleton.jsx";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  // console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {!loading &&
        messages?.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
    </div>
  );
};
export default Messages;
