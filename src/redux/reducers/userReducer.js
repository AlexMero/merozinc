/**
 * @typedef {(
 * "hydrateUser_success"
 * | "edit_name_success"
 * )} actionType
 */

const initialState = {}

/**
 * [user description]
 *
 * @param   {Object}  state         [state description]
 * @param   {Object}  action        [action description]
 * @param   {actionType} action.type
 * @param   {Object}  action.payload
 *
 * @return  {Object}                [return description]
 */
const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default user
