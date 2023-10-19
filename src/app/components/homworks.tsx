"use client"

export default function HomeworksTable() {
  return (
    <main className="rounded-3xl bg-[#1f1f1f] border">
      <table className="shadow-2x w-full justify-center py-5">
        <thead>
          <tr>
            <th className="border-b py-5 rounded-tl-3xl duration-300 bg-[#242424] hover:bg-[#0e0e0e]">
              <p>รายวิชา</p>
            </th>
            <th className="border-b px-5 duration-300 bg-[#242424] hover:bg-[#0e0e0e]">
              <p>หัวข้อ</p>
            </th>
            <th className="border-b px-20 duration-300 bg-[#242424] hover:bg-[#0e0e0e]">
              <p>คำอธิบาย</p>
            </th>
            <th className="border-b px-5 duration-300 rounded-tr-3xl bg-[#242424] hover:bg-[#0e0e0e]">
              <p>กำหนดส่ง</p>
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border-b border-r duration-300 py-5 hover:bg-[#0e0e0e]">คณิตศาสตร์</td>
            <td className="border-b border-r duration-300 hover:bg-[#0e0e0e]">สอบเก็บคะแนน</td>
            <td className="border-b border-r duration-300 hover:bg-[#0e0e0e]">เรื่องการดำเนินระหว่างเซต - จบเรื่องเซต</td>
            <td className="border-b duration-300 hover:bg-[#0e0e0e]">16/6/2023</td>
          </tr>
          <tr>
            <td className="border-b border-r duration-300 py-5 hover:bg-[#0e0e0e]">ภาษาไทย</td>
            <td className="border-b border-r duration-300 hover:bg-[#0e0e0e]">สอบท่องอาขยาน</td>
            <td className="border-b border-r duration-300 hover:bg-[#0e0e0e]">ท่องอาขยาน หน้า 42</td>
            <td className="border-b duration-300 hover:bg-[#0e0e0e]">30/6/2023</td>
          </tr>
          <tr>
            <td className="border-b border-r duration-300 py-5 hover:bg-[#0e0e0e]">วิทยาการคํานวณ</td>
            <td className="border-b border-r duration-300 hover:bg-[#0e0e0e]">Flowchart</td>
            <td className="border-b border-r duration-300 hover:bg-[#0e0e0e]">เขียน Flowchart ของกระบวนการเดินรถไฟฟ้า</td>
            <td className="border-b duration-300 hover:bg-[#0e0e0e]">ยังไม่กำหนด</td>
          </tr>
          <tr>
            <td className="border-r duration-300 py-5 hover:bg-[#0e0e0e]">เคมี</td>
            <td className="border-r duration-300 hover:bg-[#0e0e0e]">ท่องตารางธาตุ</td>
            <td className="border-r duration-300 hover:bg-[#0e0e0e]">หมู่ 1a - 8a ธาตุ transition</td>
            <td className="duration-300 hover:bg-[#0e0e0e]">30/6/2023</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}