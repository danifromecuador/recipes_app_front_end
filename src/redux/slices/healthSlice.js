import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHealthStatus = createAsyncThunk(
  'health/fetchHealthStatus',
  async () => {
    const response = await fetch('https:http://127.0.0.1:3000/health');
    const data = await response.json();
    return data;
  }
);

const healthSlice = createSlice({
  name: 'health',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHealthStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHealthStatus.fulfilled, (state, action) => {
        state.status = action.payload;
        state.error = null;
      })
      .addCase(fetchHealthStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default healthSlice.reducer;