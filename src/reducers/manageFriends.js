export function manageFriends(state, action){
    switch (action.type) {
        
        case "ADD_FRIEND":
            let newObj = Object.assign({}, state)
            newObj.friends.push(action.friend)
            return newObj

        case "REMOVE_FRIEND":
            let newObject = Object.assign({}, state)
            newObject.friends.map((friend, index) => {
                if (friend.id === action.id) {
                    newObject.friends.splice(index, 1)
                }
            })
            return newObject

        default: 
            return state
    }
}
