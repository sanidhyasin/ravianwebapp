"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const content = [
  {
    title: "AI Data Analyst",
    description:
      "Unlock the full potential of your data with RAVIAN AI’s AI Data Analyst. Our platform leverages cutting-edge machine learning algorithms and advanced technologies to transform raw data into actionable insights with precision and speed. From analysis to visualization, our AI Data Analyst is your intelligent partner in data exploration and decision-making. With intuitive features and customizable options, it's designed to streamline your data analysis workflow and empower you to make informed decisions confidently. Experience the next level of data intelligence with RAVIAN AI’s AI Data Analyst.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
          width={450}
          height={450}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Gen AI Vision Analyst",
    description:
      "At RAVIAN AI, we're thrilled to introduce our latest innovation: the Gen AI Vision Analyst. This cutting-edge solution revolutionizes visual intelligence and data analysis. Powered by advanced AI technology, it offers unparalleled precision and speed in understanding visual content. From identifying patterns to detecting anomalies, it provides deep insights for informed decision-making. Flexible and scalable, it seamlessly integrates into existing workflows. Experience the future of visual analytics with the Gen AI Vision Analyst from RAVIAN AI.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
          width={450}
          height={450}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export function Offering() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 1.5 } });
  }, [controls]);
  return (
    <div className="px-10 pt-10">
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent text-white font-sans font-bold capitalize">
        What we offer?
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
