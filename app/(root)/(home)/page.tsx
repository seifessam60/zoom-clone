import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const date = now.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
  return (
    <section className='flex flex-col size-full text-white gap-10'>
      <div className='bg-hero h-[300px] w-full rounded-[20px] bg-cover'>
        <div className='h-full flex flex-col justify-between md:p-8 max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] py-2 text-center text-base font-normal rounded'>
            Upcoming Meeting at 12:30 pm
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
