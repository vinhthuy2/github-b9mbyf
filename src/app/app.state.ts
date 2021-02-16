import { ActionReducerMap } from "@ngrx/store";
import * as bananaStore from "./banana/state";

export interface AppState {
  banana: bananaStore.State;
}

// initial AppState
export const initialState: AppState = {
  banana: bananaStore.initialState
};

// map all feature reducers
export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer
};

// GET banana state from AppState
export const getMyBanana = (s: AppState) => s.banana;

// collect all effects
export const effects: Array<any> = [bananaStore.BananaEffects];
