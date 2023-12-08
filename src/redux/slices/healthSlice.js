import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHealthStatus = createAsyncThunk(
  'health/fetchHealthStatus',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/health');
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const healthSlice = createSlice({
  name: 'health',
  initialState: {
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHealthStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHealthStatus.fulfilled, (state, action) => {
        state.status = action.payload.status;  // "OK"
      })
      .addCase(fetchHealthStatus.rejected, (state, action) => {
        state.status = action.error.message;
      });
  },
});

export default healthSlice.reducer;