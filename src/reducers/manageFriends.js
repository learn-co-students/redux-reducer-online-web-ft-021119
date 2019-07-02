export function manageFriends(state = {friends:[]}, action){
	switch (action.type) {
		case 'ADD_FRIEND':
		return (
			{...state,
				friends: [
				...state.friends,
				action.friend
				]
	}
	)

		case 'REMOVE_FRIEND':
		const removableFI = state.friends.findIndex(friend => friend.id === action.id)
		return (
		{...state,
			friends: [
			// starts at zero and ends at the decided index but does not include the element and returns that
				...state.friends.slice(0, removableFI),
              	...state.friends.slice(removableFI + 1)
              	// starts at removable index plus 1 (it does not include the prev item anymore) and ends at the end of array wherever it might be
			]


		})
	default:
	return state

	
}
}

