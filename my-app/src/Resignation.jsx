import React from 'react'
import mphasislogo from './assets/mphasis-logo.png'
import { RiHomeLine } from "react-icons/ri";
import Resignation1 from './Resignation1'
import Resgination2 from './Resgination2'
import praveen from "./assets/praveen.jpg";
const Resignation = () => {
    return (
      <>
        <div class="flex bg-[#1895d2] w-full h-[50px]">
          <div className="mt-3 ml-4 text-2xl font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth="0.5"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <img
            src={mphasislogo}
            className="mt-1 ml-8 w-30 h-18"
            alt="Mphasis Logo"
          />
          <div className="relative flex justify-end w-full pr-2 mt-3 space-x-3 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="white"
              class="bi bi-search"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth="0.5"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <RiHomeLine className="w-[30px] h-[26px] text-white stroke-white stroke-[0.5]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="white"
              class="bi bi-star"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth="0.5"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="white"
              class="bi bi-flag"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth="0.5"
            >
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="white"
              class="bi bi-bell"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth="0.5"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
            <img
              src={praveen}
              className="relative w-8 h-8 ml-8 border-2 border-white left-6"
              alt="Mphasis Logo"
            />
          </div>
        </div>
        <Resignation1 />
        <Resgination2 />
      </>
    );
}

export default Resignation