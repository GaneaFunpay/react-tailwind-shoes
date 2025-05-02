import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

function Select({ title, options, className, value, onChange }) {
  const optionsObjects = options.map((option) => (
    <option key={`${option.name}-${option.value}`} value={option.value}>
      {option.name}
    </option>
  ));

  return (
    <div className="relative text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        name={title}
        value={value || ""}
        className={twMerge(
          `w-24 p-4 cursor-pointer appearance-none border border-gray-300 bg-white ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {optionsObjects}
      </select>
      <div className="pointer-events-none flex-center absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
