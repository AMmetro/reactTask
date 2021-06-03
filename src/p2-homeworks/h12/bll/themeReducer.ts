type initStateType = {theme: string};
const initState:initStateType = {theme:"some"};

export const themeReducer = (state = initState, action: themeAction): initStateType => { // fix any
    switch (action.type) {
        case "dark": {
            return state={theme:"dark"};
        }
        case "red": {
            return state={theme:"red"};
        }
        case "some": {
            return state={theme:"some"};
        }

        default: return state;
    }
};


type themeAction = {type: string};
export const changeThemeC = (theme:string): themeAction => {return {type:theme}}; // fix any
