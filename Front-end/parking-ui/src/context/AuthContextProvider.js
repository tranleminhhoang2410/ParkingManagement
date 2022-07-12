import React, { useReducer, useState } from 'react';

export const AuthContext = React.createContext();
export const AUTH_ACTION = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
};
const initialState = {
    isLoggedIn: false,
    user: {},
    jwt: {
        token: null,
        expired: null,
    },
    openAuthModal: false,
};
function authReducer(state, action) {
    switch (action.type) {
        case AUTH_ACTION.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                jwt: {
                    ...action.payload.jwt,
                },
                user: {
                    ...action.payload.user,
                },
            };
        case AUTH_ACTION.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                jwt: {
                    token: null,
                    expired: null,
                },
            };
        case AUTH_ACTION.OPEN_MODAL:
            return { ...state, openAuthModal: true };
        case AUTH_ACTION.CLOSE_MODAL:
            return { ...state, openAuthModal: false };
        default:
            return state;
    }
}
function AuthContextProvider({ children }) {
    const [authState, dispatch] = useReducer(authReducer, initialState);
    return <AuthContext.Provider value={[authState, dispatch]}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
