export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            let copyState:any=[]
            for (let key in state) {copyState[key]=state[key]}
            if (action.payload=="up"){
                copyState.sort( (a:any,b:any) => {if(a.name < b.name) return -1;
                    if(a.name > b.name) return 1;})}
            if (action.payload=="down"){
                copyState.sort( (a:any,b:any) => {if(a.name > b.name) return -1;
                    if(a.name < b.name) return 1;}) }
            return copyState
        }
        case "check": {
            //@ts-ignore
            let copyState=state.filter(el=> el.age>17 )
            return copyState
        }
        default: return state
    }
};
