
import { FaChartPie, FaChartBar, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <aside className="fixed lg:w-80 bg-white top-0 left-0 h-screen text-[#737791] p-8 font-sans">
            <div className="text-2xl items-center font-bold mb-6 flex px-3 pb-4">
                <div>
                    <img
                        src='./logo.png'
                        alt='LOGO'
                        width={45}
                        height={45}
                    />
                </div>
                <div className='ms-2 ps-4 pt-1 text-3xl text-black'>
                    <img
                    src='./logo.jpg'
                    alt='logo'
                    width={100}
                    />
                </div>
            </div>
            <nav>
                <ul className="space-y-2 text-lg me-2">
                    <li>
                        <a href="/" className="flex items-center py-2 px-4 hover:bg-[#5D5FEF] hover:text-white rounded-lg transition duration-200 shadow-2xl">
                            <FaChartPie className="mr-3" />
                            Panel
                        </a>
                    </li>
                    <li>
                        <a href="/scrapy" className="flex items-center py-2 px-4 hover:bg-[#5D5FEF] hover:text-white rounded-full transition duration-200">
                            <FaChartBar className="mr-3" />
                            Producto Scrapy
                        </a>
                    </li>
                    <li>
                        <a href="/analysis" className="flex items-center py-2 px-4 hover:bg-[#5D5FEF] hover:text-white rounded-full transition duration-200">
                            <FaShoppingCart className="mr-3" />
                            Análisis de productos
                        </a>
                    </li>
                    <li>
                        <a href="/compare" className="flex items-center py-2 px-4 hover:bg-[#5D5FEF] hover:text-white rounded-full transition duration-200">
                            <FaShoppingBag className="mr-3" />
                            Comparar productos
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}