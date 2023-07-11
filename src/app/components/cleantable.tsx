"use client"


export default function Cleaning_table(){
  return(
      <main className=" rounded-3xl bg-[#1f1f1f] border overflow-x-auto mx-auto ">
          <table className="shadow-2x w-full justify-center py-5 px-5 mx-auto">
              <thead>
                  <tr className="">
                      <th className="py-5 "><p>วัน</p></th>
                      <th className="duration-300 rounded-tr-3xl  bg-[#242424] hover:bg-[#0e0e0e]" colSpan={7}><p>ผู้รับผิดชอบ</p></th>
                  </tr>
              </thead>
              <tbody className="text-center">
                  <tr>
                      <td className="py-10 bg-[#242424]">จันทร์</td>
                      <td className="border-t border-l duration-300 hover:bg-[#0e0e0e]">เต้าหู้</td>
                      <td className="border duration-300 hover:bg-[#0e0e0e]">มัดหมี่</td>
                      <td className="border duration-300 hover:bg-[#0e0e0e]">เพรงเพลง</td>
                      <td className="border duration-300 hover:bg-[#0e0e0e]">เคน</td>
                      <td className="border duration-300 hover:bg-[#0e0e0e]">นนท์</td>
                      <td className="border-t duration-300 hover:bg-[#0e0e0e]">วิน</td>
                      <td className="border duration-300 hover:bg-[#0e0e0e]">ก้อง</td>
                      <td className="border duration-300 hover:bg-[#0e0e0e]">-</td>
                  </tr>
              </tbody>
              <tbody className="text-center">
                  <tr className="">
                      <td className="py-10 bg-[#242424]">อังคาร</td> 
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ปัน</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">วิน</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">เว็บไซด์</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คอปเตอร์</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">หลุน</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">กำปั่น</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">โอม</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">-</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">พุธ</td>

                        <td className="border duration-300 hover:bg-[#0e0e0e]">พิทต้า</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">จูจู</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">มุก</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">นนท์</td>   
                        <td className="border duration-300 hover:bg-[#0e0e0e]">เต้</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">จิงจิง</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ฟิว</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">เจมส์</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">พฤหัสบดี</td>
                        <td className="border-l duration-300 hover:bg-[#0e0e0e]">โอโซน</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">เกน</td>
                        <td className="border-l duration-300 hover:bg-[#0e0e0e]">ภู</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ปกป้อง</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">หลี</td>
                        <td className=" border duration-300 hover:bg-[#0e0e0e] ">เค</td>
                        <td className=" border duration-300 hover:bg-[#0e0e0e] ">เอเบิ้ล</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">-</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 rounded-bl-3xl bg-[#242424]">ศุกร์</td>

                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">พี</td>
                        <td className="border-r border-l duration-300 hover:bg-[#0e0e0e]">ทัช</td>
                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">กัปตัน</td>
                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">อิน</td>
                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">แอลฟ่า</td>
                        <td className="border-l border-t border-r duration-300 hover:bg-[#0e0e0e]">ปลื้ม</td>
                        <td className="duration-300 rounded-tr-3xl hover:bg-[#0e0e0e]">มีมี่</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">-</td>
                    </tr>
                </tbody>
            </table>
            </main>
    )
}