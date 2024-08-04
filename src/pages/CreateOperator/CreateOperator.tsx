import { useEffect, useState } from 'react';
import 'dayjs/locale/ru';
import '@mantine/dates/styles.css';

const CreateOperator = () => {
    const [OperatorID, setOperatorID] = useState('');
    const [spec, setspec] = useState('');
    const [operatorName, setOperatorName] = useState('');

    useEffect(() => {
        // Any side effects or initial data fetching
    }, []);

    return (
        <div className="h-full w-full p-10 flex flex-col gap-5 ">
            <div className="w-full h-[60%] flex justify-between gap-8">
                <div
                    className="w-[59%] h-full flex flex-col items-center justify-center text-3xl px-10 py-12 gap-4 font-medium"
                    style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
                >
                    <div className='flex flex-col items-center justify-center gap-16 w-full'>
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Operator Name"
                            value={operatorName}
                            onChange={(e) => setOperatorName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Operator ID"
                            value={OperatorID}
                            onChange={(e) => setOperatorID(e.target.value)}
                        />
                        <input
                            type="text"
                            className="border-b-[2px] font-medium border-gray-300 outline-0 text-lg"
                            placeholder="Enter Specification"
                            value={spec}
                            onChange={(e) => setspec(e.target.value)}
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
                                className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-[#473fd3] hover:bg-[#7a89e0] mb-12"
                            >
                                Scan Operator QR
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOperator