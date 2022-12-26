import { Action, ActionType, PlayerState } from "interfaces";

export const initialState: PlayerState = {
  currentSong: -1,
  podcasts: [],
  repeat: false,
  random: false,
  playing: false,
  audio: null,
};

export function PlayStateReducer(
    state: PlayerState,
    action: Action
  ): PlayerState {
    switch (action.type) {
      case ActionType.SET_PODCASTS_ARRAY:
        return {
            ...state,
            podcasts: action.payload,
          };
      case ActionType.SET_CURRENT_PODCAST:
        return {
            ...state,
            currentSong: action.payload.currentSong,
            playing: true,
        };
      case ActionType.TOGGLE_RANDOM:
        return {
          ...state,
          random: action.payload,
        };
      case ActionType.TOGGLE_REPEAT:
        return {
            ...state,
            repeat: action.payload,
          };
      case ActionType.TOGGLE_PLAYING:
        return {
            ...state,
            playing: action.payload,
          };
      default:
        return state;
    }
  }