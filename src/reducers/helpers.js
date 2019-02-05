// Helper function to enables passing an object with
// the action.type as the key and the reducer function as the value
export const createReducer = (
  initialState = {},
  actionHandlerKeyFuncs = {}
) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  };
};

// We're setting these based on the state of the request
const initialAsyncState = { isLoading: false, response: null, request: null };

// Generic way of handling state changes for an async request
// Can override {action_type}_START, {action_type}_SUCCESS, {action_type}_ERROR
export const createAsyncReducer = (
  actionType,
  actionHandlerKeyFuncs = {},
  initialState = initialAsyncState
) => {
  const startReducerFn = (state, action) => ({
    ...state,
    isLoading: true,
    request: action.request
  });

  const successReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    response: action.response
  });
  const errorReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  });

  return createReducer(initialState, {
    [`${actionType}_START`]: startReducerFn,
    [`${actionType}_SUCCESS`]: successReducerFn,
    [`${actionType}_ERROR`]: errorReducerFn,
    ...actionHandlerKeyFuncs
  });
};
