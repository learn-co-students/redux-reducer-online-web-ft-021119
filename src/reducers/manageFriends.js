export function manageFriends(state, action) {
  switch(action.type) {
    case 'ADD_FRIEND':
      const newFriendList = [...state.friends, action.friend]
      return {...state, friends: newFriendList}
    case 'REMOVE_FRIEND':
      const updatedList = state.friends.filter(friend => friend.id !== action.id)
      return {...state, friends: updatedList}
    default:
      return state
  }
}
