import axios from "axios";
import { api } from "../api";

export const getAllUsers = async () => {
    const response = await api.get("/get-all-users");
    return response.data;
}