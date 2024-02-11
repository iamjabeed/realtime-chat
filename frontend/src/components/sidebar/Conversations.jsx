import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto gap-2">
      {conversations?.map((conversation, i) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={i === conversations.length - 1}
        />
      ))}
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          {" "}
          <span className="loading loading-spinner mx-auto"></span>
        </div>
      ) : null}
    </div>
  );
};
export default Conversations;
