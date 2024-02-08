import Conversations from "./Conversations.jsx";
import LogoutBtn from "./LogoutBtn.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col max-w-[220px]">
      <SearchInput />
      <Conversations />
      <LogoutBtn />
    </div>
  );
};
export default Sidebar;
