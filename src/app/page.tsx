import Table from './components/timetable';
import Cleaning_table from './components/cleantable';

export default function Home() {
  return (
    <main className="container mx-auto justify-center">
        <h1 className='hover:scale-110 flex flex-row justify-center text-5xl p-2 hover:text-[#8f8f8f] duration-200'>ตารางเรียน</h1>
      <Table/>
      <h1 className='my-4 hover:scale-110 flex flex-row justify-center text-5xl p-2 hover:text-[#8f8f8f] duration-200'>ตารางเวร</h1>
      <Cleaning_table/>
    </main>
  )
}
