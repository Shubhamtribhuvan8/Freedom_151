
const initialState={
  products:[],
}

const Reducer =(state=initialState,action)=>{
  switch(action.type){
    case "GET" :
       return {...state,products:action.payload}

    default:
     return state;
  }
} 

export default Reducer;
