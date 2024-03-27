import { useMemo } from "react";
import Loading from "../utils/Loading";
import CheckBadge from "../utils/CheckBadge";
import ExclamationCircle from "../utils/ExclamationCircle";

interface SubmitButtonProps {
  success: boolean | null;
  loading: boolean;
}

const SubmitButton = ({ success, loading }: SubmitButtonProps) => {
  const cssClasses = useMemo(() => {
    if (success === null) {
      return "bg-orange-500 hover:bg-orange-700";
    }

    return success
      ? "bg-green-500 hover:bg-green-700"
      : "bg-red-500 hover:bg-red-700";
  }, [success]);

  return (
    <button
      type="submit"
      disabled={loading}
      className={`${cssClasses} px-3 text-white w-full font-bold uppercase py-4 text-xl flex justify-center items-center disabled:bg-gray-400 transition-all duration-300`}
    >
      {loading && <Loading />}
      {success && <CheckBadge />}
      {success === false && (
        <>
          <ExclamationCircle /> Réessayer
        </>
      )}
      {success && "OK"}
      {success === null && !loading && "Tester"}
    </button>
  );
};

export default SubmitButton;
