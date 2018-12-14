export function setUser(user) {
    // selectBook is an action creator that needs to return an action,
    // an object with a type property.
    return {
        type: 'SET_USER',
        payload: user
    }
}