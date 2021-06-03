type initStateType={loading:boolean}
const initState:initStateType = {loading:false};

export const loadingReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "true": {
            state={loading:true}
            return state;
        }
        case "false": {
            state={loading:false}
            return state;
        }
        default: return state;
    }
};

type actionType={type:string}

export const loadingAC = (status:string): actionType => {return {type:status}};
