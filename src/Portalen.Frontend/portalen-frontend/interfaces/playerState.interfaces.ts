export interface Podcasts{
    id: number;
    program: string;
    info: string;
    iconUrl: string;
    fileUrl: string;
};

export interface PlayerState {
    currentSong: number,
    podcasts: Podcasts[],
    repeat: boolean,
    random: boolean,
    playing: boolean,
    audio: null,
};

export enum ActionType {
    SET_PODCASTS_ARRAY = "SET_PODCASTS_ARRAY",
    SET_CURRENT_PODCAST = "SET_CURRENT_PODCAST",
    TOGGLE_RANDOM = "TOGGLE_RANDOM",
    TOGGLE_REPEAT = "TOGGLE_REPEAT",
    TOGGLE_PLAYING = "TOGGLE_PLAYING",
};

export type Action =
  | { type: ActionType.SET_PODCASTS_ARRAY; payload: Podcasts[] }
  | { type: ActionType.SET_CURRENT_PODCAST; payload: { currentSong: number, playing: boolean } }
  | { type: ActionType.TOGGLE_RANDOM; payload: boolean }
  | { type: ActionType.TOGGLE_REPEAT; payload: boolean }
  | { type: ActionType.TOGGLE_PLAYING; payload: boolean };