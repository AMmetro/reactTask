export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {

            let newState = {...state}
            console.log(newState)
            // let newSortState=sortState.sort( (a:any,b:any) => {if(a.name < b.name) return -1;
            //                                                     if(a.name > b.name) return 1;})

            // return newSortState
        }
        case "check": {

            return state
        }
        default: return state
    }
};
