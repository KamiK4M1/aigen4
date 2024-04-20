'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ig from '../pic/ig.png';
import fb from '../pic/fb.png';
import pic0 from '../std-pic/0.jpg';
import pic1 from '../std-pic/1.jpg';
import pic2 from '../std-pic/2.jpg';
import pic3 from '../std-pic/3.jpg';
import pic5 from '../std-pic/5.jpg';
import pic10 from '../std-pic/10.jpg';
import pic14 from '../std-pic/14.jpg';
import pic17 from '../std-pic/17.jpg';
import pic19 from '../std-pic/19.jpg';
import pic20 from '../std-pic/20.jpg';
import pic25 from '../std-pic/25.jpg';
import pic35 from '../std-pic/35.jpg';


export default function Member() {
    return (
        <div>
           <div className='flex-col flex-wrap  center justify-center min-[640px]:flex-col'>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5 card-bordered">
                        <figure><Image src={pic1} width={500} height={500} alt="1" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เต้าหู้</h2>
                                <h2 className="card-title justify-end">1</h2>
                            </div>
                            <p className='pt-3 pb-1'>เด็กหญิงแก้วกัญญา ธรรมาธิวัฒน์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/to_fuu_"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="2" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ปกป้อง</h2>
                                <h2 className="card-title justify-end">2</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายพสธร ยาสมุทร</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/possathorn_yas"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div> 
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic3} width={500} height={500} alt="3" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">หลี่</h2>
                                <h2 className="card-title justify-end">3</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายหลี่เซียน เฮย์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/lichien_"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="4" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">คอปเตอร์</h2>
                                <h2 className="card-title justify-end">4</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายจอมทัพ มลทวีไพศาล</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/copterhelloworld"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic5} width={500} height={500} alt="5" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ปลื้ม</h2>
                                <h2 className="card-title justify-end">5</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายจิรพัส พันธ์เจริญ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/pleumpcr"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="6" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">โอโซน</h2>
                                <h2 className="card-title justify-end">6</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายชยพล ไกรศิริเดชา</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/to_fuu_/"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="7" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">กัปตัน</h2>
                                <h2 className="card-title justify-end">7</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายชวกร บดีศร</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/cahcappy"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="8" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เว็บไซด์</h2>
                                <h2 className="card-title justify-end">8</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายชิติพัทธ์ สร้อยสังวาลย์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/k4m1.kxm1"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="9" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ฟิว</h2>
                                <h2 className="card-title justify-end">9</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายชิติสรรค์ รีบรัตน์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/chitisxn_"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic10} width={500} height={500} alt="10" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">พิทต้า</h2>
                                <h2 className="card-title justify-end">10</h2>
                            </div>
                            <p className='pt-3 pb-1'>นางสาวณวรากุล พนาพิศาล</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/_txnny.y_"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="11" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">อิน</h2>
                                <h2 className="card-title justify-end">11</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายดนัยวัฒน์ เลาหพันธ์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/in_diferente040"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="12" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">จิงจิง</h2>
                                <h2 className="card-title justify-end">12</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายติณภัทธ บุญเรือง</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/thinnxphxt_br"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="13" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เอเบิ้ล</h2>
                                <h2 className="card-title justify-end">13</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายธนยศ กุลบุศย์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/ape_bie"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic14} width={500} height={500} alt="14" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">นนท์</h2>
                                <h2 className="card-title justify-end">14</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายนนท์ สิทธิพงศธร</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/st.nxnnii"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="15" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เกน</h2>
                                <h2 className="card-title justify-end">15</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายพงศ์พัฒณศิริ สิริจิรการเจริญ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/__gaix_"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="16" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">มีมี่</h2>
                                <h2 className="card-title justify-end">16</h2>
                            </div>
                            <p className='pt-3 pb-1'>นางสาวพิมพ์ชนก ทองจันทา</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/l.lxxlml.l"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic17} width={500} height={500} alt="17" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">จูจู</h2>
                                <h2 className="card-title justify-end">17</h2>
                            </div>
                            <p className='pt-3 pb-1'>นางสาวแพรวไพลิน แซ่จู</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/jul1ethasagun"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="18" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ภู</h2>
                                <h2 className="card-title justify-end">18</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายภูวิศ ฉัตรศิริ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/to_fuu_/"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic19} width={500} height={500} alt="19" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">มุก</h2>
                                <h2 className="card-title justify-end">19</h2>
                            </div>
                            <p className='pt-3 pb-1'>นางสาวมุกดามณี นราธรสวัสดิกุล</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic20} width={500} height={500} alt="20" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">แอลฟ่า</h2>
                                <h2 className="card-title justify-end">20</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายศุภณัฐ ศุภอมรกุล</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/iam.alpha_ur.beta"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="21" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">พี</h2>
                                <h2 className="card-title justify-end">21</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายศุภวิฒฌ์ กิจโอสถ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="22" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ทัช</h2>
                                <h2 className="card-title justify-end">22</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายธีร์ทัศน์ เตโชติประเสริฐ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/touchy_tcps"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="23" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เต้</h2>
                                <h2 className="card-title justify-end">23</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายสุวิจักขณ์ สารสอน</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="24" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">วิน</h2>
                                <h2 className="card-title justify-end">24</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายกวิน อุณหกานต์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic25} width={500} height={500} alt="25" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ปัน</h2>
                                <h2 className="card-title justify-end">25</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายธนกฤต เจริญกิจวิทยา</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/kingpunpun"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="26" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">นนท์</h2>
                                <h2 className="card-title justify-end">26</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายปัณณธร วิธินันทกิตต์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/to_fuu_/"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="27" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เคน</h2>
                                <h2 className="card-title justify-end">27</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายศิรพงษ์ บุญทรัพย์</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="28" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">วิน</h2>
                                <h2 className="card-title justify-end">28</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายศุทรา ทัตเจริญ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/wmnmmmmnn"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="29" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">ก้อง</h2>
                                <h2 className="card-title justify-end">29</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายก้องภพ บุญราศรี</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="30" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เค</h2>
                                <h2 className="card-title justify-end">30</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายณัชร ปานสุรการ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/to_fuu_/"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="31" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">หลุน</h2>
                                <h2 className="card-title justify-end">31</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายกฤตวัฒ จาง</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/lunrl_"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="32" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">กำปั่น</h2>
                                <h2 className="card-title justify-end">32</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายปรัตถกร นาครธรรม</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/parattakornnakorntam"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex center justify-center max-sm:flex-col'>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="34" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">มัดหมี่</h2>
                                <h2 className="card-title justify-end">34</h2>
                            </div>
                            <p className='pt-3 pb-1'>นางสาวลดาชมพู อิ่มร้อยเอ็ด</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/madmeeeee.ew"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic35} width={500} height={500} alt="35" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เพรงเพลง</h2>
                                <h2 className="card-title justify-end">35</h2>
                            </div>
                            <p className='pt-3 pb-1'>นางสาวอภิสุตา แซ่เฮง</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/phisutaaa_chehng"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="36" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">โอม</h2>
                                <h2 className="card-title justify-end">36</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายณนัทพงศ์ ฉัตรวัชรานุวัติ</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com/xd_xtgs"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl m-5">
                        <figure><Image src={pic0} width={500} height={500} alt="37" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title justify-start">เจมส์</h2>
                                <h2 className="card-title justify-end">37</h2>
                            </div>
                            <p className='pt-3 pb-1'>นายอัครวัฒน์ ขาวน้อยวโรดม</p>
                            <div className='flex justify-between'>
                                <div className="card-actions justify-start">
                                    <figure><Link href="https://www.instagram.com"><Image src={ig} width={40} height={40} alt={'ig'} /></Link></figure>
                                </div>
                                <div className="card-actions justify-end">
                                    <figure><Image src={fb} width={40} height={40} alt={'fb'} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
