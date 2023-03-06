/**
 * @typedef {(
 * "loading"
 * | "unloading"
 * )} actionType
 */

const initialState = {
  loading: false,
}

function makeInitialState() {
  return {
    ...initialState,
    token: localStorage.getItem('token'),
  }
}

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
const app = (state = makeInitialState(), action) => {
  // console.log('>>>', action)
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true,
      }
    case 'unloading':
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default app
