import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});

// Операція для отримання контактів
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token; // Отримуємо токен із state.auth.token

    try {
      const response = await instance.get("/contacts", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", // Додаємо токен у заголовки
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// Операція для додавання контакту
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token; // Отримуємо токен із state.auth.token

    try {
      const response = await instance.post("/contacts", contact, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", // Додаємо токен у заголовки
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contId, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token; // Отримуємо токен із state.auth.token

    try {
      const response = await instance.delete(`/contacts/${contId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", // Додаємо токен у заголовки
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
