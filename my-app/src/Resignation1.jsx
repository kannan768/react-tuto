import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import praveen from "./assets/praveen.jpg";
const Resignation1 = () => {
  return (
    <>
      <nav>
        <div className="flex items-center bg-gray-800  h-[90px] c">
          <div>
            <IoIosArrowBack className="text-white w-[50px] h-[50px]" />
          </div>
          <div className="relative ml-10 top-8">
            <img
              src={praveen}
              className="w-[115px] h-[115px] rounded-full border-2 border-white"
              alt="Mphasis Logo"
            />
          </div>
          <div className="flex flex-col ml-4 space-y-1">
            <div className="text-3xl font-light text-white">
              View Resignation
            </div>
            <div className="mb-5 text-xl font-light text-white">PRAVEEN A</div>
          </div>
          <div className="relative left-[750px]">
            <button className="px-6 text-white border-2 rounded-md">
              Withdraw
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Resignation1