export const hybridsReducer = (state = [], action) => {
     switch(action.type){
         case 'FETCH_HYBRIDS':
             return action.payload
         case 'ADD_HYBRID':
             return [...state, action.payload]
             default:
                 return state
     }
}