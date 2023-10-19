"use client"

export default function Table(){
    return(
        <main className=" rounded-3xl bg-[#1f1f1f] border overflow-x-auto ">
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
                    <tr>
                        <td className="py-10 bg-[#242424]">จันทร์</td>
                        <td className="border-t border-l duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์ AI<p className="text-xs">อ.ภัทราพร</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">นาฏศิลป์<p className="text-xs">อ.พิมพ์ชนก</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ชีวะ<p className="text-xs">อ.วรปรัชญ์</p></td>
                        <td className="border-t duration-300"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]"colSpan={2}>ฟิสิกส์ AI<p className="text-xs">อ.สุทธิพงษ์</p></td>
                        <td className="border-t duration-300 hover:bg-[#0e0e0e]">สุขศึกษา/พละ<p className="text-xs">อ.สุทธิษา , อ.สหชัย</p></td>
                        <td className="border-t border-l duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ<p className="text-xs">อ.อังศุธร</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">LAB AI</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">อังคาร</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]" colSpan={2}>เคมี<p className="text-xs">อ.ศรัญยา</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">สังคมศึกษา<p className="text-xs">อ.อนุชิต</p></td>
                        <td className="duration-300"></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">พระพุทธศาสนา<p className="text-xs">อ.ปัทมา</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์<p className="text-xs">อ.ภัทราพร</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ฟิสิกส์ AI<p className="text-xs">อ.สุทธิพงษ์</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ชุมนุม</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">LAB AI</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">พุธ</td>

                        <td className="border duration-300 hover:bg-[#0e0e0e]" colSpan={2}>การเขียนโปรแกรม AI<p className="text-xs">อ.พัชรียา , อ.อนุวัตร</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">แนะแนว<p className="text-xs">อ.พชร</p></td>
                        <td className="duration-300 " >พัก</td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]" colSpan={2}>ชีวะ<p className="text-xs">อ.วรปรัชญ์</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์ AI<p className="text-xs">อ.ภัทราพร</p></td>   
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาไทย<p className="text-xs">อ.พนิดา</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">LAB AI</td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 bg-[#242424]">พฤหัสบดี</td>

                        <td className="border-l duration-300 hover:bg-[#0e0e0e]">ฟิสิกส์ AI<p className="text-xs">อ.สุทธิพงษ์</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">สังคมศึกษา<p className="text-xs">อ.อนุชิต</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์<p className="text-xs">อ.ภัทราพร</p></td>
                        <td className="duration-300" ></td>
                        <td className="border-l duration-300 hover:bg-[#0e0e0e]" colSpan={2}>หุ่นยนต์พื้นฐาน<p className="text-xs">อ.วรวุฒิ , อ.วรพันธ์</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ AI<p className="text-xs">T.Jamil</p></td>
                        <td className="border duration-300 hover:bg-[#0e0e0e]">ภาษาไทย<p className="text-xs">อ.พนิดา</p></td>
                        <td className=" border duration-300 hover:bg-[#0e0e0e] ">สว.2<p className="text-xs">อ.จาริวัชระ</p></td>
                    </tr>
                </tbody>
                <tbody className="text-center">
                    <tr className="">
                        <td className="py-10 rounded-bl-3xl bg-[#242424]">ศุกร์</td>

                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]" colSpan={2}>ออกแบบและเทคโนโลยี<p className="text-xs">อ.สริภรณ์</p></td>
                        <td className="border-r border-l duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ AI<p className="text-xs">T.Jamil</p></td>
                        <td className="duration-300"></td>
                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">ภาษาอังกฤษ<p className="text-xs">อ.อังศุธร</p></td>
                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">เคมี<p className="text-xs">อ.ศรัญยา</p></td>
                        <td className="border-l border-t duration-300 hover:bg-[#0e0e0e]">คณิตศาสตร์ AI<p className="text-xs">อ.ภัทราพร</p></td>
                        <td className="border-l border-t border-r duration-300 hover:bg-[#0e0e0e]">คณะสี</td>
                        <td className="duration-300 rounded-tr-3xl hover:bg-[#0e0e0e]">-</td>
                    </tr>
                </tbody>
            </table>
            </main>
    )
}