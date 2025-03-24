import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginPost } from "../api/memberApi"
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil"


const initstate = {
    email: ''
}

const loadMemberCookie = () => {
    const memberInfo = getCookie("member")


    if (memberInfo && memberInfo.nickname) {
        memberInfo.nickname = decodeURIComponent(memberInfo.nickname)
    }
    return memberInfo
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})


const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState: loadMemberCookie() || initstate,
    reducers: {
        login: (state, action) => {
            console.log("login....")
            const payload = action.payload

            setCookie("member", JSON.stringify(payload), 1)

            return payload
        },
        logout: (state, action) => {
            console.log("logout....")
            removeCookie("member")

            return { ...initstate }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            const payload = action.payload

            if (!payload.error) {
                setCookie("member", JSON.stringify(payload), 1)
            }
            return payload

        })
            .addCase(loginPostAsync.pending, (state, action) => {

            })
            .addCase(loginPostAsync.rejected, (state, action) => {

            })
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer