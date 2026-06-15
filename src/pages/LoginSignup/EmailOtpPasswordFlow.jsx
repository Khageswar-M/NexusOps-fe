import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { register, resendOtp, resetPassword, verifyEmailOtp, verifyOtp } from "../../api/auth/authApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";


const EmailOtpPasswordFlow = ({ mode }) => {
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const applicationName = useSelector((state) => state.app.appName);

    // Send OTP to the valid email
    const handleSendOtp = async (e) => {
        e.preventDefault();
        if (email.trim().length == 0) return;
        // TODO:
        try {
            setLoading(true);
            const response = await verifyEmailOtp(email);
            console.log(response);
            

            if(response.success){
                setStep(2);
                toast.success(response.message);
            }else{
                toast.error(response.message);
            }
            
        } catch (error) {
            console.error(error.response?.data);
            toast.error(error.response?.data.message);
        } finally {
            setLoading(false);
        }
    };

    // Re-send OTP to the valid email
    const handleResendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setOtp(["", "", "", "", "", ""]);

        try {
            const response = await resendOtp(email);
            console.log(response.message);
            toast.success(response.message);
            setStep(2);
        } catch (error) {
            console.error(error.response?.data);
            toast.error(error.response?.data.response);
        }finally{
            setLoading(false);
        }
    }

    // Verify OTP
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
         setLoading(true);
        try {
            const response = await verifyOtp(email, otp.join(""));
            console.log(response.message);
            toast.success(response.message);
            setStep(3);
        } catch (error) {
            console.error(error.response?.data);
            toast.error(error.response?.data?.message ||
                error.response?.data?.response
            );
        }finally{
            setLoading(false);
        }

        
    };

    // Register User
    const handleCreateAccount = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        console.log(password);
        setLoading(true);

        try {
            const response = await register(email, password);
            console.log(response.message);
            toast.success(response.message);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data.message);
        }finally{
            setLoading(false);
        }
    };

    // Reset Password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            const response = await resetPassword(email, password);
            console.log(response);
            toast.success(response.message);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    // Increment OTP input focus to ONE
    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    }

    // Decrement OTP input focus to ONE
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    }
    

    


    return (
        <div className="h-full w-full flex items-center justify-center">

            <div
                className="w-105 p-8 rounded-2xl border border-cyan-500/20  bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(34,211,238,0.15)]  text-white "
            >

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">{applicationName}</h1>
                    <h1
                        className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent "
                    >
                        {
                            mode === "signup" ? "Create Account" : "Reset Password"
                        }
                    </h1>

                    <p className="text-gray-400 mt-2">
                        {
                            mode === "signup" ?
                                "Secure email verification" :
                                "Recover your account securely"
                        }
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center justify-center gap-2 mb-8">

                    <div
                        className={`w-4 h-4 rounded-full ${step >= 1 ? "bg-cyan-500" : "bg-gray-600"
                            }`}
                    />

                    <div
                        className={`h-1 w-12 ${step >= 2 ? "bg-cyan-500" : "bg-gray-600"
                            }`}
                    />

                    <div
                        className={`w-4 h-4 rounded-full ${step >= 2 ? "bg-cyan-500" : "bg-gray-600"
                            }`}
                    />

                    <div
                        className={`h-1 w-12 ${step >= 3 ? "bg-cyan-500" : "bg-gray-600"
                            }`}
                    />

                    <div
                        className={`w-4 h-4 rounded-full ${step >= 3 ? "bg-cyan-500" : "bg-gray-600"
                            }`}
                    />
                </div>

                {/* STEP 1 */}
                {step === 1 && (
                    <form onSubmit={mode === "signup" ? handleSendOtp : handleResendOtp}>
                        <h2 className="text-xl font-semibold mb-4">
                            Verify Email
                        </h2>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className=" w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all "
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className=" mt-6 w-full py-3 rounded-xl font-semibold bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all "
                        >
                            {
                                loading ? <CircularProgress color="#fffff" size={20} /> : "Send OTP"
                            }
                        </button>

                        <p className="text-center text-gray-400 mt-6 text-sm">
                            Already have an account?
                            <Link
                                to="/auth/login"
                                className="text-cyan-400 cursor-pointer ml-1 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <form onSubmit={handleVerifyOtp}>
                        <div className="flex flex-row justify-between items-center px-1">
                            <h2 className="text-xl font-semibold mb-4">
                                Verify OTP
                            </h2>


                            <p
                                onClick={() => setStep(1)}
                                className="text-cyan-400 inline-block cursor-pointer hover:underline">
                                Edit email
                            </p>
                        </div>

                        <div className="flex justify-center gap-3 mt-4">
                            {
                                otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        id={`otp-${index}`}
                                        type="number"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-12  h-12 text-center text-xl rounded-lg bg-white/5 border border-gray-700 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    />
                                ))
                            }
                        </div>

                        <button
                            onClick={(e) => handleResendOtp(e)}
                            disabled={loading}
                            className="text-cyan-400 inline-block cursor-pointer hover:underline float-end py-1">
                            Resend OTP
                        </button>

                        <button
                            type="submit"
                            className=" mt-6 w-full py-3 rounded-xl font-semibold bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all "
                        >
                            {
                                loading ? <CircularProgress color="#fffff" size={20} /> : "Verify OTP"
                            }
                        </button>
                    </form>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <form onSubmit={mode === "signup" ? handleCreateAccount : handleResetPassword}>
                        <h2 className="text-xl font-semibold mb-4">
                            Create Password
                        </h2>

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className=" w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all mb-4 "
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                            className=" w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all "
                        />

                        <button
                            type="submit"
                            className=" mt-6 w-full py-3 rounded-xl font-semibold bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all "
                        >
                            { loading ? <CircularProgress size={20} color="#ffff"/> :
                                mode === "signup" ? "Create Account" : "Reset Password"
                            }
                        </button>

                        <p className="text-center text-gray-400 mt-6 text-sm">
                            Already have an account?
                            <Link
                                to="/auth/login"
                                className="text-cyan-400 cursor-pointer ml-1 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EmailOtpPasswordFlow;