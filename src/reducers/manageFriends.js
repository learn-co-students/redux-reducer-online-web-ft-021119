export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      // return {...state, name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id }
      return ({
        ...state,
        friends: [
          ...state.friends,
          action.friend
        ]
      })
    case 'REMOVE_FRIEND':
      let indexToRemove = state.friends.findIndex(friend => friend.id === action.id)
      return ({
        ...state,
        friends: [
          ...state.friends.slice(0, indexToRemove),
          ...state.friends.slice(indexToRemove + 1)
        ]
      })
    default:
      return state
  }
}
