import OperatorCard from '../../component/OperatorCard/OperatorCard';
import { useNavigate } from 'react-router-dom';


const Operator = () => {
    const navigate=useNavigate()
    const operators = [
        {
            id: 210,
            name: 'John Doe',
            machine: 'Milling',
            specification: ''
        },
        {
            id: 326,
            name: 'Jane Doe',
            machine: 'Grinding',
            specification: ''
        },
        {
            id: 210,
            name: 'John Doe',
            machine: 'Milling',
            specification: ''
        },
        {
            id: 326,
            name: 'Jane Doe',
            machine: 'Grinding',
            specification: ''
        },
        {
            id: 210,
            name: 'John Doe',
            machine: 'Milling',
            specification: ''
        },
    ];
    return (
        <div className="h-full w-full p-10">
            <div
                className="h-[100%] w-full px-[40px] flex flex-col overflow-scroll pt-8"
                style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
            >
                <div className='flex justify-between'>
                    <p className='ml-12 text-3xl font-bold'>Currently Registered Operators</p>
                    <div>
                        <div
                            style={{ boxShadow: '0px 10px 30px rgba(100, 100, 250, 0.5)' }}
                            onClick={() => {
                                navigate('/createoperator');
                            }}
                            className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-[#473fd3] hover:bg-[#7a89e0]"
                        >
                            Create an Operator
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap gap-16 gap-y-8 p-12">
                    {operators.map((operator) => (
                        <OperatorCard key={operator.id} operator={operator} />
                    ))}
                </div>
            </div>
        </div>
    );


};

export default Operator;
