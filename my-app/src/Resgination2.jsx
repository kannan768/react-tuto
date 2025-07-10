import React from 'react'

const Resgination2 = () => {
  return (
    <>
      <div className="w-full h-screen py-1 bg-slate-200">
        <div className="w-3/5 mx-auto bg-white shadow-lg">
          <div className="p-4 mt-10">
            <span className="text-2xl font-light text-color-black">
              When and Why
            </span>
            <div className="mt-2 border border-slate-400"></div>
            <div className="flex flex-row space-x-20">
              <div className="flex flex-col p-4 mt-4">
                <span className="font-bold">
                  When is the resignation notification date?
                </span>
                <span>21-April-2025</span>
                <span className="mt-2 font-bold">
                  When is the Last working date?
                </span>
                <span>20-July-2025</span>
              </div>
              <div className="flex flex-col mt-8">
                <span className="font-bold ">What's the action name?</span>
                <span>Resignation</span>
                <span className="mt-2 font-bold">*Why are you resigning?</span>
                <span>Vol - Change in Role</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resgination2