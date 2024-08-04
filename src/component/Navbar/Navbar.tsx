import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const UserAvatar = () => {
        if (user?.user?.username == undefined) return <></>;
        const firstLetter = user.user.username.charAt(0).toUpperCase();
        return (
            <Link to="/myprofile">
                <div className="h-[40px] w-[40px] rounded-[50%] flex flex-row justify-center items-center bg-customBlue">
                    <p className="text-white font-semibold">{firstLetter}</p>
                </div>
            </Link>
        );
    };

    const currentUrl = window.location.href.toString();
    const urlParts = currentUrl.split('/');
    const extractedString = urlParts[3];
    const [current, setCurrent] = useState('');

    console.log(extractedString);

    useEffect(() => {
        if (extractedString.startsWith('home')) {
            setCurrent('HOME');
        }
        if (extractedString.startsWith('machines')) {
            setCurrent('Machines');
        }
        if (extractedString.startsWith('processes')) {
            setCurrent('Processes');
        }
    }, [extractedString]);


    return (
        <div className="h-[100vh] w-[100vw] overflow-hidden flex flex-col">
            <div
                className="h-[80px] min-h-[80px] w-[100%] bg-[#ffffff] shadow-xl px-10 flex justify-between items-center z-10"
                style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
            >
                <h1 className="font-extrabold text-4xl text-[#7272f1]">
                    InspTrack
                </h1>
                <div className="flex flex-row items-center gap-[20%]">
                    <UserAvatar />
                </div>
            </div>
            <div className="h-[calc(100%-80px)] w-full flex flex-row">
                <div className="h-[100%] w-[15%] min-w-[200px] bg-[#ffffff] px-10 pt-[40px] pb-[80px] text-left">
                    <h1 className="font-bold text-2xl mb-5">Dashboard</h1>
                    <div className="h-full w-full flex flex-col justify-between text-left">
                        <div className="w-full h-fit flex flex-col gap-3">
                            <div
                                className={`h-[40px] w-full flex items-center cursor-pointer font-medium ${current == 'Home'
                                        ? 'text-[#7272f1]'
                                        : 'text-[#838383]'
                                    }`}
                                onClick={(e) => {
                                    window.location.href = '/home';
                                    const target = e.target as HTMLElement;
                                    console.log(target.innerHTML);
                                    setCurrent(`${target.innerHTML}`);
                                }}
                            >
                                Home
                            </div>
                            <div
                                className={`h-[40px] w-full flex items-center cursor-pointer  font-medium ${current == 'Machines'
                                        ? 'text-[#7272f1]'
                                        : 'text-[#838383]'
                                    }`}
                                style={{ whiteSpace: 'nowrap' }}
                                onClick={(e) => {
                                    window.location.href = '/machines';
                                    const target = e.target as HTMLElement;
                                    setCurrent(`${target.innerHTML}`);
                                }}
                            >
                                Machine Master
                            </div>
                            <div
                                className={`h-[40px] w-full flex items-center cursor-pointer  font-medium ${current == 'processes'
                                        ? 'text-[#7272f1]'
                                        : 'text-[#838383]'
                                    }`}
                                style={{ whiteSpace: 'nowrap' }}
                                onClick={(e) => {
                                    window.location.href = '/processes';
                                    const target = e.target as HTMLElement;
                                    setCurrent(`${target.innerHTML}`);
                                }}
                            >
                                Process Master
                            </div>
                            <div
                                className={`h-[40px] w-full flex items-center cursor-pointer  font-medium ${current == 'processes'
                                        ? 'text-[#7272f1]'
                                        : 'text-[#838383]'
                                    }`}
                                style={{ whiteSpace: 'nowrap' }}
                                onClick={(e) => {
                                    window.location.href = '/operator';
                                    const target = e.target as HTMLElement;
                                    setCurrent(`${target.innerHTML}`);
                                }}
                            >
                                Operation Master
                            </div>
                            
                        </div>
                        <div className="w-full h-fit  flex flex-col gap-5">
                            <div className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium">
                                Help and Support
                            </div>{' '}
                            <div
                                className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium"
                                onClick={() => {
                                    localStorage.removeItem('user');
                                    navigate('/landing');
                                }}
                            >
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Navbar;