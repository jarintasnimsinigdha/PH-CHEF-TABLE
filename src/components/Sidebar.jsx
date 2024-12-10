import React from 'react';
import Cook from './cook'; // Ensure the import matches the file name casing
import Prepares from './Prepares';

const Sidebar = ({ cooks, handlePreparing, handleRemoveCooks, prepares, totalTime, totalCalories }) => {
    return (
        <div>
            <table className="table table-fixed text-base font-normal text-[#282828B3]">
                <thead>
                    <tr>
                        <th className="text-lg text-black">Name</th>
                        <th className="text-lg text-black">Time</th>
                        <th className="text-lg text-black">Calories</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {cooks.map(cook => (
                        <tr key={cook.id}>
                            <Cook cook={cook} handlePreparing={handlePreparing} handleRemoveCooks={handleRemoveCooks} />
                        </tr>
                    ))}
                </tbody>
            </table> 

            <Prepares prepares={prepares} />

            <div className="flex gap-4 justify-end text-base font-normal text-[#282828B3] mt-5">
                <h2>Total Time: {totalTime} minutes</h2>
                <h2>Total Calories: {totalCalories} calories</h2>
            </div> 
        </div>
    );
};

export default Sidebar;