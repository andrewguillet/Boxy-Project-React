import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows";

export default function ShadowRange({ inputData, shadowID }) {
  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber, // permet de retrouver quel input
        value: e.target.value, // value de input
        shadowID,
      })
    );
  }

  return (
    <div className="my-4">
      <div className="flex justify-between items-baseline">
        <p>{inputData.name}</p>
        <div className="flex items-baseline mb-2">
          <input
            onChange={handleInputs}
            value={inputData.value}
            className="w-14 h-8 mr-2 border border-gray-200 text-center"
            type="number"
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
          onChange={handleInputs}
          value={inputData.value}
          className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer "
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          type="range"
        />
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
