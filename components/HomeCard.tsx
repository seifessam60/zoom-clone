import Image from "next/image";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={`${className} flex flex-col px-4 py-6 justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-xl cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-lg ">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-lg font-normal ">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
