import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSessions = createAsyncThunk(
  "sessions/fetchSessions",
  async () => {
    const response = await fetch("http://
    