import React from 'react'
import Sidebarhandle from '../components/Sidebarhandle';
import Toppic from '../components/Toppic';
import Bottomtitle from '../components/Bottomtitle';
import Sitescrapy from '../components/Sitescrapy';

export default function Scrapy() {

    const siteNames = ['Makro', 'Olimpica', 'D1', 'Exito']
    const sitelogo = ["./img1.png", "./img4.png", "./img2.png", "./img3.png"]

    return (
        <div className="flex w-screen">
            {/* Sidebar */}
            <Sidebarhandle />

            {/* Main Content */}
            <div className="w-full 2xl:w-4/5 2xl:ms-0 ms-[5%] bg-[#EFEFEF] min-h-screen">
                <div className='p-5 px-8'>
                    <Toppic />
                    {
                        siteNames.map((site, index) => (
                            <div key={index}>
                                <Sitescrapy site={site} logo={sitelogo[index]} />
                            </div>
                        ))
                    }
                    <Bottomtitle />
                </div>
            </div>
        </div>
    );
}