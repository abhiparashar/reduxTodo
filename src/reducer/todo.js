const initalState = {
    data: [],
  };
  
  const todos = (state = initalState, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return {...state,data:[
          ...state.data,{
            message:action.message,
            id:action.id
          }
        ]};
      case 'DELETE_TODO':
        return {};
      default:
        return state;
    }
  };
  
  export default todos
  