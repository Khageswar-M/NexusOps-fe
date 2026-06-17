import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth/authApi';
import { setLoggedIn } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import {showSuccess, showWarning, showError} from '../../utils/alert.js';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logging, setLogging] = useState(false);
    const [error, setError] = useState('');
    const applicationName = useSelector((state) => state.app.appName);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLogging(true);
        try {
            const data = await loginUser(email, password);

            localStorage.setItem("user", JSON.stringify(data));
            dispatch(setLoggedIn(true));
            navigate("/dashboard")
            showSuccess(
                "Logged In",
                "You logged in successFully!"
            );
        } catch (error) {
            console.error(error.response?.data);
            setError(error.response?.data?.message || "Server is not responding");
            if (error.code === "ERR_NETWORK") {
                showError(
                    "Server Offline",
                    "Cannot connect to the server."
                );
                return;
            }

            showError(
                "Error",
                error.response?.data?.message || "Something went wrong!"
            );
            
        } finally {
            setLogging(false);
        }
    }

    const emailOnChange = (e) => {
        setEmail(e.target.value);
        setError('');
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value);
        setError('');
        
    }

    return (
        <div className="h-full w-full flex items-center justify-center ">

            <form
                className=" w-100 p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(34,211,238,0.15)] text-white "
                onSubmit={handleLogin}
            >

                <div className="text-center mb-8">
                    <h1 className=" text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">
                        {applicationName}
                    </h1>

                    <p className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">
                        Sign in to continue
                    </p>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-300"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        onChange={(e) => emailOnChange(e)}
                        value={email}
                        className={` w-full px-4 py-3 rounded-xl bg-white/5 border  outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all 
                            ${error.trim().length > 0 ? "border-red-700" : "border-gray-700"}
                            `}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm text-gray-300"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        onChange={(e) => passwordOnChange(e)}
                        value={password}
                        className={` w-full px-4 py-3 rounded-xl bg-white/5  outline-none  transition-all border focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                            ${error.trim().length > 0 ? "border-red-700" : "border-gray-700 "}
                            `}
                        required
                    />
                </div>


                {
                    error.trim().length > 0 && (
                        <div>
                            <label className='text-sm text-red-600'>{error}</label>
                        </div>
                    )
                }


                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center gap-2 text-sm text-gray-400">
                        <input type="checkbox" />
                        Remember me
                    </label>

                    <Link
                        to="/auth/forget-password"
                        className="text-cyan-400 hover:text-cyan-300 text-sm hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={logging}
                    className=" w-full py-3 rounded-xl font-semibold  transition-all duration-300 active:scale-95 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 "
                >
                    {
                        logging ? (<CircularProgress size={20} color='#fffff' />) : "Sign In"
                    }
                </button>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Don't have an account?
                    <Link
                        to="/auth/sign-up"
                        className="text-cyan-400 cursor-pointer ml-1 hover:underline">
                        Sign Up
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default LoginPage;