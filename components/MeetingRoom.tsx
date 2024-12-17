import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("Personal");
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  if (callingState !== CallingState.JOINED) return <Loader />;
  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition={"right"} />;
      default:
        return <SpeakerLayout participantsBarPosition={"left"} />;
    }
  };
  return (
    <section className='relative h-screen w-screen pt-4 text-white overflow-hidden'>
      <div className='relative size-full flex-center'>
        <div className='flex size-full max-w-[1000px] items-center'>
          <CallLayout />
        </div>
        <div
          className={`h-[calc(100vh-86px)] ${
            showParticipants ? "block" : "hidden"
          } ml-2`}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className='fixed bottom-0 flex-center gap-5 w-full flex-wrap'>
        <CallControls />
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center bg-[#19232d] hover:bg-[#4c535b] px-4 py-2 rounded-2xl'>
            <LayoutList size={20} className='text-white' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-dark-1 text-white'>
            <DropdownMenuLabel>Choose a Layout</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["Grid", "Speaker Left", "Speaker Right"].map((item) => (
              <div key={item}>
                <DropdownMenuItem
                  className='cursor-pointer hover:bg-dark-2'
                  onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button
          onClick={() => {
            setShowParticipants(!showParticipants);
          }}
        >
          <div className='bg-[#19232d] hover:bg-[#4c535b] px-4 py-2 rounded-2xl'>
            <Users size={20} />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
