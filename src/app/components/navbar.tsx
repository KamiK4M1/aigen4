"use client"

import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiAccountMultiple, mdiFileAlert, mdiFileCloud, mdiHome, mdiListBox, mdiRobotIndustrial } from '@mdi/js';

export default function Navbar(){
    return(
        <div className='p-1'><div className='flex justify-between align-middle'>
          <div className='p-8'>

            <Link href="#" ><div className='hover:bg-slate-800 hover:text-black hover:scale-110 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <img src='images/aisw2.png' alt='logo' width='80x'/>
            </div></Link>
            
          </div>
          <div className='p-8 flex flex-row'>
            <Link href="/" ><div className='hover:bg-[#a82b2b] hover:text-black hover:scale-110 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <Icon path={mdiHome} size={1.2} className='pr-1'/>หน้าหลัก
            </div></Link>
            <Link href="members" ><div className='hover:bg-[#a82b2b] hover:text-black hover:scale-110 :bg-orange-400 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <Icon path={mdiAccountMultiple} size={1.2} className='pr-1'/>สมาชิก
            </div></Link>
            <Link href="students" ><div className='hover:bg-[#a82b2b] hover:text-black hover:scale-110 :bg-orange-400 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <Icon path={mdiListBox} size={1.2} className='pr-1'/>รายชื่อนักเรียน
            </div></Link>
            <Link href="homeworks" ><div className='hover:bg-[#a82b2b] hover:text-black hover:scale-110 :bg-orange-400 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <Icon path={mdiFileAlert} size={1.2} className='pr-1'/>การบ้าน
            </div></Link>
            <Link href="https://drive.google.com/drive/folders/11h_FSmP1tQ6QIgNvSp7d7CAmL9Jgucuq?usp=drive_link" ><div className='hover:bg-[#a82b2b] hover:text-black hover:scale-110 :bg-orange-400 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <Icon path={mdiFileCloud} size={1.2} className='pr-1'/>ไฟล์งาน
            </div></Link>
            <Link href="about" ><div className='hover:bg-[#a82b2b] hover:text-black hover:scale-110 :bg-orange-400 p-5 rounded-full ease-linear duration-100 flex flex-row'>
              <Icon path={mdiRobotIndustrial} size={1.2} className='pr-1'/>ห้องเรียนพิเศษ AI
            </div></Link>
          </div></div>
        </div>
    )
}