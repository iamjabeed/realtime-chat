import Conversations from "./Conversations.jsx";
import LogoutBtn from "./LogoutBtn.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
  // border-r-[1px] border-gray-800
  return (
    <div className="bg-[#0a0a0a] w-full md:w-[300px] lg:w-[380px] 2xl:w-[450px] px-4  py-2 flex flex-col ml-auto md:ml-[74px] border-r border-[#FFF]/40">
      <SearchInput />
      <Conversations />
      <div className="md:hidden absolute bottom-5 left-4 z-40">
        <LogoutBtn />
      </div>
    </div>
  );
};
export default Sidebar;
