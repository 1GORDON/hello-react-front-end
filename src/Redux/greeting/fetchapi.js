const initialState = {
    message: {},
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCHING_MESSAGE':
        return {
          ...state,
          loaded: true,
        };
      case 'COMPLETE_MESSAGE':
        return {
          ...state,
          loaded: false,
          message: action.payload,
        };
      default:
        return state;
    }
  };
  export const fetchmessage = () => async (dispatch) => {
    dispatch({ type: 'FETCHING_MESSAGE' });
    await fetch('https://hello-rails-back-end-123.herokuapp.com/api/messages',  {
      headers: {
          'Content-Type': 'application/json'
      },
  }
)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'COMPLETE_MESSAGE', payload: data.msg });
      })
      .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
  };
  
  export default messageReducer;