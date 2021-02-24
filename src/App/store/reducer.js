
/**
 * Initial State
 */
const initialState = {
   info_User:undefined
};

/**
 * Types
 */

export const INFO_USER = "INFO_USER"
export const GET_USER = "GET_USER"


/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
   
    case INFO_USER:
      return {
        ...state,
        info_User : action.data
      }

    default:
      return state;
  }
};



/**
 * Action Creators
 */

/**
 * Selectors
 */

/*
 * Export
 */
export default reducer;

