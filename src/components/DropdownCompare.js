import React from 'react';

const DropdownCompare = ({ items, selectedItem, onSelect }) => {
    return (
        <select
            value={selectedItem}
            onChange={(e) => onSelect(e.target.value)}
            className="border rounded p-2"
        >
            <option value="" disabled>Seleccione un producto</option>
            {items.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default DropdownCompare;