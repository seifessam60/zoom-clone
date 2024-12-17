import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggleedOn, setIsMicCamToggleedOn] = useState(false);
  const call = useCall();
  useEffect(() => {
    if (!call) throw new Error("useCall hook failed to load");
    call?.camera?.toggle();
    call?.microphone?.toggle();
  }, [isMicCamToggleedOn, call?.microphone, call?.camera]);
  return (
    <div className='h-screen w-screen flex flex-col flex-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Meeting Setup</h1>
      <VideoPreview />
      <div className='h-16 flex-center gap-3'>
        <label className='flex-center gap-2 font-medium'>
          <input
            type='checkbox'
            checked={isMicCamToggleedOn}
            onChange={(e) => {
              setIsMicCamToggleedOn(e.target.checked);
            }}
          />
          Join With Mic and Camera OFF
        </label>
        <DeviceSettings />
      </div>
      <Button
        className='bg-green-500 rounded-md px-4 py-2'
        onClick={() => {
          call?.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
