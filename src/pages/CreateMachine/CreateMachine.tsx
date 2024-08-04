import { UserContext } from '../../context/UserContextProvider';
import { useContext, useEffect, useRef, useState } from 'react';
import { ActionIcon, Modal, NumberInput, Select, Switch, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import toast from 'react-hot-toast';
import { IconClock } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import {
    DatesProvider,
    MonthPickerInput,
    DatePickerInput,
} from '@mantine/dates';
import 'dayjs/locale/ru';
import '@mantine/dates/styles.css';

const CreateProcess = () => {
    // const { user, setUser } = useContext(UserContext);
    const [partNo, setPartNO] = useState('');
    const [partName, setPartName] = useState('');
    const [machineNo, setMachineNo] = useState('');
    const [machineName, setMachineName] = useState('');
    const [drawingIssueNo, setDrawingIssueNo] = useState('');
    const [operationNo, setOperationNo] = useState('');
    const [operationName, setOperationName] = useState('');

    const [material, setMaterial] = useState('');
    const [diameter_1, setDiameter_1] = useState('');
    const [diameter_2, setDiameter_2] = useState('');
    const [diameter_3, setDiameter_3] = useState('');
    const [diameter_4, setDiameter_4] = useState('');
    const [length_1, setLength_1] = useState('');
    const [length_2, setLength_2] = useState('');
    const [length_3, setLength_3] = useState('');
    const [diameter, setDiameter] = useState('');

    const [opened, { open, close }] = useDisclosure(false);
    const [date, setDate] = useState<Date | null>(null);
    const [shift, setShift] = useState('');

    const navigate = useNavigate();

    const handleCreateProcess = async () => {
        const processData = {
            partNo,
            partName,
            machineNo,
            machineName,
            drawingIssueNo,
            operationNo,
            operationName,
            material,
            characteristics: {
                diameter_1,
                diameter_2,
                diameter_3,
                diameter_4,
                length_1,
                length_2,
                length_3,
                diameter,
            },
            date,
            shift,
        };

        // try {
        //     // Make API call to save the process data
        //     const response = await fetch('/api/createProcess', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(processData),
        //     });

        //     if (response.ok) {
        //         toast.success('Process created successfully!');
        //         navigate('/processes'); // Redirect to processes page
        //     } else {
        //         throw new Error('Failed to create process');
        //     }
        // } catch (error) {
        //     toast.error(error.message);
        // }
    };

    useEffect(() => {
        // Any side effects or initial data fetching
    }, []);

    const ref = useRef<HTMLInputElement>(null);

    const pickerControl = (
        <ActionIcon
            variant="subtle"
            color="gray"
            onClick={() => ref.current?.showPicker()}
        >
            <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </ActionIcon>
    );

    return (
        <div className="h-full w-full p-10 flex flex-col gap-5 ">
            <div className="w-full h-[60%] flex justify-between gap-8">
                <div
                    className="w-[59%] h-full flex flex-col text-3xl px-10 py-12 gap-4 font-medium"
                    style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
                >
                    <div className='flex flex-col items-center justify-center gap-12 mb-4 w-full'>
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Machine Name"
                            value={operationName}
                            onChange={(e) => setOperationName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Machine No"
                            value={partNo}
                            onChange={(e) => setPartNO(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Description"
                            value={partName}
                            onChange={(e) => setPartName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Specification"
                            value={machineNo}
                            onChange={(e) => setMachineNo(e.target.value)}
                        />

                    </div>

                </div>
                <div className="h-full justify-between w-[40%] flex flex-col">
                    <div
                        className="h-[100%] flex justify-center items-center w-full px-10 py-5 overflow-hidden"
                        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
                    >
                        <div className='flex flex-col'>
                            <div
                                style={{ boxShadow: '0px 10px 30px rgba(100, 100, 250, 0.5)' }}
                                onClick={open}
                                className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-[#473fd3] hover:bg-[#7a89e0] mb-12"
                            >
                                Scan Machine QR
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProcess;