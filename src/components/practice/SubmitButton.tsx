import { useMemo } from "react";
import Loading from "../utils/Loading";
import CheckBadge from "../utils/CheckBadge";
import ExclamationCircle from "../utils/ExclamationCircle";
import { State } from "./state";

interface SubmitButtonProps {
  state: State;
}

const SubmitButton = ({ state }: SubmitButtonProps) => {
  const noPass = state === "failed" || state === "error";

  const cssClasses = useMemo(() => {
    switch (state) {
      case "success":
        return "bg-green-500 hover:bg-green-700";
      case "error":
      case "failed":
        return "bg-red-500 hover:bg-red-700";
      default:
        return "bg-orange-500 hover:bg-orange-700";
    }
  }, [state]);

  return (
    <button
      type="submit"
      disabled={state === "running"}
      className={`${cssClasses} px-3 text-white w-full font-bold uppercase py-4 text-xl flex justify-center items-center disabled:bg-gray-400 transition-all duration-300`}
    >
      {/* Icon */}
      {state === "running" && <Loading />}
      {state === "success" && <CheckBadge />}
      {noPass && <ExclamationCircle />}
      {/* Label */}
      {state === "init" && "Tester"}
      {state === "success" && "OK"}
      {noPass && "Réessayer"}
    </button>
  );
};

export default SubmitButton;
