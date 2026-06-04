import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="h-full w-full flex items-center justify-center ">

            <form className=" w-100 p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(34,211,238,0.15)] text-white ">

                <div className="text-center mb-8">
                    <h1 className=" text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">
                        Welcome Back
                    </h1>

                    <p className="text-gray-400 mt-2">
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
                        className=" w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all "
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
                        className=" w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all "
                    />
                </div>

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
                    className=" w-full py-3 rounded-xl font-semibold bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 active:scale-95 "
                >
                    Sign In
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