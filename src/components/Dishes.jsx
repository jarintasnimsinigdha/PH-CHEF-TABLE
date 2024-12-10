import React, { useState, useEffect } from 'react';
import Dish from './Dish'; // Ensure the import matches the file name casing

const Dishes = ({ handleWantToCook }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {items.map(item => (
                    <Dish key={item.id} item={item} handleWantToCook={handleWantToCook} />
                ))}
            </div>
        </div>
    );
}

export default Dishes;