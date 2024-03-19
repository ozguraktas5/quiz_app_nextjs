"use client";

import React from "react";
import Image from "next/image";
import * as Slider from "@radix-ui/react-slider";



export default function Home() {
  return (
    <main className="wrapper flex justify-center items-center h-screen">
      <div className="bg-white p-3 rounded-md md:w-[90%] lg:w-[70%] w-full h-full md:h-[70%] lg:h-[70%] shadow-lg max-w-4xl">
        <h1 className="text-center p-2 text-blue-600 text-3xl tracking-wider font-bold">
          Welcome to QuizQuest
        </h1>
        <div className="w-full h-[2px] bg-border bg-slate-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-9 gap-5">
          <div className="h-full relative">
            <Image
              priority
              src="/quiz.png"
              alt="img"
              width="350"
              height="350"
              className="object-cover object-center vertical-middle"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
            <h2 className="text-center tracking-wider text-lg md:text-xl lg:text-2xl font-bold">
              Quiz Settings
            </h2>
            <button
              type="button"
              className="flex h-10 items-center justify-between rounded-md border border-input p-3 text-sm w-full"
            >
              <span className="text-lg">Category</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <button
              type="button"
              className="flex h-10 items-center justify-between rounded-md border border-input p-3 text-sm w-full"
            >
              <span className="text-lg">Difficulty</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <p className="text-sm lg:text-sm font-bold">Total Questions: 10</p>
            <Slider.Root
              className="SliderRoot"
              defaultValue={[10,90]}
              orientation="horizontal"
              step={10}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" />
            </Slider.Root>
          </div>
        </div>
      </div>
    </main>
  );
}
