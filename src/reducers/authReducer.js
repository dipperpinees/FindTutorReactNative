import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {server_name} from "../constants/namespace";

const initialState = {
    status: "idle",
    token: "",
    refreshToken: "",
    typeParent: "",
    typeTutor: "",
    id: "",
}

export const login = createAsyncThunk("auth/authLogin", async (args) => {
    return await fetch(`${server_name}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Email hoặc mật khẩu không chính xác");
      }
    });
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducer: (builder) => {
        builder
            .addCase(login.pending, (state)=>{
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload){
                    const { token, refresh_token, id, type_tutor, type_parent } = action.payload;
                    state.token = token;
                    state.refresh_token = refresh_token;
                    state.id = id;
                    state.type_tutor = type_tutor ;
                    state.type_parent = type_parent ;
                }
            })
    }
})

export default authSlice.reducer;

export const {login} = authSlice.actions;

export const selectStateStatus = (state) => state.status;
export const selectToken = (state) => state.auth.token;
export const selectRefreshToken = (state) => state.auth.refresh_token;
export const selectIdUser = (state) => state.auth.id;
export const selectType_tutor = (state) => state.auth.type_tutor;
export const selectType_parent = (state) => state.auth.type_parent;


  