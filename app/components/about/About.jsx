"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function About() {
  return (
    <>
      <h1
        className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent text-white font-sans font-bold capitalize px-10 pb-10"
        id="about"
      >
        About Us?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20 max-w-screen-3xl mx-auto mb-10  w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-black"
          className=""
        >
          <div className="max-w-2xl">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Transforming Data Analytics through Innovation
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              At Ravian, we are dedicated to transforming the landscape of data
              analytics through innovation and cutting-edge technology. As
              pioneers in the field, we have developed the worlds leading AI
              data scientist—an intelligent platform that leads the way in
              crafting machine learning and deep learning models, conducting
              comprehensive data analysis, and delivering actionable insights
              through intuitive visualizations.
            </p>
          </div>
          <Image
            src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[30%] grayscale filter bottom-14 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Empowering Businesses with Data Insights
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Our journey began with a vision to empower businesses with the tools
            they need to harness the power of their data and make informed
            decisions that drive success.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-black">
          <div className="max-w-2xl">
            <h2 className="max-w-sm md:max-w-2xl  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Leading the Way in AI-driven Analytics
            </h2>
            <p className="mt-4 max-w-3xl text-left  text-base/6 text-neutral-200">
              Today, Ravian stands at the forefront of AI-driven analytics,
              helping businesses of all sizes unlock the full potential of their
              data assets. Whether you are uncovering hidden patterns,
              predicting future trends, or optimizing operations, Ravian AI is
              your trusted partner in navigating the complexities of data-driven
              decision-making. Join us on this journey as we continue to push
              the boundaries of whats possible in the realm of data analytics.
              Welcome to Ravian AI—where innovation meets intelligence.
            </p>
          </div>
          <Image
            src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-20 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </>
  );
}
