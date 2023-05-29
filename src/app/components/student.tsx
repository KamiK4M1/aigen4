"use client";

export default function Student() {
  const students = [
    {
      id: 1,
      studentId: 43690,
      fullName: "เด็กหญิงแก้วกัญญา ธรรมาธิวัฒน์",
      nickname: "เต้าหู้",
    },
    {
      id: 2,
      studentId: 43712,
      fullName: "นายพสธร ยาสมุร",
      nickname: "ปกป้อง",
    },
    {
      id: 3,
      studentId: 43726,
      fullName: "นายหลี่เซียน เฮย์",
      nickname: "หลี่",
    },
    {
      id: 4,
      studentId: 43822,
      fullName: "เด็กชายจอมทัพ มลทวีไพศาล",
      nickname: "คอปเตอร์",
    },
    {
      id: 5,
      studentId: 43823,
      fullName: "นายจิรพัส พันธ์เจริญ",
      nickname: "ปลื้ม",
    },
    {
      id: 6,
      studentId: 43824,
      fullName: "เด็กชายชยพล ไกรศิริเดชา",
      nickname: "โอโซน",
    },
    {
      id: 7,
      studentId: 43825,
      fullName: "นายชวกร บดีศร",
      nickname: "กัปตัน",
    },
    {
      id: 8,
      studentId: 43826,
      fullName: "นายชิติพัทธ์ สร้อยสังวาลย์",
      nickname: "เว็บไซด์",
    },
    {
      id: 9,
      studentId: 43827,
      fullName: "นายชิติสรรค์ รีบรัตน์",
      nickname: "ฟิว",
    },
    {
      id: 10,
      studentId: 43831,
      fullName: "เด็กหญิงณวรากุล พนาพิศาล",
      nickname: "พิทต้า",
    },
    {
      id: 11,
      studentId: 43835,
      fullName: "เด็กชายดนัยวัฒน์ เลาหพันธ์",
      nickname: "อิน",
    },
    {
      id: 12,
      studentId: 43837,
      fullName: "นายติณภัทธ บุญเรือง",
      nickname: "จิงจิง",
    },
    {
      id: 13,
      studentId: 43839,
      fullName: "นายธนยศ กุลบุศย์",
      nickname: "เอเบิ้ล",
    },
    {
      id: 14,
      studentId: 43841,
      fullName: "นายนนท์ สิทธิพงศธร",
      nickname: "นนท์",
    },
    {
      id: 15,
      studentId:  43844,
      fullName: "นายพงศ์พัฒณศิริ สิริจิรการเจริญ",
      nickname: "เกน",
    },
    {
      id: 16,
      studentId: 43845,
      fullName: "นางสาวพิมพ์ชนก ทองจันทา",
      nickname: "มีมี่",
    },
    {
      id: 17,
      studentId: 43848,
      fullName: "เด็กหญิงแพรวไพลิน แซ่จ",
      nickname: "จูจู",
    },
    {
      id: 18,
      studentId: 43851,
      fullName: "เด็กชายภูวิศ ฉัตรศิริ",
      nickname: "ภู",
    },
    {
      id: 19,
      studentId: 43853,
      fullName: "นางสาวมุกดามณี นราธรสวัสดิกุล",
      nickname: "มุก",
    },
    {
      id: 20,
      studentId: 43858,
      fullName: "เด็กชายศุภณัฐ ศุภอมรกุล",
      nickname: "แอลฟ่า",
    },
    {
      id: 21,
      studentId: 43860,
      fullName: "นายศุภวิฒฌ์ กิจโอสถ",
      nickname: "พี",
    },
    {
      id: 22,
      studentId: 43861,
      fullName: "นายศุภวิฒฌ์ กิจโอสถ",
      nickname: "ทัช",
    },
    {
      id: 23,
      studentId: 43863,
      fullName: "นายสุวิจักขณ์ สารสอน",
      nickname: "เต้",
    },
    {
      id: 24,
      studentId: 43959,
      fullName: "เด็กชายกวิน อุณหกานต์",
      nickname: "วิน",
    },
    {
      id: 25,
      studentId: 43967,
      fullName: "นายธนกฤต เจริญกิจวิทยา",
      nickname: "ปัน",
    },
    {
      id: 26,
      studentId: 44068,
      fullName: "นายปัณณธร วิธินันทกิตต์",
      nickname: "นน",
    },
    {
      id: 27,
      studentId: 44084,
      fullName: "เด็กชายศิรพงษ์ บุญทรัพย",
      nickname: "เคน",
    },
    {
      id: 28,
      studentId: 44085,
      fullName: "นายศุทรา ทัตเจริญ",
      nickname: "วิน",
    },
    {
      id: 29,
      studentId: 44319,
      fullName: "เด็กชายก้องภพ บุญราศรี",
      nickname: "ก้อง",
    },
    {
      id: 30,
      studentId: 44355,
      fullName: "นายณัชร ปานสุรการ",
      nickname: "เค",
    },
    {
      id: 31,
      studentId: 47125,
      fullName: "เด็กชายกฤตวัฒ จาง",
      nickname: "หลุน",
    },
    {
      id: 32,
      studentId: 47126,
      fullName: "เด็กชายปรัตถกร นาครธรรม",
      nickname: "กำปั่น",
    },
    {
      id: 34,
      studentId: 47128,
      fullName: "เด็กหญิงลดาชมพู อิ่มร้อยเอ็ด",
      nickname: "มัดหมี่",
    },
    {
      id: 35,
      studentId: 47129,
      fullName: "เด็กหญิงอภิสุตา แซ่เฮง",
      nickname: "เพรงเพลง",
    },
  ];

  return (
    <main className="rounded-3xl bg-[#1f1f1f] border overflow-x-auto my-4 mx-auto">
      <table className="table mx-auto max-w-4xl w-full">
        <thead>
          <tr>
            <th className="border-b py-5 rounded-tl-3xl bg-[#242424]">
              <p>เลขที่</p>
            </th>
            <th className="border-b px-5 bg-[#242424]">
              <p>รหัสนักเรียน</p>
            </th>
            <th className="border-b px-20 bg-[#242424]">
              <p>ชื่อ - นามสกุล</p>
            </th>
            <th className="border-b px-5 rounded-tr-3xl bg-[#242424]">
              <p>ชื่อเล่น</p>
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((student) => (
            <tr key={student.id} className="duration-300 hover:bg-[#0e0e0e]">
              <td className="border-b duration-300 py-4 hover:bg-[#0e0e0e]">
                {student.id}
              </td>
              <td className="border-b duration-300 hover:bg-[#0e0e0e]">
                {student.studentId}
              </td>
              <td className="border-b duration-300 text-left hover:bg-[#0e0e0e]">
                {student.fullName}
              </td>
              <td className="border-b duration-300 hover:bg-[#0e0e0e]">
                {student.nickname}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
