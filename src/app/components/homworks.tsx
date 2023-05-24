"use client"

export default function Homeworks_table(){
    return(
        <main className="rounded-3xl bg-[#1f1f1f] border">
            <table className="shadow-2x w-full justify-center py-5">
                <thead>
                    <tr className="">
                        <th className="border-b py-5 rounded-tl-3xl duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>รายวิชา</p></th>
                        <th className="border-b px-5 duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>หัวข้อ</p></th>
                        <th className="border-b px-20 duration-300 bg-[#242424]  hover:bg-[#0e0e0e]"><p>หัวข้อ</p></th>
                        <th className="border-b px-5 duration-300 rounded-tr-3xl  bg-[#242424] hover:bg-[#0e0e0e]"><p>กำหนดส่ง</p></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="">
                        <td className="duration-300 hover:bg-[#0e0e0e]" >วิทยาการคํานวณ</td>
                        <td className="duration-300 hover:bg-[#0e0e0e]" >สังคมศึกษา</td>
                        <td className="duration-300 hover:bg-[#0e0e0e]" >พัก</td>
                    </tr>
                </tbody>
            </table>
            </main>
    )
}