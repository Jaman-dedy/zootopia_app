import ActionType from 'types/ActionType'
import event from 'redux/initial-states/attributes'
import IAttributes from 'types/intial-states/IAttributes'
import fetchAttribure from './fetchAttributes'

export default (initialState: IAttributes, action: ActionType): IAttributes => {
  const state = initialState || event;

  return {
    ...state,
    ...fetchAttribure(state, action),
  };
};