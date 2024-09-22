export default function StudentInfo({ student }) {
    const {student_Id,name,scores,percentage} = student
  return (
    <>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{student_Id}</td>
        <td className="p-5 text-sm md:text-xl">{name}</td>
        <td className="p-5 text-sm md:text-xl text-center">{scores}</td>
        <td className="p-5 text-sm md:text-xl text-center">{percentage}%</td>
      </tr>
    </>
  );
}
