type item = { _id: number, name: string, age: number }
type actionType = { type: string; payload?: string }
type stateType = item[]


export const homeWorkReducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case "sort": {
            let copyState: stateType = []
            for (let key in state) {
                copyState[key] = state[key]
            }
            if (action.payload === "up") {
                copyState.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    else {return 0}
                })
            }
            if (action.payload === "down") {
                copyState.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    else {return 0}
                })
            }
            return copyState
        }
        case "check": {
            let copyState = state.filter(el => el.age > 17)
            return copyState
        }
        default:
            return state
    }
};
