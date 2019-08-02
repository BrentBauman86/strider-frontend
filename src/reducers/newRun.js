const initialState = {
    name: "",
    date: "",
    distance: "",
    comment: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "NEW_RUN":
            return action.runData 
        default:
            return state
    }
}