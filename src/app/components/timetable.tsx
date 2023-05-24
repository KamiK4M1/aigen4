"use client"

export default function Table(){
    return(
        <main className="rounded-3xl bg-[#1f1f1f] border">
            <table className="shadow-2x w-full justify-center py-5 px-5">
                <thead>
                    <tr className="">
                        <th className="py-5 "><p>คาบเรียน</p><p>เวลา</p></th>

                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ1</p><p>8:20 - 9:15</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ2</p><p>9:15 - 10:10</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ3</p><p>10:10 - 11:05</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ4</p><p>11:05 - 12:00</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ5</p><p>12:00 - 12:55</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ6</p><p>12:55 - 13:50</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ7</p><p>13:50 - 14:45</p></th>
                        <th className="duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>คาบ8</p><p>14:45 - 15:40</p></th>
                        <th className="duration-300 rounded-tr-3xl  bg-[#242424] hover:bg-[#0e0e0e]"><p>คาบ9</p><p>15:40 - 16:35</p></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">จันทร์</td>

                        <td className="border-t border-l col-span-2 text-right duration-300 hover:bg-[#0e0e0e]" >วิทยาการคํานวณ</td>
                        <td className="border-t duration-300 hover:bg-[#0e0e0e]" ></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]" >สังคมศึกษา</td>
                        <td className="border-t duration-300"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]" >ภาษาไทย</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]" >คณิตศาสตร์ AI</td>
                        <td className="border-t duration-300 text-right hover:bg-[#0e0e0e]" >ฟิสิกส์ AI</td>
                        <td className="border-t duration-300 hover:bg-[#0e0e0e]" ></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]" >LAB AI</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">อังคาร</td>

                        <td className="border duration-300 hover:bg-[#0e0e0e]">ฟิสิกส์ AI</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">เคมี</td>
                        <td className="duration-300"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">แนะแนว</td>
                        <td className=" duration-300 text-right hover:bg-[#0e0e0e]">ระบบฐานข้อมูล</td>
                        <td className="border-t duration-300 hover:bg-[#0e0e0e]"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ชุมนุม</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">LAB AI</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">พุธ</td>

                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ศิลปะ</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">พระพุทธศาสนา</td>
                        <td className="duration-300 " >พัก</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ</td>   
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ฟิสิกส์</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์ AI</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">LAB AI</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">พฤหัสบดี</td>

                        <td className="border-l duration-300 text-right hover:bg-[#0e0e0e]">เคมี</td>
                        <td className="duration-300 hover:bg-[#0e0e0e]"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ชีวะ</td>
                        <td className="duration-300" ></td>
                        <td className="border-l text-right duration-300 hover:bg-[#0e0e0e]">การเขียนโปรแกรม Ai</td>
                        <td className=" duration-300 hover:bg-[#0e0e0e]"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์</td>
                        <td className=" border duration-300 hover:bg-[#0e0e0e] ">-</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 rounded-bl-3xl bg-[#242424]">ศุกร์</td>

                        <td className="border-l border-t duration-300 text-right hover:bg-[#0e0e0e]">ชีวะ</td>
                        <td className="border-t duration-300 hover:bg-[#0e0e0e]"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">สุขศึกษา</td>
                        <td className="duration-300"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์ AI</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">สังคมศึกษา</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาไทย</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณะสี</td>
                        <td className="duration-300 rounded-tr-3xl hover:bg-[#0e0e0e]">-</td>
                    </tr>
                </tbody>

            </table>
            </main>
    )
}