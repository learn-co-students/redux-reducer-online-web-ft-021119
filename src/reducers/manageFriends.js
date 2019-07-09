export function manageFriends(state, action){
 if (action.type === 'ADD_FRIEND'){
 	return {...state, friends: state.friends.concat(action.friend)}
 } else if (action.type === 'REMOVE_FRIEND'){
return {...state, friends: state.friends.filter(friend =>friend.id !== action.id)}

 } else {
 	return state;
 }


}


