export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            let newState:any=[]
            if (action.payload=="up"){
            for (let key in state) {newState[key]=state[key]}                     
            newState.sort( (a:any,b:any) => {if(a.name < b.name) return -1;
                                             if(a.name > b.name) return 1;})}
            if (action.payload=="down"){
            for (let key in state) {newState[key]=state[key]}                     
            newState.sort( (a:any,b:any) => {if(a.name > b.name) return -1;
                                             if(a.name < b.name) return 1;})
            }
            // console.log(newState)  //sort
            // console.log(state)     // not sort
            // console.log(state==newState);
            return newState
        }
        case "check": {
            //@ts-ignore
            let newState=state.filter(el=> el.age>17 )
            return newState
        }
        default: return state
    }
};
