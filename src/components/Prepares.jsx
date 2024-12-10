import React from 'react';
import Prepare from './prepare';

const Prepares = ({ prepares = [] }) => {
    if (!prepares || !Array.isArray(prepares)) {
        return <div>No prepares available.</div>;
    }

    return (
        <div>
            <h1 className="font-bold text-2xl pb-4">Currently Cooking: {prepares.length}</h1>
            <hr />
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
                    {prepares.map(prepare => (
                        <tr key={prepare.id}>
                            <Prepare prepare={prepare} />
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
};

export default Prepares;