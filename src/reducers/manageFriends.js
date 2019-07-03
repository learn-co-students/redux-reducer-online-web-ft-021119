export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, {...action.friend}]}
    case 'REMOVE_FRIEND':
      let i = state.friends.findIndex((friend) => friend.id === action.id)
      let newFriends = [...state.friends]
      newFriends.splice(i, 1)
      return {friends: newFriends}
    default:
      return state;
  }
}
