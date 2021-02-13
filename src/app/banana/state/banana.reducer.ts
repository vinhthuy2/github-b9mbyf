import { EAT_BANANA, GET_NEW_BANANA, PEEL_BANANA } from "./banana.actions";
import * as programActions from "./banana.actions";
import { State as BanaState } from "./banana.state";
export function reducer(
  state: BanaState,
  action: programActions.BananaAction
): BanaState {
  console.log("REDUCER state: ", state);
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log("REDUCER " + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: "yellow"
      };
    }
    case PEEL_BANANA: {
      console.log("REDUCER " + PEEL_BANANA);
      return {
        ...state,
        isPeeled: true
      };
    }
    case EAT_BANANA: {
      console.log("REDUCER: Taking " + action.payload + " bites of the banana");
      return {
        ...state,
        bitesRemaining: state.bitesRemaining - action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
