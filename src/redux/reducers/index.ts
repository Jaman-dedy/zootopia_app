import { combineReducers } from "redux";
import { InitialState, ActionType } from "types";
import preloadedState from "redux/initialState";
import attributes from './attributes'


export const reducers = {
  attributes,
}


const rootReducer = combineReducers(reducers);

export default (
    initialState: InitialState,
    action: ActionType
  ): { [key: string]: any } => {
    const state = initialState || preloadedState;
    return {
      ...rootReducer(state as any, action),
    };
  };