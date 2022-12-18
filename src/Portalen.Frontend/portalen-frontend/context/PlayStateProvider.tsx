import {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";
import { Action, PlayerState, ActionType } from "interfaces";
import { podcastData } from "./podcasts";
import { PlayStateReducer } from "./PlayStateReducer";
import { useQuery } from "react-query";
import Axios from "axios";

export const initialState: PlayerState = {
  currentSong: -1,
  podcasts: [],
  repeat: false,
  random: false,
  playing: false,
  audio: null,
};

export const PlayerStateContext = createContext<{
  currentSong: PlayerState["currentSong"];
  podcasts: PlayerState["podcasts"];
  repeat: PlayerState["repeat"];
  random: PlayerState["random"];
  playing: PlayerState["playing"];
  audio: PlayerState["audio"];
  togglePlaying: Function;
  setCurrent: Function;
  prevPod: Function;
  nextPod: Function;
}>({
  currentSong: initialState.currentSong,
  podcasts: initialState.podcasts,
  repeat: initialState.repeat,
  random: initialState.random,
  playing: initialState.playing,
  audio: initialState.audio,
  togglePlaying: () => null,
  setCurrent: () => null,
  prevPod: () => null,
  nextPod: () => null,
});

export interface PodStateProviderProps {
  children: ReactNode;
}

function GetData() {
  const { data } = useQuery(["pods"], () => {
    return Axios.get("https://localhost:7108/api/Podcast").then(
      (res) => res.data
    );
  });

  return data;
}

export default function PlayerProvider({ children }: PodStateProviderProps) {
  const [state, dispatch] = useReducer(PlayStateReducer, initialState);
  const { data } = useQuery(["pods"], () => {
    return Axios.get("https://localhost:7108/api/Podcast").then(
      (res) => res.data
    );
  });
  console.log(data);
  /* dispatch({
    type: ActionType.SET_PODCASTS_ARRAY,
    payload: podcastData,
  }); */

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

  return (
    <PlayerStateContext.Provider
      value={{
        currentSong: state.currentSong,
        podcasts: state.podcasts,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        togglePlaying,
        setCurrent,
        prevPod,
        nextPod,
      }}
    >
      {children}
    </PlayerStateContext.Provider>
  );
}
