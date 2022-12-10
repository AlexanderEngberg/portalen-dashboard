import { ReactElement } from "react";
import { PodCard } from "components/widget/PodWidget/PodCard";
import PlayerProvider from "./../context/PlayStateProvider";

export default function Home(): ReactElement {
  return (
    <>
      <PlayerProvider>
        <PodCard />
      </PlayerProvider>
    </>
  );
}
