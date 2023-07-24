import { BiSlideshow } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="flex justify-center bg-black py-3">
      <div className="flex items-center justify-between w-3/5 text-white ">
        <div className="flex items-center gap-3">
          <BiSlideshow className="text-white text-2xl" />
          <span>TV Shows Search</span>
        </div>
        <div className="flex gap-8">
          <li className="list-none text-white">Home</li>
          <li className="list-none text-white">About</li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
