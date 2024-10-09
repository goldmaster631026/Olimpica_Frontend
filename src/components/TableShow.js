import React, { useEffect, useState } from 'react';

const TableShow = ({ csvFiles }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(csvFiles.map(file => fetch(file)));

        // Check if all responses are ok
        responses.forEach((response, index) => {
          if (!response.ok) throw new Error(`Could not fetch ${csvFiles[index]}`);
        });

        const allData = [];
        for (const response of responses) {
          const text = await response.text();
          const rows = text.split('\n').map(row => row.split(','));
          allData.push(...rows.slice(1)); // Concatenate rows into allData
        }

        setData(allData); // Set the combined data
      } catch (error) {
        console.error('Error fetching the CSV data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [csvFiles]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>; // Display error message

  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th>Marca de tiempo</th>
            <th>Marca</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((value, idx) => (
                <td key={idx} className='text-center'>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableShow;