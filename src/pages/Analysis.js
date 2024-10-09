import React, { useState, useEffect } from "react";
import Bottomtitle from "../components/Bottomtitle";
import Dropdown1 from "../components/Dropdown1";
import Sidebarhandle from "../components/Sidebarhandle";
import TableShow from "../components/TableShow";
import Toppic from "../components/Toppic";
import Papa from 'papaparse';

export default function Analysis() {
    const siteNames = ['Makro', 'Olimpica', 'D1', 'Exito'];
    const baseUrl = 'http://127.0.0.1:5000/csv/';

    const csvFiles = {
        Olimpica: Array.from({ length: 4 }, (_, i) => `${baseUrl}olimpica_${i}.csv`),
        Makro: Array.from({ length: 4 }, (_, i) => `${baseUrl}makro_${i}.csv`),
        D1: Array.from({ length: 4 }, (_, i) => `${baseUrl}D1_${i}.csv`),
        Exito: Array.from({ length: 4 }, (_, i) => `${baseUrl}exito_${i}.csv`),
    };

    const [selectedSite, setSelectedSite] = useState(siteNames[0]);
    const [priceStats, setPriceStats] = useState({ highest: 0, lowest: 0, average: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const files = csvFiles[selectedSite];
            let allPrices = [];

            for (const file of files) {
                const response = await fetch(file);
                const text = await response.text();
                Papa.parse(text, {
                    header: true,
                    complete: (results) => {
                        // Assuming price is in a column named "price"
                        const prices = results.data.map(row => {
                            const priceValue = row.Price; // Get the price value
                            if (priceValue) { // Check if it's defined
                                return parseFloat(priceValue.replace(/[$,]/g, ''));
                            }
                            // return null; // Return null if priceValue is undefined
                        }).filter(price => !isNaN(price)); // Filter out NaN values
                        allPrices = allPrices.concat(prices);
                    },
                });
            }

            if (allPrices.length > 0) {
                const highest = Math.max(...allPrices);
                const lowest = Math.min(...allPrices);
                const average = (allPrices.reduce((sum, price) => sum + price, 0) / allPrices.length).toFixed(2);
                setPriceStats({ highest, lowest, average });
            }
        };

        fetchData();
    }, [selectedSite]);

    return (
        <div className="flex w-screen">
            {/* Sidebar */}
            <Sidebarhandle />

            {/* Main Content */}
            <div className="w-full 2xl:w-4/5 2xl:ms-0 ms-[5%] bg-[#EFEFEF] min-h-screen">
                <div className='p-5 px-8'>
                    <Toppic />
                    <div className="p-4 flex gap-4 ">
                        <Dropdown1
                            list={siteNames}
                            defaultname={'Site'}
                            onChange={(site) => setSelectedSite(site)}
                        />
                    </div>
                    <div className="p-4 h-full">
                        {/* Pass all CSV files for the selected site */}
                        <TableShow csvFiles={csvFiles[selectedSite]} />
                    </div>
                    <div className="flex justify-between p-4">
                        {/* Price Information */}
                        <PriceInfo label="Precio más alto" value={`$${priceStats.highest}`} color="#26C0E2" />
                        <PriceInfo label="Precio más bajo" value={`$${priceStats.lowest}`} color="#FF6A77" />
                        <PriceInfo label="Precio medio" value={`$${priceStats.average}`} color="#FFD66B" />
                    </div>
                    <Bottomtitle />
                </div>
            </div>
        </div>
    );
}

const PriceInfo = ({ label, value, color }) => (
    <div className="flex">
        <div className={`py-2 px-4 rounded-full`} style={{ backgroundColor: color }}>{label}</div>
        <div className="py-2 px-4">{value}</div>
    </div>
);