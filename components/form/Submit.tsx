import {experimental_useFormStatus as useFormStatus} from "react-dom";
import {FaPaperPlane as Plane} from "react-icons/fa6";

const SubmitBtn = () => {
  const {pending} = useFormStatus();

  return (
    <button
      type="submit"
      className="h-[3rem] w-[8rem] bg-[#f3f4f6] text-gray-400 rounded-full outline-none transition-all flex items-center justify-center gap-2 group focus:scale-110 hover:scale-110 hover:text-gray-900 shadow-md border border-white disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-400" />
      ) : (
        <>
          Send
          <Plane className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
