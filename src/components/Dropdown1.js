// Dropdown1.js
import React from 'react';

const Dropdown1 = ({ list, defaultname, onChange }) => {
    return (
        <select
            className="border rounded-md p-2"
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>
                {defaultname}
            </option>
            {list.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default Dropdown1;