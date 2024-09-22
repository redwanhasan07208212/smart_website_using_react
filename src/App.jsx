import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Student from "./components/StudentId/StudentId";
function App() {
  const [students, setStudents] = useState({});
  useEffect(() => {
    fetch('smart.json')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  // console.log(students.classA);
  // console.log(students.classB);
  return (
    <>
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
        <Navbar />
        <HeroSection />
      </div>
      <div>
        <Student
          studentsA={students.classA}
          studentsB={students.classB}
        ></Student>
      </div>
    </>
  );
}

export default App;
