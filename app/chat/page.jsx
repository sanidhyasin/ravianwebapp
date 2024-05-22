"use client";

import { GrAttachment } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";

import { useState } from "react";
import MainModal from "../components/modals/FilesModal";
import InsertFile from "../components/modals/InsertFile";
import ModalThree from "../components/modals/ModalThree";
import UploadPlaybook from "../components/modals/UploadPlaybook";
import Sidebar from "../components/sidebar/Sidebar";

const SidebarToggle = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform left-0 text-[#EF2D7D] cursor-pointer text-2xl"
      onClick={onClick}
    >
      <FaAngleLeft className="font-extralight" />
    </div>
  );
};

export default function ChatPage() {
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const openMainModal = () => {
    setIsMainModalOpen(true);
  };

  const closeMainModal = () => {
    setIsMainModalOpen(false);
  };

  const openModal = (modal) => {
    closeMainModal();
    setActiveModal(modal);
  };

  const closeActiveModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="flex h-screen p-4 w-screen bg-[#242424]">
      <div className="flex flex-row mx-auto w-full gap-5">
        <Sidebar expanded={sidebarExpanded} />
        <div className="relative bg-[#2E2E2E] py-6 rounded-xl text-white w-svw flex flex-col shadow-md shadow-black justify-between">
          <SidebarToggle onClick={toggleSidebar} />
          <div className=" border-b border-gray-600 pb-5  px-10">
            <h1 className="font-roboto font-normal text-2xl pb-2">
              Hey there!
            </h1>
            <h1 className="font-roboto font-normal text-lg text-gray-400 ">
              My name is Ravian.Ai and I am a software engineer. Give me coding
              tasks and I will try my best to solve them!
            </h1>
          </div>

          <div className="px-8">
            <div className="flex flex-row px-5 py-4 rounded-xl bg-[#484848] w-full justify-between items-center">
              <GrAttachment
                onClick={openMainModal}
                className="cursor-pointer hover:scale-110 duration-300"
              />
              <div className=" flex-grow mx-4">
                <input
                  className="w-full bg-transparent border-none outline-none text-white"
                  type="text"
                  placeholder="Give Ravin a task to work on..."
                />
              </div>
              <FaArrowRight className=" hover:scale-110 cursor-pointer duration-300" />
            </div>
          </div>
        </div>
        <MainModal
          isOpen={isMainModalOpen}
          onClose={closeMainModal}
          onOpenModal={openModal}
        />
        {activeModal === "one" && <InsertFile onClose={closeActiveModal} />}
        {activeModal === "two" && <UploadPlaybook onClose={closeActiveModal} />}
        {activeModal === "three" && <ModalThree onClose={closeActiveModal} />}
      </div>
    </div>
  );
}
