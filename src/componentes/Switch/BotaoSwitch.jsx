import { useEffect, useState } from "react";
import "./style/animation.css";

const BotaoSwitch = ({ onChange, defaultValue = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(defaultValue);
  }, []);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="relative w-max">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleClick}
        className="absolute cursor-pointer left-2  top-0 z-10  h-full w-full opacity-0 input-check"
      />
      <div className="w-[65px] py-1 px-1 bg-black-500 rounded-full flex relative content-switch items-center">
        <h2 className="text-[12px] absolute left-2  font-semibold text-white-principal">
          ON
        </h2>
        <h2 className="text-[11px] absolute right-2 font-semibold text-white-principal">
          OFF
        </h2>
        <button className="p-3  rounded-full bg-white-principal relative   btn-check"></button>
      </div>
    </div>
  );
};

export default BotaoSwitch;
