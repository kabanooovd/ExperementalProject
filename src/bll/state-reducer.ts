
const initState = {}

export const stateReducer = (state: any = initState, action: CommonAction_T): any => {
    switch (action.type) {
        case '': {
            return state
        }
        default: return state
    }
}

type CommonAction_T = any