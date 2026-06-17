import axios from "axios";
import { api } from "./api";

// Get all roles
export const getAllRoles = async () => {
    const response = await api.get("/all-roles");
    return response.data;
}