export function managePresents(state = { numberofPresents:0}, action){
    switch (action.type) {
        case 'INCREASE' :
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            });
            case 'DECREASE': 
            return Object.assign({},  state, {
                numberOfPresents: state.numberofPresents - 1 
            });
            default:
                return state;
    }
}
