import React from 'react';
import ProcessCard from '../../component/ProcessCard/ProcessCard';
import { useNavigate } from 'react-router-dom';

const Processes = () => {
    const navigate = useNavigate();
    const processes = [
        {
            id: 1,
            partNo: 101,
            partName: 'Part A',
            machineName: 'Machine X',
            drawingIssueNo: 202,
            operationNo: 1,
            operationName: 'Machining',
            materialDetails: 303,
        },
        {
            id: 2,
            partNo: 102,
            partName: 'Part B',
            machineName: 'Machine Y',
            drawingIssueNo: 203,
            operationNo: 2,
            operationName: 'Cutting',
            materialDetails: 304,
        },
        {
            id: 1,
            partNo: 101,
            partName: 'Part A',
            machineName: 'Machine X',
            drawingIssueNo: 202,
            operationNo: 1,
            operationName: 'Machining',
            materialDetails: 303,
        },
        {
            id: 2,
            partNo: 102,
            partName: 'Part B',
            machineName: 'Machine Y',
            drawingIssueNo: 203,
            operationNo: 2,
            operationName: 'Cutting',
            materialDetails: 304,
        },
        {
            id: 2,
            partNo: 102,
            partName: 'Part B',
            machineName: 'Machine Y',
            drawingIssueNo: 203,
            operationNo: 2,
            operationName: 'Cutting',
            materialDetails: 304,
        },
    ];
    return (
        <div className="h-full w-full p-10">
            <div
                className="h-[100%] w-full px-[40px] flex flex-col overflow-scroll pt-8"
                style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
            >
                <div className='flex justify-between'>
                    <p className='ml-12 text-3xl font-bold'>Currently Registered Processes</p>
                    <div>
                        <div
                            style={{ boxShadow: '0px 10px 30px rgba(100, 100, 250, 0.5)' }}
                            onClick={() => {
                                navigate('/createprocesses');
                            }}
                            className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-[#473fd3] hover:bg-[#7a89e0]"
                        >
                            Create a Process
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap gap-16 gap-y-8 p-12">
                    {processes.map((process) => (
                        <ProcessCard key={process.id} process={process} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Processes;