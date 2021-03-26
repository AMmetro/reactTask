const initState:boolean = false;

export const loadingReducer = (state = initState, action: actionType): boolean => {
    switch (action.type) {
        case "true": {
            state=true
            return state;
        }
        case "false": {
            state=false
            return state;
        }

        default: return state;
    }
};

type actionType={type:string}

export const loadingAC = (status:string): actionType => {return {type:status}};
