

export function manageFriends(state = {
  friends: [],
  }, action){
  switch (action.type) {

    case 'ADD_FRIEND':
      return (
        {...state, friends: [
          ...state.friends,
          action.friend
        ]
      }
    )

    case 'REMOVE_FRIEND':
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
      return (
        {...state, friends: [
          //capture all friends until one to be removed
          ...state.friends.slice(0, removalIndex),
          //capture all friends starting with friend after one to be removed.
          ...state.friends.slice(removalIndex+1)
        ]
      }
    )



    default:
      return state;
  }
}
