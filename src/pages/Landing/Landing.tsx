import React from 'react';
import { useContext, useEffect } from 'react';
import LandingImage from '../../../public/landing.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';
const Landing = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log(user);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/machines');
            return;
        }
    }, [user]);
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
            <div
                className="h-[50px] min-h-[50px] w-[100%] bg-[#ffffff] shadow-xl px-10 flex justify-between items-center z-10"
                style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
            >
                <h1 className="font-extrabold text-2xl text-[#7272f1]">
                    INSPTRACK
                </h1>
            </div>
            <div className="h-full w-full flex flex-row p-12">
                {' '}
                <div className="h-full w-1/2 flex items-center">
                    <img className="h-[90%] min-w-[900px]" src={LandingImage} alt="" />
                </div>
                <div className="h-full w-1/2 flex flex-col items-end font-extrabold text-[5rem] gap-[60px]">
                    <div>
                        {' '}
                        <h1 className="text-right">WELCOME TO</h1>
                        <p className="text-[3rem] text-right px-1">InspTrack</p>
                    </div>

                    <div className="flex flex-col gap-4 items-end w-[30%] mt-12">
                        {' '}
                        <div
                            className="cursor-pointer text-lg font-semibold bg-black text-white rounded h-[60px] justify-center items-center flex w-[200px]"
                            onClick={() => {
                                window.location.href = '/register';
                            }}
                        >
                            Sign Up
                        </div>
                        <p className=" text-xl font-bold">or</p>
                        <div className="cursor-pointer text-lg font-semibold bg-black text-white rounded h-[60px] justify-center items-center flex w-[300px]"
                            onClick={() => {
                                window.location.href = '/login';
                            }}>
                            Already Have an Account ?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Landing;