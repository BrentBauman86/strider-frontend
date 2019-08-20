export default (state = [], action) => {
    switch (action.type) {
        case "CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null  
        default: 
            return state     
    }
}