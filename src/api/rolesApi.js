import axios from "axios";
import { api } from "./api";

// Get all roles
export const getAllRoles = async () => {
    const response = await api.get("/all-roles");
    return response.data;
}

export const updateRole = async ( roleId,newRoleName, newRoleDescription) => {
    const response = await api.put(`/update-role/${roleId}`,{
        newRoleName,
        newRoleDescription
    });

    return response.data;
}