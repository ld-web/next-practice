import { useMemo } from "react";
import Loading from "../utils/Loading";
import CheckBadge from "../utils/CheckBadge";
import ExclamationCircle from "../utils/ExclamationCircle";
import { Status } from "./state";

interface SubmitButtonProps {
  status: Status;
}

const SubmitButton = ({ status }: SubmitButtonProps) => {
  const noPass = status === "failed" || status === "error";

  const cssClasses = useMemo(() => {
    switch (status) {
      case "success":
        return "bg-green-500 hover:bg-green-700";
      case "error":
      case "failed":
        return "bg-red-500 hover:bg-red-700";
      default:
        return "bg-orange-500 hover:bg-orange-700";
    }
  }, [status]);

  return (
    <button
      type="submit"
      disabled={status === "running"}
      className={`${cssClasses} px-3 text-white w-full font-bold uppercase py-4 text-xl flex justify-center items-center disabled:bg-gray-400 transition-all duration-300`}
    >
      {/* Icon */}
      {status === "running" && <Loading />}
      {status === "success" && <CheckBadge />}
      {noPass && <ExclamationCircle />}
      {/* Label */}
      {status === "init" && "Tester"}
      {status === "success" && "OK"}
      {noPass && "Réessayer"}
    </button>
  );
};

export default SubmitButton;
