const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps
  };
};

export const createAsyncActionCreator = (
  actionType,
  asyncRequestFn,
  requestParams
) => {
  return dispatch => {
    dispatch(createAction(`${actionType}_START`, { request: requestParams }));

    return asyncRequestFn(requestParams).then(response => {
      response
        .json()
        .then(json =>
          dispatch(createAction(`${actionType}_SUCCESS`, { response: json }))
        )
        .catch(error =>
          dispatch(createAction(`${actionType}_ERROR`, { error }))
        );
    });
  };
};
