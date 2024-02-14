import { useState, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowRange from "./ShadowRange";
import ShadowCheckbox from "./ShadowCheckbox";
import { removeShadow } from "../../features/shadows";
import { useDispatch } from "react-redux";

export default function Shadow({ panelNumber, shadow }) {
  const [toggleShadow, setToggleShadow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    }
  });

  return (
    <li className="bg-gray-50 border-b border-gray-3">
      <button
        className=" w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <span>Shadow {panelNumber}</span>
        <img
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          src={Chevron}
          alt=""
          className="font-bold w-5"
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckbox name={"active"} shadowID={shadow.id} />
            <ShadowCheckbox name={"inset"} shadowID={shadow.id} />
            <button
              onClick={() => dispatch(removeShadow(shadow.id))}
              className="px-3 py-1 text-sm ml-auto text-white bg-red-600 hover:bg-red-700"
            >
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
