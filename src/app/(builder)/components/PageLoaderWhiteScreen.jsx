import PulseLoader from "react-spinners/PulseLoader";

export default function PageLoaderWhiteScreen() {
  return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-100">
         <PulseLoader size={12} margin={2} color="#656565" />
      </div>
   );
}

