import React from 'react'
import Sidebarhandle from '../components/Sidebarhandle';
import Toppic from '../components/Toppic';
import Bottomtitle from '../components/Bottomtitle';

export default function Landing() {
    return (
        <div className="flex w-screen">
            {/* Sidebar */}
            <Sidebarhandle/>

            {/* Main Content */}
            <div className="w-full 2xl:w-4/5 2xl:ms-0 ms-[5%] bg-[#EFEFEF] min-h-screen">
                <div className='p-5 px-8'>
                    <Toppic/>
                    <div className='text-[#2B3674] text-left font-bold mt-4 px-4'>Descripción general</div>
                    <div className='lg:flex'>
                        <div>
                            <img
                                src='./TotalRevenue_s.png'
                                alt='Total'
                            />
                        </div>
                        <div>
                            <img
                                src='./CustomerSatisfaction_s.png'
                                alt='customer'
                            />
                        </div>
                        <div>
                            <img
                                src='./TargetVsReality_s.png'
                                alt='target'
                            />
                        </div>
                    </div>
                    <div className='text-[#7B91B0] text-xl font-bold text-left px-4 pt-2'>Producto</div>
                    <div className='lg:flex p-4 gap-6'>
                        <div className='py-2'>
                            <img
                                src='./Medium_Location(1).png'
                                className='hover:shadow-2xl'
                                alt='Total'
                            />
                        </div>
                        <div className='py-2'>
                            <img
                                src='./Medium_Location(2).png'
                                className='hover:shadow-2xl'
                                alt='customer'
                            />
                        </div>
                        <div className='py-2'>
                            <img
                                src='./Medium_Location.png'
                                className='hover:shadow-2xl'
                                alt='target'
                            />
                        </div>
                    </div>
                    <Bottomtitle/>
                </div>
            </div>
        </div>
    );
}