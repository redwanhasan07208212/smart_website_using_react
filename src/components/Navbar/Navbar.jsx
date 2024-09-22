import { FaHandPointRight } from "react-icons/fa6";
import logo from "../../assets/images/7459344.jpg";
export default function Navbar() {
  return (
    <>
      <div className="py-6 ">
        <div className="container mx-auto flex justify-between items-center text-white md:flex-row flex-col">
          <div className="flex items-center gap-2">
            <img className="h-10 max-w-full" src={logo} alt="" />
            <h2>ReDwAn HaSaN</h2>
          </div>
          <div className="flex items-center gap-2 text-white">
            <h3>For Admission </h3>
            <FaHandPointRight></FaHandPointRight>
            <button className="px-5 py-2 bg-[#172227] rounded-[44px]">
              Click Here{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
