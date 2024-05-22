// import { IoKeyOutline, IoLogInOutline } from "react-icons/io5";

// export default function Sidebar() {
//   return (
//     <div className="p-6 rounded-xl bg-[#2E2E2E] text-white w-2/12 shadow-md shadow-black flex flex-col justify-between">
//       <div className="font-semibold text-xl pb-5 border-b border-gray-600 flex flex-row cursor-pointer">
//         Ravian<p className="text-red-600">.Ai</p>
//       </div>
//       <div className=" flex flex-col border-t border-gray-600 pt-5 gap-5">
//         <div className="flex flex-row items-center gap-3 text-lg hover:scale-105 cursor-pointer duration-300">
//           <IoKeyOutline className=" text-3xl text-red-700" /> Request access
//         </div>
//         <div className="flex flex-row items-center gap-3 text-lg hover:scale-105 cursor-pointer duration-300">
//           <IoLogInOutline className=" text-3xl text-red-700" /> Login
//         </div>
//       </div>
//     </div>
//   );
// }

import ravianmini from "../../../public/ravianmini.png";

import Image from "next/image";
import { IoKeyOutline, IoLogInOutline } from "react-icons/io5";

export default function Sidebar({ expanded }) {
  return (
    <div
      className={`p-6 rounded-xl bg-[#2E2E2E] text-white shadow-md shadow-black flex flex-col justify-between  ${
        expanded ? "w-2/12" : "w-1/24"
      }`}
    >
      <div className="font-semibold text-xl pb-5 border-b border-gray-600 flex flex-row cursor-pointer items-center">
        {expanded && (
          <>
            <Image
              src={ravianmini}
              width={40}
              height={40}
              alt="Picture of the author"
              className="mr-2"
            />
            Ravian<p className="text-[#EF2D7D]">.Ai</p>
          </>
        )}
        {!expanded && (
          <Image
            src={ravianmini}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        )}
      </div>
      <div className="flex flex-col border-t border-gray-600 pt-5 gap-5">
        <div className="flex flex-row items-center gap-3 text-lg hover:scale-105 cursor-pointer duration-300">
          <IoKeyOutline className="text-3xl text-[#EF2D7D]" />
          {expanded && (
            <>
              <span>Request access</span>
            </>
          )}
        </div>
        <div className="flex flex-row items-center gap-3 text-lg hover:scale-105 cursor-pointer duration-300">
          <IoLogInOutline className="text-3xl text-[#EF2D7D]" />
          {expanded && (
            <>
              <span>Login</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
