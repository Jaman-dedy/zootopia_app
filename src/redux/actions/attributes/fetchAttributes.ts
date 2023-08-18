import {
    FETCH_ATTRIBUTES_FAILURE,
    FETCH_ATTRIBUTES_START,
    FETCH_ATTRIBUTES_SUCCESS,
    FETCH_ATTRIBUTES_CLEAR
  } from "constants/action-types/attributes/fetchAttributes"
  import { DispatchType } from "types"
  import apiAction from "helpers/apiAction"
  
  export const clearAction = (dispatchAction: DispatchType): void => {
    dispatchAction({ type: FETCH_ATTRIBUTES_CLEAR })
  }
  
  export default (animal: string, onSuccess?: () => void) =>
    async (dispatchAction: DispatchType): Promise<void> => {
      dispatchAction(
        apiAction({
          method: "GET",
          url: `/animals?name=${animal}`,
          'X-Api-Key': 'ICpnZFTqwCU2deiANFskvw==U8Dgvp83VlPcONst',
          onStart:
            () =>
            (dispatch): void => {
              clearAction(dispatchAction)
              dispatch({ type: FETCH_ATTRIBUTES_START })
            },
          onSuccess:
            (res: any) =>
            async (dispatch): Promise<void> => {
              dispatch({ type: FETCH_ATTRIBUTES_SUCCESS, payload: res })
  
              if (typeof onSuccess === "function") {
                onSuccess()
              }
            },
  
          onFailure:
            err =>
            async (dispatch): Promise<void> => {
              console.log('fail :>> ', err);
              dispatch({
                type: FETCH_ATTRIBUTES_FAILURE,
                payload: { error: err }
              })
            }
        })
      )
    }
  