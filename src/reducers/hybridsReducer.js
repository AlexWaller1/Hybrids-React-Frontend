export const hybridsReducer = (state = [], action) => {
     switch(action.type){
         case 'FETCH_HYBRIDS':
             return action.payload
     }
}