import { useDispatch } from "react-redux";
import { updateBoxValue } from "../../features/boxProperties";

export default function BoxColorPicker({ inputData }) {
  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(
      updateBoxValue({
        inputNumber: inputData.inputNumber, // permet de retrouver quel input
        value: e.target.value, // value de input
      })
    );
  }

  return (
    <div className="mb-4">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        <input
          className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
          type="text"
          value={inputData.value}
          onChange={handleInputs}
        />
        <input
          className="cursor-pointer h-[40px]"
          type="color"
          value={inputData.value}
          onChange={handleInputs}
        />
      </div>
    </div>
  );
}
