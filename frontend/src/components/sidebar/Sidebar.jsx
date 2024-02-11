import Conversations from "./Conversations.jsx";
import LogoutBtn from "./LogoutBtn.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
  // border-r-[1px] border-gray-800
  return (
    <div className="bg-[#0a0a0a] md:w-[280px] lg:w-[320px] 2xl:w-[380px] px-4  py-2 flex flex-col ml-[74px] border-r border-[#FFF]/40">
      <SearchInput />
      <Conversations />
      <div className="md:hidden">
        <LogoutBtn />
      </div>
    </div>
  );
};
export default Sidebar;
