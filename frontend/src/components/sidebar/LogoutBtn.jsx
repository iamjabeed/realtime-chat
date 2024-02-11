import { BiLogOut } from "react-icons/bi";

import useLogout from "../../hooks/useLogout";
const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="">
      {!loading ? (
        <BiLogOut className="cursor-pointer" onClick={logout} size={26} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutBtn;
