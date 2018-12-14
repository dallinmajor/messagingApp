export default (state = null, action) => {
    console.log(state);
    switch(action.type) {
        case 'USER_FOUND':
            return action.payload;
    } 
    return state
}