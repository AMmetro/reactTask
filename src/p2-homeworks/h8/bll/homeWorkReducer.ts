export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {

            // let newState=state.sort(function (a:any,b:any){return a-b})
            let newState=state.sort(function (a:any,b:any){if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;})

            console.log("newState=")
            console.log(newState)
            return state
        }
        case "check": {

            return state
        }
        default: return state
    }
};
