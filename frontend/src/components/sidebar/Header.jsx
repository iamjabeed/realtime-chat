import LogoutBtn from "./LogoutBtn";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <section className="hidden md:flex absolute top-0 bottom-0 w-[70px] border-r-[1px]  border-[#FFF]/40 px-1">
      <div className="flex flex-col justify-between h-full w-full py-8">
        <div className="flex flex-col gap-2">
          <h4>Logo</h4>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <AiOutlineUser size={26} />
          <LogoutBtn />
        </div>
      </div>
    </section>
  );
};
export default Header;
