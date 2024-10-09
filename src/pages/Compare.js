import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import Bottomtitle from "../components/Bottomtitle";
import Sidebarhandle from "../components/Sidebarhandle";
import Toppic from "../components/Toppic";
import Papa from 'papaparse';
import DropdownCompare from "../components/DropdownCompare";

export default function Compare() {
    const siteNames = ['Makro', 'Olimpica', 'D1', 'Exito'];
    const productItems = ['Arroz', 'Aceite', 'Leche', 'Detergente']; // Example product items
    const [priceStats, setPriceStats] = useState({});
    const [selectedProduct, setSelectedProduct] = useState('');
    const [csvFiles, setCSVFiles] = useState({})

    const baseUrl = 'http://127.0.0.1:5000/csv/';

    // const csvFiles = {
    //     Olimpica: Array.from({ length: 4 }, (_, i) => `${baseUrl}olimpica_${i}.csv`),
    //     Makro: Array.from({ length: 4 }, (_, i) => `${baseUrl}makro_${i}.csv`),
    //     D1: Array.from({ length: 4 }, (_, i) => `${baseUrl}D1_${i}.csv`),
    //     Exito: Array.from({ length: 4 }, (_, i) => `${baseUrl}exito_${i}.csv`),
    // };
    useEffect(() => {
        switch (selectedProduct) {
            case "Arroz":
                setCSVFiles({
                    Olimpica: [`${baseUrl}olimpica_0.csv`],
                    Makro: [`${baseUrl}makro_0.csv`],
                    D1: [`${baseUrl}D1_0.csv`],
                    Exito: [`${baseUrl}exito_0.csv`],
                })
                break;
            case "Aceite":
                setCSVFiles({
                    Olimpica: [`${baseUrl}olimpica_1.csv`],
                    Makro: [`${baseUrl}makro_1.csv`],
                    D1: [`${baseUrl}D1_1.csv`],
                    Exito: [`${baseUrl}exito_1.csv`],
                })
                break;
            case "Leche":
                setCSVFiles({
                    Olimpica: [`${baseUrl}olimpica_2.csv`],
                    Makro: [`${baseUrl}makro_2.csv`],
                    D1: [`${baseUrl}D1_2.csv`],
                    Exito: [`${baseUrl}exito_2.csv`],
                })
                break;
            case "Detergente":
                setCSVFiles({
                    Olimpica: [`${baseUrl}olimpica_3.csv`],
                    Makro: [`${baseUrl}makro_3.csv`],
                    D1: [`${baseUrl}D1_3.csv`],
                    Exito: [`${baseUrl}exito_3.csv`],
                })
                break;
            default:
                break;
        }
    },[selectedProduct])

    useEffect(() => {
        const fetchData = async () => {
            if (!selectedProduct) return; // Prevent fetching if no product is selected
            
            const stats = {};
            for (const site of siteNames) {
                const files = csvFiles[site]; // Get files for the specific site
                
                // Check if files is an array
                if (!Array.isArray(files)) {
                    console.error(`No se encontraron archivos para el sitio: ${site}`);
                    continue; // Skip this iteration
                }
    
                let allPrices = [];
    
                for (const file of files) {
                    try {
                        const response = await fetch(file);
                        const text = await response.text();
                        Papa.parse(text, {
                            header: true,
                            complete: (results) => {
                                const prices = results.data.map(row => {
                                    const priceValue = row.Price;
                                    return priceValue ? parseFloat(priceValue.replace(/[$,]/g, '')) : null;
                                }).filter(price => price !== null);
                                allPrices = allPrices.concat(prices);
                            },
                        });
                    } catch (error) {
                        console.error(`Error fetching data from ${file}:`, error);
                    }
                }
    
                if (allPrices.length > 0) {
                    const highest = Math.max(...allPrices);
                    const lowest = Math.min(...allPrices);
                    const average = (allPrices.reduce((sum, price) => sum + price, 0) / allPrices.length).toFixed(2);
                    stats[site] = { highest, lowest, average };
                }
            }
    
            setPriceStats(stats);
        };
    
        fetchData();
    }, [selectedProduct, csvFiles]);


    return (
        <>
            <div className="flex w-screen">
                {/* Sidebar */}
                <Sidebarhandle />

                {/* Main Content */}
                <div className="w-full 2xl:w-4/5 2xl:ms-0 ms-[5%] bg-[#EFEFEF] min-h-screen">
                    <div className='p-5 px-8'>
                        <Toppic />
                        <div className="p-4 flex gap-4 ">
                            {/* Dropdown for selecting product */}
                            <DropdownCompare
                                items={productItems}
                                selectedItem={selectedProduct}
                                onSelect={setSelectedProduct}
                            />
                        </div>
                        <div className="p-4">
                            {/* Pass the priceStats to BarChart */}
                            <BarChart value={priceStats} />
                        </div>
                        <Bottomtitle />
                    </div>
                </div>
            </div>
        </>
    );
}