
import { FaChartPie, FaChartBar, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

export default function SidebarSmall() {
    return (
        <aside className="fixed bg-white top-0 left-0 h-screen text-[#737791] pt-4 font-sans">
            <div className="text-2xl font-bold mb-6 flex px-3 pb-4">
                <div>
                    <img
                        src='./logo.png'
                        alt='LOGO'
                        width={45}
                        height={45}
                    />
                </div>
            </div>
            <nav>
                <ul className="space-y-2 text-lg mx-1">
                    <li>
                        <a href="/" className="flex justify-center py-2 px-2 hover:bg-[#5D5FEF] hover:text-white rounded-lg transition duration-200 shadow-2xl">
                            <FaChartPie/>
                        </a>
                    </li>
                    <li>
                        <a href="/scrapy" className="flex justify-center py-2 px-2 hover:bg-[#5D5FEF] hover:text-white rounded-full transition duration-200">
                            <FaChartBar/>
                        </a>
                    </li>
                    <li>
                        <a href="/analysis" className="flex justify-center py-2 px-2 hover:bg-[#5D5FEF] hover:text-white rounded-full transition duration-200">
                            <FaShoppingCart/>
                        </a>
                    </li>
                    <li>
                        <a href="/compare" className="flex justify-center py-2 px-2 hover:bg-[#5D5FEF] hover:text-white rounded-full transition duration-200">
                            <FaShoppingBag/>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}