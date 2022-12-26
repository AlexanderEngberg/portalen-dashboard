import { PlayerStateState } from "interfaces";
import { createContext, useContext, ReactNode } from "react";
import { initialState } from "./PlayStateReducer";
import { usePlayerStateService } from "./usePlayerStateService";

export const PlayerStateContext = createContext({ state: initialState });

export function usePlayerState(): PlayerStateState {
  return useContext(PlayerStateContext) as PlayerStateState;
}

export interface PodStateProviderProps {
  children: ReactNode;
}

export default function PlayerProvider({ children }: PodStateProviderProps) {
  const playerStateService = usePlayerStateService();
  return (
    <PlayerStateContext.Provider value={playerStateService}>
      {children}
    </PlayerStateContext.Provider>
  );
}
