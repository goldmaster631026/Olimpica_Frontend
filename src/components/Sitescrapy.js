import React, { useState } from "react"


export default function Sitescrapy({ site, logo }) {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState("")
    
    const fetchData = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`http://localhost:5000/scrape/${site}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setState(result.message) // Log the result for debugging purposes
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Set loading to false when fetching is done
        }
    };
    // const siteNames = ['Makro', 'Olimpica', 'D1', 'Exito']
    return (
        <>
            <div className="bg-white flex justify-between items-center p-8 m-4 rounded-2xl">
                <div>
                    <img
                        src={logo}
                        alt="site"
                    />
                </div>
                <div className="w-20">{site}</div>
                <div>
                    <img
                        src="./Union.png"
                        alt="site"
                    />
                </div>
                <div>
                    <div>arroz, aceite, leche en polvo y</div>
                    <div>detergente líquido</div>
                </div>
                <div className="container max-w-[300px]">
                    {/* <div className="loader"></div> */}
                    {loading && <div className="loader"></div>} {/* Show loader only when loading */}
                    {!loading && (
                        <span className="text-green-600">{state}</span> // Success message
                    )}
                </div>
                <div>
                    <button className="button-state" onClick={fetchData}>
                        <span className="text">Obtener datos</span>
                    </button>
                </div>
            </div>
        </>
    )
}