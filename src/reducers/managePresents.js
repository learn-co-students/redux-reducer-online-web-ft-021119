export function managePresents(state, action) {
   switch(action.type) {
      case "INCREASE":
         let currentCount = state.numberOfPresents 
         return state = {numberOfPresents: ++currentCount}
      default:
         return state
   }
}
