import axios from "axios";
import { api } from "./api.js";

// Get all roles
export const getAllRoles = async () => {
    const response = await api.get("/all-roles");
    return response.data;
}

// Update Role
export const updateRole = async ( roleId,newRoleName, newRoleDescription) => {
    const response = await api.put(`/update-role/${roleId}`,{
        name: newRoleName,
        description: newRoleDescription
    });

    return response.data;
}

// Create Role
export const createRole = async (roleName, roleDescription) => {
    const response = await api.post('/create-role',{
        name: roleName,
        description: roleDescription
    });

    return response.data;
}