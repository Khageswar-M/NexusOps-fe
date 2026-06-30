import axios from "axios";
import { api } from "../api";

export const getAllUsers = async () => {
    const response = await api.get("/get-all-users");
    return response.data;
}

export const addUser = async (
    firstName,
    lastName,
    email,
    phoneNumber,
    department,
    roleIs,
    statusIs
) => {
    const response = await api.post("/add-user",{
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        department: department,
        roleId: roleIs,
        status: statusIs
    });
    return response.data;
}