import { useState } from "react";

export default function useToggleValues(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const handleToggleValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggleValue,
  };
}
