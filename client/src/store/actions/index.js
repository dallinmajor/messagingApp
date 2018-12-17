import API from '../../utils/API';

export function setUser(username) {
    const user = API.User.validate(username)
    console.log(user);
    
    if(username) {
        return {
            type: 'SET_USER',
            payload: user
        }
    } else {
        return {
            type: 'NO_RESULTS'
        }
    }
    
}