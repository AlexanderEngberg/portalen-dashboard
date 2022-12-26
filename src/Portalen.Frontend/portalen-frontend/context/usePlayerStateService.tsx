import { useEffect, useReducer, useState, useCallback } from "react";
import { ActionType, PlayerStateState } from "interfaces";
import { initialState, PlayStateReducer } from "./PlayStateReducer";
import Axios from "axios";

export function usePlayerStateService(): PlayerStateState {
  const [state, dispatch] = useReducer(PlayStateReducer, initialState);

  const togglePlaying = () =>
    dispatch({
      type: ActionType.TOGGLE_PLAYING,
      payload: state.playing ? false : true,
    });

  const setCurrent = (id: number) =>
    dispatch({
      type: ActionType.SET_CURRENT_PODCAST,
      payload: { currentSong: id, playing: true },
    });

  const prevPod = () => {
    if (state.random) {
      return setCurrent(~~(Math.random() * state.podcasts.length));
    }

    if (state.currentSong === 0) {
      return setCurrent(state.podcasts.length - 1);
    } else {
      return setCurrent(state.currentSong - 1);
    }
  };

  const nextPod = () => {
    if (state.currentSong === state.podcasts.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(state.currentSong + 1);
    }
  };

  const getPodcasts = async () => {
    try {
      const res = await Axios.get("https://localhost:7108/api/Podcast");
      if (res.data) {
        dispatch({
          type: ActionType.SET_PODCASTS_ARRAY,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPodcasts();
  }, []);

  return {
    state,
    functions: {
      togglePlaying,
      setCurrent,
      prevPod,
      nextPod,
    },
    dispatch,
  };
}
