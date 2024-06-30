import React from 'react';
import MachineCard from '../../component/MachineCard/MachineCard';

const Machines = () => {
    const machines = [
        {
            id: 1,
            name: 'Traub Machine',
            process: 'Milling',
            number: 123,
            difficulty: 'medium',
        },
        {
            id: 2,
            name: 'CNC Machine',
            process: 'Turning',
            number: 456,
            difficulty: 'hard',
        },
        {
            id: 1,
            name: 'Traub Machine',
            process: 'Milling',
            number: 123,
            difficulty: 'medium',
        },
        {
            id: 2,
            name: 'CNC Machine',
            process: 'Turning',
            number: 456,
            difficulty: 'hard',
        },
        {
            id: 2,
            name: 'CNC Machine',
            process: 'Turning',
            number: 456,
            difficulty: 'hard',
        },
    ];
    return (
        <div className="h-full w-full p-10">
            <div
                className="h-[100%] w-full px-[40px] flex flex-col overflow-scroll pt-8"
                style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
            >
                <p className='ml-12 text-3xl font-bold'>Machines</p>
                <div className="w-full flex flex-wrap gap-16 gap-y-8 p-12">
                    {machines.map((machine) => (
                        <MachineCard key={machine.id} machine={machine} />
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Machines;


