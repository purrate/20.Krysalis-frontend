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
            <Modal opened={opened} onClose={close} title="Confirmation" centered>
                <div>
                    <div>Are you sure you want to create this process?</div>
                    <div className="flex mt-3 px-2 text-white justify-between items-center">
                        <div>
                            <button
                                onClick={() => {
                                    close();
                                    handleCreateProcess();
                                }}
                                className="bg-customBlue py-1 px-4 rounded-md hover:bg-[#6a7ed6] transition-all"
                            >
                                YES
                            </button>
                        </div>
                        <div className="bg-[#e13f33] py-1 px-4 rounded-md hover:bg-[#fb5d52] active:bg-[#bb4138] transition-all">
                            <button onClick={close}>NO</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="w-full h-[60%] flex justify-between gap-8">
                <div
                    className="w-[59%] h-full flex flex-col text-3xl px-10 py-12 gap-4 font-medium"
                    style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
                >
                    <div className='flex gap-4 mb-4'>
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Process Name"
                            value={operationName}
                            onChange={(e) => setOperationName(e.target.value)}
                        />

                    </div>

                    <div className='flex gap-4 mb-4'>
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Part No"
                            value={partNo}
                            onChange={(e) => setPartNO(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Part Name"
                            value={partName}
                            onChange={(e) => setPartName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Machine No"
                            value={machineNo}
                            onChange={(e) => setMachineNo(e.target.value)}
                        />

                    </div>
                    <div className='flex gap-4 mb-4'>
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Machine Name"
                            value={machineName}
                            onChange={(e) => setMachineName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Drawing Issue No"
                            value={drawingIssueNo}
                            onChange={(e) => setDrawingIssueNo(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Operation No"
                            value={operationNo}
                            onChange={(e) => setOperationNo(e.target.value)}
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
                                Scan Process QR
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[50%] w-full flex gap-8 flex-row">
                <div
                    className="h-full w-[60%] px-10 py-5 overflow-hidden"
                    style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
                >
                    <div className="flex justify-between">
                        <DatesProvider
                            settings={{
                                locale: 'en',
                                firstDayOfWeek: 0,
                                weekendDays: [0],
                                timezone: 'UTC',
                            }}
                        >
                            <DatePickerInput
                                label="Start date"
                                placeholder="Pick today's Date"
                                value={date}
                                styles={{
                                    label: {
                                        color: '#7272f1',
                                        fontWeight: 'bold',
                                    },
                                }}
                                onChange={(selectedDate) => setDate(selectedDate)}
                            />
                        </DatesProvider>
                        <Select
                            label="Shift"
                            placeholder="Select shift"
                            data={[
                                { value: 'morning', label: 'Morning' },
                                { value: 'afternoon', label: 'Afternoon' },
                                { value: 'night', label: 'Night' },
                            ]}
                            styles={{
                                label: {
                                    color: '#7272f1',
                                    fontWeight: 'bold',
                                },
                            }}
                            value={shift}
                            onChange={(selectedShift) => setShift(selectedShift)}
                        />
                    </div>
                    <div className="flex flex-row gap-5 mt-4">
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Material"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        />
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Diameter 1"
                            value={diameter_1}
                            onChange={(e) => setDiameter_1(e.target.value)}
                        />
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Diameter 2"
                            value={diameter_2}
                            onChange={(e) => setDiameter_2(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row gap-5 mt-4">
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Diameter 3"
                            value={diameter_3}
                            onChange={(e) => setDiameter_3(e.target.value)}
                        />
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Diameter 4"
                            value={diameter_4}
                            onChange={(e) => setDiameter_4(e.target.value)}
                        />
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Length 1"
                            value={length_1}
                            onChange={(e) => setLength_1(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row gap-5 mt-4">
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Length 2"
                            value={length_2}
                            onChange={(e) => setLength_2(e.target.value)}
                        />
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Length 3"
                            value={length_3}
                            onChange={(e) => setLength_3(e.target.value)}
                        />
                        <input
                            type="number"
                            className="border-b-[2px] font-medium border-gray-300 outline-0"
                            placeholder="Diameter"
                            value={diameter}
                            onChange={(e) => setDiameter(e.target.value)}
                        />
                    </div>
                </div>
                <div className="h-full justify-between w-[40%] flex flex-col">
                    <div
                        className="h-[100%] flex justify-center items-center w-full px-10 py-5 overflow-hidden"
                        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
                    >
                        <div>
                            <div
                                style={{ boxShadow: '0px 10px 30px rgba(100, 100, 250, 0.5)' }}
                                onClick={open}
                                className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-[#473fd3] hover:bg-[#7a89e0]"
                            >
                                Create Process
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProcess;
