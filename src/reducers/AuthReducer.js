

// craete a reducer
const AuthReducer = (state, { type, payload}) => {

    switch (type) {
        case 'LOGIN_USER':
            return {
                token : payload.token,
                user : payload.user
            }
    
        default:
            return state;
    }

}


// export 
export default AuthReducer;