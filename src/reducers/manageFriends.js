export function manageFriends(state, action) {
   console.log(action)
   switch (action.type) {
      case "ADD_FRIEND":
         let newFriends = [...state.friends, action.friend]
         return {...state, friends: newFriends}
      case "REMOVE_FRIEND":
         let updatedFriends = state.friends.filter(friend => friend.id !== action.id)
         return {...state, friends: updatedFriends}
      default:
         return state
   }
}
