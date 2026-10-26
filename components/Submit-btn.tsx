import React from "react";
import { FaPaperPlane } from "react-icons/fa";


export default function SubmitBtn({loading}: any) {
  

  return (
    <button
      type="submit"
      className="group mt-2 flex items-center justify-center gap-3 h-11 w-[8rem] text-sm font-medium bg-gray-900 text-white rounded-full outline-none transition hover:bg-gray-950 dark:bg-white/10 dark:hover:bg-white/20 disabled:bg-opacity-65"
      disabled={loading}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}





// import React from "react";
// import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

// export default function SubmitBtn() {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       type="submit"
//       className="group mt-2 flex items-center justify-center gap-4 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-md outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 dark:hover:bg-white/20 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
//       disabled={pending}
//     >
//       {pending ? (
//         <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
//       ) : (
//         <>
//           Submit{" "}
//           <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
//         </>
//       )}
//     </button>
//   );
// }