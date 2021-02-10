export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            console.log(action)
            return state
        }
        case "check": {

            return state
        }
        default: return state
    }
};
