import { useState, forwardRef, useImperativeHandle } from "react";

const InputText = forwardRef(({ id }, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return value;
    },
    setEmpty: () => {
      setValue("");
    },
  }));

  return (
    <input
      className="bg-transparent appearance-none border border-violet-400 rounded-[10px] w-full py-2 px-4 text-neutral-500 font-normal leading-tight focus:outline-none focus:border-violet-500"
      id={id}
      type="text"
      value={value}
      placeholder="Add a new task"
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

export default InputText;
