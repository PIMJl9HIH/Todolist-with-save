import { TYPE } from '../constants'

const DEFAULT_FILTER = 'all';

const filters = (state = DEFAULT_FILTER, action) => {
  const {type, payload} = action;

  switch (type) {

    case TYPE.CHANGE_FILTER:
      return payload.activeFilter;

    default:
      return state
  }
}

export default filters;