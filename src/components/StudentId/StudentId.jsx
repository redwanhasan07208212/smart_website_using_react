/* eslint-disable react/prop-types */
import { IoSearchSharp } from "react-icons/io5";
import StudentInfo from "../StudentInfo/StudentInfo";

export default function Student({ studentsA, studentsB }) {
  // const [student_Id] = studentsA
  return (
    <>
      <div className="py-24 lg:pt-[120px] lg:pb-28 bg-[#172227]">
        <div className="container mx-auto">
          <div className="mb-16 flex flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            <form>
              <div className="flex">
                <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                    placeholder="Search by Student "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                  >
                    <IoSearchSharp className="h-6 w-6"></IoSearchSharp>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead className="text-white">
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  Class One
                </td>
              </tr>
              {studentsA && studentsA.length > 0 ? (
                studentsA.map((studentA, idx) => (
                  <StudentInfo key={idx} student={studentA}></StudentInfo>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-5">
                    No data available for class one
                  </td>
                </tr>
              )}
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  Class Two
                </td>
              </tr>
              {studentsB && studentsB.length > 0 ? (
                studentsB.map((studentB, idx) => (
                  <StudentInfo key={idx} student={studentB} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-5">
                    No data available for Class Two
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
