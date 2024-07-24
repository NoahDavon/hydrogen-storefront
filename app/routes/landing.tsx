import React, {ReactNode, useState} from 'react';
import photo from '~/assets/BannerPhoto.png';
import chillingPhoto from '~/assets/2ndsectioncard1.jpg';
import comfortPhoto from '~/assets/comfort.png';
import dotGoPhoto from '~/assets/DotGo.png';
import lumbarSupportPhoto from '~/assets/lumbarSupport.png';
import {BiLeftArrow, BiRightArrow, BiUser} from 'react-icons/bi';
import quotePhoto from '~/assets/quotes.png';
import cardPhoto0 from '~/assets/fadingCardsPhotos/0.png';
import cardPhoto1 from '~/assets/fadingCardsPhotos/1.png';
import cardPhoto2 from '~/assets/fadingCardsPhotos/2.png';
import cardPhoto3 from '~/assets/fadingCardsPhotos/3.png';
import landingVid from '~/assets/landingVid.mov';
type Props = {};

export default function Landing({}: Props) {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <>
      <div className="w-full overflow-x-clip relative md:hidden">
        <video autoPlay loop muted src={landingVid} width={'100%'} />
        <div className=" absolute top-[5%] left-0 right-0 text-center">
          <text className=" text-black font-extrabold text-3xl block">
            Your Tailored Comfort Hub
          </text>
          <text className="block text-xl">Starting from ... EGP</text>
          <button className="bg-black hover:bg-gray-800 rounded font-bold text-white p-4 px-10 my-8">
            Shop DOT Now
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-clip relative md:block hidden">
        <img src={photo} width={'100%'} />
        <div className=" absolute top-[45%] left-0 right-0 text-center">
          <text className=" text-black font-extrabold text-7xl block">
            Fits Your Life
          </text>
          <text className="block">Starting from ... EGP</text>
          <button className="bg-black hover:bg-gray-800 rounded font-bold text-white p-4 px-10 my-8">
            Shop DOT Now
          </button>
        </div>
      </div>
      <div className="w-dvw text-center p-8 overflow-x-clip">
        <text className="text-black font-extrabold text-4xl block w-full py-4">
          Your 24/7 companion
        </text>
        <div className="flex gap-2  sm:px-4 md:justify-center justify-start overflow-x-scroll overflow-y-clip">
          <div className="md:w-2xs md:shrink w-44 shrink-0 text-center">
            <img src={chillingPhoto} width={'100%'} className="rounded" />
            <text className="block text-2xl">Chilling</text>
          </div>
          <div className="md:w-2xs md:shrink w-44 shrink-0 text-center">
            <img src={chillingPhoto} width={'100%'} className="rounded" />
            <text className="block text-2xl">Chilling</text>
          </div>
          <div className="md:w-2xs md:shrink w-44 shrink-0 text-center">
            <img src={chillingPhoto} width={'100%'} className="rounded" />
            <text className="block text-2xl">Chilling</text>
          </div>
          <div className="md:w-2xs md:shrink w-44 shrink-0 text-center">
            <img src={chillingPhoto} width={'100%'} className="rounded" />
            <text className="block text-2xl">Chilling</text>
          </div>
        </div>
      </div>
      <div className="w-full text-left p-8 px-14 overflow-x-clip">
        <text className="text-black font-extrabold text-4xl block w-full py-8 md:px-[25%]">
          Why The DOT?
        </text>
        <div className="flex gap-4 md:justify-center justify-start sm:px-2 overflow-x-scroll">
          <div className="md:w-sm md:shrink shrink-0 w-3xs rounded-3xl text-center bg-[#F5F5F5]">
            <img src={comfortPhoto} width={'100%'} />
            <text className="block p-10 text-2xl">Comfort</text>
          </div>
          <div className="md:w-sm md:shrink shrink-0 w-3xs rounded-3xl text-center bg-[#F5F5F5]">
            <img src={comfortPhoto} width={'100%'} />
            <text className="block p-10 text-2xl">Comfort</text>
          </div>
          <div className="md:w-sm md:shrink shrink-0 w-3xs rounded-3xl text-center bg-[#F5F5F5]">
            <img src={comfortPhoto} width={'100%'} />
            <text className="block p-10 text-2xl">Comfort</text>
          </div>
        </div>
      </div>
      <div className="w-full text-left p-8 px-14 text-white bg-[#1D1D1D]">
        <div className="flex flex-wrap gap-4 justify-around px-2">
          <div className="w-2xl">
            <text className="block p-10 text-5xl font-extrabold">
              Live Assistance
            </text>
            <text className="block p-10 text-2xl">
              We’re here to help! Share your inquiry with us and our team will
              provide you with all the details.
            </text>
          </div>
          <div className="w-2xl rounded-3xl text-center bg-[#F5F5F5]">
            <img src={comfortPhoto} width={'100%'} />
            <text className="block p-10 text-2xl">Comfort</text>
          </div>
          <div className="w-2xl rounded-3xl text-center bg-[#F5F5F5]">
            <img src={comfortPhoto} width={'100%'} />
            <text className="block p-10 text-2xl">Comfort</text>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-around px-2 w-full p-8 px-16">
        <div className="sm:w-[40%] w-[320px] bg-[#F5F5F5] rounded-2xl p-8 pb-0">
          <div className="w-full flex justify-between">
            <div>
              <text className="text-5xl font-extrabold block">DOT.GO</text>
              <text className="mt-16 block text-xl text-[#6B6B6B]">
                {'Your Original DOT, \n Your new comfort alley.'}
              </text>
            </div>
            <img className="sm:w-[35%] w-[100px]" src={dotGoPhoto} />
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-transparent border p-4 px-8 mx-auto rounded-xl">
              Learn More
            </button>
          </div>
          <div className=" mt-4 w-full border border-0 border-t-2 border-b-2 border-[#E1E1E1] p-8 flex flex-wrap justify-between">
            <div className="flex flex-col items-center text-center w-16">
              <img src={lumbarSupportPhoto} />
              <text className="block text-xl">Lumbar Support</text>
            </div>
            <div className="flex flex-col items-center text-center w-16">
              <img src={lumbarSupportPhoto} />
              <text className="block text-xl">Lumbar Support</text>
            </div>
            <div className="flex flex-col items-center text-center w-16">
              <img src={lumbarSupportPhoto} />
              <text className="block text-xl">Lumbar Support</text>
            </div>
          </div>
          <div className="p-8 text-4xl font-extrabold">
            <text className="block">Price: EGP</text>
            <button className="text-center w-full text-white font-bold text-2xl bg-black p-4 rounded-2xl mt-4">
              Get Your DOT
            </button>
            <text className="block mt-4">Installment Plans: </text>
          </div>
          <div className="flex">
            <div className="border border-l-0 py-8 border-[#E1E1E1] border-b-0 justify-center text-center grow">
              <text className="block text-3xl text-[#A1A1A1] font-bold">
                ... EGP
              </text>
              <text className="block text-xl font-medium">6 months</text>
            </div>
            <div className="border border-l-0 py-8 border-[#E1E1E1] border-b-0 justify-center text-center grow">
              <text className="block text-3xl text-[#A1A1A1] font-bold">
                ... EGP
              </text>
              <text className="block text-xl font-medium">6 months</text>
            </div>
            <div className="border border-l-0 py-8 border-[#E1E1E1] border-b-0 border-r-0 justify-center text-center grow">
              <text className="block text-3xl text-[#A1A1A1] font-bold">
                ... EGP
              </text>
              <text className="block text-xl font-medium">6 months</text>
            </div>
          </div>
        </div>
        <div className="sm:w-[40%] w-[320px] bg-[#F5F5F5] rounded-2xl p-8 pb-0">
          <div className="w-full flex justify-between">
            <div>
              <text className="text-5xl font-extrabold block">DOT.GO</text>
              <text className="mt-16 block text-xl text-[#6B6B6B]">
                {'Your Original DOT, \n Your new comfort alley.'}
              </text>
            </div>
            <img className="sm:w-[35%] w-[100px]" src={dotGoPhoto} />
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-transparent border p-4 px-8 mx-auto rounded-xl">
              Learn More
            </button>
          </div>
          <div className=" mt-4 w-full border border-0 border-t-2 border-b-2 border-[#E1E1E1] p-8 flex flex-wrap justify-between">
            <div className="flex flex-col items-center text-center w-16">
              <img src={lumbarSupportPhoto} />
              <text className="block text-xl">Lumbar Support</text>
            </div>
            <div className="flex flex-col items-center text-center w-16">
              <img src={lumbarSupportPhoto} />
              <text className="block text-xl">Lumbar Support</text>
            </div>
            <div className="flex flex-col items-center text-center w-16">
              <img src={lumbarSupportPhoto} />
              <text className="block text-xl">Lumbar Support</text>
            </div>
          </div>
          <div className="p-8 text-4xl font-extrabold">
            <text className="block">Price: EGP</text>
            <button className="text-center w-full text-white font-bold text-2xl bg-black p-4 rounded-2xl mt-4">
              Get Your DOT
            </button>
            <text className="block mt-4">Installment Plans: </text>
          </div>
          <div className="flex">
            <div className="border border-l-0 py-8 border-[#E1E1E1] border-b-0 justify-center text-center grow">
              <text className="block text-3xl text-[#A1A1A1] font-bold">
                ... EGP
              </text>
              <text className="block text-xl font-medium">6 months</text>
            </div>
            <div className="border border-l-0 py-8 border-[#E1E1E1] border-b-0 justify-center text-center grow">
              <text className="block text-3xl text-[#A1A1A1] font-bold">
                ... EGP
              </text>
              <text className="block text-xl font-medium">6 months</text>
            </div>
            <div className="border border-l-0 py-8 border-[#E1E1E1] border-b-0 border-r-0 justify-center text-center grow">
              <text className="block text-3xl text-[#A1A1A1] font-bold">
                ... EGP
              </text>
              <text className="block text-xl font-medium">6 months</text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full p-8 px-16 justify-around overflow-clip">
        <div className="sm:w-[40%] w-full">
          <text className="block text-6xl font-extrabold">
            We've got your back!
          </text>
          <div className="text-xl p-8">
            <ul style={{listStyle: 'disc'}}>
              <li>
                3 years <span className="font-bold">warranty</span>
              </li>
              <li>
                <span className="font-bold">Free returns</span> within 2 weeks
              </li>
            </ul>
          </div>
        </div>
        <div className="relative sm:w-lg w-full m-16 my-0 sm:h-[480px] h-[320px]">
          <button
            className="rounded-full bg-black text-white top-[45%] md:-left-40 -left-20 w-8 h-8 text-center absolute"
            onClick={() => {
              setCardIndex(
                (cardIndex - 1 + cardContent.length) % cardContent.length,
              );
            }}
          >
            <BiLeftArrow className="m-auto" />
          </button>
          <button
            className="rounded-full bg-black text-white top-[45%] md:-right-40 -right-20 w-8 h-8 text-center absolute"
            onClick={() => {
              setCardIndex((cardIndex + 1) % cardContent.length);
            }}
          >
            <BiRightArrow className="m-auto" />
          </button>
          <div
            className={`absolute left-0 right-0 top-0 bottom-0 rounded-4xl bg-black -z-20 opacity-35 rotate-6`}
          ></div>
          <div
            className={`absolute left-0 right-0 top-0 bottom-0 rounded-4xl bg-black -z-20 opacity-35 -rotate-4`}
          ></div>
          <div
            className={`absolute left-0 right-0 top-0 bottom-0 rounded-4xl bg-black -z-20 opacity-35 rotate-2`}
          ></div>
          {cardContent.map((el, i, arr) => (
            <FadingCard
              key={i}
              isActive={i === cardIndex}
              isNext={(i + 1) % arr.length === cardIndex}
            >
              {el}
            </FadingCard>
          ))}
        </div>
      </div>
    </>
  );
}
function FadingCard({
  isActive,
  isNext,
  children,
}: {
  isActive: boolean;
  isNext: boolean;
  children: ReactNode;
}) {
  const transition = !isActive
    ? isNext
      ? 'translate-x-80 rotate-45 opacity-0'
      : 'opacity-0 -rotate-6 scale-95 '
    : 'opacity-100';
  return (
    <div
      className={`absolute duration-700 transition-all flex flex-col justify-evenly items-center left-0 right-0 top-0 bottom-0 rounded-4xl bg-black md:text-3xl text-xl -z-10 md:p-20 p-10 px-15 text-white ${transition}`}
    >
      <img
        className="absolute right-8 top-8 -z-10"
        src={quotePhoto}
        width={'150px'}
      />
      {children}
    </div>
  );
}
const cardContent = [
  <>
    <text className="block my-6">
      “The perfect personalized experience! Its style fits any space design.”
    </text>
    <img width={'75%'} src={cardPhoto0} />
    <div className="shrink-0 grow" />
    <div className="w-full border-2 my-6 border-[#1D1D1D]" />
    <div className=" w-full flex justify-start gap-10 items-center md:px-10">
      <div className="w-12 h-12 rounded-full bg-white text-[#BABABA] text-4xl">
        <BiUser className="m-auto" />
      </div>
      <text className="font-bold text-2xl">J. Edward</text>
    </div>
  </>,
  <>
    <text className="block my-6">
      “Perfect design and quality. The DOT is truly a new invention to relax.”
    </text>
    <img width={'75%'} src={cardPhoto1} />
    <div className="shrink-0 grow" />
    <div className="w-full border-2 my-6 border-[#1D1D1D]" />
    <div className=" w-full flex justify-start gap-10 items-center md:px-10">
      <div className="w-12 h-12 rounded-full bg-white text-[#BABABA] text-4xl">
        <BiUser className="m-auto" />
      </div>
      <text className="font-bold text-2xl">S. zayed</text>
    </div>
  </>,
  <>
    <text className="block my-6">
      “DE.CI has designed and engineered a new version of its original DOT Chair
      in the form of version 2.1. Providing users with a smart recliner chair
      complete with rotating base, companion smart phone application”
    </text>
    <div className="shrink-0 grow" />
    <div className="w-full border-2 border-[#1D1D1D] my-6" />
    <img src={cardPhoto2} />
  </>,
  <>
    <text className="block my-6">
      “The DOT Chair V2.1 is an intelligent piece of furniture for the modern
      living room that's ready to provide impressive body and posture support
      when relaxing at the end of the day”
    </text>
    <div className="shrink-0 grow" />
    <div className="w-full border-2 border-[#1D1D1D] my-6" />
    <img src={cardPhoto3} />
  </>,
];
