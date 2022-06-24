import { useState } from "react";

const useChecked = () => {
  const [toggle, setToggle] = useState(false);
  const toggleCheck = () => {
    setToggle((prev) => !prev);
  };
  return { toggle, toggleCheck };
};

export default useChecked;
