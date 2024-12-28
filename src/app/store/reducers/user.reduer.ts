import { createReducer, on } from "@ngrx/store";
import { loginAction, logoutAction } from "../actions/user.action";
import { UserI } from "src/app/interfaces/user";

const storedUserData = localStorage.getItem("constraTechAdminUser");
export const initialState: UserI = storedUserData ? JSON.parse(storedUserData) : {
    isLoggedIn: false,
    _id: '',
    username: '',
    token: '',
    password: '',
};

export const loginUserReducer = createReducer(initialState,
    on(loginAction, (state, { user }) => ({
        ...state,
        _id: user._id,
        isLoggedIn: true,
        token: user.token,
        password: '',
        username: user.username
    })),
    on(logoutAction, state => ({
        ...state,
        _id: '',
        isLoggedIn: false,
        token: '',
        password: '',
        username: ''
    }))
)