export function manageFriends(state = {friends: []}, action) {
    
    switch (action.type) {

        case "ADD_FRIEND":
            let newObj = Object.assign({}, state)
            newObj.friends.push(action.friend)
            return newObj

        case "REMOVE_FRIEND":
            let newObject = Object.assign({}, state)
            newObject.friends.map((friend, index) => {
                if (friend.id === action.id) {
                    newObject = {
                        ...state,
                        friends: [
                            ...state.friends.slice(0, index),
                            ...state.friends.slice(index + 1)
                        ]
                    }
                }
            })
            return newObject

        default: 
            return state
    }
}
