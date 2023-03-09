import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../helpers/pause.helper";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // only for development to show loading state
  await pause(1000);

  return response.data;
});

export { fetchUsers };
