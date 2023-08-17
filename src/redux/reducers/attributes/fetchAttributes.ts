import { ActionType } from "types"
import {
  FETCH_ATTRIBUTES_FAILURE,
  FETCH_ATTRIBUTES_START,
  FETCH_ATTRIBUTES_SUCCESS,
  FETCH_ATTRIBUTES_CLEAR
} from "constants/action-types/attributes/fetchAttributes"
import IAttributes from "types/intial-states/IAttributes"

export default (
  state: IAttributes,
  { type, payload }: ActionType
): { [key: string]: any } | null => {
  switch (type) {
    case FETCH_ATTRIBUTES_START:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          loading: true,
          error: {
            ...state.attributes.error
          },
          success: false
        }
      }
    case FETCH_ATTRIBUTES_FAILURE:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          error: payload?.error,
          loading: false,
          success: false
        }
      }
    case FETCH_ATTRIBUTES_CLEAR:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          data: {},
          error: {},
          loading: false,
          success: false
        }
      }
    case FETCH_ATTRIBUTES_SUCCESS:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          data: payload || state.attributes.data,
          error: {},
          loading: false,
          success: true
        }
      }
    default:
      return null
  }
}
