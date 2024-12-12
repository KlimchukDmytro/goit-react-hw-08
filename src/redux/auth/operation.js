import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://connections-api.goit.global"
})

export const registration = createAsyncThunk("auth/registration", async (credentials, thunkAPI) => {
    // credentials-данні входу
    try {
        const response = await api.post("/users/signup", credentials);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});