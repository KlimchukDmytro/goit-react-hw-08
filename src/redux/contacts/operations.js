import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token; 
    try {
      const response = await instance.get("/contacts", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", 
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token; 
    try {
      const response = await instance.post("/contacts", contact, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", 
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contId, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token; 

    try {
      const response = await instance.delete(`/contacts/${contId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", 
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
