import { useState } from "react";
import toast from "react-hot-toast";

import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <section className="pb-4">
      <h4 className="text-lg font-semibold py-2">Chats</h4>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="w-full p-2 border rounded bg-[#1a1a1a] placeholder-[#eaeaeab0] text-[#F6F6F6] outline-none border-transparent border-b-[#6e6e6e]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="text-white absolute right-2 top-2">
          <IoSearchSharp className="outline-none cursor-pointer" size={24} />
        </button>
      </form>
    </section>
  );
};
export default SearchInput;
