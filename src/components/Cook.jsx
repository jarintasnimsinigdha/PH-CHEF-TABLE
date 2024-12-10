import React from 'react';
import Sidebar from './Sidebar';

const Cook = ({ cook, handlePreparing, handleRemoveCooks }) => {
    if (!cook) {
        return <div>.</div>;
    }

    const { recipe_name, preparing_time, calories, recipe_id } = cook;
    return (
        <tr>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td>
                <button 
                    onClick={() => {
                        handleRemoveCooks(recipe_id);
                        handlePreparing(cook, preparing_time, calories, recipe_id);
                    }}
                    className="rounded-full bg-[#0BE58A] p-3 font-bold hover:bg-gray-200"
                >
                    Preparing
                </button>
            </td>
        </tr>
    );
};

export default Cook;