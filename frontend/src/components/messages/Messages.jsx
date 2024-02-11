import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages.js";
import Message from "./Message.jsx";
import MessageSkeleton from "../shimmerUi/MessageSkeleton.jsx";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  // console.log(messages);
  useListenMessages();
  const lastMessageRef = useRef();

  // To scroll down to new messages
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading && messages.length === 0 && (
        <p className="flex justify-center items-center h-full text-center">
          Send a message to start the conversation
        </p>
      )}

      {!loading &&
        messages?.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};
export default Messages;
