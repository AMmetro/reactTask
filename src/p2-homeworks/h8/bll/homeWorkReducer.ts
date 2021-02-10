export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {

            let newState = {state}
            console.log(newState)
            //@ts-ignore
            let newSortState=newState.sort( (a:any,b:any) => {if(a.name < b.name) return -1;
                                                                if(a.name > b.name) return 1;})
            console.log(newSortState)
            return newSortState
        }
        case "check": {

            return state
        }
        default: return state
    }
};
