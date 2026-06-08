import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true
})

export const loginUser = async (email, password) => {
    const response = await api.post("/login", {
        email,
        password
    });

    return response.data;
}

export const verifyEmailOtp = async (email) => {
    const response = await api.post("/verify-email",{
        email
    });
    return response.data;
};

export const verifyOtp = async (email, otp) => {
    const response = await api.post("/verify-otp",{
        email,
        otp
    });
    return response.data;
}

export const resendOtp = async (email) =>{
    const response = await api.post("/resend-otp", {email});

    return response.data;
}

export const register = async (email, password) => {
    const response = await api.post("/register", {
        email,
        password
    });

    return response.data;
}