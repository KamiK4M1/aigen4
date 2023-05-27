import Homeworks_table from "../components/homworks";

export default function Homeworks(){
    return (
        <main className="container mx-auto">
            <h1 className='hover:scale-110 flex flex-row justify-center text-5xl p-2 hover:text-[#8f8f8f] duration-200'>ตารางการบ้าน</h1>
            <Homeworks_table/>
        </main>
    )
}